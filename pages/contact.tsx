import Container from "components/Layout/Container";
import { Flex } from "components/Layout/Container/styles";
import { devices } from "lib/displayDevice";
import { StringProps } from "lib/types";
import Image from "next/image";
import styled from "styled-components";
import ProfilePicture from "../public/assets/png/Ivan.png";

export default function Contact() {
  return (
    <Container title="Contacto - Iván Barrientos Lema">
      <HeroFlex align="flex-start">
        <Image
          src={ProfilePicture}
          alt="Picture of Ivan"
          width="500px"
          height="500px"
        />
        <ContentWrapper>
          <h1>Información de contacto</h1>
          <p>
            Puedes contactarme en mi email personal{" "}
            <Email href="mailto:ivan.barrientos.lema@gmail.com">
              ivan.barrientos.lema@gmail.com
            </Email>{" "}
            o a través de las redes sociales.
          </p>
          <br />
        </ContentWrapper>
      </HeroFlex>
    </Container>
  );
}
const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

const Email = styled.a`
   {
    margin: 0;
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div<StringProps>`
  padding-left: 2rem;
  margin-top: 2rem;

  h1,
  h2 {
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    margin-top: 1rem;
    max-width: 40ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;
