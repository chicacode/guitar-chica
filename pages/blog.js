import Layout from '../components/Layout';
import Post from '../components/Post';
import styles from '../styles/Blog.module.css'

const Blog = ({ posts }) => {

    console.log('post', posts)

    return (
        <Layout page='Blog'>
            <main className='container'>
                <h2 className='heading'>
                    Pet´s Blog
                </h2>
                    <div className={styles.blog}>
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                        )}
                    </div>

            </main>
        </Layout>
    )
}

export async function getStaticProps() {

    const url = 'http://localhost:1337/blogs';
    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts);
    return {
        props: {
            posts
        }, // will be passed to the page component as props
    }
}

export default Blog;