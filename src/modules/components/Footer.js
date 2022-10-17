import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/imgs/logo.png";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="footer">
      <div className="center">
        <Row style={styles.row}>
          <Col xs={12} md={10} style={styles.col}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 0,
              }}
            >
              <div>
                <img src={logo} style={{ height: 46, marginLeft: 0 }} />
              </div>

              <span className="mt-3">
                <p className="footer-logo-text">
                  The decentralised music ecosystem
                </p>
              </span>
            </div>
          </Col>
          <Col
            style={{
              ...styles.col2,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span>
              <p className="footer-logo-text" style={styles.followUS}>
                FOLLOW US
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  //alignItems: "center",
                  marginLeft: 0,
                }}
              >
                <img
                  onClick={() => openInNewTab("http://twitter.com/aural_xyz")}
                  src={"/assets/twitter.svg"}
                  height={24}
                />
                <img src={"/assets/instagram.svg"} height={24} />
                <img
                  onClick={() =>
                    openInNewTab("https://www.linkedin.com/company/aurals-xyz")
                  }
                  src={"/assets/linkdeln.svg"}
                  height={24}
                />
              </div>
            </span>
          </Col>
        </Row>

        <div className="pt-3">
          <p className="footer-logo-text" style={styles.copyRight}>
            &copy; {new Date().getFullYear()} aurals. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: "0.5%",
  },
  col: {
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
  },
  col2: {
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  followUS: {
    color: "#3F043F",
    fontFamily: "Rota-ExtraBold",
    fontWeight: "700",
    fontSize: 20,
  },
  copyRight: {
    color: "#3F043F",
    fontFamily: "Rota-ExtraBold",
    fontWeight: "700",
    fontSize: 15,
  },
};

export default Footer;
