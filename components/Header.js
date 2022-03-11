import React from 'react'
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='header-nav-container'>
          <div>
            <Image src='/img/logo.png' alt='logo' width={'100px'} height={'100px'} />
          </div>
          <nav className={styles.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/store'}>Store</Link>
            <Link href={'/brands'}>Brands</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/blog'}>Blog</Link>
          </nav>
        </div>
        <div>
          <picture>
            <Image src='/img/dog-2.png' alt='dog store image' width={'200px'} height={'200px'} className='image-index' />
          </picture>
        </div>

      </div>
    </header>
  )
}

export default Header