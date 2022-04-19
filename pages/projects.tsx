import Container from "components/Layout/Container";
import { Projects } from "components/Projects";
import { Paragraph } from "pages/blog";

export default function Testimonials() {
  return (
    <Container title="Proyectos - Iván Barrientos Lema">
      <h1>Proyectos</h1>
      <Paragraph>
        En este espacio se listan los proyectos personales y profesionales que
        puedo compartir -{" "}
        <a
          href={"https://github.com/IvanBarLem"}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
        <br />
      </Paragraph>
      Actualmente no hay ningún proyecto disponible.
      {/* <Projects /> */}
    </Container>
  );
}
