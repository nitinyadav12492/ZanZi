
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