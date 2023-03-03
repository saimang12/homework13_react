import MainContent from "./MainContent";
import MainProduct from "./MainProduct";
import MainVisual from "./MainVisual";


const Main = ({ slide, MAIN_CONTENT }) => {
    console.log(slide)
    return (
        <>
            <MainVisual slide={slide} />
            <MainContent slide={slide} MAIN_CONTENT={MAIN_CONTENT} />
            <MainProduct MAIN_CONTENT={MAIN_CONTENT} slide={slide} />
        </>
    )
}

export default Main;