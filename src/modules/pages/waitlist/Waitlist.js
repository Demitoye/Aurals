import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

const Waitlist = () => {
  return (
    <>
      <Header />
      <div className="pageBody">

        <div className="products">

        </div>



        <div className="joinWaitlist">
          <div className="center-content">
            <a className="joinWaitlistText mb-2">Join our Waitlist</a>
            <a className="text-white mb-2">
              Sign up to receive early updates on announcements, testnet, new
              collections
            </a>

            <div className="m-4">
              <input className="input m-1" placeholder="Email address" />
              <button className="submit-button m-1">
                <span className="button-text submit-text">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Waitlist;
