// Данные меню Kedai Putri (по обновлённому меню из assets/54337840941070511xx.jpg).
// Цена p — в тысячах рупий (25 = 25k = Rp 25.000).
// img — файл из img/dishes/ (есть не у всех блюд).
// tag: 'best' — Best Seller, 'fav' — Favorite (как в оригинальном меню).
// d — необязательное описание (гарнир/состав).
// Языки: id — оригинал, en, ru, zh.

window.MENU = [
  {
    id: 'kare', group: 'food', tag: 'best',
    name: { id: 'Kare India', en: 'Indian Curry', ru: 'Индийское карри', zh: '印度咖喱' },
    items: [
      { p: 37, img: 'kare-ayam-india', n: { id: 'Kare Ayam India', en: 'Indian chicken curry', ru: 'Индийское карри с курицей', zh: '印度咖喱鸡' } },
      { p: 32, n: { id: 'Kare Ayam Katsu India', en: 'Indian curry with chicken katsu', ru: 'Индийское карри с курицей кацу', zh: '印度咖喱炸鸡排' } },
      { p: 57, n: { id: 'Kare Seafood India', en: 'Indian seafood curry', ru: 'Индийское карри с морепродуктами', zh: '印度咖喱海鲜' } },
      { p: 30, n: { id: 'Kare Sayur India', en: 'Indian vegetable curry', ru: 'Индийское овощное карри', zh: '印度咖喱蔬菜' } },
      { p: 52, n: { id: 'Kare Ikan', en: 'Fish curry with rice', ru: 'Рыбное карри с рисом', zh: '咖喱鱼配米饭' } },
    ],
  },
  {
    id: 'nasi', group: 'food', tag: 'best',
    name: { id: 'Nasi Goreng', en: 'Fried Rice', ru: 'Жареный рис', zh: '炒饭' },
    items: [
      { p: 30, img: 'nasi-goreng-telur-asin', n: { id: 'Nasi Goreng Ayam Telur Asin', en: 'Fried rice with salted egg chicken', ru: 'Жареный рис с курицей в соусе из солёного яйца', zh: '咸蛋黄鸡炒饭' } },
      { p: 26, img: 'nasi-goreng-katsu', n: { id: 'Nasi Goreng Ayam Katsu', en: 'Fried rice with chicken katsu', ru: 'Жареный рис с курицей кацу', zh: '日式炸鸡排炒饭' } },
      { p: 26, img: 'nasi-goreng-lada-hitam', n: { id: 'Nasi Goreng Ayam Lada Hitam', en: 'Fried rice with black pepper chicken', ru: 'Жареный рис с курицей в чёрном перце', zh: '黑椒鸡炒饭' } },
      { p: 26, img: 'nasi-goreng-ayam-mentega', n: { id: 'Nasi Goreng Ayam Mentega', en: 'Fried rice with butter chicken', ru: 'Жареный рис с курицей в сливочном соусе', zh: '黄油鸡炒饭' } },
      { p: 26, img: 'nasi-goreng-ayam-korea', n: { id: 'Nasi Goreng Ayam Korea', en: 'Fried rice with Korean chicken', ru: 'Жареный рис с курицей по-корейски', zh: '韩式鸡肉炒饭' } },
      { p: 26, n: { id: 'Nasi Goreng Ayam Koloke', en: 'Fried rice with sweet & sour chicken', ru: 'Жареный рис с кисло-сладкой курицей', zh: '咕咾鸡炒饭' } },
      { p: 37, n: { id: 'Nasi Goreng Spesial', en: 'Special fried rice', ru: 'Фирменный жареный рис', zh: '招牌炒饭' },
        d: { id: 'Telur ceplok, ayam goreng, ayam lada hitam, kerupuk udang', en: 'Fried egg, fried chicken, black pepper chicken, prawn crackers', ru: 'Яичница, жареная курица, курица в чёрном перце, креветочные чипсы', zh: '煎蛋、炸鸡、黑椒鸡、虾片' } },
      { p: 32, n: { id: 'Nasi Goreng Seafood', en: 'Seafood fried rice', ru: 'Жареный рис с морепродуктами', zh: '海鲜炒饭' },
        d: { id: 'Dengan telur dadar, udang goreng, kerupuk udang', en: 'With omelette, fried prawns, prawn crackers', ru: 'С омлетом, жареными креветками, креветочными чипсами', zh: '配蛋饼、炸虾、虾片' } },
    ],
  },
  {
    id: 'ayam', group: 'food', tag: 'fav',
    name: { id: 'Ayam', en: 'Chicken', ru: 'Курица', zh: '鸡肉' },
    items: [
      { p: 27, img: 'ayam-telur-asin', n: { id: 'Ayam Telur Asin', en: 'Salted egg chicken', ru: 'Курица в соусе из солёного яйца', zh: '咸蛋黄鸡' } },
      { p: 25, img: 'ayam-katsu', n: { id: 'Ayam Katsu', en: 'Chicken katsu with rice', ru: 'Курица кацу с рисом', zh: '日式炸鸡排配米饭' } },
      { p: 25, img: 'ayam-lada-hitam', n: { id: 'Ayam Lada Hitam', en: 'Black pepper chicken with rice', ru: 'Курица в соусе из чёрного перца с рисом', zh: '黑椒鸡配米饭' } },
      { p: 25, img: 'ayam-mentega', n: { id: 'Ayam Mentega', en: 'Butter chicken', ru: 'Курица в сливочном соусе', zh: '黄油鸡' } },
      { p: 25, img: 'ayam-korea', n: { id: 'Ayam Korea', en: 'Korean chicken with rice', ru: 'Курица по-корейски с рисом', zh: '韩式炸鸡配米饭' } },
      { p: 25, n: { id: 'Ayam Koloke', en: 'Sweet & sour chicken', ru: 'Курица в кисло-сладком соусе', zh: '咕咾鸡' } },
      { p: 43, n: { id: 'Ayam Nyat Nyat', en: 'Chicken in Balinese curry with rice', ru: 'Курица в балийском карри с рисом', zh: '巴厘咖喱鸡配米饭' } },
    ],
  },
  {
    id: 'paket', group: 'food',
    name: { id: 'Paket Ayam Es Teh', en: 'Chicken + Iced Tea Sets', ru: 'Сеты: курица + холодный чай', zh: '鸡肉冰茶套餐' },
    items: [
      { p: 26, n: { id: 'Ayam Lalapan', en: 'Fried chicken with fresh veggies', ru: 'Жареная курица со свежими овощами', zh: '炸鸡配鲜蔬' } },
      { p: 26, n: { id: 'Ayam Kremes', en: 'Crispy chicken with crunchy crumbs', ru: 'Курица с хрустящей крошкой', zh: '酥脆炸鸡' } },
      { p: 26, n: { id: 'Ayam Geprek', en: 'Smashed fried chicken with sambal', ru: 'Отбитая жареная курица с самбалом', zh: '印尼辣酱拍鸡' } },
      { p: 29, n: { id: 'Ayam Cabai Kering', en: 'Fried chicken with dried chili', ru: 'Жареная курица с сушёным чили', zh: '干辣椒炸鸡' } },
      { p: 28, n: { id: 'Ayam Bakar', en: 'Grilled chicken', ru: 'Курица на гриле', zh: '印尼烤鸡' } },
    ],
  },
  {
    id: 'gurami', group: 'food',
    name: { id: 'Spesial Gurami', en: 'Gourami Specials', ru: 'Гурами', zh: '招牌丝足鱼' },
    items: [
      { p: 58, n: { id: 'Gurami Nyat Nyat', en: 'Gourami in Balinese curry with rice', ru: 'Гурами в балийском карри с рисом', zh: '巴厘咖喱丝足鱼配米饭' } },
      { p: 58, n: { id: 'Gurami Saus Tiram', en: 'Fried gourami in chili oyster sauce with rice', ru: 'Жареный гурами в остром устричном соусе с рисом', zh: '辣蚝油炸丝足鱼配米饭' } },
      { p: 58, n: { id: 'Gurami Asam Manis', en: 'Sweet & sour fried gourami with rice', ru: 'Жареный гурами в кисло-сладком соусе с рисом', zh: '糖醋炸丝足鱼配米饭' } },
      { p: 58, n: { id: 'Gurami Terbang Sambal Mentah', en: '"Flying" fried gourami with fresh sambal and rice', ru: '«Летающий» жареный гурами со свежим самбалом и рисом', zh: '酥炸“飞天”丝足鱼配生辣椒酱和米饭' } },
    ],
  },
  {
    id: 'lele', group: 'food',
    name: { id: 'Ikan Lele', en: 'Catfish', ru: 'Сом', zh: '鲶鱼' },
    items: [
      { p: 28, n: { id: 'Lele Kremes', en: 'Crispy catfish with crunchy crumbs', ru: 'Хрустящий сом с крошкой', zh: '酥脆炸鲶鱼' } },
      { p: 32, n: { id: 'Lele Nyat Nyat', en: 'Catfish in Balinese curry', ru: 'Сом в балийском карри', zh: '巴厘咖喱鲶鱼' } },
      { p: 27, n: { id: 'Lele Goreng', en: 'Fried catfish', ru: 'Жареный сом', zh: '炸鲶鱼' } },
      { p: 29, n: { id: 'Lele Bakar', en: 'Grilled catfish', ru: 'Сом на гриле', zh: '烤鲶鱼' } },
    ],
  },
  {
    id: 'bebek', group: 'food',
    name: { id: 'Bebek', en: 'Duck', ru: 'Утка', zh: '鸭肉' },
    items: [
      { p: 98, n: { id: 'Bebek Liar Nyat Nyat', en: 'Wild duck in Balinese coconut curry with rice', ru: 'Дикая утка в балийском кокосовом карри с рисом', zh: '巴厘椰香咖喱野鸭配米饭' } },
      { p: 95, n: { id: 'Bebek Goreng Garing', en: 'Crispy fried duck', ru: 'Хрустящая жареная утка', zh: '香酥炸鸭' } },
      { p: 95, n: { id: 'Bebek Goreng Kremes', en: 'Crispy duck with sambal and rice', ru: 'Хрустящая утка с самбалом и рисом', zh: '酥脆炸鸭配辣酱和米饭' } },
    ],
  },
  {
    id: 'steak', group: 'food',
    name: { id: 'Steak & Fish', en: 'Steak & Fish', ru: 'Стейки и рыба', zh: '牛排与鱼排' },
    items: [
      { p: 85, n: { id: 'Beef Steak Black Pepper', en: 'Black pepper beef steak', ru: 'Говяжий стейк с чёрным перцем', zh: '黑椒牛排' },
        d: { id: 'Dengan sayuran dan kentang goreng', en: 'With vegetables and french fries', ru: 'С овощами и картофелем фри', zh: '配蔬菜和薯条' } },
      { p: 90, n: { id: 'Beef Hot Platter', en: 'Beef hot platter', ru: 'Говядина на горячей сковороде', zh: '铁板牛肉' },
        d: { id: 'Daging sapi lada hitam ala Chinese, dengan nasi', en: 'Chinese-style black pepper beef with rice', ru: 'Говядина в чёрном перце по-китайски, с рисом', zh: '中式黑椒牛肉配米饭' } },
      { p: 55, n: { id: 'Chicken Steak', en: 'Chicken steak', ru: 'Куриный стейк', zh: '鸡排' },
        d: { id: 'Dengan sayuran, kentang goreng dan saus jamur', en: 'With vegetables, french fries and mushroom sauce', ru: 'С овощами, картофелем фри и грибным соусом', zh: '配蔬菜、薯条和蘑菇酱' } },
      { p: 65, n: { id: 'Tuna Steak', en: 'Tuna steak', ru: 'Стейк из тунца', zh: '金枪鱼排' },
        d: { id: 'Dengan mentega bawang putih, salad dan kentang goreng', en: 'With garlic butter, garden salad and french fries', ru: 'С чесночным маслом, салатом и картофелем фри', zh: '配蒜香黄油、田园沙拉和薯条' } },
      { p: 120, n: { id: 'Aneka Sari Laut Goreng', en: 'Fried seafood platter', ru: 'Ассорти жареных морепродуктов', zh: '炸海鲜拼盘' },
        d: { id: 'Dengan salad dan kentang goreng', en: 'With salad and french fries', ru: 'С салатом и картофелем фри', zh: '配沙拉和薯条' } },
    ],
  },
  {
    id: 'udang', group: 'food',
    name: { id: 'Udang', en: 'Prawns', ru: 'Креветки', zh: '虾' },
    items: [
      { p: 53, n: { id: 'Udang Telur Asin', en: 'Salted egg prawns with rice', ru: 'Креветки в соусе из солёного яйца с рисом', zh: '咸蛋黄虾配米饭' } },
      { p: 47, n: { id: 'Udang Saus Tiram', en: 'Prawns in chili oyster sauce with rice', ru: 'Креветки в остром устричном соусе с рисом', zh: '辣蚝油虾配米饭' } },
      { p: 47, img: 'udang-asam-manis', n: { id: 'Udang Asam Manis', en: 'Sweet & sour prawns with rice', ru: 'Креветки в кисло-сладком соусе с рисом', zh: '糖醋虾配米饭' } },
      { p: 47, n: { id: 'Udang Saus Mentega', en: 'Butter prawns with rice', ru: 'Креветки в сливочном соусе с рисом', zh: '黄油虾配米饭' } },
      { p: 47, n: { id: 'Udang Goreng Sambal Mentah', en: 'Fried prawns with fresh sambal and rice', ru: 'Жареные креветки со свежим самбалом и рисом', zh: '炸虾配生辣椒酱和米饭' } },
    ],
  },
  {
    id: 'cumi', group: 'food',
    name: { id: 'Cumi', en: 'Squid', ru: 'Кальмары', zh: '鱿鱼' },
    items: [
      { p: 48, n: { id: 'Cumi Goreng Tepung', en: 'Fried calamari rings with tartar sauce', ru: 'Кольца кальмара в кляре с соусом тартар', zh: '炸鱿鱼圈配塔塔酱' } },
      { p: 48, n: { id: 'Cumi Asam Manis', en: 'Sweet & sour squid with rice', ru: 'Кальмары в кисло-сладком соусе с рисом', zh: '糖醋鱿鱼配米饭' } },
      { p: 48, n: { id: 'Cumi Lada Hitam', en: 'Black pepper squid with rice', ru: 'Кальмары в соусе из чёрного перца с рисом', zh: '黑椒鱿鱼配米饭' } },
      { p: 48, n: { id: 'Cumi Saus Tiram', en: 'Squid in chili oyster sauce', ru: 'Кальмары в остром устричном соусе', zh: '辣蚝油鱿鱼' } },
      { p: 48, n: { id: 'Cumi Telur Asin', en: 'Salted egg squid', ru: 'Кальмары в соусе из солёного яйца', zh: '咸蛋黄鱿鱼' } },
    ],
  },
  {
    id: 'mie', group: 'food',
    name: { id: 'Mie dan Kwetio', en: 'Noodles', ru: 'Лапша', zh: '面条' },
    items: [
      { p: 39, n: { id: 'Mie Goreng Ayam Katsu', en: 'Fried noodles with chicken katsu', ru: 'Жареная лапша с курицей кацу', zh: '日式炸鸡排炒面' } },
      { p: 37, n: { id: 'Mie Goreng Sari Laut', en: 'Seafood fried noodles', ru: 'Жареная лапша с морепродуктами', zh: '海鲜炒面' } },
      { p: 27, n: { id: 'Mie Goreng Ayam', en: 'Chicken fried noodles', ru: 'Жареная лапша с курицей', zh: '鸡肉炒面' } },
      { p: 37, n: { id: 'Mie Kuah Sari Laut', en: 'Seafood noodle soup', ru: 'Суп-лапша с морепродуктами', zh: '海鲜汤面' } },
      { p: 27, n: { id: 'Mie Kuah Ayam', en: 'Chicken noodle soup', ru: 'Суп-лапша с курицей', zh: '鸡肉汤面' } },
      { p: 40, n: { id: 'Kwetio Sari Laut', en: 'Seafood flat rice noodles', ru: 'Широкая рисовая лапша с морепродуктами', zh: '海鲜炒粿条' } },
      { p: 27, n: { id: 'Kwetio Ayam', en: 'Chicken flat rice noodles', ru: 'Широкая рисовая лапша с курицей', zh: '鸡肉炒粿条' } },
    ],
  },
  {
    id: 'sup', group: 'food',
    name: { id: 'Soup Buntut', en: 'Oxtail Soup', ru: 'Суп из бычьих хвостов', zh: '牛尾汤' },
    items: [
      { p: 55, n: { id: 'Soup Buntut Biasa', en: 'Oxtail soup', ru: 'Суп из бычьих хвостов', zh: '牛尾汤' } },
      { p: 57, n: { id: 'Soup Buntut Bakar', en: 'Grilled oxtail soup', ru: 'Суп с хвостами на гриле', zh: '烤牛尾汤' } },
      { p: 57, n: { id: 'Soup Buntut Goreng', en: 'Fried oxtail soup', ru: 'Суп с жареными хвостами', zh: '炸牛尾汤' } },
    ],
  },
  {
    id: 'sayur', group: 'food',
    name: { id: 'Sayuran', en: 'Vegetables', ru: 'Овощи', zh: '蔬菜' },
    items: [
      { p: 26, n: { id: 'Cap Cay Ayam', en: 'Stir-fried vegetables with chicken', ru: 'Чапчай: тушёные овощи с курицей', zh: '鸡肉杂烩菜' } },
      { p: 32, n: { id: 'Cap Cay Seafood', en: 'Stir-fried vegetables with seafood', ru: 'Чапчай: тушёные овощи с морепродуктами', zh: '海鲜杂烩菜' } },
      { p: 24, n: { id: 'Cap Cay Biasa', en: 'Stir-fried vegetables', ru: 'Чапчай: тушёные овощи', zh: '素杂烩菜' } },
      { p: 32, n: { id: 'Foyonghay Sayur', en: 'Fu yung hai omelette with vegetables', ru: 'Омлет фуюнхай с овощами', zh: '蔬菜芙蓉蛋' } },
      { p: 34, n: { id: 'Foyonghay Ayam', en: 'Fu yung hai omelette with chicken', ru: 'Омлет фуюнхай с курицей', zh: '鸡肉芙蓉蛋' } },
      { p: 37, n: { id: 'Foyonghay Seafood', en: 'Fu yung hai omelette with seafood', ru: 'Омлет фуюнхай с морепродуктами', zh: '海鲜芙蓉蛋' } },
      { p: 18, n: { id: 'Cah Kangkung', en: 'Stir-fried water spinach', ru: 'Жареный водяной шпинат', zh: '清炒空心菜' } },
      { p: 18, n: { id: 'Plecing Kangkung', en: 'Water spinach in chili tomato sauce', ru: 'Водяной шпинат в остром томатном соусе', zh: '辣番茄酱空心菜' } },
      { p: 20, n: { id: 'Buncis Telur Asin', en: 'Green beans with salted egg', ru: 'Стручковая фасоль с солёным яйцом', zh: '咸蛋黄四季豆' } },
      { p: 24, n: { id: '4T (Tahu, Tempe, Terong, Telur)', en: '"4T" set: tofu, tempeh, eggplant, fried egg', ru: 'Сет «4Т»: тофу, темпе, баклажан, яичница', zh: '4T套餐：豆腐、天贝、茄子、煎蛋' },
        d: { id: 'Dengan nasi putih dan sambal', en: 'With white rice and hot chili sambal', ru: 'С рисом и острым самбалом', zh: '配白米饭和辣椒酱' } },
    ],
  },
  {
    id: 'salad', group: 'food',
    name: { id: 'Salad', en: 'Salads', ru: 'Салаты', zh: '沙拉' },
    items: [
      { p: 25, n: { id: 'Garden Salad', en: 'Garden salad', ru: 'Овощной салат', zh: '田园沙拉' },
        d: { id: 'Selada, tomat, timun, wortel, bawang, saus Thai', en: 'Lettuce, tomato, cucumber, carrot, onion, Thai dressing', ru: 'Салат, помидор, огурец, морковь, лук, тайская заправка', zh: '生菜、番茄、黄瓜、胡萝卜、洋葱、泰式酱汁' } },
      { p: 27, n: { id: 'Pasta Salad', en: 'Pasta salad', ru: 'Салат с пастой', zh: '意面沙拉' },
        d: { id: 'Pasta, mayones, wortel, keju parmesan', en: 'Pasta, mayonnaise, carrot, parmesan', ru: 'Паста, майонез, морковь, пармезан', zh: '意面、蛋黄酱、胡萝卜、帕玛森芝士' } },
      { p: 26, n: { id: 'Potato Salad', en: 'Potato salad', ru: 'Картофельный салат', zh: '土豆沙拉' },
        d: { id: 'Kentang rebus, mayones, keju parmesan', en: 'Boiled potatoes, mayonnaise, parmesan', ru: 'Варёный картофель, майонез, пармезан', zh: '水煮土豆、蛋黄酱、帕玛森芝士' } },
    ],
  },
  {
    id: 'camilan', group: 'food',
    name: { id: 'Camilan', en: 'Snacks', ru: 'Закуски', zh: '小吃' },
    items: [
      { p: 47, n: { id: 'Fish and Chips', en: 'Fish and chips', ru: 'Фиш-энд-чипс', zh: '炸鱼薯条' },
        d: { id: 'Ikan dori, kentang goreng, saus tartar & sambal', en: 'Dory fish, french fries, tartar & chili sauce', ru: 'Рыба дори, картофель фри, соусы тартар и чили', zh: '龙利鱼配薯条、塔塔酱和辣椒酱' } },
      { p: 22, n: { id: 'Bombay Goreng Tepung', en: 'Onion rings with tartar sauce', ru: 'Луковые кольца в кляре с соусом тартар', zh: '炸洋葱圈配塔塔酱' } },
      { p: 18, n: { id: 'Terong Goreng Tepung', en: 'Battered fried eggplant with sambal', ru: 'Баклажаны в кляре с самбалом', zh: '酥炸茄子配辣酱' } },
      { p: 22, n: { id: 'Nugget Ayam', en: 'Chicken nuggets', ru: 'Куриные наггетсы', zh: '鸡块' } },
      { p: 20, n: { id: 'Kentang Goreng', en: 'French fries', ru: 'Картофель фри', zh: '炸薯条' } },
    ],
  },
  {
    id: 'penutup', group: 'food',
    name: { id: 'Hidangan Penutup', en: 'Desserts', ru: 'Десерты', zh: '甜点' },
    items: [
      { p: 18, n: { id: 'Pisang Goreng Keju', en: 'Fried banana with cheese', ru: 'Жареные бананы с сыром', zh: '芝士炸香蕉' } },
      { p: 18, n: { id: 'Buah Potong Campur', en: 'Fruit platter', ru: 'Фруктовая нарезка', zh: '什锦水果拼盘' } },
    ],
  },

  // ---------- Напитки ----------
  {
    id: 'jus', group: 'drink',
    name: { id: 'Aneka Jus', en: 'Fresh Juices', ru: 'Свежие соки', zh: '鲜榨果汁' },
    items: [
      { p: 12, n: { id: 'Jus Alpokat', en: 'Avocado juice', ru: 'Сок из авокадо', zh: '牛油果汁' } },
      { p: 12, n: { id: 'Jus Mangga', en: 'Mango juice', ru: 'Манговый сок', zh: '芒果汁' } },
      { p: 14, n: { id: 'Jus Stroberi', en: 'Strawberry juice', ru: 'Клубничный сок', zh: '草莓汁' } },
      { p: 10, n: { id: 'Jus Pepaya', en: 'Papaya juice', ru: 'Сок из папайи', zh: '木瓜汁' } },
      { p: 10, n: { id: 'Jus Nanas', en: 'Pineapple juice', ru: 'Ананасовый сок', zh: '菠萝汁' } },
      { p: 10, n: { id: 'Jus Semangka', en: 'Watermelon juice', ru: 'Арбузный сок', zh: '西瓜汁' } },
      { p: 10, n: { id: 'Jus Melon', en: 'Honeydew melon juice', ru: 'Дынный сок', zh: '蜜瓜汁' } },
      { p: 12, n: { id: 'Jus Buah Naga', en: 'Dragon fruit juice', ru: 'Сок из питахайи', zh: '火龙果汁' } },
      { p: 10, n: { id: 'Jus Jeruk (Lokal)', en: 'Orange juice (local oranges)', ru: 'Апельсиновый сок (местные апельсины)', zh: '本地橙汁' } },
      { p: 12, n: { id: 'Jus Wortel', en: 'Carrot juice', ru: 'Морковный сок', zh: '胡萝卜汁' } },
      { p: 10, n: { id: 'Jus Tomat', en: 'Tomato juice', ru: 'Томатный сок', zh: '番茄汁' } },
    ],
  },
  {
    id: 'es', group: 'drink',
    name: { id: 'Aneka Es', en: 'Iced Drinks', ru: 'Холодные напитки', zh: '冰饮' },
    items: [
      { p: 12, n: { id: 'Es Campur', en: 'Mixed fruit ice dessert', ru: 'Эс-чампур: фруктовое ассорти со льдом', zh: '什锦水果刨冰' } },
      { p: 11, n: { id: 'Es Buah', en: 'Fruit ice', ru: 'Фрукты со льдом и сиропом', zh: '水果冰' } },
      { p: 15, n: { id: 'Es Teler', en: 'Es teler: avocado, coconut, jackfruit on ice', ru: 'Эс-телер: авокадо, кокос, джекфрут со льдом', zh: '椰奶水果冰' } },
      { p: 10, n: { id: 'Es Kelapa Muda', en: 'Iced young coconut', ru: 'Молодой кокос со льдом', zh: '冰鲜椰子' } },
      { p: 4, n: { id: 'Es Gula', en: 'Iced sweet water', ru: 'Сладкая вода со льдом', zh: '冰糖水' } },
      { p: 6, n: { id: 'Es Teh', en: 'Iced tea', ru: 'Холодный чай', zh: '冰茶' } },
      { p: 6, n: { id: 'Es Susu', en: 'Iced milk', ru: 'Холодное молоко', zh: '冰牛奶' } },
      { p: 14, n: { id: 'Es Jeruk + Kelapa', en: 'Iced orange & young coconut', ru: 'Апельсин с молодым кокосом со льдом', zh: '冰橙子椰子' } },
      { p: 7, n: { id: 'Es Teh Lemon', en: 'Iced lemon tea', ru: 'Холодный чай с лимоном', zh: '冰柠檬茶' } },
    ],
  },
  {
    id: 'shake', group: 'drink',
    name: { id: 'Milk Shake', en: 'Milkshakes', ru: 'Милкшейки', zh: '奶昔' },
    items: [
      { p: 19, n: { id: 'Vanilla Milk Shake', en: 'Vanilla milkshake', ru: 'Ванильный милкшейк', zh: '香草奶昔' } },
      { p: 19, n: { id: 'Strawberry Milk Shake', en: 'Strawberry milkshake', ru: 'Клубничный милкшейк', zh: '草莓奶昔' } },
      { p: 19, n: { id: 'Chocolate Milk Shake', en: 'Chocolate milkshake', ru: 'Шоколадный милкшейк', zh: '巧克力奶昔' } },
    ],
  },
  {
    id: 'kopi', group: 'drink',
    name: { id: 'Kopi', en: 'Coffee', ru: 'Кофе', zh: '咖啡' },
    items: [
      { p: 7, n: { id: 'Kopi Bali', en: 'Balinese coffee', ru: 'Балийский кофе', zh: '巴厘咖啡' } },
      { p: 7, n: { id: 'Kopi Good Day', en: 'Good Day coffee', ru: 'Кофе Good Day', zh: 'Good Day 咖啡' } },
      { p: 7, n: { id: 'Kopi ABC', en: 'ABC coffee', ru: 'Кофе ABC', zh: 'ABC 咖啡' } },
      { p: 7, n: { id: 'Kopi Kapal Api', en: 'Kapal Api coffee', ru: 'Кофе Kapal Api', zh: 'Kapal Api 咖啡' } },
      { p: 7, n: { id: 'Kopi Luwak', en: 'Civet coffee (luwak)', ru: 'Кофе лювак', zh: '麝香猫咖啡' } },
      { p: 7, n: { id: 'Nescafe', en: 'Nescafé', ru: 'Nescafé', zh: '雀巢咖啡' } },
      { p: 7, n: { id: 'Kopi Gula Aren', en: 'Coffee with traditional palm sugar', ru: 'Кофе с пальмовым сахаром', zh: '椰糖咖啡' } },
    ],
  },
  {
    id: 'energi', group: 'drink',
    name: { id: 'Energi & Teh', en: 'Energy Drinks & Tea', ru: 'Энергетики и чай', zh: '能量饮品与茶' },
    items: [
      { p: 6, n: { id: 'Josu', en: 'Josu: Extra Joss energy drink with milk', ru: 'Josu: энергетик Extra Joss с молоком', zh: 'Josu（Extra Joss 加牛奶）' } },
      { p: 4, n: { id: 'Extra Joss', en: 'Extra Joss energy drink', ru: 'Энергетик Extra Joss', zh: 'Extra Joss 能量饮料' } },
      { p: 6, n: { id: 'Teh Tarik', en: 'Teh tarik: pulled milk tea', ru: 'Тех-тарик: чай с молоком', zh: '拉茶' } },
      { p: 6, n: { id: 'Kuku Bima', en: 'Kuku Bima energy drink', ru: 'Энергетик Kuku Bima', zh: 'Kuku Bima 能量饮料' } },
    ],
  },
];
