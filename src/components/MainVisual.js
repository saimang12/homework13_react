import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useState } from "react";


const MainVisual = ({ slide }) => {
    const setting = {
        dots: true,
        afterChange: idx => { setNum(idx + 1) }
    }
    const [num, setNum] = useState(1)
    return (
        <section className="MainVisual">
            <Slider {...setting}>
                {
                    slide.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <div className="tit">{it.title}</div>
                                    <strong>{it.desc}</strong>
                                    <em>{it.id}</em>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="num">
                {num}/{slide.length}
            </div>
        </section>
    )
}

export default MainVisual;