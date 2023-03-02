import { Link } from "react-router-dom";

const GlobalNav = ({ NAV }) => {
    return (
        <ul>
            {
                NAV.map((it => {
                    return (
                        <li key={it.id}><Link to='/'>{it.title}</Link></li>
                    )
                }))
            }
        </ul>
    )
}

export default GlobalNav;