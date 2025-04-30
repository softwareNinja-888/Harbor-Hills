import { useState } from 'react'
// HEADER COMPONENTS
import { Header } from './components/Header/Header.jsx'
import { Header0 } from './components/Header/Header0.jsx'

// HERO COMPONEMTS
import { Hero } from './components/Hero/Hero'

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
      <div className="relative ">
        {/* BG IMAGE */}
        <div className="absolute inset-0 z-0  bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url('${content.imgs}')`}}/>

        {/* OVERLAY  */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs z-10"></div>

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col h-full">
          <Header content={content} textColor='text-white'/>
          {/* <Header0 content={content} textColor='text-white'/> */}
          <Hero content={content.heroText}/>
        </div>
      </div>

    </>
  )
}

export default App
