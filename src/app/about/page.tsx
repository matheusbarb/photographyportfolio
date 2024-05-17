import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";
import Link from "next/link";

export default function about() {
  return (
    <main className="">
      <div className=" flex flex-col items-center mr-5 lg:mr-0 text-white ">
        <h1 className="mb-4 text-2xl font-semibold ">ABOUT ME</h1>
        <span className="text-md uppercase flex flex-col items-center gap-3">
          <FaCameraRetro />
          Fujifilm X-T5
        </span>
      </div>
      <div className="flex flex-col items-center justify-center   mt-4  ">
        <Image
          className=" hover:blur-sm transition-all  bg-white   rounded-t-lg lg:w-[400px] w-[300px]  lg:mr-0"
          src="/assets/duncan.jpg"
          alt=""
          width={400}
          height={400}
        />
        <a className="text-xs p-2 lg:w-[400px] w-[300px]  lg:mr-0 bg-white hover:bg-black hover:text-white transition-all  ">
          Originally a São Paulo urban photographer, now exploring Australia
          streets. I specialize in capturing candid moments, weaving tales of
          cities souls. With each click, I celebrate urban diversity, finding
          beauty in every corner.
          <br />
          <span className="font-semibold">
            {" "}
            Join me in witnessing the poetry of city life.
          </span>
        </a>
        <div className="flex flex-col lg:mr-[180px] mt-6 text-white gap-2 ">
          <h1 className=" text-[#5d2417] font-extrabold">Contact</h1>
          <Link href="https://www.instagram.com/duncan_mt/">
            <span className="text-xs uppercase hover:text-[#5d2417] hover:cursor-pointer transition-all">
              Instagram: Duncan_MT
            </span>
          </Link>
          <span className="text-xs uppercase hover:text-[#5d2417] transition-all">
            E-mail: duncanmt@gmail.com
          </span>
        </div>
      </div>
    </main>
  );
}
