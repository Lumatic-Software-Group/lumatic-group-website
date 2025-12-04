'use client'

import { useState, FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const { name, email, subject, message } = formData
    const emailSubject = subject || 'Contact Form Submission'
    
    setIsSubmitting(true)
    
    const mailtoLink = `mailto:contact@lumatic.is-cool.dev?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    
    setTimeout(() => {
      const tempLink = document.createElement('a')
      tempLink.href = mailtoLink
      document.body.appendChild(tempLink)
      tempLink.click()
      document.body.removeChild(tempLink)
      
      setStatus('Your email client has been opened. Please send the email to complete your message submission.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      setTimeout(() => {
        setStatus('')
      }, 8000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to discuss your software solution needs?</p>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status && (
              <div className={styles.alertSuccess}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
