import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
// import { useState, useEffect } from "react";

// SSR - підхід ( Сервер Сайт Рендеринг) підхід.
// Сторінка формується динамічно на кліжнті. В У вкладці Нетворк в Прев'ю списка контактів не буде видно
// Погано для пошукових систем

export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();

    if (!data) return { notFound: true}
    
    return {
        props: {
            contacts : data
        }
    }
}

const Contacts = ({ contacts }) => {
    
// Підхід з використанням  класичного Реакт та хуків useState та  useEffect
    
    // const [contacts, setContacts] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await responce.json();
    //         setContacts(data)
    //     };
    //     fetchData();
    // }, []);
    

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list:" />
            <ul>
                {contacts && contacts.map(({ id, name}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>))}
            </ul>
        </>
    );
};

export default Contacts;
