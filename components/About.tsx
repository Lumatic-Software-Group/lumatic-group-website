import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className="section-header">
              <h2>About Us</h2>
              <p style={{ textAlign: 'center' }}>Turning ideas into powerful software solutions</p>
            </div>
            <p>
              At Lumatic, we specialize in building custom software solutions that help businesses
              streamline operations, improve efficiency, and drive growth. As a team of experienced
              developers and IT consultants, we design, develop, and deploy tailored applications
              that solve real-world business challenges.
            </p>
            <p>
              From web and mobile applications to enterprise systems and integrations, we provide
              end-to-end development services — from concept to deployment — tailored to your unique
              goals.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <div className="image-container">
              <Image
                src="/assets/business-bay-dubai.jpg"
                alt="Software Solutions in Dubai"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="image-overlay">
                <h3>Software Solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
