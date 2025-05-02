

// HEADER AND HERO OPTIONS:
import { Option0 } from './components/TOP/Option0.jsx'
import { Option1 } from './components/TOP/Option1.jsx'

// ABOUT OPTIONS

const Information = (function (){
  function createTopInfo(name="Company Name",links=[],heroText="",imgs,logo){
      return {
          name,
          links,
          heroText,
          imgs,
          logo,
      }
  }

  return {createTopInfo}
})()


function App() {

  const companyName = 'The Hilton'
  // YOU CAN EDIT THIS INFORMATION TO MANIPULATE DATA IN COMPONENTS BELOW
  const content = Information.createTopInfo(
    companyName,
    ["Home","About","Rooms","Amenities","Gallery",],
    {mainHero:`${companyName} - A peacefull escape in nature`,secondHero:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sunt veniam doloribus expedita mollitia adipisci corrupti, deserunt sequi, excepturi nam velit maiores architecto animi itaque eum consectetur odio eligendi impedit.',primaryCta:'Book Now',secondaryCta:'View Gallery'},
    '/8.avif',
    '/logo.avif'
  ) 


  return (
    <>
      {/* <Option0 content={content}/> */}
      {/* <Option1 content={content}/> */}
    </>
  )
}

export default App
