import MainPage from "../../components/LandingPage/mainPage";
import Features from "../../components/LandingPage/features";
import Contest from "../../components/LandingPage/contest";
import LovePixelMath from "../../components/LandingPage/lovePixelMath";
import OurHappiness from "../../components/LandingPage/ourHappiness";

function LandingPage() {
  return (
    <div className="container">
      <MainPage />
      <Features />
      <Contest />
      <LovePixelMath />
      <OurHappiness />
    </div>
  )
}

export default LandingPage;