import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';
import { feature } from 'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm';
import world from 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json/+esm';
import { travelData, countryAliases } from '/js/world-travel-data.js';

const svg = d3.select('#world-map');
const loading = document.querySelector('#world-map-loading');
const tooltip = document.querySelector('#world-map-tooltip');
const detail = document.querySelector('#world-travel-detail');
const list = document.querySelector('#visited-country-list');
const lightbox = document.querySelector('#world-travel-lightbox');
const lightboxImage = document.querySelector('#world-travel-lightbox-image');
const lightboxCaption = document.querySelector('#world-travel-lightbox-caption');
const lightboxClose = document.querySelector('.world-travel__lightbox-close');

const escapeHtml = value => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const normalizedData = travelData.map(item => ({
  ...item,
  visits: Array.isArray(item.visits) ? item.visits : [],
  mapName: countryAliases[item.country] || item.country
}));

const visitedByName = new Map(normalizedData.map(item => [item.mapName, item]));
let selectedCountryName = null;

function allPlaces(item) {
  return (item.visits || []).flatMap(visit => visit.places || []);
}

function uniquePlaceNames(item) {
  return [...new Set(allPlaces(item).map(place => place.name).filter(Boolean))];
}

function countPlaces() {
  return new Set(normalizedData.flatMap(item => uniquePlaceNames(item).map(place => `${item.country}:${place}`))).size;
}

function countTrips() {
  return normalizedData.reduce((sum, item) => sum + (item.visits?.length || 0), 0);
}

function flagMarkup(item, variant = 'small') {
  const code = String(item?.code || '').trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) return '';
  const className = variant === 'title'
    ? 'world-travel__flag world-travel__flag--title'
    : 'world-travel__flag world-travel__flag--small';
  return `<img class="${className}" src="/images/flags/${code}.svg" alt="" aria-hidden="true" loading="lazy">`;
}

document.querySelector('#visited-country-count').textContent = normalizedData.length;
document.querySelector('#visited-place-count').textContent = countPlaces();
document.querySelector('#visited-trip-count').textContent = countTrips();

function sortVisits(visits) {
  return visits.slice().sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return String(b.date).localeCompare(String(a.date));
  });
}

function renderVisitedList() {
  if (!list) return;
  list.innerHTML = '';

  normalizedData
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label, 'zh-CN'))
    .forEach(item => {
      const button = document.createElement('button');
      const placeCount = uniquePlaceNames(item).length;
      const tripCount = item.visits?.length || 0;
      button.type = 'button';
      button.className = 'world-travel__country-chip';
      button.dataset.country = item.mapName;
      button.innerHTML = `
        <span class="world-travel__country-chip-name">${flagMarkup(item)}<span>${escapeHtml(item.label)}</span></span>
        <small>${placeCount} places · ${tripCount} notes</small>`;
      button.addEventListener('click', () => selectCountry(item));
      list.appendChild(button);
    });
}

function renderPhoto(photo, placeName, index) {
  if (!photo?.src) return '';
  const caption = photo.caption || photo.alt || placeName;
  return `
    <button class="world-travel__photo" type="button"
      data-photo-src="${escapeHtml(photo.src)}"
      data-photo-alt="${escapeHtml(photo.alt || caption)}"
      data-photo-caption="${escapeHtml(caption)}"
      aria-label="查看${escapeHtml(placeName)}照片 ${index + 1}">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || caption)}" loading="lazy">
      ${photo.caption ? `<span>${escapeHtml(photo.caption)}</span>` : ''}
    </button>`;
}

function renderPlace(place) {
  const photos = Array.isArray(place.photos) ? place.photos.filter(photo => photo?.src) : [];
  return `
    <article class="world-travel__place-card">
      <header class="world-travel__place-header">
        <div>
          <h4>${escapeHtml(place.name || '未命名地点')}</h4>
          ${place.dateLabel ? `<p>${escapeHtml(place.dateLabel)}</p>` : ''}
        </div>
        ${place.url ? `<a href="${escapeHtml(place.url)}">游记 ↗</a>` : ''}
      </header>
      ${place.note ? `<p class="world-travel__place-note">${escapeHtml(place.note)}</p>` : ''}
      ${photos.length ? `<div class="world-travel__photos">${photos.map((photo, index) => renderPhoto(photo, place.name, index)).join('')}</div>` : ''}
    </article>`;
}

function renderVisit(visit, index) {
  const places = Array.isArray(visit.places) ? visit.places : [];
  return `
    <article class="world-travel__visit">
      <div class="world-travel__visit-marker" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span></div>
      <div class="world-travel__visit-body">
        <header class="world-travel__visit-header">
          <div>
            <p class="world-travel__visit-date">${escapeHtml(visit.dateLabel || visit.date || '日期待补')}</p>
            <h3>${escapeHtml(visit.title || '旅行记录')}</h3>
          </div>
          ${visit.url ? `<a class="world-travel__visit-link" href="${escapeHtml(visit.url)}">整篇手记 →</a>` : ''}
        </header>
        ${visit.note ? `<p class="world-travel__visit-note">${escapeHtml(visit.note)}</p>` : ''}
        ${places.length
          ? `<div class="world-travel__places">${places.map(renderPlace).join('')}</div>`
          : `<p class="world-travel__no-city">这一趟旅行的地点记录还没有补上。</p>`}
      </div>
    </article>`;
}

