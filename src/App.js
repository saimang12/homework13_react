import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { NAV, slide, MAIN_CONTENT, FOOTER_NAV, INFO } from "./data/common";



function App() {
  console.log()
  return (
    <div className="Wrap">
      <Header NAV={NAV} />
      <Main slide={slide} MAIN_CONTENT={MAIN_CONTENT} />
      <Footer FOOTER_NAV={FOOTER_NAV} INFO={INFO} />
    </div>
  );
}

export default App;
