import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';

const Post = ({ post }) => {
    const { title, content, description, image, published_at, id } = post
    return (
        <article>
            <Image 
            src={image.url} 
            width={700} 
            height={600} 
            layout='responsive'
            alt={`image blog ${title}`}  />
            <div>
                <h1>{title}</h1>
                <p>{formatDate(published_at)}</p>
                <p>{description}</p>
                <Link href={`/blog/${id}`}>
                    Read Post
                </Link>

            </div>

        </article>
    )
}

export default Post
