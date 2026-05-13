const servicesData = {
  "ELECTRICAL WORK": {
    services: [
      { id: 1, name: "Fan Installation", price: 199, time: "1 hour", rating: "4.8", reviews: 120, desc: "Fan installation service", img: "/images/fan.jpg" },
      { id: 2, name: "Light Installation", price: 149, time: "45 min", rating: "4.6", reviews: 80, desc: "Light fixing service", img: "/images/light.jpg" },
      { id: 3, name: "Switch Repair", price: 99, time: "30 min", rating: "4.5", reviews: 60, desc: "Fix switches", img: "/images/switchr.jpg" },
      { id: 4, name: "Wiring Setup", price: 299, time: "2 hours", rating: "4.7", reviews: 90, desc: "Complete wiring setup", img: "/images/wire.jpg" },
      { id: 5, name: "MCB Repair", price: 199, time: "1 hour", rating: "4.6", reviews: 70, desc: "Fix MCB issues", img: "/images/mcb.jpg" },
      { id: 6, name: "Inverter Setup", price: 399, time: "2 hours", rating: "4.8", reviews: 110, desc: "Install inverter", img: "/images/in.jpg" },
      { id: 7, name: "Door Bell Install", price: 129, time: "40 min", rating: "4.4", reviews: 50, desc: "Doorbell setup", img: "/images/doorbell.jpg" },
      { id: 8, name: "Tube Light Fix", price: 89, time: "20 min", rating: "4.3", reviews: 40, desc: "Tube repair", img: "/images/tb.jpg" },
      { id: 9, name: "Socket Replace", price: 109, time: "30 min", rating: "4.5", reviews: 65, desc: "Replace sockets", img: "/images/switch.jpg" },
      { id: 10, name: "Chandelier Install", price: 499, time: "3 hours", rating: "4.9", reviews: 150, desc: "Luxury light install", img: "/images/cn.jpg" }
    ]
  },

  "PLUMBING WORK": {
    services: [
      { id: 11, name: "Tap Repair", price: 99, time: "30 min", rating: "4.5", reviews: 60, desc: "Fix taps", img: "/images/tap.jpg" },
      { id: 12, name: "Leak Fix", price: 149, time: "45 min", rating: "4.6", reviews: 70, desc: "Fix leakage", img: "/images/leak.jpg" },
      { id: 13, name: "Pipe Installation", price: 299, time: "2 hours", rating: "4.7", reviews: 80, desc: "Install pipes", img: "/images/pipe.jpg" },
      { id: 14, name: "Bathroom Fitting", price: 399, time: "3 hours", rating: "4.8", reviews: 90, desc: "Bathroom setup", img: "/images/bath.jpg" },
      { id: 15, name: "Drain Cleaning", price: 199, time: "1 hour", rating: "4.6", reviews: 75, desc: "Clean drainage", img: "/images/drain.jpg" },
      { id: 16, name: "Water Tank Clean", price: 499, time: "3 hours", rating: "4.7", reviews: 100, desc: "Tank cleaning", img: "/images/tank.jpg" },
      { id: 17, name: "Shower Install", price: 199, time: "1 hour", rating: "4.5", reviews: 60, desc: "Install shower", img: "/images/shower.jpg" },
      { id: 18, name: "Toilet Repair", price: 249, time: "1 hour", rating: "4.6", reviews: 70, desc: "Fix toilet", img: "/images/tolet.jpg" },
      { id: 19, name: "Sink Install", price: 299, time: "2 hours", rating: "4.7", reviews: 85, desc: "Install sink", img: "/images/sink.jpg" },
      { id: 20, name: "Motor Repair", price: 399, time: "2 hours", rating: "4.8", reviews: 95, desc: "Fix water motor", img: "/images/motor.jpg" }
    ]
  },

  "HOME DECOR": {
    services: [
      { id: 21, name: "Wall Painting", price: 599, time: "4 hours", rating: "4.8", reviews: 110, desc: "Professional wall painting service", img: "/images/paint.jpg" },
      { id: 22, name: "Wallpaper Installation", price: 699, time: "5 hours", rating: "4.7", reviews: 75, desc: "Stylish wallpaper fitting", img: "/images/wallpaper.jpg" },
      { id: 23, name: "Curtain Fitting", price: 199, time: "1 hour", rating: "4.5", reviews: 60, desc: "Curtain rod and fitting", img: "/images/curtain.jpg" },
      { id: 24, name: "Wall Frame Setup", price: 149, time: "45 min", rating: "4.6", reviews: 55, desc: "Install wall frames and paintings", img: "/images/wallframe.jpg" },
      { id: 25, name: "Ceiling Decor", price: 799, time: "6 hours", rating: "4.8", reviews: 48, desc: "Decorative ceiling design work", img: "/images/ceiling.jpg" },
      { id: 26, name: "TV Unit Decor", price: 499, time: "3 hours", rating: "4.7", reviews: 64, desc: "Decor and setup for TV wall units", img: "/images/tv.jpg" },
      { id: 27, name: "Mirror Installation", price: 249, time: "1 hour", rating: "4.6", reviews: 52, desc: "Install decorative mirrors", img: "/images/mirror.jpg" },
      { id: 28, name: "Furniture Decor Setup", price: 399, time: "2 hours", rating: "4.5", reviews: 41, desc: "Home furniture styling and arrangement", img: "/images/furniture.jpg" },
      { id: 29, name: "LED Decor Lights", price: 299, time: "1.5 hours", rating: "4.7", reviews: 80, desc: "Decorative LED light setup", img: "/images/home.jpg" },
      { id: 30, name: "Sofa Area Styling", price: 349, time: "2 hours", rating: "4.6", reviews: 38, desc: "Modern living room styling", img: "/images/sofa.jpg" }
    ]
  },

  "GARDEN WORK": {
    services: [
      { id: 31, name: "Lawn Mowing", price: 299, time: "1 hour", rating: "4.7", reviews: 66, desc: "Trim and clean lawn grass", img: "/images/grasscutting.jpg" },
      { id: 32, name: "Plant Maintenance", price: 249, time: "1 hour", rating: "4.6", reviews: 59, desc: "Care for indoor and outdoor plants", img: "/images/plant.jpg" },
      { id: 33, name: "Garden Cleaning", price: 399, time: "2 hours", rating: "4.7", reviews: 72, desc: "Full garden cleaning service", img: "/images/garden.jpg" },
      { id: 34, name: "Tree Trimming", price: 499, time: "3 hours", rating: "4.8", reviews: 44, desc: "Cut and shape trees safely", img: "/images/tree.jpg" },
      { id: 35, name: "Pot Setup", price: 149, time: "45 min", rating: "4.5", reviews: 37, desc: "Arrange garden pots nicely", img: "/images/pot.jpg" },
      { id: 36, name: "New Plantation", price: 349, time: "2 hours", rating: "4.7", reviews: 50, desc: "Plant new flowers and saplings", img: "/images/plant.jpg" },
      { id: 37, name: "Grass Carpet Setup", price: 699, time: "4 hours", rating: "4.8", reviews: 31, desc: "Artificial or natural grass setup", img: "/images/grass.jpg" },
      { id: 38, name: "Garden Watering System", price: 799, time: "5 hours", rating: "4.9", reviews: 29, desc: "Install watering pipeline system", img: "/images/water.jpg" },
      { id: 39, name: "Terrace Garden Setup", price: 999, time: "6 hours", rating: "4.8", reviews: 26, desc: "Complete terrace garden design", img: "/images/terrace.jpg" },
      { id: 40, name: "Soil Replacement", price: 199, time: "1 hour", rating: "4.5", reviews: 35, desc: "Replace old garden soil", img: "/images/soil.jpg" }
    ]
  },

 "WELDING WORK": {
  services: [
    { id: 41, name: "Gate Welding", price: 599, time: "3 hours", rating: "4.8", reviews: 67, desc: "Main gate welding and repair", img: "/images/gate.jpg" },
    { id: 42, name: "Window Grill Repair", price: 399, time: "2 hours", rating: "4.6", reviews: 48, desc: "Repair damaged window grills", img: "/images/window.jpg" },
    { id: 43, name: "Iron Door Fix", price: 499, time: "2.5 hours", rating: "4.7", reviews: 52, desc: "Iron door joint and lock area welding", img: "/images/iron.jpg" },
    { id: 44, name: "Steel Frame Setup", price: 999, time: "6 hours", rating: "4.8", reviews: 39, desc: "Heavy steel frame welding setup", img: "/images/download (5).jpg" },
    { id: 45, name: "Balcony Railing Repair", price: 549, time: "3 hours", rating: "4.7", reviews: 45, desc: "Fix balcony railing safely", img: "/images/balcony.jpg" },
    { id: 46, name: "Shed Fabrication", price: 1299, time: "8 hours", rating: "4.9", reviews: 28, desc: "Custom metal shed welding", img: "/images/shed.jpg" },
    { id: 47, name: "Bed Frame Welding", price: 349, time: "2 hours", rating: "4.5", reviews: 36, desc: "Metal bed frame repair", img: "/images/bed.jpg" },
    { id: 48, name: "Chair Welding", price: 199, time: "1 hour", rating: "4.4", reviews: 31, desc: "Metal chair welding service", img: "/images/chair.jpg" },
    { id: 49, name: "Pipe Joint Welding", price: 449, time: "2.5 hours", rating: "4.6", reviews: 42, desc: "Pipe and support welding", img: "/images/pipeweld.jpg" },
    { id: 50, name: "Custom Fabrication", price: 1499, time: "1 day", rating: "4.9", reviews: 24, desc: "Custom metal design work", img: "/images/custom.jpg" }
  ]
},

  "AC & APPLIANCE": {
    services: [
      { id: 51, name: "AC Service", price: 499, time: "1 hour", rating: "4.8", reviews: 140, desc: "AC general servicing", img: "/ac.jpg" },
      { id: 52, name: "AC Gas Refill", price: 1499, time: "2 hours", rating: "4.7", reviews: 82, desc: "Refill AC gas", img: "/ac.jpg" },
      { id: 53, name: "Washing Machine Repair", price: 399, time: "1.5 hours", rating: "4.6", reviews: 91, desc: "Fix washing machine issues", img: "/images/washing.jpg" },
      { id: 54, name: "Refrigerator Repair", price: 449, time: "2 hours", rating: "4.7", reviews: 85, desc: "Cooling problem repair", img: "/images/download (8).jpg" },
      { id: 55, name: "Microwave Repair", price: 299, time: "1 hour", rating: "4.5", reviews: 53, desc: "Microwave service and repair", img: "/images/microwave.jpg" },
      { id: 56, name: "TV Installation", price: 349, time: "1 hour", rating: "4.7", reviews: 70, desc: "Wall mount TV installation", img: "/images/tv.jpg" },
      { id: 57, name: "Geyser Repair", price: 299, time: "1 hour", rating: "4.6", reviews: 49, desc: "Fix geyser heating issue", img: "/images/gyser.jpg" },
      { id: 58, name: "Cooler Service", price: 249, time: "45 min", rating: "4.4", reviews: 38, desc: "Cooler cleaning and repair", img: "/images/download (9).jpg" },
      { id: 59, name: "RO Repair", price: 349, time: "1 hour", rating: "4.6", reviews: 61, desc: "RO water purifier repair", img: "/images/ro.jpg" },
      { id: 60, name: "Dishwasher Repair", price: 499, time: "2 hours", rating: "4.7", reviews: 35, desc: "Dishwasher maintenance and fixing", img: "/images/repair.jpg" }
    ]
  },

  "HOME SERVICE": {
    services: [
      { id: 61, name: "Sofa Cleaning", price: 399, time: "1.5 hours", rating: "4.7", reviews: 84, desc: "Deep sofa cleaning", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
      { id: 62, name: "Curtain Cleaning", price: 299, time: "1 hour", rating: "4.5", reviews: 43, desc: "Remove dust and wash curtains", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600" },
      { id: 63, name: "Pest Control", price: 799, time: "2 hours", rating: "4.8", reviews: 95, desc: "Control pests and insects", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 64, name: "Carpet Cleaning", price: 349, time: "1 hour", rating: "4.6", reviews: 57, desc: "Full carpet wash and cleanup", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
      { id: 65, name: "Full Home Cleaning", price: 1499, time: "5 hours", rating: "4.9", reviews: 120, desc: "Complete house cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 66, name: "Water Tank Cleaning", price: 599, time: "2.5 hours", rating: "4.7", reviews: 66, desc: "Tank cleaning and sanitizing", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 67, name: "Mattress Cleaning", price: 299, time: "1 hour", rating: "4.5", reviews: 41, desc: "Dust and stain mattress clean", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
      { id: 68, name: "Balcony Cleaning", price: 249, time: "45 min", rating: "4.4", reviews: 36, desc: "Deep balcony washing", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 69, name: "Window Cleaning", price: 199, time: "40 min", rating: "4.5", reviews: 50, desc: "Glass and frame cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 70, name: "Floor Scrubbing", price: 399, time: "1.5 hours", rating: "4.6", reviews: 59, desc: "Machine floor cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" }
    ]
  },

  "CLEANING": {
    services: [
      { id: 71, name: "Basic Cleaning", price: 299, time: "1 hour", rating: "4.5", reviews: 52, desc: "Regular cleaning service", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 72, name: "Deep Cleaning", price: 999, time: "4 hours", rating: "4.8", reviews: 91, desc: "Full deep cleaning service", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 73, name: "Office Cleaning", price: 1499, time: "5 hours", rating: "4.7", reviews: 48, desc: "Commercial office cleaning", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600" },
      { id: 74, name: "Move-in Cleaning", price: 1299, time: "4 hours", rating: "4.8", reviews: 40, desc: "Cleaning before shifting", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 75, name: "Move-out Cleaning", price: 1299, time: "4 hours", rating: "4.7", reviews: 37, desc: "Cleaning after moving out", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 76, name: "Glass Cleaning", price: 249, time: "45 min", rating: "4.4", reviews: 32, desc: "Glass and window cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 77, name: "Dust Removal", price: 199, time: "40 min", rating: "4.3", reviews: 28, desc: "Dust cleaning from furniture", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 78, name: "Vacuum Cleaning", price: 349, time: "1 hour", rating: "4.5", reviews: 35, desc: "Vacuum floor cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
      { id: 79, name: "Sofa Shampooing", price: 449, time: "1.5 hours", rating: "4.6", reviews: 39, desc: "Shampoo wash for sofa", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
      { id: 80, name: "Curtain Steam Cleaning", price: 399, time: "1 hour", rating: "4.5", reviews: 33, desc: "Steam cleaning for curtains", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600" }
    ]
  },

  // "KITCHEN": {
  //   services: [
  //     { id: 81, name: "Kitchen Deep Cleaning", price: 899, time: "3 hours", rating: "4.8", reviews: 76, desc: "Full kitchen cleaning service", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
  //     { id: 82, name: "Chimney Cleaning", price: 499, time: "1 hour", rating: "4.7", reviews: 68, desc: "Remove grease from chimney", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" },
  //     { id: 83, name: "Sink Deep Cleaning", price: 199, time: "30 min", rating: "4.5", reviews: 41, desc: "Sink stain and blockage clean", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
  //     { id: 84, name: "Cabinet Cleaning", price: 349, time: "1 hour", rating: "4.6", reviews: 39, desc: "Kitchen cabinet inside-out cleaning", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
  //     { id: 85, name: "Gas Stove Repair", price: 299, time: "45 min", rating: "4.6", reviews: 55, desc: "Fix kitchen stove issues", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" },
  //     { id: 86, name: "RO Installation", price: 399, time: "1 hour", rating: "4.7", reviews: 49, desc: "Install kitchen RO system", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600" },
  //     { id: 87, name: "Kitchen Tile Cleaning", price: 249, time: "45 min", rating: "4.4", reviews: 28, desc: "Wall and tile cleaning", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
  //     { id: 88, name: "Exhaust Fan Cleaning", price: 199, time: "30 min", rating: "4.3", reviews: 26, desc: "Clean greasy exhaust fan", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" },
  //     { id: 89, name: "Modular Kitchen Repair", price: 699, time: "2 hours", rating: "4.7", reviews: 31, desc: "Fix modular kitchen fittings", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
  //     { id: 90, name: "Kitchen Pest Control", price: 599, time: "1.5 hours", rating: "4.6", reviews: 44, desc: "Pest treatment for kitchen", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" }
  //   ]
  // },

  // "BATHROOM": {
  //   services: [
  //     { id: 91, name: "Bathroom Deep Cleaning", price: 699, time: "2 hours", rating: "4.8", reviews: 82, desc: "Deep clean tiles and fittings", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 92, name: "Toilet Cleaning", price: 199, time: "30 min", rating: "4.5", reviews: 51, desc: "Toilet seat and base cleaning", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 93, name: "Shower Cleaning", price: 249, time: "45 min", rating: "4.4", reviews: 35, desc: "Shower and glass partition cleaning", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 94, name: "Wash Basin Repair", price: 299, time: "1 hour", rating: "4.6", reviews: 43, desc: "Fix wash basin leakage or crack", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 95, name: "Bathroom Fitting Install", price: 399, time: "1.5 hours", rating: "4.7", reviews: 48, desc: "Install new bathroom accessories", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 96, name: "Geyser Installation", price: 499, time: "1.5 hours", rating: "4.7", reviews: 57, desc: "Install bathroom geyser", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 97, name: "Tap Replacement", price: 149, time: "30 min", rating: "4.5", reviews: 34, desc: "Replace damaged taps", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 98, name: "Floor Scrubbing", price: 299, time: "1 hour", rating: "4.6", reviews: 38, desc: "Bathroom floor scrub clean", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 99, name: "Drain Block Removal", price: 249, time: "45 min", rating: "4.5", reviews: 42, desc: "Remove bathroom drain blockage", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" },
  //     { id: 100, name: "Mirror Cleaning & Install", price: 199, time: "40 min", rating: "4.4", reviews: 30, desc: "Bathroom mirror service", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600" }
  //   ]
  // }
};

export default servicesData;