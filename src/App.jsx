import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Button from './components/Button.js';
// import CallingAPI from './components/CallingAPI.js';
// import GetCountry from './components/GetCountry';
// import Section from './components/Section';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default App;

//between header and footer i would like the following eventually

      // {/* <CallingAPI />
      // being called in GetCountry */}
      // {/* <Button /> */}
      // {/*being called in header */}
      // {/* <GetCountry />
      // this is now being called in the Button component */}
      // {/* <Section /> */}
      // {/* not working the way i want */}


      // psuedo Code -- 
// NOTE: the below got changed due to restrictions of the api so have fun reading it
// step one- onclick of button data will be pulled based on 3 hot countries for example
// step two
// the countries will be random but hot, and generate 3 divs which will list the info outlined in the wireframe:  example:: country name, capitol, other city, language, currency, etc.
// also would like a background image
// more -- stretch goals, on clicking the weather option the other choices will disappear, --onclicking the final suggestion would like it to go to the travel website for that country, or maybe just "google/search/thatcountryname"

