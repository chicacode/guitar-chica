import Link from 'next/link';
import styles from '../styles/Footer.module.css';

 const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/store'}>Store</Link>
            <Link href={'/brands'}>Brands</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/blog'}>Blog</Link>
          </nav>

          <p className={styles.copyright}>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;
