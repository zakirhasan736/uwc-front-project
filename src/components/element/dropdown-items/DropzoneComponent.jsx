import React, { useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

const DropzoneComponent = ({ onChange }) => {
  const [droppedImage, setDroppedImage] = useState(null)

  const onDrop = acceptedFiles => {
    // Ensure only one file is accepted
    if (acceptedFiles.length > 1) {
      alert('Please drop only one file.')
      return
    }
    // Ensure file type is jpg or png
    const file = acceptedFiles[0]
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      alert('Please drop a JPG or PNG file.')
      return
    }
    const preview = URL.createObjectURL(file)
    setDroppedImage(preview)
    const data = {
      target: {
        name: 'profilePhoto',
        value: preview
      }
    }
    onChange(data)
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {droppedImage ? (
        <Image
          className='drag-dropzone cursor-pointer'
          src={droppedImage}
          alt='Dropped Image'
          width={446}
          height={117}
        />
      ) : (
        <Image
          className='drag-dropzone cursor-pointer'
          src='/images/icons/upload-area.svg'
          alt='Drag drop area'
          width={446}
          height={117}
        />
      )}
    </div>
  )
}

export default DropzoneComponent
