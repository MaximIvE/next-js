import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';
import styles from "../styles/Navbar.module.scss";

const navigation = [
    {id:1, title: "Home", patch: "/"},
    {id:2, title: "Posts", patch: "/posts"},
    {id:3, title: "Contacts", patch: "/contacts"},
]
const Navbar = () => {
    const { pathname } = useRouter();
  
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo.png" width={60} height={60} alt="webDev" />
            </div>
            <div className={styles.links}>
                {navigation.map(({ id, title, patch }) => (
                    <Link
                        key={id}
                        href={patch}>
                        <a className={pathname === patch ? styles.active : null}>
                            {title}
                        </a>
                    </Link>))}
            </div>
        </nav>
    );
}

export default Navbar;