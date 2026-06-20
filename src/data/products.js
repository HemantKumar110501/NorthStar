const staticProducts = [
  // Discover New Arrivals (8 Original + 8 New)
  {
    id: 'black-polo-shirt',
    name: 'Plain White Shirt',
    price: 29.00,
    originalPrice: null,
    image: '/new_arrival_1.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'Cotton', 'Black'],
    rating: 5,
    reviewsCount: 15,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'blue-sweatshirt',
    name: 'Denim Jacket',
    price: 69.00,
    originalPrice: null,
    image: '/new_arrival_2.jpg',
    category: 'Women, Sweatshirt, Cozy',
    tags: ['Sweatshirt', 'Blue', 'Warm'],
    rating: 5,
    reviewsCount: 22,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'blue-t-shirt',
    name: 'Black Polo Shirt',
    price: 49.00,
    originalPrice: null,
    image: '/new_arrival_3.jpg',
    category: 'Men, T-shirt, Casual',
    tags: ['T-shirt', 'Blue', 'Basic'],
    rating: 4,
    reviewsCount: 12,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'green-sweatshirt',
    name: 'Blue Sweatshirt',
    price: 79.00,
    originalPrice: null,
    image: '/new_arrival_4.png',
    category: 'Women, Sweatshirt, Cozy',
    tags: ['Sweatshirt', 'Green', 'Warm'],
    rating: 5,
    reviewsCount: 18,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'beige-polo-shirt',
    name: 'Blue Plain Shirt',
    price: 49.00,
    originalPrice: null,
    image: '/new_arrival_5.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'Cotton', 'Beige'],
    rating: 5,
    reviewsCount: 9,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'grey-t-shirt',
    name: 'Dark Blue Shirt',
    price: 89.00,
    originalPrice: null,
    image: '/new_arrival_6.png',
    category: 'Men, T-shirt, Casual',
    tags: ['T-shirt', 'Grey', 'Basic'],
    rating: 4,
    reviewsCount: 14,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'red-polo-shirt',
    name: 'Outcast T Shirt',
    price: 19.00,
    originalPrice: null,
    image: '/new_arrival_7.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'Red', 'Cotton'],
    rating: 5,
    reviewsCount: 20,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'light-blue-polo',
    name: 'Polo Plain Shirt',
    price: 29.00,
    originalPrice: null,
    image: '/new_arrival_8.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'Light Blue', 'Cotton'],
    rating: 5,
    reviewsCount: 11,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'new-arrivals'
  },
  {
    id: 'wool-scarf-winter',
    name: 'Cashmere Wool Scarf',
    price: 35.00,
    originalPrice: 45.00,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Accessories, Winter',
    tags: ['Scarf', 'Wool', 'Cozy'],
    rating: 5,
    reviewsCount: 16,
    description: 'Wrap yourself in absolute luxury. This cashmere wool scarf offers unmatched softness and warmth for cold winter days, with fine fringed details on the borders.',
    section: 'new-arrivals'
  },
  {
    id: 'knit-beanie-cozy',
    name: 'Classic Knit Beanie',
    price: 18.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Accessories, Cozy',
    tags: ['Beanie', 'Knit', 'Cozy'],
    rating: 4,
    reviewsCount: 31,
    description: 'A stretchable and warm knit beanie designed to stay snug. Features a classic cuffed look and a heavy ribbed knit pattern that keeps ears warm.',
    section: 'new-arrivals'
  },
  {
    id: 'mens-cotton-tshirt',
    name: 'Premium Cotton Tee',
    price: 24.00,
    originalPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    category: 'Men, T-shirt, Casual',
    tags: ['T-shirt', 'Cotton', 'Basic'],
    rating: 5,
    reviewsCount: 14,
    description: 'An essential crewneck tee crafted from 100% premium long-staple cotton. Exceptionally soft, durable, and styled for a modern clean silhouette.',
    section: 'new-arrivals'
  },
  {
    id: 'women-denim-skirt',
    name: 'Denim Button Skirt',
    price: 48.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Skirt, Denim',
    tags: ['Skirt', 'Denim', 'Blue'],
    rating: 4,
    reviewsCount: 20,
    description: 'A classic high-waisted denim skirt featuring front button closures and functional pockets. Stretched denim fabric ensures flexibility and style.',
    section: 'new-arrivals'
  },
  {
    id: 'cotton-cargo-shorts',
    name: 'Vintage Cargo Shorts',
    price: 38.00,
    originalPrice: 48.00,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Shorts, Casual',
    tags: ['Shorts', 'Cotton', 'Beige'],
    rating: 5,
    reviewsCount: 25,
    description: 'Utility meets comfort. Heavy-duty cotton twill cargo shorts featuring multi-pocket closures and a relaxed waist, washed for a soft feel.',
    section: 'new-arrivals'
  },
  {
    id: 'oversized-beige-hoodie',
    name: 'Oversized Beige Hoodie',
    price: 59.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Hoodie, Cozy',
    tags: ['Hoodie', 'Beige', 'Warm'],
    rating: 4,
    reviewsCount: 17,
    description: 'Relaxed and street-smart. This oversized hoodie is constructed from heavy French terry cotton fleece, featuring a double-lined hood and drop shoulders.',
    section: 'new-arrivals'
  },
  {
    id: 'checkered-flannel-shirt',
    name: 'Checkered Flannel Shirt',
    price: 42.00,
    originalPrice: 55.00,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Shirt, Casual',
    tags: ['Flannel', 'Checkered', 'Plaid'],
    rating: 5,
    reviewsCount: 19,
    description: 'Constructed from premium ultra-soft double-brushed cotton flannel. Features standard chest pockets, a structured collar, and classic checkered prints.',
    section: 'new-arrivals'
  },
  {
    id: 'women-crop-sweater',
    name: 'Cropped Knit Top',
    price: 49.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Sweater, Cozy',
    tags: ['Crop', 'Knit', 'Sweater'],
    rating: 5,
    reviewsCount: 10,
    description: 'A trendy and lightweight cropped knit sweater with a ribbed hem. Fits perfectly with high-waisted denim for a casual and stylish weekend look.',
    section: 'new-arrivals'
  },

  // Top Sellers (4 Original + 3 Previously Added + 8 New)
  {
    id: 'gray-polo-shirt',
    name: 'Gray Polo Shirt',
    price: 49.00,
    originalPrice: null,
    image: '/top_seller_1.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'Cotton', 'Gray'],
    rating: 5,
    reviewsCount: 30,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'top-sellers'
  },
  {
    id: 'red-shirt',
    name: 'Red Shirt',
    price: 69.00,
    originalPrice: null,
    image: '/top_seller_2.png',
    category: 'Men, Shirt, Casual',
    tags: ['Shirt', 'Red', 'Casual'],
    rating: 5,
    reviewsCount: 25,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'top-sellers'
  },
  {
    id: 'polo-white-shirt',
    name: 'Polo white Shirt',
    price: 29.00,
    originalPrice: null,
    image: '/top_seller_3.png',
    category: 'Men, Polo, Casual',
    tags: ['Polo', 'White', 'Cotton'],
    rating: 5,
    reviewsCount: 15,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'top-sellers'
  },
  {
    id: 'pink-casual-shirt',
    name: 'Pink Casual Shirt',
    price: 39.00,
    originalPrice: null,
    image: '/top_seller_4.png',
    category: 'Men, Shirt, Casual',
    tags: ['Shirt', 'Pink', 'Casual'],
    rating: 5,
    reviewsCount: 19,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'top-sellers'
  },
  {
    id: 'brown-leather-boots',
    name: 'Classic Leather Boots',
    price: 89.00,
    originalPrice: 119.00,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Shoes, Winter',
    tags: ['Leather', 'Brown', 'Boots'],
    rating: 5,
    reviewsCount: 28,
    description: 'High-quality handcrafted leather boots designed for both comfort and rugged style. Features genuine leather uppers, durable rubber soles, and cushioned insoles for all-day support.',
    section: 'top-sellers'
  },
  {
    id: 'floral-spring-dress',
    name: 'Floral Summer Dress',
    price: 54.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Dress, Casual',
    tags: ['Floral', 'Dress', 'Summer'],
    rating: 4,
    reviewsCount: 17,
    description: 'A light and airy floral printed dress perfect for spring and summer outings. Made with breathable organic cotton blend fabric featuring a flirty A-line silhouette and delicate straps.',
    section: 'top-sellers'
  },
  {
    id: 'black-leather-jacket',
    name: 'Biker Leather Jacket',
    price: 149.00,
    originalPrice: 189.00,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Jacket, Outerwear',
    tags: ['Jacket', 'Leather', 'Black'],
    rating: 5,
    reviewsCount: 34,
    description: 'Unleash your inner rebel with this classic black leather biker jacket. Crafted from top-grain lambskin leather with heavy-duty metal zippers and comfortable inner lining.',
    section: 'top-sellers'
  },
  {
    id: 'leather-messenger-bag',
    name: 'Vintage Messenger Bag',
    price: 120.00,
    originalPrice: 150.00,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Bags, Leather',
    tags: ['Bag', 'Leather', 'Vintage'],
    rating: 5,
    reviewsCount: 42,
    description: 'Handcrafted genuine leather messenger bag designed for the modern professional. Includes cushioned laptop compartments, adjustable straps, and solid brass hardware.',
    section: 'top-sellers'
  },
  {
    id: 'denim-trucker-jacket',
    name: 'Vintage Denim Jacket',
    price: 85.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Jacket, Denim',
    tags: ['Jacket', 'Denim', 'Casual'],
    rating: 5,
    reviewsCount: 29,
    description: 'A timeless denim trucker jacket with classic contrast stitching, button flaps, and side welt pockets. Heavyweight cotton denim breaks in beautifully over time.',
    section: 'top-sellers'
  },
  {
    id: 'wool-fedora-hat',
    name: 'Classic Fedora Hat',
    price: 45.00,
    originalPrice: 60.00,
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Accessories, Hat',
    tags: ['Hat', 'Wool', 'Fedora'],
    rating: 4,
    reviewsCount: 18,
    description: 'Elevate your outfit. Crafted from 100% premium wool felt, this classic fedora features a structured brim, internal sweatband, and elegant leather trim.',
    section: 'top-sellers'
  },
  {
    id: 'womens-trench-coat',
    name: 'Elegant Trench Coat',
    price: 135.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Jacket, Outerwear',
    tags: ['Trench', 'Coat', 'Premium'],
    rating: 5,
    reviewsCount: 38,
    description: 'A double-breasted premium trench coat featuring a belted waist, storm flaps, and customized cuff adjustments. High-end rain-resistant blend fabric.',
    section: 'top-sellers'
  },
  {
    id: 'leather-chelsea-boots',
    name: 'Suede Chelsea Boots',
    price: 110.00,
    originalPrice: 145.00,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Shoes, Boots',
    tags: ['Boots', 'Suede', 'Chelsea'],
    rating: 5,
    reviewsCount: 22,
    description: 'Sleek suede Chelsea boots designed with flexible elastic side panels and durable rubber pull-tabs. Seamlessly bridges casual and dress styles.',
    section: 'top-sellers'
  },
  {
    id: 'womens-wrap-dress',
    name: 'Summer Wrap Dress',
    price: 68.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Dress, Summer',
    tags: ['Dress', 'Wrap', 'Floral'],
    rating: 4,
    reviewsCount: 21,
    description: 'Flattering v-neck wrap dress made with dynamic breathable viscose. Features adjustable tie closure at the waist, flowy skirt hem, and elegant short sleeves.',
    section: 'top-sellers'
  },
  {
    id: 'aviator-sunglasses',
    name: 'Polarized Aviators',
    price: 29.00,
    originalPrice: 39.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
    category: 'Unisex, Accessories, Sunglasses',
    tags: ['Aviators', 'Sunglasses', 'Polarized'],
    rating: 5,
    reviewsCount: 40,
    description: 'Classic gold metal wire frame aviators featuring dark green polarized protective lenses. Offers 100% UV radiation blocking and comfortable silicone nose pads.',
    section: 'top-sellers'
  },
  {
    id: 'mens-linen-shirt',
    name: 'Summer Linen Shirt',
    price: 49.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Shirt, Casual',
    tags: ['Linen', 'Shirt', 'Summer'],
    rating: 5,
    reviewsCount: 15,
    description: 'Stay cool and breezy. Crafted from premium woven organic flax linen. Relaxed tailored fit, classic collar, and high-durability stitching buttons.',
    section: 'top-sellers'
  },

  // Dedicated Product details for Woman & Man
  {
    id: 'plain-white-shirt',
    name: 'Plain White Shirt',
    price: 59.00,
    originalPrice: 69.00,
    image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Polo, Casual',
    tags: ['Modern', 'Design', 'Cotton'],
    rating: 5,
    reviewsCount: 15,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'women'
  },
  {
    id: 'plain-t-shirt',
    name: 'Plain T Shirt',
    price: 49.00,
    originalPrice: 69.00,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Polo, Casual',
    tags: ['Modern', 'Design', 'Cotton'],
    rating: 5,
    reviewsCount: 15,
    description: 'A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are [28]. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.',
    section: 'men'
  },
  {
    id: 'women-knit-sweater',
    name: 'Cozy Knit Sweater',
    price: 65.00,
    originalPrice: 75.00,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80',
    category: 'Women, Sweater, Cozy',
    tags: ['Sweater', 'Cozy', 'Knit'],
    rating: 5,
    reviewsCount: 12,
    description: 'A warm and chunky knit sweater perfect for chilly autumn days. Features a comfortable crew neck, relaxed dropped shoulders, and ribbed cuffs.',
    section: 'general'
  },
  {
    id: 'men-chinos',
    name: 'Slim Fit Chinos',
    price: 45.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=80',
    category: 'Men, Pants, Casual',
    tags: ['Chinos', 'Cotton', 'Beige'],
    rating: 4,
    reviewsCount: 19,
    description: 'Classic slim fit chinos crafted from soft, stretch cotton twill for optimal movement and comfort. Perfect to transition seamlessly from work to weekend.',
    section: 'general'
  },
    // Added Brown Shirt
    {
      id: 'brown-casual-shirt',
      name: 'Brown Casual Shirt',
      price: 34.00,
      originalPrice: null,
      image: '/brown_casual_shirt.png',
      category: 'Men, Shirt, Casual',
      tags: ['Shirt', 'Brown', 'Cotton'],
      rating: 4,
      reviewsCount: 12,
      description: 'A comfortable brown casual shirt perfect for everyday wear, made from soft cotton.',
      section: 'new-arrivals'
    },
    // Added Maroon Shirt
    {
      id: 'maroon-casual-shirt',
      name: 'Maroon Casual Shirt',
      price: 36.00,
      originalPrice: null,
      image: '/maroon_casual_shirt.png',
      category: 'Men, Shirt, Casual',
      tags: ['Shirt', 'Maroon', 'Cotton'],
      rating: 4,
      reviewsCount: 10,
      description: 'Stylish maroon shirt suitable for both casual and semi-formal occasions.',
      section: 'new-arrivals'
    },
    // Added Black Belt
    {
      id: 'black-leather-belt',
      name: 'Black Leather Belt',
      price: 22.00,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
      category: 'Unisex, Accessories, Belt',
      tags: ['Belt', 'Black', 'Leather'],
      rating: 5,
      reviewsCount: 18,
      description: 'Sleek black leather belt with a polished buckle, perfect for any outfit.',
      section: 'new-arrivals'
    },
    // Added Brown Belt
    {
      id: 'brown-leather-belt',
      name: 'Brown Leather Belt',
      price: 24.00,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80',
      category: 'Unisex, Accessories, Belt',
      tags: ['Belt', 'Brown', 'Leather'],
      rating: 5,
      reviewsCount: 15,
      description: 'Classic brown leather belt with a sturdy buckle, adds elegance to any look.',
      section: 'new-arrivals'
    },
    // Added Additional Sunglasses Shades
    {
      id: 'sunglasses-shade-2',
      name: 'Retro Round Sunglasses',
      price: 45.00,
      originalPrice: null,
      image: '/retro_round_sunglasses.png',
      category: 'Unisex, Accessories, Sunglasses',
      tags: ['Sunglasses', 'Round', 'Retro'],
      rating: 4,
      reviewsCount: 22,
      description: 'Vintage round sunglasses with UV protection, perfect for sunny days.',
      section: 'new-arrivals'
    },
    {
      id: 'sunglasses-shade-3',
      name: 'Cat Eye Sunglasses',
      price: 48.00,
      originalPrice: null,
      image: '/women_cat_eye_sunglasses.png',
      category: 'Unisex, Accessories, Sunglasses',
      tags: ['Sunglasses', 'Cat Eye', 'Fashion'],
      rating: 5,
      reviewsCount: 30,
      description: 'Elegant cat eye sunglasses that add a bold statement to your style.',
      section: 'new-arrivals'
    },
];

