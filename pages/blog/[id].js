import { useRouter } from "next/router";

const BlogPost = ({ post }) => {

    const router = useRouter();

    console.log(post)
    return (
        <div>
            <h1>BlogPost</h1>
        </div>
    )
}

// export async function getServerSideProps({query: {id}}) {

//     const url = `http://localhost:1337/blogs/${id}`;
//     const response = await fetch(url);
//     const post = await response.json();
//     console.log(post)
//     return {
//       props: {
//           post
//       }, 
//     }
//   } 

export async function getStaticPaths() {

    const url = `http://localhost:1337/blogs`;
    const response = await fetch(url);
    const posts = await response.json();
    console.log('post', posts)

    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { id } }) {

    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const post = await response.json();

    return {
        props: {
            post
        }
    }
}

export default BlogPost;