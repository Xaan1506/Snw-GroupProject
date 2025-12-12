// Updated image URLs for apartments - each property has unique, appropriate images
// Use this to update cursor.js

const updatedApartmentImages = {
    1: [ // Modern 1 BHK Apartment
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=600&fit=crop", // modern minimal living room
        "https://images.unsplash.com/photo-1556909114-44e3e4d18634?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1565183997392-2f96f816adc8?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop" // apartment living room
    ],
    2: [ // Spacious 2 BHK Flat
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop", // spacious living room
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-15566911220-bff31c812dba?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop" // exterior
    ],
    3: [ // 2 BHK Apartment for Rent
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop", // cozy living room
        "https://images.unsplash.com/photo-1616627424730-8748d5c76d2c?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1565183928294-7d22ff18e48a?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop" // building
    ],
    4: [ // Luxury 5 BHK Villa
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop", // luxury villa living
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop", // villa bedroom
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop", // luxury kitchen
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop" // villa exterior
    ],
    5: [ // 2 BHK Budget Apartment
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", // simple living
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop", // basic kitchen
        "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop" // building
    ],
    6: [ // Premium 3 BHK Penthouse
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", // penthouse living
        "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop", // luxury bed
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop", // modern kitchen
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" // penthouse building
    ],
    7: [ // Commercial Office Space
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // modern office
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", // office space
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop", // conference room
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" // office building
    ],
    8: [ // Independent House
        "https://images.unsplash.com/photo-1564013799919-ab600027fc6?w=800&h=600&fit=crop", // house interior
        "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1560261027-b0f93b8ccc0b?w=800&h=600&fit=crop", // dining
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop" // house exterior
    ],
    9: [ // Residential Plot Lease
        "https://images.unsplash.com/photo-1500382017468-f049863256f9?w=800&h=600&fit=crop", // land plot
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop", // plot view
        "https://images.unsplash.com/photo-1474906566174-e882339b2407?w=800&h=600&fit=crop", // landscape
        "https://images.unsplash.com/photo-1518098268026-4e89f1a2c008?w=800&h=600&fit=crop" // plot area
    ],
    10: [ // Premium 3 BHK Apartment
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", // premium living
        "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556909114-f210e0c3c94c?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop" // exterior
    ],
    11: [ // Family 2 BHK Home
        "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop", // family living
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop", // sofa
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1560260386-f44d92e4d969?w=800&h=600&fit=crop" // building
    ],
    12: [ // Cozy 1 BHK Studio
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop", // studio apartment
        "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=800&h=600&fit=crop", // studio interior
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop", // compact kitchen
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop" // studio building
    ],
    13: [ // Sunny 1 BHK Near Metro
        "https://images.unsplash.com/photo-1515565131203-8469341bcee0?w=800&h=600&fit=crop", // bright living
        "https://images.unsplash.com/photo-1560449752-9d0e0f90f214?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&h=600&fit=crop" // exterior
    ],
    14: [ // Compact Studio
        "https://images.unsplash.com/photo-1547432296-6b513ee5d53c?w=800&h=600&fit=crop", // compact living
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop", // bed area
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop", // kitchenette
        "https://images.unsplash.com/photo-1591247378418-c77f1532d2f8?w=800&h=600&fit=crop" // building
    ],
    15: [ // 3 BHK Family Apartment
        "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800&h=600&fit=crop", // family room
        "https://images.unsplash.com/photo-1505706346881-b72b27e84530?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", // furniture
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&h=600&fit=crop" // exterior
    ],
    16: [ // 2 BHK Near IT Park
        "https://images.unsplash.com/photo-1551632786-de41ec297b89?w=800&h=600&fit=crop", // modern living
        "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop", // home office
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?w=800&h=600&fit=crop" // building
    ],
    17: [ // Budget 1BHK
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop", // budget living
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop", // simple bed
        "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop", // basic kitchen
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop" // building
    ],
    18: [ // Luxury 4 BHK
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", // luxury living
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop", // master bedroom
        "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop", // modern kitchen
        "https://images.unsplash.com/photo-1600573472592-a1bae4a45fc0?w=800&h=600&fit=crop" // exterior
    ],
    19: [ // 1 BHK Serviced Apartment
        "https://images.unsplash.com/photo-1591247378147-11e80317049f?w=800&h=600&fit=crop", // serviced apt
        "https://images.unsplash.com/photo-1546439531-bb4cbc1b6f85?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556909190-2dd31c2e365b?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1554009975-d74653b879f1?w=800&h=600&fit=crop" // hotel building
    ],
    20: [ // Mid-range 2 BHK
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop", // mid-range living
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop", // dining
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" // apartment
    ],
    21: [ // 3 BHK Corner Flat
        "https://images.unsplash.com/photo-1560260386-f44d92e4d969?w=800&h=600&fit=crop", // corner flat living
        "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop" // exterior
    ],
    22: [ // Studio Near Business District
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&h=600&fit=crop", // business district studio
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop", // bed
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop", // workspace
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" // business building
    ],
    23: [ // Affordable 2 BHK
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop", // affordable living
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop" // building
    ],
    24: [ // Family Villa
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", // villa living
        "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop", // villa bedroom
        "https://images.unsplash.com/photo-1615875221248-cd6e694329e4?w=800&h=600&fit=crop", // villa interior
        "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop" // villa exterior
    ],
    25: [ // Economy Room
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop", // economy room
        "https://images.unsplash.com/photo-1505692952047-1a78307d0f29?w=800&h=600&fit=crop", // simple bed
        "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop", // basic kitchen
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop" // building
    ],
    26: [ // Business Bay 2 BHK
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop", // business bay
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" // bay building
    ],
    27: [ // Compact 2 BHK
        "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop", // compact living
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop" // exterior
    ],
    28: [ // Highrise 1 BHK
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", // highrise living
        "https://images.unsplash.com/photo-1631049307230-6f504e4c4dd4?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", // interior
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" // highrise building
    ],
    29: [ // Penthouse Studio
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop", // penthouse studio
        "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop", // luxury bed
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop", // penthouse interior
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop" // penthouse
    ],
    30: [ // Countryside House
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop", // countryside living
        "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop", // interior
        "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=600&fit=crop" // countryside house
    ],
    31: [ // Student 1BHK
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=800&h=600&fit=crop", // student room
        "https://images.unsplash.com/photo-1505692952047-1a78307d0f29?w=800&h=600&fit=crop", // single bed
        "https://images.unsplash.com/photo-1585339210309-7f45745b0ced?w=800&h=600&fit=crop", // student kitchen
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop" // student housing
    ],
    32: [ // Executive 2 BHK
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop", // executive living
        "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop", // executive bedroom
        "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop", // modern kitchen
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop" // executive building
    ],
    33: [ // Garden Villa
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", // garden villa living
        "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop", // villa bedroom
        "https://images.unsplash.com/photo-1615875221248-cd6e694329e4?w=800&h=600&fit=crop", // villa room
        "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop" // villa with garden
    ],
    34: [ // Compact 3 BHK
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop", // 3bhk living
        "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&h=600&fit=crop", // bedroom
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop" // building
    ],
    35: [ // Work-Ready 1BHK
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop", // work ready living
        "https://images.unsplash.com/photo-1631049307230-6f504e4c4dd4?w=800&h=600&fit=crop", // bedroom/office
        "https://images.unsplash.com/photo-1556909114-b1a8f0fe7a4c?w=800&h=600&fit=crop", // kitchen
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop" // building
    ],
    36: [ // Comfort 2 BHK
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop", // comfortable living
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop", // cozy bedroom
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", // dining
        "https://images.unsplash.com/photo-1544457070-4ab266521371?w=800&h=600&fit=crop" // comfortable building
    ]
};
