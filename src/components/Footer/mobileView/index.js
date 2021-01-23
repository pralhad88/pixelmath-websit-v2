import SocialMediaIcon from "../socialMediaIcon";
import pixelLogo from "../../../asset/logo.png";
import {PATHS} from "../../../constant";

import "./styles.scss";

function MobileViewFooter(props) {
  return (
    <div className="container">
    <div className="mobile-view">
      <div className="row">
        <div className="col-sm-12">
            <div
              style={{
                padding: '20px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
              }}>
              <img width="40px" height="40px" src={pixelLogo} alt="logo" />
              <h2 style={{ marginTop: -1, fontWeight: 600, fontSize: 24 }}>PixelMath</h2>
            </div>
        </div>
        <div className="col-sm-12">
          <div className="row navbar-header">
              <p className="text-styles" >
                <a className="link" href={PATHS.HOME_PATH}>Features</a>
              </p>
              <p className="text-styles">
                <a className="link" href={PATHS.DOWNLOAD}>Download</a>
              </p>
              <p className="text-styles">
                <a className="link" href={PATHS.HOME_PATH}>Contest</a>
              </p>
              <p className="text-styles">
                <a className="link" href={PATHS.HOW_TO_USE}>How to Use</a>
              </p>
          </div>
        </div>
        <div className="col-sm-12 pixel-questions">
          <p><b>Get in touch</b></p>
          <p><u>Questions or feedbacks?</u></p>
          <p><u>We’d love to hear from you</u></p>
        </div>
        <div className="col-sm-12">
          <p >{`Terms & Conditions I Privacy Policy`}</p>
        </div>
        <div className="col-sm-12">
          <SocialMediaIcon />
        </div>
        <div className="col-sm-12 mt-3">
          <p >2020 PixelMath. All rights Reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MobileViewFooter;