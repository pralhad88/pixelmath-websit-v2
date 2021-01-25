import "./styles.scss";
import androidStoreImage from "../../asset/android.png";
import iphoneAppStoreImage from "../../asset/ios.png";
import Background1 from "../../asset/background-4/background-4.png";
import Background2 from "../../asset/background-2/background-2.png";
import Background3 from "../../asset/background-3/background-3.png";
import Background4 from "../../asset/background-4/background-4.png";
import Background5 from "../../asset/background-5/background-5.png";
import Background6 from "../../asset/background-2/background-2.png";
import Background7 from "../../asset/background-2/background-2.png";


function HowToUse(props) {
  return (
    <div className="pixel-how-to-use" >
      <div className="row mt-2 how-to-use-contest">
        <h2 className="mt-3">How to use PixelMath</h2>
      </div>

      <div className="row mt-2 main-content" >
        <div className="col-sm-12 col-md-6 col-lg-6 mt-3 store-backgroud-image">
          <div className="store-div">
            <a>
              <img src={iphoneAppStoreImage} alt="iphone" />
            </a>
            <a>
              <img src={androidStoreImage} alt="android" />
            </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">1</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Download PixelMath Classroom App from Playstore or App Store.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 main-content-1">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">2</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Login to the App using your mobile number</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background2} alt="backgroun-image-2" />
          </div>
        </div>

        <div className="row mt-2 main-content" >
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background3} alt="backgroun-image-3" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">3</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Build your own team (Optional)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 main-content-1">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">4</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Answer questions to score pixels for your team on the Pixel Grid.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background4} alt="backgroun-image-4" />
          </div>
        </div>

        <div className="row mt-2 main-content" >
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background5} alt="backgroun-image-5" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">5</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Move up on the leaderboard and match the hard work put by your peers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 main-content-1">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">6</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Choose the topic for which you want to get diagnostic reports.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background6} alt="backgroun-image-6" />
          </div>
        </div>

        <div className="row mt-2 main-content" >
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 background-image-style">
            <img src={Background7} alt="backgroun-image-7" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 mt-3" >
            <div className="row topic-label">
              <div className="col-sm-12 col-md-12 col-lg-12 number-background">
                <div class="res-circle">
                  <div class="circle-txt">7</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Collect insights using diagnostic reports prepared by the app.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default HowToUse;