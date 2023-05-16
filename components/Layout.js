import Header from "./Header";
import Footer from "./Footer";

const Loyout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Loyout;