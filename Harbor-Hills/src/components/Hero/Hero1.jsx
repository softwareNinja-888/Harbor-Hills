export function Hero1({content}) {
    return (
        <>
            <div className="w-full h-full">
                <img src={content.imgs} alt="Hero image" className="w-screen h-[500px] object-cover object-bottom" />
            </div>
        </>
    );
}