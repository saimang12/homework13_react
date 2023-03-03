import { useState } from "react";

const MainProduct = ({ MAIN_CONTENT, slide }) => {
    const [num, setNum] = useState(0)
    return (
        <section className="MainProduct">
            <div className="inner">
                <div className="title">
                    <h2></h2>
                    <p></p>
                </div>
                <div className="tab_menu">
                    <ul className="tab_select">
                        {
                            slide.map((it, idx) => {
                                return (
                                    <li>{it.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="tab_itm">
                        213
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainProduct;