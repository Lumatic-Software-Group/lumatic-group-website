import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <a href="#">
              <span className={styles.logoIcon}>
                <Image
                  src="/assets/lumatic_logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  style={{ verticalAlign: 'middle' }}
                />
              </span>
              Lumatic Software Group
            </a>
            <p>Innovative software solutions for modern businesses</p>
          </div>
          <div className={styles.footerContact}>
            <h3>Contact</h3>
            <p>Business Bay, Dubai, UAE</p>
            <p>contact@lumaticgroup.info</p>
            <p>+971 50 265 9885</p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/lumaticsoftware" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Lumatic Software Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
