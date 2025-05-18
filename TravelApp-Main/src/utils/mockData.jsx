// Mock data for the travel reservation system
// Destinations
export const destinations = [
  {
    id: "1",
    name: "Bali, Indonesia",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship.",
    rating: 4.8,
    reviewCount: 1245,
    priceFrom: 899,
    duration: "7-10 days",
    bestSeason: "May to September",
    popular: true,
    highlights: [
      "Visit the sacred Monkey Forest Sanctuary",
      "Explore the picturesque Tegallalang Rice Terraces",
      "Relax on the pristine beaches of Nusa Dua",
      "Experience the vibrant nightlife in Seminyak",
      "Discover ancient temples like Uluwatu and Tanah Lot"
    ],
    weather: {
      current: 29,
      conditions: "Sunny",
      forecast: [
        { day: "Mon", temp: 29 },
        { day: "Tue", temp: 30 },
        { day: "Wed", temp: 28 }
      ]
    }
  },
  {
    id: "2",
    name: "Santorini, Greece",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater).",
    rating: 4.9,
    reviewCount: 2103,
    priceFrom: 1299,
    duration: "5-7 days",
    bestSeason: "April to October",
    popular: true,
    highlights: [
      "Watch the famous sunset from Oia",
      "Visit the black sand beaches of Perissa and Kamari",
      "Explore the ancient ruins of Akrotiri",
      "Go wine tasting at local vineyards",
      "Take a boat tour around the caldera"
    ],
    weather: {
      current: 25,
      conditions: "Clear",
      forecast: [
        { day: "Mon", temp: 25 },
        { day: "Tue", temp: 24 },
        { day: "Wed", temp: 26 }
      ]
    }
  },
  {
    id: "3",
    name: "Kyoto, Japan",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
    rating: 4.7,
    reviewCount: 1879,
    priceFrom: 1499,
    duration: "7-10 days",
    bestSeason: "March to May and October to November",
    popular: false,
    highlights: [
      "Visit the iconic Fushimi Inari Shrine",
      "Experience a traditional tea ceremony",
      "Explore the bamboo forest of Arashiyama",
      "See the golden pavilion of Kinkaku-ji",
      "Walk through the historic Gion district"
    ],
    weather: {
      current: 22,
      conditions: "Partly Cloudy",
      forecast: [
        { day: "Mon", temp: 22 },
        { day: "Tue", temp: 23 },
        { day: "Wed", temp: 21 }
      ]
    }
  },
  {
    id: "4",
    name: "Machu Picchu, Peru",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views.",
    rating: 4.9,
    reviewCount: 1563,
    priceFrom: 1899,
    duration: "10-14 days",
    bestSeason: "May to September",
    popular: true,
    highlights: [
      "Hike the legendary Inca Trail",
      "Witness the sunrise over the ancient citadel",
      "Explore the Sacred Valley",
      "Visit the colonial city of Cusco",
      "Experience authentic Peruvian cuisine"
    ],
    weather: {
      current: 18,
      conditions: "Cloudy",
      forecast: [
        { day: "Mon", temp: 18 },
        { day: "Tue", temp: 17 },
        { day: "Wed", temp: 19 }
      ]
    }
  },
  {
    id: "5",
    name: "Paris, France",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques.",
    rating: 4.6,
    reviewCount: 3251,
    priceFrom: 1199,
    duration: "5-7 days",
    bestSeason: "April to June and September to October",
    popular: true,
    highlights: [
      "Visit the iconic Eiffel Tower",
      "Explore the Louvre Museum",
      "Stroll along the Champs-Élysées",
      "Experience the magic of Disneyland Paris",
      "Enjoy authentic French cuisine and pastries"
    ],
    weather: {
      current: 20,
      conditions: "Partly Cloudy",
      forecast: [
        { day: "Mon", temp: 20 },
        { day: "Tue", temp: 19 },
        { day: "Wed", temp: 21 }
      ]
    }
  },
  {
    id: "6",
    name: "Maldives",
    location: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    description: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs. The capital, Malé, has a busy fish market, restaurants and shops on the main road, Majeedhee Magu, and 17th-century Hukuru Miskiy (also known as Friday Mosque) made of carved white coral.",
    rating: 4.9,
    reviewCount: 1872,
    priceFrom: 2499,
    duration: "7-10 days",
    bestSeason: "November to April",
    popular: true,
    highlights: [
      "Stay in an overwater bungalow",
      "Snorkel or dive in crystal clear waters",
      "Experience a sunset cruise",
      "Relax on pristine white sand beaches",
      "Enjoy world-class spa treatments"
    ],
    weather: {
      current: 30,
      conditions: "Sunny",
      forecast: [
        { day: "Mon", temp: 30 },
        { day: "Tue", temp: 31 },
        { day: "Wed", temp: 30 }
      ]
    }
  },
  {
    id: "7",
    name: "New York City, USA",
    location: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.",
    rating: 4.7,
    reviewCount: 4532,
    priceFrom: 1399,
    duration: "5-7 days",
    bestSeason: "April to June and September to November",
    popular: true,
    highlights: [
      "Visit Times Square and Broadway",
      "Explore Central Park",
      "See the Statue of Liberty",
      "Shop on Fifth Avenue",
      "Experience the vibrant food scene"
    ],
    weather: {
      current: 22,
      conditions: "Clear",
      forecast: [
        { day: "Mon", temp: 22 },
        { day: "Tue", temp: 24 },
        { day: "Wed", temp: 21 }
      ]
    }
  },
  {
    id: "8",
    name: "Cape Town, South Africa",
    location: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description: "Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain's flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.",
    rating: 4.8,
    reviewCount: 1235,
    priceFrom: 1599,
    duration: "10-14 days",
    bestSeason: "October to April",
    popular: false,
    highlights: [
      "Visit Table Mountain",
      "Explore the Cape of Good Hope",
      "Tour the historic Robben Island",
      "Go wine tasting in Stellenbosch",
      "Experience a safari in nearby game reserves"
    ],
    weather: {
      current: 24,
      conditions: "Sunny",
      forecast: [
        { day: "Mon", temp: 24 },
        { day: "Tue", temp: 23 },
        { day: "Wed", temp: 25 }
      ]
    }
  }
];
// Accommodations
export const accommodations = [
  {
    id: "1",
    destinationId: "1", // Bali
    name: "Ubud Jungle Villa",
    location: "Ubud, Bali",
    image: "https://i.postimg.cc/1RFqJHPp/170397963.jpg",
    description: "Luxurious villa nestled in the lush jungles of Ubud with private pool and stunning views.",
    rating: 4.9,
    pricePerNight: 250,
    amenities: ["Private Pool", "Free WiFi", "Spa", "Restaurant", "Airport Shuttle"]
  },
  {
    id: "2",
    destinationId: "1", // Bali
    name: "Seminyak Beach Resort",
    location: "Seminyak, Bali",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Beachfront resort with stunning sunset views, multiple pools and world-class dining options.",
    rating: 4.8,
    pricePerNight: 320,
    amenities: ["Beachfront", "Multiple Pools", "Spa", "4 Restaurants", "Fitness Center"]
  },
  {
    id: "3",
    destinationId: "1", // Bali
    name: "Nusa Dua Private Bungalow",
    location: "Nusa Dua, Bali",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80",
    description: "Secluded bungalow with direct beach access and personalized butler service.",
    rating: 4.7,
    pricePerNight: 280,
    amenities: ["Private Beach Access", "Butler Service", "Free Breakfast", "Water Sports"]
  },
  {
    id: "4",
    destinationId: "2", // Santorini
    name: "Oia Sunset Villas",
    location: "Oia, Santorini",
    image: "https://i.postimg.cc/qqbjT5ZC/luxury-sun-beach-perfect-bay.jpg",
    description: "Traditional cave villas with private terraces offering the best sunset views in Santorini.",
    rating: 4.9,
    pricePerNight: 450,
    amenities: ["Private Terrace", "Infinity Pool", "Spa Services", "Breakfast Included"]
  },
  {
    id: "5",
    destinationId: "2", // Santorini
    name: "Fira Caldera Hotel",
    location: "Fira, Santorini",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1225&q=80",
    description: "Boutique hotel perched on the caldera cliffs with stunning views and luxury amenities.",
    rating: 4.7,
    pricePerNight: 380,
    amenities: ["Caldera View", "Infinity Pool", "Restaurant", "Bar", "Spa"]
  },
  {
    id: "6",
    destinationId: "3", // Kyoto
    name: "Traditional Kyoto Ryokan",
    location: "Gion, Kyoto",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description: "Authentic Japanese ryokan experience with tatami rooms, onsen baths and kaiseki dining.",
    rating: 4.8,
    pricePerNight: 290,
    amenities: ["Onsen Bath", "Traditional Breakfast", "Tea Ceremony", "Yukata Provided"]
  },
  {
    id: "7",
    destinationId: "4", // Machu Picchu
    name: "Sacred Valley Lodge",
    location: "Urubamba, Peru",
    image: "https://i.postimg.cc/HLcd5GCB/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand.jpg",
    description: "Luxury lodge in the Sacred Valley with mountain views and easy access to Machu Picchu.",
    rating: 4.6,
    pricePerNight: 320,
    amenities: ["Mountain Views", "Restaurant", "Bar", "Spa", "Tour Desk"]
  },
  {
    id: "8",
    destinationId: "5", // Paris
    name: "Champs-Élysées Boutique Hotel",
    location: "8th Arrondissement, Paris",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Elegant boutique hotel steps away from the famous Champs-Élysées and Arc de Triomphe.",
    rating: 4.7,
    pricePerNight: 350,
    amenities: ["Breakfast Included", "Concierge", "Bar", "Room Service", "Airport Shuttle"]
  },
  {
    id: "9",
    destinationId: "6", // Maldives
    name: "Overwater Paradise Resort",
    location: "North Atoll, Maldives",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
    description: "Luxury overwater villas with direct lagoon access, glass floors and private infinity pools.",
    rating: 4.9,
    pricePerNight: 850,
    amenities: ["Overwater Villa", "Private Pool", "Glass Floor", "All-Inclusive", "Spa"]
  }
];
// Travel Packages
export const packages = [
  {
    id: "1",
    name: "Bali Adventure Package",
    destinationId: "1",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    duration: "7 days / 6 nights",
    description: "Experience the best of Bali with this adventure package including accommodations, tours, and activities.",
    price: 1299,
    type: "Adventure",
    inclusions: [
      "6 nights accommodation",
      "Daily breakfast",
      "Ubud cultural tour",
      "Mount Batur sunrise trek",
      "Whitewater rafting experience",
      "Uluwatu temple sunset tour",
      "Airport transfers"
    ]
  },
  {
    id: "2",
    name: "Bali Luxury Retreat",
    destinationId: "1",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    duration: "10 days / 9 nights",
    description: "Indulge in a luxurious Bali retreat with premium accommodations, spa treatments, and private tours.",
    price: 2999,
    type: "Luxury",
    inclusions: [
      "9 nights in 5-star accommodations",
      "Daily breakfast and selected meals",
      "Private car and driver",
      "3 premium spa treatments",
      "Private sunset dinner on the beach",
      "Exclusive cultural experiences",
      "VIP airport transfers"
    ]
  },
  {
    id: "3",
    name: "Santorini Romantic Getaway",
    destinationId: "2",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    duration: "5 days / 4 nights",
    description: "Perfect romantic escape to Santorini with sunset views, wine tasting, and couples' experiences.",
    price: 1899,
    type: "Romance",
    inclusions: [
      "4 nights in a caldera-view suite",
      "Daily breakfast",
      "Private sunset sailing cruise with dinner",
      "Wine tasting tour",
      "Couples massage",
      "Private airport transfers"
    ]
  },
  {
    id: "4",
    name: "Japan Cultural Explorer",
    destinationId: "3",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "10 days / 9 nights",
    description: "Immerse yourself in Japanese culture with this comprehensive tour of Kyoto, Tokyo, and surrounding areas.",
    price: 2499,
    type: "Cultural",
    inclusions: [
      "9 nights accommodation",
      "Daily breakfast",
      "7-day Japan Rail Pass",
      "Tea ceremony experience",
      "Guided tours in Kyoto and Tokyo",
      "Traditional ryokan stay",
      "Airport transfers"
    ]
  },
  {
    id: "5",
    name: "Peru & Machu Picchu Explorer",
    destinationId: "4",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "8 days / 7 nights",
    description: "Discover the wonders of Peru including Machu Picchu, Cusco, and the Sacred Valley.",
    price: 2199,
    type: "Adventure",
    inclusions: [
      "7 nights accommodation",
      "Daily breakfast",
      "Guided tour of Machu Picchu",
      "Sacred Valley excursion",
      "Cusco city tour",
      "Train tickets to/from Machu Picchu",
      "Airport transfers"
    ]
  }
];
// Promotions for the home page
export const promotions = [
  {
    id: "1",
    title: "Summer Sale: Bali Paradise",
    description: "Enjoy 25% off on our most popular Bali packages. Limited time offer for summer getaways!",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    destinationId: "1",
    discount: "25% OFF",
    price: 974,
    originalPrice: 1299,
    limitedTime: true
  },
  {
    id: "2",
    title: "Romantic Santorini Escape",
    description: "Book our Santorini package and get a free sunset cruise. Perfect for couples and honeymooners.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    destinationId: "2",
    discount: "Free Sunset Cruise",
    price: 1899,
    limitedTime: false
  },
  {
    id: "3",
    title: "Last-Minute Deal: Maldives",
    description: "Save 30% on Maldives packages when you book within the next 48 hours. Limited availability!",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    destinationId: "6",
    discount: "30% OFF",
    price: 1749,
    originalPrice: 2499,
    limitedTime: true
  }
];