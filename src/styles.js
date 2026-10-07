import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --ink: var(--color-background);
    --ink-2: var(--color-background-subtle);
    --navy: var(--color-secondary);
    --paper: #f3f1eb;
    --white: var(--color-foreground);
    --muted: var(--color-muted-foreground);
    --red: var(--color-primary);
    --green: var(--color-success);
    --line: var(--color-border);
    --max: 1180px;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 88px; }
  body {
    margin: 0;
    color: var(--white);
    background: var(--ink);
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, button, a { cursor: default; }
  a, button { font: inherit; }
  a { color: inherit; text-decoration: none; cursor: pointer; }
  button { cursor: pointer; }
  img { display: block; max-width: 100%; }
  h1, h2, h3, p { margin: 0; }
  ul { list-style: none; margin: 0; padding: 0; }
  .family-note { margin-top: 18px; color: var(--muted); font-size: 11px; }
  ::selection { color: var(--white); background: var(--red); }
  :focus-visible { outline: 3px solid var(--color-ring); outline-offset: 4px; }
  * { scrollbar-width: thin; scrollbar-color: var(--red) var(--ink); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), var(--max));
  margin-inline: auto;
  @media (max-width: 640px) { width: min(calc(100% - 32px), var(--max)); }
`;

export const SkipLink = styled.a`
  position: fixed; left: 16px; top: -60px; z-index: 999;
  padding: 12px 16px; background: var(--white); color: var(--ink); font-weight: 700;
  &:focus { top: 16px; }
