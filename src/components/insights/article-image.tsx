import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticleImage({
  src,
  alt,
}: ArticleImageProps) {
  return (
   <div className="my-10 flex justify-center">
  <div className="w-[700px] max-w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="h-auto w-full"
    />
  </div>
</div>
  );
}