// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { ShieldCheck, Clock } from "lucide-react";

// // export default function Hero() {
// //   return (
// //     <section className="bg-gray-50/50 pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden relative border-b border-gray-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
// //         {/* Left Side: Text & Actions */}
// //         <div className="z-10 max-w-2xl">
// //           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
// //             <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
// //             #1 Home Service App in India
// //           </div>
          
// //           <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
// //             Expert assistance, <br className="hidden lg:block"/>
// //             <span className="text-indigo-600">arriving in minutes.</span>
// //           </h1>
          
// //           <p className="text-slate-500 text-lg sm:text-xl font-normal mb-10 leading-relaxed max-w-lg">
// //             Book verified professional plumbers, electricians, cleaners, and appliance technicians. No haggling, no delays, just quality work.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 mb-12">
// //             <Link 
// //               to="/dashboard"
// //               className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all focus:ring-4 focus:ring-indigo-500/20 text-center flex items-center justify-center gap-2"
// //             >
// //               Book a Service
// //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
// //             </Link>
// //             <button className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-center focus:ring-4 focus:ring-slate-100">
// //               Download App
// //             </button>
// //           </div>

// //           <div className="flex items-center gap-6">
// //             <div className="flex -space-x-3">
// //               {[1,2,3,4].map(i => (
// //                 <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 z-${50-i*10}`}>
// //                   {String.fromCharCode(64+i)}
// //                 </div>
// //               ))}
// //               <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold z-10">
// //                 +10k
// //               </div>
// //             </div>
// //             <div className="text-sm font-medium text-slate-600">
// //               Trusted by 100,000+ <br/> happy customers
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side: Image */}
// //         <div className="relative flex justify-center lg:justify-end z-10 w-full mt-8 lg:mt-0">
// //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 rounded-full blur-3xl -z-10"></div>
          
// //           <div className="w-full max-w-[500px] relative">
// //             <img 
// //               src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
// //               alt="Professional Technician"
// //               className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/50"
// //             />
            
// //             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: "4s"}}>
// //               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
// //                 <ShieldCheck size={20} />
// //               </div>
// //               <div>
// //                 <div className="font-bold text-slate-900 text-sm">Background Checked</div>
// //                 <div className="text-xs text-slate-500">100% Secure</div>
// //               </div>
// //             </div>

// //             <div className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
// //                 <Clock size={20} />
// //               </div>
// //               <div>
// //                 <div className="font-bold text-slate-900 text-sm">Lightning Fast</div>
// //                 <div className="text-xs text-slate-500">&lt; 30 min arrival</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //       </div>
// //     </section>
// //   );
// // }
// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
//         {/* Left Content */}
//         <div className={styles.left}>
//           <h1 className={styles.title}>
//             <span>Experts in Minutes</span>
//             <br />
//             Fixed in Hours
//           </h1>

//           <p className={styles.desc}>
//             Get reliable home services, electrical work, plumbing work, welding,
//             home decor, garden work, staff and AC repair experts at your door
//             in <strong>10–30 minutes.</strong>
//           </p>

//           <div className={styles.actions}>
//             <Link to="/#services" className={styles.primaryBtn}>
//               Book a Service Now
//             </Link>

//             <button className={styles.secondaryBtn}>
//               Download the App
//             </button>
//           </div>

//           <div className={styles.trust}>
//             <span className={styles.stars}>★★★★★</span>
//             <span>Trusted by 1 Lakh+ Homes in India</span>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className={styles.right}>
//           <div className={styles.imageCard}>
//             <img
//               src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
//               alt="Service professionals"
//               className={styles.image}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── Background Video ── */}
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
      >
        <source src="1115153_Arab_man_Cleaning_3840x2160.mp4" type="video/mp4" />
        {/* Replace above src with your own video URL */}
      </video>

      {/* ── Dark overlay so text stays readable ── */}
      <div className={styles.overlay} />

      {/* ── Foreground content ── */}
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span>Experts in Minutes</span>
            <br />
            Fixed in Hours
          </h1>

          <p className={styles.desc}>
            Get reliable home services, electrical work, plumbing work, welding,
            home decor, garden work, staff and AC repair experts at your door
            in <strong>10–30 minutes.</strong>
          </p>

          <div className={styles.actions}>
            <Link to="/#services" className={styles.primaryBtn}>
              Book a Service Now
            </Link>
            <button className={styles.secondaryBtn}>
              Download the App
            </button>
          </div>

          <div className={styles.trust}>
            <span className={styles.stars}>★★★★★</span>
            <span>Trusted by 1 Lakh+ Homes in India</span>
          </div>
        </div>

        {/* Right Image — sits on top of video */}
        <div className={styles.right}>
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              alt="Service professionals"
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}