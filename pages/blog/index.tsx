import styled from "styled-components";
import Container from "components/Layout/Container";
import { Posts } from "components/Posts";
import { RevisionPending } from "components/Badgets/Revision";

export default function Blog() {
  const pending = false;
  return (
    <Container title="Blog - Lasha Kakabadze">
      {pending && <RevisionPending />}
      <h1>Blog 📖</h1>
      <Paragraph>
        En los últimos años, me he dado cuenta que todo el esfuerzo que he
        empleado en la carrera lo podía aprovechar para{" "}
        <b>enseñar todo lo aprendido</b>. De esta manera he decidido escribir
        estos blogs, con el objetivo de <b>reforzar los conocimientos</b> ya
        aprendidos y, además, me ayuda a redactar una <b>documentación clara</b>{" "}
        para mi YO futuro. <br />
        El principal objetivo de estos blogs es la elaboración de una{" "}
        <i>memoria </i> de todos los trabajos realizados, de esta manera
        refuerzo el progreso y apoyo la formación que estoy teniendo. Como son
        de ayuda para mí, también lo pueden ser para otras personas, por este
        motivo he decidido compartirlos, espero que te sean de ayuda y que
        aprendas algo nuevo.
      </Paragraph>
      <Posts title="Todas las publicaciones" />
    </Container>
  );
}

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
