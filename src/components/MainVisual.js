import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const MainVisual = ({ slide }) => {
    const s = useRef();
    const setting = {
        arrows: false,
        dots: true,
        afterChange: idx => { setNum(idx + 1) }
    }
    const [num, setNum] = useState(1)
    return (
        <section className="MainVisual">
            <Slider {...setting} ref={s}>
                {
                    slide.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <div className="tit">
                                        <h2>{it.title}</h2>
                                        <p>{it.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="num">
                <em>
                    {num}/{slide.length}
                </em>
            </div>
            <div className="arrows">
                <button className="left" onClick={() => s.current.slickPrev()}>
                    <BsArrowLeft />
                </button>
                <button className="right" onClick={() => s.current.slickNext()} >
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}

export default MainVisual;