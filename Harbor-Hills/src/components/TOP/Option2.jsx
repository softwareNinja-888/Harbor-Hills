import { Header3 } from "../Header/Header3";
import { Hero2 } from "../Hero/Hero2";

export function Option2({content}) {
    return (
        <>
            <div className="">
                <Header3 content={content}/>
                <Hero2 content={content}/>
            </div>
        </>
    );
}