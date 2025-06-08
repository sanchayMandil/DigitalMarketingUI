import arrow from '../../assets/arrrow.png';
import media from '../../assets/media.png';
function Meadia(){
    return(
          <div className='text-white relative mt-[9vw]'>
                             <div className='flex flex-col items-start'>
                                  <h1 className='text-right syncopateRegular ml-[4vw] text-[4vw]'>Media Design</h1>
                             <img className='w-full'
                             style={{clipPath:'polygon(0 19%, 100% 0, 100% 100%, 0 79%)'}}
                                 src={media}
                                 alt="Product Image"
                             />
                             <button className='text-right flex flex-col text-white -mt-[5vw]
                                                          ml-[4vw] text-[1.5vw]'>See More
                                                          <img className='invert -rotate-90 ml-[3vw] h-[5vw] -mt-[2vw]'
                                                          src={arrow} alt="Arrow" />
                                                          </button>
                             </div>
                            
                         </div>
    );
}
export default Meadia;