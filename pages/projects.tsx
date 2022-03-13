import { RevisionPending } from "components/Badgets/Revision";
import Container from "components/Layout/Container";
import { Projects } from "components/Projects";
import { Paragraph } from "pages/blog";

export default function Testimonials() {
  const pending = true;
  return (
    <Container title="Proyectos - Iván Barrientos Lema">
      {pending && <RevisionPending />}
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
      <Projects />
    </Container>
  );
}
