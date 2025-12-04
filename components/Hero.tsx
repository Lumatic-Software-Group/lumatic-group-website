'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      window.scrollTo({
        top: (contactSection as HTMLElement).offsetTop - 70,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Innovative Software Solutions for Business Growth</h1>
          <p>We develop custom software applications that transform businesses and drive efficiency</p>
          <div className={styles.heroBtns}>
            <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,100 C360,0 1080,0 1440,100 V100 H0 V100 Z"></path>
        </svg>
      </div>
    </section>
  )
}
