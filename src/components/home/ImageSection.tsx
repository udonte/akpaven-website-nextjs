import React from " react\;

type ImageItem = {
 src: string;
 alt?: string;
 overlayText?: string;
};

interface ImageSectionProps {
 /**
 * Array of images to display. Provide one item for a single full‑width image,
 * or two items for a side‑by‑side layout.
 */
 images: ImageItem[];
}

/**
 * ImageSection – a reusable component that renders either a single large image
 * or two images in a row. Each image can have optional overlay text which is
 * positioned at the bottom‑left corner of the image.
 */
export default function ImageSection({ images }: ImageSectionProps) {
 const displayed = images.slice(0, 2);
 const containerClass = displayed.length === 1 ? \w-full\ : \flex gap-4\;

 return (
 <div className={containerClass}>
 {displayed.map((img, idx) => (
 <div key={idx} className=\relative w-full\>
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src={img.src}
 alt={img.alt ?? \\}
 className=\w-full h-auto object-cover rounded-lg\
 />
 {img.overlayText && (
 <div className=\absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-lg\>
 {img.overlayText}
 </div>
 )}
 </div>
 ))}
 </div>
 );
}
