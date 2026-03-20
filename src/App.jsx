import './App.css'
import BookTable from './Component/BookTable/BookTable'
import { Header, Hero, AboutUs, Services, Order, FeedBack, Chef, Questions, Footer, DownBar } from './Import '
import { Element } from 'react-scroll';

function App() {
  return (
    <>




      <Header />
      <Element name="hero" id="hero">
        <Hero />
      </Element>
      {/* <Hero id='hero' /> */}
      <Element name="about" id="about">
        <AboutUs />
      </Element>
      {/* <AboutUs id='about' /> */}
      <Element name="services" id="services">
        <Services />
      </Element>
      {/* <Services id='services' /> */}
      <FeedBack />
      <Order />
      <Element name="team" id="team">
        <Chef />
      </Element>
      {/* <Chef id='team' /> */}
      <BookTable />
      <Element name="question" id="question">
        <Questions />
      </Element>
      {/* <Questions id='question' /> */}
      <DownBar />
      <Footer />
    </>
  )
}

export default App