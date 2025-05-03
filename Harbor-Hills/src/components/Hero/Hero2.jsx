import { Btn } from "../helper/Btn";

export function Hero2({content,textColor="text-white"}) {
    return (

        <>
                    <div className="text-5xl">This is new</div>

            <div className={`flex flex-col gap-10  items-center justify-center py-30 ${textColor} z-20`} >
                <div className="text-5xl font-libre ">{content.mainHero}</div>
                <div className="w-[45%] text-lg font-roboto text-center">{content.secondHero}</div>
                <div className="flex gap-4">
                    <Btn text={content.primaryCta} />
                    <Btn text={content.secondaryCta} />

                </div>
            </div>
        </>
    );
}