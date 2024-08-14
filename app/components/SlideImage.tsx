import Image from "next/image";

export function SlideImage({
  url,
  alt,
  title,
}: {
  url: string;
  alt: string;
  title: string;
}) {
  return (
    <Image
      key={url}
      loading="eager"
      src={url}
      alt={alt || title || "image"}
      width="500"
      height="500"
      className="object-contain aspect-4/3"
    />
  );
}
