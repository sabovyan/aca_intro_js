import { default as NextImage } from "next/image";
import { TImage } from "@/types/main";

interface Props {
  data: TImage;
}

export function Image({ data }: Props) {
  return (
    <NextImage
      loading="eager"
      src={data.url}
      alt={data.alt || "image"}
      width="500"
      height="500"
      className="object-contain  aspect-4/3 w-full"
    />
  );
}
