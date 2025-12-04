'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      window.scrollTo({
        top: (targetSection as HTMLElement).offsetTop - 70,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>
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
          </div>
          <div className={styles.navLinks} id="navLinks">
            <ul>
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
