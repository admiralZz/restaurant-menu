// Данные меню Kedai Putri.
// Цена p — в тысячах рупий (25 = 25k = Rp 25.000).
// img — файл из img/dishes/ (есть не у всех блюд).
// tag: 'best' — Best Seller, 'fav' — Favorite (как в оригинальном меню).
// guess: true — позиция была закрыта на скриншоте, название угадано. ПРОВЕРИТЬ по живому меню.
// Языки: id — оригинал, en, ru, zh.

window.MENU = [
  {
    id: 'kare', group: 'food', tag: 'best',
    name: { id: 'Kare India', en: 'Indian Curry', ru: 'Индийское карри', zh: '印度咖喱' },
    items: [
      { p: 34, img: 'kare-ayam-india', n: { id: 'Kare Ayam India', en: 'Indian chicken curry', ru: 'Индийское карри с курицей', zh: '印度咖喱鸡' } },
      { p: 30, n: { id: 'Kare Ayam Katsu India', en: 'Indian curry with chicken katsu', ru: 'Индийское карри с курицей кацу', zh: '印度咖喱炸鸡排' } },
      { p: 60, n: { id: 'Kare Seafood India', en: 'Indian seafood curry', ru: 'Индийское карри с морепродуктами', zh: '印度咖喱海鲜' } },
      { p: 28, n: { id: 'Kare Sayur India', en: 'Indian vegetable curry', ru: 'Индийское овощное карри', zh: '印度咖喱蔬菜' } },
    ],
  },
  {
    id: 'nasi', group: 'food', tag: 'best',
    name: { id: 'Nasi Goreng', en: 'Fried Rice', ru: 'Жареный рис', zh: '炒饭' },
    items: [
      { p: 28, img: 'nasi-goreng-telur-asin', n: { id: 'Nasi Goreng Telur Asin', en: 'Fried rice with salted egg', ru: 'Жареный рис с солёным яйцом', zh: '咸蛋黄炒饭' } },
      { p: 25, img: 'nasi-goreng-katsu', n: { id: 'Nasi Goreng Katsu', en: 'Fried rice with chicken katsu', ru: 'Жареный рис с курицей кацу', zh: '日式炸鸡排炒饭' } },
      { p: 25, img: 'nasi-goreng-lada-hitam', n: { id: 'Nasi Goreng Lada Hitam', en: 'Fried rice with black pepper chicken', ru: 'Жареный рис с курицей в чёрном перце', zh: '黑椒鸡炒饭' } },
      { p: 25, img: 'nasi-goreng-ayam-mentega', n: { id: 'Nasi Goreng Ayam Mentega', en: 'Fried rice with butter chicken', ru: 'Жареный рис с курицей в сливочном соусе', zh: '黄油鸡炒饭' } },
      { p: 25, n: { id: 'Nasi Goreng Ayam Koloke', en: 'Fried rice with sweet & sour chicken', ru: 'Жареный рис с кисло-сладкой курицей', zh: '咕咾鸡炒饭' } },
      { p: 30, n: { id: 'Nasi Goreng Seafood', en: 'Seafood fried rice', ru: 'Жареный рис с морепродуктами', zh: '海鲜炒饭' } },
      { p: 16, n: { id: 'Nasi Goreng Ayam', en: 'Chicken fried rice', ru: 'Жареный рис с курицей', zh: '鸡肉炒饭' } },
      { p: 25, img: 'nasi-goreng-ayam-korea', n: { id: 'Nasi Goreng Ayam Korea', en: 'Fried rice with Korean chicken', ru: 'Жареный рис с курицей по-корейски', zh: '韩式鸡肉炒饭' } },
    ],
  },
  {
    id: 'ayam', group: 'food',
    name: { id: 'Ayam', en: 'Chicken', ru: 'Курица', zh: '鸡肉' },
    items: [
      { p: 25, tag: 'fav', img: 'ayam-telur-asin', n: { id: 'Ayam Telur Asin', en: 'Salted egg chicken', ru: 'Курица в соусе из солёного яйца', zh: '咸蛋黄鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-katsu', n: { id: 'Ayam Katsu', en: 'Chicken katsu', ru: 'Курица кацу', zh: '日式炸鸡排' } },
      { p: 22, tag: 'fav', img: 'ayam-lada-hitam', n: { id: 'Ayam Lada Hitam', en: 'Black pepper chicken', ru: 'Курица в соусе из чёрного перца', zh: '黑椒鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-mentega', n: { id: 'Ayam Mentega', en: 'Butter chicken', ru: 'Курица в сливочном соусе', zh: '黄油鸡' } },
      { p: 22, tag: 'fav', img: 'ayam-korea', n: { id: 'Ayam Korea', en: 'Korean chicken', ru: 'Курица по-корейски', zh: '韩式炸鸡' } },
      { p: 22, tag: 'fav', n: { id: 'Ayam Koloke', en: 'Sweet & sour chicken', ru: 'Курица в кисло-сладком соусе', zh: '咕咾鸡' } },
      { p: 27, n: { id: 'Ayam Goreng Cabe Kering', en: 'Fried chicken with dried chili', ru: 'Жареная курица с сушёным чили', zh: '干辣椒炸鸡' } },
      { p: 25, n: { id: 'Ayam Kremes Paket', en: 'Set: fried chicken with crispy crumbs', ru: 'Сет: курица с хрустящей крошкой', zh: '酥脆炸鸡套餐' } },
      { p: 25, n: { id: 'Ayam Geprek Paket', en: 'Set: smashed fried chicken with sambal', ru: 'Сет: отбитая курица с самбалом', zh: '印尼辣酱拍鸡套餐' } },
      { p: 25, n: { id: 'Ayam Lalapan Paket', en: 'Set: fried chicken with fresh veggies & sambal', ru: 'Сет: жареная курица со свежими овощами', zh: '炸鸡配鲜蔬套餐' } },
    ],
  },
  {
    id: 'ikan', group: 'food', tag: 'fav',
    name: { id: 'Ikan', en: 'Fish', ru: 'Рыба', zh: '鱼' },
    items: [
      { p: 55, n: { id: 'Gurami Nyat Nyat', en: 'Gourami in spicy Balinese sauce', ru: 'Гурами в остром балийском соусе', zh: '巴厘香辣丝足鱼' } },
      { p: 53, n: { id: 'Gurami Terbang', en: '"Flying" deep-fried gourami', ru: '«Летающий» гурами, жаренный во фритюре', zh: '酥炸“飞天”丝足鱼' } },
      { p: 50, n: { id: 'Gurami Asam Manis', en: 'Sweet & sour gourami', ru: 'Гурами в кисло-сладком соусе', zh: '糖醋丝足鱼' } },
      { p: 40, n: { id: 'Fish and Chips', en: 'Fish and chips', ru: 'Фиш-энд-чипс', zh: '炸鱼薯条' } },
      { p: 28, n: { id: 'Lele Nyat Nyat', en: 'Catfish in spicy Balinese sauce', ru: 'Сом в остром балийском соусе', zh: '巴厘香辣鲶鱼' } },
      { p: 24, n: { id: 'Lele Kremes', en: 'Fried catfish with crispy crumbs', ru: 'Жареный сом с хрустящей крошкой', zh: '酥脆炸鲶鱼' } },
      { p: 24, n: { id: 'Lele Goreng', en: 'Fried catfish', ru: 'Жареный сом', zh: '炸鲶鱼' } },
    ],
  },
  {
    id: 'udang', group: 'food',
    name: { id: 'Udang', en: 'Shrimp', ru: 'Креветки', zh: '虾' },
    items: [
      { p: 48, n: { id: 'Udang Telur Asin', en: 'Salted egg shrimp', ru: 'Креветки в соусе из солёного яйца', zh: '咸蛋黄虾' } },
      { p: 43, n: { id: 'Udang Saus Tiram', en: 'Shrimp in oyster sauce', ru: 'Креветки в устричном соусе', zh: '蚝油虾' } },
      { p: 43, img: 'udang-asam-manis', n: { id: 'Udang Asam Manis', en: 'Sweet & sour shrimp', ru: 'Креветки в кисло-сладком соусе', zh: '糖醋虾' } },
      { p: 43, n: { id: 'Udang Saus Mentega', en: 'Butter shrimp', ru: 'Креветки в сливочном соусе', zh: '黄油虾' } },
      { p: 43, n: { id: 'Udang Saus Lada Hitam', en: 'Shrimp in black pepper sauce', ru: 'Креветки в соусе из чёрного перца', zh: '黑椒虾' } },
    ],
  },
  {
    id: 'cumi', group: 'food',
    name: { id: 'Cumi', en: 'Squid', ru: 'Кальмары', zh: '鱿鱼' },
    items: [
      { p: 46, n: { id: 'Cumi Telur Asin', en: 'Salted egg squid', ru: 'Кальмары в соусе из солёного яйца', zh: '咸蛋黄鱿鱼' } },
      { p: 42, n: { id: 'Cumi Goreng Saus Tartar', en: 'Fried squid with tartar sauce', ru: 'Жареные кальмары с соусом тартар', zh: '炸鱿鱼配塔塔酱' } },
      { p: 43, n: { id: 'Cumi Asam Manis', en: 'Sweet & sour squid', ru: 'Кальмары в кисло-сладком соусе', zh: '糖醋鱿鱼' } },
      { p: 43, n: { id: 'Cumi Saus Tiram', en: 'Squid in oyster sauce', ru: 'Кальмары в устричном соусе', zh: '蚝油鱿鱼' } },
    ],
  },
  {
    id: 'mie', group: 'food',
    name: { id: 'Mie & Kwetiau', en: 'Noodles', ru: 'Лапша', zh: '面条' },
    items: [
      { p: 22, n: { id: 'Mie Goreng Ayam', en: 'Chicken fried noodles', ru: 'Жареная лапша с курицей', zh: '鸡肉炒面' } },
      { p: 30, n: { id: 'Mie Goreng Seafood', en: 'Seafood fried noodles', ru: 'Жареная лапша с морепродуктами', zh: '海鲜炒面' } },
      { p: 22, n: { id: 'Mie Kuah Ayam', en: 'Chicken noodle soup', ru: 'Суп-лапша с курицей', zh: '鸡肉汤面' } },
      { p: 30, n: { id: 'Mie Kuah Seafood', en: 'Seafood noodle soup', ru: 'Суп-лапша с морепродуктами', zh: '海鲜汤面' } },
      { p: 22, n: { id: 'Kwetiau Ayam', en: 'Flat rice noodles with chicken', ru: 'Широкая рисовая лапша с курицей', zh: '鸡肉炒粿条' } },
      { p: 30, n: { id: 'Kwetiau Seafood', en: 'Flat rice noodles with seafood', ru: 'Широкая рисовая лапша с морепродуктами', zh: '海鲜炒粿条' } },
    ],
  },
  {
    id: 'bakar', group: 'food',
    name: { id: 'Bakar', en: 'Grilled', ru: 'Гриль', zh: '烧烤' },
    items: [
      { p: 25, n: { id: 'Ayam Bakar', en: 'Grilled chicken', ru: 'Курица на гриле', zh: '印尼烤鸡' } },
      { p: 30, n: { id: 'Sate Ayam', en: 'Chicken satay', ru: 'Куриный сатай', zh: '沙爹鸡肉串' } },
      { p: 26, n: { id: 'Lele Bakar', en: 'Grilled catfish', ru: 'Сом на гриле', zh: '烤鲶鱼' } },
    ],
  },
  {
    id: 'sup', group: 'food',
    name: { id: 'Sup', en: 'Soups', ru: 'Супы', zh: '汤' },
    items: [
      { p: 50, n: { id: 'Sup Buntut Biasa', en: 'Oxtail soup', ru: 'Суп из бычьих хвостов', zh: '牛尾汤' } },
      { p: 55, n: { id: 'Sup Buntut Panggang', en: 'Oxtail soup with grilled oxtail', ru: 'Суп из бычьих хвостов, хвосты на гриле', zh: '烤牛尾汤' } },
      { p: 55, n: { id: 'Sup Buntut Goreng', en: 'Oxtail soup with fried oxtail', ru: 'Суп из бычьих хвостов, жареные хвосты', zh: '炸牛尾汤' } },
    ],
  },
  {
    id: 'sayur', group: 'food',
    name: { id: 'Sayuran', en: 'Vegetables', ru: 'Овощи', zh: '蔬菜' },
    items: [
      { p: 22, n: { id: 'Cap Cay Ayam', en: 'Stir-fried mixed vegetables with chicken', ru: 'Чапчай: тушёные овощи с курицей', zh: '鸡肉杂烩菜' } },
      { p: 30, n: { id: 'Cap Cay Seafood', en: 'Stir-fried mixed vegetables with seafood', ru: 'Чапчай: тушёные овощи с морепродуктами', zh: '海鲜杂烩菜' } },
      { p: 20, n: { id: 'Cap Cay Biasa / Polos', en: 'Stir-fried mixed vegetables', ru: 'Чапчай: тушёные овощи', zh: '素杂烩菜' } },
      { p: 14, n: { id: 'Cah Kangkung', en: 'Stir-fried water spinach', ru: 'Жареный водяной шпинат', zh: '清炒空心菜' } },
      { p: 14, n: { id: 'Plecing Kangkung', en: 'Water spinach with spicy sambal', ru: 'Водяной шпинат с острым самбалом', zh: '辣酱空心菜' } },
      { p: 15, n: { id: 'Buncis Telur Asin', en: 'Green beans with salted egg', ru: 'Стручковая фасоль с солёным яйцом', zh: '咸蛋黄四季豆' } },
      { p: 24, n: { id: 'Fuyung Hai Sayur', en: 'Fu yung hai omelette with vegetables', ru: 'Омлет фуюнхай с овощами', zh: '蔬菜芙蓉蛋' } },
      { p: 35, n: { id: 'Fuyung Hai Seafood', en: 'Fu yung hai omelette with seafood', ru: 'Омлет фуюнхай с морепродуктами', zh: '海鲜芙蓉蛋' } },
      { p: 15, n: { id: 'Paket 4T: Tahu, Tempe, Telur, Terong', en: '"4T" set: tofu, tempeh, egg, eggplant', ru: 'Сет «4Т»: тофу, темпе, яйцо, баклажан', zh: '4T套餐：豆腐、天贝、鸡蛋、茄子' } },
    ],
  },
  {
    id: 'salad', group: 'food',
    name: { id: 'Salad', en: 'Salads', ru: 'Салаты', zh: '沙拉' },
    items: [
      { p: 20, n: { id: 'Garden Salad', en: 'Garden salad', ru: 'Овощной салат', zh: '田园沙拉' } },
      { p: 24, n: { id: 'Pasta Salad', en: 'Pasta salad', ru: 'Салат с пастой', zh: '意面沙拉' } },
      { p: 24, n: { id: 'Potato Salad', en: 'Potato salad', ru: 'Картофельный салат', zh: '土豆沙拉' } },
    ],
  },
  {
    id: 'camilan', group: 'food',
    name: { id: 'Camilan', en: 'Snacks', ru: 'Закуски', zh: '小吃' },
    items: [
      { p: 18, n: { id: 'Bombay Goreng Tepung', en: 'Battered onion rings', ru: 'Луковые кольца в кляре', zh: '酥炸洋葱圈' } },
      { p: 12, guess: true, n: { id: 'Tempe Goreng Tepung', en: 'Battered fried tempeh', ru: 'Темпе в кляре', zh: '酥炸天贝' } },
      { p: 15, guess: true, n: { id: 'Nugget Ayam', en: 'Chicken nuggets', ru: 'Куриные наггетсы', zh: '鸡块' } },
      { p: 15, guess: true, n: { id: 'Kentang Goreng', en: 'French fries', ru: 'Картофель фри', zh: '炸薯条' } },
    ],
  },
  {
    id: 'penutup', group: 'food',
    name: { id: 'Hidangan Penutup', en: 'Desserts', ru: 'Десерты', zh: '甜点' },
    items: [
      { p: 14, n: { id: 'Pisang Goreng Keju', en: 'Fried banana with cheese', ru: 'Жареные бананы с сыром', zh: '芝士炸香蕉' } },
      { p: 30, n: { id: 'Es Krim Goreng', en: 'Fried ice cream', ru: 'Жареное мороженое', zh: '炸冰淇淋' },
        d: { id: 'Vanilla, Strawberry, Chocolate', en: 'Vanilla, strawberry, chocolate', ru: 'Ваниль, клубника, шоколад', zh: '香草、草莓、巧克力' } },
      { p: 14, n: { id: 'Buah Potong Campur', en: 'Mixed fruit platter', ru: 'Фруктовая нарезка', zh: '什锦水果拼盘' } },
    ],
  },

  // ---------- Напитки ----------
  {
    id: 'jus', group: 'drink',
    name: { id: 'Aneka Jus', en: 'Fresh Juices', ru: 'Свежие соки', zh: '鲜榨果汁' },
    items: [
      { p: 10, n: { id: 'Jus Alpokat', en: 'Avocado juice', ru: 'Сок из авокадо', zh: '牛油果汁' } },
      { p: 10, n: { id: 'Jus Mangga', en: 'Mango juice', ru: 'Манговый сок', zh: '芒果汁' } },
      { p: 12, n: { id: 'Jus Stroberi', en: 'Strawberry juice', ru: 'Клубничный сок', zh: '草莓汁' } },
      { p: 6, n: { id: 'Jus Pepaya', en: 'Papaya juice', ru: 'Сок из папайи', zh: '木瓜汁' } },
      { p: 6, n: { id: 'Jus Nanas', en: 'Pineapple juice', ru: 'Ананасовый сок', zh: '菠萝汁' } },
      { p: 6, n: { id: 'Jus Semangka', en: 'Watermelon juice', ru: 'Арбузный сок', zh: '西瓜汁' } },
      { p: 6, n: { id: 'Jus Melon', en: 'Honeydew melon juice', ru: 'Дынный сок', zh: '蜜瓜汁' } },
      { p: 10, n: { id: 'Jus Buah Naga', en: 'Dragon fruit juice', ru: 'Сок из питахайи', zh: '火龙果汁' } },
      { p: 6, n: { id: 'Jus Jeruk (Lokal)', en: 'Orange juice (local oranges)', ru: 'Апельсиновый сок (местные апельсины)', zh: '本地橙汁' } },
      { p: 10, n: { id: 'Jus Wortel', en: 'Carrot juice', ru: 'Морковный сок', zh: '胡萝卜汁' } },
      { p: 6, n: { id: 'Jus Tomat', en: 'Tomato juice', ru: 'Томатный сок', zh: '番茄汁' } },
    ],
  },
  {
    id: 'es', group: 'drink',
    name: { id: 'Aneka Es', en: 'Iced Drinks', ru: 'Холодные напитки', zh: '冰饮' },
    items: [
      { p: 10, n: { id: 'Es Campur', en: 'Es campur: mixed shaved ice dessert', ru: 'Эс-чампур: ассорти со льдом', zh: '什锦刨冰' } },
      { p: 12, n: { id: 'Es Buah', en: 'Iced fruit with syrup', ru: 'Фрукты со льдом и сиропом', zh: '水果冰' } },
      { p: 12, n: { id: 'Es Teler', en: 'Es teler: avocado, coconut, jackfruit on ice', ru: 'Эс-телер: авокадо, кокос, джекфрут со льдом', zh: '椰奶水果冰' } },
      { p: 8, n: { id: 'Es Kelapa Muda', en: 'Iced young coconut', ru: 'Молодой кокос со льдом', zh: '冰鲜椰子' } },
      { p: 4, n: { id: 'Es Gula', en: 'Iced sweet water', ru: 'Сладкая вода со льдом', zh: '冰糖水' } },
      { p: 4, n: { id: 'Es Teh', en: 'Iced tea', ru: 'Холодный чай', zh: '冰茶' } },
      { p: 6, n: { id: 'Es Susu', en: 'Iced milk', ru: 'Холодное молоко', zh: '冰牛奶' } },
      { p: 10, n: { id: 'Es Jeruk + Kelapa', en: 'Iced orange & coconut', ru: 'Апельсин с кокосом со льдом', zh: '冰橙子椰子' } },
      { p: 7, n: { id: 'Es Teh Lemon', en: 'Iced lemon tea', ru: 'Холодный чай с лимоном', zh: '冰柠檬茶' } },
    ],
  },
  {
    id: 'shake', group: 'drink',
    name: { id: 'Milk Shake', en: 'Milkshakes', ru: 'Милкшейки', zh: '奶昔' },
    items: [
      { p: 16, n: { id: 'Vanilla Milk Shake', en: 'Vanilla milkshake', ru: 'Ванильный милкшейк', zh: '香草奶昔' } },
      { p: 16, n: { id: 'Strawberry Milk Shake', en: 'Strawberry milkshake', ru: 'Клубничный милкшейк', zh: '草莓奶昔' } },
      { p: 16, n: { id: 'Chocolate Milk Shake', en: 'Chocolate milkshake', ru: 'Шоколадный милкшейк', zh: '巧克力奶昔' } },
    ],
  },
  {
    id: 'kopi', group: 'drink',
    name: { id: 'Kopi', en: 'Coffee', ru: 'Кофе', zh: '咖啡' },
    items: [
      { p: 6, n: { id: 'Kopi Bali', en: 'Balinese coffee', ru: 'Балийский кофе', zh: '巴厘咖啡' } },
      { p: 6, n: { id: 'Kopi Good Day', en: 'Good Day coffee', ru: 'Кофе Good Day', zh: 'Good Day 咖啡' } },
      { p: 6, n: { id: 'Kopi ABC', en: 'ABC coffee', ru: 'Кофе ABC', zh: 'ABC 咖啡' } },
      { p: 6, n: { id: 'Kopi Kapal Api', en: 'Kapal Api coffee', ru: 'Кофе Kapal Api', zh: 'Kapal Api 咖啡' } },
      { p: 6, n: { id: 'Kopi Luwak', en: 'Luwak coffee', ru: 'Кофе Luwak', zh: 'Luwak 咖啡' } },
      { p: 6, n: { id: 'Nescafe', en: 'Nescafé', ru: 'Nescafé', zh: '雀巢咖啡' } },
      { p: 6, n: { id: 'Kopi Gula Aren', en: 'Coffee with palm sugar', ru: 'Кофе с пальмовым сахаром', zh: '椰糖咖啡' } },
    ],
  },
  {
    id: 'energi', group: 'drink',
    name: { id: 'Energi & Teh', en: 'Energy Drinks & Tea', ru: 'Энергетики и чай', zh: '能量饮品与茶' },
    items: [
      { p: 6, n: { id: 'Josu', en: 'Josu: Extra Joss energy drink with milk', ru: 'Josu: энергетик Extra Joss с молоком', zh: 'Josu（Extra Joss 加牛奶）' } },
      { p: 4, n: { id: 'Extra Joss', en: 'Extra Joss energy drink', ru: 'Энергетик Extra Joss', zh: 'Extra Joss 能量饮料' } },
      { p: 6, n: { id: 'Kuku Bima', en: 'Kuku Bima energy drink', ru: 'Энергетик Kuku Bima', zh: 'Kuku Bima 能量饮料' } },
      { p: 6, n: { id: 'Teh Tarik', en: 'Teh tarik: pulled milk tea', ru: 'Тех-тарик: чай с молоком', zh: '拉茶' } },
    ],
  },
];
