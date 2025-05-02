import { Header2 } from "../Header/Header2";
import { Hero1 } from "../Hero/Hero1";

export function Option1({content}) {
    return (
        <>
            <div className="">
                <Header2 content={content}/>
                <Hero1 content={content}/>
            </div>
        </>
    );
}