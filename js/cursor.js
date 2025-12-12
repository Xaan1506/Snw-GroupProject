// cursor.js (moved into /js)
// Expanded dataset so filters return multiple results across permutations
const apartments = [
  {
    id: 1, title: "Modern 1 BHK Apartment", location: "HSR Layout, Bangalore", city: "Bangalore", bhk: 1, furnishing: "fully", rent: 18000, availability: "available", area: 650, deposit: 40000, maintenance: 1500, petsAllowed: true, amenities: ["Parking", "Power Backup", "Gated Security", "Lift"], images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 2, title: "Spacious 2 BHK Flat", location: "Powai, Mumbai", city: "Mumbai", bhk: 2, furnishing: "semi", rent: 45000, availability: "available", area: 1050, deposit: 120000, maintenance: 3500, petsAllowed: false, amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Lift"], images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 3, title: "2 BHK Apartment for Rent", location: "Andheri East, Mumbai", city: "Mumbai", bhk: 2, furnishing: "semi", rent: 28000, availability: "available", area: 950, deposit: 75000, maintenance: 2000, petsAllowed: true, amenities: ["Parking", "Lift", "CCTV"], images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565183928294-7d22ff18e48a?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 4, title: "Luxury 5 BHK Villa", location: "Jubilee Hills, Hyderabad", city: "Hyderabad", bhk: 5, furnishing: "fully", rent: 450000, availability: "available", area: 5200, deposit: 800000, maintenance: 15000, petsAllowed: true, amenities: ["Parking", "Pool", "Garden", "Gym", "Security"], images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 5, title: "2 BHK Budget Apartment", location: "Electronic City, Bangalore", city: "Bangalore", bhk: 2, furnishing: "none", rent: 25000, availability: "available", area: 880, deposit: 60000, maintenance: 1200, petsAllowed: false, amenities: ["Parking", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 6, title: "Premium 3 BHK Penthouse", location: "Gachibowli, Hyderabad", city: "Hyderabad", bhk: 3, furnishing: "fully", rent: 185000, availability: "soon", area: 2700, deposit: 350000, maintenance: 9000, petsAllowed: true, amenities: ["Parking", "Pool", "Gym", "Sky Deck", "Security"], images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", // penthouse living room
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop", // luxury bedroom
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop", // modern kitchen
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" // penthouse building
    ]
  },
  {
    id: 7, title: "Commercial Office Space", location: "Bandra Kurla Complex, Mumbai", city: "Mumbai", bhk: 0, furnishing: "semi", rent: 250000, availability: "available", area: 1800, deposit: 500000, maintenance: 12000, petsAllowed: false, amenities: ["Parking", "Power Backup", "Lift", "Security"], images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553531889-e6cf89d41bd1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560264357-8d9766d72a28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-495519e92e2d?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 8, title: "Independent House", location: "Vikarabad, Bangalore", city: "Bangalore", bhk: 4, furnishing: "semi", rent: 155000, availability: "available", area: 2400, deposit: 300000, maintenance: 7000, petsAllowed: true, amenities: ["Parking", "Garden", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560261027-b0f93b8ccc0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 9, title: "Residential Plot Lease", location: "Kondapur, Hyderabad", city: "Hyderabad", bhk: 0, furnishing: "none", rent: 35000, availability: "soon", area: 2200, deposit: 70000, maintenance: 1000, petsAllowed: true, amenities: ["Parking", "Gated Security"], images: [
      "https://images.unsplash.com/photo-1627387235966-e21876503f61?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 10, title: "Premium 3 BHK Apartment", location: "Lower Parel, Mumbai", city: "Mumbai", bhk: 3, furnishing: "fully", rent: 78000, availability: "available", area: 1600, deposit: 180000, maintenance: 4000, petsAllowed: false, amenities: ["Parking", "Gym", "Pool", "Lift"], images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f210e0c3c94c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 11, title: "Family 2 BHK Home", location: "Whitefield, Bangalore", city: "Bangalore", bhk: 2, furnishing: "semi", rent: 22000, availability: "available", area: 900, deposit: 50000, maintenance: 1000, petsAllowed: true, amenities: ["Parking", "Play Area", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565183928294-7d22ff18e48a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 12, title: "Cozy 1 BHK Studio", location: "Kondapur, Hyderabad", city: "Hyderabad", bhk: 1, furnishing: "none", rent: 12000, availability: "soon", area: 520, deposit: 25000, maintenance: 800, petsAllowed: true, amenities: ["Parking", "Lift"], images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80"
    ]
  },
  // Additional generated entries to increase coverage
  {
    id: 13, title: "Sunny 1 BHK Near Metro", location: "Koramangala, Bangalore", city: "Bangalore", bhk: 1, furnishing: "semi", rent: 20000, availability: "available", area: 600, deposit: 45000, maintenance: 1200, petsAllowed: false, amenities: ["Parking", "Lift"], images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560449752-9d0e0f90f214?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 14, title: "Compact Studio", location: "Andheri West, Mumbai", city: "Mumbai", bhk: 1, furnishing: "none", rent: 16000, availability: "available", area: 420, deposit: 30000, maintenance: 800, petsAllowed: true, amenities: ["Power Backup"], images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 15, title: "3 BHK Family Apartment", location: "Gurgaon Sector 45, Gurgaon", city: "Gurgaon", bhk: 3, furnishing: "fully", rent: 65000, availability: "available", area: 1500, deposit: 200000, maintenance: 3500, petsAllowed: true, amenities: ["Gym", "Pool", "Parking"], images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505706346881-b72b27e84530?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 16, title: "2 BHK Near IT Park", location: "Pimpri, Pune", city: "Pune", bhk: 2, furnishing: "semi", rent: 28000, availability: "available", area: 950, deposit: 80000, maintenance: 1800, petsAllowed: false, amenities: ["Parking", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1551632786-de41ec297b89?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 17, title: "Budget 1BHK", location: "Noida Sector 62, Noida", city: "Noida", bhk: 1, furnishing: "none", rent: 11000, availability: "available", area: 480, deposit: 20000, maintenance: 700, petsAllowed: false, amenities: ["Parking"], images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307d0f29?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 18, title: "Luxury 4 BHK", location: "South Extension, Delhi", city: "Delhi", bhk: 4, furnishing: "fully", rent: 220000, availability: "available", area: 3200, deposit: 600000, maintenance: 12000, petsAllowed: true, amenities: ["Pool", "Gym", "Security"], images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-a1bae4a45fc0?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 19, title: "1 BHK Serviced Apartment", location: "Bandra West, Mumbai", city: "Mumbai", bhk: 1, furnishing: "fully", rent: 32000, availability: "available", area: 520, deposit: 60000, maintenance: 2500, petsAllowed: false, amenities: ["Housekeeping", "Gym"], images: [
      "https://images.unsplash.com/photo-1591247378147-11e80317049f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546439531-bb4cbc1b6f85?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909190-2dd31c2e365b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554009975-d74653b879f1?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 20, title: "Mid-range 2 BHK", location: "Salt Lake, Kolkata", city: "Kolkata", bhk: 2, furnishing: "semi", rent: 18000, availability: "available", area: 900, deposit: 40000, maintenance: 1200, petsAllowed: true, amenities: ["Parking", "Lift"], images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 21, title: "3 BHK Corner Flat", location: "Adyar, Chennai", city: "Chennai", bhk: 3, furnishing: "semi", rent: 42000, availability: "available", area: 1400, deposit: 150000, maintenance: 3000, petsAllowed: true, amenities: ["Parking", "Garden"], images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 22, title: "Studio Near Business District", location: "Bandra Kurla Complex, Mumbai", city: "Mumbai", bhk: 1, furnishing: "none", rent: 20000, availability: "soon", area: 450, deposit: 50000, maintenance: 900, petsAllowed: false, amenities: ["Lift", "Security"], images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 23, title: "Affordable 2 BHK", location: "Manikonda, Hyderabad", city: "Hyderabad", bhk: 2, furnishing: "none", rent: 16000, availability: "available", area: 800, deposit: 40000, maintenance: 900, petsAllowed: false, amenities: ["Parking"], images: [
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 24, title: "Family Villa", location: "Kalyan, Mumbai", city: "Mumbai", bhk: 4, furnishing: "semi", rent: 85000, availability: "available", area: 2700, deposit: 250000, maintenance: 6000, petsAllowed: true, amenities: ["Garden", "Parking", "Security"], images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1615875221248-cd6e694329e4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 25, title: "Economy Room", location: "T Nagar, Chennai", city: "Chennai", bhk: 1, furnishing: "none", rent: 9000, availability: "available", area: 350, deposit: 10000, maintenance: 500, petsAllowed: false, amenities: ["Lift"], images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 26, title: "Business Bay 2 BHK", location: "Bandra East, Mumbai", city: "Mumbai", bhk: 2, furnishing: "fully", rent: 52000, availability: "available", area: 1100, deposit: 150000, maintenance: 3200, petsAllowed: true, amenities: ["Gym", "Parking", "Pool"], images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 27, title: "Compact 2 BHK", location: "Banashankari, Bangalore", city: "Bangalore", bhk: 2, furnishing: "semi", rent: 24000, availability: "available", area: 880, deposit: 60000, maintenance: 1100, petsAllowed: false, amenities: ["Parking"], images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565183928294-7d22ff18e48a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 28, title: "Highrise 1 BHK", location: "Marathahalli, Bangalore", city: "Bangalore", bhk: 1, furnishing: "fully", rent: 27000, availability: "available", area: 580, deposit: 70000, maintenance: 1500, petsAllowed: true, amenities: ["Lift", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 29, title: "Penthouse Studio", location: "Bandra West, Mumbai", city: "Mumbai", bhk: 1, furnishing: "fully", rent: 95000, availability: "available", area: 900, deposit: 250000, maintenance: 5000, petsAllowed: false, amenities: ["Sky Deck", "Pool"], images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 30, title: "Countryside House", location: "Lonavala, Pune", city: "Pune", bhk: 3, furnishing: "semi", rent: 45000, availability: "available", area: 1800, deposit: 120000, maintenance: 2500, petsAllowed: true, amenities: ["Garden", "Parking"], images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 31, title: "Student 1BHK", location: "Kothrud, Pune", city: "Pune", bhk: 1, furnishing: "none", rent: 8000, availability: "available", area: 320, deposit: 8000, maintenance: 300, petsAllowed: false, amenities: ["WiFi"], images: [
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307d0f29?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 32, title: "Executive 2 BHK", location: "Bandra East, Mumbai", city: "Mumbai", bhk: 2, furnishing: "fully", rent: 61000, availability: "soon", area: 1200, deposit: 180000, maintenance: 3600, petsAllowed: true, amenities: ["Gym", "Parking"], images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 33, title: "Garden Villa", location: "Thane West, Mumbai", city: "Mumbai", bhk: 4, furnishing: "semi", rent: 95000, availability: "available", area: 3000, deposit: 300000, maintenance: 8000, petsAllowed: true, amenities: ["Garden", "Security", "Parking"], images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615875221248-cd6e694329e4?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 34, title: "Compact 3 BHK", location: "Jayanagar, Bangalore", city: "Bangalore", bhk: 3, furnishing: "semi", rent: 47000, availability: "available", area: 1400, deposit: 130000, maintenance: 2800, petsAllowed: false, amenities: ["Parking", "Lift"], images: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 35, title: "Work-Ready 1BHK", location: "HSR Layout, Bangalore", city: "Bangalore", bhk: 1, furnishing: "fully", rent: 22000, availability: "available", area: 600, deposit: 50000, maintenance: 1400, petsAllowed: true, amenities: ["WiFi", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307230-6f504e4c4dd4?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80"
    ]
  },
  {
    id: 36, title: "Comfort 2 BHK", location: "Whitefield, Bangalore", city: "Bangalore", bhk: 2, furnishing: "fully", rent: 32000, availability: "available", area: 1000, deposit: 90000, maintenance: 1800, petsAllowed: false, amenities: ["Parking", "Lift", "Power Backup"], images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565183928294-7d22ff18e48a?w=800&h=600&fit=crop&q=80"
    ]
  }
];

const furnishingLabels = { fully: "Fully Furnished", semi: "Semi Furnished", none: "Unfurnished" };
const availabilityLabels = { available: "Ready to move", soon: "Coming soon" };

const filters = {
  location: "",
  bhk: "all",
  furnishing: "all",
  availability: "all",
  price: "all",
  purpose: "all"
};

const formatPrice = (value) => {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} Lac / mo`;
  }
  return `₹${value.toLocaleString("en-IN")}/mo`;
};

const formatCurrency = (value) => `₹${(value || 0).toLocaleString("en-IN")}`;

const createCard = (apartment) => {
  const card = document.createElement("article");
  card.className = "card";
  const fallbackImg = "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop";
  const mainImg = apartment.images?.[0] || fallbackImg;
  // Use a tiny <img> to detect load errors and set the container background reliably; also fade in on load
  card.innerHTML = `
    <div class="card__img" data-fallback="${fallbackImg}">
      <img src="${mainImg}" alt="" onload="this.parentElement.style.backgroundImage='url(${mainImg})'; this.parentElement.style.opacity='1'; this.style.display='none'" onerror="this.parentElement.style.backgroundImage='url(${fallbackImg})'; this.parentElement.style.opacity='1'; this.remove()" style="display:block;width:0;height:0;visibility:hidden;" />
      <span class="badge">${availabilityLabels[apartment.availability] || "Available"}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${apartment.title}</div>
      <div class="card__meta">📍 ${apartment.location}</div>
      <div class="chips">
        <span class="chip">${apartment.bhk || "Studio"} BHK</span>
        <span class="chip">${furnishingLabels[apartment.furnishing]}</span>
        <span class="chip">${apartment.area} sqft</span>
      </div>
      <div class="card__row">
        <div class="price">${formatPrice(apartment.rent)}</div>
      </div>
    </div>
  `;
  // make the whole card clickable and keyboard accessible (open details modal)
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.dataset.id = apartment.id;
  // open modal when image or card clicked; prefer image click for clarity
  const imgEl = null; // not used; behavior handled by event delegation below
  card.addEventListener('click', (e) => {
    // if user clicked a link or button, ignore
    if (e.target && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button'))) return;
    openModal(apartment);
    // Initialize EMI calculator for this apartment
    if (typeof addEMIToModal === 'function') {
      addEMIToModal(apartment);
    }
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openModal(apartment);
      // Initialize EMI calculator for this apartment
      if (typeof addEMIToModal === 'function') {
        addEMIToModal(apartment);
      }
    }
  });

  return card;
};

// Ensure every apartment has a purpose flag (demo): mark a small set as 'buy'
const buyIds = [4, 7, 24, 29, 33];
apartments.forEach(a => { a.purpose = buyIds.includes(a.id) ? 'buy' : (a.purpose || 'rent'); });

const renderFeatured = () => {
  const featuredGrid = document.getElementById("featured-grid");
  if (!featuredGrid) return; // Skip if element doesn't exist
  featuredGrid.innerHTML = "";
  apartments.slice(0, 4).forEach((apartment) => {
    featuredGrid.appendChild(createCard(apartment));
  });
  bindDetails();
};

const renderListings = (listings) => {
  const grid = document.getElementById("listings-grid");
  if (!grid) return; // Skip if element doesn't exist
  grid.innerHTML = "";

  if (!listings.length) {
    grid.innerHTML = `<div class="no-results">No properties match your filters.</div>`;
    const resultsCount = document.getElementById("results-count");
    if (resultsCount) resultsCount.textContent = "0 properties found";
    return;
  }

  listings.forEach((item) => grid.appendChild(createCard(item)));
  const resultsCount = document.getElementById("results-count");
  if (resultsCount) resultsCount.textContent = `${listings.length} properties found`;

  bindDetails();
};

const applyFilters = () => {
  const filtered = apartments.filter((apt) => {
    const matchLocation = filters.location
      ? apt.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchBhk = filters.bhk === "all" ? true : String(apt.bhk) === filters.bhk;
    const matchFurnishing = filters.furnishing === "all" ? true : apt.furnishing === filters.furnishing;
    const matchAvailability = filters.availability === "all" ? true : apt.availability === filters.availability;

    let matchPrice = true;
    if (filters.price !== "all") {
      if (filters.price === "100000+") {
        matchPrice = apt.rent >= 100000;
      } else {
        const [min, max] = filters.price.split("-").map(Number);
        matchPrice = apt.rent >= min && apt.rent <= max;
      }
    }

    return matchLocation && matchBhk && matchFurnishing && matchAvailability && matchPrice;
  });
  // purpose filter (if set)
  const final = filtered.filter(apt => {
    return filters.purpose === 'all' ? true : apt.purpose === filters.purpose;
  });
  renderListings(final);
};

const wireFilters = () => {
  const map = [
    ["filter-location", "location", "input"],
    ["filter-bhk", "bhk", "change"],
    ["filter-furnishing", "furnishing", "change"],
    ["filter-availability", "availability", "change"],
    ["filter-price", "price", "change"]
  ];

  map.forEach(([id, key, evt]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener(evt, (e) => {
      filters[key] = e.target.value;
      applyFilters();
    });
  });

  const clearBtn = document.getElementById("clear-filters");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      filters.location = "";
      filters.bhk = "all";
      filters.furnishing = "all";
      filters.availability = "all";
      filters.price = "all";

      const filterLoc = document.getElementById("filter-location");
      if (filterLoc) filterLoc.value = "";
      document.getElementById("filter-bhk").value = "all";
      document.getElementById("filter-furnishing").value = "all";
      document.getElementById("filter-availability").value = "all";
      document.getElementById("filter-price").value = "all";
      applyFilters();
    });
  }
};

const wireHeroSearch = () => {
  const heroBtn = document.getElementById("hero-search");
  if (!heroBtn) return;
  heroBtn.addEventListener("click", () => {
    filters.location = document.getElementById("hero-location").value;
    filters.bhk = document.getElementById("hero-bhk").value;
    filters.availability = document.getElementById("hero-availability").value;
    filters.price = document.getElementById("hero-price").value;

    // sync filter sidebar
    const filterLoc = document.getElementById("filter-location");
    if (filterLoc) filterLoc.value = filters.location;
    document.getElementById("filter-bhk").value = filters.bhk;
    document.getElementById("filter-availability").value = filters.availability;
    document.getElementById("filter-price").value = filters.price;

    applyFilters();
    const browse = document.getElementById("browse");
    if (browse) browse.scrollIntoView({ behavior: "smooth" });
  });
};

const wireTabs = () => {
  const pills = document.querySelectorAll(".pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
    });
  });
};

const wireNav = () => {
  // Primary nav links: only intercept internal fragment links (#id). External/page links should navigate normally.
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
      // otherwise allow normal navigation (to buy.html, rent.html, etc.)
    });
  });
};

const init = () => {
  renderFeatured();

  if (window.preventInitialRender) {
    // Show placeholder instead of full list
    const grid = document.getElementById("listings-grid");
    if (grid) {
      grid.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
          <div class="no-results-icon" style="font-size: 48px; margin-bottom: 16px;">🔍</div>
          <p style="font-size: 18px; color: var(--muted);">Please apply filters to search for properties.</p>
        </div>
      `;
    }
    const count = document.getElementById("results-count");
    if (count) count.textContent = "Apply filters to search";
  } else {
    renderListings(apartments);
  }

  wireFilters();
  wireHeroSearch();
  wireTabs();
  wireNav();

  const viewAll = document.getElementById("view-all");
  if (viewAll) {
    viewAll.addEventListener("click", () => {
      const browse = document.getElementById("browse");
      if (browse) browse.scrollIntoView({ behavior: "smooth" });
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// ---------- Modal ----------
const modal = document.getElementById("details-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalLocation = document.getElementById("modal-location");
const modalAvailability = document.getElementById("modal-availability");
const modalPrice = document.getElementById("modal-price");
const modalTags = document.getElementById("modal-tags");
const modalFacts = document.getElementById("modal-facts");
const modalAmenities = document.getElementById("modal-amenities");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalMainImg = document.getElementById("modal-main-img");
const modalThumbs = document.getElementById("modal-thumbs");

const openModal = (apartment) => {
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  const fallback = "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop";
  const imgs = apartment.images && apartment.images.length ? apartment.images : [fallback];
  const primary = imgs[0] || fallback;
  if (modalImg) modalImg.style.backgroundImage = `url('${primary}')`;
  modalTitle.textContent = apartment.title;
  modalLocation.textContent = apartment.location;
  modalAvailability.textContent = availabilityLabels[apartment.availability] || "";
  modalPrice.textContent = formatPrice(apartment.rent);

  modalTags.innerHTML = `
    <span class="chip">${apartment.bhk || "Studio"} BHK</span>
    <span class="chip">${furnishingLabels[apartment.furnishing]}</span>
    <span class="chip">${apartment.area} sqft</span>
    <span class="chip">${apartment.city}</span>
  `;

  modalFacts.innerHTML = `
    <div class="fact"><span>Availability</span>${availabilityLabels[apartment.availability]}</div>
    <div class="fact"><span>Type</span>${apartment.bhk ? `${apartment.bhk} BHK` : "Studio/Plot"}</div>
    <div class="fact"><span>Furnishing</span>${furnishingLabels[apartment.furnishing]}</div>
    <div class="fact"><span>Area</span>${apartment.area} sqft</div>
    <div class="fact"><span>City</span>${apartment.city}</div>
    <div class="fact"><span>Pets</span>${apartment.petsAllowed ? "Allowed" : "Not allowed"}</div>
    <div class="fact"><span>Deposit</span>${formatCurrency(apartment.deposit)}</div>
    <div class="fact"><span>Maintenance</span>${formatCurrency(apartment.maintenance)}/mo</div>
  `;

  const amenities = apartment.amenities && apartment.amenities.length ? apartment.amenities : ["Parking"];
  modalAmenities.innerHTML = amenities.map((a) => `<span class="chip">${a}</span>`).join("");

  // Gallery: prefer interior image (second image) for the large view when available
  const interior = imgs[1] || primary;
  if (modalMainImg) { modalMainImg.style.backgroundImage = `url('${interior}')`; modalMainImg.style.opacity = '1'; }
  if (modalThumbs) {
    // Create thumbs with <img> loaders so we can handle onerror and set fallback backgrounds
    modalThumbs.innerHTML = imgs.map((src, idx) => `
        <div class="modal__thumb ${idx === 0 ? "active" : ""}" data-src="${src}">
          <img src="${src}" alt="thumb" onload="this.parentElement.style.backgroundImage='url(${src})'; this.parentElement.style.opacity='1'; this.style.display='none'" onerror="this.parentElement.style.backgroundImage='url(${fallback})'; this.parentElement.style.opacity='1'; this.remove();" style="display:block;width:0;height:0;visibility:hidden;" />
        </div>
    `).join("");
    modalThumbs.querySelectorAll(".modal__thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.getAttribute("data-src");
        modalThumbs.querySelectorAll(".modal__thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        if (modalMainImg) modalMainImg.style.backgroundImage = `url('${src || fallback}')`;
      });
    });
  }
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
};

const bindDetails = () => {
  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      const apt = apartments.find((a) => a.id === id);
      if (apt) {
        openModal(apt);

        // Add EMI Calculator
        setTimeout(() => {
          addEMIToModal(apt);
        }, 200);
      }
    });
  });
};

