import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({ images, initialIndex, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(initialIndex);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2 bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={`Project photo ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageLightbox;
