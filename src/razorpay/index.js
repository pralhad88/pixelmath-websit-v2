import axios from 'axios';
import swal from "sweetalert";
const RAZORPAY_KEY = "rzp_test_Lc9s8WXtscUOy6";

export const razorpay = async (name, email, contact, grade, id, user_id) => {
  const options = {
    key: RAZORPAY_KEY,
    name: "PixelMath",
    description: "Contest Registration!",
    order_id: id,
    amount: "49900",
    currency: "INR",
    handler: async (response) => {
      try {
        const paymentId = response.razorpay_payment_id;
        swal({
          title: "Loading...",
          buttons: false
        });
        await axios.post(`razorpay/capture/${paymentId}`, {
          amount: '49900',
          name: name,
          email: email,
          contact: `+91${contact}`,
          grade: grade,
          user_id,
        }).then(() => {
          swal("Payment received", {
            icon: "success",
            button: false,
            timer: 1500
          }).then(async (res) => {
            window.location.href = 'http://localhost:3000';
          })
        }).catch((err) => {
          swal("Your payment is not recive yet please try again!", {
            icon: "error",
            button: false,
            timer: 1500
          }).then((res) => {

          })
        })
        return true;
      } catch (err) {
        return false;
      }
    },
    theme: {
      color: "#686CFD",
    },
    prefill: {
      name: name,
      email: email,
      contact: contact
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
}

export const razorpayOrder = async (student_details) => {
  const response = await axios.post(`razorpay/order`, {
    amount: 499,
    student_details: student_details
  });
  return response;
}