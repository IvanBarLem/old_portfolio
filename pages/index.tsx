import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Ivan.png";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Iván Barrientos Lema 👋</h1>
          <h2>Ingeniero Informático</h2>
          <p>
            Graduado en la Universidad de A Coruña. Desarrollador Fullstack de
            Java y React con 2 años de experiencia. Habilidad en la creación de
            Inteligencias Artificiales. Aptitudes en diseño gráfico y creación
            de contenido para poder ofrecer una experiencia de usuario inmersiva
            y atractiva en todo tipo de interfaces. –&nbsp;
            <Link href="/about">
              <a>más sobre mí.</a>
            </Link>
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Ivan"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
