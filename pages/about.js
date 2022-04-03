import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div>
            <Layout
                page='About'
            >
                <main className='container'>
                    <h2 className='heading'>About</h2>
                    <div className={styles.container}>
                        <picture>
                            <Image src='/img/header_dog.png' layout='responsive' alt='dog store image' width={600} height={650} className='image-index' />
                        </picture>
                        <div>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    )
}

export default About;

