import si1 from "../../assets/si1.jpg";
import si2 from "../../assets/si2.jpg";
import si3 from "../../assets/si3.png";

function ImageContainer() {
  return (
    <>
      <div className="flex mt-[5vw] mask-b-from-70% my-10 mask-b-to-100% w-full flex-col sm:flex-row">
        <img
          className="h-[100vw] sm:h-[80vw] md:h-[60vw] lg:h-[50vw] w-full sm:w-[33.3%]
          object-cover"
          src={si1}
          alt=""
        />
        <img
          className="h-[100vw] sm:h-[80vw] md:h-[60vw] lg:h-[50vw] w-full sm:w-[33.3%] object-cover object-[20%_0%]"
          src={si2}
          alt=""
        />
        <img
          className="h-[100vw] sm:h-[80vw] md:h-[60vw] lg:h-[50vw] w-full sm:w-[33.3%]"
          src={si3}
          alt=""
        />
      </div>
    </>
  );
}

export default ImageContainer;