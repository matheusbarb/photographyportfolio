"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";

const images = Array.from(
  { length: 20 },
  (_, i) => `/images/image${i + 1}.jpg`
);

const ImageGrid: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    Modal.setAppElement("#__next"); 
  }, []);

  const openModal = (src: string) => {
    setCurrentImage(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-64 relative cursor-pointer"
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative w-full max-w-3xl mx-auto p-4">
          <button
            onClick={closeModal}
            className="absolute  right-5 top-3 text-white text-5xl"
          >
            &times;
          </button>
          <Image
            src={currentImage}
            alt="Expanded Image"
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageGrid;
