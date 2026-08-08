import { Link } from "react-router-dom";
import styles from "./CategoryHighlightSection.module.css";

export default function CategoryHighlightSection() {
  const categories = [
    {
      id: "ac-repair",
      title: "AC Repair",
      desc: "Fast AC service, gas refill, installation and repair.",
      img: "ac.jpg",
      videos: [
        "0_Woman_Painting_3840x2160.mp4",
        "0_Woman_Painting_3840x2160.mp4",
      ],
      link: "/service/ac-appliance",
    },
    {
      id: "home-cleaning",
      title: "Home Cleaning",
      desc: "Deep cleaning for bedroom, hall, furniture and floor.",
      img: "home.jpg",
      videos: [
        "1115128_Arab_man_Window_3840x2160.mp4",
        "1115120_Arab_man_Window_3840x2160.mp4",
      ],
      link: "/service/cleaning",
    },
    {
      id: "welding-work",
      title: "Welding Work",
      desc: "Gate repair, grill work and metal fabrication services.",
      img: "Welders.jpg",
      videos: [
        "4935005_Indoors_Person_3840x2160.mp4",
        "4934999_Indoors_Person_3840x2160.mp4",
      ],
      link: "/service/welding-work",
    },
    {
      id: "plumbing",
      title: "Plumbing",
      desc: "Leak fixing, tap repair and bathroom fitting support.",
      img: "pm.jpg",
      videos: [
        "14514417-uhd_3840_2160_25fps.mp4",
        "6006379_People_Person_3840x2160.mp4",
      ],
      link: "/service/plumbing-work",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subTitle}>Category Highlights</p>
          <h2 className={styles.title}>Popular categories for every home</h2>
          <p className={styles.desc}>
            Explore the most booked home service categories with real service previews.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((item) => (
            <Link to={item.link} key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.img} alt={item.title} className={styles.image} loading="lazy" />
                <div className={styles.overlay}></div>
                <div className={styles.badge}>{item.title}</div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>

              <div className={styles.videoSection}>
                {item.videos.map((video, index) => (
                  <div key={index} className={styles.videoBox}>
                    <video
                      src={video}
                      className={styles.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.img}
                    />
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}