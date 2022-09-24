import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Header = () => (
  <div className="header">
    <Container>
      <Row style={styles.row}>
        <Col xs={10} md={8} style={styles.col}>
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 0 }}
          >
            <img
              src={"/assets/logo.svg"}
              style={{ width: 145, height: 46, marginLeft: 0 }}
            />
          </div>
        </Col>

        <Col
          style={{
            ...styles.col2,
          }}
        >
          <div>
            <button>
              <span className="button-text">Blog</span>
            </button>
            <button className="button-alt">
              <span className="button-text-alt">Roadmap</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
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
  },
  col2: {
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Header;
