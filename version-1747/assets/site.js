const SEARCH_INDEX = [
  {
    "title": "天河",
    "url": "movie-1.html",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，灾难，传记",
    "category": "纪录综艺",
    "cover": "./1.jpg"
  },
  {
    "title": "五路追杀令",
    "url": "movie-2.html",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "动作，犯罪，惊悚",
    "category": "动漫动画",
    "cover": "./2.jpg"
  },
  {
    "title": "金钻鼠王",
    "url": "movie-3.html",
    "year": "2023",
    "region": "法国",
    "type": "动画电影",
    "genre": "奇幻，冒险",
    "category": "爱情喜剧",
    "cover": "./3.jpg"
  },
  {
    "title": "八达城英雄传",
    "url": "movie-4.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪，剧情",
    "category": "热门剧集",
    "cover": "./4.jpg"
  },
  {
    "title": "未来蛮荒战",
    "url": "movie-5.html",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻, 动作, 末世, 冒险",
    "category": "华语专区",
    "cover": "./5.jpg"
  },
  {
    "title": "灰",
    "url": "movie-6.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 心理",
    "category": "动漫动画",
    "cover": "./6.jpg"
  },
  {
    "title": "德州电锯杀人狂2022",
    "url": "movie-7.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "华语专区",
    "cover": "./7.jpg"
  },
  {
    "title": "唤风者",
    "url": "movie-8.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 冒险, 家庭",
    "category": "动漫动画",
    "cover": "./8.jpg"
  },
  {
    "title": "沼泽地里的秘密",
    "url": "movie-9.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑",
    "category": "热门剧集",
    "cover": "./9.jpg"
  },
  {
    "title": "山东响马",
    "url": "movie-10.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠动作",
    "category": "精选电影",
    "cover": "./10.jpg"
  },
  {
    "title": "视觉侦探日暮旅人",
    "url": "movie-11.html",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑 / 刑侦 / 奇幻",
    "category": "悬疑惊悚",
    "cover": "./11.jpg"
  },
  {
    "title": "太空行者",
    "url": "movie-12.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑",
    "category": "华语专区",
    "cover": "./12.jpg"
  },
  {
    "title": "清官难审",
    "url": "movie-13.html",
    "year": "1996",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧",
    "category": "纪录综艺",
    "cover": "./13.jpg"
  },
  {
    "title": "催命符之劫后重生",
    "url": "movie-14.html",
    "year": "2017",
    "region": "中国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./14.jpg"
  },
  {
    "title": "关云长",
    "url": "movie-15.html",
    "year": "2011",
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "genre": "历史 / 动作 / 传记",
    "category": "全球佳片",
    "cover": "./15.jpg"
  },
  {
    "title": "指环王2：双塔奇兵",
    "url": "movie-16.html",
    "year": "2002",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 冒险",
    "category": "华语专区",
    "cover": "./16.jpg"
  },
  {
    "title": "诚实的锁",
    "url": "movie-17.html",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/剧情/犯罪",
    "category": "动漫动画",
    "cover": "./17.jpg"
  },
  {
    "title": "甲方乙方",
    "url": "movie-18.html",
    "year": "1997",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "精选电影",
    "cover": "./18.jpg"
  },
  {
    "title": "航空情侠",
    "url": "movie-19.html",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 爱情",
    "category": "科幻奇幻",
    "cover": "./19.jpg"
  },
  {
    "title": "红色八爪女",
    "url": "movie-20.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 悬疑 / 犯罪",
    "category": "精选电影",
    "cover": "./20.jpg"
  },
  {
    "title": "农家十二月",
    "url": "movie-21.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "动作犯罪",
    "cover": "./21.jpg"
  },
  {
    "title": "女屠夫",
    "url": "movie-22.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚, 犯罪, 动作",
    "category": "悬疑惊悚",
    "cover": "./22.jpg"
  },
  {
    "title": "光荣时刻",
    "url": "movie-23.html",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "传记, 历史, 体育",
    "category": "动漫动画",
    "cover": "./23.jpg"
  },
  {
    "title": "偷窥",
    "url": "movie-24.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚 / 情色 / 心理",
    "category": "精选电影",
    "cover": "./24.jpg"
  },
  {
    "title": "鬼魂的传讯",
    "url": "movie-25.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "科幻奇幻",
    "cover": "./25.jpg"
  },
  {
    "title": "牛仔大对决",
    "url": "movie-26.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 西部",
    "category": "全球佳片",
    "cover": "./26.jpg"
  },
  {
    "title": "未来，未来",
    "url": "movie-27.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 剧情",
    "category": "爱情喜剧",
    "cover": "./27.jpg"
  },
  {
    "title": "她的强盗朋友",
    "url": "movie-28.html",
    "year": "1932",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 犯罪 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./28.jpg"
  },
  {
    "title": "时光尽头的恋人",
    "url": "movie-29.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "爱情， 奇幻， 剧情",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "独来独往的风车",
    "url": "movie-30.html",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 心理",
    "category": "热门剧集",
    "cover": "./30.jpg"
  },
  {
    "title": "南方公园：流量大战2",
    "url": "movie-31.html",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "喜剧 / 动画",
    "category": "热门剧集",
    "cover": "./31.jpg"
  },
  {
    "title": "杰克与豆茎：从前从前以后",
    "url": "movie-32.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 冒险, 喜剧",
    "category": "华语专区",
    "cover": "./32.jpg"
  },
  {
    "title": "快乐舞年级",
    "url": "movie-33.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 舞蹈",
    "category": "华语专区",
    "cover": "./33.jpg"
  },
  {
    "title": "十年后的电影票",
    "url": "movie-34.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "动漫动画",
    "cover": "./34.jpg"
  },
  {
    "title": "万字",
    "url": "movie-35.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情历史",
    "category": "科幻奇幻",
    "cover": "./35.jpg"
  },
  {
    "title": "芭比逐梦大都会",
    "url": "movie-36.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画， 冒险， 音乐",
    "category": "华语专区",
    "cover": "./36.jpg"
  },
  {
    "title": "生锈桥王",
    "url": "movie-37.html",
    "year": "1984",
    "region": "香港",
    "type": "电视剧集",
    "genre": "剧情， 动作， 怀旧",
    "category": "华语专区",
    "cover": "./37.jpg"
  },
  {
    "title": "蓝风衣",
    "url": "movie-38.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "科幻奇幻",
    "cover": "./38.jpg"
  },
  {
    "title": "医学之旅",
    "url": "movie-39.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 职业",
    "category": "精选电影",
    "cover": "./39.jpg"
  },
  {
    "title": "头号型动派",
    "url": "movie-40.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "健康 / 真人秀",
    "category": "纪录综艺",
    "cover": "./40.jpg"
  },
  {
    "title": "猛鬼电王",
    "url": "movie-41.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 科幻",
    "category": "动漫动画",
    "cover": "./41.jpg"
  },
  {
    "title": "五月八月",
    "url": "movie-42.html",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 战争 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./42.jpg"
  },
  {
    "title": "求生极乐号",
    "url": "movie-43.html",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 科幻",
    "category": "华语专区",
    "cover": "./43.jpg"
  },
  {
    "title": "樱花革命：花开时的少女们",
    "url": "movie-44.html",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "历史 / 战争 / 青春 / 剧情",
    "category": "科幻奇幻",
    "cover": "./44.jpg"
  },
  {
    "title": "失魂舍伍德第二季",
    "url": "movie-45.html",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑, 惊悚, 犯罪",
    "category": "动漫动画",
    "cover": "./45.jpg"
  },
  {
    "title": "蚂蚁很忙",
    "url": "movie-46.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "科幻奇幻",
    "cover": "./46.jpg"
  },
  {
    "title": "火星情报局第七季",
    "url": "movie-47.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺 / 12期",
    "genre": "脱口秀 / 喜剧 / 推理",
    "category": "华语专区",
    "cover": "./47.jpg"
  },
  {
    "title": "忽然七日",
    "url": "movie-48.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 奇幻",
    "category": "华语专区",
    "cover": "./48.jpg"
  },
  {
    "title": "石油大亨",
    "url": "movie-49.html",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "商战历史",
    "category": "动作犯罪",
    "cover": "./49.jpg"
  },
  {
    "title": "斯泰拉做出格",
    "url": "movie-50.html",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "科幻奇幻",
    "cover": "./50.jpg"
  },
  {
    "title": "雨色可可第四季",
    "url": "movie-51.html",
    "year": "2016",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 日常, 泡面番",
    "category": "悬疑惊悚",
    "cover": "./51.jpg"
  },
  {
    "title": "五伙伴历险记4",
    "url": "movie-52.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 冒险 / 家庭",
    "category": "爱情喜剧",
    "cover": "./52.jpg"
  },
  {
    "title": "如何在俄亥俄州跳舞",
    "url": "movie-53.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "爱情喜剧",
    "cover": "./53.jpg"
  },
  {
    "title": "爱之尽",
    "url": "movie-54.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，爱情，家庭",
    "category": "华语专区",
    "cover": "./54.jpg"
  },
  {
    "title": "搞鬼公馆大电影",
    "url": "movie-55.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "动作犯罪",
    "cover": "./55.jpg"
  },
  {
    "title": "陆小凤之凤舞九天国语",
    "url": "movie-56.html",
    "year": "2001",
    "region": "中国大陆 / 中国香港",
    "type": "电视剧",
    "genre": "武侠 / 古装 / 悬疑",
    "category": "动作犯罪",
    "cover": "./56.jpg"
  },
  {
    "title": "夺命赌局",
    "url": "movie-57.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "科幻奇幻",
    "cover": "./57.jpg"
  },
  {
    "title": "冰与火的青春",
    "url": "movie-58.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "青春，运动",
    "category": "爱情喜剧",
    "cover": "./58.jpg"
  },
  {
    "title": "初来乍到",
    "url": "movie-59.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "喜剧、剧情、都市",
    "category": "动漫动画",
    "cover": "./59.jpg"
  },
  {
    "title": "亲爱的隐居先生",
    "url": "movie-60.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/剧情",
    "category": "热门剧集",
    "cover": "./60.jpg"
  },
  {
    "title": "空气人形",
    "url": "movie-61.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻",
    "category": "全球佳片",
    "cover": "./61.jpg"
  },
  {
    "title": "即便明天世界终结",
    "url": "movie-62.html",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻灾难",
    "category": "悬疑惊悚",
    "cover": "./62.jpg"
  },
  {
    "title": "甜蜜的事业",
    "url": "movie-63.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "category": "热门剧集",
    "cover": "./63.jpg"
  },
  {
    "title": "大丹麦狗马默杜克",
    "url": "movie-64.html",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./64.jpg"
  },
  {
    "title": "宝贝计划粤语",
    "url": "movie-65.html",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 喜剧， 家庭",
    "category": "动作犯罪",
    "cover": "./65.jpg"
  },
  {
    "title": "风尘知已",
    "url": "movie-66.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 年代",
    "category": "华语专区",
    "cover": "./66.jpg"
  },
  {
    "title": "湿沙咖啡馆",
    "url": "movie-67.html",
    "year": "2024",
    "region": "希腊",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "全球佳片",
    "cover": "./67.jpg"
  },
  {
    "title": "寻找罗尼",
    "url": "movie-68.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "category": "动漫动画",
    "cover": "./68.jpg"
  },
  {
    "title": "雷震子：封神缘起",
    "url": "movie-69.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作",
    "category": "动漫动画",
    "cover": "./69.jpg"
  },
  {
    "title": "阳台上的派对",
    "url": "movie-70.html",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "热门剧集",
    "cover": "./70.jpg"
  },
  {
    "title": "敢死队2",
    "url": "movie-71.html",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "动作",
    "category": "动漫动画",
    "cover": "./71.jpg"
  },
  {
    "title": "夜总会秘密",
    "url": "movie-72.html",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 黑色电影",
    "category": "纪录综艺",
    "cover": "./72.jpg"
  },
  {
    "title": "笼子在寻找小鸟",
    "url": "movie-73.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "全球佳片",
    "cover": "./73.jpg"
  },
  {
    "title": "地平线系列：太阳系的结局",
    "url": "movie-74.html",
    "year": "2027",
    "region": "英国",
    "type": "纪录片",
    "genre": "科普、天文、科幻式纪实",
    "category": "华语专区",
    "cover": "./74.jpg"
  },
  {
    "title": "度假营的自白",
    "url": "movie-75.html",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情，悬疑，犯罪",
    "category": "热门剧集",
    "cover": "./75.jpg"
  },
  {
    "title": "彼岸花1958",
    "url": "movie-76.html",
    "year": "2008",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 文艺 / 年代",
    "category": "热门剧集",
    "cover": "./76.jpg"
  },
  {
    "title": "泡菜爱上小龙虾",
    "url": "movie-77.html",
    "year": "2024",
    "region": "韩国/中国大陆",
    "type": "电影",
    "genre": "爱情, 喜剧, 美食",
    "category": "动作犯罪",
    "cover": "./77.jpg"
  },
  {
    "title": "哭泣宝贝",
    "url": "movie-78.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑 / 家庭",
    "category": "纪录综艺",
    "cover": "./78.jpg"
  },
  {
    "title": "余生",
    "url": "movie-79.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 剧情, 医疗",
    "category": "全球佳片",
    "cover": "./79.jpg"
  },
  {
    "title": "移动迷宫2",
    "url": "movie-80.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，惊悚",
    "category": "纪录综艺",
    "cover": "./80.jpg"
  },
  {
    "title": "小岛上的决斗",
    "url": "movie-81.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 动作",
    "category": "精选电影",
    "cover": "./81.jpg"
  },
  {
    "title": "重量三角战",
    "url": "movie-82.html",
    "year": "2020",
    "region": "马来西亚",
    "type": "电影",
    "genre": "运动，剧情",
    "category": "纪录综艺",
    "cover": "./82.jpg"
  },
  {
    "title": "游轮上的圣诞节",
    "url": "movie-83.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "爱情喜剧悬疑",
    "category": "动漫动画",
    "cover": "./83.jpg"
  },
  {
    "title": "神气活现第2集",
    "url": "movie-84.html",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 爱情",
    "category": "华语专区",
    "cover": "./84.jpg"
  },
  {
    "title": "僵尸国度第一季",
    "url": "movie-85.html",
    "year": "2014",
    "region": "美国",
    "type": "剧集",
    "genre": "动作、恐怖、喜剧",
    "category": "热门剧集",
    "cover": "./85.jpg"
  },
  {
    "title": "处之泰然",
    "url": "movie-86.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧 / 家庭 / 人生",
    "category": "科幻奇幻",
    "cover": "./86.jpg"
  },
  {
    "title": "爱情热线",
    "url": "movie-87.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "动漫动画",
    "cover": "./87.jpg"
  },
  {
    "title": "野花",
    "url": "movie-88.html",
    "year": "2026",
    "region": "大陆",
    "type": "Movie",
    "genre": "剧情, 文艺, 家庭",
    "category": "悬疑惊悚",
    "cover": "./88.jpg"
  },
  {
    "title": "阴儿房第3章：从灵开始",
    "url": "movie-89.html",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "恐怖",
    "category": "科幻奇幻",
    "cover": "./89.jpg"
  },
  {
    "title": "空投艳史",
    "url": "movie-90.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 爱情 / 剧情",
    "category": "全球佳片",
    "cover": "./90.jpg"
  },
  {
    "title": "捣乱剧团在怪兽之地",
    "url": "movie-91.html",
    "year": "1985",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 冒险",
    "category": "全球佳片",
    "cover": "./91.jpg"
  },
  {
    "title": "横越西非洲",
    "url": "movie-92.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "冒险公路",
    "category": "全球佳片",
    "cover": "./92.jpg"
  },
  {
    "title": "浪漫之旅",
    "url": "movie-93.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 公路 / 喜剧",
    "category": "悬疑惊悚",
    "cover": "./93.jpg"
  },
  {
    "title": "栀子花开",
    "url": "movie-94.html",
    "year": "2015",
    "region": "中国内地",
    "type": "电影",
    "genre": "爱情 / 青春 / 音乐",
    "category": "精选电影",
    "cover": "./94.jpg"
  },
  {
    "title": "曼哈顿的三个房间",
    "url": "movie-95.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，爱情",
    "category": "爱情喜剧",
    "cover": "./95.jpg"
  },
  {
    "title": "鸳鸯梦",
    "url": "movie-96.html",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "爱情, 剧情, 奇幻",
    "category": "爱情喜剧",
    "cover": "./96.jpg"
  },
  {
    "title": "爱侣",
    "url": "movie-97.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚, 爱情",
    "category": "动作犯罪",
    "cover": "./97.jpg"
  },
  {
    "title": "安培逊大族",
    "url": "movie-98.html",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "精选电影",
    "cover": "./98.jpg"
  },
  {
    "title": "我杀了我妈妈",
    "url": "movie-99.html",
    "year": "2009",
    "region": "加拿大 / 法国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 传记",
    "category": "动作犯罪",
    "cover": "./99.jpg"
  },
  {
    "title": "国家宝藏：古籍秘辛",
    "url": "movie-100.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 冒险 / 悬疑",
    "category": "纪录综艺",
    "cover": "./100.jpg"
  },
  {
    "title": "御前侍卫",
    "url": "movie-101.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装动作",
    "category": "全球佳片",
    "cover": "./101.jpg"
  },
  {
    "title": "小医生",
    "url": "movie-102.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "医疗、成长",
    "category": "悬疑惊悚",
    "cover": "./102.jpg"
  },
  {
    "title": "她的危险游戏",
    "url": "movie-103.html",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "category": "华语专区",
    "cover": "./103.jpg"
  },
  {
    "title": "一路不回头",
    "url": "movie-104.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 公路",
    "category": "动作犯罪",
    "cover": "./104.jpg"
  },
  {
    "title": "无情海",
    "url": "movie-105.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚, 灾难, 剧情",
    "category": "精选电影",
    "cover": "./105.jpg"
  },
  {
    "title": "画家村",
    "url": "movie-106.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./106.jpg"
  },
  {
    "title": "邀请函",
    "url": "movie-107.html",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "动漫动画",
    "cover": "./107.jpg"
  },
  {
    "title": "杰克伦敦",
    "url": "movie-108.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "category": "悬疑惊悚",
    "cover": "./108.jpg"
  },
  {
    "title": "明星大侦探第二季",
    "url": "movie-109.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "TV Show",
    "genre": "悬疑、推理",
    "category": "悬疑惊悚",
    "cover": "./109.jpg"
  },
  {
    "title": "白狮",
    "url": "movie-110.html",
    "year": "2020",
    "region": "南非",
    "type": "电影",
    "genre": "冒险、家庭",
    "category": "悬疑惊悚",
    "cover": "./110.jpg"
  },
  {
    "title": "温暖的弦",
    "url": "movie-111.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "category": "动作犯罪",
    "cover": "./111.jpg"
  },
  {
    "title": "末路狂花",
    "url": "movie-112.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 冒险",
    "category": "热门剧集",
    "cover": "./112.jpg"
  },
  {
    "title": "山田茂",
    "url": "movie-113.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 传记",
    "category": "纪录综艺",
    "cover": "./113.jpg"
  },
  {
    "title": "事与愿违的不死冒险者",
    "url": "movie-114.html",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "冒险， 奇幻， 黑暗",
    "category": "动漫动画",
    "cover": "./114.jpg"
  },
  {
    "title": "我要回高三",
    "url": "movie-115.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "category": "纪录综艺",
    "cover": "./115.jpg"
  },
  {
    "title": "末日狂花",
    "url": "movie-116.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 冒险",
    "category": "纪录综艺",
    "cover": "./116.jpg"
  },
  {
    "title": "李春天的春天",
    "url": "movie-117.html",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 都市",
    "category": "热门剧集",
    "cover": "./117.jpg"
  },
  {
    "title": "四月女友",
    "url": "movie-118.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情奇幻",
    "category": "热门剧集",
    "cover": "./118.jpg"
  },
  {
    "title": "兽国春秋",
    "url": "movie-119.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻, 历史, 战争",
    "category": "动作犯罪",
    "cover": "./119.jpg"
  },
  {
    "title": "我们一族",
    "url": "movie-120.html",
    "year": "2023",
    "region": "瑞典",
    "type": "剧集",
    "genre": "家庭 / 剧情",
    "category": "精选电影",
    "cover": "./120.jpg"
  },
  {
    "title": "天涯未了情",
    "url": "movie-121.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情",
    "category": "动漫动画",
    "cover": "./121.jpg"
  },
  {
    "title": "寻香之旅",
    "url": "movie-122.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "全球佳片",
    "cover": "./122.jpg"
  },
  {
    "title": "苍狼之浴血绝杀",
    "url": "movie-123.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 战争",
    "category": "动漫动画",
    "cover": "./123.jpg"
  },
  {
    "title": "白色死亡",
    "url": "movie-124.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 惊悚 / 剧情",
    "category": "纪录综艺",
    "cover": "./124.jpg"
  },
  {
    "title": "880先生",
    "url": "movie-125.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./125.jpg"
  },
  {
    "title": "暗杀第一夫人",
    "url": "movie-126.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作，惊悚，政治",
    "category": "动作犯罪",
    "cover": "./126.jpg"
  },
  {
    "title": "菜鸟先生",
    "url": "movie-127.html",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情, 职场, 喜剧",
    "category": "悬疑惊悚",
    "cover": "./127.jpg"
  },
  {
    "title": "郊游2023",
    "url": "movie-128.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "纪录综艺",
    "cover": "./128.jpg"
  },
  {
    "title": "末日狂想曲",
    "url": "movie-129.html",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "科幻，喜剧，哲理",
    "category": "爱情喜剧",
    "cover": "./129.jpg"
  },
  {
    "title": "孩童狂奔",
    "url": "movie-130.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 犯罪",
    "category": "悬疑惊悚",
    "cover": "./130.jpg"
  },
  {
    "title": "直到死亡将我们分离",
    "url": "movie-131.html",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 爱情",
    "category": "悬疑惊悚",
    "cover": "./131.jpg"
  },
  {
    "title": "早安，小伯爵夫人",
    "url": "movie-132.html",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情，爱情，历史",
    "category": "动作犯罪",
    "cover": "./132.jpg"
  },
  {
    "title": "掘金",
    "url": "movie-133.html",
    "year": "2026",
    "region": "澳大利亚",
    "type": "剧集",
    "genre": "惊悚，冒险",
    "category": "悬疑惊悚",
    "cover": "./133.jpg"
  },
  {
    "title": "富贵浮云",
    "url": "movie-134.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "category": "华语专区",
    "cover": "./134.jpg"
  },
  {
    "title": "花女情深",
    "url": "movie-135.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭/女性",
    "category": "华语专区",
    "cover": "./135.jpg"
  },
  {
    "title": "死亡笔记特别篇 幻影之神",
    "url": "movie-136.html",
    "year": "2018",
    "region": "日本",
    "type": "动画特别篇",
    "genre": "悬疑，奇幻，心理",
    "category": "纪录综艺",
    "cover": "./136.jpg"
  },
  {
    "title": "惊魂鬼屋",
    "url": "movie-137.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "category": "华语专区",
    "cover": "./137.jpg"
  },
  {
    "title": "哈啰僵尸",
    "url": "movie-138.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/恐怖",
    "category": "爱情喜剧",
    "cover": "./138.jpg"
  },
  {
    "title": "冷静与热情之间",
    "url": "movie-139.html",
    "year": "2025",
    "region": "意大利 / 日本",
    "type": "电影",
    "genre": "爱情、剧情、文艺",
    "category": "热门剧集",
    "cover": "./139.jpg"
  },
  {
    "title": "我的温尼伯湖",
    "url": "movie-140.html",
    "year": "2010",
    "region": "加拿大",
    "type": "剧情片",
    "genre": "家庭伦理，成长，悬疑",
    "category": "爱情喜剧",
    "cover": "./140.jpg"
  },
  {
    "title": "听说爱情回来过",
    "url": "movie-141.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情、剧情",
    "category": "爱情喜剧",
    "cover": "./141.jpg"
  },
  {
    "title": "爱、荣誉和服从",
    "url": "movie-142.html",
    "year": "2001",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪 / 喜剧 / 动作",
    "category": "动作犯罪",
    "cover": "./142.jpg"
  },
  {
    "title": "瞒天杀机",
    "url": "movie-143.html",
    "year": "2024",
    "region": "美国",
    "type": "超自然悬疑电影",
    "genre": "超自然悬疑, 公共阴谋, 生态惊悚",
    "category": "科幻奇幻",
    "cover": "./143.jpg"
  },
  {
    "title": "最强二弟子之猪事大吉",
    "url": "movie-144.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "微短剧",
    "genre": "喜剧 / 奇幻",
    "category": "科幻奇幻",
    "cover": "./144.jpg"
  },
  {
    "title": "无名浪子心",
    "url": "movie-145.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 爱情, 公路",
    "category": "全球佳片",
    "cover": "./145.jpg"
  },
  {
    "title": "生魂",
    "url": "movie-146.html",
    "year": "2024",
    "region": "中国台湾 / 日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑 / 民俗",
    "category": "精选电影",
    "cover": "./146.jpg"
  },
  {
    "title": "花样男子",
    "url": "movie-147.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 校园",
    "category": "纪录综艺",
    "cover": "./147.jpg"
  },
  {
    "title": "逆天奇案国语",
    "url": "movie-148.html",
    "year": "2025",
    "region": "香港",
    "type": "电视剧",
    "genre": "悬疑，犯罪，刑侦",
    "category": "精选电影",
    "cover": "./148.jpg"
  },
  {
    "title": "复仇者集结第五季",
    "url": "movie-149.html",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 科幻, 动画",
    "category": "热门剧集",
    "cover": "./149.jpg"
  },
  {
    "title": "掉链子刑警",
    "url": "movie-150.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 悬疑",
    "category": "全球佳片",
    "cover": "./150.jpg"
  },
  {
    "title": "邪恶力量第十一季",
    "url": "movie-151.html",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖, 奇幻",
    "category": "动漫动画",
    "cover": "./1.jpg"
  },
  {
    "title": "欢迎来到诗乐园",
    "url": "movie-152.html",
    "year": "2024",
    "region": "意大利",
    "type": "电视剧",
    "genre": "喜剧 / 奇幻 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./2.jpg"
  },
  {
    "title": "全面回忆",
    "url": "movie-153.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，动作",
    "category": "动漫动画",
    "cover": "./3.jpg"
  },
  {
    "title": "北京爱上你",
    "url": "movie-154.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "category": "热门剧集",
    "cover": "./4.jpg"
  },
  {
    "title": "好莱坞性战",
    "url": "movie-155.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 历史 / 传记",
    "category": "热门剧集",
    "cover": "./5.jpg"
  },
  {
    "title": "青盲",
    "url": "movie-156.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战，悬疑",
    "category": "动漫动画",
    "cover": "./6.jpg"
  },
  {
    "title": "鬼校亡友",
    "url": "movie-157.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖 / 悬疑 / 青春",
    "category": "华语专区",
    "cover": "./7.jpg"
  },
  {
    "title": "安拉的电话",
    "url": "movie-158.html",
    "year": "2022",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情，奇幻",
    "category": "动作犯罪",
    "cover": "./8.jpg"
  },
  {
    "title": "系统逼我做皇后第四季",
    "url": "movie-159.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装 / 穿越 / 喜剧",
    "category": "精选电影",
    "cover": "./9.jpg"
  },
  {
    "title": "玛丽肯·范·尼梅根",
    "url": "movie-160.html",
    "year": "2024",
    "region": "荷兰",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "category": "动漫动画",
    "cover": "./10.jpg"
  },
  {
    "title": "箭鱼摔跤",
    "url": "movie-161.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "体育, 剧情",
    "category": "动作犯罪",
    "cover": "./11.jpg"
  },
  {
    "title": "神之一手：鬼手篇",
    "url": "movie-162.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./12.jpg"
  },
  {
    "title": "连环套2014",
    "url": "movie-163.html",
    "year": "2014",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "都市犯罪 / 警匪悬疑",
    "category": "纪录综艺",
    "cover": "./13.jpg"
  },
  {
    "title": "抗倭侠侣第一季",
    "url": "movie-164.html",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "武侠， 历史",
    "category": "纪录综艺",
    "cover": "./14.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 迷情密码 婚戒物语第二季 修女的诅咒 弹珠汽水瓶里的千岁同学 潮拜武当粤语 内衣小舖 厌世青春恋习曲 狼雨 女子推理社 做工的人 梦幻奇石 危机24小时 驱邪 吸血夜 91天 绿荫仙踪 月咏 眠狂四郎无赖控 萧墙内外 玉女刑",
    "url": "movie-165.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "动作犯罪",
    "cover": "./15.jpg"
  },
  {
    "title": "键到鬼",
    "url": "movie-166.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖，奇幻，悬疑",
    "category": "华语专区",
    "cover": "./16.jpg"
  },
  {
    "title": "丛林敢死队",
    "url": "movie-167.html",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作 / 战争",
    "category": "悬疑惊悚",
    "cover": "./17.jpg"
  },
  {
    "title": "大人的防具店（里面）",
    "url": "movie-168.html",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 喜剧 / 冒险",
    "category": "动漫动画",
    "cover": "./18.jpg"
  },
  {
    "title": "怪兽湖",
    "url": "movie-169.html",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "科幻, 灾难",
    "category": "爱情喜剧",
    "cover": "./19.jpg"
  },
  {
    "title": "折磨",
    "url": "movie-170.html",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑，惊悚",
    "category": "科幻奇幻",
    "cover": "./20.jpg"
  },
  {
    "title": "她爱他",
    "url": "movie-171.html",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 家庭 / 剧情",
    "category": "动漫动画",
    "cover": "./21.jpg"
  },
  {
    "title": "飙车之车神传说",
    "url": "movie-172.html",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "动漫动画",
    "cover": "./22.jpg"
  },
  {
    "title": "告状恶魔",
    "url": "movie-173.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 民俗, 悬疑",
    "category": "科幻奇幻",
    "cover": "./23.jpg"
  },
  {
    "title": "夏日之梦",
    "url": "movie-174.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 青春 / 奇幻",
    "category": "动作犯罪",
    "cover": "./24.jpg"
  },
  {
    "title": "傲慢与偏见：亚特兰大",
    "url": "movie-175.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "悬疑惊悚",
    "cover": "./25.jpg"
  },
  {
    "title": "漫画宅男恋爱梦",
    "url": "movie-176.html",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "category": "精选电影",
    "cover": "./26.jpg"
  },
  {
    "title": "月光光心慌慌·杀清光",
    "url": "movie-177.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 杀戮",
    "category": "纪录综艺",
    "cover": "./27.jpg"
  },
  {
    "title": "烈日当空粤语",
    "url": "movie-178.html",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，青春",
    "category": "悬疑惊悚",
    "cover": "./28.jpg"
  },
  {
    "title": "我是红军",
    "url": "movie-179.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "革命 / 历史 / 战争",
    "category": "动漫动画",
    "cover": "./29.jpg"
  },
  {
    "title": "读心",
    "url": "movie-180.html",
    "year": "2019",
    "region": "韩国",
    "type": "心理悬疑电影",
    "genre": "科幻,心理,犯罪",
    "category": "精选电影",
    "cover": "./30.jpg"
  },
  {
    "title": "涨潮小屋",
    "url": "movie-181.html",
    "year": "2027",
    "region": "英国",
    "type": "电视剧",
    "genre": "恐怖， 悬疑， 奇幻",
    "category": "悬疑惊悚",
    "cover": "./31.jpg"
  },
  {
    "title": "赛尔号之寻找凤凰神兽",
    "url": "movie-182.html",
    "year": "2015",
    "region": "中国大陆",
    "type": "动画 / 电影",
    "genre": "科幻 / 冒险 / 儿童",
    "category": "科幻奇幻",
    "cover": "./32.jpg"
  },
  {
    "title": "美丽青年全泰壹",
    "url": "movie-183.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "传记 / 历史 / 剧情",
    "category": "动作犯罪",
    "cover": "./33.jpg"
  },
  {
    "title": "罪网",
    "url": "movie-184.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 刑侦",
    "category": "科幻奇幻",
    "cover": "./34.jpg"
  },
  {
    "title": "夏日之酒",
    "url": "movie-185.html",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情，家庭",
    "category": "全球佳片",
    "cover": "./35.jpg"
  },
  {
    "title": "男孩们：谢尔曼兄弟的故事",
    "url": "movie-186.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片, 传记",
    "category": "热门剧集",
    "cover": "./36.jpg"
  },
  {
    "title": "刺客教条：世系",
    "url": "movie-187.html",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动作， 科幻， 冒险",
    "category": "纪录综艺",
    "cover": "./37.jpg"
  },
  {
    "title": "倚天剑屠龙刀国语",
    "url": "movie-188.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠, 古装, 爱情",
    "category": "爱情喜剧",
    "cover": "./38.jpg"
  },
  {
    "title": "慧眼雄心",
    "url": "movie-189.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，动作，体育",
    "category": "科幻奇幻",
    "cover": "./39.jpg"
  },
  {
    "title": "土豆的美国梦",
    "url": "movie-190.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 冒险",
    "category": "动漫动画",
    "cover": "./40.jpg"
  },
  {
    "title": "杀人鳄鱼潭",
    "url": "movie-191.html",
    "year": "2026",
    "region": "澳大利亚 / 美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "爱情喜剧",
    "cover": "./41.jpg"
  },
  {
    "title": "大小黄天霸",
    "url": "movie-192.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠 / 喜剧",
    "category": "全球佳片",
    "cover": "./42.jpg"
  },
  {
    "title": "蜜糖儿",
    "url": "movie-193.html",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 家庭",
    "category": "爱情喜剧",
    "cover": "./43.jpg"
  },
  {
    "title": "爱之欢乐",
    "url": "movie-194.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 歌舞",
    "category": "华语专区",
    "cover": "./44.jpg"
  },
  {
    "title": "晕眩症",
    "url": "movie-195.html",
    "year": "2025",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "genre": "悬疑， 惊悚， 剧情",
    "category": "热门剧集",
    "cover": "./45.jpg"
  },
  {
    "title": "泰森",
    "url": "movie-196.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记, 运动",
    "category": "纪录综艺",
    "cover": "./46.jpg"
  },
  {
    "title": "午夜狂欢",
    "url": "movie-197.html",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚 / 恐怖",
    "category": "科幻奇幻",
    "cover": "./47.jpg"
  },
  {
    "title": "命运速递",
    "url": "movie-198.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "category": "悬疑惊悚",
    "cover": "./48.jpg"
  },
  {
    "title": "如何进入大学",
    "url": "movie-199.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "爱情喜剧",
    "cover": "./49.jpg"
  },
  {
    "title": "摩登澡堂",
    "url": "movie-200.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，剧情，怀旧",
    "category": "华语专区",
    "cover": "./50.jpg"
  },
  {
    "title": "井盖儿",
    "url": "movie-201.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，犯罪，黑色幽默",
    "category": "爱情喜剧",
    "cover": "./51.jpg"
  },
  {
    "title": "盘龙卧虎高山顶",
    "url": "movie-202.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 战争",
    "category": "科幻奇幻",
    "cover": "./52.jpg"
  },
  {
    "title": "苏生龙王传说",
    "url": "movie-203.html",
    "year": "2010",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 冒险 / 少年",
    "category": "华语专区",
    "cover": "./53.jpg"
  },
  {
    "title": "爱情公寓3",
    "url": "movie-204.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧 / 续集",
    "genre": "喜剧 / 爱情 / 都市",
    "category": "热门剧集",
    "cover": "./54.jpg"
  },
  {
    "title": "面包超人：达旦旦和双子星",
    "url": "movie-205.html",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻, 儿童",
    "category": "热门剧集",
    "cover": "./55.jpg"
  },
  {
    "title": "呼啸在布鲁克林",
    "url": "movie-206.html",
    "year": "1997",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 音乐",
    "category": "动漫动画",
    "cover": "./56.jpg"
  },
  {
    "title": "深宅绅士",
    "url": "movie-207.html",
    "year": "2023",
    "region": "泰国",
    "type": "电视剧",
    "genre": "古装、家族、悬疑、爱情",
    "category": "纪录综艺",
    "cover": "./57.jpg"
  },
  {
    "title": "贴身情人",
    "url": "movie-208.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作爱情",
    "category": "动作犯罪",
    "cover": "./58.jpg"
  },
  {
    "title": "临时奶爸",
    "url": "movie-209.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "精选电影",
    "cover": "./59.jpg"
  },
  {
    "title": "口水三国第二季",
    "url": "movie-210.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，动画，历史",
    "category": "华语专区",
    "cover": "./60.jpg"
  },
  {
    "title": "欢喜社区",
    "url": "movie-211.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 家庭, 剧情",
    "category": "华语专区",
    "cover": "./61.jpg"
  },
  {
    "title": "不愿面对的真相",
    "url": "movie-212.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 心理",
    "category": "全球佳片",
    "cover": "./62.jpg"
  },
  {
    "title": "巴拉圭的悠悠时光",
    "url": "movie-213.html",
    "year": "2018",
    "region": "巴拉圭",
    "type": "人文纪录片",
    "genre": "人文, 旅行, 家庭, 音乐, 社会",
    "category": "华语专区",
    "cover": "./63.jpg"
  },
  {
    "title": "大“反”派",
    "url": "movie-214.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作, 黑色幽默",
    "category": "动漫动画",
    "cover": "./64.jpg"
  },
  {
    "title": "雪地黄金犬",
    "url": "movie-215.html",
    "year": "2023",
    "region": "加拿大",
    "type": "电影",
    "genre": "冒险 / 家庭",
    "category": "科幻奇幻",
    "cover": "./65.jpg"
  },
  {
    "title": "欲望法则",
    "url": "movie-216.html",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚 / 情色 / 剧情",
    "category": "华语专区",
    "cover": "./66.jpg"
  },
  {
    "title": "从军记",
    "url": "movie-217.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "军旅 / 青春",
    "category": "华语专区",
    "cover": "./67.jpg"
  },
  {
    "title": "罗马新年",
    "url": "movie-218.html",
    "year": "2004",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情喜剧",
    "category": "科幻奇幻",
    "cover": "./68.jpg"
  },
  {
    "title": "普朗克常数",
    "url": "movie-219.html",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "科幻 / 哲理 / 剧情",
    "category": "爱情喜剧",
    "cover": "./69.jpg"
  },
  {
    "title": "星球大战:天行者崛起",
    "url": "movie-220.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险 / 动作",
    "category": "悬疑惊悚",
    "cover": "./70.jpg"
  },
  {
    "title": "三家巷",
    "url": "movie-221.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./71.jpg"
  },
  {
    "title": "香蜜沉沉烬如霜",
    "url": "movie-222.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 奇幻",
    "category": "爱情喜剧",
    "cover": "./72.jpg"
  },
  {
    "title": "急救爱情狂",
    "url": "movie-223.html",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧 / 医疗轻喜剧",
    "category": "精选电影",
    "cover": "./73.jpg"
  },
  {
    "title": "韦科：余波",
    "url": "movie-224.html",
    "year": "2023",
    "region": "美国",
    "type": "电视剧 (限定剧)",
    "genre": "剧情、犯罪、传记",
    "category": "精选电影",
    "cover": "./74.jpg"
  },
  {
    "title": "粽邪",
    "url": "movie-225.html",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "category": "热门剧集",
    "cover": "./75.jpg"
  },
  {
    "title": "密使超生",
    "url": "movie-226.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 科幻 / 喜剧",
    "category": "悬疑惊悚",
    "cover": "./76.jpg"
  },
  {
    "title": "惊奇队长",
    "url": "movie-227.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 超级英雄",
    "category": "全球佳片",
    "cover": "./77.jpg"
  },
  {
    "title": "大明末年",
    "url": "movie-228.html",
    "year": "2026",
    "region": "中国内地",
    "type": "电影",
    "genre": "历史、动作、战争",
    "category": "动漫动画",
    "cover": "./78.jpg"
  },
  {
    "title": "妙妙探粤语",
    "url": "movie-229.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 悬疑 / 动作",
    "category": "华语专区",
    "cover": "./79.jpg"
  },
  {
    "title": "从头再来2003",
    "url": "movie-230.html",
    "year": "2003",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 励志",
    "category": "全球佳片",
    "cover": "./80.jpg"
  },
  {
    "title": "风流战将",
    "url": "movie-231.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 战争, 权谋",
    "category": "动漫动画",
    "cover": "./81.jpg"
  },
  {
    "title": "孤宅绝境",
    "url": "movie-232.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 灾难 / 生存",
    "category": "全球佳片",
    "cover": "./82.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 梅花谍影 黑白幻音 忍者大决斗 荒神 霸王面具 很高兴遇见·你 魔盘惊魂 八岐大蛇 四十度晒 血的控诉 你的男友是我 艳舞女郎 诱惑命运 朦胧的山荷叶 血腥的艾里斯 候爱·青春 谜宅 达利和他的情人 落花时节又逢君 1992年",
    "url": "movie-233.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "热门剧集",
    "cover": "./83.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 天堂镇警局第二季 没有秘密2024 美梦成箴 爱，你想说什么 竞速传奇 酒色财气 初试新装 霍家拳之威震山河 欧栗树 速度与激情6 牧童与贵妇 访谈录 王富贵的心事 功夫王之萌虎上山 德州女巫 厚望 卧虎 辛巴达与牛头怪 高山流水觅知音 荒岛情缘",
    "url": "movie-234.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "动作犯罪",
    "cover": "./84.jpg"
  },
  {
    "title": "亚当",
    "url": "movie-235.html",
    "year": "2025",
    "region": "美国 / 以色列",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "category": "精选电影",
    "cover": "./85.jpg"
  },
  {
    "title": "异女身",
    "url": "movie-236.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 女性",
    "category": "全球佳片",
    "cover": "./86.jpg"
  },
  {
    "title": "夺命潘朵拉",
    "url": "movie-237.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻, 惊悚, 灾难",
    "category": "华语专区",
    "cover": "./87.jpg"
  },
  {
    "title": "草原母亲",
    "url": "movie-238.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、历史",
    "category": "纪录综艺",
    "cover": "./88.jpg"
  },
  {
    "title": "幸福捷径",
    "url": "movie-239.html",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，剧情，爱情",
    "category": "热门剧集",
    "cover": "./89.jpg"
  },
  {
    "title": "座头市与独臂刀",
    "url": "movie-240.html",
    "year": "1971",
    "region": "日本 / 中国香港",
    "type": "电影",
    "genre": "动作 / 冒险",
    "category": "科幻奇幻",
    "cover": "./90.jpg"
  },
  {
    "title": "乔治亚天空下",
    "url": "movie-241.html",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 同性",
    "category": "悬疑惊悚",
    "cover": "./91.jpg"
  },
  {
    "title": "激情黑寡妇",
    "url": "movie-242.html",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚, 爱情, 犯罪",
    "category": "动漫动画",
    "cover": "./92.jpg"
  },
  {
    "title": "查理·卓别林之溜冰场",
    "url": "movie-243.html",
    "year": "1928",
    "region": "美国",
    "type": "喜剧, 短片",
    "genre": "默片, 喜剧, 动作",
    "category": "精选电影",
    "cover": "./93.jpg"
  },
  {
    "title": "魔精",
    "url": "movie-244.html",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 科幻",
    "category": "纪录综艺",
    "cover": "./94.jpg"
  },
  {
    "title": "格子间女人",
    "url": "movie-245.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "职场，剧情",
    "category": "动漫动画",
    "cover": "./95.jpg"
  },
  {
    "title": "日落湄南河",
    "url": "movie-246.html",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 战争 / 历史",
    "category": "动作犯罪",
    "cover": "./96.jpg"
  },
  {
    "title": "由零开始的暗拥",
    "url": "movie-247.html",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻，爱情",
    "category": "爱情喜剧",
    "cover": "./97.jpg"
  },
  {
    "title": "世纪球王 马拉度纳",
    "url": "movie-248.html",
    "year": "2024",
    "region": "阿根廷 / 美国",
    "type": "纪录片剧集",
    "genre": "传记体育纪录片",
    "category": "悬疑惊悚",
    "cover": "./98.jpg"
  },
  {
    "title": "沙漠玫瑰",
    "url": "movie-249.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 冒险 / 女性",
    "category": "纪录综艺",
    "cover": "./99.jpg"
  },
  {
    "title": "模型姐妹",
    "url": "movie-250.html",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧，日常，百合",
    "category": "纪录综艺",
    "cover": "./100.jpg"
  },
  {
    "title": "拇指版蝙蝠侠",
    "url": "movie-251.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画",
    "category": "悬疑惊悚",
    "cover": "./101.jpg"
  },
  {
    "title": "心痕如诗",
    "url": "movie-252.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，文艺，传记",
    "category": "悬疑惊悚",
    "cover": "./102.jpg"
  },
  {
    "title": "我们的朋友马丁",
    "url": "movie-253.html",
    "year": "2013",
    "region": "英国",
    "type": "人文纪录片",
    "genre": "纪录片, 社会",
    "category": "热门剧集",
    "cover": "./103.jpg"
  },
  {
    "title": "谣言风暴",
    "url": "movie-254.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "全球佳片",
    "cover": "./104.jpg"
  },
  {
    "title": "足球风云1994",
    "url": "movie-255.html",
    "year": "1994",
    "region": "中国大陆",
    "type": "电影",
    "genre": "体育 / 励志 / 竞技",
    "category": "热门剧集",
    "cover": "./105.jpg"
  },
  {
    "title": "女孩有问题",
    "url": "movie-256.html",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "喜剧，剧情，青春",
    "category": "全球佳片",
    "cover": "./106.jpg"
  },
  {
    "title": "纳瓦隆第十突击队",
    "url": "movie-257.html",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "动作",
    "category": "动作犯罪",
    "cover": "./107.jpg"
  },
  {
    "title": "激情意外",
    "url": "movie-258.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "category": "纪录综艺",
    "cover": "./108.jpg"
  },
  {
    "title": "疯狂香港富豪",
    "url": "movie-259.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "华语专区",
    "cover": "./109.jpg"
  },
  {
    "title": "窨井盖",
    "url": "movie-260.html",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑",
    "category": "全球佳片",
    "cover": "./110.jpg"
  },
  {
    "title": "很想和你在一起",
    "url": "movie-261.html",
    "year": "2009",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、青春",
    "category": "动作犯罪",
    "cover": "./111.jpg"
  },
  {
    "title": "人肉农场",
    "url": "movie-262.html",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "爱情喜剧",
    "cover": "./112.jpg"
  },
  {
    "title": "奥利安娜",
    "url": "movie-263.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 心理 / 惊悚",
    "category": "动漫动画",
    "cover": "./113.jpg"
  },
  {
    "title": "丰收之后",
    "url": "movie-264.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 社会, 农村",
    "category": "科幻奇幻",
    "cover": "./114.jpg"
  },
  {
    "title": "献王虫谷",
    "url": "movie-265.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 悬疑, 惊悚",
    "category": "悬疑惊悚",
    "cover": "./115.jpg"
  },
  {
    "title": "人肉米粉",
    "url": "movie-266.html",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 犯罪",
    "category": "精选电影",
    "cover": "./116.jpg"
  },
  {
    "title": "查理曼",
    "url": "movie-267.html",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "剧集",
    "genre": "历史 / 战争 / 传记",
    "category": "全球佳片",
    "cover": "./117.jpg"
  },
  {
    "title": "烟草路",
    "url": "movie-268.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "动漫动画",
    "cover": "./118.jpg"
  },
  {
    "title": "诡咒",
    "url": "movie-269.html",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖",
    "category": "全球佳片",
    "cover": "./119.jpg"
  },
  {
    "title": "最后复活战",
    "url": "movie-270.html",
    "year": "2024",
    "region": "新西兰",
    "type": "电影",
    "genre": "奇幻 / 动作",
    "category": "爱情喜剧",
    "cover": "./120.jpg"
  },
  {
    "title": "钢铁少女：决战",
    "url": "movie-271.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 科幻, 动作, 战争",
    "category": "动作犯罪",
    "cover": "./121.jpg"
  },
  {
    "title": "妈咪方程式",
    "url": "movie-272.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 运动",
    "category": "动漫动画",
    "cover": "./122.jpg"
  },
  {
    "title": "再见了，我的克拉默",
    "url": "movie-273.html",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "运动, 剧情, 青春",
    "category": "爱情喜剧",
    "cover": "./123.jpg"
  },
  {
    "title": "勉强及格！",
    "url": "movie-274.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "动漫动画",
    "cover": "./124.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 生日快乐粤语 亚历珊卓 骗过纳粹的孩子们 永不言弃 99分女朋友 羊狼共和国：猪事大急 高架桥上的涂鸦 解谎侦探少女 火星异变 超级八 反收数特遣队 蒙查查王老五 甜蜜坏朋友 诺莉 浒门客栈第一季 保真度 无人驾驶 局住一家人 嫁错师 春秋大梦变恶梦",
    "url": "movie-275.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "悬疑惊悚",
    "cover": "./125.jpg"
  },
  {
    "title": "黑暗收成",
    "url": "movie-276.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 奇幻, 悬疑",
    "category": "爱情喜剧",
    "cover": "./126.jpg"
  },
  {
    "title": "夺命连线",
    "url": "movie-277.html",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 科技惊悚",
    "category": "悬疑惊悚",
    "cover": "./127.jpg"
  },
  {
    "title": "我只喜欢你",
    "url": "movie-278.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情 / 青春",
    "category": "纪录综艺",
    "cover": "./128.jpg"
  },
  {
    "title": "迷失在卡尔斯坦",
    "url": "movie-279.html",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "悬疑 / 冒险 / 心理",
    "category": "纪录综艺",
    "cover": "./129.jpg"
  },
  {
    "title": "萌道捉妖记",
    "url": "movie-280.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 动作",
    "category": "动作犯罪",
    "cover": "./130.jpg"
  },
  {
    "title": "生死不渝",
    "url": "movie-281.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "悬疑惊悚",
    "cover": "./131.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 我们的星球：镜头背后 眠狂四郎女妖剑 着魔1981 男孩们2 警之光第二季 波托先生 女人之源 灵肉交响曲 黑祭司 志在出位 泰德·邦迪 动物世界 女儿谷 冰人奥茨 我爱你妈 巴里公主2024 寻根问祖 人证1977 戏杀 骗术奇谭",
    "url": "movie-282.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "全球佳片",
    "cover": "./132.jpg"
  },
  {
    "title": "这不是柏林",
    "url": "movie-283.html",
    "year": "2025",
    "region": "墨西哥",
    "type": "电影",
    "genre": "剧情 / 青春",
    "category": "全球佳片",
    "cover": "./133.jpg"
  },
  {
    "title": "双城喜事",
    "url": "movie-284.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 古装",
    "category": "爱情喜剧",
    "cover": "./134.jpg"
  },
  {
    "title": "小说家电影",
    "url": "movie-285.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 文艺",
    "category": "全球佳片",
    "cover": "./135.jpg"
  },
  {
    "title": "圣诞特辑",
    "url": "movie-286.html",
    "year": "2024",
    "region": "英国",
    "type": "电影 / 电视电影",
    "genre": "喜剧 / 家庭 / 温情",
    "category": "动作犯罪",
    "cover": "./136.jpg"
  },
  {
    "title": "水下印象",
    "url": "movie-287.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "华语专区",
    "cover": "./137.jpg"
  },
  {
    "title": "墨西哥情书",
    "url": "movie-288.html",
    "year": "2024",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "genre": "爱情 / 冒险",
    "category": "科幻奇幻",
    "cover": "./138.jpg"
  },
  {
    "title": "穿越战火的人",
    "url": "movie-289.html",
    "year": "2026",
    "region": "中国大陆 / 叙利亚",
    "type": "纪录片 / 电影",
    "genre": "战争 / 纪录 / 人性",
    "category": "华语专区",
    "cover": "./139.jpg"
  },
  {
    "title": "点止草间弥生",
    "url": "movie-290.html",
    "year": "2023",
    "region": "日本",
    "type": "纪录片",
    "genre": "纪录 / 传记",
    "category": "科幻奇幻",
    "cover": "./140.jpg"
  },
  {
    "title": "爱寻迷",
    "url": "movie-291.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 剧情",
    "category": "动漫动画",
    "cover": "./141.jpg"
  },
  {
    "title": "小斧头",
    "url": "movie-292.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 历史， 犯罪",
    "category": "纪录综艺",
    "cover": "./142.jpg"
  },
  {
    "title": "狗狗心事",
    "url": "movie-293.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧， 家庭",
    "category": "热门剧集",
    "cover": "./143.jpg"
  },
  {
    "title": "衰鬼一齐混",
    "url": "movie-294.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 恐怖, 奇幻",
    "category": "全球佳片",
    "cover": "./144.jpg"
  },
  {
    "title": "24号储藏室",
    "url": "movie-295.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖， 悬疑， 惊悚",
    "category": "悬疑惊悚",
    "cover": "./145.jpg"
  },
  {
    "title": "脱线帝国",
    "url": "movie-296.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻喜剧",
    "category": "全球佳片",
    "cover": "./146.jpg"
  },
  {
    "title": "世界中心只有孤独",
    "url": "movie-297.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "文艺, 剧情",
    "category": "悬疑惊悚",
    "cover": "./147.jpg"
  },
  {
    "title": "松露猎人",
    "url": "movie-298.html",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "热门剧集",
    "cover": "./148.jpg"
  },
  {
    "title": "淘气阿丹",
    "url": "movie-299.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 家庭， 奇幻",
    "category": "精选电影",
    "cover": "./149.jpg"
  },
  {
    "title": "边缘服务",
    "url": "movie-300.html",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪， 社会",
    "category": "动作犯罪",
    "cover": "./150.jpg"
  },
  {
    "title": "银色杀机",
    "url": "movie-301.html",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "黑色电影、悬疑",
    "category": "爱情喜剧",
    "cover": "./1.jpg"
  },
  {
    "title": "女儿国嬉春",
    "url": "movie-302.html",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 情色",
    "category": "华语专区",
    "cover": "./2.jpg"
  },
  {
    "title": "时光之尘",
    "url": "movie-303.html",
    "year": "2023",
    "region": "希腊 / 法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "动漫动画",
    "cover": "./3.jpg"
  },
  {
    "title": "信·守",
    "url": "movie-304.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 年代",
    "category": "全球佳片",
    "cover": "./4.jpg"
  },
  {
    "title": "我是真的讨厌异地恋",
    "url": "movie-305.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "精选电影",
    "cover": "./5.jpg"
  },
  {
    "title": "绝命毒师第一季",
    "url": "movie-306.html",
    "year": "2008",
    "region": "美国",
    "type": "TV剧集",
    "genre": "剧情, 犯罪, 惊悚",
    "category": "华语专区",
    "cover": "./6.jpg"
  },
  {
    "title": "蒙哥奥·戴恩",
    "url": "movie-307.html",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "精选电影",
    "cover": "./7.jpg"
  },
  {
    "title": "肤色",
    "url": "movie-308.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情犯罪",
    "category": "动作犯罪",
    "cover": "./8.jpg"
  },
  {
    "title": "金刚猎鹰2",
    "url": "movie-309.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作/战争",
    "category": "全球佳片",
    "cover": "./9.jpg"
  },
  {
    "title": "三垒手",
    "url": "movie-310.html",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "运动 / 青春 / 剧情",
    "category": "动作犯罪",
    "cover": "./10.jpg"
  },
  {
    "title": "极限逃离",
    "url": "movie-311.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "category": "热门剧集",
    "cover": "./11.jpg"
  },
  {
    "title": "日暮生死恋",
    "url": "movie-312.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 奇幻, 悲剧",
    "category": "精选电影",
    "cover": "./12.jpg"
  },
  {
    "title": "高墙之内的理发室",
    "url": "movie-313.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "精选电影",
    "cover": "./13.jpg"
  },
  {
    "title": "红色眼镜",
    "url": "movie-314.html",
    "year": "1975",
    "region": "意大利",
    "type": "电影",
    "genre": "惊悚, 悬疑, 恐怖",
    "category": "热门剧集",
    "cover": "./14.jpg"
  },
  {
    "title": "垒球少年",
    "url": "movie-315.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春运动 / 成长",
    "category": "精选电影",
    "cover": "./15.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 坦克大会战 美的世界 异变 古庙倩魂 不明身份 盛情款待 下辈子我再好好过 第三季 陌生女人的电话 恋与枪弹 竞赛迪纳员 踢踏人生 合并 逃走的女人 超级男女 群居姐妹 我们的歌手2015 冰雪狙击 狄俄尼索斯 维修站的历史：两秒发车 阿甲晒命",
    "url": "movie-316.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "纪录综艺",
    "cover": "./16.jpg"
  },
  {
    "title": "维纳斯计划",
    "url": "movie-317.html",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "科幻, 爱情",
    "category": "爱情喜剧",
    "cover": "./17.jpg"
  },
  {
    "title": "光荣岁月",
    "url": "movie-318.html",
    "year": "2006",
    "region": "阿尔及利亚 / 法国",
    "type": "电影",
    "genre": "战争 / 剧情 / 历史",
    "category": "爱情喜剧",
    "cover": "./18.jpg"
  },
  {
    "title": "谁按了删除键",
    "url": "movie-319.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，悬疑，惊悚",
    "category": "动作犯罪",
    "cover": "./19.jpg"
  },
  {
    "title": "极地熊踪",
    "url": "movie-320.html",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "冒险 / 惊悚 / 剧情",
    "category": "纪录综艺",
    "cover": "./20.jpg"
  },
  {
    "title": "烈火情仇",
    "url": "movie-321.html",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/爱情",
    "category": "全球佳片",
    "cover": "./21.jpg"
  },
  {
    "title": "新闻战争",
    "url": "movie-322.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./22.jpg"
  },
  {
    "title": "兽性新人类之艳星劫",
    "url": "movie-323.html",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色 / 惊悚",
    "category": "爱情喜剧",
    "cover": "./23.jpg"
  },
  {
    "title": "开拍吧！第二滴血",
    "url": "movie-324.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "喜剧、动作",
    "genre": "电影拍摄、元叙事、草台班子",
    "category": "全球佳片",
    "cover": "./24.jpg"
  },
  {
    "title": "美国式离婚",
    "url": "movie-325.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 家庭",
    "category": "华语专区",
    "cover": "./25.jpg"
  },
  {
    "title": "汤屋街物语",
    "url": "movie-326.html",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "category": "悬疑惊悚",
    "cover": "./26.jpg"
  },
  {
    "title": "平行迷途",
    "url": "movie-327.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 爱情",
    "category": "动作犯罪",
    "cover": "./27.jpg"
  },
  {
    "title": "舍己救人",
    "url": "movie-328.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 剧情 / 英雄主义",
    "category": "悬疑惊悚",
    "cover": "./28.jpg"
  },
  {
    "title": "秘密访客",
    "url": "movie-329.html",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "心理惊悚",
    "category": "动漫动画",
    "cover": "./29.jpg"
  },
  {
    "title": "马勒冈的超级男孩",
    "url": "movie-330.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧, 动作, 科幻",
    "category": "热门剧集",
    "cover": "./30.jpg"
  },
  {
    "title": "加油站被袭事件2",
    "url": "movie-331.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作， 喜剧， 犯罪",
    "category": "动漫动画",
    "cover": "./31.jpg"
  },
  {
    "title": "谢丽",
    "url": "movie-332.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "category": "动漫动画",
    "cover": "./32.jpg"
  },
  {
    "title": "小猫虎子",
    "url": "movie-333.html",
    "year": "1986",
    "region": "中国大陆",
    "type": "电影",
    "genre": "儿童剧情",
    "category": "科幻奇幻",
    "cover": "./33.jpg"
  },
  {
    "title": "飞男飞女",
    "url": "movie-334.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "精选电影",
    "cover": "./34.jpg"
  },
  {
    "title": "杀绝国语",
    "url": "movie-335.html",
    "year": "1993",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "genre": "动作, 武侠, 犯罪",
    "category": "爱情喜剧",
    "cover": "./35.jpg"
  },
  {
    "title": "想飞粤语",
    "url": "movie-336.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭, 运动",
    "category": "热门剧集",
    "cover": "./36.jpg"
  },
  {
    "title": "骑士德鲁比",
    "url": "movie-337.html",
    "year": "2025",
    "region": "美国",
    "type": "动画短片 / 电影",
    "genre": "喜剧, 动画, 家庭",
    "category": "纪录综艺",
    "cover": "./37.jpg"
  },
  {
    "title": "绝色神偷",
    "url": "movie-338.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "动作犯罪",
    "cover": "./38.jpg"
  },
  {
    "title": "探长来访",
    "url": "movie-339.html",
    "year": "2015",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "全球佳片",
    "cover": "./39.jpg"
  },
  {
    "title": "9歌",
    "url": "movie-340.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐, 剧情",
    "category": "全球佳片",
    "cover": "./40.jpg"
  },
  {
    "title": "惠安女",
    "url": "movie-341.html",
    "year": "1989",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "科幻奇幻",
    "cover": "./41.jpg"
  },
  {
    "title": "幸福满屋",
    "url": "movie-342.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭， 喜剧",
    "category": "科幻奇幻",
    "cover": "./42.jpg"
  },
  {
    "title": "奇想莫里哀",
    "url": "movie-343.html",
    "year": "2014",
    "region": "法国",
    "type": "电影",
    "genre": "历史, 剧情",
    "category": "热门剧集",
    "cover": "./43.jpg"
  },
  {
    "title": "宵星传说",
    "url": "movie-344.html",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻, 冒险, 热血",
    "category": "科幻奇幻",
    "cover": "./44.jpg"
  },
  {
    "title": "名校风暴第二季",
    "url": "movie-345.html",
    "year": "2025",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑, 惊悚, 剧情",
    "category": "热门剧集",
    "cover": "./45.jpg"
  },
  {
    "title": "听妈妈的话剧场版",
    "url": "movie-346.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "音乐剧情电影",
    "genre": "音乐剧、家庭伦理、青春成长",
    "category": "动作犯罪",
    "cover": "./46.jpg"
  },
  {
    "title": "狩猎记",
    "url": "movie-347.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、犯罪、荒野",
    "category": "动漫动画",
    "cover": "./47.jpg"
  },
  {
    "title": "劫局",
    "url": "movie-348.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 悬疑, 动作",
    "category": "热门剧集",
    "cover": "./48.jpg"
  },
  {
    "title": "犬夜叉:红莲之蓬莱岛",
    "url": "movie-349.html",
    "year": "2004",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻, 动作",
    "category": "热门剧集",
    "cover": "./49.jpg"
  },
  {
    "title": "喀布尔的燕子",
    "url": "movie-350.html",
    "year": "2022",
    "region": "法国 / 卢森堡",
    "type": "电影",
    "genre": "动画, 剧情, 战争",
    "category": "爱情喜剧",
    "cover": "./50.jpg"
  },
  {
    "title": "金的战争",
    "url": "movie-351.html",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "战争 / 动作 / 历史",
    "category": "动漫动画",
    "cover": "./51.jpg"
  },
  {
    "title": "刺猬索尼克",
    "url": "movie-352.html",
    "year": "2021",
    "region": "日本",
    "type": "科幻动画",
    "genre": "科幻, 动画, 动作",
    "category": "动漫动画",
    "cover": "./52.jpg"
  },
  {
    "title": "太子当差",
    "url": "movie-353.html",
    "year": "2021",
    "region": "中国",
    "type": "电视剧",
    "genre": "古装, 喜剧, 动作",
    "category": "科幻奇幻",
    "cover": "./53.jpg"
  },
  {
    "title": "天真派杨门女将",
    "url": "movie-354.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史，战争，古装",
    "category": "动作犯罪",
    "cover": "./54.jpg"
  },
  {
    "title": "怪兽之瞳",
    "url": "movie-355.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难",
    "category": "热门剧集",
    "cover": "./55.jpg"
  },
  {
    "title": "呆瓜向前冲",
    "url": "movie-356.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "喜剧电影",
    "genre": "喜剧 / 励志 / 公路",
    "category": "精选电影",
    "cover": "./56.jpg"
  },
  {
    "title": "囧爸",
    "url": "movie-357.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "爱情喜剧",
    "cover": "./57.jpg"
  },
  {
    "title": "一个可笑人物的悲剧",
    "url": "movie-358.html",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、悲剧、黑色幽默",
    "category": "精选电影",
    "cover": "./58.jpg"
  },
  {
    "title": "凑女也疯狂",
    "url": "movie-359.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "精选电影",
    "cover": "./59.jpg"
  },
  {
    "title": "盲侠大发神威",
    "url": "movie-360.html",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "科幻奇幻",
    "cover": "./60.jpg"
  },
  {
    "title": "赛小花的远大前程",
    "url": "movie-361.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职场 / 励志",
    "category": "动作犯罪",
    "cover": "./61.jpg"
  },
  {
    "title": "画廊外的天赋",
    "url": "movie-362.html",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "悬疑惊悚",
    "cover": "./62.jpg"
  },
  {
    "title": "梅兰妮·达罗",
    "url": "movie-363.html",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 女性",
    "category": "热门剧集",
    "cover": "./63.jpg"
  },
  {
    "title": "魔鬼游乐场",
    "url": "movie-364.html",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 悬疑",
    "category": "动作犯罪",
    "cover": "./64.jpg"
  },
  {
    "title": "不一样的夏天",
    "url": "movie-365.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动画、奇幻",
    "category": "华语专区",
    "cover": "./65.jpg"
  },
  {
    "title": "龙廷争霸粤语",
    "url": "movie-366.html",
    "year": "1988",
    "region": "中国香港 (TVB)",
    "type": "剧集",
    "genre": "历史, 武侠, 古装",
    "category": "科幻奇幻",
    "cover": "./66.jpg"
  },
  {
    "title": "野人老师粤语",
    "url": "movie-367.html",
    "year": "2012",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧",
    "category": "全球佳片",
    "cover": "./67.jpg"
  },
  {
    "title": "铁窗沉冤",
    "url": "movie-368.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，剧情",
    "category": "悬疑惊悚",
    "cover": "./68.jpg"
  },
  {
    "title": "火爆教头",
    "url": "movie-369.html",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "genre": "运动 / 剧情 / 励志",
    "category": "纪录综艺",
    "cover": "./69.jpg"
  },
  {
    "title": "情场浪子",
    "url": "movie-370.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "全球佳片",
    "cover": "./70.jpg"
  },
  {
    "title": "咿嘞呜！",
    "url": "movie-371.html",
    "year": "2025",
    "region": "韩国",
    "type": "奇幻动作电影",
    "genre": "奇幻、黑色喜剧、动作",
    "category": "爱情喜剧",
    "cover": "./71.jpg"
  },
  {
    "title": "迪林杰之死",
    "url": "movie-372.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "传记犯罪",
    "category": "纪录综艺",
    "cover": "./72.jpg"
  },
  {
    "title": "儿女传奇之真假千金",
    "url": "movie-373.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "剧情 / 家庭 / 悬疑",
    "category": "华语专区",
    "cover": "./73.jpg"
  },
  {
    "title": "红辣椒2006",
    "url": "movie-374.html",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 惊悚",
    "category": "纪录综艺",
    "cover": "./74.jpg"
  },
  {
    "title": "不可征服的人",
    "url": "movie-375.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 运动",
    "category": "动作犯罪",
    "cover": "./75.jpg"
  },
  {
    "title": "红头男孩",
    "url": "movie-376.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭",
    "category": "全球佳片",
    "cover": "./76.jpg"
  },
  {
    "title": "低沉的天空",
    "url": "movie-377.html",
    "year": "2023",
    "region": "丹麦 / 冰岛",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./77.jpg"
  },
  {
    "title": "鹤形刁手螳螂腿",
    "url": "movie-378.html",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 武侠 / 喜剧",
    "category": "悬疑惊悚",
    "cover": "./78.jpg"
  },
  {
    "title": "飞跃芭蕾",
    "url": "movie-379.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "全球佳片",
    "cover": "./79.jpg"
  },
  {
    "title": "小兵传奇",
    "url": "movie-380.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻 / 战争 / 成长",
    "category": "全球佳片",
    "cover": "./80.jpg"
  },
  {
    "title": "我迷人的反派皇帝",
    "url": "movie-381.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装爱情",
    "category": "全球佳片",
    "cover": "./81.jpg"
  },
  {
    "title": "千金奇缘",
    "url": "movie-382.html",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 都市",
    "category": "纪录综艺",
    "cover": "./82.jpg"
  },
  {
    "title": "绝战",
    "url": "movie-383.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 战争",
    "category": "精选电影",
    "cover": "./83.jpg"
  },
  {
    "title": "神烦警探第一季",
    "url": "movie-384.html",
    "year": "2013",
    "region": "美国",
    "type": "电视剧",
    "genre": "情景喜剧 / 犯罪",
    "category": "华语专区",
    "cover": "./84.jpg"
  },
  {
    "title": "杰和沉默鲍伯的反击",
    "url": "movie-385.html",
    "year": "2001",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，犯罪",
    "category": "华语专区",
    "cover": "./85.jpg"
  },
  {
    "title": "留待清晨",
    "url": "movie-386.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "精选电影",
    "cover": "./86.jpg"
  },
  {
    "title": "交响狂人",
    "url": "movie-387.html",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "音乐, 剧情, 传记",
    "category": "纪录综艺",
    "cover": "./87.jpg"
  },
  {
    "title": "乐高迪士尼公主：城堡历险",
    "url": "movie-388.html",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画、冒险、喜剧",
    "category": "爱情喜剧",
    "cover": "./88.jpg"
  },
  {
    "title": "山之外",
    "url": "movie-389.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "悬疑冒险片",
    "genre": "生态惊悚, 悬疑, 冒险",
    "category": "动漫动画",
    "cover": "./89.jpg"
  },
  {
    "title": "神秘博士：普世欢腾",
    "url": "movie-390.html",
    "year": "2024",
    "region": "英国",
    "type": "特别篇",
    "genre": "科幻，冒险",
    "category": "华语专区",
    "cover": "./90.jpg"
  },
  {
    "title": "疯狂的麦克斯",
    "url": "movie-391.html",
    "year": "2025",
    "region": "澳大利亚 / 美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "悬疑惊悚",
    "cover": "./91.jpg"
  },
  {
    "title": "伴郎假期",
    "url": "movie-392.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "热门剧集",
    "cover": "./92.jpg"
  },
  {
    "title": "浪漫鬼屋",
    "url": "movie-393.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 奇幻",
    "category": "动作犯罪",
    "cover": "./93.jpg"
  },
  {
    "title": "安娜哀史",
    "url": "movie-394.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "华语专区",
    "cover": "./94.jpg"
  },
  {
    "title": "外交风云2019",
    "url": "movie-395.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 历史, 政治",
    "category": "全球佳片",
    "cover": "./95.jpg"
  },
  {
    "title": "叛逆卧底",
    "url": "movie-396.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "警匪",
    "category": "悬疑惊悚",
    "cover": "./96.jpg"
  },
  {
    "title": "欲望的果实",
    "url": "movie-397.html",
    "year": "1968",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "热门剧集",
    "cover": "./97.jpg"
  },
  {
    "title": "棋王和他的儿子",
    "url": "movie-398.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 励志",
    "category": "动作犯罪",
    "cover": "./98.jpg"
  },
  {
    "title": "梦幻天堂",
    "url": "movie-399.html",
    "year": "2019",
    "region": "日本",
    "type": "剧情",
    "genre": "奇幻, 爱情, 梦境冒险",
    "category": "华语专区",
    "cover": "./99.jpg"
  },
  {
    "title": "美女与野兽2014",
    "url": "movie-400.html",
    "year": "2014",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "全球佳片",
    "cover": "./100.jpg"
  },
  {
    "title": "不完美逃脱",
    "url": "movie-401.html",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "全球佳片",
    "cover": "./101.jpg"
  },
  {
    "title": "爸爸去出差",
    "url": "movie-402.html",
    "year": "1985",
    "region": "南斯拉夫",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "全球佳片",
    "cover": "./102.jpg"
  },
  {
    "title": "语言",
    "url": "movie-403.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻，剧情",
    "category": "科幻奇幻",
    "cover": "./103.jpg"
  },
  {
    "title": "恋上你的床",
    "url": "movie-404.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "动作犯罪",
    "cover": "./104.jpg"
  },
  {
    "title": "使徒行者2",
    "url": "movie-405.html",
    "year": "2017",
    "region": "中国香港 / 中国大陆",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 动作",
    "category": "动漫动画",
    "cover": "./105.jpg"
  },
  {
    "title": "大明悬案录之泥犁篇",
    "url": "movie-406.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 悬疑, 探案",
    "category": "动作犯罪",
    "cover": "./106.jpg"
  },
  {
    "title": "遗失的世界",
    "url": "movie-407.html",
    "year": "1999",
    "region": "美国 / 加拿大",
    "type": "电视剧",
    "genre": "科幻 / 冒险",
    "category": "悬疑惊悚",
    "cover": "./107.jpg"
  },
  {
    "title": "3904英呎",
    "url": "movie-408.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "灾难 / 动作 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./108.jpg"
  },
  {
    "title": "花园岛",
    "url": "movie-409.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻悬疑",
    "category": "纪录综艺",
    "cover": "./109.jpg"
  },
  {
    "title": "美丽与哀愁之歌",
    "url": "movie-410.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 爱情, 文艺",
    "category": "科幻奇幻",
    "cover": "./110.jpg"
  },
  {
    "title": "让爱做主",
    "url": "movie-411.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情, 都市",
    "category": "精选电影",
    "cover": "./111.jpg"
  },
  {
    "title": "八月未央",
    "url": "movie-412.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 文艺",
    "category": "动漫动画",
    "cover": "./112.jpg"
  },
  {
    "title": "剩女约瑟芬国语",
    "url": "movie-413.html",
    "year": "2016",
    "region": "中国大陆 / 法国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "爱情喜剧",
    "cover": "./113.jpg"
  },
  {
    "title": "惊笑好莱坞",
    "url": "movie-414.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧悬疑",
    "category": "纪录综艺",
    "cover": "./114.jpg"
  },
  {
    "title": "终极刺杀",
    "url": "movie-415.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 悬疑",
    "category": "爱情喜剧",
    "cover": "./115.jpg"
  },
  {
    "title": "小曼哈顿",
    "url": "movie-416.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情， 成长， 童真",
    "category": "热门剧集",
    "cover": "./116.jpg"
  },
  {
    "title": "法内情大结局",
    "url": "movie-417.html",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 法庭",
    "category": "全球佳片",
    "cover": "./117.jpg"
  },
  {
    "title": "蛇蝎夜合花",
    "url": "movie-418.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 情色 / 悬疑",
    "category": "华语专区",
    "cover": "./118.jpg"
  },
  {
    "title": "卡到阴",
    "url": "movie-419.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 民俗",
    "category": "动漫动画",
    "cover": "./119.jpg"
  },
  {
    "title": "性感女特工2",
    "url": "movie-420.html",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "爱情喜剧",
    "cover": "./120.jpg"
  },
  {
    "title": "波特莱尔的冒险",
    "url": "movie-421.html",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情，悬疑，冒险",
    "category": "科幻奇幻",
    "cover": "./121.jpg"
  },
  {
    "title": "收破烂者的女儿",
    "url": "movie-422.html",
    "year": "2007",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 社会",
    "category": "爱情喜剧",
    "cover": "./122.jpg"
  },
  {
    "title": "讲究人之有求必应",
    "url": "movie-423.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 悬疑",
    "category": "精选电影",
    "cover": "./123.jpg"
  },
  {
    "title": "哥谭第二季",
    "url": "movie-424.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪",
    "category": "全球佳片",
    "cover": "./124.jpg"
  },
  {
    "title": "百战敢死队",
    "url": "movie-425.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 动作",
    "category": "纪录综艺",
    "cover": "./125.jpg"
  },
  {
    "title": "爱犬奇缘",
    "url": "movie-426.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 喜剧, 都市, 治愈",
    "category": "爱情喜剧",
    "cover": "./126.jpg"
  },
  {
    "title": "大赛",
    "url": "movie-427.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "科幻奇幻",
    "cover": "./127.jpg"
  },
  {
    "title": "今夜妈咪不在家",
    "url": "movie-428.html",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "category": "全球佳片",
    "cover": "./128.jpg"
  },
  {
    "title": "今年暑假玩失身",
    "url": "movie-429.html",
    "year": "2018",
    "region": "台湾",
    "type": "电影",
    "genre": "青春 / 剧情",
    "category": "热门剧集",
    "cover": "./129.jpg"
  },
  {
    "title": "奥凯和他的世界",
    "url": "movie-430.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 儿童",
    "category": "热门剧集",
    "cover": "./130.jpg"
  },
  {
    "title": "劫匪的栖身处",
    "url": "movie-431.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "爱情喜剧",
    "cover": "./131.jpg"
  },
  {
    "title": "看这里，列兵哈格罗夫",
    "url": "movie-432.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 剧情 / 传记",
    "category": "动作犯罪",
    "cover": "./132.jpg"
  },
  {
    "title": "玛丽亚·马滕",
    "url": "movie-433.html",
    "year": "2022",
    "region": "英国",
    "type": "迷你剧",
    "genre": "犯罪/悬疑/传记",
    "category": "动漫动画",
    "cover": "./133.jpg"
  },
  {
    "title": "小罪犯",
    "url": "movie-434.html",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "全球佳片",
    "cover": "./134.jpg"
  },
  {
    "title": "白宫隐秘",
    "url": "movie-435.html",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "政治 / 惊悚 / 悬疑",
    "category": "动作犯罪",
    "cover": "./135.jpg"
  },
  {
    "title": "锦绣安宁",
    "url": "movie-436.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情 / 家国",
    "category": "爱情喜剧",
    "cover": "./136.jpg"
  },
  {
    "title": "中泰拳坛生死战",
    "url": "movie-437.html",
    "year": "2025",
    "region": "香港 / 泰国",
    "type": "电影",
    "genre": "动作",
    "category": "纪录综艺",
    "cover": "./137.jpg"
  },
  {
    "title": "复仇之谜",
    "url": "movie-438.html",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 心理",
    "category": "悬疑惊悚",
    "cover": "./138.jpg"
  },
  {
    "title": "一首协奏曲就是一场对话",
    "url": "movie-439.html",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 音乐",
    "category": "动作犯罪",
    "cover": "./139.jpg"
  },
  {
    "title": "生活大爆炸",
    "url": "movie-440.html",
    "year": "2007",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧， 爱情",
    "category": "动作犯罪",
    "cover": "./140.jpg"
  },
  {
    "title": "消失的士兵",
    "url": "movie-441.html",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "战争, 悬疑, 剧情",
    "category": "动作犯罪",
    "cover": "./141.jpg"
  },
  {
    "title": "惩罚者",
    "url": "movie-442.html",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 犯罪",
    "category": "动漫动画",
    "cover": "./142.jpg"
  },
  {
    "title": "客座艺术家",
    "url": "movie-443.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、悬疑、惊悚",
    "category": "动漫动画",
    "cover": "./143.jpg"
  },
  {
    "title": "大白鲨1975",
    "url": "movie-444.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 灾难",
    "category": "华语专区",
    "cover": "./144.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 只属于我 方世玉续集粤语 团圆粤语 安德森小分队 春满乐园 糖小姐探案集 轮流 夺命佳人 破处那件小事 魅力四射2 我是僵尸第三季 恶夜血吻 杨门少年 一百个谎言2024 大嘴巴第三季 极品老妈第七季 魔法使的约定 警察游戏 末日杀神2 百花深处",
    "url": "movie-445.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "动漫动画",
    "cover": "./145.jpg"
  },
  {
    "title": "忍者之家",
    "url": "movie-446.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动作 / 家庭 / 喜剧",
    "category": "动漫动画",
    "cover": "./146.jpg"
  },
  {
    "title": "蓝胡子的第八任妻子",
    "url": "movie-447.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚剧情",
    "category": "科幻奇幻",
    "cover": "./147.jpg"
  },
  {
    "title": "摩斯探长前传第六季",
    "url": "movie-448.html",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "category": "纪录综艺",
    "cover": "./148.jpg"
  },
  {
    "title": "跷家大作战",
    "url": "movie-449.html",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "全球佳片",
    "cover": "./149.jpg"
  },
  {
    "title": "倾巢而出之古灵阁妖精",
    "url": "movie-450.html",
    "year": "2026",
    "region": "英国 / 美国",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 喜剧",
    "category": "精选电影",
    "cover": "./150.jpg"
  },
  {
    "title": "仁光受难记",
    "url": "movie-451.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧情电影",
    "genre": "历史,宗教,悬疑,人性",
    "category": "纪录综艺",
    "cover": "./1.jpg"
  },
  {
    "title": "离别七日情",
    "url": "movie-452.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、剧情、爱情",
    "category": "纪录综艺",
    "cover": "./2.jpg"
  },
  {
    "title": "俏佣与我",
    "url": "movie-453.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "轻喜剧, 都市推理",
    "category": "全球佳片",
    "cover": "./3.jpg"
  },
  {
    "title": "亿万富女",
    "url": "movie-454.html",
    "year": "2024",
    "region": "中国大陆 / 美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 冒险",
    "category": "纪录综艺",
    "cover": "./4.jpg"
  },
  {
    "title": "超级富豪异乡人",
    "url": "movie-455.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情、悬疑、阶层",
    "category": "科幻奇幻",
    "cover": "./5.jpg"
  },
  {
    "title": "扎娜",
    "url": "movie-456.html",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "悬疑惊悚",
    "cover": "./6.jpg"
  },
  {
    "title": "护照",
    "url": "movie-457.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "热门剧集",
    "cover": "./7.jpg"
  },
  {
    "title": "6号叩应女郎",
    "url": "movie-458.html",
    "year": "1998",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑爱情",
    "category": "纪录综艺",
    "cover": "./8.jpg"
  },
  {
    "title": "哑舍2024",
    "url": "movie-459.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 剧情",
    "category": "全球佳片",
    "cover": "./9.jpg"
  },
  {
    "title": "圣诞后的星期二",
    "url": "movie-460.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 悬疑",
    "category": "精选电影",
    "cover": "./10.jpg"
  },
  {
    "title": "三线轮洄",
    "url": "movie-461.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "冒险，奇幻",
    "category": "科幻奇幻",
    "cover": "./11.jpg"
  },
  {
    "title": "流氓医生粤语",
    "url": "movie-462.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 医疗",
    "category": "热门剧集",
    "cover": "./12.jpg"
  },
  {
    "title": "我的女神室友斗娜",
    "url": "movie-463.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 生活",
    "category": "科幻奇幻",
    "cover": "./13.jpg"
  },
  {
    "title": "战斗人3",
    "url": "movie-464.html",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "category": "全球佳片",
    "cover": "./14.jpg"
  },
  {
    "title": "狗剩子的春天",
    "url": "movie-465.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 农村",
    "category": "悬疑惊悚",
    "cover": "./15.jpg"
  },
  {
    "title": "狄俄尼索斯",
    "url": "movie-466.html",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚, 奇幻",
    "category": "动漫动画",
    "cover": "./16.jpg"
  },
  {
    "title": "迷途的羔羊",
    "url": "movie-467.html",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "genre": "犯罪 / 悬疑 / 宗教",
    "category": "动漫动画",
    "cover": "./17.jpg"
  },
  {
    "title": "童话镇第七季",
    "url": "movie-468.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 冒险",
    "category": "动漫动画",
    "cover": "./18.jpg"
  },
  {
    "title": "卡多湖疑云",
    "url": "movie-469.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "纪录综艺",
    "cover": "./19.jpg"
  },
  {
    "title": "路竞我择",
    "url": "movie-470.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情",
    "category": "动漫动画",
    "cover": "./20.jpg"
  },
  {
    "title": "童子汀",
    "url": "movie-471.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "category": "动漫动画",
    "cover": "./21.jpg"
  },
  {
    "title": "三审奇石",
    "url": "movie-472.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑 / 古装",
    "category": "科幻奇幻",
    "cover": "./22.jpg"
  },
  {
    "title": "地铁故事",
    "url": "movie-473.html",
    "year": "2021",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情, 都市, 单元",
    "category": "华语专区",
    "cover": "./23.jpg"
  },
  {
    "title": "倒数回击",
    "url": "movie-474.html",
    "year": "2024",
    "region": "香港",
    "type": "动作悬疑片",
    "genre": "动作 / 警匪 / 心理较量",
    "category": "动漫动画",
    "cover": "./24.jpg"
  },
  {
    "title": "一触即发之除爆",
    "url": "movie-475.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪/警匪",
    "category": "纪录综艺",
    "cover": "./25.jpg"
  },
  {
    "title": "舞宫双凤",
    "url": "movie-476.html",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "歌舞 / 剧情 / 爱情",
    "category": "动漫动画",
    "cover": "./26.jpg"
  },
  {
    "title": "小羊的微笑",
    "url": "movie-477.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "家庭、成长、动画、温情",
    "category": "纪录综艺",
    "cover": "./27.jpg"
  },
  {
    "title": "永远是我的女孩",
    "url": "movie-478.html",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情 / 奇幻",
    "category": "纪录综艺",
    "cover": "./28.jpg"
  },
  {
    "title": "风起云舒",
    "url": "movie-479.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装",
    "category": "全球佳片",
    "cover": "./29.jpg"
  },
  {
    "title": "双重情感",
    "url": "movie-480.html",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "爱情、科幻",
    "category": "动漫动画",
    "cover": "./30.jpg"
  },
  {
    "title": "玩具国历险记",
    "url": "movie-481.html",
    "year": "2024",
    "region": "英国",
    "type": "动画电影",
    "genre": "冒险 / 奇幻 / 家庭",
    "category": "动漫动画",
    "cover": "./31.jpg"
  },
  {
    "title": "深渊之神",
    "url": "movie-482.html",
    "year": "2025",
    "region": "美国",
    "type": "Movie",
    "genre": "恐怖, 科幻, 悬疑",
    "category": "科幻奇幻",
    "cover": "./32.jpg"
  },
  {
    "title": "招惹",
    "url": "movie-483.html",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情/同性/剧情",
    "category": "爱情喜剧",
    "cover": "./33.jpg"
  },
  {
    "title": "夏终年与顾平生",
    "url": "movie-484.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情、校园",
    "category": "爱情喜剧",
    "cover": "./34.jpg"
  },
  {
    "title": "炸裂白宫",
    "url": "movie-485.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作， 惊悚",
    "category": "华语专区",
    "cover": "./35.jpg"
  },
  {
    "title": "起起落落",
    "url": "movie-486.html",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 喜剧, 家庭",
    "category": "爱情喜剧",
    "cover": "./36.jpg"
  },
  {
    "title": "国王与捣乱剧团",
    "url": "movie-487.html",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "喜剧, 冒险",
    "category": "爱情喜剧",
    "cover": "./37.jpg"
  },
  {
    "title": "「再见」中的女人",
    "url": "movie-488.html",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑, 剧情",
    "category": "全球佳片",
    "cover": "./38.jpg"
  },
  {
    "title": "孽迷宫",
    "url": "movie-489.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "热门剧集",
    "cover": "./39.jpg"
  },
  {
    "title": "山吹",
    "url": "movie-490.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "华语专区",
    "cover": "./40.jpg"
  },
  {
    "title": "接近完成的万物完整历史",
    "url": "movie-491.html",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "动作犯罪",
    "cover": "./41.jpg"
  },
  {
    "title": "阴阳路4与鬼同行",
    "url": "movie-492.html",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "热门剧集",
    "cover": "./42.jpg"
  },
  {
    "title": "我过去常来这里",
    "url": "movie-493.html",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "精选电影",
    "cover": "./43.jpg"
  },
  {
    "title": "雪岭魂",
    "url": "movie-494.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪悬疑",
    "category": "纪录综艺",
    "cover": "./44.jpg"
  },
  {
    "title": "鸟人大作战",
    "url": "movie-495.html",
    "year": "2023",
    "region": "日本",
    "type": "TV动画剧集",
    "genre": "喜剧、科幻、冒险",
    "category": "纪录综艺",
    "cover": "./45.jpg"
  },
  {
    "title": "斯蒂芬·库里：被低估",
    "url": "movie-496.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片 / 传记 / 运动",
    "category": "华语专区",
    "cover": "./46.jpg"
  },
  {
    "title": "27套礼服",
    "url": "movie-497.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 剧情",
    "category": "科幻奇幻",
    "cover": "./47.jpg"
  },
  {
    "title": "荣耀之役",
    "url": "movie-498.html",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "运动 / 历史",
    "category": "热门剧集",
    "cover": "./48.jpg"
  },
  {
    "title": "明天的记忆",
    "url": "movie-499.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "category": "纪录综艺",
    "cover": "./49.jpg"
  },
  {
    "title": "弗里达·卡罗 2024",
    "url": "movie-500.html",
    "year": "2024",
    "region": "美国 / 墨西哥",
    "type": "传记片",
    "genre": "剧情 / 音乐",
    "category": "动漫动画",
    "cover": "./50.jpg"
  },
  {
    "title": "命悬生死线",
    "url": "movie-501.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作, 灾难, 职业",
    "category": "科幻奇幻",
    "cover": "./51.jpg"
  },
  {
    "title": "水落石出",
    "url": "movie-502.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "精选电影",
    "cover": "./52.jpg"
  },
  {
    "title": "柏林多情事：狂奔的爱",
    "url": "movie-503.html",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情 / 动作",
    "category": "精选电影",
    "cover": "./53.jpg"
  },
  {
    "title": "靠边站",
    "url": "movie-504.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 社会",
    "category": "华语专区",
    "cover": "./54.jpg"
  },
  {
    "title": "17小时",
    "url": "movie-505.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难、动作",
    "category": "华语专区",
    "cover": "./55.jpg"
  },
  {
    "title": "他不坏，他是我兄弟",
    "url": "movie-506.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，犯罪",
    "category": "动漫动画",
    "cover": "./56.jpg"
  },
  {
    "title": "精灵幻想记第二季",
    "url": "movie-507.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "category": "科幻奇幻",
    "cover": "./57.jpg"
  },
  {
    "title": "家门口的陌生人",
    "url": "movie-508.html",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "genre": "家庭悬疑 / 社会情感",
    "category": "纪录综艺",
    "cover": "./58.jpg"
  },
  {
    "title": "分裂大师",
    "url": "movie-509.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 犯罪",
    "category": "科幻奇幻",
    "cover": "./59.jpg"
  },
  {
    "title": "勾魂慑魄粤语",
    "url": "movie-510.html",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "惊悚 / 情色",
    "category": "悬疑惊悚",
    "cover": "./60.jpg"
  },
  {
    "title": "黑金杀机",
    "url": "movie-511.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./61.jpg"
  },
  {
    "title": "养育者第四季",
    "url": "movie-512.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情， 喜剧， 家庭",
    "category": "悬疑惊悚",
    "cover": "./62.jpg"
  },
  {
    "title": "星际禁区",
    "url": "movie-513.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 冒险",
    "category": "悬疑惊悚",
    "cover": "./63.jpg"
  },
  {
    "title": "桌子",
    "url": "movie-514.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 奇幻",
    "category": "爱情喜剧",
    "cover": "./64.jpg"
  },
  {
    "title": "奇奇与蒂蒂",
    "url": "movie-515.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 冒险, 奇幻",
    "category": "精选电影",
    "cover": "./65.jpg"
  },
  {
    "title": "隼鹰",
    "url": "movie-516.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争动作",
    "category": "热门剧集",
    "cover": "./66.jpg"
  },
  {
    "title": "终究、与你相恋。",
    "url": "movie-517.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "category": "华语专区",
    "cover": "./67.jpg"
  },
  {
    "title": "摇破天惊",
    "url": "movie-518.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐 / 喜剧 / 剧情",
    "category": "动作犯罪",
    "cover": "./68.jpg"
  },
  {
    "title": "王夫人鬼魂",
    "url": "movie-519.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "民俗恐怖",
    "category": "科幻奇幻",
    "cover": "./69.jpg"
  },
  {
    "title": "破晓时刻",
    "url": "movie-520.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "热门剧集",
    "cover": "./70.jpg"
  },
  {
    "title": "爱爱禁行曲",
    "url": "movie-521.html",
    "year": "2028",
    "region": "英国",
    "type": "电影",
    "genre": "科幻，爱情，伦理",
    "category": "精选电影",
    "cover": "./71.jpg"
  },
  {
    "title": "抗日奇侠",
    "url": "movie-522.html",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "动作，战争，奇幻",
    "category": "华语专区",
    "cover": "./72.jpg"
  },
  {
    "title": "汉密尔顿",
    "url": "movie-523.html",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞, 历史, 传记",
    "category": "动漫动画",
    "cover": "./73.jpg"
  },
  {
    "title": "逍遥舞娘",
    "url": "movie-524.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情, 音乐",
    "category": "爱情喜剧",
    "cover": "./74.jpg"
  },
  {
    "title": "爱丽丝：从仙境来的少年",
    "url": "movie-525.html",
    "year": "2015",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情，奇幻，悬疑",
    "category": "动作犯罪",
    "cover": "./75.jpg"
  },
  {
    "title": "敬！莎莉",
    "url": "movie-526.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，同性",
    "category": "动作犯罪",
    "cover": "./76.jpg"
  },
  {
    "title": "地球最末日",
    "url": "movie-527.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./77.jpg"
  },
  {
    "title": "囚车驶向圣地",
    "url": "movie-528.html",
    "year": "2019",
    "region": "法国 / 以色列",
    "type": "电影",
    "genre": "剧情, 战争",
    "category": "全球佳片",
    "cover": "./78.jpg"
  },
  {
    "title": "我有毒",
    "url": "movie-529.html",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 奇幻, 黑色幽默",
    "category": "悬疑惊悚",
    "cover": "./79.jpg"
  },
  {
    "title": "小戏骨：黄飞鸿",
    "url": "movie-530.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作， 剧情， 儿童",
    "category": "全球佳片",
    "cover": "./80.jpg"
  },
  {
    "title": "四海兄弟",
    "url": "movie-531.html",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "genre": "黑帮史诗",
    "category": "华语专区",
    "cover": "./81.jpg"
  },
  {
    "title": "虚拟的谎言",
    "url": "movie-532.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "科幻奇幻",
    "cover": "./82.jpg"
  },
  {
    "title": "黑色电话2",
    "url": "movie-533.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 超自然",
    "category": "精选电影",
    "cover": "./83.jpg"
  },
  {
    "title": "江湖见",
    "url": "movie-534.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "武侠 / 悬疑",
    "category": "精选电影",
    "cover": "./84.jpg"
  },
  {
    "title": "璀璨情诗",
    "url": "movie-535.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "爱情、传记、剧情",
    "category": "纪录综艺",
    "cover": "./85.jpg"
  },
  {
    "title": "旧爱来找碴",
    "url": "movie-536.html",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "华语专区",
    "cover": "./86.jpg"
  },
  {
    "title": "足球使命",
    "url": "movie-537.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 喜剧",
    "category": "纪录综艺",
    "cover": "./87.jpg"
  },
  {
    "title": "赤羽骨子的亲卫队",
    "url": "movie-538.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动作，喜剧",
    "category": "科幻奇幻",
    "cover": "./88.jpg"
  },
  {
    "title": "反抗：柳宽顺的故事",
    "url": "movie-539.html",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "历史, 剧情",
    "category": "爱情喜剧",
    "cover": "./89.jpg"
  },
  {
    "title": "相残",
    "url": "movie-540.html",
    "year": "2013",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "category": "爱情喜剧",
    "cover": "./90.jpg"
  },
  {
    "title": "黄金战士",
    "url": "movie-541.html",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 同性",
    "category": "精选电影",
    "cover": "./91.jpg"
  },
  {
    "title": "华氏11/9",
    "url": "movie-542.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片 / 政治",
    "category": "精选电影",
    "cover": "./92.jpg"
  },
  {
    "title": "美丽佳人",
    "url": "movie-543.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 家庭",
    "category": "热门剧集",
    "cover": "./93.jpg"
  },
  {
    "title": "巨鳄战狂蟒",
    "url": "movie-544.html",
    "year": "2025",
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "genre": "动作 / 惊悚 / 冒险",
    "category": "科幻奇幻",
    "cover": "./94.jpg"
  },
  {
    "title": "我们的所爱",
    "url": "movie-545.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "家庭/剧情",
    "category": "热门剧集",
    "cover": "./95.jpg"
  },
  {
    "title": "兰闺春怨",
    "url": "movie-546.html",
    "year": "1952",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "动作犯罪",
    "cover": "./96.jpg"
  },
  {
    "title": "天外归客",
    "url": "movie-547.html",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 剧情",
    "category": "全球佳片",
    "cover": "./97.jpg"
  },
  {
    "title": "扶贫记",
    "url": "movie-548.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、乡村",
    "category": "爱情喜剧",
    "cover": "./98.jpg"
  },
  {
    "title": "艾尔酒吧",
    "url": "movie-549.html",
    "year": "2017",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "category": "精选电影",
    "cover": "./99.jpg"
  },
  {
    "title": "爹地拍档",
    "url": "movie-550.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作, 家庭",
    "category": "全球佳片",
    "cover": "./100.jpg"
  },
  {
    "title": "康德第一保镖传奇",
    "url": "movie-551.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 传记 / 历史",
    "category": "精选电影",
    "cover": "./101.jpg"
  },
  {
    "title": "港口的日本姑娘",
    "url": "movie-552.html",
    "year": "2023",
    "region": "日本， 中国台湾",
    "type": "电影",
    "genre": "爱情， 历史， 文艺",
    "category": "动作犯罪",
    "cover": "./102.jpg"
  },
  {
    "title": "不速之约粤语",
    "url": "movie-553.html",
    "year": "2012",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑 / 奇幻 / 爱情",
    "category": "悬疑惊悚",
    "cover": "./103.jpg"
  },
  {
    "title": "断键",
    "url": "movie-554.html",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "genre": "音乐，剧情，悬疑",
    "category": "悬疑惊悚",
    "cover": "./104.jpg"
  },
  {
    "title": "闪耀少年之空中接力",
    "url": "movie-555.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动，青春",
    "category": "科幻奇幻",
    "cover": "./105.jpg"
  },
  {
    "title": "他和她的圣诞节",
    "url": "movie-556.html",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 喜剧, 家庭",
    "category": "精选电影",
    "cover": "./106.jpg"
  },
  {
    "title": "冰火凤",
    "url": "movie-557.html",
    "year": "2026",
    "region": "中国",
    "type": "动画电影",
    "genre": "奇幻 / 动作",
    "category": "动漫动画",
    "cover": "./107.jpg"
  },
  {
    "title": "爱的艺术",
    "url": "movie-558.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 剧情",
    "category": "热门剧集",
    "cover": "./108.jpg"
  },
  {
    "title": "古镜幽魂",
    "url": "movie-559.html",
    "year": "1974",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 古装 / 奇幻",
    "category": "动作犯罪",
    "cover": "./109.jpg"
  },
  {
    "title": "卧虎藏龙：青冥宝剑",
    "url": "movie-560.html",
    "year": "2025",
    "region": "中国内地 / 美国",
    "type": "电影",
    "genre": "动作 / 武侠 / 奇幻",
    "category": "热门剧集",
    "cover": "./110.jpg"
  },
  {
    "title": "伟大的宿愿",
    "url": "movie-561.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史",
    "category": "纪录综艺",
    "cover": "./111.jpg"
  },
  {
    "title": "摇滚吸血鬼",
    "url": "movie-562.html",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 音乐",
    "category": "动漫动画",
    "cover": "./112.jpg"
  },
  {
    "title": "恶魔印记",
    "url": "movie-563.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "华语专区",
    "cover": "./113.jpg"
  },
  {
    "title": "火山与海的孩子",
    "url": "movie-564.html",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/奇幻",
    "category": "科幻奇幻",
    "cover": "./114.jpg"
  },
  {
    "title": "大河英雄传",
    "url": "movie-565.html",
    "year": "2028",
    "region": "中国内地",
    "type": "剧集",
    "genre": "历史, 剧情",
    "category": "全球佳片",
    "cover": "./115.jpg"
  },
  {
    "title": "时间不会停止",
    "url": "movie-566.html",
    "year": "2024",
    "region": "英国",
    "type": "Movie",
    "genre": "科幻、剧情",
    "category": "动漫动画",
    "cover": "./116.jpg"
  },
  {
    "title": "六尺巷新故事",
    "url": "movie-567.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 社会",
    "category": "动漫动画",
    "cover": "./117.jpg"
  },
  {
    "title": "52赫兹的鲸鱼",
    "url": "movie-568.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "category": "悬疑惊悚",
    "cover": "./118.jpg"
  },
  {
    "title": "谜离药谎",
    "url": "movie-569.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，惊悚，犯罪",
    "category": "全球佳片",
    "cover": "./119.jpg"
  },
  {
    "title": "无间道长之神剑门",
    "url": "movie-570.html",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 奇幻",
    "category": "华语专区",
    "cover": "./120.jpg"
  },
  {
    "title": "龙凤斗",
    "url": "movie-571.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 爱情, 动作",
    "category": "爱情喜剧",
    "cover": "./121.jpg"
  },
  {
    "title": "玛格丽特",
    "url": "movie-572.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "科幻奇幻",
    "cover": "./122.jpg"
  },
  {
    "title": "野良神",
    "url": "movie-573.html",
    "year": "2014",
    "region": "日本",
    "type": "动画",
    "genre": "动作, 奇幻, 喜剧",
    "category": "热门剧集",
    "cover": "./123.jpg"
  },
  {
    "title": "寂静之夜",
    "url": "movie-574.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "华语专区",
    "cover": "./124.jpg"
  },
  {
    "title": "甲骨文密码",
    "url": "movie-575.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑冒险",
    "category": "悬疑惊悚",
    "cover": "./125.jpg"
  },
  {
    "title": "三妻艳史",
    "url": "movie-576.html",
    "year": "1949",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，爱情，悬疑",
    "category": "纪录综艺",
    "cover": "./126.jpg"
  },
  {
    "title": "三角梅",
    "url": "movie-577.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭，伦理",
    "category": "华语专区",
    "cover": "./127.jpg"
  },
  {
    "title": "千王群英会国语",
    "url": "movie-578.html",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 犯罪",
    "category": "动漫动画",
    "cover": "./128.jpg"
  },
  {
    "title": "特别行动",
    "url": "movie-579.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 战争 / 惊悚",
    "category": "全球佳片",
    "cover": "./129.jpg"
  },
  {
    "title": "宝窗选婿",
    "url": "movie-580.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "热门剧集",
    "cover": "./130.jpg"
  },
  {
    "title": "香艶亲王",
    "url": "movie-581.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 古装, 喜剧",
    "category": "爱情喜剧",
    "cover": "./131.jpg"
  },
  {
    "title": "多么美丽的日子",
    "url": "movie-582.html",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情",
    "category": "爱情喜剧",
    "cover": "./132.jpg"
  },
  {
    "title": "押解的故事",
    "url": "movie-583.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 公路",
    "category": "华语专区",
    "cover": "./133.jpg"
  },
  {
    "title": "环法自行车赛：逆风飞驰",
    "url": "movie-584.html",
    "year": "2025",
    "region": "法国",
    "type": "纪录片",
    "genre": "运动 / 纪录",
    "category": "悬疑惊悚",
    "cover": "./134.jpg"
  },
  {
    "title": "霹雳震寰宇之龙战八荒",
    "url": "movie-585.html",
    "year": "2010",
    "region": "中国台湾",
    "type": "布袋戏剧集",
    "genre": "奇幻，武侠，古装",
    "category": "纪录综艺",
    "cover": "./135.jpg"
  },
  {
    "title": "巨蛛怪",
    "url": "movie-586.html",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 恐怖",
    "category": "动漫动画",
    "cover": "./136.jpg"
  },
  {
    "title": "穿刺大公",
    "url": "movie-587.html",
    "year": "2025",
    "region": "罗马尼亚 / 美国",
    "type": "电影",
    "genre": "历史，恐怖，动作",
    "category": "热门剧集",
    "cover": "./137.jpg"
  },
  {
    "title": "神剑魔刀粤语",
    "url": "movie-588.html",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠, 古装, 动作",
    "category": "动漫动画",
    "cover": "./138.jpg"
  },
  {
    "title": "槲寄生农场的惊奇圣诞",
    "url": "movie-589.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "家庭, 奇幻, 喜剧, 节日",
    "category": "全球佳片",
    "cover": "./139.jpg"
  },
  {
    "title": "关于世界末日的不明确报告",
    "url": "movie-590.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧， 剧情， 科幻",
    "category": "动作犯罪",
    "cover": "./140.jpg"
  },
  {
    "title": "情场大玩咖",
    "url": "movie-591.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./141.jpg"
  },
  {
    "title": "送报女孩",
    "url": "movie-592.html",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻， 冒险， 悬疑",
    "category": "纪录综艺",
    "cover": "./142.jpg"
  },
  {
    "title": "离乡人",
    "url": "movie-593.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 文艺",
    "category": "悬疑惊悚",
    "cover": "./143.jpg"
  },
  {
    "title": "废品飞车",
    "url": "movie-594.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 喜剧, 冒险",
    "category": "热门剧集",
    "cover": "./144.jpg"
  },
  {
    "title": "我是谁2011",
    "url": "movie-595.html",
    "year": "2011",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "动作, 科幻",
    "category": "动漫动画",
    "cover": "./145.jpg"
  },
  {
    "title": "相敬如宾",
    "url": "movie-596.html",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭、悬疑、伦理",
    "category": "动漫动画",
    "cover": "./146.jpg"
  },
  {
    "title": "雪在烧",
    "url": "movie-597.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./147.jpg"
  },
  {
    "title": "龙骑士团",
    "url": "movie-598.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 动作",
    "category": "全球佳片",
    "cover": "./148.jpg"
  },
  {
    "title": "不要离开我",
    "url": "movie-599.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "都市, 惊悚, 爱情",
    "category": "全球佳片",
    "cover": "./149.jpg"
  },
  {
    "title": "人在边缘粤语",
    "url": "movie-600.html",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 犯罪, 家庭",
    "category": "科幻奇幻",
    "cover": "./150.jpg"
  },
  {
    "title": "天涯家园",
    "url": "movie-601.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情",
    "category": "全球佳片",
    "cover": "./1.jpg"
  },
  {
    "title": "反斗狂奔",
    "url": "movie-602.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "悬疑惊悚",
    "cover": "./2.jpg"
  },
  {
    "title": "女模特",
    "url": "movie-603.html",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "category": "全球佳片",
    "cover": "./3.jpg"
  },
  {
    "title": "电影制片人",
    "url": "movie-604.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 黑色喜剧",
    "category": "爱情喜剧",
    "cover": "./4.jpg"
  },
  {
    "title": "御天神兽",
    "url": "movie-605.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作, 冒险",
    "category": "科幻奇幻",
    "cover": "./5.jpg"
  },
  {
    "title": "续姿三四郎",
    "url": "movie-606.html",
    "year": "1955",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 动作",
    "category": "华语专区",
    "cover": "./6.jpg"
  },
  {
    "title": "繁华梦一场",
    "url": "movie-607.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 年代, 爱情",
    "category": "动作犯罪",
    "cover": "./7.jpg"
  },
  {
    "title": "第十四道门",
    "url": "movie-608.html",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑",
    "category": "爱情喜剧",
    "cover": "./8.jpg"
  },
  {
    "title": "生人活埋2",
    "url": "movie-609.html",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 灾难",
    "category": "精选电影",
    "cover": "./9.jpg"
  },
  {
    "title": "爱你不等来生",
    "url": "movie-610.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情 / 家庭",
    "category": "全球佳片",
    "cover": "./10.jpg"
  },
  {
    "title": "如何入睡",
    "url": "movie-611.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "category": "悬疑惊悚",
    "cover": "./11.jpg"
  },
  {
    "title": "热浪2015",
    "url": "movie-612.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 惊悚",
    "category": "动作犯罪",
    "cover": "./12.jpg"
  },
  {
    "title": "疯狂元素城",
    "url": "movie-613.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画，奇幻，冒险",
    "category": "纪录综艺",
    "cover": "./13.jpg"
  },
  {
    "title": "威廉与凯特",
    "url": "movie-614.html",
    "year": "2011",
    "region": "英国",
    "type": "电影",
    "genre": "爱情",
    "category": "精选电影",
    "cover": "./14.jpg"
  },
  {
    "title": "舞出我人生",
    "url": "movie-615.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "都市剧",
    "genre": "音乐, 青春, 职场, 成长",
    "category": "动作犯罪",
    "cover": "./15.jpg"
  },
  {
    "title": "江湖儿女",
    "url": "movie-616.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "动作, 剧情, 犯罪",
    "category": "华语专区",
    "cover": "./16.jpg"
  },
  {
    "title": "景雅的女儿",
    "url": "movie-617.html",
    "year": "2024",
    "region": "中国大陆 / 中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "动漫动画",
    "cover": "./17.jpg"
  },
  {
    "title": "神人之家",
    "url": "movie-618.html",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭 / 奇幻",
    "category": "精选电影",
    "cover": "./18.jpg"
  },
  {
    "title": "欢喜一家人·人生小事",
    "url": "movie-619.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 喜剧 / 治愈",
    "category": "爱情喜剧",
    "cover": "./19.jpg"
  },
  {
    "title": "爱情来的时候2",
    "url": "movie-620.html",
    "year": "2016",
    "region": "香港",
    "type": "剧集",
    "genre": "爱情，剧情，都市",
    "category": "纪录综艺",
    "cover": "./20.jpg"
  },
  {
    "title": "信托基金",
    "url": "movie-621.html",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 犯罪",
    "category": "纪录综艺",
    "cover": "./21.jpg"
  },
  {
    "title": "同中有异",
    "url": "movie-622.html",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "genre": "悬疑 / 科幻",
    "category": "热门剧集",
    "cover": "./22.jpg"
  },
  {
    "title": "夜半鬼埋身",
    "url": "movie-623.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖、惊悚、悬疑",
    "category": "热门剧集",
    "cover": "./23.jpg"
  },
  {
    "title": "猎艳记",
    "url": "movie-624.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 爱情, 古装",
    "category": "华语专区",
    "cover": "./24.jpg"
  },
  {
    "title": "肥伊不容易",
    "url": "movie-625.html",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 剧情, 家庭",
    "category": "动作犯罪",
    "cover": "./25.jpg"
  },
  {
    "title": "一千零一夜 出走季",
    "url": "movie-626.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "冒险, 奇幻",
    "category": "精选电影",
    "cover": "./26.jpg"
  },
  {
    "title": "除暴",
    "url": "movie-627.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作， 犯罪",
    "category": "纪录综艺",
    "cover": "./27.jpg"
  },
  {
    "title": "爱恋甜甜圈",
    "url": "movie-628.html",
    "year": "2024",
    "region": "中国台湾 / 日本",
    "type": "电影",
    "genre": "爱情 / 美食 / 奇幻",
    "category": "华语专区",
    "cover": "./28.jpg"
  },
  {
    "title": "在梦中和现实中飞翔",
    "url": "movie-629.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "奇幻, 剧情, 家庭",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "黑暗的孩子",
    "url": "movie-630.html",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "精选电影",
    "cover": "./30.jpg"
  },
  {
    "title": "感谢生命中有个你",
    "url": "movie-631.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情 / 治愈",
    "category": "动作犯罪",
    "cover": "./31.jpg"
  },
  {
    "title": "最佳房东",
    "url": "movie-632.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚，悬疑，剧情",
    "category": "全球佳片",
    "cover": "./32.jpg"
  },
  {
    "title": "摸金玦之天星陵",
    "url": "movie-633.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 冒险",
    "category": "华语专区",
    "cover": "./33.jpg"
  },
  {
    "title": "钟鸣寒山寺",
    "url": "movie-634.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑，古装，犯罪",
    "category": "悬疑惊悚",
    "cover": "./34.jpg"
  },
  {
    "title": "钢铁侠",
    "url": "movie-635.html",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "科幻动作 / 超级英雄 / 冒险",
    "category": "动作犯罪",
    "cover": "./35.jpg"
  },
  {
    "title": "好歌有约",
    "url": "movie-636.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺 / 电影",
    "genre": "音乐, 剧情, 治愈",
    "category": "全球佳片",
    "cover": "./36.jpg"
  },
  {
    "title": "最好的我们2016",
    "url": "movie-637.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春, 爱情",
    "category": "动漫动画",
    "cover": "./37.jpg"
  },
  {
    "title": "铁狱魔难",
    "url": "movie-638.html",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 惊悚 / 犯罪",
    "category": "全球佳片",
    "cover": "./38.jpg"
  },
  {
    "title": "少年包青天第一部",
    "url": "movie-639.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装， 悬疑， 推理",
    "category": "悬疑惊悚",
    "cover": "./39.jpg"
  },
  {
    "title": "葛洛莉亚·贝尔",
    "url": "movie-640.html",
    "year": "2018",
    "region": "智利",
    "type": "电影",
    "genre": "剧情",
    "category": "爱情喜剧",
    "cover": "./40.jpg"
  },
  {
    "title": "少数派报告",
    "url": "movie-641.html",
    "year": "2027",
    "region": "美国",
    "type": "电视剧 / 第二季",
    "genre": "科幻 / 犯罪 / 惊悚",
    "category": "华语专区",
    "cover": "./41.jpg"
  },
  {
    "title": "妖怪名单第二季",
    "url": "movie-642.html",
    "year": "2017",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻、校园、恋爱、冒险",
    "category": "精选电影",
    "cover": "./42.jpg"
  },
  {
    "title": "首尔彩虹",
    "url": "movie-643.html",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情， 同性",
    "category": "纪录综艺",
    "cover": "./43.jpg"
  },
  {
    "title": "82年生的金智英",
    "url": "movie-644.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 家庭, 社会",
    "category": "热门剧集",
    "cover": "./44.jpg"
  },
  {
    "title": "自拘于家",
    "url": "movie-645.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 心理",
    "category": "热门剧集",
    "cover": "./45.jpg"
  },
  {
    "title": "天伦之旅",
    "url": "movie-646.html",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./46.jpg"
  },
  {
    "title": "古尔德的32个短片",
    "url": "movie-647.html",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "传记 / 音乐 / 实验",
    "category": "华语专区",
    "cover": "./47.jpg"
  },
  {
    "title": "星武神诀第二季",
    "url": "movie-648.html",
    "year": "2024",
    "region": "中国",
    "type": "动漫",
    "genre": "玄幻 / 动作",
    "category": "精选电影",
    "cover": "./48.jpg"
  },
  {
    "title": "母亲的树",
    "url": "movie-649.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./49.jpg"
  },
  {
    "title": "莱拉兄弟",
    "url": "movie-650.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "全球佳片",
    "cover": "./50.jpg"
  },
  {
    "title": "亲兄弟",
    "url": "movie-651.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 剧情",
    "category": "动漫动画",
    "cover": "./51.jpg"
  },
  {
    "title": "汉堡总动员",
    "url": "movie-652.html",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 美食",
    "category": "动作犯罪",
    "cover": "./52.jpg"
  },
  {
    "title": "踩线",
    "url": "movie-653.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 动作",
    "category": "悬疑惊悚",
    "cover": "./53.jpg"
  },
  {
    "title": "我所看到的都是你",
    "url": "movie-654.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./54.jpg"
  },
  {
    "title": "生存家族",
    "url": "movie-655.html",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 科幻 / 家庭",
    "category": "全球佳片",
    "cover": "./55.jpg"
  },
  {
    "title": "美国豚鼠3:所罗门之歌",
    "url": "movie-656.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "科幻奇幻",
    "cover": "./56.jpg"
  },
  {
    "title": "鬼谷门·蜃世浩劫",
    "url": "movie-657.html",
    "year": "2027",
    "region": "中国内地",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 悬疑",
    "category": "热门剧集",
    "cover": "./57.jpg"
  },
  {
    "title": "摩登爱情",
    "url": "movie-658.html",
    "year": "2025",
    "region": "美国 / 法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "全球佳片",
    "cover": "./58.jpg"
  },
  {
    "title": "甜言蜜语1985",
    "url": "movie-659.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "热门剧集",
    "cover": "./59.jpg"
  },
  {
    "title": "自杀实境秀",
    "url": "movie-660.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 社会讽刺",
    "category": "科幻奇幻",
    "cover": "./60.jpg"
  },
  {
    "title": "熊熊燃烧",
    "url": "movie-661.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑， 剧情",
    "category": "科幻奇幻",
    "cover": "./61.jpg"
  },
  {
    "title": "梅耶公园",
    "url": "movie-662.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 恐怖, 惊悚",
    "category": "科幻奇幻",
    "cover": "./62.jpg"
  },
  {
    "title": "山形尖叫",
    "url": "movie-663.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖， 喜剧， 悬疑",
    "category": "热门剧集",
    "cover": "./63.jpg"
  },
  {
    "title": "青果巷",
    "url": "movie-664.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭剧情",
    "category": "纪录综艺",
    "cover": "./64.jpg"
  },
  {
    "title": "错误的高中甜心",
    "url": "movie-665.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 惊悚",
    "category": "全球佳片",
    "cover": "./65.jpg"
  },
  {
    "title": "我家有个狐仙大人。",
    "url": "movie-666.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "category": "精选电影",
    "cover": "./66.jpg"
  },
  {
    "title": "刀说异数",
    "url": "movie-667.html",
    "year": "2023",
    "region": "台湾",
    "type": "剧集",
    "genre": "武侠，布袋戏",
    "category": "纪录综艺",
    "cover": "./67.jpg"
  },
  {
    "title": "伦敦街头档案",
    "url": "movie-668.html",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪, 悬疑",
    "category": "热门剧集",
    "cover": "./68.jpg"
  },
  {
    "title": "哺乳期的女人",
    "url": "movie-669.html",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "category": "动漫动画",
    "cover": "./69.jpg"
  },
  {
    "title": "舰队收藏 剧场版",
    "url": "movie-670.html",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 战争, 奇幻",
    "category": "动作犯罪",
    "cover": "./70.jpg"
  },
  {
    "title": "黑暗斗士",
    "url": "movie-671.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作， 科幻， 惊悚",
    "category": "科幻奇幻",
    "cover": "./71.jpg"
  },
  {
    "title": "特殊身份的警官",
    "url": "movie-672.html",
    "year": "1983",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "category": "动作犯罪",
    "cover": "./72.jpg"
  },
  {
    "title": "差等生乔曦",
    "url": "movie-673.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 青春",
    "category": "热门剧集",
    "cover": "./73.jpg"
  },
  {
    "title": "活死人",
    "url": "movie-674.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖， 动作",
    "category": "精选电影",
    "cover": "./74.jpg"
  },
  {
    "title": "绑架毛乎乎",
    "url": "movie-675.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，悬疑",
    "category": "全球佳片",
    "cover": "./75.jpg"
  },
  {
    "title": "安邦定国志",
    "url": "movie-676.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史, 古装, 权谋",
    "category": "全球佳片",
    "cover": "./76.jpg"
  },
  {
    "title": "搅乜鬼咁多青春片",
    "url": "movie-677.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 青春, 恶搞",
    "category": "动漫动画",
    "cover": "./77.jpg"
  },
  {
    "title": "无敌铁金刚对恶魔人",
    "url": "movie-678.html",
    "year": "1973",
    "region": "日本",
    "type": "电影",
    "genre": "动作，科幻，特摄",
    "category": "动作犯罪",
    "cover": "./78.jpg"
  },
  {
    "title": "愤怒的小鸟2",
    "url": "movie-679.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画 / 动作",
    "category": "动作犯罪",
    "cover": "./79.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 仙女湖 篮球冠军 海难1890 黑暗的胜利 更好的姐妹 烂故事 对面恶女看过来 魔物娘的同居日常 起跳 春花娇美可人儿 王之逆袭：意志的继承者 我在迪拜等你 哈啦万人迷 玩命狙击 黑人商业教父 永远的我们 信使2稻草人 玩命关头8 蝴蝶效应2 赤手擒凶",
    "url": "movie-680.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "爱情喜剧",
    "cover": "./80.jpg"
  },
  {
    "title": "碧血金沙",
    "url": "movie-681.html",
    "year": "1948",
    "region": "美国",
    "type": "Movie",
    "genre": "冒险, 西部",
    "category": "科幻奇幻",
    "cover": "./81.jpg"
  },
  {
    "title": "硬骑",
    "url": "movie-682.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "西部，冒险",
    "category": "华语专区",
    "cover": "./82.jpg"
  },
  {
    "title": "深夜电台2明月与晨星",
    "url": "movie-683.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "精选电影",
    "cover": "./83.jpg"
  },
  {
    "title": "卡特彼勒的和服",
    "url": "movie-684.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，奇幻",
    "category": "动作犯罪",
    "cover": "./84.jpg"
  },
  {
    "title": "作戏",
    "url": "movie-685.html",
    "year": "2003",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，同性",
    "category": "华语专区",
    "cover": "./85.jpg"
  },
  {
    "title": "战天狼",
    "url": "movie-686.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 战争 / 动作",
    "category": "爱情喜剧",
    "cover": "./86.jpg"
  },
  {
    "title": "防御全开",
    "url": "movie-687.html",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "科幻奇幻",
    "cover": "./87.jpg"
  },
  {
    "title": "八仙渡海扫妖魔",
    "url": "movie-688.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 神话 / 喜剧",
    "category": "爱情喜剧",
    "cover": "./88.jpg"
  },
  {
    "title": "紧急呼救：孤星第一季",
    "url": "movie-689.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 剧情, 灾难",
    "category": "精选电影",
    "cover": "./89.jpg"
  },
  {
    "title": "尼克·克罗尔：小小大男孩",
    "url": "movie-690.html",
    "year": "2024",
    "region": "美国",
    "type": "综艺",
    "genre": "喜剧",
    "category": "全球佳片",
    "cover": "./90.jpg"
  },
  {
    "title": "信徒",
    "url": "movie-691.html",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./91.jpg"
  },
  {
    "title": "大峡谷",
    "url": "movie-692.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "category": "动作犯罪",
    "cover": "./92.jpg"
  },
  {
    "title": "杀手来电",
    "url": "movie-693.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "category": "热门剧集",
    "cover": "./93.jpg"
  },
  {
    "title": "心里美",
    "url": "movie-694.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "category": "动作犯罪",
    "cover": "./94.jpg"
  },
  {
    "title": "八两金",
    "url": "movie-695.html",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情， 爱情",
    "category": "爱情喜剧",
    "cover": "./95.jpg"
  },
  {
    "title": "国际机场一九七五",
    "url": "movie-696.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "动漫动画",
    "cover": "./96.jpg"
  },
  {
    "title": "爱你就捧你",
    "url": "movie-697.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "动作犯罪",
    "cover": "./97.jpg"
  },
  {
    "title": "绿箭侠第六季",
    "url": "movie-698.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 科幻 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./98.jpg"
  },
  {
    "title": "王室绯闻守则",
    "url": "movie-699.html",
    "year": "2023",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 同性",
    "category": "动漫动画",
    "cover": "./99.jpg"
  },
  {
    "title": "黑玫瑰公寓",
    "url": "movie-700.html",
    "year": "2020",
    "region": "法国, 意大利",
    "type": "电影",
    "genre": "悬疑, 恐怖",
    "category": "纪录综艺",
    "cover": "./100.jpg"
  },
  {
    "title": "蝴蝶飞",
    "url": "movie-701.html",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "纪录综艺",
    "cover": "./101.jpg"
  },
  {
    "title": "野潮",
    "url": "movie-702.html",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "剧情, 青春",
    "category": "悬疑惊悚",
    "cover": "./102.jpg"
  },
  {
    "title": "新吸血僵尸",
    "url": "movie-703.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "精选电影",
    "cover": "./103.jpg"
  },
  {
    "title": "恐怖怪物",
    "url": "movie-704.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 超自然",
    "category": "精选电影",
    "cover": "./104.jpg"
  },
  {
    "title": "心田深处",
    "url": "movie-705.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 治愈",
    "category": "动漫动画",
    "cover": "./105.jpg"
  },
  {
    "title": "爱民村官",
    "url": "movie-706.html",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 乡村",
    "category": "动漫动画",
    "cover": "./106.jpg"
  },
  {
    "title": "双马尾女战士",
    "url": "movie-707.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动作 / 科幻 / 奇幻",
    "category": "悬疑惊悚",
    "cover": "./107.jpg"
  },
  {
    "title": "香港奇案雾夜屠夫",
    "url": "movie-708.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "category": "全球佳片",
    "cover": "./108.jpg"
  },
  {
    "title": "柠檬仙丹",
    "url": "movie-709.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻剧情",
    "category": "动作犯罪",
    "cover": "./109.jpg"
  },
  {
    "title": "自由",
    "url": "movie-710.html",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 逃亡 / 历史 / 悬疑",
    "category": "热门剧集",
    "cover": "./110.jpg"
  },
  {
    "title": "糊涂蛋",
    "url": "movie-711.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "category": "动漫动画",
    "cover": "./111.jpg"
  },
  {
    "title": "读心人第二季",
    "url": "movie-712.html",
    "year": "2026",
    "region": "加拿大",
    "type": "剧情, 科幻, 犯罪",
    "genre": "读心, 超能力, 侦探, 阴谋, 第二季",
    "category": "纪录综艺",
    "cover": "./112.jpg"
  },
  {
    "title": "到不了的地方",
    "url": "movie-713.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "华语专区",
    "cover": "./113.jpg"
  },
  {
    "title": "再见巨人",
    "url": "movie-714.html",
    "year": "2023",
    "region": "挪威",
    "type": "科幻灾难电影",
    "genre": "科幻 / 灾难 / 人文",
    "category": "动作犯罪",
    "cover": "./114.jpg"
  },
  {
    "title": "狄仁杰·通天人偶",
    "url": "movie-715.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 古装 / 奇幻",
    "category": "纪录综艺",
    "cover": "./115.jpg"
  },
  {
    "title": "她和她的小主厨们",
    "url": "movie-716.html",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "美食 / 励志",
    "category": "爱情喜剧",
    "cover": "./116.jpg"
  },
  {
    "title": "厉爷的心尖妻",
    "url": "movie-717.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "爱情 / 悬疑",
    "category": "全球佳片",
    "cover": "./117.jpg"
  },
  {
    "title": "鬼娃恰吉第二季",
    "url": "movie-718.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖, 惊悚",
    "category": "热门剧集",
    "cover": "./118.jpg"
  },
  {
    "title": "魔物恋人",
    "url": "movie-719.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻, 爱情, 恐怖",
    "category": "动作犯罪",
    "cover": "./119.jpg"
  },
  {
    "title": "洗衣铺群星事件簿粤语",
    "url": "movie-720.html",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑喜剧",
    "category": "爱情喜剧",
    "cover": "./120.jpg"
  },
  {
    "title": "滑板女孩",
    "url": "movie-721.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "运动, 青春",
    "category": "纪录综艺",
    "cover": "./121.jpg"
  },
  {
    "title": "部长做了一个梦",
    "url": "movie-722.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 政治讽刺",
    "category": "全球佳片",
    "cover": "./122.jpg"
  },
  {
    "title": "武动乾坤第四季",
    "url": "movie-723.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画、玄幻、冒险",
    "category": "热门剧集",
    "cover": "./123.jpg"
  },
  {
    "title": "绞肉行动",
    "url": "movie-724.html",
    "year": "2024",
    "region": "英国 / 西班牙",
    "type": "电影",
    "genre": "战争 / 悬疑",
    "category": "纪录综艺",
    "cover": "./124.jpg"
  },
  {
    "title": "人鱼公主三千岁",
    "url": "movie-725.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 古装",
    "category": "精选电影",
    "cover": "./125.jpg"
  },
  {
    "title": "骨肉重逢",
    "url": "movie-726.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，剧情",
    "category": "悬疑惊悚",
    "cover": "./126.jpg"
  },
  {
    "title": "精神狂躁症",
    "url": "movie-727.html",
    "year": "2016",
    "region": "英国/美国",
    "type": "电影",
    "genre": "剧情, 悬疑, 心理",
    "category": "热门剧集",
    "cover": "./127.jpg"
  },
  {
    "title": "风流儍侠",
    "url": "movie-728.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "全球佳片",
    "cover": "./128.jpg"
  },
  {
    "title": "蓝海少女",
    "url": "movie-729.html",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "治愈, 日常",
    "category": "动作犯罪",
    "cover": "./129.jpg"
  },
  {
    "title": "源代码国语",
    "url": "movie-730.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "category": "华语专区",
    "cover": "./130.jpg"
  },
  {
    "title": "法蒂玛的奇迹",
    "url": "movie-731.html",
    "year": "2020",
    "region": "葡萄牙",
    "type": "电影",
    "genre": "剧情、历史、宗教",
    "category": "精选电影",
    "cover": "./131.jpg"
  },
  {
    "title": "守诚者国语",
    "url": "movie-732.html",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪 / 悬疑",
    "category": "精选电影",
    "cover": "./132.jpg"
  },
  {
    "title": "猫之茗",
    "url": "movie-733.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画 / 奇幻",
    "category": "动作犯罪",
    "cover": "./133.jpg"
  },
  {
    "title": "黄梅戏宗师传奇",
    "url": "movie-734.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "传记, 戏曲, 年代",
    "category": "悬疑惊悚",
    "cover": "./134.jpg"
  },
  {
    "title": "一屋冤鬼亲家",
    "url": "movie-735.html",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧, 恐怖, 家庭",
    "category": "热门剧集",
    "cover": "./135.jpg"
  },
  {
    "title": "炊事班的故事2",
    "url": "movie-736.html",
    "year": "2004",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "情景喜剧 / 军旅",
    "category": "悬疑惊悚",
    "cover": "./136.jpg"
  },
  {
    "title": "九月的某一天",
    "url": "movie-737.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情文艺",
    "category": "热门剧集",
    "cover": "./137.jpg"
  },
  {
    "title": "金窝骇浪",
    "url": "movie-738.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，动作，悬疑",
    "category": "纪录综艺",
    "cover": "./138.jpg"
  },
  {
    "title": "名侦探柯南：远海的侦探",
    "url": "movie-739.html",
    "year": "2013",
    "region": "日本",
    "type": "电影",
    "genre": "动画、悬疑",
    "category": "纪录综艺",
    "cover": "./139.jpg"
  },
  {
    "title": "密室艳尸",
    "url": "movie-740.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、悬疑、情色",
    "category": "动作犯罪",
    "cover": "./140.jpg"
  },
  {
    "title": "指尖2018",
    "url": "movie-741.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 文艺",
    "category": "动作犯罪",
    "cover": "./141.jpg"
  },
  {
    "title": "鬼马太空猫",
    "url": "movie-742.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画喜剧",
    "category": "科幻奇幻",
    "cover": "./142.jpg"
  },
  {
    "title": "意外制造公司",
    "url": "movie-743.html",
    "year": "2024",
    "region": "荷兰",
    "type": "电影",
    "genre": "黑色喜剧，剧情",
    "category": "纪录综艺",
    "cover": "./143.jpg"
  },
  {
    "title": "汉娜第三季",
    "url": "movie-744.html",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/剧情/间谍",
    "category": "动作犯罪",
    "cover": "./144.jpg"
  },
  {
    "title": "再吻一次",
    "url": "movie-745.html",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "爱情喜剧",
    "cover": "./145.jpg"
  },
  {
    "title": "回魂夜1995",
    "url": "movie-746.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "纪录综艺",
    "cover": "./146.jpg"
  },
  {
    "title": "美国风情画2",
    "url": "movie-747.html",
    "year": "1979",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 剧情， 青春",
    "category": "纪录综艺",
    "cover": "./147.jpg"
  },
  {
    "title": "格杀密令",
    "url": "movie-748.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "category": "动漫动画",
    "cover": "./148.jpg"
  },
  {
    "title": "顶空",
    "url": "movie-749.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 心理",
    "category": "动作犯罪",
    "cover": "./149.jpg"
  },
  {
    "title": "周恩来回延安",
    "url": "movie-750.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 传记",
    "category": "动漫动画",
    "cover": "./150.jpg"
  },
  {
    "title": "我的天才宝贝国语",
    "url": "movie-751.html",
    "year": "2025",
    "region": "中国台湾 / 美国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 科幻",
    "category": "全球佳片",
    "cover": "./1.jpg"
  },
  {
    "title": "潘纳·哈拉",
    "url": "movie-752.html",
    "year": "2016",
    "region": "印度",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "科幻奇幻",
    "cover": "./2.jpg"
  },
  {
    "title": "厄运",
    "url": "movie-753.html",
    "year": "2026",
    "region": "德国 / 奥地利",
    "type": "电视剧",
    "genre": "剧情 / 犯罪 / 人性",
    "category": "热门剧集",
    "cover": "./3.jpg"
  },
  {
    "title": "恶灵之家",
    "url": "movie-754.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "科幻奇幻",
    "cover": "./4.jpg"
  },
  {
    "title": "世纪大怪兽",
    "url": "movie-755.html",
    "year": "1954",
    "region": "日本",
    "type": "电影",
    "genre": "科幻，恐怖，灾难",
    "category": "热门剧集",
    "cover": "./5.jpg"
  },
  {
    "title": "超能公主",
    "url": "movie-756.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 奇幻",
    "category": "动漫动画",
    "cover": "./6.jpg"
  },
  {
    "title": "捉迷藏2021",
    "url": "movie-757.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖，惊悚",
    "category": "纪录综艺",
    "cover": "./7.jpg"
  },
  {
    "title": "光之雨",
    "url": "movie-758.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 治愈",
    "category": "精选电影",
    "cover": "./8.jpg"
  },
  {
    "title": "绝地英雌",
    "url": "movie-759.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作， 战争， 历史",
    "category": "科幻奇幻",
    "cover": "./9.jpg"
  },
  {
    "title": "圣彼得堡的囚徒",
    "url": "movie-760.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "历史 / 悬疑 / 剧情",
    "category": "精选电影",
    "cover": "./10.jpg"
  },
  {
    "title": "南极穿越",
    "url": "movie-761.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 科考 / 冒险",
    "category": "华语专区",
    "cover": "./11.jpg"
  },
  {
    "title": "石雕宅邸杀人事件",
    "url": "movie-762.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "热门剧集",
    "cover": "./12.jpg"
  },
  {
    "title": "我笨善良",
    "url": "movie-763.html",
    "year": "2025",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "剧情、生活",
    "category": "全球佳片",
    "cover": "./13.jpg"
  },
  {
    "title": "欢乐皱纹",
    "url": "movie-764.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影 / 动画",
    "genre": "剧情 / 动画 / 家庭",
    "category": "爱情喜剧",
    "cover": "./14.jpg"
  },
  {
    "title": "来勾引我男友吧！",
    "url": "movie-765.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 爱情",
    "category": "动作犯罪",
    "cover": "./15.jpg"
  },
  {
    "title": "再见再见",
    "url": "movie-766.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "爱情喜剧",
    "cover": "./16.jpg"
  },
  {
    "title": "一一九",
    "url": "movie-767.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 剧情",
    "category": "华语专区",
    "cover": "./17.jpg"
  },
  {
    "title": "大班密令之英雄交响曲粤语",
    "url": "movie-768.html",
    "year": "1987",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作/警匪",
    "category": "全球佳片",
    "cover": "./18.jpg"
  },
  {
    "title": "失败者",
    "url": "movie-769.html",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 剧情 / 青春",
    "category": "全球佳片",
    "cover": "./19.jpg"
  },
  {
    "title": "魔仿犯",
    "url": "movie-770.html",
    "year": "2023",
    "region": "日本",
    "type": "超自然悬疑电影",
    "genre": "犯罪, 超自然, 悬疑",
    "category": "精选电影",
    "cover": "./20.jpg"
  },
  {
    "title": "学园帅哥",
    "url": "movie-771.html",
    "year": "2022",
    "region": "日本",
    "type": "动画剧集",
    "genre": "校园、耽美、喜剧",
    "category": "华语专区",
    "cover": "./21.jpg"
  },
  {
    "title": "太阳高照",
    "url": "movie-772.html",
    "year": "2022",
    "region": "克罗地亚",
    "type": "电影",
    "genre": "战争、剧情",
    "category": "爱情喜剧",
    "cover": "./22.jpg"
  },
  {
    "title": "历史的终结",
    "url": "movie-773.html",
    "year": "2024",
    "region": "菲律宾/法国",
    "type": "电影",
    "genre": "剧情， 历史",
    "category": "全球佳片",
    "cover": "./23.jpg"
  },
  {
    "title": "永久删除",
    "url": "movie-774.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻惊悚",
    "category": "爱情喜剧",
    "cover": "./24.jpg"
  },
  {
    "title": "杯酒人生",
    "url": "movie-775.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "热门剧集",
    "cover": "./25.jpg"
  },
  {
    "title": "火鸡谷",
    "url": "movie-776.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "悬疑惊悚",
    "cover": "./26.jpg"
  },
  {
    "title": "强渡乌江之对岸",
    "url": "movie-777.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "战争， 动作， 历史",
    "category": "热门剧集",
    "cover": "./27.jpg"
  },
  {
    "title": "幻世浮生",
    "url": "movie-778.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 惊悚",
    "category": "动作犯罪",
    "cover": "./28.jpg"
  },
  {
    "title": "兰若行者",
    "url": "movie-779.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "奇幻， 武侠， 悬疑",
    "category": "热门剧集",
    "cover": "./29.jpg"
  },
  {
    "title": "双重间谍",
    "url": "movie-780.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "谍战动作",
    "category": "纪录综艺",
    "cover": "./30.jpg"
  },
  {
    "title": "欲海妖僧",
    "url": "movie-781.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色，奇幻，古装",
    "category": "华语专区",
    "cover": "./31.jpg"
  },
  {
    "title": "清醒",
    "url": "movie-782.html",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "纪录综艺",
    "cover": "./32.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 克莱默夫妇 狼族之中 汽车先生和圣殿骑士团 一种爱 女孩为何出走 今日宜加油 美人三嫁 无法逃避 庭怨森森 我是顾家男 德州英豪 奇谋暗杀 打工吧！魔王大人第一季 我能有个见证人吗 夏日一段情 无辣不欢 晚餐时间 十五天就玩完 谍血英魂 智斗无双",
    "url": "movie-783.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "科幻奇幻",
    "cover": "./33.jpg"
  },
  {
    "title": "灰羽联盟",
    "url": "movie-784.html",
    "year": "2002",
    "region": "日本",
    "type": "电视剧",
    "genre": "动画 / 奇幻 / 治愈",
    "category": "动作犯罪",
    "cover": "./34.jpg"
  },
  {
    "title": "好想好想爱上你",
    "url": "movie-785.html",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情 / 都市 / 轻喜剧",
    "category": "精选电影",
    "cover": "./35.jpg"
  },
  {
    "title": "花开有晴天第2季",
    "url": "movie-786.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 偶像, 职场",
    "category": "悬疑惊悚",
    "cover": "./36.jpg"
  },
  {
    "title": "继任总统",
    "url": "movie-787.html",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "政治 / 剧情",
    "category": "爱情喜剧",
    "cover": "./37.jpg"
  },
  {
    "title": "检阅日",
    "url": "movie-788.html",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "category": "全球佳片",
    "cover": "./38.jpg"
  },
  {
    "title": "怒海追逐战",
    "url": "movie-789.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 灾难",
    "category": "华语专区",
    "cover": "./39.jpg"
  },
  {
    "title": "噢！我的鬼神",
    "url": "movie-790.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 奇幻, 喜剧",
    "category": "精选电影",
    "cover": "./40.jpg"
  },
  {
    "title": "神水奇缘",
    "url": "movie-791.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻、冒险、喜剧",
    "category": "科幻奇幻",
    "cover": "./41.jpg"
  },
  {
    "title": "奶酪陷阱",
    "url": "movie-792.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情爱情惊悚",
    "category": "科幻奇幻",
    "cover": "./42.jpg"
  },
  {
    "title": "全彩少年法老",
    "url": "movie-793.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "冒险",
    "category": "动作犯罪",
    "cover": "./43.jpg"
  },
  {
    "title": "洪堡亲王",
    "url": "movie-794.html",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "历史， 传记",
    "category": "华语专区",
    "cover": "./44.jpg"
  },
  {
    "title": "一半儿",
    "url": "movie-795.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，同性",
    "category": "精选电影",
    "cover": "./45.jpg"
  },
  {
    "title": "荒漠恶种",
    "url": "movie-796.html",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 恐怖 / 悬疑",
    "category": "全球佳片",
    "cover": "./46.jpg"
  },
  {
    "title": "亲爱的大笨象",
    "url": "movie-797.html",
    "year": "2017",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "爱情喜剧",
    "cover": "./47.jpg"
  },
  {
    "title": "高举·爱",
    "url": "movie-798.html",
    "year": "2012",
    "region": "中国大陆, 香港",
    "type": "电影",
    "genre": "爱情, 运动",
    "category": "科幻奇幻",
    "cover": "./48.jpg"
  },
  {
    "title": "战玄武",
    "url": "movie-799.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 动作",
    "category": "动漫动画",
    "cover": "./49.jpg"
  },
  {
    "title": "怪奇宅",
    "url": "movie-800.html",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./50.jpg"
  },
  {
    "title": "近藤勇传",
    "url": "movie-801.html",
    "year": "2024",
    "region": "日本",
    "type": "TV系列剧",
    "genre": "历史, 传记, 动作",
    "category": "科幻奇幻",
    "cover": "./51.jpg"
  },
  {
    "title": "野兽刑警",
    "url": "movie-802.html",
    "year": "1998",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪 / 动作 / 惊悚",
    "category": "动漫动画",
    "cover": "./52.jpg"
  },
  {
    "title": "银色之翼",
    "url": "movie-803.html",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 历史 / 传记",
    "category": "动作犯罪",
    "cover": "./53.jpg"
  },
  {
    "title": "我们曾经很酷",
    "url": "movie-804.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 喜剧",
    "category": "动作犯罪",
    "cover": "./54.jpg"
  },
  {
    "title": "马路英雄",
    "url": "movie-805.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./55.jpg"
  },
  {
    "title": "艺术系女生",
    "url": "movie-806.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 校园",
    "category": "动漫动画",
    "cover": "./56.jpg"
  },
  {
    "title": "猎豹行动",
    "url": "movie-807.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，战争，惊悚",
    "category": "动作犯罪",
    "cover": "./57.jpg"
  },
  {
    "title": "僵尸之王",
    "url": "movie-808.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，动作，奇幻",
    "category": "爱情喜剧",
    "cover": "./58.jpg"
  },
  {
    "title": "一天",
    "url": "movie-809.html",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 科幻 / 爱情",
    "category": "动作犯罪",
    "cover": "./59.jpg"
  },
  {
    "title": "盟军",
    "url": "movie-810.html",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "谍战, 惊悚",
    "category": "精选电影",
    "cover": "./60.jpg"
  },
  {
    "title": "笨蛋们漫长的冬天",
    "url": "movie-811.html",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "青春, 悬疑, 治愈",
    "category": "动漫动画",
    "cover": "./61.jpg"
  },
  {
    "title": "梵蒂冈奇迹调查官",
    "url": "movie-812.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "category": "华语专区",
    "cover": "./62.jpg"
  },
  {
    "title": "鬼女艾拉",
    "url": "movie-813.html",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "纪录综艺",
    "cover": "./63.jpg"
  },
  {
    "title": "寂静人生",
    "url": "movie-814.html",
    "year": "2013",
    "region": "英国",
    "type": "电影",
    "genre": "剧情",
    "category": "纪录综艺",
    "cover": "./64.jpg"
  },
  {
    "title": "神啊，请赐我耐心",
    "url": "movie-815.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "动作犯罪",
    "cover": "./65.jpg"
  },
  {
    "title": "宾果地狱",
    "url": "movie-816.html",
    "year": "2016",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 黑色幽默",
    "category": "悬疑惊悚",
    "cover": "./66.jpg"
  },
  {
    "title": "紧急救命2",
    "url": "movie-817.html",
    "year": "2026",
    "region": "日本",
    "type": "电视剧/网剧",
    "genre": "剧情, 医疗, 灾难",
    "category": "精选电影",
    "cover": "./67.jpg"
  },
  {
    "title": "通灵男孩诺曼",
    "url": "movie-818.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动画、喜剧、恐怖",
    "category": "爱情喜剧",
    "cover": "./68.jpg"
  },
  {
    "title": "身份危机",
    "url": "movie-819.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 犯罪",
    "category": "动作犯罪",
    "cover": "./69.jpg"
  },
  {
    "title": "果汁",
    "url": "movie-820.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春 / 文艺 / 家庭",
    "category": "纪录综艺",
    "cover": "./70.jpg"
  },
  {
    "title": "水缸",
    "url": "movie-821.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "动漫动画",
    "cover": "./71.jpg"
  },
  {
    "title": "灰烬星期三",
    "url": "movie-822.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 宗教 / 心理",
    "category": "动漫动画",
    "cover": "./72.jpg"
  },
  {
    "title": "最后救援",
    "url": "movie-823.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "category": "悬疑惊悚",
    "cover": "./73.jpg"
  },
  {
    "title": "快餐店霸凌事件",
    "url": "movie-824.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚",
    "category": "悬疑惊悚",
    "cover": "./74.jpg"
  },
  {
    "title": "沉默的阴谋",
    "url": "movie-825.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 惊悚, 犯罪",
    "category": "精选电影",
    "cover": "./75.jpg"
  },
  {
    "title": "空无一物",
    "url": "movie-826.html",
    "year": "2022",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 哲思",
    "category": "动漫动画",
    "cover": "./76.jpg"
  },
  {
    "title": "乙方恋爱",
    "url": "movie-827.html",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 职场",
    "category": "全球佳片",
    "cover": "./77.jpg"
  },
  {
    "title": "芳心之罪",
    "url": "movie-828.html",
    "year": "1989",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "精选电影",
    "cover": "./78.jpg"
  },
  {
    "title": "一起开麦吧",
    "url": "movie-829.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺 / 剧集",
    "genre": "喜剧 / 脱口秀 / 真人秀",
    "category": "纪录综艺",
    "cover": "./79.jpg"
  },
  {
    "title": "玫瑰楼迷影",
    "url": "movie-830.html",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "华语专区",
    "cover": "./80.jpg"
  },
  {
    "title": "老婆大人2国语",
    "url": "movie-831.html",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 律政",
    "category": "科幻奇幻",
    "cover": "./81.jpg"
  },
  {
    "title": "喧闹一家亲：苏格兰大冒险",
    "url": "movie-832.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧 / 冒险",
    "category": "全球佳片",
    "cover": "./82.jpg"
  },
  {
    "title": "少年派的奇幻漂流",
    "url": "movie-833.html",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "冒险，剧情，奇幻",
    "category": "动漫动画",
    "cover": "./83.jpg"
  },
  {
    "title": "超能小队",
    "url": "movie-834.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集 (动画)",
    "genre": "科幻, 青春",
    "category": "悬疑惊悚",
    "cover": "./84.jpg"
  },
  {
    "title": "团的儿子",
    "url": "movie-835.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争, 剧情",
    "category": "动漫动画",
    "cover": "./85.jpg"
  },
  {
    "title": "冰原空难",
    "url": "movie-836.html",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "genre": "灾难 / 生存 / 剧情",
    "category": "动漫动画",
    "cover": "./86.jpg"
  },
  {
    "title": "欢喜大逃亡",
    "url": "movie-837.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 公路",
    "category": "悬疑惊悚",
    "cover": "./87.jpg"
  },
  {
    "title": "天使的身体",
    "url": "movie-838.html",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑、惊悚、宗教",
    "category": "华语专区",
    "cover": "./88.jpg"
  },
  {
    "title": "蝴蝶效应2",
    "url": "movie-839.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚，剧情",
    "category": "科幻奇幻",
    "cover": "./89.jpg"
  },
  {
    "title": "血肉秀",
    "url": "movie-840.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "全球佳片",
    "cover": "./90.jpg"
  },
  {
    "title": "涉外大饭店",
    "url": "movie-841.html",
    "year": "2025",
    "region": "英国/印度",
    "type": "电影",
    "genre": "剧情， 喜剧",
    "category": "动作犯罪",
    "cover": "./91.jpg"
  },
  {
    "title": "我债免我责",
    "url": "movie-842.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/犯罪/家庭",
    "category": "爱情喜剧",
    "cover": "./92.jpg"
  },
  {
    "title": "王子与贫民窟",
    "url": "movie-843.html",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情，喜剧",
    "category": "精选电影",
    "cover": "./93.jpg"
  },
  {
    "title": "照明商店",
    "url": "movie-844.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 奇幻 / 温情",
    "category": "动作犯罪",
    "cover": "./94.jpg"
  },
  {
    "title": "愤怒",
    "url": "movie-845.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 心理",
    "category": "悬疑惊悚",
    "cover": "./95.jpg"
  },
  {
    "title": "金殿劫美",
    "url": "movie-846.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 悬疑",
    "category": "动作犯罪",
    "cover": "./96.jpg"
  },
  {
    "title": "齐天大圣之五指山",
    "url": "movie-847.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 奇幻 / 神话",
    "category": "悬疑惊悚",
    "cover": "./97.jpg"
  },
  {
    "title": "人民的名义",
    "url": "movie-848.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情，反腐，刑侦",
    "category": "热门剧集",
    "cover": "./98.jpg"
  },
  {
    "title": "卿怜我爱",
    "url": "movie-849.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "华语专区",
    "cover": "./99.jpg"
  },
  {
    "title": "逐星女第二季",
    "url": "movie-850.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/冒险",
    "category": "动作犯罪",
    "cover": "./100.jpg"
  },
  {
    "title": "一个用英明撑起的国家",
    "url": "movie-851.html",
    "year": "2024",
    "region": "英国",
    "type": "电视剧（限定剧）",
    "genre": "历史 / 政治 / 传记",
    "category": "热门剧集",
    "cover": "./101.jpg"
  },
  {
    "title": "饮食男女",
    "url": "movie-852.html",
    "year": "1994",
    "region": "中国台湾 / 美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 爱情",
    "category": "纪录综艺",
    "cover": "./102.jpg"
  },
  {
    "title": "愿望成真",
    "url": "movie-853.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻， 冒险， 家庭",
    "category": "精选电影",
    "cover": "./103.jpg"
  },
  {
    "title": "恐怖草原",
    "url": "movie-854.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 西部",
    "category": "爱情喜剧",
    "cover": "./104.jpg"
  },
  {
    "title": "乱世狂爱",
    "url": "movie-855.html",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、犯罪、剧情",
    "category": "纪录综艺",
    "cover": "./105.jpg"
  },
  {
    "title": "生活大爆炸第一季",
    "url": "movie-856.html",
    "year": "2007",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "category": "悬疑惊悚",
    "cover": "./106.jpg"
  },
  {
    "title": "最佳夫婿",
    "url": "movie-857.html",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧, 爱情, 古装",
    "category": "动漫动画",
    "cover": "./107.jpg"
  },
  {
    "title": "侦探韩森",
    "url": "movie-858.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑, 犯罪, 剧情",
    "category": "精选电影",
    "cover": "./108.jpg"
  },
  {
    "title": "境界线上的地平线第二季",
    "url": "movie-859.html",
    "year": "2024",
    "region": "日本",
    "type": "TV动画剧集",
    "genre": "科幻 / 奇幻 / 战斗 / 后宫",
    "category": "动作犯罪",
    "cover": "./109.jpg"
  },
  {
    "title": "蛇鹤八步粤语",
    "url": "movie-860.html",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，武侠",
    "category": "悬疑惊悚",
    "cover": "./110.jpg"
  },
  {
    "title": "上翼！",
    "url": "movie-861.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "纪录综艺",
    "cover": "./111.jpg"
  },
  {
    "title": "尘世之间",
    "url": "movie-862.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 文艺",
    "category": "华语专区",
    "cover": "./112.jpg"
  },
  {
    "title": "沉睡魔咒",
    "url": "movie-863.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 冒险",
    "category": "华语专区",
    "cover": "./113.jpg"
  },
  {
    "title": "世界的末日",
    "url": "movie-864.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 灾难",
    "category": "科幻奇幻",
    "cover": "./114.jpg"
  },
  {
    "title": "祝你有个甜美的梦",
    "url": "movie-865.html",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 奇幻",
    "category": "全球佳片",
    "cover": "./115.jpg"
  },
  {
    "title": "驱魔拍档",
    "url": "movie-866.html",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑 / 灵异 / 喜剧",
    "category": "全球佳片",
    "cover": "./116.jpg"
  },
  {
    "title": "春之血祭",
    "url": "movie-867.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖， 民俗",
    "category": "动作犯罪",
    "cover": "./117.jpg"
  },
  {
    "title": "工会成员",
    "url": "movie-868.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "纪录综艺",
    "cover": "./118.jpg"
  },
  {
    "title": "情场三杰",
    "url": "movie-869.html",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 都市",
    "category": "动作犯罪",
    "cover": "./119.jpg"
  },
  {
    "title": "美食大冒险之英雄烩",
    "url": "movie-870.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 喜剧 / 冒险",
    "category": "热门剧集",
    "cover": "./120.jpg"
  },
  {
    "title": "云雾之上",
    "url": "movie-871.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险 / 灾难",
    "category": "精选电影",
    "cover": "./121.jpg"
  },
  {
    "title": "意",
    "url": "movie-872.html",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 艺术",
    "category": "精选电影",
    "cover": "./122.jpg"
  },
  {
    "title": "狸猫书生",
    "url": "movie-873.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装奇幻 / 悬疑 / 喜剧",
    "category": "华语专区",
    "cover": "./123.jpg"
  },
  {
    "title": "玩具总动员5",
    "url": "movie-874.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动画",
    "category": "纪录综艺",
    "cover": "./124.jpg"
  },
  {
    "title": "来自中国的熊猫",
    "url": "movie-875.html",
    "year": "2028",
    "region": "美国 / 中国大陆",
    "type": "电影 / 动画",
    "genre": "动画 / 冒险 / 喜剧",
    "category": "动漫动画",
    "cover": "./125.jpg"
  },
  {
    "title": "搏命单刀夺命枪",
    "url": "movie-876.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 西部 / 武侠",
    "category": "精选电影",
    "cover": "./126.jpg"
  },
  {
    "title": "马来海盗",
    "url": "movie-877.html",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "动作, 冒险",
    "category": "华语专区",
    "cover": "./127.jpg"
  },
  {
    "title": "克隆军团",
    "url": "movie-878.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作",
    "category": "华语专区",
    "cover": "./128.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 恶行 生活，高于一切 地心抢险记 如何做爱 再生缘国语 大清御史 魔窟喋血 人生闹剧 中南海保镳 老虎的学徒 时时刻刻 我可以47 飘飘欲仙 天上篇 宇宙皇子 都是一家人 王牌对王牌第五季 难民危机 撒谎的侦探 对我而言危险的他 乔乔的异想世界",
    "url": "movie-879.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "全球佳片",
    "cover": "./129.jpg"
  },
  {
    "title": "正义联盟：超级最前线",
    "url": "movie-880.html",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "动作, 科幻",
    "category": "动漫动画",
    "cover": "./130.jpg"
  },
  {
    "title": "奔向自由的探戈",
    "url": "movie-881.html",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情，音乐",
    "category": "全球佳片",
    "cover": "./131.jpg"
  },
  {
    "title": "玩命关头5",
    "url": "movie-882.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "纪录综艺",
    "cover": "./132.jpg"
  },
  {
    "title": "凯撒万岁",
    "url": "movie-883.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "史诗 / 动作 / 政治惊悚",
    "category": "全球佳片",
    "cover": "./133.jpg"
  },
  {
    "title": "金爆内幕",
    "url": "movie-884.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 喜剧",
    "category": "华语专区",
    "cover": "./134.jpg"
  },
  {
    "title": "洗冤录2粤语",
    "url": "movie-885.html",
    "year": "2010",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装, 悬疑, 法医",
    "category": "全球佳片",
    "cover": "./135.jpg"
  },
  {
    "title": "渔光春潮",
    "url": "movie-886.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "全球佳片",
    "cover": "./136.jpg"
  },
  {
    "title": "明宫词",
    "url": "movie-887.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装、宫廷、悬疑",
    "category": "全球佳片",
    "cover": "./137.jpg"
  },
  {
    "title": "富城",
    "url": "movie-888.html",
    "year": "2016",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "热门剧集",
    "cover": "./138.jpg"
  },
  {
    "title": "国王：永远的君主",
    "url": "movie-889.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 平行世界",
    "category": "科幻奇幻",
    "cover": "./139.jpg"
  },
  {
    "title": "冠军之师",
    "url": "movie-890.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 体育 / 励志",
    "category": "动作犯罪",
    "cover": "./140.jpg"
  },
  {
    "title": "日月神剑国语",
    "url": "movie-891.html",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠 / 奇幻",
    "category": "爱情喜剧",
    "cover": "./141.jpg"
  },
  {
    "title": "地狱公使第二季",
    "url": "movie-892.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 恐怖 / 奇幻",
    "category": "华语专区",
    "cover": "./142.jpg"
  },
  {
    "title": "困",
    "url": "movie-893.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "category": "爱情喜剧",
    "cover": "./143.jpg"
  },
  {
    "title": "多难人生",
    "url": "movie-894.html",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情 / 传记",
    "category": "科幻奇幻",
    "cover": "./144.jpg"
  },
  {
    "title": "寻秦记国语",
    "url": "movie-895.html",
    "year": "2001",
    "region": "中国香港",
    "type": "剧集",
    "genre": "穿越 / 古装",
    "category": "华语专区",
    "cover": "./145.jpg"
  },
  {
    "title": "飞行家",
    "url": "movie-896.html",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "传记剧情",
    "category": "动漫动画",
    "cover": "./146.jpg"
  },
  {
    "title": "爱到杀死你",
    "url": "movie-897.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 犯罪",
    "category": "纪录综艺",
    "cover": "./147.jpg"
  },
  {
    "title": "男儿无罪",
    "url": "movie-898.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 动作",
    "category": "华语专区",
    "cover": "./148.jpg"
  },
  {
    "title": "纽约黑帮纪实",
    "url": "movie-899.html",
    "year": "2020",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪, 纪录风, 都市",
    "category": "全球佳片",
    "cover": "./149.jpg"
  },
  {
    "title": "蜂电影",
    "url": "movie-900.html",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 喜剧",
    "category": "华语专区",
    "cover": "./150.jpg"
  },
  {
    "title": "废物",
    "url": "movie-901.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧 / 犯罪 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./1.jpg"
  },
  {
    "title": "毒蛇吓机",
    "url": "movie-902.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 灾难",
    "category": "科幻奇幻",
    "cover": "./2.jpg"
  },
  {
    "title": "布兰雯",
    "url": "movie-903.html",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "华语专区",
    "cover": "./3.jpg"
  },
  {
    "title": "爱妳如诗美丽",
    "url": "movie-904.html",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./4.jpg"
  },
  {
    "title": "万能发型师",
    "url": "movie-905.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 治愈",
    "category": "科幻奇幻",
    "cover": "./5.jpg"
  },
  {
    "title": "沙海之门",
    "url": "movie-906.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 奇幻",
    "category": "悬疑惊悚",
    "cover": "./6.jpg"
  },
  {
    "title": "野兰花之恋",
    "url": "movie-907.html",
    "year": "2025",
    "region": "巴西",
    "type": "剧集",
    "genre": "爱情、剧情、同性",
    "category": "华语专区",
    "cover": "./7.jpg"
  },
  {
    "title": "那些与初恋有关的秘密",
    "url": "movie-908.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "青春纯爱",
    "category": "华语专区",
    "cover": "./8.jpg"
  },
  {
    "title": "留神",
    "url": "movie-909.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "category": "华语专区",
    "cover": "./9.jpg"
  },
  {
    "title": "南国争春",
    "url": "movie-910.html",
    "year": "2020",
    "region": "越南",
    "type": "电影",
    "genre": "剧情 / 爱情 / 历史",
    "category": "热门剧集",
    "cover": "./10.jpg"
  },
  {
    "title": "硬核机器人",
    "url": "movie-911.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 动作",
    "category": "科幻奇幻",
    "cover": "./11.jpg"
  },
  {
    "title": "直到夜尽头",
    "url": "movie-912.html",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "科幻 / 爱情",
    "category": "悬疑惊悚",
    "cover": "./12.jpg"
  },
  {
    "title": "杀猫记",
    "url": "movie-913.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "心理惊悚",
    "category": "爱情喜剧",
    "cover": "./13.jpg"
  },
  {
    "title": "请给我寄粉丝信",
    "url": "movie-914.html",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春 / 喜剧 / 轻爱情",
    "category": "纪录综艺",
    "cover": "./14.jpg"
  },
  {
    "title": "鬼才要毕业",
    "url": "movie-915.html",
    "year": "2024",
    "region": "中国台湾 / 泰国",
    "type": "电视剧 (13集)",
    "genre": "喜剧 / 恐怖",
    "category": "爱情喜剧",
    "cover": "./15.jpg"
  },
  {
    "title": "黎明之时国语",
    "url": "movie-916.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 犯罪",
    "category": "科幻奇幻",
    "cover": "./16.jpg"
  },
  {
    "title": "暴躁翁",
    "url": "movie-917.html",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、喜剧、家庭",
    "category": "爱情喜剧",
    "cover": "./17.jpg"
  },
  {
    "title": "柳舟记",
    "url": "movie-918.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./18.jpg"
  },
  {
    "title": "爆裂世代",
    "url": "movie-919.html",
    "year": "2016",
    "region": "日本",
    "type": "TV动画",
    "genre": "竞技，热血，科幻",
    "category": "热门剧集",
    "cover": "./19.jpg"
  },
  {
    "title": "8月15日",
    "url": "movie-920.html",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "category": "悬疑惊悚",
    "cover": "./20.jpg"
  },
  {
    "title": "平民大富翁",
    "url": "movie-921.html",
    "year": "2023",
    "region": "中国",
    "type": "都市喜剧",
    "genre": "社会, 剧情, 黑色喜剧",
    "category": "全球佳片",
    "cover": "./21.jpg"
  },
  {
    "title": "六月夏初",
    "url": "movie-922.html",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 青春",
    "category": "华语专区",
    "cover": "./22.jpg"
  },
  {
    "title": "危险男女",
    "url": "movie-923.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 犯罪",
    "category": "全球佳片",
    "cover": "./23.jpg"
  },
  {
    "title": "丧钟：骑士与龙",
    "url": "movie-924.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/奇幻",
    "category": "精选电影",
    "cover": "./24.jpg"
  },
  {
    "title": "龙女下凡",
    "url": "movie-925.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "奇幻, 爱情, 古装",
    "category": "全球佳片",
    "cover": "./25.jpg"
  },
  {
    "title": "罗宾汉2025",
    "url": "movie-926.html",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "category": "动漫动画",
    "cover": "./26.jpg"
  },
  {
    "title": "内衣秀",
    "url": "movie-927.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 女性",
    "category": "动漫动画",
    "cover": "./27.jpg"
  },
  {
    "title": "毒枭煮妇",
    "url": "movie-928.html",
    "year": "2024",
    "region": "哥伦比亚 / 美国",
    "type": "剧集",
    "genre": "犯罪，喜剧",
    "category": "爱情喜剧",
    "cover": "./28.jpg"
  },
  {
    "title": "游戏王：怪兽之决斗",
    "url": "movie-929.html",
    "year": "2000",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻, 竞技",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "血之荣耀",
    "url": "movie-930.html",
    "year": "2007",
    "region": "香港",
    "type": "电影",
    "genre": "历史战争 / 剧情",
    "category": "动漫动画",
    "cover": "./30.jpg"
  },
  {
    "title": "长江图",
    "url": "movie-931.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 艺术",
    "category": "动漫动画",
    "cover": "./31.jpg"
  },
  {
    "title": "全职猎人2011",
    "url": "movie-932.html",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "动作 / 冒险 / 奇幻",
    "category": "爱情喜剧",
    "cover": "./32.jpg"
  },
  {
    "title": "藏海传",
    "url": "movie-933.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 权谋, 冒险",
    "category": "动漫动画",
    "cover": "./33.jpg"
  },
  {
    "title": "狼牙魔咒",
    "url": "movie-934.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻, 冒险",
    "category": "华语专区",
    "cover": "./34.jpg"
  },
  {
    "title": "伏魔记",
    "url": "movie-935.html",
    "year": "1983",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 奇幻, 武侠",
    "category": "科幻奇幻",
    "cover": "./35.jpg"
  },
  {
    "title": "反派皇子走着瞧",
    "url": "movie-936.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 喜剧 / 权谋",
    "category": "华语专区",
    "cover": "./36.jpg"
  },
  {
    "title": "马兰谣",
    "url": "movie-937.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 传记",
    "category": "爱情喜剧",
    "cover": "./37.jpg"
  },
  {
    "title": "致命反击",
    "url": "movie-938.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./38.jpg"
  },
  {
    "title": "司机医生",
    "url": "movie-939.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 医疗 / 社会",
    "category": "热门剧集",
    "cover": "./39.jpg"
  },
  {
    "title": "天堂岛疑云第十季",
    "url": "movie-940.html",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "category": "纪录综艺",
    "cover": "./40.jpg"
  },
  {
    "title": "云雾之间",
    "url": "movie-941.html",
    "year": "2025",
    "region": "哥伦比亚",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "华语专区",
    "cover": "./41.jpg"
  },
  {
    "title": "爱丽丝与梦幻岛",
    "url": "movie-942.html",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻，剧情",
    "category": "科幻奇幻",
    "cover": "./42.jpg"
  },
  {
    "title": "三角追缉令",
    "url": "movie-943.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "category": "热门剧集",
    "cover": "./43.jpg"
  },
  {
    "title": "美娇娘探案社",
    "url": "movie-944.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 喜剧 / 女性",
    "category": "全球佳片",
    "cover": "./44.jpg"
  },
  {
    "title": "类人体",
    "url": "movie-945.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 科幻",
    "category": "华语专区",
    "cover": "./45.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 仙侠剑 科达兹 无声的证言第二十七季 另有他路 记忆的呼喊 靠你啦！战神系统 西部开拓史 流浪女 郑州妈妈 凉宫春日的忧郁 巴斯光年电影 我是结局 偶像的代价 歌声中呼唤爱 野战排 新学生 加拿大人 子弹列车 推倒白宫的男人 巴黎换换爱",
    "url": "movie-946.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "纪录综艺",
    "cover": "./46.jpg"
  },
  {
    "title": "狂乱背后：曼森家族谋杀案",
    "url": "movie-947.html",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "genre": "犯罪、纪录、历史",
    "category": "动漫动画",
    "cover": "./47.jpg"
  },
  {
    "title": "花季美少女",
    "url": "movie-948.html",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、青春",
    "category": "全球佳片",
    "cover": "./48.jpg"
  },
  {
    "title": "印度合伙人",
    "url": "movie-949.html",
    "year": "2026",
    "region": "中国/印度",
    "type": "电视剧",
    "genre": "家庭, 商战, 都市传奇",
    "category": "动作犯罪",
    "cover": "./49.jpg"
  },
  {
    "title": "力歼三霸",
    "url": "movie-950.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪、武侠",
    "category": "悬疑惊悚",
    "cover": "./50.jpg"
  },
  {
    "title": "大小姐干杯",
    "url": "movie-951.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 喜剧, 爱情",
    "category": "动漫动画",
    "cover": "./51.jpg"
  },
  {
    "title": "萌犬好声音4",
    "url": "movie-952.html",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "喜剧, 音乐, 家庭",
    "category": "动漫动画",
    "cover": "./52.jpg"
  },
  {
    "title": "红色机尾",
    "url": "movie-953.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 历史, 动作",
    "category": "热门剧集",
    "cover": "./53.jpg"
  },
  {
    "title": "傀儡王：邪恶轴心",
    "url": "movie-954.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、动作、奇幻",
    "category": "热门剧集",
    "cover": "./54.jpg"
  },
  {
    "title": "王子复仇新记",
    "url": "movie-955.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "华语专区",
    "cover": "./55.jpg"
  },
  {
    "title": "法国佬",
    "url": "movie-956.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "精选电影",
    "cover": "./56.jpg"
  },
  {
    "title": "海之边缘",
    "url": "movie-957.html",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、家庭、奇幻",
    "category": "科幻奇幻",
    "cover": "./57.jpg"
  },
  {
    "title": "背负春天",
    "url": "movie-958.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 冒险",
    "category": "精选电影",
    "cover": "./58.jpg"
  },
  {
    "title": "直播游戏",
    "url": "movie-959.html",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 电竞",
    "category": "悬疑惊悚",
    "cover": "./59.jpg"
  },
  {
    "title": "苏联巴士站",
    "url": "movie-960.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "纪录综艺",
    "cover": "./60.jpg"
  },
  {
    "title": "慈膳救援",
    "url": "movie-961.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 灾难 / 社会",
    "category": "动作犯罪",
    "cover": "./61.jpg"
  },
  {
    "title": "难忘同窗情",
    "url": "movie-962.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "category": "科幻奇幻",
    "cover": "./62.jpg"
  },
  {
    "title": "悬战",
    "url": "movie-963.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑动作",
    "category": "科幻奇幻",
    "cover": "./63.jpg"
  },
  {
    "title": "和猪猪一起上课的日子",
    "url": "movie-964.html",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 儿童",
    "category": "全球佳片",
    "cover": "./64.jpg"
  },
  {
    "title": "最佳拍档2",
    "url": "movie-965.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作、喜剧、科幻",
    "category": "热门剧集",
    "cover": "./65.jpg"
  },
  {
    "title": "费德拉",
    "url": "movie-966.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "动作犯罪",
    "cover": "./66.jpg"
  },
  {
    "title": "白色诅咒",
    "url": "movie-967.html",
    "year": "2018",
    "region": "挪威",
    "type": "电影",
    "genre": "恐怖, 冒险",
    "category": "纪录综艺",
    "cover": "./67.jpg"
  },
  {
    "title": "东北往事我叫黄中华",
    "url": "movie-968.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 年代",
    "category": "科幻奇幻",
    "cover": "./68.jpg"
  },
  {
    "title": "拜拜，我的朋友",
    "url": "movie-969.html",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "剧情",
    "category": "华语专区",
    "cover": "./69.jpg"
  },
  {
    "title": "太空熊猫英雄归来",
    "url": "movie-970.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "动画, 喜剧, 科幻",
    "category": "精选电影",
    "cover": "./70.jpg"
  },
  {
    "title": "新扎师姐2：不安全地带",
    "url": "movie-971.html",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "科幻奇幻",
    "cover": "./71.jpg"
  },
  {
    "title": "高歌唱不停",
    "url": "movie-972.html",
    "year": "2027",
    "region": "英国",
    "type": "剧集",
    "genre": "音乐, 喜剧",
    "category": "悬疑惊悚",
    "cover": "./72.jpg"
  },
  {
    "title": "末日告白诗",
    "url": "movie-973.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 爱情",
    "category": "科幻奇幻",
    "cover": "./73.jpg"
  },
  {
    "title": "偷天钢索人",
    "url": "movie-974.html",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "惊悚 / 动作 / 犯罪",
    "category": "全球佳片",
    "cover": "./74.jpg"
  },
  {
    "title": "欢乐的欺骗",
    "url": "movie-975.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧、爱情",
    "category": "科幻奇幻",
    "cover": "./75.jpg"
  },
  {
    "title": "终极对决",
    "url": "movie-976.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "动作犯罪",
    "cover": "./76.jpg"
  },
  {
    "title": "大不列颠医院",
    "url": "movie-977.html",
    "year": "1982",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/科幻",
    "category": "动作犯罪",
    "cover": "./77.jpg"
  },
  {
    "title": "雪琳娘",
    "url": "movie-978.html",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "历史 / 动作 / 剧情",
    "category": "全球佳片",
    "cover": "./78.jpg"
  },
  {
    "title": "非人哉",
    "url": "movie-979.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "科幻, 悬疑, 犯罪",
    "category": "动漫动画",
    "cover": "./79.jpg"
  },
  {
    "title": "我们没有明天",
    "url": "movie-980.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "category": "动作犯罪",
    "cover": "./80.jpg"
  },
  {
    "title": "女仆",
    "url": "movie-981.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./81.jpg"
  },
  {
    "title": "失落的飞机",
    "url": "movie-982.html",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "悬疑, 冒险",
    "category": "爱情喜剧",
    "cover": "./82.jpg"
  },
  {
    "title": "冷燕飘零",
    "url": "movie-983.html",
    "year": "1969",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 悲剧",
    "category": "悬疑惊悚",
    "cover": "./83.jpg"
  },
  {
    "title": "猴子海滩",
    "url": "movie-984.html",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "精选电影",
    "cover": "./84.jpg"
  },
  {
    "title": "寻找汤德章",
    "url": "movie-985.html",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "纪录片, 历史",
    "category": "精选电影",
    "cover": "./85.jpg"
  },
  {
    "title": "追星爱起飞",
    "url": "movie-986.html",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "喜剧, 爱情, 青春",
    "category": "动漫动画",
    "cover": "./86.jpg"
  },
  {
    "title": "老人的聚会",
    "url": "movie-987.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情、悬疑、社会",
    "category": "动漫动画",
    "cover": "./87.jpg"
  },
  {
    "title": "街市的童话粤语",
    "url": "movie-988.html",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 喜剧, 爱情",
    "category": "动作犯罪",
    "cover": "./88.jpg"
  },
  {
    "title": "轮回派对第一季",
    "url": "movie-989.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 悬疑 / 奇幻",
    "category": "华语专区",
    "cover": "./89.jpg"
  },
  {
    "title": "恐怖宠物店",
    "url": "movie-990.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖, 奇幻",
    "category": "热门剧集",
    "cover": "./90.jpg"
  },
  {
    "title": "木乃伊坟墓之血",
    "url": "movie-991.html",
    "year": "2027",
    "region": "埃及 / 美国",
    "type": "电影",
    "genre": "恐怖 / 冒险 / 奇幻",
    "category": "华语专区",
    "cover": "./91.jpg"
  },
  {
    "title": "爸爸的动画家课",
    "url": "movie-992.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "category": "纪录综艺",
    "cover": "./92.jpg"
  },
  {
    "title": "招魂2",
    "url": "movie-993.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "精选电影",
    "cover": "./93.jpg"
  },
  {
    "title": "木木川",
    "url": "movie-994.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春, 奇幻, 悬疑",
    "category": "动漫动画",
    "cover": "./94.jpg"
  },
  {
    "title": "妈妈的笔记本",
    "url": "movie-995.html",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，家庭，温情",
    "category": "纪录综艺",
    "cover": "./95.jpg"
  },
  {
    "title": "为爱放手2015",
    "url": "movie-996.html",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "华语专区",
    "cover": "./96.jpg"
  },
  {
    "title": "风尚合唱团",
    "url": "movie-997.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "音乐 / 喜剧 / 励志",
    "category": "华语专区",
    "cover": "./97.jpg"
  },
  {
    "title": "教授寻春",
    "url": "movie-998.html",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "华语专区",
    "cover": "./98.jpg"
  },
  {
    "title": "地藏王神农巨兽",
    "url": "movie-999.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 科幻, 冒险",
    "category": "动漫动画",
    "cover": "./99.jpg"
  },
  {
    "title": "荒岛尤物",
    "url": "movie-1000.html",
    "year": "1966",
    "region": "美国",
    "type": "电影",
    "genre": "冒险，喜剧，爱情",
    "category": "纪录综艺",
    "cover": "./100.jpg"
  },
  {
    "title": "死开啲啦粤语",
    "url": "movie-1001.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "category": "热门剧集",
    "cover": "./101.jpg"
  },
  {
    "title": "星级大改造",
    "url": "movie-1002.html",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 励志 / 都市",
    "category": "悬疑惊悚",
    "cover": "./102.jpg"
  },
  {
    "title": "独生之国",
    "url": "movie-1003.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "科幻电影",
    "genre": "科幻,政治,反乌托邦",
    "category": "动漫动画",
    "cover": "./103.jpg"
  },
  {
    "title": "美好条纹",
    "url": "movie-1004.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、文艺、青春",
    "category": "热门剧集",
    "cover": "./104.jpg"
  },
  {
    "title": "乌龙骑士团",
    "url": "movie-1005.html",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 奇幻, 冒险",
    "category": "热门剧集",
    "cover": "./105.jpg"
  },
  {
    "title": "聚焦国语",
    "url": "movie-1006.html",
    "year": "2023",
    "region": "中国香港, 中国大陆",
    "type": "剧集",
    "genre": "剧情, 职场, 悬疑",
    "category": "精选电影",
    "cover": "./106.jpg"
  },
  {
    "title": "爱上男主播",
    "url": "movie-1007.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 职场",
    "category": "爱情喜剧",
    "cover": "./107.jpg"
  },
  {
    "title": "幻影特攻国语",
    "url": "movie-1008.html",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻 / 动作",
    "category": "悬疑惊悚",
    "cover": "./108.jpg"
  },
  {
    "title": "最美的约定",
    "url": "movie-1009.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "精选电影",
    "cover": "./109.jpg"
  },
  {
    "title": "腊月雪",
    "url": "movie-1010.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "科幻奇幻",
    "cover": "./110.jpg"
  },
  {
    "title": "荒柯艳迹",
    "url": "movie-1011.html",
    "year": "1986",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、情色、文艺",
    "category": "动作犯罪",
    "cover": "./111.jpg"
  },
  {
    "title": "长安三怪探",
    "url": "movie-1012.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装, 悬疑, 探案",
    "category": "爱情喜剧",
    "cover": "./112.jpg"
  },
  {
    "title": "寄生兽",
    "url": "movie-1013.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻、恐怖、剧情",
    "category": "爱情喜剧",
    "cover": "./113.jpg"
  },
  {
    "title": "销魂梦",
    "url": "movie-1014.html",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 情色",
    "category": "动作犯罪",
    "cover": "./114.jpg"
  },
  {
    "title": "新扎师妹2粤语",
    "url": "movie-1015.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "爱情喜剧",
    "cover": "./115.jpg"
  },
  {
    "title": "极速秒杀",
    "url": "movie-1016.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪, 飙车",
    "category": "全球佳片",
    "cover": "./116.jpg"
  },
  {
    "title": "冰冻浩劫",
    "url": "movie-1017.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "category": "热门剧集",
    "cover": "./117.jpg"
  },
  {
    "title": "脱缰者也",
    "url": "movie-1018.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 公路 / 黑色幽默",
    "category": "热门剧集",
    "cover": "./118.jpg"
  },
  {
    "title": "银行妙探",
    "url": "movie-1019.html",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "精选电影",
    "cover": "./119.jpg"
  },
  {
    "title": "原来你就是我的命中注定",
    "url": "movie-1020.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "category": "爱情喜剧",
    "cover": "./120.jpg"
  },
  {
    "title": "走向共和",
    "url": "movie-1021.html",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "历史、政治、剧情",
    "category": "华语专区",
    "cover": "./121.jpg"
  },
  {
    "title": "旋转的黄金",
    "url": "movie-1022.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，犯罪，体育",
    "category": "纪录综艺",
    "cover": "./122.jpg"
  },
  {
    "title": "摆渡人",
    "url": "movie-1023.html",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 公路",
    "category": "科幻奇幻",
    "cover": "./123.jpg"
  },
  {
    "title": "心灵猎人第一季",
    "url": "movie-1024.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪， 心理， 剧情",
    "category": "科幻奇幻",
    "cover": "./124.jpg"
  },
  {
    "title": "深度诱惑",
    "url": "movie-1025.html",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 情色",
    "category": "热门剧集",
    "cover": "./125.jpg"
  },
  {
    "title": "苏联潜艇大闹美国",
    "url": "movie-1026.html",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，动作",
    "category": "爱情喜剧",
    "cover": "./126.jpg"
  },
  {
    "title": "美妙四人组",
    "url": "movie-1027.html",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 喜剧 / 犯罪",
    "category": "华语专区",
    "cover": "./127.jpg"
  },
  {
    "title": "卡班湖的宝藏",
    "url": "movie-1028.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "冒险，悬疑",
    "category": "全球佳片",
    "cover": "./128.jpg"
  },
  {
    "title": "阿兹·安萨里：活埋",
    "url": "movie-1029.html",
    "year": "2025",
    "region": "美国",
    "type": "综艺（脱口秀特别节目）",
    "genre": "喜剧、脱口秀",
    "category": "精选电影",
    "cover": "./129.jpg"
  },
  {
    "title": "紧急迫降",
    "url": "movie-1030.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 剧情",
    "category": "科幻奇幻",
    "cover": "./130.jpg"
  },
  {
    "title": "美好的星期天",
    "url": "movie-1031.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "纪录综艺",
    "cover": "./131.jpg"
  },
  {
    "title": "欲焰狂流",
    "url": "movie-1032.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色，悬疑，惊悚",
    "category": "爱情喜剧",
    "cover": "./132.jpg"
  },
  {
    "title": "悬崖之上",
    "url": "movie-1033.html",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "谍战 / 动作 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./133.jpg"
  },
  {
    "title": "客从何处来",
    "url": "movie-1034.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片 / 历史 / 人文",
    "category": "华语专区",
    "cover": "./134.jpg"
  },
  {
    "title": "2人三足粤语",
    "url": "movie-1035.html",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 运动 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./135.jpg"
  },
  {
    "title": "挖掘者",
    "url": "movie-1036.html",
    "year": "2025",
    "region": "美国/加拿大",
    "type": "剧集",
    "genre": "悬疑，犯罪，剧情",
    "category": "纪录综艺",
    "cover": "./136.jpg"
  },
  {
    "title": "噩梦交响曲",
    "url": "movie-1037.html",
    "year": "2026",
    "region": "德国",
    "type": "电视剧",
    "genre": "恐怖, 悬疑",
    "category": "悬疑惊悚",
    "cover": "./137.jpg"
  },
  {
    "title": "蓝蜥蜴俱乐部",
    "url": "movie-1038.html",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 音乐 / 悬疑",
    "category": "动作犯罪",
    "cover": "./138.jpg"
  },
  {
    "title": "亲爱的小小忧愁",
    "url": "movie-1039.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 家庭",
    "category": "华语专区",
    "cover": "./139.jpg"
  },
  {
    "title": "机智的捕快日常",
    "url": "movie-1040.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 悬疑, 古装",
    "category": "华语专区",
    "cover": "./140.jpg"
  },
  {
    "title": "布道家庭第二季",
    "url": "movie-1041.html",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 喜剧 / 家庭",
    "category": "科幻奇幻",
    "cover": "./141.jpg"
  },
  {
    "title": "回到初相恋",
    "url": "movie-1042.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 奇幻, 喜剧",
    "category": "精选电影",
    "cover": "./142.jpg"
  },
  {
    "title": "极恶非道2",
    "url": "movie-1043.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "动漫动画",
    "cover": "./143.jpg"
  },
  {
    "title": "地球防卫军",
    "url": "movie-1044.html",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 动作",
    "category": "动漫动画",
    "cover": "./144.jpg"
  },
  {
    "title": "夏日假期玫瑰花",
    "url": "movie-1045.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情, 青春, 剧情",
    "category": "科幻奇幻",
    "cover": "./145.jpg"
  },
  {
    "title": "漫漫回家路",
    "url": "movie-1046.html",
    "year": "2016",
    "region": "澳大利亚 / 英国",
    "type": "电影",
    "genre": "剧情 / 传记 / 家庭",
    "category": "动漫动画",
    "cover": "./146.jpg"
  },
  {
    "title": "他们选择了自由",
    "url": "movie-1047.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 历史, 战争",
    "category": "华语专区",
    "cover": "./147.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 致命网战 鲜肉老师 男才女貌 变形金刚：超能勇士第二季 畅所欲言 乱世新娘 湖上女郎 山里的春天 南北少林 因为你如此耀眼 猫咪寻熊记 法式沙拉酱 战争与爱情 终活合租房 美声俘虏 班尼的录影带 鬼入侵 死战 导弹袭纽约 爱在惊涛骇浪时",
    "url": "movie-1048.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "华语专区",
    "cover": "./148.jpg"
  },
  {
    "title": "局外人2016",
    "url": "movie-1049.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 社会",
    "category": "悬疑惊悚",
    "cover": "./149.jpg"
  },
  {
    "title": "兄弟出头天",
    "url": "movie-1050.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 喜剧",
    "category": "动漫动画",
    "cover": "./150.jpg"
  },
  {
    "title": "终极绞人环",
    "url": "movie-1051.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "category": "华语专区",
    "cover": "./1.jpg"
  },
  {
    "title": "侯孝贤画像",
    "url": "movie-1052.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "纪录片",
    "genre": "传记",
    "category": "悬疑惊悚",
    "cover": "./2.jpg"
  },
  {
    "title": "怒火山河",
    "url": "movie-1053.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "科幻奇幻",
    "cover": "./3.jpg"
  },
  {
    "title": "芳心之歌",
    "url": "movie-1054.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 音乐",
    "category": "悬疑惊悚",
    "cover": "./4.jpg"
  },
  {
    "title": "夏夜的微笑",
    "url": "movie-1055.html",
    "year": "2024",
    "region": "瑞典",
    "type": "电影",
    "genre": "浪漫喜剧",
    "category": "动作犯罪",
    "cover": "./5.jpg"
  },
  {
    "title": "萌妻食神第三季",
    "url": "movie-1056.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "动画/美食/恋爱/穿越",
    "category": "热门剧集",
    "cover": "./6.jpg"
  },
  {
    "title": "我爱有你的大海",
    "url": "movie-1057.html",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 青春 / 治愈",
    "category": "动作犯罪",
    "cover": "./7.jpg"
  },
  {
    "title": "我的第二故乡",
    "url": "movie-1058.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 儿童",
    "category": "动作犯罪",
    "cover": "./8.jpg"
  },
  {
    "title": "火鸟出击",
    "url": "movie-1059.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 战争, 惊悚",
    "category": "科幻奇幻",
    "cover": "./9.jpg"
  },
  {
    "title": "神偷艳贼",
    "url": "movie-1060.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 犯罪",
    "category": "爱情喜剧",
    "cover": "./10.jpg"
  },
  {
    "title": "平安夜大逃杀",
    "url": "movie-1061.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "热门剧集",
    "cover": "./11.jpg"
  },
  {
    "title": "在上帝的手中",
    "url": "movie-1062.html",
    "year": "2022",
    "region": "波兰",
    "type": "电影",
    "genre": "惊悚 / 宗教 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./12.jpg"
  },
  {
    "title": "一周假期",
    "url": "movie-1063.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "科幻奇幻",
    "cover": "./13.jpg"
  },
  {
    "title": "海之魂",
    "url": "movie-1064.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情， 军旅",
    "category": "动漫动画",
    "cover": "./14.jpg"
  },
  {
    "title": "天才替身",
    "url": "movie-1065.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 爱情 / 职场",
    "category": "全球佳片",
    "cover": "./15.jpg"
  },
  {
    "title": "绑架游戏2024",
    "url": "movie-1066.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑, 犯罪, 冒险",
    "category": "华语专区",
    "cover": "./16.jpg"
  },
  {
    "title": "异兽禁区",
    "url": "movie-1067.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 惊悚, 怪兽",
    "category": "爱情喜剧",
    "cover": "./17.jpg"
  },
  {
    "title": "寒战2",
    "url": "movie-1068.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "动作犯罪",
    "cover": "./18.jpg"
  },
  {
    "title": "我爱推理",
    "url": "movie-1069.html",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 喜剧",
    "category": "全球佳片",
    "cover": "./19.jpg"
  },
  {
    "title": "飞行鞋",
    "url": "movie-1070.html",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻，家庭，儿童",
    "category": "爱情喜剧",
    "cover": "./20.jpg"
  },
  {
    "title": "猫和老鼠 飚风天王",
    "url": "movie-1071.html",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 动作 / 冒险",
    "category": "精选电影",
    "cover": "./21.jpg"
  },
  {
    "title": "身价",
    "url": "movie-1072.html",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情, 惊悚, 犯罪",
    "category": "精选电影",
    "cover": "./22.jpg"
  },
  {
    "title": "蓝宝坚尼的崛起",
    "url": "movie-1073.html",
    "year": "2025",
    "region": "意大利, 美国",
    "type": "电影",
    "genre": "传记, 剧情",
    "category": "爱情喜剧",
    "cover": "./23.jpg"
  },
  {
    "title": "安冬万叔叔",
    "url": "movie-1074.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "悬疑惊悚",
    "cover": "./24.jpg"
  },
  {
    "title": "叉叉问了一个问题",
    "url": "movie-1075.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻, 哲学",
    "category": "精选电影",
    "cover": "./25.jpg"
  },
  {
    "title": "七十二家房客第七部粤语",
    "url": "movie-1076.html",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 剧情",
    "category": "纪录综艺",
    "cover": "./26.jpg"
  },
  {
    "title": "花见",
    "url": "movie-1077.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "纪录综艺",
    "cover": "./27.jpg"
  },
  {
    "title": "我爱西施完结篇",
    "url": "movie-1078.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 历史",
    "category": "热门剧集",
    "cover": "./28.jpg"
  },
  {
    "title": "青春向前冲",
    "url": "movie-1079.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春，励志",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "乔治亚鬼屋",
    "url": "movie-1080.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "动漫动画",
    "cover": "./30.jpg"
  },
  {
    "title": "魔法圣婴",
    "url": "movie-1081.html",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖 / 奇幻 / 悬疑",
    "category": "动漫动画",
    "cover": "./31.jpg"
  },
  {
    "title": "月亮宝石",
    "url": "movie-1082.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "悬疑, 冒险",
    "category": "华语专区",
    "cover": "./32.jpg"
  },
  {
    "title": "潘多拉的秘密",
    "url": "movie-1083.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 科幻",
    "category": "动作犯罪",
    "cover": "./33.jpg"
  },
  {
    "title": "快拳怪招",
    "url": "movie-1084.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "纪录综艺",
    "cover": "./34.jpg"
  },
  {
    "title": "寂静山岭",
    "url": "movie-1085.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "category": "悬疑惊悚",
    "cover": "./35.jpg"
  },
  {
    "title": "无主之躯·起源",
    "url": "movie-1086.html",
    "year": "2024",
    "region": "美国 / 德国",
    "type": "剧集",
    "genre": "科幻 / 惊悚 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./36.jpg"
  },
  {
    "title": "九回时间旅行",
    "url": "movie-1087.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 爱情",
    "category": "纪录综艺",
    "cover": "./37.jpg"
  },
  {
    "title": "白粉飞第六季",
    "url": "movie-1088.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情",
    "category": "全球佳片",
    "cover": "./38.jpg"
  },
  {
    "title": "风柜来的人",
    "url": "movie-1089.html",
    "year": "1983",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 青春",
    "category": "悬疑惊悚",
    "cover": "./39.jpg"
  },
  {
    "title": "保持爱你",
    "url": "movie-1090.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 灾难",
    "category": "爱情喜剧",
    "cover": "./40.jpg"
  },
  {
    "title": "猎魔人：老鼠盗贼团",
    "url": "movie-1091.html",
    "year": "2026",
    "region": "波兰 / 美国",
    "type": "剧集",
    "genre": "奇幻 / 冒险",
    "category": "精选电影",
    "cover": "./41.jpg"
  },
  {
    "title": "焚城记",
    "url": "movie-1092.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "灾难, 剧情",
    "category": "悬疑惊悚",
    "cover": "./42.jpg"
  },
  {
    "title": "为我们而战",
    "url": "movie-1093.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动作, 战争, 历史",
    "category": "华语专区",
    "cover": "./43.jpg"
  },
  {
    "title": "清洁工",
    "url": "movie-1094.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 职场",
    "category": "热门剧集",
    "cover": "./44.jpg"
  },
  {
    "title": "亚当和伊甸之蛇",
    "url": "movie-1095.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "category": "精选电影",
    "cover": "./45.jpg"
  },
  {
    "title": "蚊子是怎么生活的",
    "url": "movie-1096.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录，自然，科普",
    "category": "悬疑惊悚",
    "cover": "./46.jpg"
  },
  {
    "title": "实习医生格蕾第二十一季",
    "url": "movie-1097.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 爱情, 医学",
    "category": "科幻奇幻",
    "cover": "./47.jpg"
  },
  {
    "title": "猎枪往事",
    "url": "movie-1098.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "西部, 剧情, 惊悚",
    "category": "动作犯罪",
    "cover": "./48.jpg"
  },
  {
    "title": "罗宫春梦",
    "url": "movie-1099.html",
    "year": "2021",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "古装、爱情、宫廷",
    "category": "科幻奇幻",
    "cover": "./49.jpg"
  },
  {
    "title": "风云英杰",
    "url": "movie-1100.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 传记",
    "category": "全球佳片",
    "cover": "./50.jpg"
  },
  {
    "title": "舞随心跳",
    "url": "movie-1101.html",
    "year": "2022",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情, 青春, 运动",
    "category": "纪录综艺",
    "cover": "./51.jpg"
  },
  {
    "title": "指环王",
    "url": "movie-1102.html",
    "year": "2001",
    "region": "美国 / 新西兰",
    "type": "电影",
    "genre": "奇幻，冒险，史诗",
    "category": "悬疑惊悚",
    "cover": "./52.jpg"
  },
  {
    "title": "宝贝鲁比",
    "url": "movie-1103.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "科幻奇幻",
    "cover": "./53.jpg"
  },
  {
    "title": "金钱伙伴",
    "url": "movie-1104.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，犯罪，剧情",
    "category": "科幻奇幻",
    "cover": "./54.jpg"
  },
  {
    "title": "情暖珠江",
    "url": "movie-1105.html",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情",
    "category": "纪录综艺",
    "cover": "./55.jpg"
  },
  {
    "title": "薄命花",
    "url": "movie-1106.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、爱情、民国",
    "category": "爱情喜剧",
    "cover": "./56.jpg"
  },
  {
    "title": "超级情报员麦汉续集",
    "url": "movie-1107.html",
    "year": "1966",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、动作、科幻",
    "category": "科幻奇幻",
    "cover": "./57.jpg"
  },
  {
    "title": "春寒",
    "url": "movie-1108.html",
    "year": "1980",
    "region": "中国台湾",
    "type": "Movie",
    "genre": "爱情, 剧情",
    "category": "纪录综艺",
    "cover": "./58.jpg"
  },
  {
    "title": "幸运儿！",
    "url": "movie-1109.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、奇幻",
    "category": "科幻奇幻",
    "cover": "./59.jpg"
  },
  {
    "title": "都是真的",
    "url": "movie-1110.html",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 传记 / 历史",
    "category": "悬疑惊悚",
    "cover": "./60.jpg"
  },
  {
    "title": "莫作恶",
    "url": "movie-1111.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "爱情喜剧",
    "cover": "./61.jpg"
  },
  {
    "title": "任凭时光沸腾",
    "url": "movie-1112.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春，奇幻",
    "category": "纪录综艺",
    "cover": "./62.jpg"
  },
  {
    "title": "走难异形",
    "url": "movie-1113.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、科幻、动作",
    "category": "动作犯罪",
    "cover": "./63.jpg"
  },
  {
    "title": "恐怖之砂",
    "url": "movie-1114.html",
    "year": "2027",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖, 科幻",
    "category": "热门剧集",
    "cover": "./64.jpg"
  },
  {
    "title": "万兽天堂",
    "url": "movie-1115.html",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻，剧情",
    "category": "精选电影",
    "cover": "./65.jpg"
  },
  {
    "title": "站在你的角度看我第一季",
    "url": "movie-1116.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "心理悬疑, 都市生活, 社交媒体剧情",
    "category": "动作犯罪",
    "cover": "./66.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 鳄鱼邓迪在洛杉矶 你丫闭嘴！ 雕刻生命 如何吃炸毛虫 学生哥 邪花劫1983 当我们17岁 一个星期四 美丽的约定 两个阿尔弗雷德 小巷之爱 一杆进洞 罗斯韦尔（电影） 男孩与海盗 福尔摩斯与华生 大力士：勇闯女人国 治妻妙术 神秘博士第五季 浮出水面的影子 碟仙玩偶",
    "url": "movie-1117.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "热门剧集",
    "cover": "./67.jpg"
  },
  {
    "title": "出狱一团糟",
    "url": "movie-1118.html",
    "year": "2024",
    "region": "法国",
    "type": "剧集",
    "genre": "喜剧， 剧情",
    "category": "华语专区",
    "cover": "./68.jpg"
  },
  {
    "title": "巴尔干庞克",
    "url": "movie-1119.html",
    "year": "2024",
    "region": "塞尔维亚",
    "type": "电影",
    "genre": "音乐、战争、黑色幽默",
    "category": "全球佳片",
    "cover": "./69.jpg"
  },
  {
    "title": "夺骄",
    "url": "movie-1120.html",
    "year": "2028",
    "region": "中国内地",
    "type": "剧集",
    "genre": "古装，宫斗",
    "category": "热门剧集",
    "cover": "./70.jpg"
  },
  {
    "title": "疑云密布",
    "url": "movie-1121.html",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "热门剧集",
    "cover": "./71.jpg"
  },
  {
    "title": "钻井",
    "url": "movie-1122.html",
    "year": "2023",
    "region": "挪威",
    "type": "剧集",
    "genre": "惊悚、灾难、剧情",
    "category": "爱情喜剧",
    "cover": "./72.jpg"
  },
  {
    "title": "雾柱",
    "url": "movie-1123.html",
    "year": "2020",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑, 科幻",
    "category": "爱情喜剧",
    "cover": "./73.jpg"
  },
  {
    "title": "捕猎",
    "url": "movie-1124.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 悬疑",
    "category": "热门剧集",
    "cover": "./74.jpg"
  },
  {
    "title": "极地奥德赛",
    "url": "movie-1125.html",
    "year": "2024",
    "region": "多国合拍（加拿大/挪威）",
    "type": "冒险科幻电影",
    "genre": "冒险,生存,环保",
    "category": "科幻奇幻",
    "cover": "./75.jpg"
  },
  {
    "title": "黄飞鸿之铁鸡斗蜈蚣国语",
    "url": "movie-1126.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，喜剧，武侠",
    "category": "动漫动画",
    "cover": "./76.jpg"
  },
  {
    "title": "和平年代",
    "url": "movie-1127.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 历史, 家庭",
    "category": "热门剧集",
    "cover": "./77.jpg"
  },
  {
    "title": "夜樱四重奏 星之海",
    "url": "movie-1128.html",
    "year": "2014",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻 / 青春 / 冒险",
    "category": "科幻奇幻",
    "cover": "./78.jpg"
  },
  {
    "title": "营盘镇警事",
    "url": "movie-1129.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦, 剧情, 乡村",
    "category": "悬疑惊悚",
    "cover": "./79.jpg"
  },
  {
    "title": "长青庄园",
    "url": "movie-1130.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 剧情, 古装",
    "category": "华语专区",
    "cover": "./80.jpg"
  },
  {
    "title": "危机边缘第一季",
    "url": "movie-1131.html",
    "year": "2008",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻， 悬疑， 惊悚",
    "category": "爱情喜剧",
    "cover": "./81.jpg"
  },
  {
    "title": "花月流情",
    "url": "movie-1132.html",
    "year": "2027",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "民国/爱情",
    "category": "全球佳片",
    "cover": "./82.jpg"
  },
  {
    "title": "红色文化住宅里的初子",
    "url": "movie-1133.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，家庭，悬疑",
    "category": "热门剧集",
    "cover": "./83.jpg"
  },
  {
    "title": "车祸疑云",
    "url": "movie-1134.html",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑犯罪 / 惊悚 / 反转",
    "category": "科幻奇幻",
    "cover": "./84.jpg"
  },
  {
    "title": "黑色童话",
    "url": "movie-1135.html",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 恐怖, 奇幻",
    "category": "悬疑惊悚",
    "cover": "./85.jpg"
  },
  {
    "title": "男排女将粤语",
    "url": "movie-1136.html",
    "year": "2020",
    "region": "香港",
    "type": "电视剧",
    "genre": "运动、励志、青春",
    "category": "精选电影",
    "cover": "./86.jpg"
  },
  {
    "title": "大雄的怀念奶奶",
    "url": "movie-1137.html",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "剧情，奇幻",
    "category": "热门剧集",
    "cover": "./87.jpg"
  },
  {
    "title": "循环初恋",
    "url": "movie-1138.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 爱情, 悬疑",
    "category": "全球佳片",
    "cover": "./88.jpg"
  },
  {
    "title": "少年有梦",
    "url": "movie-1139.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春, 励志, 校园",
    "category": "全球佳片",
    "cover": "./89.jpg"
  },
  {
    "title": "通天狄仁杰",
    "url": "movie-1140.html",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 悬疑",
    "category": "科幻奇幻",
    "cover": "./90.jpg"
  },
  {
    "title": "卧底跑男",
    "url": "movie-1141.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "动作犯罪",
    "cover": "./91.jpg"
  },
  {
    "title": "战略空军",
    "url": "movie-1142.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 军事 / 政治",
    "category": "科幻奇幻",
    "cover": "./92.jpg"
  },
  {
    "title": "潜艇总动员",
    "url": "movie-1143.html",
    "year": "2019",
    "region": "美国",
    "type": "动画电影",
    "genre": "冒险 / 家庭 / 科幻",
    "category": "科幻奇幻",
    "cover": "./93.jpg"
  },
  {
    "title": "我的叔叔",
    "url": "movie-1144.html",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "爱情喜剧",
    "cover": "./94.jpg"
  },
  {
    "title": "时代屋的女房",
    "url": "movie-1145.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭 / 奇幻",
    "category": "动作犯罪",
    "cover": "./95.jpg"
  },
  {
    "title": "妈妈不让",
    "url": "movie-1146.html",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "genre": "恐怖 / 家庭",
    "category": "动漫动画",
    "cover": "./96.jpg"
  },
  {
    "title": "天才小捣蛋2",
    "url": "movie-1147.html",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "genre": "家庭, 喜剧, 冒险",
    "category": "科幻奇幻",
    "cover": "./97.jpg"
  },
  {
    "title": "峡谷情缘",
    "url": "movie-1148.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情",
    "category": "动漫动画",
    "cover": "./98.jpg"
  },
  {
    "title": "自由万岁",
    "url": "movie-1149.html",
    "year": "2022",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "喜剧，剧情，冒险",
    "category": "动漫动画",
    "cover": "./99.jpg"
  },
  {
    "title": "恭喜你发财",
    "url": "movie-1150.html",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "全球佳片",
    "cover": "./100.jpg"
  },
  {
    "title": "巅峰拍档第十八季",
    "url": "movie-1151.html",
    "year": "2012",
    "region": "英国",
    "type": "综艺/剧集",
    "genre": "喜剧、冒险、汽车",
    "category": "爱情喜剧",
    "cover": "./101.jpg"
  },
  {
    "title": "红色房间",
    "url": "movie-1152.html",
    "year": "2023",
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "category": "动漫动画",
    "cover": "./102.jpg"
  },
  {
    "title": "三次元女友第二季",
    "url": "movie-1153.html",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 喜剧 / 爱情",
    "category": "科幻奇幻",
    "cover": "./103.jpg"
  },
  {
    "title": "探寻完美的人类饮食",
    "url": "movie-1154.html",
    "year": "2032",
    "region": "美国",
    "type": "科幻剧情片",
    "genre": "科幻, 社会议题, 剧情",
    "category": "华语专区",
    "cover": "./104.jpg"
  },
  {
    "title": "电影中的证据",
    "url": "movie-1155.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "category": "全球佳片",
    "cover": "./105.jpg"
  },
  {
    "title": "魔幻凶间",
    "url": "movie-1156.html",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑，奇幻，恐怖",
    "category": "动漫动画",
    "cover": "./106.jpg"
  },
  {
    "title": "死人钱",
    "url": "movie-1157.html",
    "year": "2015",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "category": "科幻奇幻",
    "cover": "./107.jpg"
  },
  {
    "title": "小资女孩向前冲",
    "url": "movie-1158.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧，爱情，职场",
    "category": "华语专区",
    "cover": "./108.jpg"
  },
  {
    "title": "艺妓春情",
    "url": "movie-1159.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 爱情 / 历史",
    "category": "动漫动画",
    "cover": "./109.jpg"
  },
  {
    "title": "三个未婚妈妈",
    "url": "movie-1160.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 家庭",
    "category": "热门剧集",
    "cover": "./110.jpg"
  },
  {
    "title": "字典情人",
    "url": "movie-1161.html",
    "year": "2023",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "华语专区",
    "cover": "./111.jpg"
  },
  {
    "title": "钱进球场第二季",
    "url": "movie-1162.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "体育、职场、剧情",
    "category": "华语专区",
    "cover": "./112.jpg"
  },
  {
    "title": "红丝绸",
    "url": "movie-1163.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 爱情",
    "category": "华语专区",
    "cover": "./113.jpg"
  },
  {
    "title": "传染2014",
    "url": "movie-1164.html",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "动作、恐怖、丧尸",
    "category": "热门剧集",
    "cover": "./114.jpg"
  },
  {
    "title": "外出用餐：男优集中营",
    "url": "movie-1165.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 同性 / 情色",
    "category": "爱情喜剧",
    "cover": "./115.jpg"
  },
  {
    "title": "蓝心狂想曲",
    "url": "movie-1166.html",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "category": "热门剧集",
    "cover": "./116.jpg"
  },
  {
    "title": "老板不知道的我·老友季2",
    "url": "movie-1167.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 职场 / 纪实",
    "category": "纪录综艺",
    "cover": "./117.jpg"
  },
  {
    "title": "校对女孩河野悦子",
    "url": "movie-1168.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "职场/喜剧",
    "category": "全球佳片",
    "cover": "./118.jpg"
  },
  {
    "title": "终止战火",
    "url": "movie-1169.html",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "战争 / 科幻 / 反战",
    "category": "精选电影",
    "cover": "./119.jpg"
  },
  {
    "title": "海洋之歌",
    "url": "movie-1170.html",
    "year": "2014",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "动画, 奇幻, 家庭",
    "category": "悬疑惊悚",
    "cover": "./120.jpg"
  },
  {
    "title": "巴黎小情歌",
    "url": "movie-1171.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 音乐 / 剧情",
    "category": "动漫动画",
    "cover": "./121.jpg"
  },
  {
    "title": "微观世界国语",
    "url": "movie-1172.html",
    "year": "2024",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "genre": "纪录片, 冒险, 科普",
    "category": "热门剧集",
    "cover": "./122.jpg"
  },
  {
    "title": "长安侠影之剑客风云",
    "url": "movie-1173.html",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装，武侠",
    "category": "悬疑惊悚",
    "cover": "./123.jpg"
  },
  {
    "title": "摩斯探长第九季",
    "url": "movie-1174.html",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑、犯罪、剧情",
    "category": "爱情喜剧",
    "cover": "./124.jpg"
  },
  {
    "title": "冲浪企鹅",
    "url": "movie-1175.html",
    "year": "2007",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "喜剧 / 运动 / 家庭",
    "category": "动漫动画",
    "cover": "./125.jpg"
  },
  {
    "title": "三嫁魔君",
    "url": "movie-1176.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情",
    "category": "动漫动画",
    "cover": "./126.jpg"
  },
  {
    "title": "设计",
    "url": "movie-1177.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "动作犯罪",
    "cover": "./127.jpg"
  },
  {
    "title": "死开啲啦",
    "url": "movie-1178.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖、喜剧",
    "category": "华语专区",
    "cover": "./128.jpg"
  },
  {
    "title": "反派初始化",
    "url": "movie-1179.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画",
    "genre": "科幻 / 动作",
    "category": "动作犯罪",
    "cover": "./129.jpg"
  },
  {
    "title": "妻子的反攻",
    "url": "movie-1180.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市 / 情感 / 复仇",
    "category": "爱情喜剧",
    "cover": "./130.jpg"
  },
  {
    "title": "鬼眼刑警",
    "url": "movie-1181.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 恐怖, 喜剧",
    "category": "动漫动画",
    "cover": "./131.jpg"
  },
  {
    "title": "疯狂的麦咭第八季",
    "url": "movie-1182.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺 / 16期",
    "genre": "少儿 / 真人秀 / 游戏",
    "category": "动漫动画",
    "cover": "./132.jpg"
  },
  {
    "title": "捣蛋鬼弗瑞德",
    "url": "movie-1183.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "动画, 喜剧, 奇幻",
    "category": "全球佳片",
    "cover": "./133.jpg"
  },
  {
    "title": "谎言与偷窃",
    "url": "movie-1184.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "category": "爱情喜剧",
    "cover": "./134.jpg"
  },
  {
    "title": "隋唐英雄3",
    "url": "movie-1185.html",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 历史 / 战争 / 传奇",
    "category": "热门剧集",
    "cover": "./135.jpg"
  },
  {
    "title": "银狐国语",
    "url": "movie-1186.html",
    "year": "2024 (翻拍)",
    "region": "中国香港",
    "type": "剧集",
    "genre": "商战, 家族, 年代",
    "category": "动作犯罪",
    "cover": "./136.jpg"
  },
  {
    "title": "秃涂陌路",
    "url": "movie-1187.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色幽默、犯罪",
    "category": "华语专区",
    "cover": "./137.jpg"
  },
  {
    "title": "狗和狼的时间",
    "url": "movie-1188.html",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "犯罪",
    "category": "悬疑惊悚",
    "cover": "./138.jpg"
  },
  {
    "title": "接近无限的白",
    "url": "movie-1189.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺 / 剧情",
    "category": "热门剧集",
    "cover": "./139.jpg"
  },
  {
    "title": "撒旦万万岁",
    "url": "movie-1190.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "category": "精选电影",
    "cover": "./140.jpg"
  },
  {
    "title": "契科夫之",
    "url": "movie-1191.html",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑、文学、心理",
    "category": "精选电影",
    "cover": "./141.jpg"
  },
  {
    "title": "深海兽",
    "url": "movie-1192.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 惊悚， 冒险",
    "category": "华语专区",
    "cover": "./142.jpg"
  },
  {
    "title": "洪福齐天国语",
    "url": "movie-1193.html",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "精选电影",
    "cover": "./143.jpg"
  },
  {
    "title": "奥少年找麻烦",
    "url": "movie-1194.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 青春, 家庭",
    "category": "纪录综艺",
    "cover": "./144.jpg"
  },
  {
    "title": "血流不止",
    "url": "movie-1195.html",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪, 惊悚",
    "category": "动作犯罪",
    "cover": "./145.jpg"
  },
  {
    "title": "911算命律师",
    "url": "movie-1196.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 律政",
    "category": "精选电影",
    "cover": "./146.jpg"
  },
  {
    "title": "兴夫",
    "url": "movie-1197.html",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情， 历史",
    "category": "精选电影",
    "cover": "./147.jpg"
  },
  {
    "title": "蛇穴",
    "url": "movie-1198.html",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 冒险",
    "category": "纪录综艺",
    "cover": "./148.jpg"
  },
  {
    "title": "米家大战机器人",
    "url": "movie-1199.html",
    "year": "2026",
    "region": "美国，中国大陆",
    "type": "动画电影",
    "genre": "喜剧，科幻，动画，家庭",
    "category": "科幻奇幻",
    "cover": "./149.jpg"
  },
  {
    "title": "我们的世界2023",
    "url": "movie-1200.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 科幻",
    "category": "华语专区",
    "cover": "./150.jpg"
  },
  {
    "title": "双雄喋血",
    "url": "movie-1201.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 兄弟",
    "category": "科幻奇幻",
    "cover": "./1.jpg"
  },
  {
    "title": "命运薄荷糖",
    "url": "movie-1202.html",
    "year": "2029",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 奇幻, 爱情",
    "category": "动漫动画",
    "cover": "./2.jpg"
  },
  {
    "title": "驯悍记2",
    "url": "movie-1203.html",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "科幻奇幻",
    "cover": "./3.jpg"
  },
  {
    "title": "实习医生格蕾第十五季",
    "url": "movie-1204.html",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 爱情",
    "category": "热门剧集",
    "cover": "./4.jpg"
  },
  {
    "title": "杀人草莓夜",
    "url": "movie-1205.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "category": "爱情喜剧",
    "cover": "./5.jpg"
  },
  {
    "title": "融雪",
    "url": "movie-1206.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "热门剧集",
    "cover": "./6.jpg"
  },
  {
    "title": "日与云",
    "url": "movie-1207.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "精选电影",
    "cover": "./7.jpg"
  },
  {
    "title": "家庭电影",
    "url": "movie-1208.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，家庭，伦理",
    "category": "科幻奇幻",
    "cover": "./8.jpg"
  },
  {
    "title": "丧湿",
    "url": "movie-1209.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "全球佳片",
    "cover": "./9.jpg"
  },
  {
    "title": "失落风尘",
    "url": "movie-1210.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 文艺",
    "category": "动作犯罪",
    "cover": "./10.jpg"
  },
  {
    "title": "神奇的孩子",
    "url": "movie-1211.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻、家庭",
    "category": "热门剧集",
    "cover": "./11.jpg"
  },
  {
    "title": "我的名字是...",
    "url": "movie-1212.html",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 传记",
    "category": "科幻奇幻",
    "cover": "./12.jpg"
  },
  {
    "title": "买凶拍人",
    "url": "movie-1213.html",
    "year": "2001",
    "region": "香港",
    "type": "电影",
    "genre": "黑色幽默 / 犯罪",
    "category": "精选电影",
    "cover": "./13.jpg"
  },
  {
    "title": "印第安纳的蒙罗维亚",
    "url": "movie-1214.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "爱情喜剧",
    "cover": "./14.jpg"
  },
  {
    "title": "交涉人真下正义",
    "url": "movie-1215.html",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪，悬疑，刑侦",
    "category": "热门剧集",
    "cover": "./15.jpg"
  },
  {
    "title": "杰西警探：薄冰",
    "url": "movie-1216.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 悬疑, 剧情",
    "category": "动作犯罪",
    "cover": "./16.jpg"
  },
  {
    "title": "百年长安",
    "url": "movie-1217.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "category": "悬疑惊悚",
    "cover": "./17.jpg"
  },
  {
    "title": "恐龙之王",
    "url": "movie-1218.html",
    "year": "1997",
    "region": "美国",
    "type": "动画电影",
    "genre": "冒险 / 科幻 / 家庭",
    "category": "全球佳片",
    "cover": "./18.jpg"
  },
  {
    "title": "取下",
    "url": "movie-1219.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "华语专区",
    "cover": "./19.jpg"
  },
  {
    "title": "皮克斯爆米花",
    "url": "movie-1220.html",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 短片合集",
    "category": "纪录综艺",
    "cover": "./20.jpg"
  },
  {
    "title": "猎毒之闪电突击",
    "url": "movie-1221.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "纪录综艺",
    "cover": "./21.jpg"
  },
  {
    "title": "飘香院",
    "url": "movie-1222.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 喜剧",
    "category": "精选电影",
    "cover": "./22.jpg"
  },
  {
    "title": "一名很普通的犹太人",
    "url": "movie-1223.html",
    "year": "2024",
    "region": "以色列",
    "type": "电影",
    "genre": "剧情历史",
    "category": "华语专区",
    "cover": "./23.jpg"
  },
  {
    "title": "相会在黑山",
    "url": "movie-1224.html",
    "year": "2021",
    "region": "塞尔维亚 / 黑山",
    "type": "电影",
    "genre": "战争 / 剧情",
    "category": "动漫动画",
    "cover": "./24.jpg"
  },
  {
    "title": "音乐魔法镇！第一季",
    "url": "movie-1225.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 音乐",
    "category": "动漫动画",
    "cover": "./25.jpg"
  },
  {
    "title": "警察与外星人",
    "url": "movie-1226.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 科幻",
    "category": "精选电影",
    "cover": "./26.jpg"
  },
  {
    "title": "富贵再三逼人",
    "url": "movie-1227.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧, 家庭",
    "category": "动作犯罪",
    "cover": "./27.jpg"
  },
  {
    "title": "菲菲机率论",
    "url": "movie-1228.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻，爱情",
    "category": "华语专区",
    "cover": "./28.jpg"
  },
  {
    "title": "潜艇驱逐战",
    "url": "movie-1229.html",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 惊悚",
    "category": "科幻奇幻",
    "cover": "./29.jpg"
  },
  {
    "title": "希腊高速公路",
    "url": "movie-1230.html",
    "year": "2020",
    "region": "法国/希腊",
    "type": "电影",
    "genre": "喜剧， 公路， 剧情",
    "category": "热门剧集",
    "cover": "./30.jpg"
  },
  {
    "title": "他和她的秘密",
    "url": "movie-1231.html",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./31.jpg"
  },
  {
    "title": "画",
    "url": "movie-1232.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画短片",
    "genre": "奇幻、悬疑、古风",
    "category": "全球佳片",
    "cover": "./32.jpg"
  },
  {
    "title": "大法师传奇",
    "url": "movie-1233.html",
    "year": "2005",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 武侠, 动作",
    "category": "动作犯罪",
    "cover": "./33.jpg"
  },
  {
    "title": "浅草小子",
    "url": "movie-1234.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 传记 / 家庭",
    "category": "华语专区",
    "cover": "./34.jpg"
  },
  {
    "title": "撩妹专家",
    "url": "movie-1235.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、青春",
    "category": "爱情喜剧",
    "cover": "./35.jpg"
  },
  {
    "title": "擒凶记",
    "url": "movie-1236.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "武侠,悬疑,动作,复仇",
    "category": "精选电影",
    "cover": "./36.jpg"
  },
  {
    "title": "二重奏",
    "url": "movie-1237.html",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "category": "纪录综艺",
    "cover": "./37.jpg"
  },
  {
    "title": "邪恶发生420",
    "url": "movie-1238.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 超自然",
    "category": "动漫动画",
    "cover": "./38.jpg"
  },
  {
    "title": "神秘博士第十五季",
    "url": "movie-1239.html",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻冒险",
    "category": "悬疑惊悚",
    "cover": "./39.jpg"
  },
  {
    "title": "愤怒的爱情",
    "url": "movie-1240.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情、剧情、音乐",
    "category": "动作犯罪",
    "cover": "./40.jpg"
  },
  {
    "title": "春潮烂漫海棠红",
    "url": "movie-1241.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色，剧情，历史",
    "category": "纪录综艺",
    "cover": "./41.jpg"
  },
  {
    "title": "芭蕾",
    "url": "movie-1242.html",
    "year": "2016",
    "region": "俄罗斯",
    "type": "剧情电影",
    "genre": "剧情 / 舞蹈 / 成长",
    "category": "热门剧集",
    "cover": "./42.jpg"
  },
  {
    "title": "乡愁",
    "url": "movie-1243.html",
    "year": "2024",
    "region": "波兰 / 乌克兰",
    "type": "电影",
    "genre": "剧情 / 战争",
    "category": "动作犯罪",
    "cover": "./43.jpg"
  },
  {
    "title": "深夜食堂2国语",
    "url": "movie-1244.html",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 温情",
    "category": "爱情喜剧",
    "cover": "./44.jpg"
  },
  {
    "title": "沧海渔生",
    "url": "movie-1245.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 剧情 / 现实主义",
    "category": "悬疑惊悚",
    "cover": "./45.jpg"
  },
  {
    "title": "大盲侠",
    "url": "movie-1246.html",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 武侠",
    "category": "热门剧集",
    "cover": "./46.jpg"
  },
  {
    "title": "谍海风云",
    "url": "movie-1247.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战悬疑",
    "category": "动漫动画",
    "cover": "./47.jpg"
  },
  {
    "title": "浮世风情绘",
    "url": "movie-1248.html",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情, 历史",
    "category": "纪录综艺",
    "cover": "./48.jpg"
  },
  {
    "title": "抓住时机",
    "url": "movie-1249.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "华语专区",
    "cover": "./49.jpg"
  },
  {
    "title": "奥客嘉",
    "url": "movie-1250.html",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "category": "全球佳片",
    "cover": "./50.jpg"
  },
  {
    "title": "朋友请吃饭·烧烤季",
    "url": "movie-1251.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 美食, 脱口秀",
    "category": "爱情喜剧",
    "cover": "./51.jpg"
  },
  {
    "title": "黑白之间",
    "url": "movie-1252.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 悬疑",
    "category": "精选电影",
    "cover": "./52.jpg"
  },
  {
    "title": "身后那些事儿",
    "url": "movie-1253.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "动作犯罪",
    "cover": "./53.jpg"
  },
  {
    "title": "野马奇迹",
    "url": "movie-1254.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 运动, 励志",
    "category": "全球佳片",
    "cover": "./54.jpg"
  },
  {
    "title": "哪吒·魔童归来",
    "url": "movie-1255.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影 / 动画",
    "genre": "动作 / 神话 / 奇幻 / 亲情",
    "category": "华语专区",
    "cover": "./55.jpg"
  },
  {
    "title": "厄舍府的没落",
    "url": "movie-1256.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖，哥特",
    "category": "纪录综艺",
    "cover": "./56.jpg"
  },
  {
    "title": "跳舞大电影",
    "url": "movie-1257.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 歌舞",
    "category": "动漫动画",
    "cover": "./57.jpg"
  },
  {
    "title": "金钱疑案",
    "url": "movie-1258.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 犯罪, 惊悚",
    "category": "科幻奇幻",
    "cover": "./58.jpg"
  },
  {
    "title": "失踪",
    "url": "movie-1259.html",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "爱情喜剧",
    "cover": "./59.jpg"
  },
  {
    "title": "天空上三公尺",
    "url": "movie-1260.html",
    "year": "2010",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "全球佳片",
    "cover": "./60.jpg"
  },
  {
    "title": "一见不钟情",
    "url": "movie-1261.html",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧",
    "category": "动漫动画",
    "cover": "./61.jpg"
  },
  {
    "title": "双生炽爱",
    "url": "movie-1262.html",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情, 同性, 悬疑",
    "category": "纪录综艺",
    "cover": "./62.jpg"
  },
  {
    "title": "探险活宝第七季",
    "url": "movie-1263.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻、冒险",
    "category": "全球佳片",
    "cover": "./63.jpg"
  },
  {
    "title": "招摇之涅槃传说",
    "url": "movie-1264.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 仙侠, 奇幻",
    "category": "悬疑惊悚",
    "cover": "./64.jpg"
  },
  {
    "title": "爱在青春收成时",
    "url": "movie-1265.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 青春 / 农村",
    "category": "悬疑惊悚",
    "cover": "./65.jpg"
  },
  {
    "title": "萤火虫",
    "url": "movie-1266.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情，悬疑，青春",
    "category": "全球佳片",
    "cover": "./66.jpg"
  },
  {
    "title": "李林克的小馆儿",
    "url": "movie-1267.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 治愈, 美食",
    "category": "爱情喜剧",
    "cover": "./67.jpg"
  },
  {
    "title": "法国大革命",
    "url": "movie-1268.html",
    "year": "1989",
    "region": "法国",
    "type": "电视剧",
    "genre": "历史, 传记, 剧情",
    "category": "悬疑惊悚",
    "cover": "./68.jpg"
  },
  {
    "title": "姊妹情色",
    "url": "movie-1269.html",
    "year": "2001",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、伦理、心理",
    "category": "纪录综艺",
    "cover": "./69.jpg"
  },
  {
    "title": "摇滚校园",
    "url": "movie-1270.html",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧、音乐、励志",
    "category": "动作犯罪",
    "cover": "./70.jpg"
  },
  {
    "title": "巨怪猎人第二季",
    "url": "movie-1271.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "category": "热门剧集",
    "cover": "./71.jpg"
  },
  {
    "title": "三只松鼠之萌力觉醒",
    "url": "movie-1272.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "category": "爱情喜剧",
    "cover": "./72.jpg"
  },
  {
    "title": "特务六虎将",
    "url": "movie-1273.html",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 战争",
    "category": "华语专区",
    "cover": "./73.jpg"
  },
  {
    "title": "西行纪之穷奇地洞",
    "url": "movie-1274.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 动作",
    "category": "悬疑惊悚",
    "cover": "./74.jpg"
  },
  {
    "title": "我哥我嫂",
    "url": "movie-1275.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭, 剧情",
    "category": "热门剧集",
    "cover": "./75.jpg"
  },
  {
    "title": "魔发奇缘",
    "url": "movie-1276.html",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "奇幻、冒险、歌舞",
    "category": "爱情喜剧",
    "cover": "./76.jpg"
  },
  {
    "title": "义大利驱魔揭秘",
    "url": "movie-1277.html",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖，纪录，伪纪实",
    "category": "动作犯罪",
    "cover": "./77.jpg"
  },
  {
    "title": "我亲爱的小淘气",
    "url": "movie-1278.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭、喜剧、剧情",
    "category": "爱情喜剧",
    "cover": "./78.jpg"
  },
  {
    "title": "废柴少年之次元危机",
    "url": "movie-1279.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻、喜剧、冒险",
    "category": "精选电影",
    "cover": "./79.jpg"
  },
  {
    "title": "哈里斯夫人闯巴黎",
    "url": "movie-1280.html",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "科幻奇幻",
    "cover": "./80.jpg"
  },
  {
    "title": "卡门还乡",
    "url": "movie-1281.html",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 公路",
    "category": "悬疑惊悚",
    "cover": "./81.jpg"
  },
  {
    "title": "尚红书院",
    "url": "movie-1282.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 喜剧 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./82.jpg"
  },
  {
    "title": "江湖篇之大佬",
    "url": "movie-1283.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 黑帮",
    "category": "爱情喜剧",
    "cover": "./83.jpg"
  },
  {
    "title": "冰峰168小时",
    "url": "movie-1284.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "冒险， 惊悚",
    "category": "热门剧集",
    "cover": "./84.jpg"
  },
  {
    "title": "天命真女",
    "url": "movie-1285.html",
    "year": "2015",
    "region": "韩国",
    "type": "奇幻爱情剧场电影",
    "genre": "奇幻、爱情、命运、剧情",
    "category": "动漫动画",
    "cover": "./85.jpg"
  },
  {
    "title": "特工总裁俏冤家",
    "url": "movie-1286.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 动作， 喜剧",
    "category": "动作犯罪",
    "cover": "./86.jpg"
  },
  {
    "title": "混蛋之吻",
    "url": "movie-1287.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "纪录综艺",
    "cover": "./87.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 李碧华鬼魅系列：迷离夜 电视台风云 伦敦往事 巢穴 善良的他 风云变 原野春浓 韭菜花开 席丹：21世纪的肖像 延迟 步步深陷 三爱太难2 善良的凡逊 迫降危机 逆战 斯巴达克斯第二季 血肉秀 野草 焦外 我没谈完的那场恋爱",
    "url": "movie-1288.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "精选电影",
    "cover": "./88.jpg"
  },
  {
    "title": "玫瑰丛生",
    "url": "movie-1289.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 剧情 / 年代",
    "category": "动漫动画",
    "cover": "./89.jpg"
  },
  {
    "title": "触碰的双手",
    "url": "movie-1290.html",
    "year": "2018",
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 爱情",
    "category": "科幻奇幻",
    "cover": "./90.jpg"
  },
  {
    "title": "机械怪兽",
    "url": "movie-1291.html",
    "year": "2035",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 怪兽 / 动作",
    "category": "纪录综艺",
    "cover": "./91.jpg"
  },
  {
    "title": "九命刑警",
    "url": "movie-1292.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦 / 悬疑 / 动作",
    "category": "纪录综艺",
    "cover": "./92.jpg"
  },
  {
    "title": "我的邻居山田君",
    "url": "movie-1293.html",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "genre": "动画，家庭",
    "category": "科幻奇幻",
    "cover": "./93.jpg"
  },
  {
    "title": "美国派9",
    "url": "movie-1294.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 青春 / 性喜剧",
    "category": "悬疑惊悚",
    "cover": "./94.jpg"
  },
  {
    "title": "与猴同行",
    "url": "movie-1295.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 冒险, 剧情",
    "category": "动作犯罪",
    "cover": "./95.jpg"
  },
  {
    "title": "寅次郎的故事9：柴又恋情",
    "url": "movie-1296.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 喜剧, 家庭",
    "category": "精选电影",
    "cover": "./96.jpg"
  },
  {
    "title": "改变皮肤",
    "url": "movie-1297.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 科幻",
    "category": "动漫动画",
    "cover": "./97.jpg"
  },
  {
    "title": "兄妹之家",
    "url": "movie-1298.html",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭 / 悬疑 / 社会",
    "category": "精选电影",
    "cover": "./98.jpg"
  },
  {
    "title": "西班牙歌神：一路唱来",
    "url": "movie-1299.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影/纪录",
    "genre": "纪录片，音乐，传记",
    "category": "纪录综艺",
    "cover": "./99.jpg"
  },
  {
    "title": "千山暮雪",
    "url": "movie-1300.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 权谋",
    "category": "热门剧集",
    "cover": "./100.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 篮中弃婴 切尔诺贝利·禁区电影版 食人鱼事件 我的军号 鸭子的天空 危险人物1999 七十二家房客第一部粤语 人证 豪杰春香 宇宙黑骑士 淘金者1937 圣诞节的突发事件 美人局 我的美丽洗衣店 女魔头 地下铁道 受伤的游戏 神奇马戏团之动物饼干 第六发现 钻石惹的祸",
    "url": "movie-1301.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "精选电影",
    "cover": "./101.jpg"
  },
  {
    "title": "秋田犬蓬夫",
    "url": "movie-1302.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 动物",
    "category": "华语专区",
    "cover": "./102.jpg"
  },
  {
    "title": "料理情人梦",
    "url": "movie-1303.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、喜剧",
    "category": "动作犯罪",
    "cover": "./103.jpg"
  },
  {
    "title": "我们之间的距离",
    "url": "movie-1304.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 科幻 / 剧情",
    "category": "热门剧集",
    "cover": "./104.jpg"
  },
  {
    "title": "狂鼠",
    "url": "movie-1305.html",
    "year": "2017",
    "region": "奥地利 / 德国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "精选电影",
    "cover": "./105.jpg"
  },
  {
    "title": "行运扫把星",
    "url": "movie-1306.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧奇幻",
    "category": "动作犯罪",
    "cover": "./106.jpg"
  },
  {
    "title": "美丽之星",
    "url": "movie-1307.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻、剧情",
    "category": "精选电影",
    "cover": "./107.jpg"
  },
  {
    "title": "想爱就爱",
    "url": "movie-1308.html",
    "year": "2010",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 同性 / 喜剧",
    "category": "爱情喜剧",
    "cover": "./108.jpg"
  },
  {
    "title": "克里斯蒂安",
    "url": "movie-1309.html",
    "year": "2018",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情、家庭、伦理",
    "category": "华语专区",
    "cover": "./109.jpg"
  },
  {
    "title": "嫁我吧，哥们",
    "url": "movie-1310.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧、爱情、剧情",
    "category": "精选电影",
    "cover": "./110.jpg"
  },
  {
    "title": "雷神太保",
    "url": "movie-1311.html",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "全球佳片",
    "cover": "./111.jpg"
  },
  {
    "title": "最难偿是风流债",
    "url": "movie-1312.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情、年代",
    "category": "精选电影",
    "cover": "./112.jpg"
  },
  {
    "title": "勇敢复仇人",
    "url": "movie-1313.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "category": "科幻奇幻",
    "cover": "./113.jpg"
  },
  {
    "title": "希望之海",
    "url": "movie-1314.html",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/灾难",
    "category": "热门剧集",
    "cover": "./114.jpg"
  },
  {
    "title": "然后，她找到了我",
    "url": "movie-1315.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "category": "华语专区",
    "cover": "./115.jpg"
  },
  {
    "title": "女人心粤语",
    "url": "movie-1316.html",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情，都市",
    "category": "爱情喜剧",
    "cover": "./116.jpg"
  },
  {
    "title": "大汗征西",
    "url": "movie-1317.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史, 战争",
    "category": "动漫动画",
    "cover": "./117.jpg"
  },
  {
    "title": "星际特工瓦雷诺：千星之城",
    "url": "movie-1318.html",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "genre": "科幻, 动作, 冒险",
    "category": "全球佳片",
    "cover": "./118.jpg"
  },
  {
    "title": "灵虐",
    "url": "movie-1319.html",
    "year": "2027",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖",
    "category": "全球佳片",
    "cover": "./119.jpg"
  },
  {
    "title": "荒野上的光",
    "url": "movie-1320.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/公路",
    "category": "悬疑惊悚",
    "cover": "./120.jpg"
  },
  {
    "title": "荣耀蚀刻",
    "url": "movie-1321.html",
    "year": "2023",
    "region": "土耳其，德国",
    "type": "电影",
    "genre": "剧情，战争",
    "category": "悬疑惊悚",
    "cover": "./121.jpg"
  },
  {
    "title": "木制礼帽",
    "url": "movie-1322.html",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./122.jpg"
  },
  {
    "title": "鹿王",
    "url": "movie-1323.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻 / 冒险",
    "category": "爱情喜剧",
    "cover": "./123.jpg"
  },
  {
    "title": "无情的女人",
    "url": "movie-1324.html",
    "year": "2026",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑， 惊悚， 女性",
    "category": "纪录综艺",
    "cover": "./124.jpg"
  },
  {
    "title": "国家底线",
    "url": "movie-1325.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、犯罪、反谍、刑侦",
    "category": "动漫动画",
    "cover": "./125.jpg"
  },
  {
    "title": "大侦探波洛第七季",
    "url": "movie-1326.html",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 犯罪",
    "category": "全球佳片",
    "cover": "./126.jpg"
  },
  {
    "title": "双面女蝎星",
    "url": "movie-1327.html",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 爱情 / 惊悚",
    "category": "华语专区",
    "cover": "./127.jpg"
  },
  {
    "title": "弗拉迪米尔与罗莎",
    "url": "movie-1328.html",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "爱情/战争",
    "category": "热门剧集",
    "cover": "./128.jpg"
  },
  {
    "title": "最后的轰炸",
    "url": "movie-1329.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "战争，历史",
    "category": "纪录综艺",
    "cover": "./129.jpg"
  },
  {
    "title": "森林守护队",
    "url": "movie-1330.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 冒险 / 悬疑",
    "category": "纪录综艺",
    "cover": "./130.jpg"
  },
  {
    "title": "杀戮炼",
    "url": "movie-1331.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 恐怖, 武士",
    "category": "华语专区",
    "cover": "./131.jpg"
  },
  {
    "title": "英雄本诈",
    "url": "movie-1332.html",
    "year": "2018",
    "region": "香港",
    "type": "犯罪喜剧电影",
    "genre": "黑色喜剧, 犯罪, 社会讽喻",
    "category": "动漫动画",
    "cover": "./132.jpg"
  },
  {
    "title": "欲望都市",
    "url": "movie-1333.html",
    "year": "1998",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，爱情",
    "category": "热门剧集",
    "cover": "./133.jpg"
  },
  {
    "title": "警探红白黑",
    "url": "movie-1334.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "科幻奇幻",
    "cover": "./134.jpg"
  },
  {
    "title": "女皇九十展风华",
    "url": "movie-1335.html",
    "year": "2025",
    "region": "英国",
    "type": "纪录片 / 剧情片",
    "genre": "历史 / 传记 / 剧情",
    "category": "科幻奇幻",
    "cover": "./135.jpg"
  },
  {
    "title": "芭莉丝，非法国首都",
    "url": "movie-1336.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "热门剧集",
    "cover": "./136.jpg"
  },
  {
    "title": "等到永远",
    "url": "movie-1337.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "爱情科幻",
    "category": "爱情喜剧",
    "cover": "./137.jpg"
  },
  {
    "title": "马永贞",
    "url": "movie-1338.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，剧情",
    "category": "悬疑惊悚",
    "cover": "./138.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 绝命圣诞夜 天官赐福动漫国语 杀手欧阳盆栽 未命名的特雷·帕克电影 南方传奇 我们俩2019 物理魔法使马修第二季 真爱像阿飘 无地自容 神的记事本 糊涂县令郑板桥 破晓时刻 欢喜密探 奇幻魔法屋 拦截火狐狸 不可思议大灯泡 红尘孽债续集 疯孽劫 着魔1981 太平间的驼背者",
    "url": "movie-1339.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "动漫动画",
    "cover": "./139.jpg"
  },
  {
    "title": "我的劲爆婚礼",
    "url": "movie-1340.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧, 动作, 爱情",
    "category": "全球佳片",
    "cover": "./140.jpg"
  },
  {
    "title": "失控快递",
    "url": "movie-1341.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "category": "动作犯罪",
    "cover": "./141.jpg"
  },
  {
    "title": "天才玩偶 日语版",
    "url": "movie-1342.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻, 悬疑, 动作",
    "category": "动漫动画",
    "cover": "./142.jpg"
  },
  {
    "title": "对不起，仇家",
    "url": "movie-1343.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 犯罪",
    "category": "精选电影",
    "cover": "./143.jpg"
  },
  {
    "title": "异世界迷宫黑心企业",
    "url": "movie-1344.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集 / 动画",
    "genre": "奇幻 / 搞笑 / 职场",
    "category": "全球佳片",
    "cover": "./144.jpg"
  },
  {
    "title": "极乐宿舍",
    "url": "movie-1345.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集 (12集)",
    "genre": "喜剧 / 爱情 / 校园",
    "category": "精选电影",
    "cover": "./145.jpg"
  },
  {
    "title": "阿尔卑斯：自然的巨人",
    "url": "movie-1346.html",
    "year": "2022",
    "region": "瑞士",
    "type": "纪录片",
    "genre": "自然, 地理",
    "category": "科幻奇幻",
    "cover": "./146.jpg"
  },
  {
    "title": "极度寒冷",
    "url": "movie-1347.html",
    "year": "1983",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "冰原惊悚，生存灾难，心理悬疑",
    "category": "动作犯罪",
    "cover": "./147.jpg"
  },
  {
    "title": "钢琴家",
    "url": "movie-1348.html",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "genre": "剧情, 传记, 音乐",
    "category": "动漫动画",
    "cover": "./148.jpg"
  },
  {
    "title": "随心所欲的五月国语",
    "url": "movie-1349.html",
    "year": "2015",
    "region": "法国 / 中国大陆 (合拍)",
    "type": "电影",
    "genre": "剧情 / 战争 / 家庭",
    "category": "爱情喜剧",
    "cover": "./149.jpg"
  },
  {
    "title": "急诊室的难题",
    "url": "movie-1350.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "医疗, 职业",
    "category": "热门剧集",
    "cover": "./150.jpg"
  },
  {
    "title": "荡妇野玫瑰",
    "url": "movie-1351.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "西部，惊悚，女权",
    "category": "全球佳片",
    "cover": "./1.jpg"
  },
  {
    "title": "另一个世界",
    "url": "movie-1352.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "动作犯罪",
    "cover": "./2.jpg"
  },
  {
    "title": "摇滚小子",
    "url": "movie-1353.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐 / 剧情 / 家庭",
    "category": "全球佳片",
    "cover": "./3.jpg"
  },
  {
    "title": "断肠云雨热情花",
    "url": "movie-1354.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，悬疑",
    "category": "热门剧集",
    "cover": "./4.jpg"
  },
  {
    "title": "小气鬼",
    "url": "movie-1355.html",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "爱情喜剧",
    "cover": "./5.jpg"
  },
  {
    "title": "台风商社",
    "url": "movie-1356.html",
    "year": "2023",
    "region": "韩国",
    "type": "商战惊悚片",
    "genre": "金融博弈、灾难悬疑、企业伦理",
    "category": "爱情喜剧",
    "cover": "./6.jpg"
  },
  {
    "title": "寂寞大师",
    "url": "movie-1357.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "华语专区",
    "cover": "./7.jpg"
  },
  {
    "title": "临江仙",
    "url": "movie-1358.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、悬疑、奇幻",
    "category": "爱情喜剧",
    "cover": "./8.jpg"
  },
  {
    "title": "圣诞宅急便",
    "url": "movie-1359.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 家庭",
    "category": "爱情喜剧",
    "cover": "./9.jpg"
  },
  {
    "title": "魂魄唔齐粤语",
    "url": "movie-1360.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "爱情喜剧",
    "cover": "./10.jpg"
  },
  {
    "title": "肌肤的选择",
    "url": "movie-1361.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "华语专区",
    "cover": "./11.jpg"
  },
  {
    "title": "钢铁杰克",
    "url": "movie-1362.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 动作",
    "category": "悬疑惊悚",
    "cover": "./12.jpg"
  },
  {
    "title": "优质杀手",
    "url": "movie-1363.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "热门剧集",
    "cover": "./13.jpg"
  },
  {
    "title": "盗墓迷踪",
    "url": "movie-1364.html",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑，冒险",
    "category": "精选电影",
    "cover": "./14.jpg"
  },
  {
    "title": "烈爱双生",
    "url": "movie-1365.html",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情、悬疑、同性",
    "category": "爱情喜剧",
    "cover": "./15.jpg"
  },
  {
    "title": "私语时刻",
    "url": "movie-1366.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "热门剧集",
    "cover": "./16.jpg"
  },
  {
    "title": "敬！咆哮二十",
    "url": "movie-1367.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "历史 / 剧情",
    "category": "动漫动画",
    "cover": "./17.jpg"
  },
  {
    "title": "生杀大权",
    "url": "movie-1368.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装、权谋、悬疑",
    "category": "科幻奇幻",
    "cover": "./18.jpg"
  },
  {
    "title": "我的绝妙离婚",
    "url": "movie-1369.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "category": "动漫动画",
    "cover": "./19.jpg"
  },
  {
    "title": "夺金四贱客",
    "url": "movie-1370.html",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "犯罪喜剧",
    "category": "爱情喜剧",
    "cover": "./20.jpg"
  },
  {
    "title": "女朋友的女朋友",
    "url": "movie-1371.html",
    "year": "2020",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情喜剧 / 都市剧情",
    "category": "纪录综艺",
    "cover": "./21.jpg"
  },
  {
    "title": "少女灵异日记",
    "url": "movie-1372.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚， 悬疑",
    "category": "全球佳片",
    "cover": "./22.jpg"
  },
  {
    "title": "关键密码",
    "url": "movie-1373.html",
    "year": "2006",
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./23.jpg"
  },
  {
    "title": "最是橙黄橘绿时",
    "url": "movie-1374.html",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "华语专区",
    "cover": "./24.jpg"
  },
  {
    "title": "明月守护者",
    "url": "movie-1375.html",
    "year": "2014",
    "region": "法国",
    "type": "动画电影",
    "genre": "奇幻, 冒险, 爱情",
    "category": "全球佳片",
    "cover": "./25.jpg"
  },
  {
    "title": "叛逆无罪",
    "url": "movie-1376.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 犯罪",
    "category": "华语专区",
    "cover": "./26.jpg"
  },
  {
    "title": "属性同好会",
    "url": "movie-1377.html",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧、校园、日常",
    "category": "悬疑惊悚",
    "cover": "./27.jpg"
  },
  {
    "title": "幸福路上",
    "url": "movie-1378.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./28.jpg"
  },
  {
    "title": "狮城之歌1958",
    "url": "movie-1379.html",
    "year": "2018",
    "region": "新加坡",
    "type": "电影",
    "genre": "历史 / 音乐",
    "category": "热门剧集",
    "cover": "./29.jpg"
  },
  {
    "title": "太平间闹鬼事件",
    "url": "movie-1380.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "纪录综艺",
    "cover": "./30.jpg"
  },
  {
    "title": "奇迹",
    "url": "movie-1381.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，奇幻，治愈",
    "category": "动漫动画",
    "cover": "./31.jpg"
  },
  {
    "title": "老喇叭新传",
    "url": "movie-1382.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "热门剧集",
    "cover": "./32.jpg"
  },
  {
    "title": "谎言之躯",
    "url": "movie-1383.html",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 谍战",
    "category": "科幻奇幻",
    "cover": "./33.jpg"
  },
  {
    "title": "圣烟烈情",
    "url": "movie-1384.html",
    "year": "2023",
    "region": "澳大利亚 / 美国",
    "type": "电影",
    "genre": "剧情, 爱情, 西部",
    "category": "热门剧集",
    "cover": "./34.jpg"
  },
  {
    "title": "熊出没之秋日团团转",
    "url": "movie-1385.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 喜剧 / 亲子",
    "category": "动作犯罪",
    "cover": "./35.jpg"
  },
  {
    "title": "钢铁英雄",
    "url": "movie-1386.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 传记 / 动作",
    "category": "热门剧集",
    "cover": "./36.jpg"
  },
  {
    "title": "他们可能是巨人",
    "url": "movie-1387.html",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "科幻奇幻",
    "cover": "./37.jpg"
  },
  {
    "title": "一个女大学生的告白",
    "url": "movie-1388.html",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑，剧情",
    "category": "华语专区",
    "cover": "./38.jpg"
  },
  {
    "title": "魔鬼中的天使",
    "url": "movie-1389.html",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 心理",
    "category": "精选电影",
    "cover": "./39.jpg"
  },
  {
    "title": "火星坏女孩",
    "url": "movie-1390.html",
    "year": "2030",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 喜剧, 冒险",
    "category": "热门剧集",
    "cover": "./40.jpg"
  },
  {
    "title": "女警察",
    "url": "movie-1391.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "刑侦, 动作, 剧情",
    "category": "全球佳片",
    "cover": "./41.jpg"
  },
  {
    "title": "东京贵族女子",
    "url": "movie-1392.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "纪录综艺",
    "cover": "./42.jpg"
  },
  {
    "title": "放飞",
    "url": "movie-1393.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春成长 / 公路冒险",
    "category": "动漫动画",
    "cover": "./43.jpg"
  },
  {
    "title": "地狱罪人",
    "url": "movie-1394.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪、惊悚",
    "category": "悬疑惊悚",
    "cover": "./44.jpg"
  },
  {
    "title": "巢穴",
    "url": "movie-1395.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "全球佳片",
    "cover": "./45.jpg"
  },
  {
    "title": "鬼龙院花子的生涯",
    "url": "movie-1396.html",
    "year": "1982",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 动作",
    "category": "精选电影",
    "cover": "./46.jpg"
  },
  {
    "title": "间谍化骨鎗",
    "url": "movie-1397.html",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，动作",
    "category": "华语专区",
    "cover": "./47.jpg"
  },
  {
    "title": "8号出口",
    "url": "movie-1398.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 惊悚, 奇幻",
    "category": "爱情喜剧",
    "cover": "./48.jpg"
  },
  {
    "title": "开心超人2:启源星之战",
    "url": "movie-1399.html",
    "year": "2025",
    "region": "中国",
    "type": "动画电影",
    "genre": "动作, 科幻, 喜剧",
    "category": "华语专区",
    "cover": "./49.jpg"
  },
  {
    "title": "真人快打：重生",
    "url": "movie-1400.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 奇幻",
    "category": "动作犯罪",
    "cover": "./50.jpg"
  },
  {
    "title": "当我们「假」在一起",
    "url": "movie-1401.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "全球佳片",
    "cover": "./51.jpg"
  },
  {
    "title": "看我说什么",
    "url": "movie-1402.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻， 悬疑， 惊悚",
    "category": "华语专区",
    "cover": "./52.jpg"
  },
  {
    "title": "瑞典姐儿娇俏妙",
    "url": "movie-1403.html",
    "year": "2024",
    "region": "瑞典",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "动作犯罪",
    "cover": "./53.jpg"
  },
  {
    "title": "在马德里阵亡",
    "url": "movie-1404.html",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "战争 / 历史 / 剧情",
    "category": "爱情喜剧",
    "cover": "./54.jpg"
  },
  {
    "title": "1000杯酒",
    "url": "movie-1405.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 治愈, 生活",
    "category": "精选电影",
    "cover": "./55.jpg"
  },
  {
    "title": "警官大人",
    "url": "movie-1406.html",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 刑侦 / 剧情",
    "category": "华语专区",
    "cover": "./56.jpg"
  },
  {
    "title": "武侠",
    "url": "movie-1407.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 悬疑, 哲理",
    "category": "悬疑惊悚",
    "cover": "./57.jpg"
  },
  {
    "title": "围城电影版",
    "url": "movie-1408.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情伦理",
    "category": "科幻奇幻",
    "cover": "./58.jpg"
  },
  {
    "title": "日式厕所",
    "url": "movie-1409.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 治愈",
    "category": "纪录综艺",
    "cover": "./59.jpg"
  },
  {
    "title": "葛里斯葛里斯",
    "url": "movie-1410.html",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑，奇幻",
    "category": "全球佳片",
    "cover": "./60.jpg"
  },
  {
    "title": "史前巨鳄：最终章",
    "url": "movie-1411.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 恐怖, 科幻",
    "category": "动漫动画",
    "cover": "./61.jpg"
  },
  {
    "title": "利维坦号战记",
    "url": "movie-1412.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻",
    "category": "爱情喜剧",
    "cover": "./62.jpg"
  },
  {
    "title": "怪谈五命河",
    "url": "movie-1413.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖，悬疑，奇幻",
    "category": "纪录综艺",
    "cover": "./63.jpg"
  },
  {
    "title": "七月流火",
    "url": "movie-1414.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 青春",
    "category": "精选电影",
    "cover": "./64.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 结婚为什么 充满恩典 与姑母同行 自杀直播现场 双宝斗恶龙 血色清晨 友谊万万岁 遥远的街区 仙女教母 太多强森 兽性新人类之艳星劫 二麻租媳妇 初恋那一天所读的故事 巴雷利的巴菲 罪恶黑名单第五季 大长今 良心无悔 十四岁 一杯上路2021 象限之眼",
    "url": "movie-1415.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "悬疑惊悚",
    "cover": "./65.jpg"
  },
  {
    "title": "裸夜",
    "url": "movie-1416.html",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "全球佳片",
    "cover": "./66.jpg"
  },
  {
    "title": "快乐就好",
    "url": "movie-1417.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "精选电影",
    "cover": "./67.jpg"
  },
  {
    "title": "侠盗罗宾汉",
    "url": "movie-1418.html",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "动作 / 冒险",
    "category": "华语专区",
    "cover": "./68.jpg"
  },
  {
    "title": "荒漠浴血记",
    "url": "movie-1419.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 惊悚",
    "category": "全球佳片",
    "cover": "./69.jpg"
  },
  {
    "title": "狗狗圣诞颂",
    "url": "movie-1420.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "家庭 / 喜剧 / 奇幻",
    "category": "全球佳片",
    "cover": "./70.jpg"
  },
  {
    "title": "73舰队潜艇战",
    "url": "movie-1421.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 历史, 动作",
    "category": "悬疑惊悚",
    "cover": "./71.jpg"
  },
  {
    "title": "超神学院第二季",
    "url": "movie-1422.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "动漫",
    "genre": "科幻 / 动作 / 奇幻",
    "category": "热门剧集",
    "cover": "./72.jpg"
  },
  {
    "title": "洛奇5国语",
    "url": "movie-1423.html",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "genre": "剧情运动",
    "category": "爱情喜剧",
    "cover": "./73.jpg"
  },
  {
    "title": "虎跃龙腾",
    "url": "movie-1424.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 体育",
    "category": "全球佳片",
    "cover": "./74.jpg"
  },
  {
    "title": "记忆的小巷",
    "url": "movie-1425.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "文艺, 奇幻",
    "category": "精选电影",
    "cover": "./75.jpg"
  },
  {
    "title": "俄克拉荷马",
    "url": "movie-1426.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "西部, 剧情",
    "category": "爱情喜剧",
    "cover": "./76.jpg"
  },
  {
    "title": "来者何人",
    "url": "movie-1427.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑惊悚 / 犯罪 / 心理",
    "category": "动漫动画",
    "cover": "./77.jpg"
  },
  {
    "title": "重装战警",
    "url": "movie-1428.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、科幻、警匪",
    "category": "精选电影",
    "cover": "./78.jpg"
  },
  {
    "title": "神秘人质",
    "url": "movie-1429.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑，惊悚，剧情",
    "category": "精选电影",
    "cover": "./79.jpg"
  },
  {
    "title": "饿犬蓝调",
    "url": "movie-1430.html",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪, 剧情, 黑色幽默",
    "category": "科幻奇幻",
    "cover": "./80.jpg"
  },
  {
    "title": "灭门",
    "url": "movie-1431.html",
    "year": "2010",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "科幻奇幻",
    "cover": "./81.jpg"
  },
  {
    "title": "恋慕",
    "url": "movie-1432.html",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "科幻奇幻",
    "cover": "./82.jpg"
  },
  {
    "title": "暴力之隙",
    "url": "movie-1433.html",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "动作",
    "category": "爱情喜剧",
    "cover": "./83.jpg"
  },
  {
    "title": "众星拱月",
    "url": "movie-1434.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "纪录综艺",
    "cover": "./84.jpg"
  },
  {
    "title": "美女足球队",
    "url": "movie-1435.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 运动, 励志",
    "category": "华语专区",
    "cover": "./85.jpg"
  },
  {
    "title": "疯狂忘年交",
    "url": "movie-1436.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "公路喜剧",
    "category": "爱情喜剧",
    "cover": "./86.jpg"
  },
  {
    "title": "我的朋友很少第二季",
    "url": "movie-1437.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 青春",
    "category": "纪录综艺",
    "cover": "./87.jpg"
  },
  {
    "title": "爱上海史密斯",
    "url": "movie-1438.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "传记/悬疑",
    "category": "精选电影",
    "cover": "./88.jpg"
  },
  {
    "title": "圣麒麟传说",
    "url": "movie-1439.html",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻 / 冒险",
    "category": "精选电影",
    "cover": "./89.jpg"
  },
  {
    "title": "肌肤之亲",
    "url": "movie-1440.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情，奇幻",
    "category": "动作犯罪",
    "cover": "./90.jpg"
  },
  {
    "title": "大都市的爱情法电影版",
    "url": "movie-1441.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 剧情, 都市",
    "category": "华语专区",
    "cover": "./91.jpg"
  },
  {
    "title": "火车上的女士",
    "url": "movie-1442.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑，剧情，心理",
    "category": "精选电影",
    "cover": "./92.jpg"
  },
  {
    "title": "预知死亡",
    "url": "movie-1443.html",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，科幻",
    "category": "爱情喜剧",
    "cover": "./93.jpg"
  },
  {
    "title": "生死30分",
    "url": "movie-1444.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 剧情",
    "category": "纪录综艺",
    "cover": "./94.jpg"
  },
  {
    "title": "我本善良国语",
    "url": "movie-1445.html",
    "year": "2026",
    "region": "中国香港 / 中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 伦理",
    "category": "华语专区",
    "cover": "./95.jpg"
  },
  {
    "title": "朴烈：逆权年代",
    "url": "movie-1446.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "历史剧情",
    "category": "悬疑惊悚",
    "cover": "./96.jpg"
  },
  {
    "title": "好女三头瞒",
    "url": "movie-1447.html",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 都市 / 女性",
    "category": "华语专区",
    "cover": "./97.jpg"
  },
  {
    "title": "赶尸先生",
    "url": "movie-1448.html",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 喜剧, 动作, 民俗",
    "category": "动漫动画",
    "cover": "./98.jpg"
  },
  {
    "title": "铁血战士2",
    "url": "movie-1449.html",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作,惊悚",
    "category": "动漫动画",
    "cover": "./99.jpg"
  },
  {
    "title": "木棘证人粤语",
    "url": "movie-1450.html",
    "year": "2020",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑，犯罪，喜剧",
    "category": "热门剧集",
    "cover": "./100.jpg"
  },
  {
    "title": "男孩．赛车．性丑闻",
    "url": "movie-1451.html",
    "year": "2025",
    "region": "日本 / 法国",
    "type": "电影",
    "genre": "剧情，悬疑",
    "category": "动漫动画",
    "cover": "./101.jpg"
  },
  {
    "title": "末代天师粤语",
    "url": "movie-1452.html",
    "year": "1993",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "奇幻 / 恐怖",
    "category": "纪录综艺",
    "cover": "./102.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 卡里加利博士的小屋 蛊惑仔放暑假 飞天小女警大电影 脂粉奇兵 斗牛勇士 蓝裙魔鬼 翡翠恋曲粤语 飞跃地心 肉搏沙场 三心两性 休赛期 职场三国 天净沙 这一刻 工作虾 古国焚城记 德惠翁主 野心勃勃 女子须知 绝代艳后",
    "url": "movie-1453.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "纪录综艺",
    "cover": "./103.jpg"
  },
  {
    "title": "卡斯",
    "url": "movie-1454.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 传记",
    "category": "动作犯罪",
    "cover": "./104.jpg"
  },
  {
    "title": "女作家与谋杀案第十季",
    "url": "movie-1455.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "华语专区",
    "cover": "./105.jpg"
  },
  {
    "title": "寻女彻夜行",
    "url": "movie-1456.html",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 剧情",
    "category": "纪录综艺",
    "cover": "./106.jpg"
  },
  {
    "title": "大爱你们",
    "url": "movie-1457.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭, 剧情",
    "category": "科幻奇幻",
    "cover": "./107.jpg"
  },
  {
    "title": "1990 血战纽约城",
    "url": "movie-1458.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 战争, 科幻",
    "category": "动作犯罪",
    "cover": "./108.jpg"
  },
  {
    "title": "堕落街传奇第一季",
    "url": "movie-1459.html",
    "year": "2017",
    "region": "美国",
    "type": "电视剧集",
    "genre": "犯罪剧情",
    "category": "爱情喜剧",
    "cover": "./109.jpg"
  },
  {
    "title": "风流总统",
    "url": "movie-1460.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 传记",
    "category": "悬疑惊悚",
    "cover": "./110.jpg"
  },
  {
    "title": "人与兽",
    "url": "movie-1461.html",
    "year": "1962",
    "region": "苏联",
    "type": "电影",
    "genre": "剧情, 战争",
    "category": "全球佳片",
    "cover": "./111.jpg"
  },
  {
    "title": "陌生人的爱",
    "url": "movie-1462.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、悬疑、爱情",
    "category": "科幻奇幻",
    "cover": "./112.jpg"
  },
  {
    "title": "极品辣妈好威武",
    "url": "movie-1463.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "都市喜剧电影",
    "genre": "家庭, 商业犯罪, 成长",
    "category": "悬疑惊悚",
    "cover": "./113.jpg"
  },
  {
    "title": "兰闺艳血",
    "url": "movie-1464.html",
    "year": "1950",
    "region": "美国",
    "type": "电影",
    "genre": "黑色电影，悬疑，爱情",
    "category": "悬疑惊悚",
    "cover": "./114.jpg"
  },
  {
    "title": "靓女也疯狂",
    "url": "movie-1465.html",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "悬疑惊悚",
    "cover": "./115.jpg"
  },
  {
    "title": "无声深处",
    "url": "movie-1466.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 犯罪, 悬疑",
    "category": "动漫动画",
    "cover": "./116.jpg"
  },
  {
    "title": "战斗司书",
    "url": "movie-1467.html",
    "year": "2009",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻 / 战斗",
    "category": "全球佳片",
    "cover": "./117.jpg"
  },
  {
    "title": "合法伴侣",
    "url": "movie-1468.html",
    "year": "2020",
    "region": "英国 / 中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "动作犯罪",
    "cover": "./118.jpg"
  },
  {
    "title": "小禾卿卿有点田",
    "url": "movie-1469.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、爱情、田园",
    "category": "热门剧集",
    "cover": "./119.jpg"
  },
  {
    "title": "荒野杀机",
    "url": "movie-1470.html",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "category": "热门剧集",
    "cover": "./120.jpg"
  },
  {
    "title": "浪漫往昔",
    "url": "movie-1471.html",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情、年代",
    "category": "动作犯罪",
    "cover": "./121.jpg"
  },
  {
    "title": "罗杰与我",
    "url": "movie-1472.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "category": "热门剧集",
    "cover": "./122.jpg"
  },
  {
    "title": "在她身边",
    "url": "movie-1473.html",
    "year": "2014",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 同性",
    "category": "热门剧集",
    "cover": "./123.jpg"
  },
  {
    "title": "明堂",
    "url": "movie-1474.html",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "历史, 惊悚, 政治",
    "category": "爱情喜剧",
    "cover": "./124.jpg"
  },
  {
    "title": "日夜男女",
    "url": "movie-1475.html",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "category": "爱情喜剧",
    "cover": "./125.jpg"
  },
  {
    "title": "更衣人偶坠入爱河第二季",
    "url": "movie-1476.html",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "genre": "爱情 / 喜剧 / 校园",
    "category": "热门剧集",
    "cover": "./126.jpg"
  },
  {
    "title": "质量效应：迷途楷模",
    "url": "movie-1477.html",
    "year": "2012",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "科幻 / 动作 / 冒险",
    "category": "爱情喜剧",
    "cover": "./127.jpg"
  },
  {
    "title": "爱情安歌粤语",
    "url": "movie-1478.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情、爱情",
    "category": "动漫动画",
    "cover": "./128.jpg"
  },
  {
    "title": "猎人游戏",
    "url": "movie-1479.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 冒险",
    "category": "爱情喜剧",
    "cover": "./129.jpg"
  },
  {
    "title": "河的研究",
    "url": "movie-1480.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "纪录综艺",
    "cover": "./130.jpg"
  },
  {
    "title": "大屋下的丫鬟",
    "url": "movie-1481.html",
    "year": "2010",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 悬疑",
    "category": "动漫动画",
    "cover": "./131.jpg"
  },
  {
    "title": "梅布尔的戏剧生涯",
    "url": "movie-1482.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 传记",
    "category": "爱情喜剧",
    "cover": "./132.jpg"
  },
  {
    "title": "学校万花筒",
    "url": "movie-1483.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "校园群像",
    "category": "全球佳片",
    "cover": "./133.jpg"
  },
  {
    "title": "猫侍",
    "url": "movie-1484.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 古装",
    "category": "爱情喜剧",
    "cover": "./134.jpg"
  },
  {
    "title": "人间革命",
    "url": "movie-1485.html",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情, 历史",
    "category": "动漫动画",
    "cover": "./135.jpg"
  },
  {
    "title": "童军手册之僵尸启示录",
    "url": "movie-1486.html",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，恐怖，动作",
    "category": "科幻奇幻",
    "cover": "./136.jpg"
  },
  {
    "title": "惊险重重",
    "url": "movie-1487.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 灾难",
    "category": "科幻奇幻",
    "cover": "./137.jpg"
  },
  {
    "title": "小子命大",
    "url": "movie-1488.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "科幻奇幻",
    "cover": "./138.jpg"
  },
  {
    "title": "俏房东与妙房客",
    "url": "movie-1489.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧，爱情",
    "category": "动作犯罪",
    "cover": "./139.jpg"
  },
  {
    "title": "我的大叔",
    "url": "movie-1490.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "生活剧情",
    "category": "全球佳片",
    "cover": "./140.jpg"
  },
  {
    "title": "震撼性教育",
    "url": "movie-1491.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 青春",
    "category": "华语专区",
    "cover": "./141.jpg"
  },
  {
    "title": "斜阳2022",
    "url": "movie-1492.html",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "爱情喜剧",
    "cover": "./142.jpg"
  },
  {
    "title": "与巨兽对抗",
    "url": "movie-1493.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难, 动作",
    "category": "全球佳片",
    "cover": "./143.jpg"
  },
  {
    "title": "飞侠小白龙",
    "url": "movie-1494.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，动作，古装",
    "category": "爱情喜剧",
    "cover": "./144.jpg"
  },
  {
    "title": "十月建造的房屋",
    "url": "movie-1495.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "热门剧集",
    "cover": "./145.jpg"
  },
  {
    "title": "牡丹仙子之皇帝诏曰",
    "url": "movie-1496.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装、神话、爱情",
    "category": "精选电影",
    "cover": "./146.jpg"
  },
  {
    "title": "致命女人第一季",
    "url": "movie-1497.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情， 犯罪， 黑色幽默",
    "category": "全球佳片",
    "cover": "./147.jpg"
  },
  {
    "title": "矿区危情",
    "url": "movie-1498.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "灾难剧情片",
    "genre": "工业危机、生存救援、家庭伦理",
    "category": "爱情喜剧",
    "cover": "./148.jpg"
  },
  {
    "title": "神奇三公主",
    "url": "movie-1499.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧 / 奇幻 / 古装",
    "category": "热门剧集",
    "cover": "./149.jpg"
  },
  {
    "title": "蜗牛的策略",
    "url": "movie-1500.html",
    "year": "2016",
    "region": "日本",
    "type": "动画电影",
    "genre": "动画 / 剧情 / 公路",
    "category": "热门剧集",
    "cover": "./150.jpg"
  },
  {
    "title": "帅气技工俏医师",
    "url": "movie-1501.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 医疗",
    "category": "精选电影",
    "cover": "./1.jpg"
  },
  {
    "title": "80奔赴布莱迪",
    "url": "movie-1502.html",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "genre": "公路 / 体育 / 剧情",
    "category": "科幻奇幻",
    "cover": "./2.jpg"
  },
  {
    "title": "少狼",
    "url": "movie-1503.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻， 青春， 剧情",
    "category": "爱情喜剧",
    "cover": "./3.jpg"
  },
  {
    "title": "狂野风格",
    "url": "movie-1504.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "音乐， 剧情， 传记",
    "category": "悬疑惊悚",
    "cover": "./4.jpg"
  },
  {
    "title": "火爆群龙",
    "url": "movie-1505.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "动作犯罪",
    "cover": "./5.jpg"
  },
  {
    "title": "阿富汗16天",
    "url": "movie-1506.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "战争、剧情、历史",
    "category": "华语专区",
    "cover": "./6.jpg"
  },
  {
    "title": "年少日记粤语",
    "url": "movie-1507.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情， 青春， 家庭",
    "category": "全球佳片",
    "cover": "./7.jpg"
  },
  {
    "title": "潘多拉的世界",
    "url": "movie-1508.html",
    "year": "2028",
    "region": "美国 / 英国",
    "type": "电视剧",
    "genre": "科幻 / 悬疑",
    "category": "精选电影",
    "cover": "./8.jpg"
  },
  {
    "title": "敢死突击队",
    "url": "movie-1509.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 动作, 冒险",
    "category": "科幻奇幻",
    "cover": "./9.jpg"
  },
  {
    "title": "结城友奈是勇者第二季",
    "url": "movie-1510.html",
    "year": "2017",
    "region": "日本",
    "type": "TV剧集",
    "genre": "奇幻、战斗、致郁",
    "category": "科幻奇幻",
    "cover": "./10.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 以父之名 明星危情 羊与钢的森林 多情女被辱 导演对我下手了 家有活宝 寂寞爱光临 外星通缉者2 烽火两极 发现女巫 第三季 画江湖之换世门生真人版 流离所爱 我是拳手 外星+人2：回到未来 八千万 食梦者第一季 错在新宿 异邦人们 我女友的男友 御马奇缘",
    "url": "movie-1511.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "精选电影",
    "cover": "./11.jpg"
  },
  {
    "title": "异域",
    "url": "movie-1512.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 文艺",
    "category": "科幻奇幻",
    "cover": "./12.jpg"
  },
  {
    "title": "御用杀手",
    "url": "movie-1513.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./13.jpg"
  },
  {
    "title": "爱上邻家主厨",
    "url": "movie-1514.html",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "华语专区",
    "cover": "./14.jpg"
  },
  {
    "title": "玛丽和乔治",
    "url": "movie-1515.html",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "历史, 剧情",
    "category": "动作犯罪",
    "cover": "./15.jpg"
  },
  {
    "title": "帕坦",
    "url": "movie-1516.html",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "动作 / 歌舞",
    "category": "爱情喜剧",
    "cover": "./16.jpg"
  },
  {
    "title": "查莉成长日记第四季",
    "url": "movie-1517.html",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 家庭, 儿童",
    "category": "动作犯罪",
    "cover": "./17.jpg"
  },
  {
    "title": "是，首相第一季",
    "url": "movie-1518.html",
    "year": "1986",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧, 政治",
    "category": "精选电影",
    "cover": "./18.jpg"
  },
  {
    "title": "爸爸",
    "url": "movie-1519.html",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 家庭, 运动",
    "category": "动作犯罪",
    "cover": "./19.jpg"
  },
  {
    "title": "披荆斩棘第五季",
    "url": "movie-1520.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 竞演",
    "category": "热门剧集",
    "cover": "./20.jpg"
  },
  {
    "title": "鸳鸯恋",
    "url": "movie-1521.html",
    "year": "1960",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，戏曲",
    "category": "纪录综艺",
    "cover": "./21.jpg"
  },
  {
    "title": "义士安重根",
    "url": "movie-1522.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "历史 / 传记 / 动作",
    "category": "悬疑惊悚",
    "cover": "./22.jpg"
  },
  {
    "title": "富贵之家",
    "url": "movie-1523.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情，商战，家庭",
    "category": "爱情喜剧",
    "cover": "./23.jpg"
  },
  {
    "title": "绝世千金第一季",
    "url": "movie-1524.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装、甜宠、喜剧",
    "category": "动漫动画",
    "cover": "./24.jpg"
  },
  {
    "title": "环大西洋",
    "url": "movie-1525.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "动作犯罪",
    "cover": "./25.jpg"
  },
  {
    "title": "梅花红桃",
    "url": "movie-1526.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战, 悬疑",
    "category": "纪录综艺",
    "cover": "./26.jpg"
  },
  {
    "title": "极限逃杀",
    "url": "movie-1527.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "科幻奇幻",
    "cover": "./27.jpg"
  },
  {
    "title": "龙樱2",
    "url": "movie-1528.html",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "校园 / 励志 / 剧情",
    "category": "华语专区",
    "cover": "./28.jpg"
  },
  {
    "title": "信长协奏曲 电影版",
    "url": "movie-1529.html",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "历史 / 穿越 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./29.jpg"
  },
  {
    "title": "穆索斯基",
    "url": "movie-1530.html",
    "year": "2016",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "传记 / 音乐 / 剧情",
    "category": "纪录综艺",
    "cover": "./30.jpg"
  },
  {
    "title": "此生漫漫",
    "url": "movie-1531.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 年代 / 剧情",
    "category": "华语专区",
    "cover": "./31.jpg"
  },
  {
    "title": "全员加速中2025",
    "url": "movie-1532.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 竞技",
    "category": "热门剧集",
    "cover": "./32.jpg"
  },
  {
    "title": "新版爱和罪孽的痕迹",
    "url": "movie-1533.html",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 惊悚",
    "category": "全球佳片",
    "cover": "./33.jpg"
  },
  {
    "title": "夜半鬼敲门3",
    "url": "movie-1534.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "精选电影",
    "cover": "./34.jpg"
  },
  {
    "title": "狗果定理",
    "url": "movie-1535.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/家庭",
    "category": "科幻奇幻",
    "cover": "./35.jpg"
  },
  {
    "title": "幻影光环",
    "url": "movie-1536.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "category": "华语专区",
    "cover": "./36.jpg"
  },
  {
    "title": "零度战姬",
    "url": "movie-1537.html",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "科幻 / 动作 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./37.jpg"
  },
  {
    "title": "无赖勇者的鬼畜美学",
    "url": "movie-1538.html",
    "year": "2012",
    "region": "日本",
    "type": "动漫",
    "genre": "奇幻，后宫，动作，冒险",
    "category": "纪录综艺",
    "cover": "./38.jpg"
  },
  {
    "title": "我很幸福",
    "url": "movie-1539.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧情片",
    "genre": "爱情/成长/治愈",
    "category": "全球佳片",
    "cover": "./39.jpg"
  },
  {
    "title": "鲁邦三世 卡里奥斯特罗城",
    "url": "movie-1540.html",
    "year": "1979",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 冒险 / 喜剧",
    "category": "动作犯罪",
    "cover": "./40.jpg"
  },
  {
    "title": "明宫谜案",
    "url": "movie-1541.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史悬疑",
    "category": "悬疑惊悚",
    "cover": "./41.jpg"
  },
  {
    "title": "详述病情",
    "url": "movie-1542.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 心理, 剧情",
    "category": "动作犯罪",
    "cover": "./42.jpg"
  },
  {
    "title": "卡拉马佐夫兄弟",
    "url": "movie-1543.html",
    "year": "2026",
    "region": "英国 / 俄罗斯",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./43.jpg"
  },
  {
    "title": "吃掉有钱人",
    "url": "movie-1544.html",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "category": "科幻奇幻",
    "cover": "./44.jpg"
  },
  {
    "title": "腿",
    "url": "movie-1545.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 黑色幽默",
    "category": "热门剧集",
    "cover": "./45.jpg"
  },
  {
    "title": "燧石行动",
    "url": "movie-1546.html",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "动作, 战争, 历史",
    "category": "精选电影",
    "cover": "./46.jpg"
  },
  {
    "title": "王小毛的奇幻人生",
    "url": "movie-1547.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 喜剧 / 家庭",
    "category": "动作犯罪",
    "cover": "./47.jpg"
  },
  {
    "title": "格桑梅朵",
    "url": "movie-1548.html",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，家庭",
    "category": "纪录综艺",
    "cover": "./48.jpg"
  },
  {
    "title": "金印仇",
    "url": "movie-1549.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 悬疑",
    "category": "动漫动画",
    "cover": "./49.jpg"
  },
  {
    "title": "国王外出中",
    "url": "movie-1550.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "category": "悬疑惊悚",
    "cover": "./50.jpg"
  },
  {
    "title": "球爱的天空",
    "url": "movie-1551.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动, 爱情, 喜剧",
    "category": "华语专区",
    "cover": "./51.jpg"
  },
  {
    "title": "一个出租车司机的历险记",
    "url": "movie-1552.html",
    "year": "2014",
    "region": "中国大陆",
    "type": "都市动作喜剧",
    "genre": "动作 / 黑色喜剧 / 都市冒险",
    "category": "爱情喜剧",
    "cover": "./52.jpg"
  },
  {
    "title": "触目惊鲨",
    "url": "movie-1553.html",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚恐怖",
    "category": "悬疑惊悚",
    "cover": "./53.jpg"
  },
  {
    "title": "上帝的礼物",
    "url": "movie-1554.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "category": "爱情喜剧",
    "cover": "./54.jpg"
  },
  {
    "title": "神烦警探第六季",
    "url": "movie-1555.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 犯罪",
    "category": "华语专区",
    "cover": "./55.jpg"
  },
  {
    "title": "我为毛毛虫停车",
    "url": "movie-1556.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 家庭, 冒险",
    "category": "纪录综艺",
    "cover": "./56.jpg"
  },
  {
    "title": "没有你的最后的日子",
    "url": "movie-1557.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 奇幻",
    "category": "热门剧集",
    "cover": "./57.jpg"
  },
  {
    "title": "海军罪案调查处第十八季",
    "url": "movie-1558.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，悬疑，剧情，动作",
    "category": "热门剧集",
    "cover": "./58.jpg"
  },
  {
    "title": "谜谕 第二季",
    "url": "movie-1559.html",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 科幻",
    "category": "动作犯罪",
    "cover": "./59.jpg"
  },
  {
    "title": "醉颜红尘",
    "url": "movie-1560.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情， 爱情",
    "category": "纪录综艺",
    "cover": "./60.jpg"
  },
  {
    "title": "荒漠杀神",
    "url": "movie-1561.html",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "动作, 西部, 犯罪",
    "category": "全球佳片",
    "cover": "./61.jpg"
  },
  {
    "title": "缺乏的时间",
    "url": "movie-1562.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "悬疑剧情片",
    "genre": "时间错位, 家庭悬疑, 城市寓言",
    "category": "动作犯罪",
    "cover": "./62.jpg"
  },
  {
    "title": "四月情冢",
    "url": "movie-1563.html",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情/剧情/古装",
    "category": "动作犯罪",
    "cover": "./63.jpg"
  },
  {
    "title": "猎头",
    "url": "movie-1564.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场、悬疑、犯罪",
    "category": "科幻奇幻",
    "cover": "./64.jpg"
  },
  {
    "title": "凶终",
    "url": "movie-1565.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 犯罪 / 悬疑",
    "category": "热门剧集",
    "cover": "./65.jpg"
  },
  {
    "title": "爱无止尽德蕾莎",
    "url": "movie-1566.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "传记剧情",
    "category": "动漫动画",
    "cover": "./66.jpg"
  },
  {
    "title": "省省吧！我家富贵发",
    "url": "movie-1567.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "家庭喜剧",
    "category": "热门剧集",
    "cover": "./67.jpg"
  },
  {
    "title": "谍·莲花",
    "url": "movie-1568.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战, 悬疑",
    "category": "动作犯罪",
    "cover": "./68.jpg"
  },
  {
    "title": "夏威夷假期",
    "url": "movie-1569.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "动漫动画",
    "cover": "./69.jpg"
  },
  {
    "title": "毕业作品",
    "url": "movie-1570.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "精选电影",
    "cover": "./70.jpg"
  },
  {
    "title": "斯人似我",
    "url": "movie-1571.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 文艺 / 同性",
    "category": "爱情喜剧",
    "cover": "./71.jpg"
  },
  {
    "title": "西施1965",
    "url": "movie-1572.html",
    "year": "1965",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 历史 / 黄梅调",
    "category": "科幻奇幻",
    "cover": "./72.jpg"
  },
  {
    "title": "失焦的深度",
    "url": "movie-1573.html",
    "year": "2020",
    "region": "台湾",
    "type": "电影",
    "genre": "剧情 / 同性",
    "category": "动作犯罪",
    "cover": "./73.jpg"
  },
  {
    "title": "雷杰普的精彩人生7",
    "url": "movie-1574.html",
    "year": "2025",
    "region": "土耳其",
    "type": "剧集",
    "genre": "喜剧 / 家庭",
    "category": "动漫动画",
    "cover": "./74.jpg"
  },
  {
    "title": "泰勒丝：美国小姐",
    "url": "movie-1575.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片，音乐，传记",
    "category": "悬疑惊悚",
    "cover": "./75.jpg"
  },
  {
    "title": "漂亮妈妈",
    "url": "movie-1576.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "爱情喜剧",
    "cover": "./76.jpg"
  },
  {
    "title": "天生爱情狂",
    "url": "movie-1577.html",
    "year": "2012",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "category": "热门剧集",
    "cover": "./77.jpg"
  },
  {
    "title": "萌犬好声音",
    "url": "movie-1578.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "动画",
    "category": "华语专区",
    "cover": "./78.jpg"
  },
  {
    "title": "无限斯特拉托斯第二季",
    "url": "movie-1579.html",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻 / 机甲 / 后宫",
    "category": "科幻奇幻",
    "cover": "./79.jpg"
  },
  {
    "title": "刺猬的优雅",
    "url": "movie-1580.html",
    "year": "2009",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "华语专区",
    "cover": "./80.jpg"
  },
  {
    "title": "神鬼战队",
    "url": "movie-1581.html",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "热血, 奇幻, 战斗",
    "category": "动漫动画",
    "cover": "./81.jpg"
  },
  {
    "title": "老鬼当家",
    "url": "movie-1582.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧, 家庭",
    "category": "爱情喜剧",
    "cover": "./82.jpg"
  },
  {
    "title": "大撒金钱",
    "url": "movie-1583.html",
    "year": "2026",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "category": "热门剧集",
    "cover": "./83.jpg"
  },
  {
    "title": "国王理查德",
    "url": "movie-1584.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，传记，运动",
    "category": "动作犯罪",
    "cover": "./84.jpg"
  },
  {
    "title": "潜艇总动员4：章鱼奇遇记",
    "url": "movie-1585.html",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧、冒险",
    "category": "动漫动画",
    "cover": "./85.jpg"
  },
  {
    "title": "鬼马小精灵：大闹学校",
    "url": "movie-1586.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动画喜剧",
    "category": "悬疑惊悚",
    "cover": "./86.jpg"
  },
  {
    "title": "反起跑线联盟粤语",
    "url": "movie-1587.html",
    "year": "2022",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情, 家庭, 喜剧",
    "category": "悬疑惊悚",
    "cover": "./87.jpg"
  },
  {
    "title": "我会找到路",
    "url": "movie-1588.html",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情/公路",
    "category": "悬疑惊悚",
    "cover": "./88.jpg"
  },
  {
    "title": "爱情生活第二季",
    "url": "movie-1589.html",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "爱情 / 剧情 / 喜剧",
    "category": "动作犯罪",
    "cover": "./89.jpg"
  },
  {
    "title": "辣姊妹",
    "url": "movie-1590.html",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧 / 家庭 / 都市",
    "category": "悬疑惊悚",
    "cover": "./90.jpg"
  },
  {
    "title": "危险性游戏",
    "url": "movie-1591.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 犯罪",
    "category": "动作犯罪",
    "cover": "./91.jpg"
  },
  {
    "title": "超棒的我们",
    "url": "movie-1592.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春, 校园, 喜剧",
    "category": "热门剧集",
    "cover": "./92.jpg"
  },
  {
    "title": "决战江南",
    "url": "movie-1593.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史、战争、剧情",
    "category": "精选电影",
    "cover": "./93.jpg"
  },
  {
    "title": "维修站的历史：两秒发车",
    "url": "movie-1594.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 职业",
    "category": "科幻奇幻",
    "cover": "./94.jpg"
  },
  {
    "title": "玛嘉烈与大卫丝丝2024",
    "url": "movie-1595.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "爱情 / 剧情",
    "category": "热门剧集",
    "cover": "./95.jpg"
  },
  {
    "title": "时间去哪儿了",
    "url": "movie-1596.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./96.jpg"
  },
  {
    "title": "两个男人和一个衣柜",
    "url": "movie-1597.html",
    "year": "1958",
    "region": "波兰",
    "type": "短片",
    "genre": "喜剧 / 奇幻 / 短片",
    "category": "科幻奇幻",
    "cover": "./97.jpg"
  },
  {
    "title": "36题爱上你",
    "url": "movie-1598.html",
    "year": "2020",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 剧情",
    "category": "动漫动画",
    "cover": "./98.jpg"
  },
  {
    "title": "外姓兄弟",
    "url": "movie-1599.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 年代, 剧情",
    "category": "爱情喜剧",
    "cover": "./99.jpg"
  },
  {
    "title": "英雄气概",
    "url": "movie-1600.html",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 动作",
    "category": "动作犯罪",
    "cover": "./100.jpg"
  },
  {
    "title": "为善最乐",
    "url": "movie-1601.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 黑色喜剧",
    "category": "热门剧集",
    "cover": "./101.jpg"
  },
  {
    "title": "危险关系第一季",
    "url": "movie-1602.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 爱情, 犯罪",
    "category": "动作犯罪",
    "cover": "./102.jpg"
  },
  {
    "title": "魔王2099",
    "url": "movie-1603.html",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "科幻， 奇幻",
    "category": "热门剧集",
    "cover": "./103.jpg"
  },
  {
    "title": "我们开始当空服员",
    "url": "movie-1604.html",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "职场，剧情，励志",
    "category": "科幻奇幻",
    "cover": "./104.jpg"
  },
  {
    "title": "猿",
    "url": "movie-1605.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "category": "纪录综艺",
    "cover": "./105.jpg"
  },
  {
    "title": "情逆三世缘国语",
    "url": "movie-1606.html",
    "year": "2013",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "爱情 / 奇幻 / 古装",
    "category": "爱情喜剧",
    "cover": "./106.jpg"
  },
  {
    "title": "大力水手和四十大盗",
    "url": "movie-1607.html",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 动作 / 冒险",
    "category": "精选电影",
    "cover": "./107.jpg"
  },
  {
    "title": "婚礼片段",
    "url": "movie-1608.html",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "爱情喜剧",
    "cover": "./108.jpg"
  },
  {
    "title": "江湖论剑实录",
    "url": "movie-1609.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，古装，武侠",
    "category": "爱情喜剧",
    "cover": "./109.jpg"
  },
  {
    "title": "府上娶了个锦鲤新娘",
    "url": "movie-1610.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装甜宠",
    "category": "爱情喜剧",
    "cover": "./110.jpg"
  },
  {
    "title": "纽约书评：争鸣50年",
    "url": "movie-1611.html",
    "year": "2028",
    "region": "美国",
    "type": "剧集",
    "genre": "传记 / 历史 / 辩论",
    "category": "爱情喜剧",
    "cover": "./111.jpg"
  },
  {
    "title": "贝尔戈维亚",
    "url": "movie-1612.html",
    "year": "2020",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情、历史",
    "category": "全球佳片",
    "cover": "./112.jpg"
  },
  {
    "title": "电击少女第一季",
    "url": "movie-1613.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 青春",
    "category": "爱情喜剧",
    "cover": "./113.jpg"
  },
  {
    "title": "绿色香水",
    "url": "movie-1614.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 悬疑",
    "category": "科幻奇幻",
    "cover": "./114.jpg"
  },
  {
    "title": "我是千寻",
    "url": "movie-1615.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 治愈",
    "category": "纪录综艺",
    "cover": "./115.jpg"
  },
  {
    "title": "死亡转账",
    "url": "movie-1616.html",
    "year": "2025",
    "region": "中国香港 / 新加坡",
    "type": "电影",
    "genre": "犯罪惊悚科技",
    "category": "华语专区",
    "cover": "./116.jpg"
  },
  {
    "title": "恐惧斗室3 死神在齿",
    "url": "movie-1617.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 血腥",
    "category": "爱情喜剧",
    "cover": "./117.jpg"
  },
  {
    "title": "月光光心慌慌：终结",
    "url": "movie-1618.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "全球佳片",
    "cover": "./118.jpg"
  },
  {
    "title": "猜谜王",
    "url": "movie-1619.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "益智, 竞技",
    "category": "全球佳片",
    "cover": "./119.jpg"
  },
  {
    "title": "我们从烟硝开始",
    "url": "movie-1620.html",
    "year": "2024",
    "region": "德国",
    "type": "电视剧",
    "genre": "战争, 爱情",
    "category": "悬疑惊悚",
    "cover": "./120.jpg"
  },
  {
    "title": "雷射战队",
    "url": "movie-1621.html",
    "year": "1998",
    "region": "日本",
    "type": "电视剧",
    "genre": "科幻，动作，特摄",
    "category": "科幻奇幻",
    "cover": "./121.jpg"
  },
  {
    "title": "童梦失魂夜",
    "url": "movie-1622.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 悬疑 / 家庭",
    "category": "精选电影",
    "cover": "./122.jpg"
  },
  {
    "title": "梅露可物语",
    "url": "movie-1623.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 冒险 / 治愈",
    "category": "科幻奇幻",
    "cover": "./123.jpg"
  },
  {
    "title": "亲亲小站2",
    "url": "movie-1624.html",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情, 青春",
    "category": "热门剧集",
    "cover": "./124.jpg"
  },
  {
    "title": "黑金帝国",
    "url": "movie-1625.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "犯罪 / 商战 / 剧情",
    "category": "动漫动画",
    "cover": "./125.jpg"
  },
  {
    "title": "终极至死",
    "url": "movie-1626.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动作犯罪",
    "category": "悬疑惊悚",
    "cover": "./126.jpg"
  },
  {
    "title": "命转乾坤国语",
    "url": "movie-1627.html",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "category": "华语专区",
    "cover": "./127.jpg"
  },
  {
    "title": "枪影世界",
    "url": "movie-1628.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "犯罪电影",
    "genre": "犯罪,动作,悬疑,黑色",
    "category": "纪录综艺",
    "cover": "./128.jpg"
  },
  {
    "title": "半糖关系2",
    "url": "movie-1629.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "爱情，同性，都市",
    "category": "全球佳片",
    "cover": "./129.jpg"
  },
  {
    "title": "锋利的棍子",
    "url": "movie-1630.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "category": "精选电影",
    "cover": "./130.jpg"
  },
  {
    "title": "关系未来式",
    "url": "movie-1631.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情， 科幻， 剧情",
    "category": "精选电影",
    "cover": "./131.jpg"
  },
  {
    "title": "意大利式结婚",
    "url": "movie-1632.html",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "动作犯罪",
    "cover": "./132.jpg"
  },
  {
    "title": "秘密图纸电影版",
    "url": "movie-1633.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 动作 / 谍战",
    "category": "爱情喜剧",
    "cover": "./133.jpg"
  },
  {
    "title": "柔道煞星",
    "url": "movie-1634.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "悬疑惊悚",
    "cover": "./134.jpg"
  },
  {
    "title": "为情颠倒",
    "url": "movie-1635.html",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "category": "动漫动画",
    "cover": "./135.jpg"
  },
  {
    "title": "脑大洞开",
    "url": "movie-1636.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 科幻 / 冒险",
    "category": "科幻奇幻",
    "cover": "./136.jpg"
  },
  {
    "title": "速成家庭",
    "url": "movie-1637.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，剧情，家庭",
    "category": "爱情喜剧",
    "cover": "./137.jpg"
  },
  {
    "title": "女继承者",
    "url": "movie-1638.html",
    "year": "2024",
    "region": "德国 / 卢森堡",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "category": "精选电影",
    "cover": "./138.jpg"
  },
  {
    "title": "村佬步出城",
    "url": "movie-1639.html",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "category": "动作犯罪",
    "cover": "./139.jpg"
  },
  {
    "title": "友情十字路",
    "url": "movie-1640.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "动作犯罪",
    "cover": "./140.jpg"
  },
  {
    "title": "走佬俏佳人",
    "url": "movie-1641.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "爱情喜剧",
    "cover": "./141.jpg"
  },
  {
    "title": "赌侠之人定胜天",
    "url": "movie-1642.html",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧， 赌片， 奇幻",
    "category": "爱情喜剧",
    "cover": "./142.jpg"
  },
  {
    "title": "海军罪案调查处第九季",
    "url": "movie-1643.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/悬疑/动作",
    "category": "科幻奇幻",
    "cover": "./143.jpg"
  },
  {
    "title": "监听",
    "url": "movie-1644.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情、惊悚、科技伦理",
    "category": "纪录综艺",
    "cover": "./144.jpg"
  },
  {
    "title": "终结者：零",
    "url": "movie-1645.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻动作",
    "category": "纪录综艺",
    "cover": "./145.jpg"
  },
  {
    "title": "青鸟",
    "url": "movie-1646.html",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 温情",
    "category": "悬疑惊悚",
    "cover": "./146.jpg"
  },
  {
    "title": "咸湿先生",
    "url": "movie-1647.html",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 情色, 剧情",
    "category": "科幻奇幻",
    "cover": "./147.jpg"
  },
  {
    "title": "灵异事件之玉女幽魂",
    "url": "movie-1648.html",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "全球佳片",
    "cover": "./148.jpg"
  },
  {
    "title": "高中",
    "url": "movie-1649.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录/社会",
    "category": "动漫动画",
    "cover": "./149.jpg"
  },
  {
    "title": "静静的决斗",
    "url": "movie-1650.html",
    "year": "1949",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 战争 / 医学",
    "category": "动漫动画",
    "cover": "./150.jpg"
  },
  {
    "title": "一起听团吧",
    "url": "movie-1651.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "音乐 / 剧情 / 青春",
    "category": "悬疑惊悚",
    "cover": "./1.jpg"
  },
  {
    "title": "披头士的诞生",
    "url": "movie-1652.html",
    "year": "2030",
    "region": "英国",
    "type": "电影",
    "genre": "音乐 / 传记",
    "category": "精选电影",
    "cover": "./2.jpg"
  },
  {
    "title": "茱莉亚",
    "url": "movie-1653.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "纪录综艺",
    "cover": "./3.jpg"
  },
  {
    "title": "杀戮元凶：狙击手",
    "url": "movie-1654.html",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪 / 动作",
    "category": "爱情喜剧",
    "cover": "./4.jpg"
  },
  {
    "title": "一生倾情",
    "url": "movie-1655.html",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情，家庭，年代",
    "category": "动漫动画",
    "cover": "./5.jpg"
  },
  {
    "title": "核战新娘",
    "url": "movie-1656.html",
    "year": "1985",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 剧情",
    "category": "动作犯罪",
    "cover": "./6.jpg"
  },
  {
    "title": "惊爆13天",
    "url": "movie-1657.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "动漫动画",
    "cover": "./7.jpg"
  },
  {
    "title": "一桥桐子的犯罪日记",
    "url": "movie-1658.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 剧情",
    "category": "动漫动画",
    "cover": "./8.jpg"
  },
  {
    "title": "没有什么能比得上假期",
    "url": "movie-1659.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/家庭",
    "category": "爱情喜剧",
    "cover": "./9.jpg"
  },
  {
    "title": "虚拟情人粤语",
    "url": "movie-1660.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "爱情 / 科幻 / 都市",
    "category": "科幻奇幻",
    "cover": "./10.jpg"
  },
  {
    "title": "首席干饭人",
    "url": "movie-1661.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "剧情, 职场, 美食",
    "category": "科幻奇幻",
    "cover": "./11.jpg"
  },
  {
    "title": "新警察故事粤语",
    "url": "movie-1662.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪，剧情",
    "category": "华语专区",
    "cover": "./12.jpg"
  },
  {
    "title": "我家的英雄",
    "url": "movie-1663.html",
    "year": "2021",
    "region": "日本",
    "type": "家庭犯罪剧情片",
    "genre": "家庭伦理, 犯罪隐秘, 悬疑人性",
    "category": "华语专区",
    "cover": "./13.jpg"
  },
  {
    "title": "妖怪手表：诞生的秘密喵",
    "url": "movie-1664.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 奇幻",
    "category": "热门剧集",
    "cover": "./14.jpg"
  },
  {
    "title": "空想天国",
    "url": "movie-1665.html",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "动画 / 奇幻 / 冒险",
    "category": "动漫动画",
    "cover": "./15.jpg"
  },
  {
    "title": "铁血战士：杀戮之王",
    "url": "movie-1666.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 恐怖",
    "category": "纪录综艺",
    "cover": "./16.jpg"
  },
  {
    "title": "超级英雄冒险：冰霜大战",
    "url": "movie-1667.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "category": "纪录综艺",
    "cover": "./17.jpg"
  },
  {
    "title": "成吉思汗十勇士传奇",
    "url": "movie-1668.html",
    "year": "2012",
    "region": "蒙古",
    "type": "电影",
    "genre": "历史 / 动作 / 战争",
    "category": "全球佳片",
    "cover": "./18.jpg"
  },
  {
    "title": "魔爪入室",
    "url": "movie-1669.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚",
    "category": "悬疑惊悚",
    "cover": "./19.jpg"
  },
  {
    "title": "锋回路转：亡者归来",
    "url": "movie-1670.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 悬疑",
    "category": "精选电影",
    "cover": "./20.jpg"
  },
  {
    "title": "难忘的一年：夏天",
    "url": "movie-1671.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，家庭，温情",
    "category": "动漫动画",
    "cover": "./21.jpg"
  },
  {
    "title": "少林兄弟",
    "url": "movie-1672.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、剧情",
    "category": "全球佳片",
    "cover": "./22.jpg"
  },
  {
    "title": "波特小姐：比得兔的故事",
    "url": "movie-1673.html",
    "year": "2006",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、传记",
    "category": "动作犯罪",
    "cover": "./23.jpg"
  },
  {
    "title": "第二层地狱",
    "url": "movie-1674.html",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑，惊悚，心理",
    "category": "热门剧集",
    "cover": "./24.jpg"
  },
  {
    "title": "牧野家族",
    "url": "movie-1675.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 生活",
    "category": "纪录综艺",
    "cover": "./25.jpg"
  },
  {
    "title": "双姝奇缘",
    "url": "movie-1676.html",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 奇幻",
    "category": "全球佳片",
    "cover": "./26.jpg"
  },
  {
    "title": "危险代理人",
    "url": "movie-1677.html",
    "year": "1997",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑惊悚",
    "cover": "./27.jpg"
  },
  {
    "title": "新荡寇志",
    "url": "movie-1678.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 古装",
    "category": "精选电影",
    "cover": "./28.jpg"
  },
  {
    "title": "妻子结婚了",
    "url": "movie-1679.html",
    "year": "2008",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 喜剧",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "凡人英雄",
    "url": "movie-1680.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 动作",
    "category": "悬疑惊悚",
    "cover": "./30.jpg"
  },
  {
    "title": "笼中比翼鸟",
    "url": "movie-1681.html",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "剧情, 爱情, 惊悚",
    "category": "热门剧集",
    "cover": "./31.jpg"
  },
  {
    "title": "无尽之海",
    "url": "movie-1682.html",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻， 悬疑， 冒险",
    "category": "动漫动画",
    "cover": "./32.jpg"
  },
  {
    "title": "破果",
    "url": "movie-1683.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "热门剧集",
    "cover": "./33.jpg"
  },
  {
    "title": "梁祝",
    "url": "movie-1684.html",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "爱情， 古装， 奇幻",
    "category": "爱情喜剧",
    "cover": "./34.jpg"
  },
  {
    "title": "深情交谈",
    "url": "movie-1685.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市 / 情感 / 家庭",
    "category": "科幻奇幻",
    "cover": "./35.jpg"
  },
  {
    "title": "死透透",
    "url": "movie-1686.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 喜剧, 奇幻",
    "category": "科幻奇幻",
    "cover": "./36.jpg"
  },
  {
    "title": "如沐爱河",
    "url": "movie-1687.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "全球佳片",
    "cover": "./37.jpg"
  },
  {
    "title": "白色：诅咒的旋律",
    "url": "movie-1688.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 音乐",
    "category": "纪录综艺",
    "cover": "./38.jpg"
  },
  {
    "title": "银岭雄风",
    "url": "movie-1689.html",
    "year": "1953",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "西部 / 冒险",
    "category": "全球佳片",
    "cover": "./39.jpg"
  },
  {
    "title": "南瓜剪刀",
    "url": "movie-1690.html",
    "year": "2006",
    "region": "日本",
    "type": "动画",
    "genre": "军事 / 科幻 / 动作",
    "category": "华语专区",
    "cover": "./40.jpg"
  },
  {
    "title": "惊魂加油站",
    "url": "movie-1691.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "科幻奇幻",
    "cover": "./41.jpg"
  },
  {
    "title": "勇敢的心",
    "url": "movie-1692.html",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "抗战、传奇、动作",
    "category": "科幻奇幻",
    "cover": "./42.jpg"
  },
  {
    "title": "西格弗里德",
    "url": "movie-1693.html",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻、动作、史诗",
    "category": "精选电影",
    "cover": "./43.jpg"
  },
  {
    "title": "乡村爱情小夜曲",
    "url": "movie-1694.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "category": "爱情喜剧",
    "cover": "./44.jpg"
  },
  {
    "title": "乖女唔易做",
    "url": "movie-1695.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "华语专区",
    "cover": "./45.jpg"
  },
  {
    "title": "征服太阳国语",
    "url": "movie-1696.html",
    "year": "2026",
    "region": "中国大陆 / 美国",
    "type": "电影",
    "genre": "科幻 / 冒险",
    "category": "精选电影",
    "cover": "./46.jpg"
  },
  {
    "title": "监狱淌血",
    "url": "movie-1697.html",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "category": "动漫动画",
    "cover": "./47.jpg"
  },
  {
    "title": "无名夫人",
    "url": "movie-1698.html",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "category": "动漫动画",
    "cover": "./48.jpg"
  },
  {
    "title": "窒命危机",
    "url": "movie-1699.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "category": "悬疑惊悚",
    "cover": "./49.jpg"
  },
  {
    "title": "唐砖之地狱花谷",
    "url": "movie-1700.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装，奇幻",
    "category": "悬疑惊悚",
    "cover": "./50.jpg"
  },
  {
    "title": "我家的女儿交不到男朋友",
    "url": "movie-1701.html",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 家庭",
    "category": "动漫动画",
    "cover": "./51.jpg"
  },
  {
    "title": "我生命中的八天",
    "url": "movie-1702.html",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 传记",
    "category": "精选电影",
    "cover": "./52.jpg"
  },
  {
    "title": "病毒入侵",
    "url": "movie-1703.html",
    "year": "2021",
    "region": "韩国",
    "type": "剧集",
    "genre": "惊悚 / 科幻",
    "category": "纪录综艺",
    "cover": "./53.jpg"
  },
  {
    "title": "六十一号的恐怖",
    "url": "movie-1704.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "全球佳片",
    "cover": "./54.jpg"
  },
  {
    "title": "去年圣诞",
    "url": "movie-1705.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情，剧情，奇幻",
    "category": "爱情喜剧",
    "cover": "./55.jpg"
  },
  {
    "title": "晚上好，我们是朝山家。",
    "url": "movie-1706.html",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭，剧情，悬疑",
    "category": "悬疑惊悚",
    "cover": "./56.jpg"
  },
  {
    "title": "普通电影",
    "url": "movie-1707.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 元电影",
    "category": "华语专区",
    "cover": "./57.jpg"
  },
  {
    "title": "最后的抵抗分子",
    "url": "movie-1708.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 悬疑",
    "category": "精选电影",
    "cover": "./58.jpg"
  },
  {
    "title": "老爸行不行",
    "url": "movie-1709.html",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "category": "动作犯罪",
    "cover": "./59.jpg"
  },
  {
    "title": "饥渴小淫娃",
    "url": "movie-1710.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "情色 / 剧情 / 伦理",
    "category": "纪录综艺",
    "cover": "./60.jpg"
  },
  {
    "title": "妙手仁心3国语",
    "url": "movie-1711.html",
    "year": "2005",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情， 爱情， 医疗",
    "category": "热门剧集",
    "cover": "./61.jpg"
  },
  {
    "title": "偷书贼",
    "url": "movie-1712.html",
    "year": "2013",
    "region": "德国 / 美国",
    "type": "电影",
    "genre": "剧情、战争、历史",
    "category": "动漫动画",
    "cover": "./62.jpg"
  },
  {
    "title": "明星助理",
    "url": "movie-1713.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧， 爱情",
    "category": "纪录综艺",
    "cover": "./63.jpg"
  },
  {
    "title": "审判日",
    "url": "movie-1714.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "category": "纪录综艺",
    "cover": "./64.jpg"
  },
  {
    "title": "蜘蛛侠百战曱甴精",
    "url": "movie-1715.html",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 奇幻",
    "category": "纪录综艺",
    "cover": "./65.jpg"
  },
  {
    "title": "波丽娜",
    "url": "movie-1716.html",
    "year": "2021",
    "region": "法国 / 俄罗斯",
    "type": "电影",
    "genre": "剧情 / 舞蹈",
    "category": "爱情喜剧",
    "cover": "./66.jpg"
  },
  {
    "title": "人生滑下坡",
    "url": "movie-1717.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 喜剧, 运动",
    "category": "动作犯罪",
    "cover": "./67.jpg"
  },
  {
    "title": "遥之彼方的接发球",
    "url": "movie-1718.html",
    "year": "2018",
    "region": "日本",
    "type": "动画",
    "genre": "运动，青春，少女",
    "category": "全球佳片",
    "cover": "./68.jpg"
  },
  {
    "title": "致亲爱的孤独者",
    "url": "movie-1719.html",
    "year": "2019",
    "region": "中国台湾",
    "type": "Movie",
    "genre": "剧情, 同性, 青春",
    "category": "动作犯罪",
    "cover": "./69.jpg"
  },
  {
    "title": "鬼摇灵2：阴语阵阵",
    "url": "movie-1720.html",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖惊悚",
    "category": "科幻奇幻",
    "cover": "./70.jpg"
  },
  {
    "title": "青楼红杏四十年",
    "url": "movie-1721.html",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 情色",
    "category": "纪录综艺",
    "cover": "./71.jpg"
  },
  {
    "title": "跑马地的月光",
    "url": "movie-1722.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情",
    "category": "全球佳片",
    "cover": "./72.jpg"
  },
  {
    "title": "墙纸与胶水",
    "url": "movie-1723.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片/艺术",
    "category": "纪录综艺",
    "cover": "./73.jpg"
  },
  {
    "title": "白目怪谈",
    "url": "movie-1724.html",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "纪录综艺",
    "cover": "./74.jpg"
  },
  {
    "title": "霹雳先锋粤语",
    "url": "movie-1725.html",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "全球佳片",
    "cover": "./75.jpg"
  },
  {
    "title": "奇袭",
    "url": "movie-1726.html",
    "year": "1960",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作",
    "category": "动作犯罪",
    "cover": "./76.jpg"
  },
  {
    "title": "寻龙记",
    "url": "movie-1727.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 冒险",
    "category": "纪录综艺",
    "cover": "./77.jpg"
  },
  {
    "title": "魔农传记",
    "url": "movie-1728.html",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻, 战斗",
    "category": "全球佳片",
    "cover": "./78.jpg"
  },
  {
    "title": "终极复仇者2",
    "url": "movie-1729.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "动漫动画",
    "cover": "./79.jpg"
  },
  {
    "title": "疯狂的米罗",
    "url": "movie-1730.html",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 家庭",
    "category": "热门剧集",
    "cover": "./80.jpg"
  },
  {
    "title": "袅袅夕阳情",
    "url": "movie-1731.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "纪录综艺",
    "cover": "./81.jpg"
  },
  {
    "title": "万鬼惊魂",
    "url": "movie-1732.html",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 动作",
    "category": "华语专区",
    "cover": "./82.jpg"
  },
  {
    "title": "乐声春色",
    "url": "movie-1733.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "category": "动作犯罪",
    "cover": "./83.jpg"
  },
  {
    "title": "寻侠英雄传之离家",
    "url": "movie-1734.html",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠， 喜剧， 动作",
    "category": "精选电影",
    "cover": "./84.jpg"
  },
  {
    "title": "牛宰裤",
    "url": "movie-1735.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 悬疑, 荒诞",
    "category": "爱情喜剧",
    "cover": "./85.jpg"
  },
  {
    "title": "尼泊尔灿烂阳光",
    "url": "movie-1736.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "精选电影",
    "cover": "./86.jpg"
  },
  {
    "title": "四个婚礼和一个葬礼",
    "url": "movie-1737.html",
    "year": "1994",
    "region": "英国",
    "type": "电影",
    "genre": "爱情/喜剧/剧情",
    "category": "悬疑惊悚",
    "cover": "./87.jpg"
  },
  {
    "title": "世界",
    "url": "movie-1738.html",
    "year": "2004",
    "region": "中国大陆 / 法国 / 日本",
    "type": "电影",
    "genre": "剧情 / 都市 / 文艺",
    "category": "纪录综艺",
    "cover": "./88.jpg"
  },
  {
    "title": "熊嗨了",
    "url": "movie-1739.html",
    "year": "2023",
    "region": "加拿大",
    "type": "电影",
    "genre": "喜剧、惊悚、动作",
    "category": "热门剧集",
    "cover": "./89.jpg"
  },
  {
    "title": "我的女儿们",
    "url": "movie-1740.html",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭 / 剧情",
    "category": "热门剧集",
    "cover": "./90.jpg"
  },
  {
    "title": "挖道兔",
    "url": "movie-1741.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "冒险、奇幻",
    "category": "悬疑惊悚",
    "cover": "./91.jpg"
  },
  {
    "title": "粽邪3：鬼门开",
    "url": "movie-1742.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "爱情喜剧",
    "cover": "./92.jpg"
  },
  {
    "title": "东京日和",
    "url": "movie-1743.html",
    "year": "1997",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "精选电影",
    "cover": "./93.jpg"
  },
  {
    "title": "当地怪物：租借和杀戮",
    "url": "movie-1744.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 科幻",
    "category": "热门剧集",
    "cover": "./94.jpg"
  },
  {
    "title": "他人即地狱2024",
    "url": "movie-1745.html",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "category": "华语专区",
    "cover": "./95.jpg"
  },
  {
    "title": "跃动青春",
    "url": "movie-1746.html",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "校园 / 成长",
    "category": "精选电影",
    "cover": "./96.jpg"
  },
  {
    "title": "蹄声艳影",
    "url": "movie-1747.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，剧情，西部",
    "category": "动作犯罪",
    "cover": "./97.jpg"
  },
  {
    "title": "华氏911",
    "url": "movie-1748.html",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录、政治、历史",
    "category": "动漫动画",
    "cover": "./98.jpg"
  },
  {
    "title": "八月之夜",
    "url": "movie-1749.html",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "category": "悬疑惊悚",
    "cover": "./99.jpg"
  },
  {
    "title": "尸落沙漠",
    "url": "movie-1750.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚，生存",
    "category": "华语专区",
    "cover": "./100.jpg"
  },
  {
    "title": "玛莉骄傲",
    "url": "movie-1751.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "科幻奇幻",
    "cover": "./101.jpg"
  },
  {
    "title": "王牌赛手",
    "url": "movie-1752.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作运动",
    "category": "华语专区",
    "cover": "./102.jpg"
  },
  {
    "title": "恋恋星期日",
    "url": "movie-1753.html",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情， 剧情",
    "category": "全球佳片",
    "cover": "./103.jpg"
  },
  {
    "title": "战争回响",
    "url": "movie-1754.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争、剧情、心理",
    "category": "悬疑惊悚",
    "cover": "./104.jpg"
  },
  {
    "title": "妈妈与妓女",
    "url": "movie-1755.html",
    "year": "1973",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "科幻奇幻",
    "cover": "./105.jpg"
  },
  {
    "title": "金色光芒",
    "url": "movie-1756.html",
    "year": "2023",
    "region": "泰国",
    "type": "电视剧",
    "genre": "剧情，家庭",
    "category": "纪录综艺",
    "cover": "./106.jpg"
  },
  {
    "title": "耶路撒冷",
    "url": "movie-1757.html",
    "year": "2015",
    "region": "以色列",
    "type": "电影",
    "genre": "战争, 历史",
    "category": "华语专区",
    "cover": "./107.jpg"
  },
  {
    "title": "狂玩嘢时速",
    "url": "movie-1758.html",
    "year": "2017",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧，动作，赛车",
    "category": "全球佳片",
    "cover": "./108.jpg"
  },
  {
    "title": "结发夫妻",
    "url": "movie-1759.html",
    "year": "2012",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭，伦理",
    "category": "动漫动画",
    "cover": "./109.jpg"
  },
  {
    "title": "其实你不懂他的心",
    "url": "movie-1760.html",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 都市",
    "category": "华语专区",
    "cover": "./110.jpg"
  },
  {
    "title": "魔法电波",
    "url": "movie-1761.html",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "奇幻，校园",
    "category": "动作犯罪",
    "cover": "./111.jpg"
  },
  {
    "title": "古惑狗天师",
    "url": "movie-1762.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧场电影",
    "genre": "犯罪,奇幻,动作,悬疑",
    "category": "全球佳片",
    "cover": "./112.jpg"
  },
  {
    "title": "奇袭400高地",
    "url": "movie-1763.html",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作",
    "category": "纪录综艺",
    "cover": "./113.jpg"
  },
  {
    "title": "通往赛马场的路",
    "url": "movie-1764.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 犯罪",
    "category": "精选电影",
    "cover": "./114.jpg"
  },
  {
    "title": "怪奇理发院",
    "url": "movie-1765.html",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "category": "动作犯罪",
    "cover": "./115.jpg"
  },
  {
    "title": "大加州地震",
    "url": "movie-1766.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/灾难",
    "category": "精选电影",
    "cover": "./116.jpg"
  },
  {
    "title": "公主小马",
    "url": "movie-1767.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 儿童 / 冒险",
    "category": "热门剧集",
    "cover": "./117.jpg"
  },
  {
    "title": "聚魔柜",
    "url": "movie-1768.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "精选电影",
    "cover": "./118.jpg"
  },
  {
    "title": "个资风暴：剑桥分析事件",
    "url": "movie-1769.html",
    "year": "2022",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录, 犯罪",
    "category": "悬疑惊悚",
    "cover": "./119.jpg"
  },
  {
    "title": "弗莉卡",
    "url": "movie-1770.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "冒险 / 剧情 / 家庭",
    "category": "热门剧集",
    "cover": "./120.jpg"
  },
  {
    "title": "祭品",
    "url": "movie-1771.html",
    "year": "2021",
    "region": "泰国 / 韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "科幻奇幻",
    "cover": "./121.jpg"
  },
  {
    "title": "盗贼生涯",
    "url": "movie-1772.html",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，剧情，动作",
    "category": "动作犯罪",
    "cover": "./122.jpg"
  },
  {
    "title": "画壁",
    "url": "movie-1773.html",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 爱情, 古装",
    "category": "纪录综艺",
    "cover": "./123.jpg"
  },
  {
    "title": "海平面下",
    "url": "movie-1774.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "category": "纪录综艺",
    "cover": "./124.jpg"
  },
  {
    "title": "伊伦嘉：诱惑的艺术",
    "url": "movie-1775.html",
    "year": "2023",
    "region": "捷克",
    "type": "电影",
    "genre": "情色 / 剧情 / 艺术",
    "category": "纪录综艺",
    "cover": "./125.jpg"
  },
  {
    "title": "瑞奇·斯坦尼克",
    "url": "movie-1776.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "科幻奇幻",
    "cover": "./126.jpg"
  },
  {
    "title": "一球定江山",
    "url": "movie-1777.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "运动、剧情、励志",
    "category": "纪录综艺",
    "cover": "./127.jpg"
  },
  {
    "title": "悲惨世界1958",
    "url": "movie-1778.html",
    "year": "1958",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "纪录综艺",
    "cover": "./128.jpg"
  },
  {
    "title": "微软英雄",
    "url": "movie-1779.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记, 剧情",
    "category": "华语专区",
    "cover": "./129.jpg"
  },
  {
    "title": "春琴抄国语",
    "url": "movie-1780.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 爱情",
    "category": "纪录综艺",
    "cover": "./130.jpg"
  },
  {
    "title": "我盛大的意大利同志婚礼",
    "url": "movie-1781.html",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情, 同性",
    "category": "爱情喜剧",
    "cover": "./131.jpg"
  },
  {
    "title": "像爵士那样忧郁",
    "url": "movie-1782.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 剧情 / 传记",
    "category": "科幻奇幻",
    "cover": "./132.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 恐龙物语: 回到未来 234说爱你 请不要在病房里念佛 人民英雄 机巧女孩 驼背人与舞女 玩命大临演 用心中的刀砍去那悲伤 寻找黑母鸡 丈夫们，女人们，情人们 残酷的浪漫史 正义之战 戒烟不戒酒 八月狂想曲 华丽转身 没有秘密 迷雾惊魂 不死之魔 爸爸妈妈再见 贾方复仇记",
    "url": "movie-1783.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "全球佳片",
    "cover": "./133.jpg"
  },
  {
    "title": "侏罗纪狩猎",
    "url": "movie-1784.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 惊悚",
    "category": "动漫动画",
    "cover": "./134.jpg"
  },
  {
    "title": "逃离魔窟",
    "url": "movie-1785.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 冒险",
    "category": "精选电影",
    "cover": "./135.jpg"
  },
  {
    "title": "同级生剧场版",
    "url": "movie-1786.html",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "爱情，校园，剧情",
    "category": "悬疑惊悚",
    "cover": "./136.jpg"
  },
  {
    "title": "决战玄武门",
    "url": "movie-1787.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史, 动作, 权谋",
    "category": "纪录综艺",
    "cover": "./137.jpg"
  },
  {
    "title": "小小家长",
    "url": "movie-1788.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭喜剧",
    "category": "科幻奇幻",
    "cover": "./138.jpg"
  },
  {
    "title": "皇后进宫",
    "url": "movie-1789.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装, 喜剧, 宫斗",
    "category": "热门剧集",
    "cover": "./139.jpg"
  },
  {
    "title": "难兄难弟1982",
    "url": "movie-1790.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 犯罪",
    "category": "爱情喜剧",
    "cover": "./140.jpg"
  },
  {
    "title": "印尼版猛鬼街",
    "url": "movie-1791.html",
    "year": "2023",
    "region": "印度尼西亚",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "动作犯罪",
    "cover": "./141.jpg"
  },
  {
    "title": "女孩舞步",
    "url": "movie-1792.html",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情， 运动",
    "category": "动漫动画",
    "cover": "./142.jpg"
  },
  {
    "title": "黑色丛林",
    "url": "movie-1793.html",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "category": "悬疑惊悚",
    "cover": "./143.jpg"
  },
  {
    "title": "活人生吃",
    "url": "movie-1794.html",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 动作 / 丧尸",
    "category": "动漫动画",
    "cover": "./144.jpg"
  },
  {
    "title": "巴黎之恋",
    "url": "movie-1795.html",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "category": "精选电影",
    "cover": "./145.jpg"
  },
  {
    "title": "神偷圣徒",
    "url": "movie-1796.html",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪, 动作, 喜剧",
    "category": "纪录综艺",
    "cover": "./146.jpg"
  },
  {
    "title": "一个女人的选择",
    "url": "movie-1797.html",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情, 家庭, 伦理",
    "category": "华语专区",
    "cover": "./147.jpg"
  },
  {
    "title": "心海孽魔",
    "url": "movie-1798.html",
    "year": "1962",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 黑色电影",
    "category": "华语专区",
    "cover": "./148.jpg"
  },
  {
    "title": "波奇亚",
    "url": "movie-1799.html",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电视剧",
    "genre": "历史 / 犯罪 / 传记",
    "category": "精选电影",
    "cover": "./149.jpg"
  },
  {
    "title": "梦乡",
    "url": "movie-1800.html",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 家庭",
    "category": "动作犯罪",
    "cover": "./150.jpg"
  },
  {
    "title": "抓狂的安娜",
    "url": "movie-1801.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚，剧情",
    "category": "精选电影",
    "cover": "./1.jpg"
  },
  {
    "title": "摩登岳父",
    "url": "movie-1802.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "热门剧集",
    "cover": "./2.jpg"
  },
  {
    "title": "范·德·沃克第二季",
    "url": "movie-1803.html",
    "year": "2022",
    "region": "英国",
    "type": "TV 剧集",
    "genre": "犯罪 / 悬疑 / 剧情",
    "category": "纪录综艺",
    "cover": "./3.jpg"
  },
  {
    "title": "青春突击",
    "url": "movie-1804.html",
    "year": "2008",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "军旅, 青春",
    "category": "动作犯罪",
    "cover": "./4.jpg"
  },
  {
    "title": "至暗陷阱",
    "url": "movie-1805.html",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚",
    "category": "科幻奇幻",
    "cover": "./5.jpg"
  },
  {
    "title": "一切为了一个女孩",
    "url": "movie-1806.html",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "热门剧集",
    "cover": "./6.jpg"
  },
  {
    "title": "灵妖鉴之盘丝小仙",
    "url": "movie-1807.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻, 悬疑, 仙侠, 动作",
    "category": "精选电影",
    "cover": "./7.jpg"
  },
  {
    "title": "耶稣音乐",
    "url": "movie-1808.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 传记 / 剧情",
    "category": "全球佳片",
    "cover": "./8.jpg"
  },
  {
    "title": "错爱天堂",
    "url": "movie-1809.html",
    "year": "2027",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "category": "纪录综艺",
    "cover": "./9.jpg"
  },
  {
    "title": "日本沉没2020",
    "url": "movie-1810.html",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画， 灾难， 科幻",
    "category": "华语专区",
    "cover": "./10.jpg"
  },
  {
    "title": "乡下人进城",
    "url": "movie-1811.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "category": "热门剧集",
    "cover": "./11.jpg"
  },
  {
    "title": "懒夫睡汉",
    "url": "movie-1812.html",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "华语专区",
    "cover": "./12.jpg"
  },
  {
    "title": "百老汇王子",
    "url": "movie-1813.html",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 歌舞 / 喜剧",
    "category": "科幻奇幻",
    "cover": "./13.jpg"
  },
  {
    "title": "灵异恩典",
    "url": "movie-1814.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 心理",
    "category": "爱情喜剧",
    "cover": "./14.jpg"
  },
  {
    "title": "坏头发",
    "url": "movie-1815.html",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 社会 / 女性",
    "category": "华语专区",
    "cover": "./15.jpg"
  },
  {
    "title": "我如何爱上黑帮成员",
    "url": "movie-1816.html",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 犯罪",
    "category": "科幻奇幻",
    "cover": "./16.jpg"
  },
  {
    "title": "那男人的书第198页",
    "url": "movie-1817.html",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "热门剧集",
    "cover": "./17.jpg"
  },
  {
    "title": "描准",
    "url": "movie-1818.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 悬疑 / 惊悚",
    "category": "全球佳片",
    "cover": "./18.jpg"
  },
  {
    "title": "甘地",
    "url": "movie-1819.html",
    "year": "2026",
    "region": "印度, 英国",
    "type": "电影",
    "genre": "剧情, 传记, 历史",
    "category": "热门剧集",
    "cover": "./19.jpg"
  },
  {
    "title": "逆转上半场",
    "url": "movie-1820.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "悬疑惊悚",
    "cover": "./20.jpg"
  },
  {
    "title": "野芦苇",
    "url": "movie-1821.html",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "全球佳片",
    "cover": "./21.jpg"
  },
  {
    "title": "野兽刑事",
    "url": "movie-1822.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 动作",
    "category": "纪录综艺",
    "cover": "./22.jpg"
  },
  {
    "title": "紧急动员",
    "url": "movie-1823.html",
    "year": "1998",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚",
    "category": "全球佳片",
    "cover": "./23.jpg"
  },
  {
    "title": "嗜血法医：源罪",
    "url": "movie-1824.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/惊悚",
    "category": "爱情喜剧",
    "cover": "./24.jpg"
  },
  {
    "title": "全面逃杀",
    "url": "movie-1825.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 悬疑",
    "category": "爱情喜剧",
    "cover": "./25.jpg"
  },
  {
    "title": "大街上的白雪公主",
    "url": "movie-1826.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "都市、奇幻、黑色喜剧",
    "category": "科幻奇幻",
    "cover": "./26.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 破碎的瞬间 脱单倒计时 捕月 鬼娃回魂5 小鬼神偷 隐藏杀手 蒙哥奥·戴恩 真心遇上大冒险 恶魔爵爷 暗芝居第四季 吾土吾民 就这样… 第二季 变形计 我的变形日记 情敌复仇战 三审状元妻粤语 两个士兵 南玉卿心 疯狂迈尔士 巨石阵灾劫 魔鬼关卡",
    "url": "movie-1827.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "热门剧集",
    "cover": "./27.jpg"
  },
  {
    "title": "霸道总裁别惹我",
    "url": "movie-1828.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市爱情喜剧",
    "category": "全球佳片",
    "cover": "./28.jpg"
  },
  {
    "title": "斯莱思狩猎传奇",
    "url": "movie-1829.html",
    "year": "2021",
    "region": "英国",
    "type": "电视剧",
    "genre": "奇幻动作 / 冒险",
    "category": "精选电影",
    "cover": "./29.jpg"
  },
  {
    "title": "爱的替身",
    "url": "movie-1830.html",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情悬疑",
    "category": "科幻奇幻",
    "cover": "./30.jpg"
  },
  {
    "title": "蝙蝠猎人",
    "url": "movie-1831.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "category": "科幻奇幻",
    "cover": "./31.jpg"
  },
  {
    "title": "我就问你正常吗",
    "url": "movie-1832.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 家庭",
    "category": "全球佳片",
    "cover": "./32.jpg"
  },
  {
    "title": "我们的花样青春",
    "url": "movie-1833.html",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "青春 / 成长",
    "category": "动作犯罪",
    "cover": "./33.jpg"
  },
  {
    "title": "午夜的柳枝稷",
    "url": "movie-1834.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "category": "精选电影",
    "cover": "./34.jpg"
  },
  {
    "title": "鬼作秀第四季",
    "url": "movie-1835.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖， 奇幻",
    "category": "动作犯罪",
    "cover": "./35.jpg"
  },
  {
    "title": "米小圈上学记 第三季",
    "url": "movie-1836.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 儿童 / 家庭",
    "category": "精选电影",
    "cover": "./36.jpg"
  },
  {
    "title": "龙凤智多星",
    "url": "movie-1837.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧, 动作",
    "category": "全球佳片",
    "cover": "./37.jpg"
  },
  {
    "title": "无可奈何",
    "url": "movie-1838.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭",
    "category": "热门剧集",
    "cover": "./38.jpg"
  },
  {
    "title": "神统记",
    "url": "movie-1839.html",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻, 动作, 冒险",
    "category": "爱情喜剧",
    "cover": "./39.jpg"
  },
  {
    "title": "拉瓦拳星球",
    "url": "movie-1840.html",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻 / 冒险",
    "category": "全球佳片",
    "cover": "./40.jpg"
  },
  {
    "title": "潜龙飞天2",
    "url": "movie-1841.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、警匪、惊悚",
    "category": "华语专区",
    "cover": "./41.jpg"
  },
  {
    "title": "好莱坞往事",
    "url": "movie-1842.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、喜剧",
    "category": "悬疑惊悚",
    "cover": "./42.jpg"
  },
  {
    "title": "艳阳春色",
    "url": "movie-1843.html",
    "year": "1973",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 古装, 黄梅调",
    "category": "动作犯罪",
    "cover": "./43.jpg"
  },
  {
    "title": "封神·纣灭",
    "url": "movie-1844.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 战争 / 神话",
    "category": "悬疑惊悚",
    "cover": "./44.jpg"
  },
  {
    "title": "约瑟夫 流亡人生",
    "url": "movie-1845.html",
    "year": "2019",
    "region": "英国",
    "type": "剧集",
    "genre": "传记，历史",
    "category": "华语专区",
    "cover": "./45.jpg"
  },
  {
    "title": "残香无痕",
    "url": "movie-1846.html",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "精选电影",
    "cover": "./46.jpg"
  },
  {
    "title": "飞哥与小佛：超时空之谜",
    "url": "movie-1847.html",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧 / 科幻",
    "category": "精选电影",
    "cover": "./47.jpg"
  },
  {
    "title": "希望生长的地方",
    "url": "movie-1848.html",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "悬疑惊悚",
    "cover": "./48.jpg"
  },
  {
    "title": "末栈之重生",
    "url": "movie-1849.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑，惊悚，奇幻",
    "category": "动作犯罪",
    "cover": "./49.jpg"
  },
  {
    "title": "冬季土豆丸",
    "url": "movie-1850.html",
    "year": "2014",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "动作犯罪",
    "cover": "./50.jpg"
  },
  {
    "title": "一日时间",
    "url": "movie-1851.html",
    "year": "2023",
    "region": "台湾",
    "type": "Movie",
    "genre": "剧情, 奇幻, 家庭",
    "category": "全球佳片",
    "cover": "./51.jpg"
  },
  {
    "title": "知心兄弟",
    "url": "movie-1852.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "纪录综艺",
    "cover": "./52.jpg"
  },
  {
    "title": "都灵之马",
    "url": "movie-1853.html",
    "year": "2011",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 哲学, 历史",
    "category": "悬疑惊悚",
    "cover": "./53.jpg"
  },
  {
    "title": "喋血美人关",
    "url": "movie-1854.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 古装, 爱情",
    "category": "精选电影",
    "cover": "./54.jpg"
  },
  {
    "title": "见习黑玫瑰",
    "url": "movie-1855.html",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作喜剧",
    "category": "动作犯罪",
    "cover": "./55.jpg"
  },
  {
    "title": "名侦探柯南：天空的劫难船",
    "url": "movie-1856.html",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "悬疑动作",
    "category": "全球佳片",
    "cover": "./56.jpg"
  },
  {
    "title": "虎将艳后",
    "url": "movie-1857.html",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 情色, 古装",
    "category": "科幻奇幻",
    "cover": "./57.jpg"
  },
  {
    "title": "观世音粤语",
    "url": "movie-1858.html",
    "year": "1985",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装 / 神话",
    "category": "全球佳片",
    "cover": "./58.jpg"
  },
  {
    "title": "忍者小英雄3",
    "url": "movie-1859.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动作，喜剧，奇幻",
    "category": "科幻奇幻",
    "cover": "./59.jpg"
  },
  {
    "title": "绑票惊爆点",
    "url": "movie-1860.html",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 悬疑， 惊悚",
    "category": "悬疑惊悚",
    "cover": "./60.jpg"
  },
  {
    "title": "喜剧演员",
    "url": "movie-1861.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 黑色幽默",
    "category": "动作犯罪",
    "cover": "./61.jpg"
  },
  {
    "title": "财迷心窍",
    "url": "movie-1862.html",
    "year": "2024",
    "region": "大陆",
    "type": "Movie",
    "genre": "喜剧, 犯罪, 剧情",
    "category": "全球佳片",
    "cover": "./62.jpg"
  },
  {
    "title": "名侦探柯南：业火的向日葵",
    "url": "movie-1863.html",
    "year": "2015",
    "region": "日本",
    "type": "动画电影",
    "genre": "动画, 推理, 冒险, 动作",
    "category": "爱情喜剧",
    "cover": "./63.jpg"
  },
  {
    "title": "罗伯特·齐默尔曼的爱情",
    "url": "movie-1864.html",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 音乐",
    "category": "科幻奇幻",
    "cover": "./64.jpg"
  },
  {
    "title": "血与誓",
    "url": "movie-1865.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作, 武侠, 古装",
    "category": "华语专区",
    "cover": "./65.jpg"
  },
  {
    "title": "网红大事件",
    "url": "movie-1866.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧， 悬疑",
    "category": "全球佳片",
    "cover": "./66.jpg"
  },
  {
    "title": "姊妹",
    "url": "movie-1867.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭, 悬疑",
    "category": "动漫动画",
    "cover": "./67.jpg"
  },
  {
    "title": "荷兰七课",
    "url": "movie-1868.html",
    "year": "2020",
    "region": "荷兰",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "category": "动作犯罪",
    "cover": "./68.jpg"
  },
  {
    "title": "乌鸦男孩",
    "url": "movie-1869.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 奇幻, 成长",
    "category": "爱情喜剧",
    "cover": "./69.jpg"
  },
  {
    "title": "傀儡姬",
    "url": "movie-1870.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影 / 古装",
    "genre": "奇幻, 爱情, 悬疑",
    "category": "精选电影",
    "cover": "./70.jpg"
  },
  {
    "title": "时代与梦想",
    "url": "movie-1871.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代 / 励志",
    "category": "全球佳片",
    "cover": "./71.jpg"
  },
  {
    "title": "柏德里纳的新娘",
    "url": "movie-1872.html",
    "year": "1967",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "科幻奇幻",
    "cover": "./72.jpg"
  },
  {
    "title": "证书",
    "url": "movie-1873.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，悬疑，社会",
    "category": "动作犯罪",
    "cover": "./73.jpg"
  },
  {
    "title": "克苏鲁的呼唤",
    "url": "movie-1874.html",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 克苏鲁",
    "category": "全球佳片",
    "cover": "./74.jpg"
  },
  {
    "title": "诡打墙",
    "url": "movie-1875.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "category": "华语专区",
    "cover": "./75.jpg"
  },
  {
    "title": "里克·斯坦的长周末",
    "url": "movie-1876.html",
    "year": "2016",
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片, 美食",
    "category": "华语专区",
    "cover": "./76.jpg"
  },
  {
    "title": "火海流金",
    "url": "movie-1877.html",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "灾难 / 冒险",
    "category": "科幻奇幻",
    "cover": "./77.jpg"
  },
  {
    "title": "好女两头瞒",
    "url": "movie-1878.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭喜剧",
    "category": "动漫动画",
    "cover": "./78.jpg"
  },
  {
    "title": "我的淘气王子",
    "url": "movie-1879.html",
    "year": "2005",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧，爱情，偶像",
    "category": "悬疑惊悚",
    "cover": "./79.jpg"
  },
  {
    "title": "大家，再见",
    "url": "movie-1880.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "全球佳片",
    "cover": "./80.jpg"
  },
  {
    "title": "观鸟者指导大全",
    "url": "movie-1881.html",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 治愈",
    "category": "全球佳片",
    "cover": "./81.jpg"
  },
  {
    "title": "战洪图",
    "url": "movie-1882.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难/剧情",
    "category": "热门剧集",
    "cover": "./82.jpg"
  },
  {
    "title": "神秘三妙贼",
    "url": "movie-1883.html",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑喜剧",
    "category": "华语专区",
    "cover": "./83.jpg"
  },
  {
    "title": "廉政行动2014粤语",
    "url": "movie-1884.html",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪，悬疑，职场",
    "category": "悬疑惊悚",
    "cover": "./84.jpg"
  },
  {
    "title": "刺杀灰喜鹊",
    "url": "movie-1885.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 动作 / 反特",
    "category": "精选电影",
    "cover": "./85.jpg"
  },
  {
    "title": "蜗牛回忆录",
    "url": "movie-1886.html",
    "year": "2014",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "热门剧集",
    "cover": "./86.jpg"
  },
  {
    "title": "卡加克",
    "url": "movie-1887.html",
    "year": "2012",
    "region": "中东",
    "type": "冒险奇幻电影",
    "genre": "奇幻、动作、科幻",
    "category": "热门剧集",
    "cover": "./87.jpg"
  },
  {
    "title": "琪莉",
    "url": "movie-1888.html",
    "year": "2024",
    "region": "新西兰",
    "type": "电影",
    "genre": "剧情, 奇幻, 冒险",
    "category": "爱情喜剧",
    "cover": "./88.jpg"
  },
  {
    "title": "白日梦想家",
    "url": "movie-1889.html",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 冒险, 喜剧",
    "category": "精选电影",
    "cover": "./89.jpg"
  },
  {
    "title": "烟雾拳",
    "url": "movie-1890.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 运动 / 励志",
    "category": "热门剧集",
    "cover": "./90.jpg"
  },
  {
    "title": "帕万辛德",
    "url": "movie-1891.html",
    "year": "2015",
    "region": "印度",
    "type": "电影",
    "genre": "史诗 / 动作 / 历史",
    "category": "热门剧集",
    "cover": "./91.jpg"
  },
  {
    "title": "东北奇缘",
    "url": "movie-1892.html",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，爱情，奇幻",
    "category": "动作犯罪",
    "cover": "./92.jpg"
  },
  {
    "title": "美少女的谎言：原罪第一季",
    "url": "movie-1893.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "category": "华语专区",
    "cover": "./93.jpg"
  },
  {
    "title": "小楼金晓",
    "url": "movie-1894.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 年代",
    "category": "热门剧集",
    "cover": "./94.jpg"
  },
  {
    "title": "葡萄的眼泪",
    "url": "movie-1895.html",
    "year": "2014",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 美食 / 治愈",
    "category": "动作犯罪",
    "cover": "./95.jpg"
  },
  {
    "title": "女婿难当",
    "url": "movie-1896.html",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 喜剧",
    "category": "纪录综艺",
    "cover": "./96.jpg"
  },
  {
    "title": "超级计划",
    "url": "movie-1897.html",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 喜剧, 犯罪",
    "category": "全球佳片",
    "cover": "./97.jpg"
  },
  {
    "title": "拖错车",
    "url": "movie-1898.html",
    "year": "2004",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "精选电影",
    "cover": "./98.jpg"
  },
  {
    "title": "神偷燕子李三",
    "url": "movie-1899.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠 / 古装",
    "category": "热门剧集",
    "cover": "./99.jpg"
  },
  {
    "title": "攞命俏佳人",
    "url": "movie-1900.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖喜剧",
    "category": "纪录综艺",
    "cover": "./100.jpg"
  },
  {
    "title": "旺角风云",
    "url": "movie-1901.html",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪, 剧情",
    "category": "华语专区",
    "cover": "./101.jpg"
  },
  {
    "title": "绿门之后",
    "url": "movie-1902.html",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑, 奇幻, 心理",
    "category": "精选电影",
    "cover": "./102.jpg"
  },
  {
    "title": "白屋之恋",
    "url": "movie-1903.html",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、奇幻",
    "category": "纪录综艺",
    "cover": "./103.jpg"
  },
  {
    "title": "黑猫扎飞",
    "url": "movie-1904.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/奇幻/喜剧",
    "category": "华语专区",
    "cover": "./104.jpg"
  },
  {
    "title": "轻轻摇晃",
    "url": "movie-1905.html",
    "year": "2024",
    "region": "英国/中国",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "热门剧集",
    "cover": "./105.jpg"
  },
  {
    "title": "战鼓轻悄",
    "url": "movie-1906.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "音乐, 剧情",
    "category": "纪录综艺",
    "cover": "./106.jpg"
  },
  {
    "title": "妖术",
    "url": "movie-1907.html",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 奇幻",
    "category": "动漫动画",
    "cover": "./107.jpg"
  },
  {
    "title": "一门四虎",
    "url": "movie-1908.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 家庭 / 喜剧",
    "category": "动漫动画",
    "cover": "./108.jpg"
  },
  {
    "title": "大闹广昌隆1993国语",
    "url": "movie-1909.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 爱情",
    "category": "爱情喜剧",
    "cover": "./109.jpg"
  },
  {
    "title": "吃饭睡觉打豆豆",
    "url": "movie-1910.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "genre": "喜剧 / 短片 / 日常",
    "category": "科幻奇幻",
    "cover": "./110.jpg"
  },
  {
    "title": "英烈的岁月",
    "url": "movie-1911.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史",
    "category": "科幻奇幻",
    "cover": "./111.jpg"
  },
  {
    "title": "密室逃生",
    "url": "movie-1912.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "动漫动画",
    "cover": "./112.jpg"
  },
  {
    "title": "绿野仙踪",
    "url": "movie-1913.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻，冒险，音乐剧",
    "category": "爱情喜剧",
    "cover": "./113.jpg"
  },
  {
    "title": "那日下午",
    "url": "movie-1914.html",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、同性、家庭",
    "category": "科幻奇幻",
    "cover": "./114.jpg"
  },
  {
    "title": "法证先锋3国语",
    "url": "movie-1915.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑，犯罪",
    "category": "华语专区",
    "cover": "./115.jpg"
  },
  {
    "title": "女人的选择",
    "url": "movie-1916.html",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，爱情",
    "category": "悬疑惊悚",
    "cover": "./116.jpg"
  },
  {
    "title": "最近，妹妹的样子有点怪",
    "url": "movie-1917.html",
    "year": "2014",
    "region": "日本",
    "type": "电影 / 动画",
    "genre": "喜剧 / 奇幻 / 爱情",
    "category": "热门剧集",
    "cover": "./117.jpg"
  },
  {
    "title": "新娘与我",
    "url": "movie-1918.html",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "纪录综艺",
    "cover": "./118.jpg"
  },
  {
    "title": "续·社长洋行记",
    "url": "movie-1919.html",
    "year": "2025",
    "region": "中国大陆 / 日本",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "category": "精选电影",
    "cover": "./119.jpg"
  },
  {
    "title": "诱祸危机",
    "url": "movie-1920.html",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚, 犯罪",
    "category": "精选电影",
    "cover": "./120.jpg"
  },
  {
    "title": "流血的罗密欧",
    "url": "movie-1921.html",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "黑帮爱情",
    "category": "动作犯罪",
    "cover": "./121.jpg"
  },
  {
    "title": "谈判冤家",
    "url": "movie-1922.html",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市, 爱情, 喜剧",
    "category": "动作犯罪",
    "cover": "./122.jpg"
  },
  {
    "title": "克莉丝汀",
    "url": "movie-1923.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/爱情/成长",
    "category": "科幻奇幻",
    "cover": "./123.jpg"
  },
  {
    "title": "疯狂飘移假爸爸",
    "url": "movie-1924.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "category": "悬疑惊悚",
    "cover": "./124.jpg"
  },
  {
    "title": "第十三个故事",
    "url": "movie-1925.html",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑，剧情",
    "category": "纪录综艺",
    "cover": "./125.jpg"
  },
  {
    "title": "金牌制作人",
    "url": "movie-1926.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./126.jpg"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 鬼三惊2 猴女 民间怪谈录之走阴人 突围者 球衣2019 失山心灵 野蛮的囧妃：时空黑洞 黄沙剑影 我们恋爱吧第六季 绝地救援 东京湾燃烧 明日之子 青蛙老师 灼眼的夏娜第二季 沙普的伙伴 旋风客 神奇力量 沉船残骸 魔界城之王 人生剩利组",
    "url": "movie-1927.html",
    "year": "根据片名判断",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "genre": "根据片名判断",
    "category": "全球佳片",
    "cover": "./127.jpg"
  },
  {
    "title": "巅峰时代",
    "url": "movie-1928.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "商战 / 剧情",
    "category": "爱情喜剧",
    "cover": "./128.jpg"
  },
  {
    "title": "喜剧 百点满点",
    "url": "movie-1929.html",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧",
    "category": "悬疑惊悚",
    "cover": "./129.jpg"
  },
  {
    "title": "区区有鬼故粤语",
    "url": "movie-1930.html",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "genre": "惊悚，恐怖，单元剧",
    "category": "科幻奇幻",
    "cover": "./130.jpg"
  },
  {
    "title": "恩人",
    "url": "movie-1931.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 伦理",
    "category": "纪录综艺",
    "cover": "./131.jpg"
  },
  {
    "title": "谜样公路",
    "url": "movie-1932.html",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "纪录综艺",
    "cover": "./132.jpg"
  },
  {
    "title": "布偶历险记：全面追缉",
    "url": "movie-1933.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 悬疑 / 冒险",
    "category": "科幻奇幻",
    "cover": "./133.jpg"
  },
  {
    "title": "超能太阳鸭",
    "url": "movie-1934.html",
    "year": "2027",
    "region": "中国大陆 / 法国",
    "type": "电影",
    "genre": "动画, 冒险, 奇幻",
    "category": "热门剧集",
    "cover": "./134.jpg"
  },
  {
    "title": "先发五虎",
    "url": "movie-1935.html",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情，运动，励志",
    "category": "科幻奇幻",
    "cover": "./135.jpg"
  },
  {
    "title": "牧师神探第十季",
    "url": "movie-1936.html",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "genre": "犯罪、剧情",
    "category": "精选电影",
    "cover": "./136.jpg"
  },
  {
    "title": "愿你在此",
    "url": "movie-1937.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 奇幻 / 治愈",
    "category": "精选电影",
    "cover": "./137.jpg"
  },
  {
    "title": "红河",
    "url": "movie-1938.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/剧情",
    "category": "纪录综艺",
    "cover": "./138.jpg"
  },
  {
    "title": "神秘夫人粤语",
    "url": "movie-1939.html",
    "year": "1995",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑 / 惊悚 / 家庭",
    "category": "悬疑惊悚",
    "cover": "./139.jpg"
  },
  {
    "title": "我到底在与什么作斗争",
    "url": "movie-1940.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻剧情",
    "category": "科幻奇幻",
    "cover": "./140.jpg"
  },
  {
    "title": "坏女孩去死吧",
    "url": "movie-1941.html",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 校园",
    "category": "精选电影",
    "cover": "./141.jpg"
  },
  {
    "title": "九九",
    "url": "movie-1942.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "category": "纪录综艺",
    "cover": "./142.jpg"
  },
  {
    "title": "魇会",
    "url": "movie-1943.html",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖",
    "category": "悬疑惊悚",
    "cover": "./143.jpg"
  },
  {
    "title": "最终幻想15：王者之剑",
    "url": "movie-1944.html",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 动作, 奇幻",
    "category": "精选电影",
    "cover": "./144.jpg"
  },
  {
    "title": "生死决",
    "url": "movie-1945.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，武侠",
    "category": "精选电影",
    "cover": "./145.jpg"
  },
  {
    "title": "可不可以不要离开我",
    "url": "movie-1946.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情， 剧情",
    "category": "悬疑惊悚",
    "cover": "./146.jpg"
  },
  {
    "title": "请问，还有哪里需要加强",
    "url": "movie-1947.html",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "爱情喜剧",
    "cover": "./147.jpg"
  },
  {
    "title": "鬼勾魂",
    "url": "movie-1948.html",
    "year": "1992",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 情色",
    "category": "精选电影",
    "cover": "./148.jpg"
  },
  {
    "title": "真夏方程式",
    "url": "movie-1949.html",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/推理",
    "category": "爱情喜剧",
    "cover": "./149.jpg"
  },
  {
    "title": "时空螺旋",
    "url": "movie-1950.html",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "科幻，悬疑，剧情",
    "category": "科幻奇幻",
    "cover": "./150.jpg"
  },
  {
    "title": "小狮王守护队：狮王再起",
    "url": "movie-1951.html",
    "year": "2024",
    "region": "美国",
    "type": "电影/动画",
    "genre": "动画，冒险，家庭",
    "category": "精选电影",
    "cover": "./1.jpg"
  },
  {
    "title": "荒漠淫娃",
    "url": "movie-1952.html",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚、犯罪",
    "category": "精选电影",
    "cover": "./2.jpg"
  },
  {
    "title": "空军上尉与明日世界",
    "url": "movie-1953.html",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险 / 动作",
    "category": "热门剧集",
    "cover": "./3.jpg"
  },
  {
    "title": "浦岛太郎",
    "url": "movie-1954.html",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 剧情",
    "category": "动作犯罪",
    "cover": "./4.jpg"
  },
  {
    "title": "巴巴里海岸的火焰",
    "url": "movie-1955.html",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "科幻奇幻",
    "cover": "./5.jpg"
  },
  {
    "title": "明镜非台",
    "url": "movie-1956.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 武侠",
    "category": "精选电影",
    "cover": "./6.jpg"
  },
  {
    "title": "父子大变身",
    "url": "movie-1957.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 家庭, 奇幻",
    "category": "纪录综艺",
    "cover": "./7.jpg"
  },
  {
    "title": "阴阳界生死恋",
    "url": "movie-1958.html",
    "year": "1993",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情， 奇幻",
    "category": "悬疑惊悚",
    "cover": "./8.jpg"
  },
  {
    "title": "浴血突围1942",
    "url": "movie-1959.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史, 动作",
    "category": "精选电影",
    "cover": "./9.jpg"
  },
  {
    "title": "孔雀南飞",
    "url": "movie-1960.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "category": "热门剧集",
    "cover": "./10.jpg"
  },
  {
    "title": "当女人沉睡时",
    "url": "movie-1961.html",
    "year": "2016",
    "region": "日本 / 法国",
    "type": "电影",
    "genre": "剧情 / 情色",
    "category": "悬疑惊悚",
    "cover": "./11.jpg"
  },
  {
    "title": "粉红豹再度出击",
    "url": "movie-1962.html",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "华语专区",
    "cover": "./12.jpg"
  },
  {
    "title": "公主为奴",
    "url": "movie-1963.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 剧情 / 动作",
    "category": "动作犯罪",
    "cover": "./13.jpg"
  },
  {
    "title": "史酷比：法兰克吓人精",
    "url": "movie-1964.html",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动画，喜剧，悬疑",
    "category": "动作犯罪",
    "cover": "./14.jpg"
  },
  {
    "title": "眼镜蛇邪教",
    "url": "movie-1965.html",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "悬疑, 惊悚, 犯罪, 宗教",
    "category": "科幻奇幻",
    "cover": "./15.jpg"
  },
  {
    "title": "斗牛犬续集",
    "url": "movie-1966.html",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "悬疑惊悚",
    "cover": "./16.jpg"
  },
  {
    "title": "代号利剑",
    "url": "movie-1967.html",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "动作 / 悬疑 / 军旅",
    "category": "华语专区",
    "cover": "./17.jpg"
  },
  {
    "title": "野东西4",
    "url": "movie-1968.html",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 犯罪",
    "category": "动作犯罪",
    "cover": "./18.jpg"
  },
  {
    "title": "瓦尔兴湖家庭电影",
    "url": "movie-1969.html",
    "year": "2021",
    "region": "德国",
    "type": "电影",
    "genre": "纪录片 / 家庭",
    "category": "科幻奇幻",
    "cover": "./19.jpg"
  },
  {
    "title": "探案新窍门 第五季",
    "url": "movie-1970.html",
    "year": "2027",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "category": "动作犯罪",
    "cover": "./20.jpg"
  },
  {
    "title": "聂隐娘之绝命刺杀",
    "url": "movie-1971.html",
    "year": "2025",
    "region": "中国大陆、台湾",
    "type": "电影",
    "genre": "动作、武侠、古装",
    "category": "爱情喜剧",
    "cover": "./21.jpg"
  },
  {
    "title": "退休大赢家",
    "url": "movie-1972.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "热门剧集",
    "cover": "./22.jpg"
  },
  {
    "title": "小英雄杜杜",
    "url": "movie-1973.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动画 / 冒险",
    "category": "动漫动画",
    "cover": "./23.jpg"
  },
  {
    "title": "伞学院第一季",
    "url": "movie-1974.html",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻悬疑",
    "category": "纪录综艺",
    "cover": "./24.jpg"
  },
  {
    "title": "吃人的素食者",
    "url": "movie-1975.html",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "纪录综艺",
    "cover": "./25.jpg"
  },
  {
    "title": "时光恋人",
    "url": "movie-1976.html",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "category": "纪录综艺",
    "cover": "./26.jpg"
  },
  {
    "title": "为了与你相聚",
    "url": "movie-1977.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情、剧情",
    "category": "科幻奇幻",
    "cover": "./27.jpg"
  },
  {
    "title": "来自远方",
    "url": "movie-1978.html",
    "year": "2025",
    "region": "加拿大",
    "type": "音乐剧电影",
    "genre": "歌舞，剧情，历史",
    "category": "爱情喜剧",
    "cover": "./28.jpg"
  },
  {
    "title": "纵横四海国语",
    "url": "movie-1979.html",
    "year": "1991",
    "region": "香港",
    "type": "电视剧",
    "genre": "剧情, 动作, 商战",
    "category": "纪录综艺",
    "cover": "./29.jpg"
  },
  {
    "title": "情冷芳心",
    "url": "movie-1980.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情 / 都市 / 职场",
    "category": "爱情喜剧",
    "cover": "./30.jpg"
  },
  {
    "title": "魔术师：不可能的生活",
    "url": "movie-1981.html",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，奇幻",
    "category": "纪录综艺",
    "cover": "./31.jpg"
  },
  {
    "title": "嗜血本性",
    "url": "movie-1982.html",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖，剧情",
    "category": "精选电影",
    "cover": "./32.jpg"
  },
  {
    "title": "老板娘3",
    "url": "movie-1983.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作",
    "category": "爱情喜剧",
    "cover": "./33.jpg"
  },
  {
    "title": "红豆杉之恋",
    "url": "movie-1984.html",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 剧情, 乡村",
    "category": "动漫动画",
    "cover": "./34.jpg"
  },
  {
    "title": "第15条",
    "url": "movie-1985.html",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 悬疑",
    "category": "纪录综艺",
    "cover": "./35.jpg"
  },
  {
    "title": "七月十四",
    "url": "movie-1986.html",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "category": "动作犯罪",
    "cover": "./36.jpg"
  },
  {
    "title": "报仇",
    "url": "movie-1987.html",
    "year": "1970",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 剧情",
    "category": "热门剧集",
    "cover": "./37.jpg"
  },
  {
    "title": "笙歌喧腾",
    "url": "movie-1988.html",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "歌舞，剧情",
    "category": "精选电影",
    "cover": "./38.jpg"
  },
  {
    "title": "飞天都市计划",
    "url": "movie-1989.html",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻 / 冒险",
    "category": "华语专区",
    "cover": "./39.jpg"
  },
  {
    "title": "八月的英语",
    "url": "movie-1990.html",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 成长",
    "category": "全球佳片",
    "cover": "./40.jpg"
  },
  {
    "title": "恶魔幸存者2",
    "url": "movie-1991.html",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻、悬疑",
    "category": "全球佳片",
    "cover": "./41.jpg"
  },
  {
    "title": "生理酱",
    "url": "movie-1992.html",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 奇幻 / 喜剧",
    "category": "精选电影",
    "cover": "./42.jpg"
  },
  {
    "title": "拉雷手",
    "url": "movie-1993.html",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作",
    "category": "华语专区",
    "cover": "./43.jpg"
  },
  {
    "title": "爱上笨男人",
    "url": "movie-1994.html",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "动漫动画",
    "cover": "./44.jpg"
  },
  {
    "title": "荒野情天",
    "url": "movie-1995.html",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "爱情 / 冒险 / 剧情",
    "category": "悬疑惊悚",
    "cover": "./45.jpg"
  },
  {
    "title": "好汉饶命",
    "url": "movie-1996.html",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 古装",
    "category": "精选电影",
    "cover": "./46.jpg"
  },
  {
    "title": "上帝之役",
    "url": "movie-1997.html",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "战争，剧情，信仰",
    "category": "悬疑惊悚",
    "cover": "./47.jpg"
  },
  {
    "title": "你好，先生们",
    "url": "movie-1998.html",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 都市",
    "category": "悬疑惊悚",
    "cover": "./48.jpg"
  },
  {
    "title": "大学生做了没",
    "url": "movie-1999.html",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "热门剧集",
    "cover": "./49.jpg"
  },
  {
    "title": "一路爱情",
    "url": "movie-2000.html",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情、公路、喜剧",
    "category": "热门剧集",
    "cover": "./50.jpg"
  }
];

(function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const mainNav = document.querySelector('[data-main-nav]');
  if (menuButton && mainNav) {
    menuButton.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
  if (slides.length > 0) {
    let active = 0;
    const show = function (index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === active);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === active);
      });
    };
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
      });
    });
    window.setInterval(function () {
      show(active + 1);
    }, 5200);
    show(0);
  }

  const globalSearch = document.querySelector('[data-global-search]');
  const globalResults = document.querySelector('[data-global-results]');
  if (globalSearch && globalResults) {
    const renderResults = function (items) {
      globalResults.innerHTML = items.slice(0, 12).map(function (item) {
        return '<a class="search-result" href="' + item.url + '">' +
          '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '">' +
          '<span><strong>' + escapeHtml(item.title) + '</strong><span>' + escapeHtml(item.year) + ' · ' + escapeHtml(item.region) + ' · ' + escapeHtml(item.category) + '</span></span>' +
          '</a>';
      }).join('');
      globalResults.classList.toggle('open', items.length > 0);
    };
    globalSearch.addEventListener('input', function () {
      const q = globalSearch.value.trim().toLowerCase();
      if (!q) {
        globalResults.classList.remove('open');
        globalResults.innerHTML = '';
        return;
      }
      const items = SEARCH_INDEX.filter(function (item) {
        return [item.title, item.year, item.region, item.type, item.genre, item.category].join(' ').toLowerCase().includes(q);
      });
      renderResults(items);
    });
    document.addEventListener('click', function (event) {
      if (!globalResults.contains(event.target) && event.target !== globalSearch) {
        globalResults.classList.remove('open');
      }
    });
  }

  const localSearch = document.querySelector('[data-local-search]');
  const yearFilter = document.querySelector('[data-year-filter]');
  const genreFilter = document.querySelector('[data-genre-filter]');
  const cards = Array.from(document.querySelectorAll('[data-card]'));
  const emptyState = document.querySelector('[data-empty-state]');
  const applyFilters = function () {
    const q = localSearch ? localSearch.value.trim().toLowerCase() : '';
    const year = yearFilter ? yearFilter.value : '';
    const genre = genreFilter ? genreFilter.value : '';
    let visible = 0;
    cards.forEach(function (card) {
      const text = [card.dataset.title, card.dataset.year, card.dataset.genre, card.dataset.category].join(' ').toLowerCase();
      const okQ = !q || text.includes(q);
      const okYear = !year || card.dataset.year === year;
      const okGenre = !genre || card.dataset.genre.includes(genre);
      const ok = okQ && okYear && okGenre;
      card.style.display = ok ? '' : 'none';
      if (ok) visible += 1;
    });
    if (emptyState) {
      emptyState.style.display = visible ? 'none' : 'block';
    }
  };
  [localSearch, yearFilter, genreFilter].forEach(function (el) {
    if (el) {
      el.addEventListener('input', applyFilters);
      el.addEventListener('change', applyFilters);
    }
  });

  const player = document.querySelector('[data-player]');
  const trigger = document.querySelector('[data-player-trigger]');
  let hlsInstance = null;
  const startPlayer = function () {
    if (!player) return;
    const url = player.getAttribute('data-play');
    if (!url) return;
    if (!player.getAttribute('src') && !hlsInstance) {
      if (player.canPlayType('application/vnd.apple.mpegurl')) {
        player.setAttribute('src', url);
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls();
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(player);
      } else {
        player.setAttribute('src', url);
      }
    }
    if (trigger) {
      trigger.classList.add('hidden');
    }
    const playResult = player.play();
    if (playResult && typeof playResult.catch === 'function') {
      playResult.catch(function () {});
    }
  };
  if (trigger) {
    trigger.addEventListener('click', startPlayer);
  }
  if (player) {
    player.addEventListener('click', function () {
      if (player.paused) {
        startPlayer();
      }
    });
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}());
