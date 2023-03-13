import MainContent from "./MainContent";
import MainVisual from "./MainVisual";


const Main = ({ slide, MAIN_CONTENT }) => {
    console.log(slide)
    return (
        <>
            <MainVisual slide={slide} />
            <MainContent slide={slide} MAIN_CONTENT={MAIN_CONTENT} />
        </>
    )
}

export default Main;