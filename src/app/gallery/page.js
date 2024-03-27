import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image optimization</h1>
      <h2 className="text-center text-2xl">Regular image tag</h2>
      <img
        src="https://miro.medium.com/v2/resize:fit:1000/1*PJ87QhnDB4G5r6GynPSEVw.png"
        alt="img"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl">Next.js image Componant</h2>
      <Image
        src="https://miro.medium.com/v2/resize:fit:1000/1*PJ87QhnDB4G5r6GynPSEVw.png"
        alt="next.js"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
