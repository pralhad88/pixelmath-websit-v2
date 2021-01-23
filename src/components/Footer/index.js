import "./styles.scss";
import pixelLogo from "../../asset/logo.png";
import SocialMediaIcon from "./socialMediaIcon";
import MobileViewFooter from "./mobileView";
import PixelMathLogo from "../pixelMathLogo";

import { PATHS } from "../../constant";;

function Footer() {
  return (
    <div className="container">
      <div className="row pixel-footer">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="row footer-coloumn" >
            <div
              style={{
                padding: '20px 10px',
                display: 'flex',
              }}>
              <img width="40px" height="40px" src={pixelLogo} alt="logo" />
              <h2 style={{ marginTop: -1, fontWeight: 600, fontSize: 24 }}>PixelMath</h2>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <p >2020 PixelMath. All rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 ">
          <div className="row footer-coloumn">
            <div className="list-item">
              <div>
                <div>
                  <p className="text-styles" > 
                    <a className="link" href={PATHS.HOME_PATH} >Features</a>
                  </p>
                </div>
                <div>
                  <p className="text-styles" >
                    <a className="link" href={PATHS.HOME_PATH} >Contest</a>
                  </p>
                </div>
              </div>
              <div>
                <div >
                  <p className="text-styles" >
                    <a className="link" href={PATHS.DOWNLOAD} >Download</a>
                  </p>
                </div>
                <div >
                  <p className="text-styles" >
                    <a className="link" href={PATHS.HOW_TO_USE} >How to use</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p >{`Terms & Conditions I Privacy Policy`}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 ">
          <div className="row footer-coloumn">
            <div>
              <div style={{fontWeight: 'bold'}}>
                <p>Get in touch</p>
              </div>
              <p>
                <u>Questions or feedbacks?<br></br>We’d love to hear from you</u>
              </p>
              <SocialMediaIcon />
            </div>
          </div>
        </div>
      </div>
      <MobileViewFooter />
    </div >
  )
}

export default Footer;