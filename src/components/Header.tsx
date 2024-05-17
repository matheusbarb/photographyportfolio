import Link from "next/link";
import Menu from "./Menu";
import { FaCameraRetro } from "react-icons/fa";

export default function Header() {
  return (
    <div className=" flex justify-between lg:ml-32 ml-4 mr-4 items-center p-1 ">
      <div>
        <Link href="/">
          <h1 className=" flex items-center gap-2 font-bold text-lg text-white hover:cursor-pointer hover:text-[#8d4925] ">
            DUNCAN
            <FaCameraRetro />
          </h1>
        </Link>
      </div>
      <div className="h-12  flex items-center justify-between   md:h-24 lg:px-20 xl:px-40 text-white">
        <div className="hidden md:flex  gap-10 flex-1 text-lg  font-medium">
          <Link href="/">
            <p className="hover:cursor-pointer  hover:translate-x-2 hover:-translate-y-2 transition-all uppercase ">
              Works
            </p>
          </Link>
          <Link href="/about">
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all uppercase">
              About Me
            </p>
          </Link>
          <Link href="https://www.instagram.com/duncan_mt/">
            <p className="hover:cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-all uppercase">
              Instagram
            </p>
          </Link>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}
