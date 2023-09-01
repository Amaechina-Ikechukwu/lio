'use client'
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import Image from 'next/image';
import { Spinner } from 'flowbite-react';

interface User {
  displayName: string;
  // Add other user properties here
}

export default function ImageModal(props: { images: string[], name: string }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImageModal = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setOpenModal(true);
  };

  const closeImageModal = () => {
    setOpenModal(false);
  };

  const showPreviousImage = () => {
    if (selectedIndex > 0) {
      setSelectedImage(props.images[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNextImage = () => {
    if (selectedIndex < props.images.length - 1) {
      setSelectedImage(props.images[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div>
      <div className='space-y-4 flex overflow-x-auto'>
        {props.images &&
          props.images.map((image: any, index: number) => (
            <button key={index} onClick={() => openImageModal(image, index)}>
              <Image
                src={image}
                alt={`${props.name}-images`}
                width={300}
                height={300}
                className='w-full sm:w-fit'
              />
            </button>
          ))}
      </div>
      <Modal show={openModal} size="md" popup onClose={closeImageModal}>
        <Modal.Header />
        <Modal.Body>
          <div>
            <Image
              src={selectedImage}
              alt={`${props.name}-images`}
              width={500}
              height={500}
            />
          </div>
          <div className='flex justify-around'>
            <button onClick={showPreviousImage}>Previous</button>
            <button onClick={showNextImage}>Next</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
