import Image from "next/image";
import Sctn2 from "../../../public/images/homepage/s-2.png";
import Sctn3 from "../../../public/images/homepage/scn3.2.png";
import { Gift, Globe2, MessageSquareText, MoveRight } from "lucide-react";
import { Typography } from "@mui/material";

export default function () {
  return (
    <div className="w-full ">
      {/* Hero Section */}
      <div className="aboutHero">
        <p className="font-header text-6xl">About Page</p>
        <p className="text-base">HOME / ABOUT</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="w-[95%] lg:w-4/5 my-0 mx-auto">
        {/* Section 1 */}
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-4 lg:gap-0">
          <div className="lg:w-1/2">
            <p className="font-header text-4xl lg:text-5xl">Our Story</p>
            <br />
            <p className="text-textgray text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem quis at atque molestias voluptatem nobis sapiente incidunt
              quas eaque temporibus minus iste, delectus eveniet iusto labore
              culpa dolorum perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni dolorem quis at atque molestias voluptatem
              nobis sapiente incidunt quas eaque temporibus minus iste, delectus
              eveniet iusto labore culpa dolorum perferendis! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Magni dolorem quis at atque
              molestias voluptatem nobis sapiente incidunt quas eaque temporibus
              minus iste, delectus eveniet iusto labore culpa dolorum
              perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magni dolorem quis at atque molestias voluptatem nobis
              sapiente incidunt quas eaque temporibus minus iste, delectus
              eveniet iusto labore culpa dolorum perferendis!
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image
              src={Sctn2}
              alt="scn3"
              className="w-full lg:w-[70%] h-auto rounded"
            />
          </div>
        </div>
        <br />
        <br />

        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        {/* Section 2 */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <div className="lg:w-[55%] flex flex-col justify-center">
            <p className="font-header text-4xl lg:text-5xl">
              Our Service Content
            </p>
            <br />
            <p className="text-textgray text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem quis at atque molestias voluptatem nobis sapiente incidunt
              quas eaque temporibus minus iste, delectus eveniet iusto labore
              culpa dolorum perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni dolorem quis at atque molestias voluptatem
              nobis sapiente incidunt quas eaque temporibus minus iste, delectus
              eveniet iusto labore culpa dolorum perferendis!
            </p>
            <br />
            <div className="flex mt-2 lg:mt-4">
              <div className="flex gap-4 items-center justify-center w-3/5 lg:w-[45%] h-[6vh] lg:h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96]">
                <p>Explore Collection </p>
                <MoveRight />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/6">
            <div className="flex gap-4">
              <div className="mt-4">
                <MessageSquareText size="50" color="#F4BF96" strokeWidth={1} />
              </div>
              <div>
                <p className="text-2xl font-header">Online Customer Service</p>
                <p className="text-sm text-textgray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo nihil sunt maiores porro totam perspiciatis rerum
                </p>
              </div>
            </div>
            <br />
            <div className="flex gap-4">
              <div className="mt-4">
                <Globe2 size="50" color="#F4BF96" strokeWidth={1} />
              </div>
              <div>
                <p className="text-2xl font-header">International Delivery</p>
                <p className="text-sm text-textgray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo nihil sunt maiores porro totam perspiciatis rerum
                </p>
              </div>
            </div>
            <br />
            <div className="flex gap-4">
              <div className="mt-4">
                <Gift size="50" color="#F4BF96" strokeWidth={1} />
              </div>
              <div>
                <p className="text-2xl font-header">Online Customer Service</p>
                <p className="text-sm text-textgray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo nihil sunt maiores porro totam perspiciatis rerum
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br className="hidden lg:block" />
        <br className="hidden lg:block" />
        {/* Section 3 */}
        <div className="w-full flex justify-between flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-[40%] flex flex-col">
            <p className="font-header text-4xl lg:text-5xl">Our Ratings</p>
            <br />
            <p className="text-textgray text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem quis at atque molestias voluptatem nobis sapiente incidunt
              quas eaque temporibus minus iste, delectus eveniet iusto labore
              culpa dolorum perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni dolorem quis at atque molestias voluptatem
              nobis sapiente incidunt quas eaque temporibus minus iste, delectus
              eveniet iusto labore culpa dolorum perferendis!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem quis at atque molestias voluptatem nobis sapiente incidunt
              quas eaque temporibus minus iste, delectus eveniet iusto labore
              culpa dolorum perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni dolorem quis at atque molestias voluptatem
              nobis sapiente incidunt quas eaque temporibus minus iste, delectus
              eveniet iusto labore culpa dolorum perferendis!
            </p>
            <br />
            <div className="flex mt-2 lg:mt-4">
              <div className="flex gap-4 items-center justify-center w-3/5 lg:w-[60%] h-[6vh] lg:h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96]">
                <p>Explore Collection </p>
                <MoveRight />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid lg:grid-cols-2 gap-x-4 gap-y-12">
            <div className="flex flex-col gap-3 items-center">
              <div className="container">
                <div className="water">
                  <p className="absolute bottom-[10%] left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-lg text-textwhite">
                    85%
                  </p>
                </div>
              </div>
              <p className="font-header text-3xl">Rapidity</p>
              <p className="text-sm text-center text-textgray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="container">
                <div className="water">
                  <p className="absolute bottom-[10%] left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-lg text-textwhite">
                    85%
                  </p>
                </div>
              </div>
              <p className="font-header text-3xl">Professionalism</p>
              <p className="text-sm text-center text-textgray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="container">
                <div className="water">
                  <p className="absolute bottom-[10%] left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-lg text-textwhite">
                    85%
                  </p>
                </div>
              </div>
              <p className="font-header text-3xl">Customer Service</p>
              <p className="text-sm text-center text-textgray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="container">
                <div className="water">
                  <p className="absolute bottom-[10%] left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-lg text-textwhite">
                    85%
                  </p>
                </div>
              </div>
              <p className="font-header text-3xl">New Items</p>
              <p className="text-sm text-center text-textgray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
      {/* Section 4 */}
      <div className="w-full h-screen bg-background lg:bg-transparent mt-4 lg:mt-0 flex flex-col lg:flex-row relative items-end lg:items-start lg:justify-end pt-4">
        <div className="w-[80%] lg:w-[40%] my-0 mx-auto lg:absolute left-0 lg:left-24 -top-0 lg:top-12">
          <Image src={Sctn3} alt="scn3" className="w-full lg:w-full h-full" />
        </div>

        <div className="w-full lg:w-[70%] lg:h-full bg-background flex justify-end items-center pt-2 pl-4 lg:pl-0 pb-8 lg:pb-0">
          <div className="w-full lg:w-1/2 pr-8">
            <h3 className="font-header text-4xl lg:text-5xl font-medium">
              Embrace The Latest Fashion Trends
            </h3>
            <br />
            <Typography variant="body2" gutterBottom color="secondary.main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <br />
            <div className="flex items-center justify-center w-[40%] h-[7vh] lg:h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer transition-colors duration-300 ease-linear  ">
              <p>Check It Out </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
