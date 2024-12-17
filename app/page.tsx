import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202412061642617.png"
            alt="CMUBA Logo"
            width={200}
            height={80}
            priority
          />
        </div>
      </header>
      
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <h2>Who We Are</h2>
            <p>We are Chiang Mai University Blockchain Association, a student organization under the official student union of ICDI CMU.</p>
          </div>
        </section>

        <section className={styles.slogan}>
          <div className={styles.gradientText}>Learn and Build</div>
        </section>

        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <div className={styles.missionText}>
            Improve Asia Wellbeing with Blockchain
          </div>
        </section>

        <section className={styles.events}>
          <h2>Latest Events</h2>
          <div className={styles.eventGrid}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className={styles.eventCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/ ${num}.jpg?height=200&width=300&text=Event ${num}`}
                    alt={`Event ${num}`}
                    width={300}
                    height={200}
                  />
                </div>
                <div className={styles.eventInfo}>
                  <h3>Blockchain Workshop {num}</h3>
                  <p>Join us for an exciting blockchain learning experience!</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 CMUBA. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/CMUBA" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com/cmuba_th" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a 
            href="https://cmuba.notion.site/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Notion
          </a>
        </div>
      </footer>
    </div>
  )
}

