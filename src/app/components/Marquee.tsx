import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function marquee (){
    return (
        <Link href="https://www.instagram.com/duncan_mt/">
        <Marquee className="bg-[#5d2417]  text-white p-1">
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
        <span className=" font-mono text-sm flex items-center gap-2 mr-2">Follow me on Instagram <FaInstagram /></span>
      </Marquee>
      </Link>

    )
}