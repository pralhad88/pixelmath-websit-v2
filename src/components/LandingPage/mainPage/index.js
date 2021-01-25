import studentImage from "../../../asset/vinayak.webp";
import googleStore from "../../../asset/android.png";
import appStore from "../../../asset/ios.png";
import "./styles.scss";

function MainPage() {
  return (
    <div className="row mt-5 main-content" >
      <div className="col-sm-12 col-md-6 col-lg-6 align-content-center" >
        <div className="row main-heading">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1><b>Make maths practice as fun and addictive as Games</b></h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>
              PixelMath is a math practice app which uses principles from Game Design, Learning Sciences and Positive Psychology to make math practice a fun and collaborative experience for students.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 px-3 pt-3">
            <a href="https://play.google.com/store/apps/details?id=com.rvjeet.pixelmath&hl=en" role="button">
              <img src={googleStore} width="48%" alt="" />
            </a>
            <a href="https://apps.apple.com/in/app/pixelmath/id1507433163" role="button">
              <img src={appStore} width="42%" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 student-image">
          <div className="image-style">
            <img className="rounded" src={studentImage} width="50%" height="100%" />
          </div>
      </div>
    </div>
  )
}

export default MainPage;