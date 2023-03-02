import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GlobalNav from "./GlobalNav";

const Header = ({ NAV }) => {
    return (
        <header className="header">
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/img/pclogo.png'} alt="" />
                    </Link>
                </h1>
                <nav className="gnb">
                    <GlobalNav NAV={NAV} />
                </nav>
            </div>

        </header>
    )
}

export default Header;