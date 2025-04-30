import { NavLink } from "react-router"
import { AnimatedWord } from "../helper/AnimatedWord"
import { FaCartShopping } from "react-icons/fa6"

export function Header0({content,textColor='text-black',sticky=true}) {
    return (
        <> 
            <div className={`flex justify-between items-center gap-50 ${textColor} py-12 bg-white/30 backdrop-blur-lg ${sticky ? 'sticky top-0 z-50' : null}`}>
                <div className=""></div>
                <div className="flex flex-col gap-5">
                    {/* LOGO AND NAME */}
                    <div className="flex gap-3 mx-auto">
                        <div className="font-playfairBold text-3xl">{content.name}</div>
                        <img src={content.logo} alt="logo" className="w-10 h-10" />
                    </div>                 

                    {/* NAV LINKS */}
                    <nav className="hidden md:flex md:space-x-10 lg:space-x-20 text-sm ">        
                        {content.links.map((link,index)=>{
                            return (
                                <NavLink to={ link === 'Home' ? '/' : link.toLowerCase()} key={index} className={` flex gap-1.5 no-underline relative cursor-pointer ${textColor} max-[500px]:text-xs  text-lg`}>
                                    <AnimatedWord word={link} textColor={textColor}/>
                                </NavLink>
                            )
                        })}
                    </nav> 
                </div>
 
            
                <div className="flex justify-center items-center gap-6 mr-10">
                    {/* CART */}
                    <FaCartShopping size={26}/>

                    {/* CALL TO ACTION */}
                    <div className="">
                        <AnimatedWord word="Book Now" textColor={textColor}/>
                        <hr className={` border-3 border-white`}/>
                    </div>
                </div>
            </div>
        </>
    )
}