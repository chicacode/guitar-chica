import Layout from '../components/Layout';
import Post from '../components/Post';

const Blog = ({ posts }) => {

    console.log('post', posts)

    return (
        <Layout page='Blog'>
            <main className='container'>
                <h2 className='heading'>
                    Pet´s Blog
                </h2>
                <div>
                    <div className='main-blog'>
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                        )}
                    </div>
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