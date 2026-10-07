import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { ContainerButton, MotionButton } from "./styles";

const ImageButton = () => {
  const [toggle, setToggle] = useState(false);

  const toggleImage = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <ContainerButton>
        <MotionButton
          onClick={toggleImage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore as Fotos
        </MotionButton>
        <FsLightbox
          toggler={toggleImage}
          sources={[
            "/assets/foto-2.webp",
            "/assets/foto-3.webp",
            "/assets/foto-4.webp",
            "/assets/foto-5.webp",
            "/assets/foto-6.webp",
            "/assets/foto-7.webp",
            "/assets/foto-8.webp",
          ]}
        />
      </ContainerButton>
    </>
  );
};

export default ImageButton;