// Programmatic expansion for Season Sale (50 items)
const saleItemsRaw = [
  // Pants (13)
  { type: 'Pants', color: 'Navy', name: 'Cargo Shorts', image: '/assets/navy_cargo_shorts.png' },
  { type: 'Pants', color: 'Sand', name: 'Chino Trousers', image: '/assets/sand_chino_trousers.png' },
  { type: 'Pants', color: 'Burgundy', name: 'Linen Trousers', image: '/assets/burgundy_linen_trousers.png' },
  { type: 'Pants', color: 'Olive', name: 'Denim Jeans', imgId: '1505940145182-6718fd38efb1' },
  { type: 'Pants', color: 'Charcoal', name: 'Jogger Pants', imgId: '1661099508870-5f959f1e151a' },
  { type: 'Pants', color: 'Mustard', name: 'Cargo Shorts', imgId: '1718252540511-e958742e4165' },
  { type: 'Pants', color: 'Rust', name: 'Chino Trousers', imgId: '1715532098304-1e81e1f42600' },
  { type: 'Pants', color: 'Emerald', name: 'Linen Trousers', imgId: '1490427712608-588e68359dbd' },
  { type: 'Pants', color: 'Teal', name: 'Denim Jeans', imgId: '1718252540558-7b383b52642e' },
  { type: 'Pants', color: 'Mauve', name: 'Jogger Pants', imgId: '1532179837606-134ddcba689e' },
  { type: 'Pants', color: 'Sand', name: 'Cargo Shorts', imgId: '1648879441041-830c67c3c517' },
  { type: 'Pants', color: 'Burgundy', name: 'Chino Trousers', imgId: '1715233749622-3216fe49e682' },
  { type: 'Pants', color: 'Olive', name: 'Linen Trousers', imgId: '1714729382642-59f19c74440e' },

  // Outerwear (13)
  { type: 'Outerwear', color: 'Navy', name: 'Leather Jacket', imgId: '1727524366429-27de8607d5f6' },
  { type: 'Outerwear', color: 'Sand', name: 'Classic Cardigan', imgId: '1548883354-d056ab7b441f' },
  { type: 'Outerwear', color: 'Burgundy', name: 'Fleece Hoodie', imgId: '1776466530357-1c23f06e8357' },
  { type: 'Outerwear', color: 'Olive', name: 'Knit Sweater', imgId: '1776466530365-a9182764e7ca' },
  { type: 'Outerwear', color: 'Charcoal', name: 'Crewneck Sweatshirt', imgId: '1776534239030-67b127d8ddbe' },
  { type: 'Outerwear', color: 'Mustard', name: 'Leather Jacket', imgId: '1611025504703-8c143abe6996' },
  { type: 'Outerwear', color: 'Rust', name: 'Classic Cardigan', imgId: '1769689388217-c3c8fec7099d' },
  { type: 'Outerwear', color: 'Emerald', name: 'Fleece Hoodie', imgId: '1776466532088-ee68db520b63' },
  { type: 'Outerwear', color: 'Teal', name: 'Elegant Trench Coat', imgId: '1591047139829-d91aecb6caea' },
  { type: 'Outerwear', color: 'Mauve', name: 'Crewneck Sweatshirt', imgId: '1544022613-e87ca75a784a' },
  { type: 'Outerwear', color: 'Sand', name: 'Leather Jacket', imgId: '1624548140129-74786c5f1279' },
  { type: 'Outerwear', color: 'Burgundy', name: 'Classic Cardigan', imgId: '1624548140150-108c3287f551' },
  { type: 'Outerwear', color: 'Olive', name: 'Fleece Hoodie', imgId: '1776466532037-3e23b94dc1f1' },

  // Shoes/Footwear (12)
  { type: 'Shoes', color: 'Navy', name: 'Running Shoes', imgId: '1556774687-0e2fdd0116c0' },
  { type: 'Shoes', color: 'Sand', name: 'Suede Loafers', imgId: '1625357165350-bdbcb6d7d524' },
  { type: 'Shoes', color: 'Burgundy', name: 'Leather Boots', imgId: '1563434649554-58f91d22ec2c' },
  { type: 'Shoes', color: 'Olive', name: 'Casual Sneakers', imgId: '1510424708915-8f4900f5cb00' },
  { type: 'Shoes', color: 'Charcoal', name: 'Running Shoes', imgId: '1668069226492-508742b03147' },
  { type: 'Shoes', color: 'Mustard', name: 'Suede Loafers', imgId: '1605812860427-4024433a70fd' },
  { type: 'Shoes', color: 'Rust', name: 'Leather Boots', imgId: '1614252235316-8c857d38b5f4' },
  { type: 'Shoes', color: 'Emerald', name: 'Casual Sneakers', imgId: '1549290127-7f758fdadff7' },
  { type: 'Shoes', color: 'Teal', name: 'Running Shoes', imgId: '1631542156377-473540702434' },
  { type: 'Shoes', color: 'Mauve', name: 'Suede Loafers', imgId: '1631087606988-a6be38fccaf6' },
  { type: 'Shoes', color: 'Navy', name: 'Leather Boots', imgId: '1616696038562-574c18066055' },
  { type: 'Shoes', color: 'Sand', name: 'Casual Sneakers', imgId: '1496516348160-24b35a31856f' },

  // Shirts/Tops (12)
  { type: 'Shirts', color: 'Navy', name: 'Graphic Tee', imgId: '1549037173-e3b717902c57' },
  { type: 'Shirts', color: 'Sand', name: 'Casual Polo', imgId: '1561365452-adb940139ffa' },
  { type: 'Shirts', color: 'Burgundy', name: 'Denim Shirt', imgId: '1537274942065-eda9d00a6293' },
  { type: 'Shirts', color: 'Olive', name: 'Linen Shirt', imgId: '1523380677598-64d85d015339' },
  { type: 'Shirts', color: 'Charcoal', name: 'Classic Oxford', imgId: '1523381210434-271e8be1f52b' },
  { type: 'Shirts', color: 'Mustard', name: 'Graphic Tee', imgId: '1542060748-10c28b62716f' },
  { type: 'Shirts', color: 'Rust', name: 'Casual Polo', imgId: '1602810316693-3667c854239a' },
  { type: 'Shirts', color: 'Emerald', name: 'Denim Shirt', imgId: '1626497764746-6dc36546b388' },
  { type: 'Shirts', color: 'Teal', name: 'Linen Shirt', imgId: '1603251579431-8041402bdeda' },
  { type: 'Shirts', color: 'Mauve', name: 'Classic Oxford', imgId: '1657651315305-a1b608182927' },
  { type: 'Shirts', color: 'Sand', name: 'Graphic Tee', imgId: '1629426958003-35a5583b2977' },
  { type: 'Shirts', color: 'Burgundy', name: 'Casual Polo', imgId: '1603252110481-7ba873bf42ab' }
];

