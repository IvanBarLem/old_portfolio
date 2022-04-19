import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";
import {
  StyledContainer,
  Main,
  StyledHTML,
  Section,
  SectionGrid,
  SectionWrapper,
} from "components/Layout/Container/styles";

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
}

export default function Container({ children, ...customMeta }: ContainerProps) {
  const router = useRouter();
  const meta = {
    title: "Iván Barrientos Lema – Ingeniero Informático",
    description: `Desarrollador sofware.`,
    image: "https://www.adrinlol.com/assets/png/Thumbnail.png",
    type: "website",
    ...customMeta,
  };

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const darkTheme = resolvedTheme === "dark";
  useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://ivanbarlem.es${router.asPath}`}
        />
        <link rel="canonical" href={`https://ivanbarlem.es${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Iván Barrientos Lema" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ivanbarlem" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {mounted && (
        <Section>
          <SectionWrapper>
            <SectionGrid>
              <StyledContainer>
                <StyledHTML darkTheme={darkTheme} />
                <Header changeTheme={changeTheme} darkTheme={darkTheme} />
                <Main>
                  <StyledContainer>{children}</StyledContainer>
                </Main>
                <Footer darkTheme={darkTheme} />
              </StyledContainer>
            </SectionGrid>
          </SectionWrapper>
        </Section>
      )}
    </>
  );
}
