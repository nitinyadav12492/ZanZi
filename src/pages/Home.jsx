// import Hero            from "../components/Hero";
// import ServicesSection from "../components/ServicesSection";
// import { Shield, Zap, DollarSign, Award } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const WHY_US = [
//     { 
//       id: "verified",
//       icon: Shield,
//       title: "Verified Experts", 
//       desc: "All our professionals map to strict background checks and certifications." 
//     },
//     { 
//       id: "fast",
//       icon: Zap,
//       title: "Fast Response",    
//       desc: "Get a technician at your door exactly when you need them, without delays." 
//     },
//     { 
//       id: "fair",
//       icon: DollarSign,
//       title: "Fair Pricing",     
//       desc: "Transparent upfront pricing with zero hidden charges or surprises." 
//     },
//     { 
//       id: "warranty",
//       icon: Award,
//       title: "Service Warranty", 
//       desc: "Comprehensive 30-day warranty on all completed workmanship." 
//     },
//   ];

//   return (
//     <div className="bg-slate-50 flex flex-col min-h-screen">
      
//       {/* 1. HERO */}
//       <Hero />
      
//       {/* 2. SERVICES GRID */}
//       <ServicesSection />

//       {/* 3. WHY US SECTION */}
//       <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
//               Why Choose Zanzee
//             </h2>
//             <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
//               The smarter standard for home repair
//             </h3>
//             <p className="text-lg text-slate-500">
//               We eliminate the stress of hiring contractors. Book top-tier talent in seconds and get back to what matters most.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {WHY_US.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div 
//                   key={item.id} 
//                   className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100">
//                     <Icon size={28} strokeWidth={2} />
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
//                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 4. PREMIUM CTA BANNER */}
//       <section className="bg-slate-900 py-24 relative overflow-hidden">
//         {/* Subtle background glow effect */}
//         <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl"></div>

//         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
//             Ready to upgrade your home?
//           </h2>
//           <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//             Join 100,000+ happy homeowners who trust the Zanzee network every single day.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link to="/dashboard" className="px-8 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-indigo-500/25">
//               Book Your Service
//             </Link>
//             <Link to="/#services" className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-semibold text-lg transition-all">
//               View Pricing
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

import Hero from "../components/Hero";
import CategoryHighlightSection from "../components/CategoryHighlightSection";
import ServicesSection from "../components/ServicesSection";
import Contact from "../components/Contact";
import { Shield, Zap, DollarSign, Award } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const WHY_US = [
    {
      id: "verified",
      icon: Shield,
      title: "Verified Experts",
      desc: "All our professionals map to strict background checks and certifications.",
    },
    {
      id: "fast",
      icon: Zap,
      title: "Fast Response",
      desc: "Get a technician at your door exactly when you need them.",
    },
    {
      id: "fair",
      icon: DollarSign,
      title: "Fair Pricing",
      desc: "Transparent upfront pricing with zero hidden charges.",
    },
    {
      id: "warranty",
      icon: Award,
      title: "Service Warranty",
      desc: "Comprehensive 30-day warranty on all workmanship.",
    },
  ];

  return (
    <div className={styles.home}>
      
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <ServicesSection />

      {/* HIGHLIGHTS */}
      <CategoryHighlightSection />

      {/* WHY US */}
      <section id="about" className={styles.whySection}>
        <div className={styles.container}>

          <div className={styles.header}>
            <p className={styles.subTitle}>Why Choose Zanzee</p>
            <h2 className={styles.title}>
              The smarter standard for home repair
            </h2>
            <p className={styles.desc}>
              Book top-tier professionals in seconds and get stress-free service.
            </p>
          </div>

          <div className={styles.grid}>
            {WHY_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={styles.card}>
                  <div className={styles.iconBox}>
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to upgrade your home?</h2>
          <p>
            Join thousands of homeowners who trust Zanzee daily.
          </p>

          <div className={styles.ctaBtns}>
            <Link to="/#services" className={styles.primaryBtn}>
              Book Your Service
            </Link>

            <Link to="/#services" className={styles.secondaryBtn}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}