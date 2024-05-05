import "./style.scss";
import { Header } from "../../components";


const Layout = ({ childrem }) => {
    return (
        <div className="layout">
            <Header />
            <div>
            {childrem}
            </div>
 
        </div>
    );
}


export default Layout;