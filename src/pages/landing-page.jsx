import NavbarLandingPage from "../components/Layouts/Landing-Page/Navbar-Landing-Page";
import HomeSection from "../components/Layouts/Landing-Page/Home-Section";
import AboutSection from "../components/Layouts/Landing-Page/About-Section";
import "../assets/css/LandingPage.css";

function landingpage() {
  return (
    <>
      <NavbarLandingPage />
      <HomeSection />
      <AboutSection />
    </>
  );
}

export default landingpage;
