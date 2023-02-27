import { HiBars3 } from "react-icons/hi2";

const Header = () => {
    return (
        <div className="Header">
            <div className="inner">
                <h1>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/img/work011.jpg'} alt="" />
                    </a>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li><a href="">menu04123</a></li>
                        <li><a href="">menu04</a></li>
                        <li><a href="">menu04</a></li>
                        <li><a href="">menu04</a></li>
                        <li><a href="">menu04</a></li>
                    </ul>
                </nav>
                <div className="h_icon">
                    <HiBars3 />
                </div>
            </div>

        </div>
    )
}

export default Header;