import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";
import Up from "../../../assets/arrowUp.svg";
import Down from "../../../assets/arrowDown.svg";
import NFT1 from "../../../assets/imgs/NFT.png";
import NFT2 from "../../../assets/imgs/NFT2.png";

const Waitlist = () => {
  const [arrow, setArrow] = useState(true);
  const [productNo, setProductNo] = useState(0);
  const handleProducts = (index) => {
    if (index == productNo && arrow) {
      setArrow(false);
    } else {
      setArrow(true);
      setProductNo(index);
    }
  };

  const products = [
    {
      title: "MARKETPLACE",
      desc: "On Aurals Marketplace, music artists can create, mint and sell their NFT collection at extremely low gas fees. This marketplace also isn’t only for NFTs sales but also other music products. With a unique perk, the entire commerce process is fully automated. Literally the best source of income for any music artist.",
    },
    {
      title: "AURALS NFTS",
      desc: "",
    },
    {
      title: "AURALS TOKEN",
      desc: "",
    },

    {
      title: "AURALS STREAMING PLATFORM",
      desc: "",
    },

    {
      title: "METAVERSE: VIRTUAL MUSIC GALLERY",
      desc: "",
    },
  ];

  return (
    <>
      <Header />
      <div className="pageBody">
        <div className="intro">
          <div className="intro-content">
            <div>
              <span className="joinWaitlistText mb-2">LAUNCHING SOON</span>
              <span className="intro-subText">
                A Decentralized Music Ecosystem For Music Creatives And
                Collectors
              </span>
            </div>

            <div className="m-5">
              <div style={{ position: "relative", left: 0, top: 0 }}>
                <div></div>
                <img src={NFT1} class="another-rec" />
                <div></div>
                <img src={NFT2} class="rect" />
              </div>
            </div>

            {/* <div className="m-4">
              <input className="input m-1" placeholder="Email address" />
              <button className="submit-button m-1">
                <span className="button-text submit-text">Submit</span>
              </button>
            </div> */}
          </div>
        </div>

        <div className="products m-5">
          <a className="products-header mb-2">Products</a>

          {products.map((value, index) => {
            return (
              <div key={index} className="products-info p-4 m mb-4">
                <div
                  className=""
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div>
                    <a className="products-text">{value.title} </a>
                  </div>

                  {arrow && productNo === index && (
                    <div className="products-description mt-1">
                      {value.desc}
                    </div>
                  )}
                </div>
                <div className="me-3 ms-3">
                  <img
                    src={arrow && productNo === index ? Down : Up}
                    className="products-arrow"
                    onClick={() => handleProducts(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="joinWaitlist">
          <div className="center-content">
            <span className="joinWaitlistText mb-2">Join our Waitlist</span>
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
