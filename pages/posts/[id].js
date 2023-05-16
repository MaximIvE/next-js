import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStatscPaths = async () => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await responce.json();

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false,
    }
};


export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await responce.json();

    if (!data) return { notFound: true}
    return {
        props: {
            post : data
        }
    }
}

const Post = ({ post }) => (
    <>
        <Head>
            <title>Post</title>
        </Head>
        <PostInfo post={post} />
    </>
);

export default Post;