import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../assets/imgs/logo.png";
import menu from "../../assets/menu.png";
const Header = () => (
  <div className="header">
    <div className="d-none d-lg-block">
      <Row style={styles.row}>
        <Col xs={10} md={6} style={styles.col}>
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 0 }}
          >
            <img src={logo} style={{ width: 145, height: 46, marginLeft: 0 }} />
          </div>
        </Col>

        <Col
          style={{
            ...styles.col2,
          }}
        >
          <div style={{ display: "flex" }}>
            {/* <button>
              <span className="button-text">Blog</span>
            </button>
            <button className="button-alt">
              <span className="button-text-alt">Roadmap</span>
            </button> */}
          </div>
        </Col>
      </Row>
    </div>

    <div className="d-lg-none p-2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={logo} style={{ width: 85, height: 27, marginLeft: 0 }} />
        </div>

        <div>
          {/* <img src={menu} style={{ width: 20, height: 14, marginLeft: 0 }} /> */}
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: "3%",
    display: "flex",
    justifyContent: "center",
    marginTop: "1%",
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: "5%",
  },
  col2: {
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

export default Header;
