// import React from "react";
// import { Link } from "react-router-dom";
// import { 
//   Home, Zap, Wind, Droplets, 
//   Hammer, Paintbrush, Leaf, Users 
// } from "lucide-react";

// export default function ServicesSection() {
//   const customServices = [
//     {
//       id: "home",
//       title: "General Maintenance",
//       desc: "Small repairs, fixture mounting, and quick fixes.",
//       icon: Home,
//     },
//     {
//       id: "electrical",
//       title: "Electrical Setup",
//       desc: "Wiring, switchboards, and safe appliance installation.",
//       icon: Zap,
//     },
//     {
//       id: "ac",
//       title: "AC & Cooling",
//       desc: "Servicing, repair, and gas refilling for all AC units.",
//       icon: Wind,
//     },
//     {
//       id: "plumbing",
//       title: "Plumbing Services",
//       desc: "Leak repairs, blockages, and pipe installations.",
//       icon: Droplets,
//     },
//     {
//       id: "welding",
//       title: "Welding & Metal",
//       desc: "Gate repair, fabrication, and structural welding.",
//       icon: Hammer,
//     },
//     {
//       id: "decor",
//       title: "Painting & Decor",
//       desc: "Interior painting, wallpaper, and drywall repairs.",
//       icon: Paintbrush,
//     },
//     {
//       id: "garden",
//       title: "Garden & Outdoor",
//       desc: "Landscaping, lawn care, and plant maintenance.",
//       icon: Leaf,
//     },
//     {
//       id: "staff",
//       title: "Staffing & Helpers",
//       desc: "Housekeeping, deep cleaning, and office maintenance.",
//       icon: Users,
//     },
//   ];

//   return (
//     <section id="services" className="py-24 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">
//               Our Services
//             </h2>
//             <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Professional care for every corner of your home
//             </h3>
//           </div>
//           <Link to="/dashboard" className="shrink-0 text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group">
//             View All Services
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
//           </Link>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {customServices.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div 
//                 key={service.id} 
//                 className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
//                   <Icon className="text-indigo-600 group-hover:text-white transition-colors" size={24} strokeWidth={2} />
//                 </div>
                
//                 <h4 className="text-slate-900 font-bold text-lg mb-2">
//                   {service.title}
//                 </h4>
//                 <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
//                   {service.desc}
//                 </p>
                
//                 <Link 
//                   to="/dashboard"
//                   className="inline-flex py-2 px-4 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors w-full justify-center group-hover:bg-indigo-50 group-hover:text-indigo-700"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Zap,
  Wind,
  Droplets,
  Hammer,
  Paintbrush,
  Leaf,
  Users,
} from "lucide-react";
import styles from "./ServicesSection.module.css";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const customServices = [
    {
      id: "home",
      title: "HOME SERVICE",
      desc: "General Fixes, Small Repairs, Emergency Calls.",
      icon: Home,
    },
    {
      id: "electrical",
      title: "ELECTRICAL WORK",
      desc: "Lights, Wiring, Switch Repair, Installation.",
      icon: Zap,
    },
    {
      id: "ac",
      title: "AC & APPLIANCES",
      desc: "AC Repair, Installation, Gas Filling, Servicing.",
      icon: Wind,
    },
    {
      id: "plumbing",
      title: "PLUMBING WORK",
      desc: "Leaks, Blockages, Tap/Flush Repair, Installation.",
      icon: Droplets,
    },
    {
      id: "welding",
      title: "WELDING WORK",
      desc: "Metal Repair, Fabrication, Gate Repair.",
      icon: Hammer,
    },
    {
      id: "decor",
      title: "HOME DECOR",
      desc: "Painting, Wallpaper, Minor Wall Repairs.",
      icon: Paintbrush,
    },
    {
      id: "garden",
      title: "GARDEN WORK",
      desc: "Lawn Maintenance, Planting, Landscaping.",
      icon: Leaf,
    },
    {
      id: "staff",
      title: "STAFF",
      desc: "Commercial Experts, Office Maintenance, Bulk Orders.",
      icon: Users,
    },
  ];

  // Removed API call since services are static
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const res = await api.get("/services/all");
  //       setDynamicServices(res.data);
  //     } catch (err) {
  //       console.error("Failed to fetch dynamic services", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchServices();
  // }, []);

  // Define icon mapping for fetched services if needed, but the card uses string/emoji natively or default
  
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <p className={styles.subTitle}>OUR SERVICES</p>
          <h2 className={styles.title}>
            <span>Reliable Experts</span> for Every Home Need
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {/* Static Services */}
          {customServices.map((service) => {
            const Icon = service.icon;
            return (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.desc}
                icon={<Icon size={28} strokeWidth={2.2} />}
                subServices={[]}
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaText}>
            Ready to Fix It? Get an Expert Estimate Now
          </h3>

          <Link to="/dashboard" className={styles.ctaBtn}>
            Book Your Expert Now
          </Link>
        </div>
      </div>
    </section>
  );
}