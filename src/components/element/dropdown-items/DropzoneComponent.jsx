"use client";
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const DropzoneComponent = () => {
  const onDrop = acceptedFiles => {
    // Handle dropped files here
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} /> 
      <Image 
      className='drag-dropzone cursor-pointer'
        src='/images/icons/upload-area.svg'
        alt='drag drop area'
        width={446}
        height={117}
      />
    </div>
  );
};

export default DropzoneComponent;
