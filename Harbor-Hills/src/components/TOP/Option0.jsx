import { Header1 } from "../Header/Header1";
import { Header0 } from "../Header/Header0";
import { Hero0 } from "../Hero/Hero0";

export function Option0({content}) {
    return (
        <>
            {/* THIS DIV GOES TOGEHTER BECAUSE OF COMMON BG */}
            <div className="relative "> 
                {/* BG IMAGE */}
                <div className="absolute inset-0 z-0  bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url('${content.imgs}')`}}/>

                {/* OVERLAY  */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xs z-10"></div>

                {/* CONTENT */}
                <div className="relative z-20 flex flex-col h-full">
                    <Header0 content={content} textColor='text-white'/>
                    <Hero0 content={content.heroText}/>

                    {/* OR: */}
                    {/* <Header0 content={content} textColor="text-white"/> */}
                </div>
            </div>
        </>
    );
}