// Данные меню Kedai Putri (по обновлённому меню из assets/54337840941070511xx.jpg).
// Цена p — в тысячах рупий (25 = 25k = Rp 25.000).
// img — файл из img/dishes/ (есть не у всех блюд).
// tag: 'best' — Best Seller, 'fav' — Favorite (как в оригинальном меню).
// d — необязательное описание (гарнир/состав).
// Языки: id — оригинал, en, ru, zh, ja.

window.MENU = [
  {
    id: 'kare', group: 'food', tag: 'best',
    name: { id: 'Kare India', en: 'Indian Curry', ru: 'Индийское карри', zh: '印度咖喱', ja: 'インドカレー' },
    items: [
      { p: 37, img: 'kare-ayam-india', n: { id: 'Kare Ayam India', en: 'Indian chicken curry', ru: 'Индийское карри с курицей', zh: '印度咖喱鸡', ja: 'インド風チキンカレー' } },
      { p: 32, n: { id: 'Kare Ayam Katsu India', en: 'Indian curry with chicken katsu', ru: 'Индийское карри с курицей кацу', zh: '印度咖喱炸鸡排', ja: 'インド風チキンカツカレー' } },
      { p: 57, n: { id: 'Kare Seafood India', en: 'Indian seafood curry', ru: 'Индийское карри с морепродуктами', zh: '印度咖喱海鲜', ja: 'インド風シーフードカレー' } },
      { p: 30, n: { id: 'Kare Sayur India', en: 'Indian vegetable curry', ru: 'Индийское овощное карри', zh: '印度咖喱蔬菜', ja: 'インド風野菜カレー' } },
      { p: 52, n: { id: 'Kare Ikan', en: 'Fish curry with rice', ru: 'Рыбное карри с рисом', zh: '咖喱鱼配米饭', ja: 'フィッシュカレー（ライス付き）' } },
    ],
  },
  {
    id: 'nasi', group: 'food', tag: 'best',
    name: { id: 'Nasi Goreng', en: 'Fried Rice', ru: 'Жареный рис', zh: '炒饭', ja: 'ナシゴレン' },
    items: [
      { p: 30, img: 'nasi-goreng-telur-asin', n: { id: 'Nasi Goreng Ayam Telur Asin', en: 'Fried rice with salted egg chicken', ru: 'Жареный рис с курицей в соусе из солёного яйца', zh: '咸蛋黄鸡炒饭', ja: 'ソルテッドエッグチキンのナシゴレン' } },
      { p: 26, img: 'nasi-goreng-katsu', n: { id: 'Nasi Goreng Ayam Katsu', en: 'Fried rice with chicken katsu', ru: 'Жареный рис с курицей кацу', zh: '日式炸鸡排炒饭', ja: 'チキンカツのナシゴレン' } },
      { p: 26, img: 'nasi-goreng-lada-hitam', n: { id: 'Nasi Goreng Ayam Lada Hitam', en: 'Fried rice with black pepper chicken', ru: 'Жареный рис с курицей в чёрном перце', zh: '黑椒鸡炒饭', ja: '黒胡椒チキンのナシゴレン' } },
      { p: 26, img: 'nasi-goreng-ayam-mentega', n: { id: 'Nasi Goreng Ayam Mentega', en: 'Fried rice with butter chicken', ru: 'Жареный рис с курицей в сливочном соусе', zh: '黄油鸡炒饭', ja: 'バターチキンのナシゴレン' } },
      { p: 26, img: 'nasi-goreng-ayam-korea', n: { id: 'Nasi Goreng Ayam Korea', en: 'Fried rice with Korean chicken', ru: 'Жареный рис с курицей по-корейски', zh: '韩式鸡肉炒饭', ja: '韓国風チキンのナシゴレン' } },
      { p: 26, n: { id: 'Nasi Goreng Ayam Koloke', en: 'Fried rice with sweet & sour chicken', ru: 'Жареный рис с кисло-сладкой курицей', zh: '咕咾鸡炒饭', ja: '甘酢チキンのナシゴレン' } },
      { p: 37, n: { id: 'Nasi Goreng Spesial', en: 'Special fried rice', ru: 'Фирменный жареный рис', zh: '招牌炒饭', ja: 'スペシャルナシゴレン' },
        d: { id: 'Telur ceplok, ayam goreng, ayam lada hitam, kerupuk udang', en: 'Fried egg, fried chicken, black pepper chicken, prawn crackers', ru: 'Яичница, жареная курица, курица в чёрном перце, креветочные чипсы', zh: '煎蛋、炸鸡、黑椒鸡、虾片', ja: '目玉焼き、フライドチキン、黒胡椒チキン、えびせん' } },
      { p: 32, n: { id: 'Nasi Goreng Seafood', en: 'Seafood fried rice', ru: 'Жареный рис с морепродуктами', zh: '海鲜炒饭', ja: 'シーフードナシゴレン' },
        d: { id: 'Dengan telur dadar, udang goreng, kerupuk udang', en: 'With omelette, fried prawns, prawn crackers', ru: 'С омлетом, жареными креветками, креветочными чипсами', zh: '配蛋饼、炸虾、虾片', ja: 'オムレツ、エビフライ、えびせん付き' } },
    ],
  },
  {
    id: 'ayam', group: 'food', tag: 'fav',
    name: { id: 'Ayam', en: 'Chicken', ru: 'Курица', zh: '鸡肉', ja: 'チキン' },
    items: [
      { p: 27, img: 'ayam-telur-asin', n: { id: 'Ayam Telur Asin', en: 'Salted egg chicken', ru: 'Курица в соусе из солёного яйца', zh: '咸蛋黄鸡', ja: 'チキンのソルテッドエッグ炒め' } },
      { p: 25, img: 'ayam-katsu', n: { id: 'Ayam Katsu', en: 'Chicken katsu with rice', ru: 'Курица кацу с рисом', zh: '日式炸鸡排配米饭', ja: 'チキンカツ（ライス付き）' } },
      { p: 25, img: 'ayam-lada-hitam', n: { id: 'Ayam Lada Hitam', en: 'Black pepper chicken with rice', ru: 'Курица в соусе из чёрного перца с рисом', zh: '黑椒鸡配米饭', ja: '黒胡椒チキン（ライス付き）' } },
      { p: 25, img: 'ayam-mentega', n: { id: 'Ayam Mentega', en: 'Butter chicken', ru: 'Курица в сливочном соусе', zh: '黄油鸡', ja: 'バターチキン' } },
      { p: 25, img: 'ayam-korea', n: { id: 'Ayam Korea', en: 'Korean chicken with rice', ru: 'Курица по-корейски с рисом', zh: '韩式炸鸡配米饭', ja: '韓国風チキン（ライス付き）' } },
      { p: 25, n: { id: 'Ayam Koloke', en: 'Sweet & sour chicken', ru: 'Курица в кисло-сладком соусе', zh: '咕咾鸡', ja: '甘酢チキン' } },
      { p: 43, n: { id: 'Ayam Nyat Nyat', en: 'Chicken in Balinese curry with rice', ru: 'Курица в балийском карри с рисом', zh: '巴厘咖喱鸡配米饭', ja: 'チキンのバリ風カレー（ライス付き）' } },
    ],
  },
  {
    id: 'paket', group: 'food',
    name: { id: 'Paket Ayam Es Teh', en: 'Chicken + Iced Tea Sets', ru: 'Сеты: курица + холодный чай', zh: '鸡肉冰茶套餐', ja: 'チキン＋アイスティーセット' },
    items: [
      { p: 26, n: { id: 'Ayam Lalapan', en: 'Fried chicken with fresh veggies', ru: 'Жареная курица со свежими овощами', zh: '炸鸡配鲜蔬', ja: 'フライドチキンと生野菜' } },
      { p: 26, n: { id: 'Ayam Kremes', en: 'Crispy chicken with crunchy crumbs', ru: 'Курица с хрустящей крошкой', zh: '酥脆炸鸡', ja: 'カリカリ衣のフライドチキン' } },
      { p: 26, n: { id: 'Ayam Geprek', en: 'Smashed fried chicken with sambal', ru: 'Отбитая жареная курица с самбалом', zh: '印尼辣酱拍鸡', ja: '潰しフライドチキンのサンバル添え' } },
      { p: 29, n: { id: 'Ayam Cabai Kering', en: 'Fried chicken with dried chili', ru: 'Жареная курица с сушёным чили', zh: '干辣椒炸鸡', ja: '干し唐辛子のフライドチキン' } },
      { p: 28, n: { id: 'Ayam Bakar', en: 'Grilled chicken', ru: 'Курица на гриле', zh: '印尼烤鸡', ja: 'グリルチキン' } },
    ],
  },
  {
    id: 'gurami', group: 'food',
    name: { id: 'Spesial Gurami', en: 'Gourami Specials', ru: 'Гурами', zh: '招牌丝足鱼', ja: 'グラミー料理' },
    items: [
      { p: 58, n: { id: 'Gurami Nyat Nyat', en: 'Gourami in Balinese curry with rice', ru: 'Гурами в балийском карри с рисом', zh: '巴厘咖喱丝足鱼配米饭', ja: 'グラミーのバリ風カレー（ライス付き）' } },
      { p: 58, n: { id: 'Gurami Saus Tiram', en: 'Fried gourami in chili oyster sauce with rice', ru: 'Жареный гурами в остром устричном соусе с рисом', zh: '辣蚝油炸丝足鱼配米饭', ja: '揚げグラミーのピリ辛オイスターソース（ライス付き）' } },
      { p: 58, n: { id: 'Gurami Asam Manis', en: 'Sweet & sour fried gourami with rice', ru: 'Жареный гурами в кисло-сладком соусе с рисом', zh: '糖醋炸丝足鱼配米饭', ja: '揚げグラミーの甘酢あんかけ（ライス付き）' } },
      { p: 58, n: { id: 'Gurami Terbang Sambal Mentah', en: '"Flying" fried gourami with fresh sambal and rice', ru: '«Летающий» жареный гурами со свежим самбалом и рисом', zh: '酥炸“飞天”丝足鱼配生辣椒酱和米饭', ja: '「空飛ぶ」揚げグラミー 生サンバル添え（ライス付き）' } },
    ],
  },
  {
    id: 'lele', group: 'food',
    name: { id: 'Ikan Lele', en: 'Catfish', ru: 'Сом', zh: '鲶鱼', ja: 'ナマズ' },
    items: [
      { p: 28, n: { id: 'Lele Kremes', en: 'Crispy catfish with crunchy crumbs', ru: 'Хрустящий сом с крошкой', zh: '酥脆炸鲶鱼', ja: 'カリカリ衣のナマズフライ' } },
      { p: 32, n: { id: 'Lele Nyat Nyat', en: 'Catfish in Balinese curry', ru: 'Сом в балийском карри', zh: '巴厘咖喱鲶鱼', ja: 'ナマズのバリ風カレー' } },
      { p: 27, n: { id: 'Lele Goreng', en: 'Fried catfish', ru: 'Жареный сом', zh: '炸鲶鱼', ja: 'ナマズフライ' } },
      { p: 29, n: { id: 'Lele Bakar', en: 'Grilled catfish', ru: 'Сом на гриле', zh: '烤鲶鱼', ja: 'ナマズのグリル' } },
    ],
  },
  {
    id: 'bebek', group: 'food',
    name: { id: 'Bebek', en: 'Duck', ru: 'Утка', zh: '鸭肉', ja: 'ダック' },
    items: [
      { p: 98, n: { id: 'Bebek Liar Nyat Nyat', en: 'Wild duck in Balinese coconut curry with rice', ru: 'Дикая утка в балийском кокосовом карри с рисом', zh: '巴厘椰香咖喱野鸭配米饭', ja: '野鴨のバリ風ココナッツカレー（ライス付き）' } },
      { p: 95, n: { id: 'Bebek Goreng Garing', en: 'Crispy fried duck', ru: 'Хрустящая жареная утка', zh: '香酥炸鸭', ja: 'カリカリ揚げダック' } },
      { p: 95, n: { id: 'Bebek Goreng Kremes', en: 'Crispy duck with sambal and rice', ru: 'Хрустящая утка с самбалом и рисом', zh: '酥脆炸鸭配辣酱和米饭', ja: 'クリスピーダック（サンバル・ライス付き）' } },
    ],
  },
  {
    id: 'steak', group: 'food',
    name: { id: 'Steak & Fish', en: 'Steak & Fish', ru: 'Стейки и рыба', zh: '牛排与鱼排', ja: 'ステーキ＆フィッシュ' },
    items: [
      { p: 85, n: { id: 'Beef Steak Black Pepper', en: 'Black pepper beef steak', ru: 'Говяжий стейк с чёрным перцем', zh: '黑椒牛排', ja: '黒胡椒ビーフステーキ' },
        d: { id: 'Dengan sayuran dan kentang goreng', en: 'With vegetables and french fries', ru: 'С овощами и картофелем фри', zh: '配蔬菜和薯条', ja: '野菜とフライドポテト付き' } },
      { p: 90, n: { id: 'Beef Hot Platter', en: 'Beef hot platter', ru: 'Говядина на горячей сковороде', zh: '铁板牛肉', ja: '牛肉の鉄板焼き' },
        d: { id: 'Daging sapi lada hitam ala Chinese, dengan nasi', en: 'Chinese-style black pepper beef with rice', ru: 'Говядина в чёрном перце по-китайски, с рисом', zh: '中式黑椒牛肉配米饭', ja: '中華風黒胡椒牛肉、ライス付き' } },
      { p: 55, n: { id: 'Chicken Steak', en: 'Chicken steak', ru: 'Куриный стейк', zh: '鸡排', ja: 'チキンステーキ' },
        d: { id: 'Dengan sayuran, kentang goreng dan saus jamur', en: 'With vegetables, french fries and mushroom sauce', ru: 'С овощами, картофелем фри и грибным соусом', zh: '配蔬菜、薯条和蘑菇酱', ja: '野菜、フライドポテト、マッシュルームソース付き' } },
      { p: 65, n: { id: 'Tuna Steak', en: 'Tuna steak', ru: 'Стейк из тунца', zh: '金枪鱼排', ja: 'マグロステーキ' },
        d: { id: 'Dengan mentega bawang putih, salad dan kentang goreng', en: 'With garlic butter, garden salad and french fries', ru: 'С чесночным маслом, салатом и картофелем фри', zh: '配蒜香黄油、田园沙拉和薯条', ja: 'ガーリックバター、サラダ、フライドポテト付き' } },
      { p: 120, n: { id: 'Aneka Sari Laut Goreng', en: 'Fried seafood platter', ru: 'Ассорти жареных морепродуктов', zh: '炸海鲜拼盘', ja: 'シーフードフライ盛り合わせ' },
        d: { id: 'Dengan salad dan kentang goreng', en: 'With salad and french fries', ru: 'С салатом и картофелем фри', zh: '配沙拉和薯条', ja: 'サラダとフライドポテト付き' } },
    ],
  },
  {
    id: 'udang', group: 'food',
    name: { id: 'Udang', en: 'Prawns', ru: 'Креветки', zh: '虾', ja: 'エビ' },
    items: [
      { p: 53, n: { id: 'Udang Telur Asin', en: 'Salted egg prawns with rice', ru: 'Креветки в соусе из солёного яйца с рисом', zh: '咸蛋黄虾配米饭', ja: 'エビのソルテッドエッグ炒め（ライス付き）' } },
      { p: 47, n: { id: 'Udang Saus Tiram', en: 'Prawns in chili oyster sauce with rice', ru: 'Креветки в остром устричном соусе с рисом', zh: '辣蚝油虾配米饭', ja: 'エビのピリ辛オイスターソース（ライス付き）' } },
      { p: 47, img: 'udang-asam-manis', n: { id: 'Udang Asam Manis', en: 'Sweet & sour prawns with rice', ru: 'Креветки в кисло-сладком соусе с рисом', zh: '糖醋虾配米饭', ja: 'エビの甘酢あんかけ（ライス付き）' } },
      { p: 47, n: { id: 'Udang Saus Mentega', en: 'Butter prawns with rice', ru: 'Креветки в сливочном соусе с рисом', zh: '黄油虾配米饭', ja: 'エビのバターソース（ライス付き）' } },
      { p: 47, n: { id: 'Udang Goreng Sambal Mentah', en: 'Fried prawns with fresh sambal and rice', ru: 'Жареные креветки со свежим самбалом и рисом', zh: '炸虾配生辣椒酱和米饭', ja: 'エビフライ 生サンバル添え（ライス付き）' } },
    ],
  },
  {
    id: 'cumi', group: 'food',
    name: { id: 'Cumi', en: 'Squid', ru: 'Кальмары', zh: '鱿鱼', ja: 'イカ' },
    items: [
      { p: 48, n: { id: 'Cumi Goreng Tepung', en: 'Fried calamari rings with tartar sauce', ru: 'Кольца кальмара в кляре с соусом тартар', zh: '炸鱿鱼圈配塔塔酱', ja: 'イカリングフライ タルタルソース添え' } },
      { p: 48, n: { id: 'Cumi Asam Manis', en: 'Sweet & sour squid with rice', ru: 'Кальмары в кисло-сладком соусе с рисом', zh: '糖醋鱿鱼配米饭', ja: 'イカの甘酢あんかけ（ライス付き）' } },
      { p: 48, n: { id: 'Cumi Lada Hitam', en: 'Black pepper squid with rice', ru: 'Кальмары в соусе из чёрного перца с рисом', zh: '黑椒鱿鱼配米饭', ja: 'イカの黒胡椒炒め（ライス付き）' } },
      { p: 48, n: { id: 'Cumi Saus Tiram', en: 'Squid in chili oyster sauce', ru: 'Кальмары в остром устричном соусе', zh: '辣蚝油鱿鱼', ja: 'イカのピリ辛オイスターソース' } },
      { p: 48, n: { id: 'Cumi Telur Asin', en: 'Salted egg squid', ru: 'Кальмары в соусе из солёного яйца', zh: '咸蛋黄鱿鱼', ja: 'イカのソルテッドエッグ炒め' } },
    ],
  },
  {
    id: 'mie', group: 'food',
    name: { id: 'Mie dan Kwetio', en: 'Noodles', ru: 'Лапша', zh: '面条', ja: '麺類' },
    items: [
      { p: 39, n: { id: 'Mie Goreng Ayam Katsu', en: 'Fried noodles with chicken katsu', ru: 'Жареная лапша с курицей кацу', zh: '日式炸鸡排炒面', ja: 'チキンカツのミーゴレン（焼きそば）' } },
      { p: 37, n: { id: 'Mie Goreng Sari Laut', en: 'Seafood fried noodles', ru: 'Жареная лапша с морепродуктами', zh: '海鲜炒面', ja: 'シーフードミーゴレン（焼きそば）' } },
      { p: 27, n: { id: 'Mie Goreng Ayam', en: 'Chicken fried noodles', ru: 'Жареная лапша с курицей', zh: '鸡肉炒面', ja: 'チキンミーゴレン（焼きそば）' } },
      { p: 37, n: { id: 'Mie Kuah Sari Laut', en: 'Seafood noodle soup', ru: 'Суп-лапша с морепродуктами', zh: '海鲜汤面', ja: 'シーフードのスープ麺' } },
      { p: 27, n: { id: 'Mie Kuah Ayam', en: 'Chicken noodle soup', ru: 'Суп-лапша с курицей', zh: '鸡肉汤面', ja: 'チキンのスープ麺' } },
      { p: 40, n: { id: 'Kwetio Sari Laut', en: 'Seafood flat rice noodles', ru: 'Широкая рисовая лапша с морепродуктами', zh: '海鲜炒粿条', ja: 'シーフードの平打ち米麺炒め' } },
      { p: 27, n: { id: 'Kwetio Ayam', en: 'Chicken flat rice noodles', ru: 'Широкая рисовая лапша с курицей', zh: '鸡肉炒粿条', ja: 'チキンの平打ち米麺炒め' } },
    ],
  },
  {
    id: 'sup', group: 'food',
    name: { id: 'Soup Buntut', en: 'Oxtail Soup', ru: 'Суп из бычьих хвостов', zh: '牛尾汤', ja: 'オックステールスープ' },
    items: [
      { p: 55, n: { id: 'Soup Buntut Biasa', en: 'Oxtail soup', ru: 'Суп из бычьих хвостов', zh: '牛尾汤', ja: 'オックステールスープ' } },
      { p: 57, n: { id: 'Soup Buntut Bakar', en: 'Grilled oxtail soup', ru: 'Суп с хвостами на гриле', zh: '烤牛尾汤', ja: 'グリルオックステールスープ' } },
      { p: 57, n: { id: 'Soup Buntut Goreng', en: 'Fried oxtail soup', ru: 'Суп с жареными хвостами', zh: '炸牛尾汤', ja: '揚げオックステールスープ' } },
    ],
  },
  {
    id: 'sayur', group: 'food',
    name: { id: 'Sayuran', en: 'Vegetables', ru: 'Овощи', zh: '蔬菜', ja: '野菜料理' },
    items: [
      { p: 26, n: { id: 'Cap Cay Ayam', en: 'Stir-fried vegetables with chicken', ru: 'Чапчай: тушёные овощи с курицей', zh: '鸡肉杂烩菜', ja: 'チキン入り野菜炒め（チャプチャイ）' } },
      { p: 32, n: { id: 'Cap Cay Seafood', en: 'Stir-fried vegetables with seafood', ru: 'Чапчай: тушёные овощи с морепродуктами', zh: '海鲜杂烩菜', ja: 'シーフード入り野菜炒め（チャプチャイ）' } },
      { p: 24, n: { id: 'Cap Cay Biasa', en: 'Stir-fried vegetables', ru: 'Чапчай: тушёные овощи', zh: '素杂烩菜', ja: '野菜炒め（チャプチャイ）' } },
      { p: 32, n: { id: 'Foyonghay Sayur', en: 'Fu yung hai omelette with vegetables', ru: 'Омлет фуюнхай с овощами', zh: '蔬菜芙蓉蛋', ja: '野菜のフーヨーハイ（中華風オムレツ）' } },
      { p: 34, n: { id: 'Foyonghay Ayam', en: 'Fu yung hai omelette with chicken', ru: 'Омлет фуюнхай с курицей', zh: '鸡肉芙蓉蛋', ja: 'チキンのフーヨーハイ（中華風オムレツ）' } },
      { p: 37, n: { id: 'Foyonghay Seafood', en: 'Fu yung hai omelette with seafood', ru: 'Омлет фуюнхай с морепродуктами', zh: '海鲜芙蓉蛋', ja: 'シーフードのフーヨーハイ（中華風オムレツ）' } },
      { p: 18, n: { id: 'Cah Kangkung', en: 'Stir-fried water spinach', ru: 'Жареный водяной шпинат', zh: '清炒空心菜', ja: '空芯菜炒め' } },
      { p: 18, n: { id: 'Plecing Kangkung', en: 'Water spinach in chili tomato sauce', ru: 'Водяной шпинат в остром томатном соусе', zh: '辣番茄酱空心菜', ja: '空芯菜のピリ辛トマトソース' } },
      { p: 20, n: { id: 'Buncis Telur Asin', en: 'Green beans with salted egg', ru: 'Стручковая фасоль с солёным яйцом', zh: '咸蛋黄四季豆', ja: 'インゲンのソルテッドエッグ炒め' } },
      { p: 24, n: { id: '4T (Tahu, Tempe, Terong, Telur)', en: '"4T" set: tofu, tempeh, eggplant, fried egg', ru: 'Сет «4Т»: тофу, темпе, баклажан, яичница', zh: '4T套餐：豆腐、天贝、茄子、煎蛋', ja: '「4T」セット：豆腐、テンペ、ナス、目玉焼き' },
        d: { id: 'Dengan nasi putih dan sambal', en: 'With white rice and hot chili sambal', ru: 'С рисом и острым самбалом', zh: '配白米饭和辣椒酱', ja: 'ライスと辛いサンバル付き' } },
    ],
  },
  {
    id: 'salad', group: 'food',
    name: { id: 'Salad', en: 'Salads', ru: 'Салаты', zh: '沙拉', ja: 'サラダ' },
    items: [
      { p: 25, n: { id: 'Garden Salad', en: 'Garden salad', ru: 'Овощной салат', zh: '田园沙拉', ja: 'ガーデンサラダ' },
        d: { id: 'Selada, tomat, timun, wortel, bawang, saus Thai', en: 'Lettuce, tomato, cucumber, carrot, onion, Thai dressing', ru: 'Салат, помидор, огурец, морковь, лук, тайская заправка', zh: '生菜、番茄、黄瓜、胡萝卜、洋葱、泰式酱汁', ja: 'レタス、トマト、きゅうり、にんじん、玉ねぎ、タイ風ドレッシング' } },
      { p: 27, n: { id: 'Pasta Salad', en: 'Pasta salad', ru: 'Салат с пастой', zh: '意面沙拉', ja: 'パスタサラダ' },
        d: { id: 'Pasta, mayones, wortel, keju parmesan', en: 'Pasta, mayonnaise, carrot, parmesan', ru: 'Паста, майонез, морковь, пармезан', zh: '意面、蛋黄酱、胡萝卜、帕玛森芝士', ja: 'パスタ、マヨネーズ、にんじん、パルメザンチーズ' } },
      { p: 26, n: { id: 'Potato Salad', en: 'Potato salad', ru: 'Картофельный салат', zh: '土豆沙拉', ja: 'ポテトサラダ' },
        d: { id: 'Kentang rebus, mayones, keju parmesan', en: 'Boiled potatoes, mayonnaise, parmesan', ru: 'Варёный картофель, майонез, пармезан', zh: '水煮土豆、蛋黄酱、帕玛森芝士', ja: 'ゆでじゃがいも、マヨネーズ、パルメザンチーズ' } },
    ],
  },
  {
    id: 'camilan', group: 'food',
    name: { id: 'Camilan', en: 'Snacks', ru: 'Закуски', zh: '小吃', ja: '軽食' },
    items: [
      { p: 47, n: { id: 'Fish and Chips', en: 'Fish and chips', ru: 'Фиш-энд-чипс', zh: '炸鱼薯条', ja: 'フィッシュ＆チップス' },
        d: { id: 'Ikan dori, kentang goreng, saus tartar & sambal', en: 'Dory fish, french fries, tartar & chili sauce', ru: 'Рыба дори, картофель фри, соусы тартар и чили', zh: '龙利鱼配薯条、塔塔酱和辣椒酱', ja: '白身魚（ドリー）、フライドポテト、タルタル＆チリソース' } },
      { p: 22, n: { id: 'Bombay Goreng Tepung', en: 'Onion rings with tartar sauce', ru: 'Луковые кольца в кляре с соусом тартар', zh: '炸洋葱圈配塔塔酱', ja: 'オニオンリング タルタルソース添え' } },
      { p: 18, n: { id: 'Terong Goreng Tepung', en: 'Battered fried eggplant with sambal', ru: 'Баклажаны в кляре с самбалом', zh: '酥炸茄子配辣酱', ja: 'ナスのフリッター サンバル添え' } },
      { p: 22, n: { id: 'Nugget Ayam', en: 'Chicken nuggets', ru: 'Куриные наггетсы', zh: '鸡块', ja: 'チキンナゲット' } },
      { p: 20, n: { id: 'Kentang Goreng', en: 'French fries', ru: 'Картофель фри', zh: '炸薯条', ja: 'フライドポテト' } },
    ],
  },
  {
    id: 'penutup', group: 'food',
    name: { id: 'Hidangan Penutup', en: 'Desserts', ru: 'Десерты', zh: '甜点', ja: 'デザート' },
    items: [
      { p: 18, n: { id: 'Pisang Goreng Keju', en: 'Fried banana with cheese', ru: 'Жареные бананы с сыром', zh: '芝士炸香蕉', ja: 'チーズのせ揚げバナナ' } },
      { p: 18, n: { id: 'Buah Potong Campur', en: 'Fruit platter', ru: 'Фруктовая нарезка', zh: '什锦水果拼盘', ja: 'フルーツ盛り合わせ' } },
    ],
  },

  // ---------- Напитки ----------
  {
    id: 'jus', group: 'drink',
    name: { id: 'Aneka Jus', en: 'Fresh Juices', ru: 'Свежие соки', zh: '鲜榨果汁', ja: 'フレッシュジュース' },
    items: [
      { p: 12, n: { id: 'Jus Alpokat', en: 'Avocado juice', ru: 'Сок из авокадо', zh: '牛油果汁', ja: 'アボカドジュース' } },
      { p: 12, n: { id: 'Jus Mangga', en: 'Mango juice', ru: 'Манговый сок', zh: '芒果汁', ja: 'マンゴージュース' } },
      { p: 14, n: { id: 'Jus Stroberi', en: 'Strawberry juice', ru: 'Клубничный сок', zh: '草莓汁', ja: 'いちごジュース' } },
      { p: 10, n: { id: 'Jus Pepaya', en: 'Papaya juice', ru: 'Сок из папайи', zh: '木瓜汁', ja: 'パパイヤジュース' } },
      { p: 10, n: { id: 'Jus Nanas', en: 'Pineapple juice', ru: 'Ананасовый сок', zh: '菠萝汁', ja: 'パイナップルジュース' } },
      { p: 10, n: { id: 'Jus Semangka', en: 'Watermelon juice', ru: 'Арбузный сок', zh: '西瓜汁', ja: 'スイカジュース' } },
      { p: 10, n: { id: 'Jus Melon', en: 'Honeydew melon juice', ru: 'Дынный сок', zh: '蜜瓜汁', ja: 'メロンジュース' } },
      { p: 12, n: { id: 'Jus Buah Naga', en: 'Dragon fruit juice', ru: 'Сок из питахайи', zh: '火龙果汁', ja: 'ドラゴンフルーツジュース' } },
      { p: 10, n: { id: 'Jus Jeruk (Lokal)', en: 'Orange juice (local oranges)', ru: 'Апельсиновый сок (местные апельсины)', zh: '本地橙汁', ja: 'オレンジジュース（地元産オレンジ）' } },
      { p: 12, n: { id: 'Jus Wortel', en: 'Carrot juice', ru: 'Морковный сок', zh: '胡萝卜汁', ja: 'にんじんジュース' } },
      { p: 10, n: { id: 'Jus Tomat', en: 'Tomato juice', ru: 'Томатный сок', zh: '番茄汁', ja: 'トマトジュース' } },
    ],
  },
  {
    id: 'es', group: 'drink',
    name: { id: 'Aneka Es', en: 'Iced Drinks', ru: 'Холодные напитки', zh: '冰饮', ja: 'アイスドリンク' },
    items: [
      { p: 12, n: { id: 'Es Campur', en: 'Mixed fruit ice dessert', ru: 'Эс-чампур: фруктовое ассорти со льдом', zh: '什锦水果刨冰', ja: 'エス・チャンプル（フルーツかき氷）' } },
      { p: 11, n: { id: 'Es Buah', en: 'Fruit ice', ru: 'Фрукты со льдом и сиропом', zh: '水果冰', ja: 'フルーツポンチ' } },
      { p: 15, n: { id: 'Es Teler', en: 'Es teler: avocado, coconut, jackfruit on ice', ru: 'Эс-телер: авокадо, кокос, джекфрут со льдом', zh: '椰奶水果冰', ja: 'エス・テレール：アボカド、ココナッツ、ジャックフルーツのかき氷' } },
      { p: 10, n: { id: 'Es Kelapa Muda', en: 'Iced young coconut', ru: 'Молодой кокос со льдом', zh: '冰鲜椰子', ja: 'ヤングココナッツ（氷入り）' } },
      { p: 4, n: { id: 'Es Gula', en: 'Iced sweet water', ru: 'Сладкая вода со льдом', zh: '冰糖水', ja: '甘いアイスウォーター' } },
      { p: 6, n: { id: 'Es Teh', en: 'Iced tea', ru: 'Холодный чай', zh: '冰茶', ja: 'アイスティー' } },
      { p: 6, n: { id: 'Es Susu', en: 'Iced milk', ru: 'Холодное молоко', zh: '冰牛奶', ja: 'アイスミルク' } },
      { p: 14, n: { id: 'Es Jeruk + Kelapa', en: 'Iced orange & young coconut', ru: 'Апельсин с молодым кокосом со льдом', zh: '冰橙子椰子', ja: 'アイスオレンジ＆ヤングココナッツ' } },
      { p: 7, n: { id: 'Es Teh Lemon', en: 'Iced lemon tea', ru: 'Холодный чай с лимоном', zh: '冰柠檬茶', ja: 'アイスレモンティー' } },
    ],
  },
  {
    id: 'shake', group: 'drink',
    name: { id: 'Milk Shake', en: 'Milkshakes', ru: 'Милкшейки', zh: '奶昔', ja: 'ミルクシェイク' },
    items: [
      { p: 19, n: { id: 'Vanilla Milk Shake', en: 'Vanilla milkshake', ru: 'Ванильный милкшейк', zh: '香草奶昔', ja: 'バニラミルクシェイク' } },
      { p: 19, n: { id: 'Strawberry Milk Shake', en: 'Strawberry milkshake', ru: 'Клубничный милкшейк', zh: '草莓奶昔', ja: 'いちごミルクシェイク' } },
      { p: 19, n: { id: 'Chocolate Milk Shake', en: 'Chocolate milkshake', ru: 'Шоколадный милкшейк', zh: '巧克力奶昔', ja: 'チョコレートミルクシェイク' } },
    ],
  },
  {
    id: 'kopi', group: 'drink',
    name: { id: 'Kopi', en: 'Coffee', ru: 'Кофе', zh: '咖啡', ja: 'コーヒー' },
    items: [
      { p: 7, n: { id: 'Kopi Bali', en: 'Balinese coffee', ru: 'Балийский кофе', zh: '巴厘咖啡', ja: 'バリコーヒー' } },
      { p: 7, n: { id: 'Kopi Good Day', en: 'Good Day coffee', ru: 'Кофе Good Day', zh: 'Good Day 咖啡', ja: 'Good Day コーヒー' } },
      { p: 7, n: { id: 'Kopi ABC', en: 'ABC coffee', ru: 'Кофе ABC', zh: 'ABC 咖啡', ja: 'ABC コーヒー' } },
      { p: 7, n: { id: 'Kopi Kapal Api', en: 'Kapal Api coffee', ru: 'Кофе Kapal Api', zh: 'Kapal Api 咖啡', ja: 'Kapal Api コーヒー' } },
      { p: 7, n: { id: 'Kopi Luwak', en: 'Civet coffee (luwak)', ru: 'Кофе лювак', zh: '麝香猫咖啡', ja: 'コピ・ルアク' } },
      { p: 7, n: { id: 'Nescafe', en: 'Nescafé', ru: 'Nescafé', zh: '雀巢咖啡', ja: 'ネスカフェ' } },
      { p: 7, n: { id: 'Kopi Gula Aren', en: 'Coffee with traditional palm sugar', ru: 'Кофе с пальмовым сахаром', zh: '椰糖咖啡', ja: 'パームシュガーコーヒー' } },
    ],
  },
  {
    id: 'energi', group: 'drink',
    name: { id: 'Energi & Teh', en: 'Energy Drinks & Tea', ru: 'Энергетики и чай', zh: '能量饮品与茶', ja: 'エナジードリンク＆ティー' },
    items: [
      { p: 6, n: { id: 'Josu', en: 'Josu: Extra Joss energy drink with milk', ru: 'Josu: энергетик Extra Joss с молоком', zh: 'Josu（Extra Joss 加牛奶）', ja: 'Josu：Extra Joss（エナジードリンク）のミルク割り' } },
      { p: 4, n: { id: 'Extra Joss', en: 'Extra Joss energy drink', ru: 'Энергетик Extra Joss', zh: 'Extra Joss 能量饮料', ja: 'Extra Joss エナジードリンク' } },
      { p: 6, n: { id: 'Teh Tarik', en: 'Teh tarik: pulled milk tea', ru: 'Тех-тарик: чай с молоком', zh: '拉茶', ja: 'テ・タリック（泡立てミルクティー）' } },
      { p: 6, n: { id: 'Kuku Bima', en: 'Kuku Bima energy drink', ru: 'Энергетик Kuku Bima', zh: 'Kuku Bima 能量饮料', ja: 'Kuku Bima エナジードリンク' } },
    ],
  },
];
