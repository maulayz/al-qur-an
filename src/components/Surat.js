import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { FaCaretSquareRight } from "react-icons/fa";

function Surat() {
  const [surats, setSurat] = useState([]);

  useEffect(() => {
    axios.get("https://api.npoint.io/99c279bb173a6e28359c/data").then((res) => {
      setSurat(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <h2 className="text-center">Surah</h2>
        <Row>
          {surats.map((surat, index) => {
            return (
              <Col lg={3} key={index} className="p-3">
                <Row>
                  <Col>
                    <div className="p-2 border text-center rounded-3 shadow-lg">
                      <h4>{surat.nama}</h4>
                      <p>
                        <i>({surat.arti})</i>
                      </p>
                      <a
                        href={surat.audio}
                        className="text-center"
                        style={{ color: "white" }}
                      >
                        <FaCaretSquareRight size={30} />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Surat;