const baseSaleOffers = ['Buy 2 Get 1 Free', 'Buy 1 Get 1 Free', '50% OFF', '30% OFF', '40% OFF'];

const generatedSaleProducts = saleItemsRaw.map((item, idx) => {
  const productIndex = idx + 1;
  const offer = baseSaleOffers[(productIndex - 1) % baseSaleOffers.length];
  const price = parseFloat((19.99 + (productIndex * 1.5) % 80).toFixed(2));
  const originalPrice = parseFloat((price * 1.5).toFixed(2));
  const image = item.image ? item.image : `https://images.unsplash.com/photo-${item.imgId}?w=600&auto=format&fit=crop&q=80`;

  return {
    id: `sale-product-${productIndex}`,
    name: `${item.color} ${item.name}`,
    price: price,
    originalPrice: originalPrice,
    image: image,
    category: `Sale, Outlet, ${item.type}`,
    tags: ['Sale', offer],
    rating: 4 + (productIndex % 2),
    reviewsCount: 10 + (productIndex * 3) % 40,
    description: `A premium quality ${item.color.toLowerCase()} ${item.name.toLowerCase()} designed for modern casual lifestyles. Features tailored accents, durable stitching, and is currently offered with our special '${offer}' promotion.`,
    section: 'sale',
    offer: offer
  };
});

