import arrow from '../../assets/arrrow.png'
import arch from '../../assets/arch.png'

function Arch(){
    return (
         <div className='text-white relative mt-[9vw]'>
                    <div className='flex flex-col items-end'>
                          <h1 className='text-right syncopateRegular mr-[4vw] text-[4vw]'>Architecture</h1>
                    <img className='w-full'
                    style={{clipPath:' polygon(0 0, 100% 19%, 100% 79%, 0% 100%)'}}
                        src={arch}
                        alt="Product Image"
                    />
                  <button className='text-right flex flex-col text-white -mt-[5vw]
                             mr-[4vw] text-[1.5vw]'>See More
                             <img className='invert -rotate-90 ml-[3vw] h-[5vw] -mt-[2vw]'
                             src={arrow} alt="Arrow" />
                             </button>
                    </div>
                   
                </div>
    );
}
export default Arch;