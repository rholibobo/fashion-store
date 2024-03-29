import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "../../../public/logo/fslogo.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-auto bg-textblack pt-12 mt-6">
      <Box className="w-[95%] my-0 mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-textwhite">
        <Box className="w-full lg:w-full flex lg:block flex-col lg:flex-row items-center  h-full">
          <Image src={Logo} alt="footer logo" className="w-12 h-auto" />
          <h3 className="font-header text-xl">African Fashion Store</h3>
          <br />
          <p className="text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptate doloribus dolore tenetur dignissimos aperiam impedit
            harum? Nam adipisci velit ex, totam sit at vero, harum unde alias
            nulla repellat.
          </p>
        </Box>

        <Box className="w-full flex lg:block flex-col lg:flex-row items-center h-full">
          <h3 className="font-header text-2xl font-bold">Pages</h3>
          <br />
          <Box className="flex flex-col justify-between">
            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Products Page
            </Link>

            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Shops Page
            </Link>

            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Shop Men
            </Link>

            <Link href="#" className="text-sm  hover:text-backgroundtext">
              Shop Women
            </Link>
          </Box>
        </Box>
        <Box className="w-full flex lg:block flex-col lg:flex-row items-center  h-full">
          <h3 className="font-header text-2xl font-bold">Payment Method</h3>
          <br />
          <Box className="flex flex-col justify-between">
            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Paypal
            </Link>

            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Card
            </Link>

            <Link href="#" className="text-sm hover:text-backgroundtext mb-2">
              Stripe
            </Link>

            <Link href="#" className="text-sm  hover:text-backgroundtext">
              Cash App
            </Link>
          </Box>
        </Box>
        <Box className="w-full flex lg:block flex-col lg:flex-row items-center  h-full">
          <h3 className="font-header text-2xl font-bold">Contact Us</h3>
          <br />
          <p className="text-sm mb-2">Phone: +123456789</p>
          <p className="text-sm">Email: africanfashionstore@gmail.com</p>
        </Box>
        <Box className="w-full  flex lg:block flex-col h-full">
          <h3 className="font-header text-2xl font-bold text-center lg:text-left">Newsletter</h3>
          <br className="hidden lg:block" />
          <form>
            <Box className="py-2 px-3 bg-white">
              <input
                type="email"
                placeholder="Email"
                className="outline-0 border-none border-gray-300"
              />
            </Box>
          </form>

          <Box className="w-1/2 mt-2 my-0 mx-auto lg:mx-0">
            <Box className="flex items-center justify-center gap-4 py-2 px-6 bg-background rounded-lg text-white cursor-pointer ">
              <Typography variant="body2">Subscribe </Typography>
              <MoveRight className="text-white" />
            </Box>
          </Box>
        </Box>

        
      </Box>
      {/* <Divider /> */}

      <hr className="mt-8" />
      <Box className="flex w-full py-4 gap-3 justify-center items-center text-white">
        <FaFacebook size="20" className="cursor-pointer" />
        <FaTwitter size="20" className="cursor-pointer" />
        <FaInstagram size="20" className="cursor-pointer" />
      </Box>
    </div>
  );
}

export default Footer;
