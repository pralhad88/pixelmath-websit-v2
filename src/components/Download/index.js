import "./styles.scss";
import androidImage from "../../asset/android/android.png";
import iphoneImage from "../../asset/iphone/iphone.png";

function  Download(props) {
  return (
    <div className="pixel-download">
      <div className="row download-text">
        <div className="col-sm-12">
          <h2 className="mt-3">Download PixelMath For Phones</h2>
        </div>
      </div>
      <div className="row download-image">
        <div className="col-sm-12 col-md-3 col-lg-4">
          <img src={androidImage} alt="android" />
          <button>ANDROID</button>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-4 iphone-image">
          <img src={androidImage} alt="iphone" />
          <button>IPHONE</button>
        </div>
      </div>
    </div>
  )
}

export default Download;