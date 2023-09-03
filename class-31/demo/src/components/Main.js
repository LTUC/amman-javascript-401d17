import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { ThemeContext } from '../context/Theme';

import './style.scss'
import { useContext } from "react";

export default function Main() {

  const theme = useContext(ThemeContext);

  return (
    <main className={theme.mode}>
      <Header />
      <section>
        <Content />
      </section>
      <Footer />
    </main>
  )
}