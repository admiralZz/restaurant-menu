// Данные меню Kedai Putri.
// Цена p — в тысячах рупий (25 = 25k = Rp 25.000).
// img — файл из img/dishes/ (есть не у всех блюд).
// tag: 'best' — Best Seller, 'fav' — Favorite (как в оригинальном меню).
// guess: true — позиция была закрыта на скриншоте, название угадано. ПРОВЕРИТЬ по живому меню.

window.MENU = [
  {
    id: 'kare', group: 'food', tag: 'best',
    name: { id: 'Kare India', ru: 'Индийское карри', zh: '印度咖喱' },
    items: [
      { p: 34, img: 'kare-ayam-india', n: { id: 'Kare Ayam India', ru: 'Индийское карри с курицей', zh: '印度咖喱鸡' } },
      { p: 30, n: { id: 'Kare Ayam Katsu India', ru: 'Индийское карри с курицей кацу', zh: '印度咖喱炸鸡排' } },
      { p: 60, n: { id: 'Kare Seafood India', ru: 'Индийское карри с морепродуктами', zh: '印度咖喱海鲜' } },
      { p: 28, n: { id: 'Kare Sayur India', ru: 'Индийское овощное карри', zh: '印度咖喱蔬菜' } },
    ],
  },
  {
    id: 'nasi', group: 'food', tag: 'best',
    name: { id: 'Nasi Goreng', ru: 'Жареный рис', zh: '炒饭' },
    items: [
      { p: 28, img: 'nasi-goreng-telur-asin', n: { id: 'Nasi Goreng Telur Asin', ru: 'Жареный рис с солёным яйцом', zh: '咸蛋黄炒饭' } },
      { p: 25, img: 'nasi-goreng-katsu', n: { id: 'Nasi Goreng Katsu', ru: 'Жареный рис с курицей кацу', zh: '日式炸鸡排炒饭' } },
      { p: 25, img: 'nasi-goreng-lada-hitam', n: { id: 'Nasi Goreng Lada Hitam', ru: 'Жареный рис с курицей в чёрном перце', zh: '黑椒鸡炒饭' } },
      { p: 25, img: 'nasi-goreng-ayam-mentega', n: { id: 'Nasi Goreng Ayam Mentega', ru: 'Жареный рис с курицей в сливочном соусе', zh: '黄油鸡炒饭' } },
      { p: 25, n: { id: 'Nasi Goreng Ayam Koloke', ru: 'Жареный рис с кисло-сладкой курицей', zh: '咕咾鸡炒饭' } },
      { p: 30, n: { id: 'Nasi Goreng Seafood', ru: 'Жареный рис с морепродуктами', zh: '海鲜炒饭' } },
      { p: 16, n: { id: 'Nasi Goreng Ayam', ru: 'Жареный рис с курицей', zh: '鸡肉炒饭' } },
      { p: 25, img: 'nasi-goreng-ayam-korea', n: { id: 'Nasi Goreng Ayam Korea', ru: 'Жареный рис с курицей по-корейски', zh: '韩式鸡肉炒饭' } },
    ],
  },
  {
    id: 'ayam', group: 'food',
    name: { id: 'Ayam', ru: 'Курица', zh: '鸡肉' },
    items: [
      { p: 25, tag: 'fav', img: 'ayam-telur-asin', n: { id: 'Ayam Telur Asin', ru: 'Курица в соусе из солёного яйца', zh: '咸蛋黄鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-katsu', n: { id: 'Ayam Katsu', ru: 'Курица кацу', zh: '日式炸鸡排' } },
      { p: 22, tag: 'fav', img: 'ayam-lada-hitam', n: { id: 'Ayam Lada Hitam', ru: 'Курица в соусе из чёрного перца', zh: '黑椒鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-mentega', n: { id: 'Ayam Mentega', ru: 'Курица в сливочном соусе', zh: '黄油鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-korea', n: { id: 'Ayam Korea', ru: 'Курица по-корейски', zh: '韩式炸鸡' } },
      { p: 22, tag: 'fav', n: { id: 'Ayam Koloke', ru: 'Курица в кисло-сладком соусе', zh: '咕咾鸡' } },
      { p: 27, n: { id: 'Ayam Goreng Cabe Kering', ru: 'Жареная курица с сушёным чили', zh: '干辣椒炸鸡' } },
      { p: 25, n: { id: 'Ayam Kremes Paket', ru: 'Сет: курица с хрустящей крошкой', zh: '酥脆炸鸡套餐' } },
      { p: 25, n: { id: 'Ayam Geprek Paket', ru: 'Сет: отбитая курица с самбалом', zh: '印尼辣酱拍鸡套餐' } },
      { p: 25, n: { id: 'Ayam Lalapan Paket', ru: 'Сет: жареная курица со свежими овощами', zh: '炸鸡配鲜蔬套餐' } },
    ],
  },
  {
    id: 'ikan', group: 'food', tag: 'fav',
    name: { id: 'Ikan', ru: 'Рыба', zh: '鱼' },
    items: [
      { p: 55, n: { id: 'Gurami Nyat Nyat', ru: 'Гурами в остром балийском соусе', zh: '巴厘香辣丝足鱼' } },
      { p: 53, n: { id: 'Gurami Terbang', ru: '«Летающий» гурами, жаренный во фритюре', zh: '酥炸“飞天”丝足鱼' } },
      { p: 50, n: { id: 'Gurami Asam Manis', ru: 'Гурами в кисло-сладком соусе', zh: '糖醋丝足鱼' } },
      { p: 40, n: { id: 'Fish and Chips', ru: 'Фиш-энд-чипс', zh: '炸鱼薯条' } },
      { p: 28, n: { id: 'Lele Nyat Nyat', ru: 'Сом в остром балийском соусе', zh: '巴厘香辣鲶鱼' } },
      { p: 24, n: { id: 'Lele Kremes', ru: 'Жареный сом с хрустящей крошкой', zh: '酥脆炸鲶鱼' } },
      { p: 24, n: { id: 'Lele Goreng', ru: 'Жареный сом', zh: '炸鲶鱼' } },
    ],
  },
  {
    id: 'udang', group: 'food',
    name: { id: 'Udang', ru: 'Креветки', zh: '虾' },
    items: [
      { p: 48, n: { id: 'Udang Telur Asin', ru: 'Креветки в соусе из солёного яйца', zh: '咸蛋黄虾' } },
      { p: 43, n: { id: 'Udang Saus Tiram', ru: 'Креветки в устричном соусе', zh: '蚝油虾' } },
      { p: 43, img: 'udang-asam-manis', n: { id: 'Udang Asam Manis', ru: 'Креветки в кисло-сладком соусе', zh: '糖醋虾' } },
      { p: 43, n: { id: 'Udang Saus Mentega', ru: 'Креветки в сливочном соусе', zh: '黄油虾' } },
      { p: 43, n: { id: 'Udang Saus Lada Hitam', ru: 'Креветки в соусе из чёрного перца', zh: '黑椒虾' } },
    ],
  },
  {
    id: 'cumi', group: 'food',
    name: { id: 'Cumi', ru: 'Кальмары', zh: '鱿鱼' },
    items: [
      { p: 46, n: { id: 'Cumi Telur Asin', ru: 'Кальмары в соусе из солёного яйца', zh: '咸蛋黄鱿鱼' } },
      { p: 42, n: { id: 'Cumi Goreng Saus Tartar', ru: 'Жареные кальмары с соусом тартар', zh: '炸鱿鱼配塔塔酱' } },
      { p: 43, n: { id: 'Cumi Asam Manis', ru: 'Кальмары в кисло-сладком соусе', zh: '糖醋鱿鱼' } },
      { p: 43, n: { id: 'Cumi Saus Tiram', ru: 'Кальмары в устричном соусе', zh: '蚝油鱿鱼' } },
    ],
  },
  {
    id: 'mie', group: 'food',
    name: { id: 'Mie & Kwetiau', ru: 'Лапша', zh: '面条' },
    items: [
      { p: 22, n: { id: 'Mie Goreng Ayam', ru: 'Жареная лапша с курицей', zh: '鸡肉炒面' } },
      { p: 30, n: { id: 'Mie Goreng Seafood', ru: 'Жареная лапша с морепродуктами', zh: '海鲜炒面' } },
      { p: 22, n: { id: 'Mie Kuah Ayam', ru: 'Суп-лапша с курицей', zh: '鸡肉汤面' } },
      { p: 30, n: { id: 'Mie Kuah Seafood', ru: 'Суп-лапша с морепродуктами', zh: '海鲜汤面' } },
      { p: 22, n: { id: 'Kwetiau Ayam', ru: 'Широкая рисовая лапша с курицей', zh: '鸡肉炒粿条' } },
      { p: 30, n: { id: 'Kwetiau Seafood', ru: 'Широкая рисовая лапша с морепродуктами', zh: '海鲜炒粿条' } },
    ],
  },
  {
    id: 'bakar', group: 'food',
    name: { id: 'Bakar', ru: 'Гриль', zh: '烧烤' },
    items: [
      { p: 25, n: { id: 'Ayam Bakar', ru: 'Курица на гриле', zh: '印尼烤鸡' } },
      { p: 30, n: { id: 'Sate Ayam', ru: 'Куриный сатай', zh: '沙爹鸡肉串' } },
      { p: 26, n: { id: 'Lele Bakar', ru: 'Сом на гриле', zh: '烤鲶鱼' } },
    ],
  },
  {
    id: 'sup', group: 'food',
    name: { id: 'Sup', ru: 'Супы', zh: '汤' },
    items: [
      { p: 50, n: { id: 'Sup Buntut Biasa', ru: 'Суп из бычьих хвостов', zh: '牛尾汤' } },
      { p: 55, n: { id: 'Sup Buntut Panggang', ru: 'Суп из бычьих хвостов, хвосты на гриле', zh: '烤牛尾汤' } },
      { p: 55, n: { id: 'Sup Buntut Goreng', ru: 'Суп из бычьих хвостов, жареные хвосты', zh: '炸牛尾汤' } },
    ],
  },
  {
    id: 'sayur', group: 'food',
    name: { id: 'Sayuran', ru: 'Овощи', zh: '蔬菜' },
    items: [
      { p: 22, n: { id: 'Cap Cay Ayam', ru: 'Чапчай: тушёные овощи с курицей', zh: '鸡肉杂烩菜' } },
      { p: 30, n: { id: 'Cap Cay Seafood', ru: 'Чапчай: тушёные овощи с морепродуктами', zh: '海鲜杂烩菜' } },
      { p: 20, n: { id: 'Cap Cay Biasa / Polos', ru: 'Чапчай: тушёные овощи', zh: '素杂烩菜' } },
      { p: 14, n: { id: 'Cah Kangkung', ru: 'Жареный водяной шпинат', zh: '清炒空心菜' } },
      { p: 14, n: { id: 'Plecing Kangkung', ru: 'Водяной шпинат с острым самбалом', zh: '辣酱空心菜' } },
      { p: 15, n: { id: 'Buncis Telur Asin', ru: 'Стручковая фасоль с солёным яйцом', zh: '咸蛋黄四季豆' } },
      { p: 24, n: { id: 'Fuyung Hai Sayur', ru: 'Омлет фуюнхай с овощами', zh: '蔬菜芙蓉蛋' } },
      { p: 35, n: { id: 'Fuyung Hai Seafood', ru: 'Омлет фуюнхай с морепродуктами', zh: '海鲜芙蓉蛋' } },
      { p: 15, n: { id: 'Paket 4T: Tahu, Tempe, Telur, Terong', ru: 'Сет «4Т»: тофу, темпе, яйцо, баклажан', zh: '4T套餐：豆腐、天贝、鸡蛋、茄子' } },
    ],
  },
  {
    id: 'salad', group: 'food',
    name: { id: 'Salad', ru: 'Салаты', zh: '沙拉' },
    items: [
      { p: 20, n: { id: 'Garden Salad', ru: 'Овощной салат', zh: '田园沙拉' } },
      { p: 24, n: { id: 'Pasta Salad', ru: 'Салат с пастой', zh: '意面沙拉' } },
      { p: 24, n: { id: 'Potato Salad', ru: 'Картофельный салат', zh: '土豆沙拉' } },
    ],
  },
  {
    id: 'camilan', group: 'food',
    name: { id: 'Camilan', ru: 'Закуски', zh: '小吃' },
    items: [
      { p: 18, n: { id: 'Bombay Goreng Tepung', ru: 'Луковые кольца в кляре', zh: '酥炸洋葱圈' } },
      { p: 12, guess: true, n: { id: 'Tempe Goreng Tepung', ru: 'Темпе в кляре', zh: '酥炸天贝' } },
      { p: 15, guess: true, n: { id: 'Nugget Ayam', ru: 'Куриные наггетсы', zh: '鸡块' } },
      { p: 15, guess: true, n: { id: 'Kentang Goreng', ru: 'Картофель фри', zh: '炸薯条' } },
    ],
  },
  {
    id: 'penutup', group: 'food',
    name: { id: 'Hidangan Penutup', ru: 'Десерты', zh: '甜点' },
    items: [
      { p: 14, n: { id: 'Pisang Goreng Keju', ru: 'Жареные бананы с сыром', zh: '芝士炸香蕉' } },
      { p: 30, n: { id: 'Es Krim Goreng', ru: 'Жареное мороженое', zh: '炸冰淇淋' },
        d: { id: 'Vanilla, Strawberry, Chocolate', ru: 'Ваниль, клубника, шоколад', zh: '香草、草莓、巧克力' } },
      { p: 14, n: { id: 'Buah Potong Campur', ru: 'Фруктовая нарезка', zh: '什锦水果拼盘' } },
    ],
  },

  // ---------- Напитки ----------
  {
    id: 'jus', group: 'drink',
    name: { id: 'Aneka Jus', ru: 'Свежие соки', zh: '鲜榨果汁' },
    items: [
      { p: 10, n: { id: 'Jus Alpokat', ru: 'Сок из авокадо', zh: '牛油果汁' } },
      { p: 10, n: { id: 'Jus Mangga', ru: 'Манговый сок', zh: '芒果汁' } },
      { p: 12, n: { id: 'Jus Stroberi', ru: 'Клубничный сок', zh: '草莓汁' } },
      { p: 6, n: { id: 'Jus Pepaya', ru: 'Сок из папайи', zh: '木瓜汁' } },
      { p: 6, n: { id: 'Jus Nanas', ru: 'Ананасовый сок', zh: '菠萝汁' } },
      { p: 6, n: { id: 'Jus Semangka', ru: 'Арбузный сок', zh: '西瓜汁' } },
      { p: 6, n: { id: 'Jus Melon', ru: 'Дынный сок', zh: '蜜瓜汁' } },
      { p: 10, n: { id: 'Jus Buah Naga', ru: 'Сок из питахайи', zh: '火龙果汁' } },
      { p: 6, n: { id: 'Jus Jeruk (Lokal)', ru: 'Апельсиновый сок (местные апельсины)', zh: '本地橙汁' } },
      { p: 10, n: { id: 'Jus Wortel', ru: 'Морковный сок', zh: '胡萝卜汁' } },
      { p: 6, n: { id: 'Jus Tomat', ru: 'Томатный сок', zh: '番茄汁' } },
    ],
  },
  {
    id: 'es', group: 'drink',
    name: { id: 'Aneka Es', ru: 'Холодные напитки', zh: '冰饮' },
    items: [
      { p: 10, n: { id: 'Es Campur', ru: 'Эс-чампур: ассорти со льдом', zh: '什锦刨冰' } },
      { p: 12, n: { id: 'Es Buah', ru: 'Фрукты со льдом и сиропом', zh: '水果冰' } },
      { p: 12, n: { id: 'Es Teler', ru: 'Эс-телер: авокадо, кокос, джекфрут со льдом', zh: '椰奶水果冰' } },
      { p: 8, n: { id: 'Es Kelapa Muda', ru: 'Молодой кокос со льдом', zh: '冰鲜椰子' } },
      { p: 4, n: { id: 'Es Gula', ru: 'Сладкая вода со льдом', zh: '冰糖水' } },
      { p: 4, n: { id: 'Es Teh', ru: 'Холодный чай', zh: '冰茶' } },
      { p: 6, n: { id: 'Es Susu', ru: 'Холодное молоко', zh: '冰牛奶' } },
      { p: 10, n: { id: 'Es Jeruk + Kelapa', ru: 'Апельсин с кокосом со льдом', zh: '冰橙子椰子' } },
      { p: 7, n: { id: 'Es Teh Lemon', ru: 'Холодный чай с лимоном', zh: '冰柠檬茶' } },
    ],
  },
  {
    id: 'shake', group: 'drink',
    name: { id: 'Milk Shake', ru: 'Милкшейки', zh: '奶昔' },
    items: [
      { p: 16, n: { id: 'Vanilla Milk Shake', ru: 'Ванильный милкшейк', zh: '香草奶昔' } },
      { p: 16, n: { id: 'Strawberry Milk Shake', ru: 'Клубничный милкшейк', zh: '草莓奶昔' } },
      { p: 16, n: { id: 'Chocolate Milk Shake', ru: 'Шоколадный милкшейк', zh: '巧克力奶昔' } },
    ],
  },
  {
    id: 'kopi', group: 'drink',
    name: { id: 'Kopi', ru: 'Кофе', zh: '咖啡' },
    items: [
      { p: 6, n: { id: 'Kopi Bali', ru: 'Балийский кофе', zh: '巴厘咖啡' } },
      { p: 6, n: { id: 'Kopi Good Day', ru: 'Кофе Good Day', zh: 'Good Day 咖啡' } },
      { p: 6, n: { id: 'Kopi ABC', ru: 'Кофе ABC', zh: 'ABC 咖啡' } },
      { p: 6, n: { id: 'Kopi Kapal Api', ru: 'Кофе Kapal Api', zh: 'Kapal Api 咖啡' } },
      { p: 6, n: { id: 'Kopi Luwak', ru: 'Кофе Luwak', zh: 'Luwak 咖啡' } },
      { p: 6, n: { id: 'Nescafe', ru: 'Nescafé', zh: '雀巢咖啡' } },
      { p: 6, n: { id: 'Kopi Gula Aren', ru: 'Кофе с пальмовым сахаром', zh: '椰糖咖啡' } },
    ],
  },
  {
    id: 'energi', group: 'drink',
    name: { id: 'Energi & Teh', ru: 'Энергетики и чай', zh: '能量饮品与茶' },
    items: [
      { p: 6, n: { id: 'Josu', ru: 'Josu: энергетик Extra Joss с молоком', zh: 'Josu（Extra Joss 加牛奶）' } },
      { p: 4, n: { id: 'Extra Joss', ru: 'Энергетик Extra Joss', zh: 'Extra Joss 能量饮料' } },
      { p: 6, n: { id: 'Kuku Bima', ru: 'Энергетик Kuku Bima', zh: 'Kuku Bima 能量饮料' } },
      { p: 6, n: { id: 'Teh Tarik', ru: 'Тех-тарик: чай с молоком', zh: '拉茶' } },
    ],
  },
];
