"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images.length) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl border bg-gray-100 text-sm text-gray-500">
        Chưa có hình ảnh
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Ảnh chính */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border bg-white">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          priority
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnail */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border transition ${
                selectedImage === index
                  ? "border-green-600 ring-2 ring-green-200"
                  : "border-gray-200 hover:border-green-400"
              }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
