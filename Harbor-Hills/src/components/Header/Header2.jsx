import { MdMenu } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router';
import { Header1 } from './Header1';
import { AnimatedWord } from '../helper/AnimatedWord';

function LineHori({size='w-10',border='border-1 border-lightBlue',direction="rotate-90"}){
    return (
        <>
            <hr className={`${size} ${border} ${direction}`}/>
        </>
    )
}
export function Header2({content}) {
    return (
        <>
            <div className="flex flex-col gap-9  py-6 px-8">
                <div className="flex justify-between font-cinzel">
                    
                    {/* HORIZONTAL SIDE BAR AND LANGUAGE CHOICE */}
                    <div className="flex items-center">
                        <div className="flex items-center gap-1">
                            <MdMenu size={39}/>
                            <div className="text-xl">Menu</div>
                            <LineHori size='w-7' />
                            <div className="flex items-center gap-1 text-xl">
                                <div className="">EN</div>
                                <RiArrowDropDownLine size={34}/>
                            </div>
                        </div>
                    </div>

                    {/* GROUP NAME */}
                    <div className="flex gap-3">
                        <div className="font-italiana text-4xl">{content.name} Group</div>
                    </div>   

                     {/* CONTACT LINK  */}
                    <div className="">
                        <NavLink to="/" className="">Contact</NavLink>
                    </div>               
                </div>

                {/* HORIZONTAL LINE  */}
                <hr className='border-t border-gray-200'/>

                {/* SECOND ROW OF HEADER  */}
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <div className="font-italiana text-4xl">{content.name}</div>
                        <img src={content.logo} alt="logo" className="w-10 h-10" />
                        <LineHori border='border-3 border-lightBlue'/>
                    </div>

                    {/* NAV LINKS */}
                    <nav className="hidden md:flex md:space-x-10 lg:space-x-28 text-sm ">        
                        {content.links.map((link,index)=>{
                            return (
                                <NavLink to={ link === 'Home' ? '/' : link.toLowerCase()} key={index} className={` flex gap-1.5 no-underline relative cursor-pointer text-black max-[500px]:text-xs  text-lg`}>
                                    <AnimatedWord word={link} textColor='text-black' font='font-robotoLight'/>
                                </NavLink>
                            )
                        })}
                    </nav> 

                    {/* ANIMATED BUTTON  */}
                    <div className="group relative">
                        <div className="border border-lightBlue bg-accent text-white px-3 py-2 rounded-3xl text-xl text-center font-cinzelBold transition-transform duration-300 transform origin-left group-hover:scale-x-110 w-35 cursor-pointer">
                            Book
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}