import arrow from '../../assets/arrrow.png';
import people from '../../assets/peoples.png';
function People(){
    return (
        <>
          <div className='text-white relative mt-[9vw]'>
                     <div className='flex flex-col items-start'>
                          <h1 className='text-left syncopateRegular ml-[4vw] text-[4vw] z-10'>PEOPLES</h1>
                     <img className='w-full absolute -top-[1.5vw]'
                     style={{clipPath:'polygon(0 19%, 100% 0, 100% 100%, 0 79%)'}}
                         src={people}
                         alt="Product Image"
                     />
                        <button className='text-right flex flex-col text-white mt-[45vw]
                                 ml-[4vw] text-[1.5vw]'>See More
                                 <img className='invert -rotate-90 ml-[3vw] h-[5vw] -mt-[2vw]'
                                 src={arrow} alt="Arrow" />
                                 </button>
                     </div>
                    
                 </div>
        </>
    );
}
export default People;