import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Interface,
  MyGlobalStyles,
  InterfaceSwiper,
} from "./styles/globalStyles";
import Header from "./components/Header";
import ImageButton from "./components/ButtonImage";
import Introduction from "./components/Introduction";
import AboutUs from "./components/AboutUs";
import PlansAndServices from "./components/Services";
import Experiences from "./components/Experiences/index";
import Testemonials from "./components/Swiper/index";
import Contact from "./components/Contact";
import Footer from "./components/Footer/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyGlobalStyles />
    <Header />
    <Interface>
      <Introduction />
      <ImageButton />
      <AboutUs />
      <PlansAndServices />
      <Experiences />
    </Interface>
    <InterfaceSwiper>
      <Testemonials />
    </InterfaceSwiper>
    <Interface>
      <Contact />
    </Interface>
    <Footer />
  </StrictMode>
);
