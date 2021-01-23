import "./styles.scss";
import androidImage from "../../asset/android/android.png";
import iphoneImage from "../../asset/iphone/iphone.png";
import androidStoreImage from "../../asset/android.png";
import iphoneAppStoreImage from "../../asset/ios.png";

function Download(props) {
  return (
    <div>
      <div className="pixel-download">
        <div className="row download-text">
          <div className="col-sm-12">
            <h2 className="mt-3">Download PixelMath For Phones</h2>
          </div>
        </div>
        <div className="row download-image">
          <div className="col-sm-12 col-md-12 col-lg-4 android-image">
            <img src={androidImage} alt="android" />
            <button className="mobile-button" >ANDROID</button>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 iphone-image">
            <img src={androidImage} alt="iphone" />
            <button className="mobile-button">IPHONE</button>
          </div>
        </div>
      </div>

      <div className="row mt-3 justify-content-center align-items-center text-center" >
        <div className="text-aglinments" >
          <p>By installing PixelMath, you agree to our <a style={{
            color: '#0675C6',
            cursor: "pointer"
          }}>{`Terms & Privacy Policy`}</a></p>
        </div>
      </div>

      <div className="row mt-3 justify-content-center align-items-center text-left">
        <div className="col-sm-12 col-md-3 col-lg-4 align-content-center" >
          <div className="row text-aglinment">
            <div className="col-sm-12 col-md-12 col-lg-12 text-aglinments1" >
              <p><b>PixelMath on your phone</b></p>
              <p><b>or tablet is free, easy, and fun.</b></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-4 align-content-center">
          <a>
            <img src={iphoneAppStoreImage} width="50%" height="50%" alt="iphone" />
          </a>
          <a>
            <img src={androidStoreImage} width="50%" height="50%" alt="android" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Download;