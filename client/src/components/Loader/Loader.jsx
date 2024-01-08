import Image from "next/image";
import LoadingGif from "../../../public/logo/loader.gif";

function Loader() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute flex items-center justify-center left-0 top-0 w-full">
        {/* <h1>Loading...</h1> */}
        <Image src={LoadingGif} alt="loader" className="w-1/2 h-full" />
      </div>
    </div>
  );
}

export default Loader;