`;

export const Header = styled.header`
  position: fixed; inset: 0 0 auto; z-index: 50;
  height: 80px; display: flex; align-items: center;
  background: rgba(10,12,34,.9); border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
  ${Container} { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
`;

export const Brand = styled.a`
  display: inline-flex; align-items: center; gap: 8px; flex: 0 0 auto;
  font-family: "Archivo", sans-serif; font-stretch: condensed; line-height: .85;
  span { color: var(--red); font-size: 34px; font-weight: 900; letter-spacing: -3px; transform: skew(-7deg); }
  strong { max-width: 45px; font-size: 14px; line-height: .82; letter-spacing: -.4px; }
`;

export const Nav = styled.nav`
  display: flex; align-items: center; gap: clamp(20px, 3vw, 38px);
  margin-left: auto;
  a { color: #d8daec; font-size: 13px; font-weight: 600; transition: color .2s; }
  a:hover { color: var(--white); }
  @media (max-width: 850px) { display: none; }
`;

export const Action = styled.a`
  min-height: 46px; padding: 0 19px; display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  color: var(--white); background: var(--red); font-size: 13px; font-weight: 700;
  border: 1px solid var(--red); transition: background .2s, border-color .2s, transform .2s;
  svg { width: 17px; height: 17px; }
  &:hover { background: #b91027; border-color: #b91027; transform: translateY(-2px); }
  ${Header} & { @media (max-width: 850px) { display: none; } }
`;

export const NavButton = styled.button`
  display: none; place-items: center; width: 46px; height: 46px; padding: 0;
  color: var(--white); background: transparent; border: 1px solid var(--line);
  svg { width: 23px; height: 23px; }
  @media (max-width: 850px) { display: grid; }
`;

export const MobileNav = styled.nav`
  position: fixed; inset: 80px 0 0; z-index: 45; padding: 30px 24px;
  display: flex; flex-direction: column; align-items: stretch; gap: 0;
  background: var(--ink-2); transform: translateX(100%); visibility: hidden;
  transition: transform .25s ease, visibility .25s;
  &[data-open="true"] { transform: translateX(0); visibility: visible; }
  > a:not(${Action}) { padding: 20px 0; border-bottom: 1px solid var(--line); font: 700 26px/1 "Archivo", sans-serif; }
  ${Action} { margin-top: 28px; }
  @media (min-width: 851px) { display: none; }
`;

export const Hero = styled.section`
  position: relative; isolation: isolate; min-height: min(860px, 100vh); padding: 170px 0 60px;
  display: flex; align-items: flex-end; overflow: hidden; background: var(--ink);
  &::before { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, rgba(10,12,34,.98) 0%, rgba(10,12,34,.78) 43%, rgba(10,12,34,.15) 78%), linear-gradient(0deg, var(--ink) 0%, transparent 35%); }
  ${Container} { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(250px, .45fr); align-items: end; gap: 60px; }
  @media (max-width: 760px) {
    min-height: 780px; padding: 138px 0 36px; align-items: stretch;
    &::before { background: linear-gradient(0deg, var(--ink) 6%, rgba(10,12,34,.72) 62%, rgba(10,12,34,.28) 100%); }
    ${Container} { grid-template-columns: 1fr; gap: 30px; align-content: end; }
  }
`;

export const HeroImage = styled.div`
  position: absolute; inset: 0; z-index: -2;
  img { width: 100%; height: 100%; object-fit: cover; object-position: 62% center; filter: saturate(.7) contrast(1.08); }
  @media (max-width: 760px) { img { object-position: 59% center; } }
`;

export const HeroCopy = styled.div`
  max-width: 820px;
  animation: hero-copy .65s ease-out both;
  .location { margin-bottom: 22px; color: #e6e7f2; font-size: 11px; line-height: 1; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  h1 { font: 850 clamp(58px, 7.5vw, 96px)/.84 var(--font-display); font-stretch: 82%; font-variation-settings: "wdth" 82; letter-spacing: -.035em; text-transform: uppercase; }
  h1 em { color: var(--red); font-style: normal; }
  > p { max-width: 580px; margin-top: 30px; color: #d8daec; font-size: clamp(16px, 1.7vw, 19px); line-height: 1.65; }
  .hero-actions { display: flex; align-items: center; gap: 28px; margin-top: 34px; }
  .text-link { display: inline-flex; align-items: center; gap: 8px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,.4); font-size: 13px; font-weight: 700; }
  .hero-note { display: block; margin-top: 18px; color: #b9bdd8; font-size: 10px; }
  @keyframes hero-copy { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 760px) {
    h1 { font-size: clamp(53px, 16vw, 80px); }
    > p { margin-top: 22px; }
    .hero-actions { align-items: stretch; flex-direction: column; gap: 8px; margin-top: 26px; }
    .text-link { align-self: flex-start; }
  }
`;

export const HeroPanel = styled.aside`
  padding: 24px; border: 1px solid var(--line); background: rgba(16,19,47,.82); backdrop-filter: blur(10px);
  span { display: block; margin-bottom: 12px; color: var(--muted); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  strong { display: block; font: 700 21px/1.3 "Archivo", sans-serif; }
  a { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; font-size: 12px; font-weight: 700; }
  @media (max-width: 760px) { display: none; }
`;

export const StatBar = styled.section`
  background: var(--red);
  ${Container} { min-height: 118px; display: grid; grid-template-columns: repeat(3, 1fr); align-items: center; }
  div { display: flex; align-items: baseline; justify-content: center; gap: 12px; padding: 0 20px; border-right: 1px solid rgba(255,255,255,.25); }
  div:last-child { border-right: 0; }
  strong { font: 800 clamp(28px, 4vw, 48px)/1 var(--font-display); font-stretch: 82%; font-variation-settings: "wdth" 82; letter-spacing: -.035em; }
  span { font-size: 12px; font-weight: 700; text-transform: uppercase; }
  @media (max-width: 680px) {
    ${Container} { width: 100%; grid-template-columns: 1fr; }
    div { min-height: 82px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.25); }
    div:last-child { border-bottom: 0; }
  }
`;

export const Section = styled.section`
  padding: clamp(84px, 10vw, 140px) 0; background: var(--ink);
  &[data-tone="light"] { color: var(--ink); background: var(--paper); }
  &[data-tone="navy"] { background: var(--navy); }
`;

export const Intro = styled.div`
  display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(260px, .6fr); align-items: end; gap: clamp(40px, 8vw, 120px); margin-bottom: 58px;
  > div + div, > p, > div:last-child > p { color: ${({ theme }) => theme?.muted || "var(--muted)"}; font-size: 15px; line-height: 1.75; }
  .asset-note { margin-top: 12px; font-size: 11px; opacity: .75; }
  ${Section}[data-tone="light"] & > p { color: #55596f; }
  @media (max-width: 700px) { grid-template-columns: 1fr; gap: 24px; margin-bottom: 38px; }
`;

export const SectionHeading = styled.div`
  h2 { max-width: 810px; font: 780 clamp(38px, 5.6vw, 72px)/.98 var(--font-display); font-stretch: 82%; font-variation-settings: "wdth" 82; letter-spacing: -.035em; text-transform: uppercase; }
  h2 em { color: var(--red); font-style: normal; }
  ${Action} { margin-top: 34px; }
`;

export const Gallery = styled.div`
  display: grid; grid-template-columns: 1.7fr 1fr; grid-template-rows: repeat(2, 270px); gap: 14px;
  .wide { grid-row: 1 / 3; }
  @media (max-width: 700px) { grid-template-columns: 1fr 1fr; grid-template-rows: 370px 190px; .wide { grid-column: 1 / 3; grid-row: auto; } }
`;

export const FeatureImage = styled.figure`
  position: relative; margin: 0; overflow: hidden; background: var(--ink-2);
  &::after { content: ""; position: absolute; inset: auto 0 0; height: 45%; background: linear-gradient(transparent, rgba(10,12,34,.8)); }
  img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.72); transition: transform .5s ease, filter .5s; }
  span { position: absolute; left: 22px; bottom: 18px; z-index: 1; font: 700 18px/1 "Archivo", sans-serif; text-transform: uppercase; }
  &:hover img { transform: scale(1.025); filter: saturate(1); }
`;

export const VideoStage = styled.figure`
  position: relative; margin: 14px 0 0; min-height: 360px; overflow: hidden; background: #050614;
  video { display: block; width: 100%; max-height: 620px; aspect-ratio: 16 / 7; object-fit: cover; }
  figcaption { position: absolute; left: 24px; right: 24px; bottom: 22px; pointer-events: none; text-shadow: 0 2px 12px rgba(0,0,0,.75); }
  figcaption strong, figcaption span { display: block; }
  figcaption strong { font: 720 21px/1 var(--font-display); font-stretch: 82%; font-variation-settings: "wdth" 82; text-transform: uppercase; }
  figcaption span { margin-top: 7px; color: #e5e6ef; font-size: 10px; }
  @media (max-width: 700px) { min-height: 230px; video { min-height: 230px; aspect-ratio: 4 / 3; } }
`;

export const Modalities = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(10,12,34,.2); border-left: 1px solid rgba(10,12,34,.2);
  article { min-height: 154px; padding: 25px; display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; border-right: 1px solid rgba(10,12,34,.2); border-bottom: 1px solid rgba(10,12,34,.2); }
  strong, span { display: block; }
  strong { margin-bottom: 9px; font: 750 24px/1 "Archivo", sans-serif; text-transform: uppercase; }
  span { color: #616477; font-size: 12px; }
  @media (max-width: 780px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; article { min-height: 110px; } }
`;

export const Plans = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

export const Plan = styled.article`
  position: relative; min-height: 420px; padding: 30px 26px; display: flex; flex-direction: column;
  background: var(--ink-2); border: 1px solid var(--line);
  &[data-featured="true"] { background: var(--navy); border-color: var(--red); }
  small { position: absolute; inset: 0 0 auto; padding: 7px 12px; color: var(--white); background: var(--red); font-size: 10px; font-weight: 800; letter-spacing: .1em; text-align: center; text-transform: uppercase; }
  h3 { margin: 24px 0 26px; color: var(--muted); font: 700 15px/1 "Archivo", sans-serif; letter-spacing: .1em; text-transform: uppercase; }
  .price { display: flex; align-items: flex-start; gap: 5px; }
  sup { margin-top: 8px; font-size: 13px; font-weight: 700; }
  .price strong { font: 800 clamp(42px, 4.5vw, 57px)/1 var(--font-display); font-stretch: 82%; font-variation-settings: "wdth" 82; letter-spacing: -.035em; }
  > span { margin: 6px 0 28px; color: var(--muted); font-size: 11px; }
  ul { display: grid; gap: 12px; margin-bottom: 28px; color: #d8daec; font-size: 11px; line-height: 1.4; }
  li { display: flex; gap: 8px; }
  li svg { flex: 0 0 auto; color: #50c878; }
  > a { min-height: 48px; display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--line); font-size: 12px; font-weight: 700; }
`;

export const BenefitsGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: clamp(50px, 9vw, 130px); align-items: start;
  > ul { border-top: 1px solid var(--line); }
  > ul li { display: grid; grid-template-columns: 30px 1fr; gap: 14px; padding: 22px 0; border-bottom: 1px solid var(--line); }
  > ul svg { margin-top: 2px; color: #72db95; width: 19px; height: 19px; }
  > ul strong, > ul span { display: block; }
  > ul strong { margin-bottom: 6px; font-size: 14px; }
  > ul span { color: var(--muted); font-size: 12px; line-height: 1.55; }
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

export const ContactGrid = styled.div`
  display: grid; grid-template-columns: 1.1fr .85fr 1.05fr; gap: 12px;
  @media (max-width: 790px) { grid-template-columns: 1fr; }
`;

export const ContactCard = styled.article`
  min-height: 280px; padding: 28px; display: flex; flex-direction: column; align-items: flex-start;
  color: var(--white); background: var(--ink-2);
  &[data-accent="true"] { background: var(--red); }
  > svg { width: 25px; height: 25px; margin-bottom: auto; }
  div span { display: block; margin-bottom: 10px; color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  &[data-accent="true"] div span { color: var(--white); }
  div strong { font: 650 19px/1.45 "Archivo", sans-serif; }
  a, small { margin-top: 25px; font-size: 11px; font-weight: 700; }
  a { min-height: 44px; display: inline-flex; align-items: center; gap: 8px; padding: 10px 0 5px; border-bottom: 1px solid currentColor; }
`;

export const Footer = styled.footer`
  padding: 40px 0; border-top: 1px solid var(--line); background: #070818;
  ${Container} { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 32px; }
  p { color: var(--muted); font-size: 12px; }
  > ${Container} > a:not(${Brand}) { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid var(--line); }
  small { color: #737792; font-size: 10px; }
  @media (max-width: 650px) { ${Container} { grid-template-columns: 1fr auto; } p, small { grid-column: 1 / 3; } }
`;

