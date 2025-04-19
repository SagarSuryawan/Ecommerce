import Topbar from "../Layouts/Topbar";
import Navbar from "./Navbar";

function Header() {

    return(
        <header className="border-b border-grey-200">
            <Topbar/>
            <Navbar/>
            
        </header>
    )
}

export default Header;