const adjustPrice = (product) => {
  let price = product.price;
  const category = product.category?.toLowerCase() || '';
  const name = product.name?.toLowerCase() || '';
  // Minimum for shirts (excluding t-shirts) -> ₹1500
  if (category.includes('shirt') && !name.includes('t-shirt')) {
    if (price < 1500) price = 1500;
  }
  // Minimum for t-shirts -> ₹800
  if (name.includes('t-shirt')) {
    if (price < 800) price = 800;
  }
  // Minimum for hats -> ₹500
  if (category.includes('hat')) {
    if (price < 500) price = 500;
  }
  // Apply 40% price reduction
  price = Math.round(price * 0.6);
  // Adjust originalPrice similarly if present
  const originalPrice = product.originalPrice ? Math.round(product.originalPrice * 0.6) : null;
  return { ...product, price, originalPrice };
};

export const products = [
  ...staticProducts.map(p => adjustPrice({ ...p, price: Math.round(p.price * 40), originalPrice: p.originalPrice ? Math.round(p.originalPrice * 40) : null })),
  ...generatedSaleProducts.map(p => adjustPrice({ ...p, price: Math.round(p.price * 40), originalPrice: p.originalPrice ? Math.round(p.originalPrice * 40) : null }))
];

export const heroBanner = {
  title: 'STYLIST PICKS BEAT THE HEAT',
  subtitle: '',
  image: '/hero_woman_custom.jpg'
};

export const promoBanners = {
  left: {
    title: 'PEACE OF MIND',
    subtitle: 'A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.',
    image: '',
    buttonText: 'BUY NOW'
  },
  right: {
    title: 'BUY 2 GET 1 FREE',
    subtitle: 'End of season sale. Buy any 2 items of your choice and get 1 free.',
    image: '',
    buttonText: 'BUY NOW'
  }
};

export const founders = [
  {
    name: 'HM Jawad',
    title: 'Co-Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Furqan Abid',
    title: 'Co-Founder & CTO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Abdullah Ah',
    title: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Abrar Khan',
    title: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80'
  }
];

export const testimonials = [
  {
    name: 'Stacy',
    quote: 'Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Tiffany',
    quote: 'I ordered 5 shirts from them and received them in no time. The customer support was awesome!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'James',
    quote: 'I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];
