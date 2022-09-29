import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";
import Up from "../../../assets/arrowUp.svg";
import Down from "../../../assets/arrowDown.svg";
import NFT1 from "../../../assets/imgs/NFT.png";
import NFT2 from "../../../assets/imgs/NFT2.png";
import Musics from "../../../assets/imgs/music.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      desc: "Owning a NFT minted on Aurals grants you access to various benefits such as royalties, discounted or free tickets to shows and events, exclusive merchandise, access to music files and a lot of other perks and utilities.",
    },
    {
      title: "AURALS TOKEN",
      desc: "Earn royalties in $aurals token for holding Aurals NFTs. Get airdropped tokens by performing tasks such as testnet, streaming music. Spend $aurals token in our virtual music gallery.",
    },

    {
      title: "AURALS STREAMING PLATFORM",
      desc: "Listen and stream music from your favorite artistes in web3 and earn $aurals token as reward.",
    },

    {
      title: "METAVERSE: VIRTUAL MUSIC GALLERY",
      desc: "Attend your favorite artistes concerts and festivals at our virtual music gallery. Buy auctioned 1/1 music exhibitions hosted your favorite artistes with $aurals token",
    },
  ];

  return (
    <>
      <Header />
      <div className="pageBody">
        <div className="intro d-flex justify-content-center">
          <div className="intro-content flex-lg-nowrap">
            <div className="m-2  mb-4 group-text ">
              <div>
                <p className="intro-header  text-lg-start mb-2">
                  LAUNCHING SOON
                </p>
                <p className="intro-subText text-lg-start">
                  A Decentralized Music Ecosystem For Music Creatives And
                  Collectors
                </p>
              </div>
            </div>

            <div className=" group m-4">
              <div style={{ position: "relative", margin: 0 }}>
                <div className="nfts slide1">
                  <div>
                    <a className="nfts-title">Troy Ape collection</a>
                    <a className="nfts-owner">@tonyti</a>
                  </div>
                  <div>
                    <img src={NFT1} className="nft-image" />
                  </div>
                  <div>
                    <a className="nft-timer"> 23h : 41m : 11s </a>
                    <a className="nft-price">23.09 ETH </a>
                  </div>
                  <div>
                    <a className="time-label">Remaining time</a>
                    <a className="bid-label">Highest bid</a>
                  </div>
                </div>

                <div className="nfts slide2">
                  <div>
                    <a className="nfts-title">Troy Ape collection</a>
                    <a className="nfts-owner">@tonyti</a>
                  </div>
                  <div>
                    <img src={NFT2} className="nft-image" />
                  </div>
                  <div>
                    <a className="nft-timer"> 23h : 41m : 11s </a>
                    <a className="nft-price">23.09 ETH </a>
                  </div>
                  <div>
                    <a className="time-label">Remaining time</a>
                    <a className="bid-label">Highest bid</a>
                  </div>
                </div>

                <div>{/* <img src={NFT2} className="rect" /> */}</div>
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

        <img src={Musics} style={{ width: "15%" }} className="musics" />

        <div className="products mt-5 mb-5 ms-3 me-3">
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
            <span className=" joinWaitlistText m-2">Join our Waitlist</span>
            <a className="text-white m-2">
              Sign up to receive early updates on announcements, testnet, new
              collections
            </a>

            <div className=" waitlistEmail mt-4 mb-4">
              <input className="input m-3" placeholder="Email address" />
              <button className="submit-button m-1 mt-3">
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
