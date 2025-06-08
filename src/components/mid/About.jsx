import arrow from '../../assets/arrrow.png';

function About() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-start m-10 xs:m-12 sm:m-14 md:m-20 lg:m-50">
                <div className="flex flex-col items-start">
                    <h1 className="syncopateRegular text-white uppercase text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw]">
                        About <br />us
                    </h1>
                    <img
                        className="invert h-[14vw] xs:h-[13vw] sm:h-[12vw] md:h-[9vw] lg:h-[7vw] w-[3vw] xs:w-[2.8vw] sm:w-[2.5vw] md:w-[2vw] lg:w-[1.5vw] ml-[11vw] xs:ml-[10vw] sm:ml-[9vw] md:ml-[7vw] lg:ml-[5.5vw] opacity-50"
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
                <div className="flex flex-col justify-center items-center mt-[4vw] xs:mt-[3.5vw] sm:mt-[3vw] md:mt-[2vw] lg:mt-[1.05vw] gap-y-[14vw] xs:gap-y-[12vw] sm:gap-y-[10vw] md:gap-y-[8vw] lg:gap-y-[7vw]">
                    <p className="text-[3.5vw] xs:text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-white/60 w-[90%] xs:w-[80%] sm:w-[70%] md:w-[50%] lg:w-[33%]">
                        Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies diam est aliquet porta fermentum molestie morbi libero. Ultrices sit in elit eget nullam sem. Urna velit imperdiet habitant in.
                    </p>
                    <div className="flex flex-col xs:flex-wrap sm:flex-row justify-center items-center sm:items-end cormorantGaramond gap-x-[10vw] xs:gap-x-[8vw] sm:gap-x-[7vw] md:gap-x-[6vw] lg:gap-x-[5vw] gap-y-[8vw] xs:gap-y-[6vw] sm:gap-y-0 mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20">
                        <div className="text-white text-[4vw] xs:text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] border-r-[5px] pr-[4vw] xs:pr-[3.5vw] sm:pr-[3vw] md:pr-[2.5vw] lg:pr-[2vw] py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 w-full xs:w-[45%] sm:w-auto">
                            <h2 className="text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] text-right">+10 Years</h2>
                            <p className="text-right">Experience</p>
                        </div>
                        <div className="text-white text-[4vw] xs:text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] border-r-[5px] pr-[4vw] xs:pr-[3.5vw] sm:pr-[3vw] md:pr-[2.5vw] lg:pr-[2vw] py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 w-full xs:w-[45%] sm:w-auto">
                            <h2 className="text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] text-right">+450</h2>
                            <p className="text-right">Customers</p>
                        </div>
                        <div className="text-white text-[4vw] xs:text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] border-r-[5px] pr-[4vw] xs:pr-[3.5vw] sm:pr-[3vw] md:pr-[2.5vw] lg:pr-[2vw] py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 w-full xs:w-[45%] sm:w-auto">
                            <h2 className="text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] text-right">15K</h2>
                            <p className="text-right">Portfolio photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;