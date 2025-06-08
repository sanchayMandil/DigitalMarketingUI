import Product from '../../assets/product.png';
import arrow from '../../assets/arrrow.png';
function Products(){
    return (
        <div className='text-white relative mt-[9vw]'>
            <div className='flex flex-col items-end'>
                 <h1 className='text-right syncopateRegular mr-[4vw] text-[4vw]'>PRODUCTS</h1>
            <img className='w-full absolute -top-[1.5vw]'
            style={{clipPath:' polygon(0 0, 100% 19%, 100% 79%, 0% 100%)'}}
                src={Product}
                alt="Product Image"
            />
            <button className='text-right flex flex-col text-white mt-[45vw]
            mr-[4vw] text-[1.5vw]'>See More
            <img className='invert -rotate-90 ml-[3vw] h-[5vw] -mt-[2vw]'
            src={arrow} alt="Arrow" />
            </button>
            </div>
           
        </div>
    )
}
export default Products;