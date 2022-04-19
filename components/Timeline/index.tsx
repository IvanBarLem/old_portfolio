import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Year>2020</Year>
      <ul>
        <Step title="Comienzo el Trabajo de Fin de Grado 👁️">
          Comienzo un proyecto de investigación e innovación con la colaboración
          del{" "}
          <a
            href="http://www.varpa.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grupo de Investigación VARPA
          </a>{" "}
          . Se propone desarrollar una aplicación web para la gestión médica que
          incorpore un sistema inteligente capaz de diagnosticar enfermedades
          oculares en imágenes oftalmológicas.
        </Step>
        <Step title="Me uno a Altia">
          Realizo prácticas curriculares en {" "}
          <a
            href="https://www.altia.es/es/altia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Altia
          </a>{" "}
          - empresa española que ofrece servicios de consultoría y prestación de
          servicios TIC.
        </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Comienzo en la Universidad 👶🏻">
          Empiezo una nueva etapa estudiando Ingeniería Informática en la
          Universidad de A Coruña.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Línea de tiempo</h3>
      <Year>2022</Year>
      <ul>
        <Step title="Nuevo proyecto 💊">
          Inicio un nuevo proyecto en colaboración con el{" "}
          <a
            href="https://www.idisantiago.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instituto de Investigación Sanitaria de Santiago de Compostela
          </a>.{" "}
           Este proyecto consiste en el desarrollo software de una plataforma clínica, integrando gestión de pacientes y
          dosificación de medicamentos a través de modelos predictivos.
        </Step>
        <Step title="Publicación del primer artículo ⭐">
          <a
            href="https://ruc.udc.es/dspace/handle/2183/29849"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dx-OPHTA
          </a>{" "}
          se publica en el libro{" "}
          <a
            href="https://eurocast2022.fulp.ulpgc.es/sites/default/files/Eurocast_2022_Extended_Abstract_Book.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Eurocast 2022 Extended Abstract Book</i>
          </a>{" "}
          como{" "}
          <i>
            <b>
              Clinical decision support tool for the identification of
              pathological structures associated with age-related macular
              degeneration.
            </b>
          </i>
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Continúo formándome">
          Comienzo el Master Universitario en Ingeniería Informática -{" "}
          <a
            href="https://estudos.udc.es/es/study/start/4502V02"
            target="_blank"
            rel="noopener noreferrer"
          >
            MUEI
          </a>{" "}
          - premiado con la mención hacia la excelencia y con el sello
          Internacional{" "}
          <a
            href="https://www.ccii.es/certificaciones/euroinf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Euro-Inf
          </a>
        </Step>
        <Step title="Dando visibilidad al proyecto">
          <a
            href="https://ruc.udc.es/dspace/handle/2183/29849"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dx-OPHTA
          </a>{" "}
          se propone a la 18ª Conferencia Internacional sobre Teoría de Sistemas
          Asistidos por Ordenador -{" "}
          <a
            href="https://eurocast2022.fulp.ulpgc.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eurocast 2022
          </a>{" "}
          - celebrado en Las Palmas de Gran Canaria, España.
        </Step>
        <Step title="Me gradúo en Ingeniería Informática 🧑🏻‍🎓">
          Finalizo el Grado Universitario de Ingiería Informática en la
          Universidad de Coruña con dobre mención en Ingeniería del Software y
          Computación.
        </Step>
        <Step title="Finaliza el desarrollo del Trabajo de Fin de Grado 🎯">
          Después de 6 meses consigo alcanzar el objetivo propuesto y finalizo el
          desarrollo de la aplicación.{" "}
          <a
            href="https://ruc.udc.es/dspace/handle/2183/29849"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dx-OPHTA
          </a>{" "}
          sale a la luz y el proyecto tiene muy buena acogida.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          Mostrar más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
