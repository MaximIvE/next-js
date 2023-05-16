import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import ucFirst from "../../hellpers/ucFirst";

// SSG - підхід ( Статік Сайт Дженерейшен) підхід. Статична генерація сторінок.
// Всі необхідні сторінки формуються на сервері під час білдінга. В У вкладці Нетворк в Прев'ю бубде видно список постів
// Добре для пошукових систем

export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();

    if (!data) return { notFound: true}
    
    return {
        props: {
            posts : data
        }
    }
}

const Posts = ({ posts }) => (
    
    <div>
        <Head>
            <title>Posts</title>
        </Head>

        <Heading text="Posts list" />
        <ul>
            {posts && posts.map(({ id, title }) => (
                <li key={id} href={`/posts/${id}`}><Link href={`/posts/${id}`}>{ucFirst(title)}</Link></li>
            ))}
        </ul>
        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p> */}
    </div>
);

export default Posts;
