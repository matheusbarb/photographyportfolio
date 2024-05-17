import ImageGrid from "./components/ImageGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center mt-[70px] lg:mt-0">
        <Image
              src="/assets/imagelogo.jpg"
              alt="llogo"
              width={500}
              height={500}
              className="rounded-lg"
            /></div>
       <h1 className="text-2xl text-center mt-10  font-semibold uppercase mb-2 text-[#5d2417]">selected Work</h1>
      <ImageGrid />
    </main>
  );
}
