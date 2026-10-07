import {
  ContainerContent,
  MotionTitle,
  MotionSubtitle,
  Name,
  MotionImage,
  ContainerImages,
} from "./styles";

const Introduction = () => {
  return (
    <ContainerContent id="inicio">
      <MotionTitle
        initial={{ opacity: 0, x: -350 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween", delay: 1.5 }}
      >
        <span>Desafie-se</span> na <Name>Elite Gym!</Name>
      </MotionTitle>
      <MotionSubtitle
        initial={{ opacity: 0, x: 350 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween", delay: 2 }}
      >
        Na Elite Gym, sua jornada fitness começa com o suporte de uma equipe de
        especialistas e uma comunidade que inspira. Junte-se a nós e conquiste
        seus objetivos com treinos personalizados e o ambiente perfeito para
        evolução.
      </MotionSubtitle>

      <ContainerImages>
        <MotionImage
          className="foto-1"
          src="/assets/foto-1.webp"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        />
        <MotionImage
          className="foto-2"
          src="/assets/foto-2.webp"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        />
        <MotionImage
          className="foto-3"
          src="/assets/foto-3.webp"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.6 }}
        />
        <MotionImage
          className="foto-4"
          src="/assets/foto-4.webp"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
        />
      </ContainerImages>
    </ContainerContent>
  );
};

export default Introduction;
