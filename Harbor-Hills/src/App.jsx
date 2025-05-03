

// HEADER AND HERO OPTIONS:
import { Option0 } from './components/TOP/Option0.jsx'
import { Option1 } from './components/TOP/Option1.jsx'

// ABOUT OPTIONS
import { AboutOption0 } from './components/About/AboutOption0.jsx'
import { AboutOption1 } from './components/About/AboutOption1.jsx'
import { Option2 } from './components/TOP/Option2.jsx'

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

  const companyName = 'Nova Heights'
  // YOU CAN EDIT THIS INFORMATION TO MANIPULATE DATA IN COMPONENTS BELOW
  const content = Information.createTopInfo(
    companyName,
    ["Home","About","Rooms","Amenities","Gallery",],
    {mainHero:`${companyName} - A peacefull escape in nature`,secondHero:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sunt veniam doloribus expedita mollitia adipisci corrupti, deserunt sequi, excepturi nam velit maiores architecto animi itaque eum consectetur odio eligendi impedit.',primaryCta:'Book Now',secondaryCta:'View Gallery'},
    '/8.avif',
    '/hotel/logo.avif'
  ) 


  return (
    <>
      {/* TOP SECTION (HEADER & HERO) */}
      {/* <Option0 content={content}/> */}
      <Option1 content={content}/>
      {/* <Option2 content={content}/> */}

      {/* ABOUT SECTION */}
      <AboutOption0 content={content}/>
      <AboutOption1 content={content}/>

    </>
  )
}

export default App



// --color-desertSand: #EDCBB1;
// --color-darkGreen: #002500;
// --color-mossGreen: #929982;
// --color-roseRed: #B7245C;
// --color-wine: #7C3238;
// /* --color-btn: #AF9A69; */

// --color-btn: #8B6C26;

