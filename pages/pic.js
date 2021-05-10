import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `http://clean-nextjs-bucket.s3-website.us-east-2.amazonaws.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="icon.png"
      alt="Picture of the author"
      width={50}
      height={50}
    />
  );
};

export default MyImage;
