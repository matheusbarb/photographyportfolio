"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface LinkItem {
  id: number;
  title: string;
  url: string;
}

const links: LinkItem[] = [
  { id: 1, title: "Works", url: "/" }, 
  { id: 2, title: "About Me", url: "/about" },
  { id: 3, title: "Instagram", url: "https://www.instagram.com/duncan_mt/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (url: string) => {
    if (url.startsWith("http")) {
      window.location.replace(url);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="ml-24 relative">
      {!open ? (
        <IoMenu className="text-5xl" onClick={() => setOpen(true)} />
      ) : (
        <IoClose className="text-5xl" onClick={() => setOpen(false)} />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className=" gap-2 absolute right-[70px] top-[40px]  text-[#5d2417]  top-18 w-[40vh] pt-3 pb-3 flex flex-col items-start justify-center text-xl z-10"
          >
            {links.map((item) => (
              <span
                key={item.id}
                className="text-md font-bold uppercase cursor-pointer"
                onClick={() => handleClick(item.url)}
              >
                <Link href={item.url}>
                  <span onClick={() => setOpen(false)}>{item.title}</span>
                </Link>
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
