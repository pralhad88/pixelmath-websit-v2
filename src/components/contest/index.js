import { useState, useEffect } from "react";
import "./styles.scss";
import swal from "sweetalert";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import appStoreImage from "../../asset/app_store_icon.png";
import googelStoreImage from "../../asset/google_play_button.svg";
import { razorpayOrder, razorpay } from "../../razorpay";

import PixelLogo from "../../asset/logo.png";

function ContestRegistration(props) {
  const [phone, setPhone] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    grade: ''
  });
  
  // useEffect (() => {

  // });

  const makePayment = async () => {
    const {
      grade,
      email,
      name
    } = data;
    data.contact = `+${phone}`;
    data.grade = parseInt(grade);
    if (phone && grade && email && name) {
      await razorpayOrder(data)
      .then((res) => {
        if (res.data.success) {
          const {id, user_id} = res.data;
          razorpay(name, email, `+${phone}`, parseInt(grade), id, user_id)
        } else {
          swal("Contact number is already exist please try with another number!", {
            icon: "error",
          });
        }
      })
    } else {
      swal("Please fill all feild!", {
        icon: "error",
      });
    }
  }

  const handelChange = (event) => {
    const {value, name} = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const {
    name,
    email,
    grade
  } = data;

  return (
    <div className="main-contest-container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 contest-form-container">
          <div className="row m-3 mt-5">
            <div className="col-sm-5 col-md-5 col-lg-5">
              <h2 style={{ fontWeight: 900, padding: 0 }}>Register</h2>
              <h6 className="celebration-font-mid">Registration Fee-
                        <span style={{ color: 'red', textDecoration: "line-through" }} >
                  <b><span style={{ color: "black", fontSize: '1em' }}>
                    <span style={{ fontFamily: 'Just Another Hand, cursive' }} >₹</span> 999
                                </span></b>
                </span>
              </h6>
              <h6 style={{ padding: 0 }} ><b>Early Bird Offer- ₹ 499</b></h6>
            </div>
            <div className="col-sm-7 col-md-7 col-lg-7">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 text-center" style={{ width: "auto" }}>
                  <i className="fa fa-award" style={{ fontSize: "2em", color: "#801a17" }}  ></i>
                  <h6 style={{ fontSize: "0.75em" }} >Fastest Finger</h6>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center" style={{ width: "auto" }}>
                  <i className="fa fa-trophy" style={{ fontSize: "2em", color: "#f7b643" }} ></i>
                  <h6 style={{ fontSize: "0.75em" }}>Most Accurate</h6>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center" style={{ width: "auto" }}>
                  <i className="fa fa-medal" style={{ fontSize: '2em', color: "#23395d" }}></i>
                  <h6 style={{ fontSize: "0.75em" }}>Best Team</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-3 mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <input type="text" value={name} name="name" id="name" className="contest-input form-control" placeholder="Student's Name" onChange={handelChange} />
            </div>
          </div>

          <div className="row m-3 mt-4">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <input type="email" value={email} name="email" id="email" className="contest-input form-control" placeholder="Email" onChange={handelChange} />
            </div>
          </div>

          <div className="row m-3 mt-4">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <PhoneInput
                className="contest-input"
                country={'in'}
                value={phone}
                onChange={phone => setPhone(phone)}
                placeholder='Contact number'
              />
            </div>
          </div>

          <div className="row m-3 mt-4">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <select value={grade} name="grade" onChange={handelChange} className="contest-input form-control" style={{ padding: 0, paddingLeft: "1em", height: "3em" }}
                id="grade">
                <option value="">Grade</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
              </select>
            </div>
          </div>

          <div className="row m-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h5>Get <b>Free</b> 3 Months Subscription of PixelMath App</h5>
            </div>
          </div>

          <div className="row m-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <button className="contest-submit-button" id="submit_contest" onClick={makePayment}>Register</button>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <span id="share-fb"><i className="fab fa-facebook share-fb" style={{ fontSize: "2em", color: "#4064ac" }} ></i></span>
              <span id="share-whatsapp"><i className="fab fa-whatsapp"
                style={{ fontSize: "2em", color: "#62d467" }} ></i></span>
            </div>
          </div>

          <div className="row m-3">
            <div className="col-sm-12 col-md-12 col-lg-12 text-left">
              <h5>For any queries, WhatsApp us at <b>+91-8280723657</b></h5>
            </div>
          </div>

        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 desktop-bg-container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-right pt-5 pr-5">
              <a id="download-google"
                href="https://play.google.com/store/apps/details?id=com.rvjeet.pixelmath&hl=en" role="button"
                target="blank"><img src={googelStoreImage}
                  style={{ width: "2.5em", verticalAlign: "baseline" }} /></a>
              <a id="download-apple" href="https://apps.apple.com/in/app/pixelmath/id1507433163" role="button"
                target="blank"><img src={appStoreImage}
                  style={{ width: "2.5em", verticalAlign: "baseline", marginLeft: "1em" }} /></a>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 pl-5 pt-5">
              <h3 style={{ fontWeight: 900, padding: 0 }} >Online</h3>
              <h1 style={{ fontWeight: 900 }}  >Math Contest</h1>
              <h5 style={{ fontWeight: 900 }} > On 14 March (Sunday), 2021</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContestRegistration;