import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Inicio" />
              <Navigation href="/projects" text="Proyectos" />
              <Navigation href="/blog" text="Blog" />
            </FlexLinks>
            <FlexLinks>
              <Navigation href="/contact" text="Contacto" />
              <Navigation href="/testimonials" text="Testimonials" />
              <ExternalLink href="https://twitter.com/Adrinlolx">
                Twitter
              </ExternalLink>
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://www.linkedin.com/in/ivanbarlem/">
                LinkedIn
              </ExternalLink>
              <ExternalLink href="https://github.com/IvanBarLem">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://instagram.com/ivan.b.l">
                Instagram
              </ExternalLink>
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
