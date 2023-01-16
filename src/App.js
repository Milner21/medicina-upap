
import "./App.css";
import Header from "./components/header/Header";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import background from '../src/img/fondo.jfif';
import background2 from '../src/img/110120231402.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from "./components/footer/Footer";
// ..


function App() {
  AOS.init();
  return (
    <>
      <Header />
      <section className="seccion1" style={{ backgroundImage: `url(${background})` }}>
        <Section1/>
      </section>
      <section className="seccion2" style={{backgroundImage: `url(${background2})`}}>
        <Section2/>
      </section>
      <section className="seccion3">
        <Section3/>
      </section>
      <section className="seccion4">
        <Section4/>
      </section>
      <Footer />
    </>
  );
}

export default App;
