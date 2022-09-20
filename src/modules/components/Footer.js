import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <div className="footer">
    <Container>
      <Row style={styles.row}>
        <Col xs={12} md={8} style={styles.col}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={"/assets/logo.svg"} style={{ width: 145, height: 46 }} />
            <span>
              <p className="footer-logo-text">
                Lorem lorem lorem lorem lorem lorem
              </p>
            </span>
          </div>
        </Col>
        <Col style={{...styles.col2,display:'flex', alignItems:"flex-end"}}>
          <span>
            <p className="footer-logo-text" style={styles.followUS}>
              FOLLOW US
            </p>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <img src={"/assets/twitter.svg"} />
              <img
                src={"/assets/instagram.svg"}
                style={{ marginLeft: "2.5%" }}
              />
              <img
                src={"/assets/linkdeln.svg"}
                style={{ marginLeft: "2.5%" }}
              />
            </div>
          </span>
        </Col>
      </Row>

      <div
        style={{
          marginLeft: "1.5%",
        }}
      >
        <p className="footer-logo-text" style={styles.copyRight}>
        &copy; {new Date().getFullYear()} aurals. All Rights Reserved
        </p>
      </div>
    </Container>
  </div>
);

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: "5%",
  },
  col: {
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1.5%",
  },
  col2: {
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: "1.5%",
  },
  followUS: {
    color: "#3F043F",
    fontWeight: "700",
    fontSize: 30,
  },
  copyRight:{
    color: "#3F043F",
    fontWeight: "700",
    fontSize: 20,
  }
};

export default Footer;
