import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import logo from '../../assets/logo.png';
import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';


function NameHook() {
    return (
     <>
     <div className="flex items-center justify-center my-[4vw] w-[95%] 
     md:flex-row flex-col md:gap-x-[5vw] gap-y-[15vw] md:mb-[0vw] mb-[15vw]">
                {/* right side  */}
               <div className="-rotate-20">
                    <div className="flex flex-col items-center gap-y-[12vw] sm:gap-y-[8vw] md:gap-y-[4vw] justify-center ml-[15vw] sm:ml-[10vw] md:ml-[5vw]">
                        <div className="bg-gradient-to-b from-gray-800 to-gray-950 border-[0.3vw] sm:border-[0.2vw] md:border-[0.1vw] border-amber-50/30 h-[45vw] sm:h-[30vw] md:h-[15vw] w-[54vw] sm:w-[36vw] md:w-[18vw] rounded-[6vw] sm:rounded-[4vw] md:rounded-[2vw] px-[1.5vw] sm:px-[1vw] md:px-[0.5vw] py-[1.5vw] sm:py-[1vw] md:py-[0.5vw]">
                            <img
                                className="items-center rounded-[6vw] sm:rounded-[4vw] md:rounded-[2vw] h-[42vw] sm:h-[28vw] md:h-[14vw]"
                                src={r1}
                                alt=""
                            />
                        </div>
                        <div className="bg-gradient-to-b from-gray-800 to-gray-950 border-[0.3vw] sm:border-[0.2vw] md:border-[0.1vw] border-amber-50/30 h-[33vw] sm:h-[22vw] md:h-[11vw] w-[45vw] sm:w-[30vw] md:w-[15vw] rounded-[3vw] sm:rounded-[2vw] md:rounded-[1vw] px-[0.6vw] sm:px-[0.4vw] md:px-[0.2vw] pt-[1.2vw] sm:pt-[0.8vw] md:pt-[0.4vw]">
                            <img
                                className="items-center rounded-[3vw] sm:rounded-[2vw] md:rounded-[1vw]"
                                src={r2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* mid */}
                   <div className="flex flex-col items-center text-white justify-center">
                    <div className="items-center flex flex-col justify-center gap-y-[6vw] sm:gap-y-[4vw] md:gap-y-[1.5vw]">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-center caveat ml-[4vw] sm:ml-[2vw] md:ml-[1vw] -rotate-5 text-[12vw] sm:text-[8vw] md:text-[3.5vw] mt-[12vw] sm:mt-[6vw] md:mt-[3vw]">
                                I am
                            </h1>
                            <img
                                className="-mt-[12vw] sm:-mt-[6vw] md:-mt-[3vw] h-[60vw] sm:h-[40vw] md:h-[18vw] w-[90vw] sm:w-[70vw] md:w-[40.5vw]"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <span className="max-w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent 
                        sm:max-w-[70%] md:max-w-[50%] text-[4vw] sm:text-[2vw] md:text-[1vw] text-center">
                            Images that touch people. Websites that convince customers. Advertising materials that sell your products and services. Always professional and tailored to your requirements.
                        </span>
                        <button className="h-[12vw] sm:h-[8vw] md:h-[3vw] w-[40vw] sm:w-[25vw] md:w-[10vw] rounded-[1vw] sm:rounded-[0.5vw] md:rounded-[0.3vw] bg-gradient-to-b from-[#AE4CF7] to-[#4F89F8] text-[3.2vw] sm:text-[1.6vw] md:text-[0.8vw]">
                            Contact Me
                        </button>
                    </div>
                </div>
                {/* left side */}
                <div className="rotate-20">
                    <div className="flex flex-col justify-center items-center gap-y-[12vw] sm:gap-y-[8vw] md:gap-y-[4vw]">
                        <div className="bg-gradient-to-b from-gray-800 to-gray-950 border-[0.3vw] sm:border-[0.2vw] md:border-[0.1vw] border-amber-50/30 h-[45vw] sm:h-[30vw] md:h-[15vw] w-[54vw] sm:w-[36vw] md:w-[18vw] rounded-[6vw] sm:rounded-[4vw] md:rounded-[2vw] px-[1.5vw] sm:px-[1vw] md:px-[0.5vw] py-[1.5vw] sm:py-[1vw] md:py-[0.5vw]">
                            <img
                                className="items-center rounded-[6vw] sm:rounded-[4vw] md:rounded-[2vw] h-[42vw] sm:h-[28vw] md:h-[14vw]"
                                src={l1}
                                alt=""
                            />
                        </div>
                        <div className="bg-gradient-to-b from-gray-800 to-gray-950 border-[0.3vw] sm:border-[0.2vw] md:border-[0.1vw] border-amber-50/30 h-[33vw] sm:h-[22vw] md:h-[11vw] w-[45vw] sm:w-[30vw] md:w-[15vw] rounded-[3vw] sm:rounded-[2vw] md:rounded-[1vw] px-[0.6vw] sm:px-[0.4vw] md:px-[0.2vw] pt-[1.2vw] sm:pt-[0.8vw] md:pt-[0.4vw]">
                            <img
                                className="items-center rounded-[3vw] sm:rounded-[2vw] md:rounded-[1vw] h-[29.4vw] sm:h-[19.6vw] md:h-[9.8vw] w-full object-cover object-[0%_20%]"
                                src={l2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                
            </div>
     </>
    );
}
export default NameHook;
