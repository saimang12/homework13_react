import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { NAV, slide, MAIN_CONTENT } from "./data/common";



function App() {
  console.log()
  return (
    <div className="Wrap">
      <Header NAV={NAV} />
      <Main slide={slide} MAIN_CONTENT={MAIN_CONTENT} />
      <Footer />
    </div>
  );
}

export default App;
