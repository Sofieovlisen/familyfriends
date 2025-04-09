import Image from "next/image";

const Remoteimage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-40">
      <Image
        src={src}
        alt={alt || "Dyr"}
        width={500}
        height={500}
        className="object-cover rounded-t-2xl"
      />
    </div>
  );
};

export default Remoteimage;
