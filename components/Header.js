import React from 'react'
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='contenedor'>
        <div>
            <Image src='/img/logo.png' alt='logo' width={'100px'} height={'100px'}/>
        </div>
        <nav className={styles.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/store'}>Store</Link>
        </nav>
        </div>
    </header>
  )
}

export default Header