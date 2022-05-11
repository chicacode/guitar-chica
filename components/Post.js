import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';
import styles from '../styles/Post.module.css';

const Post = ({ post }) => {
    const { title, content, description, image, published_at, id } = post
    return (
        <article>
            <Image 
            src={image.url} 
            width={500} 
            height={500} 
            layout='responsive'
            alt={`image blog ${title}`}  />
            <div className={styles.container}>
                <h3>{title}</h3>
                <p className={styles.date}>{formatDate(published_at)}</p>
                <p className={styles.description_contents}>{description}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.link}>
                    Read Post
                    </a>
                   
                </Link>

            </div>

        </article>
    )
}

export default Post