function bindPhotoButtons() {
  detail?.querySelectorAll('.world-travel__photo').forEach(button => {
    const image = button.querySelector('img');
    image?.addEventListener('error', () => button.remove(), { once: true });
    button.addEventListener('click', () => openLightbox(
      button.dataset.photoSrc,
      button.dataset.photoAlt,
      button.dataset.photoCaption
    ));
  });
}

function showDetail(item) {
  if (!detail) return;
  const visits = sortVisits(item.visits || []);
  const places = uniquePlaceNames(item);
  const countryMeta = [
    visits.length ? `${visits.length} 次记录` : '旅行记录待补',
    places.length ? `${places.length} 个地点` : null
  ].filter(Boolean).join(' · ');

  detail.innerHTML = `
    <div class="world-travel__country-journal">
      <header class="world-travel__country-header">

  <div class="world-travel__country-kicker">
    <span class="world-travel__bookmark">旅</span>
    <p class="world-travel__detail-kicker">
      TRAVEL NOTEBOOK
    </p>
  </div>


  <div class="world-travel__country-title">

    ${flagMarkup(item, 'title')}

    <div class="world-travel__country-name">
      <h2>${escapeHtml(item.label)}</h2>
      <p>${escapeHtml(item.country || '')}</p>
    </div>

  </div>


  <p class="world-travel__country-meta">
    ${escapeHtml(countryMeta)}
  </p>


  ${item.note 
    ? `<p class="world-travel__country-note">
        ${escapeHtml(item.note)}
       </p>`
    : ''
  }

</header>
      ${visits.length
        ? `<div class="world-travel__timeline">${visits.map(renderVisit).join('')}</div>`
        : `<div class="world-travel__journal-empty"><p>这个国家已经点亮，旅行日期、城市与照片还可以慢慢补进来。</p></div>`}
    </div>`;

  bindPhotoButtons();
}

function selectCountry(item) {
  selectedCountryName = item.mapName;
  showDetail(item);
  updateSelectedState();
  detail?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateSelectedState() {
  svg.selectAll('.world-travel__country')
    .classed('is-selected', d => d.properties?.name === selectedCountryName);

  list?.querySelectorAll('.world-travel__country-chip').forEach(button => {
    button.classList.toggle('is-selected', button.dataset.country === selectedCountryName);
  });
}

function positionTooltip(event, text, visited) {
  if (!tooltip) return;
  tooltip.textContent = visited ? `${text} · 去过` : text;
  tooltip.classList.add('is-visible');
  const wrap = document.querySelector('.world-travel__map-wrap');
  const rect = wrap.getBoundingClientRect();
  tooltip.style.left = `${event.clientX - rect.left + 12}px`;
  tooltip.style.top = `${event.clientY - rect.top + 12}px`;
}

function hideTooltip() {
  tooltip?.classList.remove('is-visible');
}

function openLightbox(src, alt = '', caption = '') {
  if (!lightbox || !lightboxImage || !src) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || caption;
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('world-travel-lightbox-open');
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('world-travel-lightbox-open');
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) closeLightbox();
});

function renderMap() {
  try {
    const countries = feature(world, world.objects.countries);
    const width = 1100;
    const height = 570;

    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const projection = d3.geoNaturalEarth1();
    projection.fitExtent([[12, 18], [width - 12, height - 18]], countries);
    const path = d3.geoPath(projection);

    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'world-travel__sphere')
      .attr('d', path);

    const group = svg.append('g').attr('class', 'world-travel__countries');

    group.selectAll('path')
      .data(countries.features)
      .join('path')
      .attr('d', path)
      .attr('class', d => visitedByName.has(d.properties?.name)
        ? 'world-travel__country is-visited'
        : 'world-travel__country')
      .attr('tabindex', d => visitedByName.has(d.properties?.name) ? 0 : -1)
      .attr('aria-label', d => {
        const item = visitedByName.get(d.properties?.name);
        return item ? `${item.label}，去过` : d.properties?.name || '国家';
      })
      .on('pointermove', (event, d) => {
        const item = visitedByName.get(d.properties?.name);
        positionTooltip(event, item?.label || d.properties?.name || 'Unknown', Boolean(item));
      })
      .on('pointerleave', hideTooltip)
      .on('click', (_, d) => {
        const item = visitedByName.get(d.properties?.name);
        if (item) selectCountry(item);
      })
      .on('keydown', (event, d) => {
        if (event.key === 'Enter' || event.key === ' ') {
          const item = visitedByName.get(d.properties?.name);
          if (item) {
            event.preventDefault();
            selectCountry(item);
          }
        }
      });

    if (loading) loading.remove();
  } catch (error) {
    console.error('World map rendering failed:', error);
    if (loading) loading.textContent = '地图暂时没有展开，请稍后刷新。';
  }
}

renderVisitedList();
renderMap();
