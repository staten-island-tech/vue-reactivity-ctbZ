const switches = [
    {
      Name: "Gateron Oil King",
      Type: "Linear",
      Brand: "Gateron",
      Price: "0.65",
      IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/gateron-oil-king-linear-switches-389141.jpg?v=1642045846",
    },
    {
        Name: "Gateron CJ",
        Type: "Linear",
        Brand: "Gateron",
        Price: "0.60",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/gateron-cj-linear-switches-999313.jpg?v=1635297021",
      },
    {
        Name: "Novelkeys Cream",
        Type: "Linear",
        Brand: "Cream",
        Price: "0.65",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/novelkeys-cream-linear-switches-709492.jpg?v=1671203961",
      },
    {
        Name: "Tecsee Mango Ice",
        Type: "Tactile",
        Brand: "Tecsee",
        Price: "0.60",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/tecsee-mango-ice-tactile-switches-965246.webp?v=1658571605",
      },
    {
        Name: "43 Studio RARA V2",
        Type: "Tactile",
        Brand: "43 Studio",
        Price: "0.56",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/43-studio-rara-v2-tactile-switches-942470.jpg?v=1636162224",
      },
    {
        Name: "Jwick Taro",
        Type: "Tactile",
        Brand: "Jwick",
        Price: "0.55",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/jwick-taro-tactile-switches-289188.webp?v=1657619539",
      },
    {
        Name: "Kailh Box Jade",
        Type: "Clicky",
        Brand: "Kailh",
        Price: "0.35",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/kailh-box-jade-thick-switches-500562.jpg?v=1609901920",
      },
    {
        Name: "Owlab Neon",
        Type: "Linear",
        Brand: "Owlab",
        Price: "0.58",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/owlab-neon-linear-switches-227751.webp?v=1664497965",
      },
    {
        Name: "C³Equalz X TKC Kiwi",
        Type: "Tactile",
        Brand: "C³Equalz",
        Price: "0.65",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/c3equalz-x-tkc-kiwi-tactile-switches-531629.jpg?v=1629413711",
      },
    {
        Name: "Gateron North Pole V2",
        Type: "Linear",
        Brand: "Gateron",
        Price: "0.68",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/gateron-north-pole-v2-linear-switches-132473.webp?v=1671073908",
      },
    {
        Name: "Kailh BOX V2 White",
        Type: "Clicky",
        Brand: "Kailh",
        Price: "0.30",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/kailh-box-v2-white-clicky-switches-726673.webp?v=1654807637",
      },
    {
        Name: "SP-Star Meteor White",
        Type: "Linear",
        Brand: "SP-Star",
        Price: "0.51",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/sp-star-meteor-white-linear-switches-414631.jpg?v=1640142269",
      },
    {
        Name: "43 Studio Obsidian Long",
        Type: "Linear",
        Brand: "43 Studio",
        Price: "0.65",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/43-studio-obsidian-long-linear-switches-832889.webp?v=1668045171",
      },
    {
        Name: "AEboards Naevy R2.1",
        Type: "Tactile",
        Brand: "AEboards",
        Price: "0.45",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/aeboards-naevy-r2-tactile-switches-342881.webp?v=1656581173",
      },
    {
        Name: "Gateron Baby Kangaroo",
        Type: "Tactile",
        Brand: "Gateron",
        Price: "0.60",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/gateron-baby-kangaroo-tactile-switches-618322.webp?v=1659436387",
      },
    {
        Name: "Durock POM",
        Type: "Linear",
        Brand: "Durock",
        Price: "0.67",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/durock-pom-linear-switches-732242.jpg?v=1636162223",
      },
    {
        Name: "C³Equalz X TKC Tangerine",
        Type: "Linear",
        Brand: "C³Equalz",
        Price: "0.65",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/c3equalz-x-tkc-tangerine-linear-switches-145416.jpg?v=1634691412",
      },
    {
        Name: "Akko Snow Blue Gray",
        Type: "Linear",
        Brand: "Akko",
        Price: "0.38",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/akko-snow-blue-gray-linear-switches-833909.webp?v=1670468204",
      },
    {
        Name: "Jwick Ginger Milk",
        Type: "Linear",
        Brand: "Jwick",
        Price: "0.55",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/jwick-ginger-milk-linear-switches-725229.webp?v=1657619533",
      },
    {
        Name: "C³Equalz X TKC Dragon Fruit",
        Type: "Tactile",
        Brand: "C³Equalz",
        Price: "0.65",
        IMG: "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/c3equalz-x-tkc-dragon-fruit-tactile-switches-417109.jpg?v=1634691406",
      },
  ];