import React from "react";
import { IKImage } from "imagekitio-react";
const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      path={src}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
      width={w}
      height={h}
      alt={alt}
    />
  );
};

export default Image;