// Function to add EMI calculator to modal
const addEMIToModal = (apartment) => {
  const emiButton = document.getElementById('modal-emi-btn');
  const emiContainer = document.getElementById('modal-emi-container');

  if (!emiButton || !emiContainer) {
    console.log('EMI button or container not found');
    return;
  }

  if (typeof createEMICalculator !== 'function') {
    console.log('createEMICalculator function not found');
    return;
  }

  // Property price estimation
  const propertyPrice = apartment.rent * 100;
  const deposit = apartment.deposit || propertyPrice * 0.2;

  // Clear and hide container
  emiContainer.innerHTML = '';
  emiContainer.style.display = 'none';
  emiButton.innerHTML = '💰 Calculate EMI';

  // Create calculator HTML
  const calculatorHTML = createEMICalculator(propertyPrice, deposit);
  emiContainer.innerHTML = calculatorHTML;

  // Add click handler (remove any existing listeners first)
  emiButton.onclick = null;
  emiButton.onclick = function () {
    if (emiContainer.style.display === 'none') {
      emiContainer.style.display = 'block';
      emiButton.textContent = '✖ Hide Calculator';
      setTimeout(() => {
        if (typeof initializeEMICalculator === 'function') {
          initializeEMICalculator();
        }
      }, 100);
    } else {
      emiContainer.style.display = 'none';
      emiButton.innerHTML = '💰 Calculate EMI';
    }
  };

  console.log('EMI calculator initialized for property:', apartment.title);
};

if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
if (modalClose) modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});