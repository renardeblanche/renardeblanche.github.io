/*
 * Sirkku Igloo · Travel Journal data
 *
 * 数据层次：国家 → 多次旅行 visits → 旅行中的地点 places → 照片 photos
 *
 * 添加一次新旅行时，只需要修改这一份文件。
 * date 建议使用 YYYY-MM-DD / YYYY-MM，便于自动排序；dateLabel 是页面上显示的文字。
 * place.url / visit.url 可留空；有游记时填博客 URL。
 * 照片建议放在 source/images/travel/...，然后写成 /images/travel/...。
 */

export const travelData = [
  {
    country: 'Japan',
	code: 'JP',
    label: '日本',
    note: '日常生活与一次次重新发现的城市。',
    visits: [
      {
        date: '',
        dateLabel: ' ',
        title: '東京都',
        note: '',
        url: '',
        places: [
          {name: '都区部',dateLabel: '',note: '',url: '',photos: []},
		  {name: '立川市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '武蔵野市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '多摩市',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '千葉県',
        note: '',
        url: '',
        places: [
          {name: '千葉市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '木更津市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '富津市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '南房総市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '館山市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '一ノ宮町',dateLabel: '',note: '',url: '',photos: []},
		  {name: '銚子市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '埼玉県',
        note: '',
        url: '',
        places: [
          {name: '久喜市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '春日部市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '神奈川県',
        note: '',
        url: '',
        places: [
          {name: '横浜市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '川崎市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '横須賀市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '逗子市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '鎌倉市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '藤沢市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '箱根町',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '群馬県',
        note: '',
        url: '',
        places: [
          {name: '館林市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '草津町',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '長野県',
        note: '',
        url: '',
        places: [
          {name: '長野市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '松本市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '軽井沢町',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '新潟県',
        note: '',
        url: '',
        places: [
          {name: '湯沢町',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '栃木県',
        note: '',
        url: '',
        places: [
          {name: '日光市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '那須塩原市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '宮城県',
        note: '',
        url: '',
        places: [
          {name: '仙台市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '松島町',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '岩手県',
        note: '',
        url: '',
        places: [
          {name: '平泉町',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '山梨県',
        note: '',
        url: '',
        places: [
          {name: '富士河口湖町',dateLabel: '',note: '',url: '',photos: []},
		  {name: '山梨市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '甲府市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '身延町',dateLabel: '',note: '',url: '',photos: []},
		  {name: '南部町',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '静岡県',
        note: '',
        url: '',
        places: [
          {name: '沼津市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '河津町',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '愛知県',
        note: '',
        url: '',
        places: [
          {name: '名古屋市',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '岐阜県',
        note: '',
        url: '',
        places: [
          {name: '大垣市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '高山市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '飛騨市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '三重県',
        note: '',
        url: '',
        places: [
          {name: '桑名市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '富山県',
        note: '',
        url: '',
        places: [
          {name: '富山市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '高岡市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '砺波市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '南砺市',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '石川県',
        note: '',
        url: '',
        places: [
          {name: '金沢市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '奈良県',
        note: '',
        url: '',
        places: [
          {name: '奈良市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '大阪府',
        note: '',
        url: '',
        places: [
          {name: '大阪市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '京都府',
        note: '',
        url: '',
        places: [
          {name: '京都市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '宇治市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '兵庫県',
        note: '',
        url: '',
        places: [
          {name: '神戸市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '姫路市',dateLabel: '',note: '',url: '',photos: []}
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '琉球',
        note: '',
        url: '',
        places: [
          {name: '那覇市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '南城市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '北谷町',dateLabel: '',note: '',url: '',photos: []},
		  {name: '恩納村',dateLabel: '',note: '',url: '',photos: []},
		  {name: '名護市',dateLabel: '',note: '',url: '',photos: []},
		  {name: '今帰仁村',dateLabel: '',note: '',url: '',photos: []},
        ]
      },
    ]
  },
  {
    country: 'China',
	code: 'CN',
    label: '中国',
    note: '故乡的记录',
    visits: [
	  {
        title: '广东省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '深圳市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '广州市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '珠海市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '东莞市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '肇庆市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '韶关市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '梅州市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '湖南省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '长沙市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '湘潭市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '郴州市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '湖北省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '武汉市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '孝感市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '广西壮族自治区',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '南宁市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '柳州市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '云南省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '昆明市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '丽江市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '大理市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '贵州省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '贵阳市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '遵义市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '重庆市',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '重庆市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '四川省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '成都市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '乐山市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '眉山市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '福建省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '厦门市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '江西省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '南昌市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '浙江省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '杭州市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '上海市',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '上海市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '北京市',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '北京市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '天津市',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '天津市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '江苏省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '南京市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '苏州市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '镇江市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '扬州市', dateLabel: '', note: '', url: '', photos: [] },
        ]
      },
	  {
        title: '陕西省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '西安市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '咸阳市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '延安市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '甘肃省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '兰州市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '酒泉市', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '嘉峪关市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        title: '青海省',
		date: '',
        dateLabel: ' ',
        note: '',
        url: '',
        places: [
          { name: '西宁市', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	]
  },
  {
    country: 'United States',
	code: 'US',
    label: '美国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: ' ',
        title: '纽约州',
        note: '',
        url: '',
        places: [
          { name: 'New York City', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Buffalo', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '马萨诸塞州',
        note: '',
        url: '',
        places: [
          { name: 'Boston', dateLabel: '', note: '', url: '', photos: [] },
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '宾夕法尼亚州',
        note: '',
        url: '',
        places: [
          { name: 'Philadelphia', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '华盛顿哥伦比亚特区',
        note: '',
        url: '',
        places: [
          { name: 'Washington D.C.', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '德克萨斯州',
        note: '',
        url: '',
        places: [
          { name: 'Houston', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '科罗拉多州',
        note: '',
        url: '',
        places: [
          { name: 'Denver', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '怀俄明州',
        note: '',
        url: '',
        places: [
          { name: 'Jackson Hole', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '南达科他州',
        note: '',
        url: '',
        places: [
          { name: 'Mt. Rushmore', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '犹他州',
        note: '',
        url: '',
        places: [
          { name: 'Salt Lake City', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '内华达州',
        note: '',
        url: '',
        places: [
          { name: 'Las Vegas', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: ' ',
        title: '加利福尼亚州',
        note: '',
        url: '',
        places: [
          { name: 'Los Angeles', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Fresno', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'San Francisco', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Thailand',
	code: 'TH',
    label: '泰国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: ' ',
        title: '普吉岛',
        note: '',
        url: '',
        places: [
          { name: 'ภูเก็ต Phuket', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: '记录待补',
        title: '曼谷',
        note: '',
        url: '',
        places: [
          { name: 'กรุงเทพมหานคร Bankok', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Taiwan',
	code: 'TW',
    label: '台湾',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '台北和高雄',
        note: '',
        url: '',
        places: [
          { name: '台北', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '高雄', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'South Korea',
	code: 'KR',
    label: '韩国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '首尔和釜山',
        note: '',
        url: '',
        places: [
          { name: '서울 Seoul', dateLabel: '', note: '', url: '', photos: [] },
		  { name: '부산 Busan', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Singapore',
	code: 'SG',
    label: '新加坡',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '新加坡出差',
        note: '',
        url: '',
        places: [
          { name: 'Singapura', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Portugal',
	code: 'PT',
    label: '葡萄牙',
    note: '大西洋、坡道、电车与语言。',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '里斯本',
        note: '',
        url: '',
        places: [
          { name: 'Lisboa', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Sintra', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Australia',
	code: 'AU',
    label: '澳大利亚',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '墨尔本与悉尼',
        note: '',
        url: '',
        places: [
          { name: 'Melbourne', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Golden Coast', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Sydney', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Finland',
	code: 'FI',
    label: '芬兰',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '赫尔辛基转机出城游玩',
        note: '',
        url: '',
        places: [
          { name: 'Helsinki', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Belgium',
	code: 'BE',
    label: '比利时',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: 'Luxembourg Pride 2026回荷兰路上',
        note: '',
        url: '',
        places: [
          { name: 'Liège', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Luxembourg',
	code: 'LU',
    label: '卢森堡',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: 'Luxembourg Pride 2026',
        note: '',
        url: '',
        places: [
          { name: 'Stad Lëtzebuerg', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'United Kindom',
	code: 'GB',
    label: '英国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '伦敦',
        note: '',
        url: '',
        places: [
          { name: 'London', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'France',
	code: 'FR',
    label: '法国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '巴黎出差',
        note: '',
        url: '',
        places: [
          { name: 'Paris', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Germany',
	code: 'DE',
    label: '德国',
    note: ' ',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '四城记',
        note: '',
        url: '',
        places: [
          { name: 'Berlin', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Hamburg', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Leipzig', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Frankfurt am Main', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Netherlands',
	code: 'NL',
    label: '荷兰',
    note: ' ',
    visits: [
	  {
        date: '',
        dateLabel: '记录待补',
        title: 'Vrij Universitat',
        note: '',
        url: '',
        places: [
		  { name: 'Amsterdam', dateLabel: '', note: '', url: '', photos: [] }
        ]
      },
	  {
        date: '',
        dateLabel: '记录待补',
        title: 'Leiden Linguistics Summer School 2025',
        note: '',
        url: '',
        places: [
          { name: 'Leiden', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Amsterdam', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Den Haag', dateLabel: '', note: '', url: '', photos: [] },
        ]
      },
      {
        date: '',
        dateLabel: '记录待补',
        title: 'Leiden Linguistics Summer School 2026',
        note: '',
        url: '',
        places: [
          { name: 'Leiden', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Amsterdam', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Delft', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Utrecht', dateLabel: '', note: '', url: '', photos: [] },
        ]
      }
    ]
  },
  {
    country: 'Spain',
	code: 'ES',
    label: '西班牙',
    note: '',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '马德里与巴塞罗那',
        note: '',
        url: '',
        places: [
          { name: 'Madrid', dateLabel: '', note: '', url: '', photos: [] },
		  { name: 'Toledo', dateLabel: '', note: '', url: '', photos: [] },
          { name: 'Barcelona', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  },
  {
    country: 'Iceland',
	code: 'IS',
    label: '冰岛',
    note: '风、熔岩与北大西洋的光。',
    visits: [
      {
        date: '',
        dateLabel: '记录待补',
        title: '冰岛南部和西部半岛',
        note: '',
        url: '',
        places: [
		  {name: 'Reykjavík', dateLabel: '', note: '', url: '', photos: [] },
          {name: 'Keflavík', dateLabel: '', note: '', url: '', photos: [] },
		  {name: 'Vik', dateLabel: '', note: '', url: '', photos: [] },
		  {name: 'Kirkjubæjarklaustur', dateLabel: '', note: '', url: '', photos: [] },
		  {name: 'Selfoss', dateLabel: '', note: '', url: '', photos: [] },
		  {name: 'Borgarnes', dateLabel: '', note: '', url: '', photos: [] },
		  {name: 'Grundarfjörður', dateLabel: '', note: '', url: '', photos: [] }
        ]
      }
    ]
  }
];

// Natural Earth / world-atlas 中少数国家的英文名称与日常写法不同。
export const countryAliases = {
  'South Korea': 'South Korea',
  'Korea': 'South Korea',

  'Czech Republic': 'Czechia',
  'Czechia': 'Czechia',

  'United States': 'United States of America',
  'USA': 'United States of America',
  'US': 'United States of America',

  'United Kingdom': 'United Kingdom',
  'UK': 'United Kingdom',
  'Britain': 'United Kingdom',
  'Great Britain': 'United Kingdom'
};

/*
 * 复制模板：
 *
 * {
 *   country: 'Ireland',
 *   label: '爱尔兰',
 *   note: '国家级的一句话印象。',
 *   visits: [
 *     {
 *       date: '2027-04',
 *       dateLabel: '2027年4月',
 *       title: '大西洋边的一周',
 *       note: '这一趟旅行的总备注。',
 *       url: '/2027/05/01/ireland/',
 *       places: [
 *         {
 *           name: '都柏林',
 *           dateLabel: '4月25–27日',
 *           note: '城市备注。',
 *           url: '/2027/05/01/dublin/',
 *           photos: [
 *             {
 *               src: '/images/travel/ireland/dublin-01.jpg',
 *               alt: '都柏林街景',
 *               caption: '四月的都柏林'
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
