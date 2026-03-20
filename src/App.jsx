import './App.css'
import BookTable from './Component/BookTable/BookTable'
import { Header, Hero, AboutUs, Services, Order, FeedBack, Chef, Questions } from './Import '

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <FeedBack />
      <Order />
      <Chef />
      <BookTable />
      <Questions />
    </>
  )
}

export default App