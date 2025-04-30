const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Charming Cottage Getaway #1",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 1022,
    location: "San Francisco",
    country: "France"
  },
{
    title: "Historic Townhouse #2",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3884,
    location: "San Francisco",
    country: "United States"
  },
{
    title: "Cozy Cabin in the Woods #3",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 4964,
    location: "San Francisco",
    country: "United States"
  },
{
    title: "Urban Apartment Oasis #4",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 709,
    location: "Boston",
    country: "Canada"
  },
{
    title: "Charming Cottage Getaway #5",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3609,
    location: "Denver",
    country: "Germany"
  },
{
    title: "Charming Cottage Getaway #6",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 846,
    location: "Miami",
    country: "Canada"
  },
{
    title: "Mountain View Lodge #7",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3055,
    location: "Miami",
    country: "Portugal"
  },
{
    title: "Modern Loft in Downtown #8",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3929,
    location: "San Francisco",
    country: "Italy"
  },
{
    title: "Historic Townhouse #9",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 2599,
    location: "Denver",
    country: "Italy"
  },
{
    title: "Beachfront Bungalow #10",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 1667,
    location: "Miami",
    country: "Canada"
  },
{
    title: "Luxury Villa with Sea View #11",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 2819,
    location: "Chicago",
    country: "Germany"
  },
{
    title: "Urban Apartment Oasis #12",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Chicago",
    country: "Portugal"
  },
{
    title: "Mountain View Lodge #13",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2409,
    location: "Austin",
    country: "Australia"
  },
{
    title: "Cozy Cabin in the Woods #14",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 897,
    location: "San Francisco",
    country: "Italy"
  },
{
    title: "Secluded Treehouse #15",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 3203,
    location: "Boston",
    country: "France"
  },
{
    title: "Beachfront Bungalow #16",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2568,
    location: "Austin",
    country: "United Kingdom"
  },
{
    title: "Modern Loft in Downtown #17",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 3776,
    location: "Austin",
    country: "United Kingdom"
  },
{
    title: "Rustic Farmhouse Retreat #18",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1811,
    location: "Austin",
    country: "Italy"
  },
{
    title: "Historic Townhouse #19",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 3327,
    location: "Los Angeles",
    country: "Australia"
  },
{
    title: "Rustic Farmhouse Retreat #20",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 1410,
    location: "New York City",
    country: "France"
  },
{
    title: "Historic Townhouse #21",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 3234,
    location: "Los Angeles",
    country: "Italy"
  },
{
    title: "Beachfront Bungalow #22",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 1046,
    location: "Austin",
    country: "Portugal"
  },
{
    title: "Modern Loft in Downtown #23",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 4595,
    location: "Los Angeles",
    country: "France"
  },
{
    title: "Luxury Villa with Sea View #24",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 2453,
    location: "New York City",
    country: "Portugal"
  },
{
    title: "Charming Cottage Getaway #25",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 597,
    location: "New York City",
    country: "United States"
  },
{
    title: "Charming Cottage Getaway #26",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 4355,
    location: "Portland",
    country: "Netherlands"
  },
{
    title: "Urban Apartment Oasis #27",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 596,
    location: "Denver",
    country: "United Kingdom"
  },
{
    title: "Urban Apartment Oasis #28",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 542,
    location: "Los Angeles",
    country: "Germany"
  },
{
    title: "Charming Cottage Getaway #29",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3073,
    location: "Portland",
    country: "Portugal"
  },
{
    title: "Luxury Villa with Sea View #30",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4348,
    location: "Chicago",
    country: "Portugal"
  },
{
    title: "Rustic Farmhouse Retreat #31",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 674,
    location: "New York City",
    country: "Canada"
  },
{
    title: "Beachfront Bungalow #32",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 1539,
    location: "Austin",
    country: "Spain"
  },
{
    title: "Cozy Cabin in the Woods #33",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 1192,
    location: "Denver",
    country: "Portugal"
  },
{
    title: "Mountain View Lodge #34",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4481,
    location: "Denver",
    country: "United Kingdom"
  },
{
    title: "Rustic Farmhouse Retreat #35",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3943,
    location: "Boston",
    country: "Australia"
  },
{
    title: "Modern Loft in Downtown #36",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2820,
    location: "Austin",
    country: "United Kingdom"
  },
{
    title: "Rustic Farmhouse Retreat #37",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1023,
    location: "Austin",
    country: "Italy"
  },
{
    title: "Modern Loft in Downtown #38",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 4327,
    location: "Denver",
    country: "United States"
  },
{
    title: "Urban Apartment Oasis #39",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 850,
    location: "Denver",
    country: "Spain"
  },
{
    title: "Urban Apartment Oasis #40",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1827,
    location: "Portland",
    country: "Portugal"
  },
{
    title: "Luxury Villa with Sea View #41",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1970,
    location: "Austin",
    country: "Spain"
  },
{
    title: "Modern Loft in Downtown #42",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 601,
    location: "Portland",
    country: "United Kingdom"
  },
{
    title: "Luxury Villa with Sea View #43",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 3796,
    location: "Chicago",
    country: "France"
  },
{
    title: "Cozy Cabin in the Woods #44",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1895,
    location: "New York City",
    country: "United States"
  },
{
    title: "Luxury Villa with Sea View #45",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 4897,
    location: "San Francisco",
    country: "Canada"
  },
{
    title: "Rustic Farmhouse Retreat #46",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 4803,
    location: "Chicago",
    country: "United Kingdom"
  },
{
    title: "Secluded Treehouse #47",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 4003,
    location: "Denver",
    country: "Canada"
  },
{
    title: "Historic Townhouse #48",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3345,
    location: "Chicago",
    country: "Italy"
  },
{
    title: "Urban Apartment Oasis #49",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1013,
    location: "New York City",
    country: "France"
  },
{
    title: "Secluded Treehouse #50",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 972,
    location: "Denver",
    country: "Netherlands"
  },
{
    title: "Luxury Villa with Sea View #51",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 4326,
    location: "Boston",
    country: "United States"
  },
{
    title: "Cozy Cabin in the Woods #52",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1245,
    location: "Seattle",
    country: "United States"
  },
{
    title: "Beachfront Bungalow #53",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 4333,
    location: "Chicago",
    country: "Netherlands"
  },
{
    title: "Beachfront Bungalow #54",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 976,
    location: "Austin",
    country: "United Kingdom"
  },
{
    title: "Secluded Treehouse #55",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 4993,
    location: "Portland",
    country: "United States"
  },
{
    title: "Modern Loft in Downtown #56",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 1245,
    location: "Los Angeles",
    country: "Portugal"
  },
{
    title: "Urban Apartment Oasis #57",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 4982,
    location: "Chicago",
    country: "France"
  },
{
    title: "Secluded Treehouse #58",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 789,
    location: "Los Angeles",
    country: "Portugal"
  },
{
    title: "Mountain View Lodge #59",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 4888,
    location: "Los Angeles",
    country: "Australia"
  },
{
    title: "Charming Cottage Getaway #60",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3151,
    location: "Portland",
    country: "Netherlands"
  },
{
    title: "Charming Cottage Getaway #61",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 1309,
    location: "Portland",
    country: "France"
  },
{
    title: "Urban Apartment Oasis #62",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 4740,
    location: "Los Angeles",
    country: "Spain"
  },
{
    title: "Beachfront Bungalow #63",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 3857,
    location: "San Francisco",
    country: "United Kingdom"
  },
{
    title: "Cozy Cabin in the Woods #64",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3979,
    location: "Seattle",
    country: "France"
  },
{
    title: "Luxury Villa with Sea View #65",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 2864,
    location: "Los Angeles",
    country: "Canada"
  },
{
    title: "Beachfront Bungalow #66",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 982,
    location: "Austin",
    country: "United States"
  },
{
    title: "Luxury Villa with Sea View #67",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1138,
    location: "Austin",
    country: "Italy"
  },
{
    title: "Charming Cottage Getaway #68",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 574,
    location: "Chicago",
    country: "Portugal"
  },
{
    title: "Secluded Treehouse #69",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2406,
    location: "New York City",
    country: "United States"
  },
{
    title: "Beachfront Bungalow #70",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 3541,
    location: "Seattle",
    country: "Germany"
  },
{
    title: "Modern Loft in Downtown #71",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3428,
    location: "Los Angeles",
    country: "United States"
  },
{
    title: "Charming Cottage Getaway #72",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 3926,
    location: "Los Angeles",
    country: "Germany"
  },
{
    title: "Mountain View Lodge #73",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3306,
    location: "Portland",
    country: "Italy"
  },
{
    title: "Charming Cottage Getaway #74",
    description: "A touch of history with a modern twist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 714,
    location: "San Francisco",
    country: "United Kingdom"
  },
{
    title: "Mountain View Lodge #75",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 688,
    location: "Austin",
    country: "United Kingdom"
  },
{
    title: "Beachfront Bungalow #76",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2869,
    location: "New York City",
    country: "Netherlands"
  },
{
    title: "Mountain View Lodge #77",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2130,
    location: "Portland",
    country: "Spain"
  },
{
    title: "Mountain View Lodge #78",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4173,
    location: "New York City",
    country: "Germany"
  },
{
    title: "Modern Loft in Downtown #79",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3069,
    location: "San Francisco",
    country: "Portugal"
  },
{
    title: "Secluded Treehouse #80",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3136,
    location: "Chicago",
    country: "United States"
  },
{
    title: "Secluded Treehouse #81",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 1186,
    location: "Miami",
    country: "United Kingdom"
  },
{
    title: "Urban Apartment Oasis #82",
    description: "Wake up to the sound of the waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2354,
    location: "Austin",
    country: "United States"
  },
{
    title: "Modern Loft in Downtown #83",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 4995,
    location: "San Francisco",
    country: "France"
  },
{
    title: "Secluded Treehouse #84",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2535,
    location: "Austin",
    country: "Italy"
  },
{
    title: "Modern Loft in Downtown #85",
    description: "Stay in the heart of the action with style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 1613,
    location: "Denver",
    country: "Australia"
  },
{
    title: "Luxury Villa with Sea View #86",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 4064,
    location: "Miami",
    country: "Canada"
  },
{
    title: "Luxury Villa with Sea View #87",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2166,
    location: "Denver",
    country: "Italy"
  },
{
    title: "Mountain View Lodge #88",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 1921,
    location: "Portland",
    country: "Italy"
  },
{
    title: "Historic Townhouse #89",
    description: "A rustic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4690,
    location: "New York City",
    country: "Canada"
  },
{
    title: "Beachfront Bungalow #90",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 727,
    location: "Seattle",
    country: "Spain"
  },
{
    title: "Secluded Treehouse #91",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 3988,
    location: "Denver",
    country: "Australia"
  },
{
    title: "Cozy Cabin in the Woods #92",
    description: "Escape to nature in this charming retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 746,
    location: "Boston",
    country: "Netherlands"
  },
{
    title: "Urban Apartment Oasis #93",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ec5e69ba187?auto=format&fit=crop&w=800&q=60"
    },
    price: 764,
    location: "Seattle",
    country: "Italy"
  },
{
    title: "Urban Apartment Oasis #94",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2729,
    location: "Chicago",
    country: "United Kingdom"
  },
{
    title: "Luxury Villa with Sea View #95",
    description: "Urban living with serene interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 2016,
    location: "New York City",
    country: "Germany"
  },
{
    title: "Urban Apartment Oasis #96",
    description: "Unmatched mountain views and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2143,
    location: "Boston",
    country: "United Kingdom"
  },
{
    title: "Rustic Farmhouse Retreat #97",
    description: "Perfect for a peaceful weekend away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    },
    price: 4968,
    location: "Portland",
    country: "Australia"
  },
{
    title: "Charming Cottage Getaway #98",
    description: "Sleep among the treetops in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 633,
    location: "Austin",
    country: "France"
  },
{
    title: "Urban Apartment Oasis #99",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 916,
    location: "Chicago",
    country: "Canada"
  },
{
    title: "Modern Loft in Downtown #100",
    description: "Experience luxury like never before.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 802,
    location: "San Francisco",
    country: "United Kingdom"
  },
];

module.exports = { data: sampleListings };