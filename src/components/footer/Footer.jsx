import logo from '../../assets/logo.png';

function Footer() {
    return (
        <div className="flex items-center justify-center mt-10 md:mt-[5vw] lg:mt-[10vw]">
            <div className="flex flex-col w-[95%] sm:w-[85%] md:w-[70%] items-center gap-y-4 md:gap-y-[1vw] justify-center text-xs md:text-sm lg:text-[0.7vw] bg-black text-white py-6 md:py-10 rounded-lg">
                {/* Top content row list */}
                <div className="flex flex-col md:flex-row justify-between w-full gap-y-4 md:gap-y-0 md:space-x-[2vw] items-center">
                    <ul className="flex flex-col sm:flex-row items-center justify-around text-white gap-y-2 sm:gap-y-0 sm:space-x-4 md:space-x-[2vw]">
                        <li>Portfolio</li>
                        <li>Price</li>
                        <li>Info</li>
                        <li>Contact</li>
                    </ul>
                    <div className="pr-0 md:pr-[2vw] text-center md:text-right">Photographer</div>
                    <div className="flex justify-between invert h-6 md:h-[1.3vw] space-x-4 md:space-x-[2vw]">
                        <img className="h-6 md:h-[1.3vw]" src="https://img.icons8.com/?size=100&id=437&format=png&color=000000" alt="" />
                        <img className="h-6 md:h-[1.3vw]" src="https://img.icons8.com/?size=100&id=62225&format=png&color=000000" alt="" />
                        <img className="h-6 md:h-[1.3vw]" src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="" />
                        <img className="h-6 md:h-[1.3vw]" src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000" alt="" />
                    </div>
                </div>
                <div className="border-b border-white/40 w-full flex items-center">
                    <img className="h-12 md:h-[4vw] mx-auto mb-4 md:mb-[2vw]" src={logo} alt="Logo" />
                </div>
                <div className="text-center">
                    <h1 className="text-[0.7vw] md:text-[1vw]">2023 ©Don Medina All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
