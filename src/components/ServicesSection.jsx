
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