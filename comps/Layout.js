import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Layout = ({children}) => {
    return ( 
        <div>
            <NavigationBar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;