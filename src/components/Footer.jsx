// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0F172A] text-gray-300 pt-20 pb-8 font-sans border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Top Section - Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
//           {/* Brand Info (takes up more space) */}
//           <div className="lg:col-span-4 pr-0 lg:pr-8">
//             <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
//               <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                 Z
//               </div>
//               <span className="font-bold text-2xl tracking-tight text-white">
//                 Zanzee
//               </span>
//             </Link>
//             <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
//               Making home repair instant, reliable, and stress-free. Your trusted partner for professional services.
//             </p>
//             <div className="flex gap-4">
//               {['Tw', 'Yt', 'In', 'Fb'].map((label, index) => (
//                 <a key={index} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider">
//                   {label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links Columns */}
//           <div className="lg:col-span-2">
//             <h3 className="font-semibold text-white text-base tracking-wide mb-6">Company</h3>
//             <ul className="space-y-4">
//               {['About Us', 'Careers', 'Terms of Use', 'Privacy Policy'].map(item => (
//                 <li key={item}>
//                   <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="lg:col-span-2">
//             <h3 className="font-semibold text-white text-base tracking-wide mb-6">Services</h3>
//             <ul className="space-y-4">
//               {['Electrical', 'Plumbing', 'Cleaning', 'Appliance Repair'].map(item => (
//                 <li key={item}>
//                   <a href="/#services" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter / Contact (takes up more space) */}
//           <div className="lg:col-span-4">
//             <h3 className="font-semibold text-white text-base tracking-wide mb-6">Stay Updated</h3>
//             <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest home service tips and exclusive offers.</p>
//             <form className="relative flex mb-8 max-w-md">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-4 pr-32 text-white text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
//               />
//               <button 
//                 type="button"
//                 className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors shadow-sm"
//               >
//                 Subscribe
//               </button>
//             </form>
            
//             <div className="space-y-2 mt-auto">
//               <a href="mailto:hello@zanzee.in" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
//                 <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                 hello@zanzee.in
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="text-slate-500 text-sm">
//             © {new Date().getFullYear()} Zanzee Technologies. All rights reserved.
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1 text-sm text-slate-500">
//               Made with <span className="text-rose-500">♥</span> in India
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>Z</div>
              <span className={styles.logoText}>Zanzee</span>
            </Link>

            <p className={styles.desc}>
              Making home repair instant, reliable, and stress-free.
              Your trusted partner for professional services.
            </p>

            <div className={styles.socials}>
              {["Tw", "Yt", "In", "Fb"].map((item, i) => (
                <a key={i} href="#" className={styles.social}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              {["About Us", "Careers", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3>Services</h3>
            <ul>
              {["Electrical", "Plumbing", "Cleaning", "Repair"].map((item) => (
                <li key={item}>
                  <a href="/#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>Stay Updated</h3>
            <p>Subscribe for latest updates and offers.</p>

            <div className={styles.form}>
              <input type="email" placeholder="Enter email" />
              <button>Subscribe</button>
            </div>

            <a href="mailto:hello@zanzee.in" className={styles.email}>
              hello@zanzee.in
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Zanzee. All rights reserved.</p>
          <span>Made with ❤️ in India</span>
        </div>

      </div>
    </footer>
  );
}