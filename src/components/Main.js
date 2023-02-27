import MainVisual from "./MainVisual";
import { slide } from "../data/common.js";

const Main = () => {
    console.log(slide)
    return (
        <>
            <MainVisual slide={slide} />
        </>
    )
}

export default Main;