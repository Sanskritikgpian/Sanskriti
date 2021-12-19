import React from "react";
import Sideshow from "./Slideshow";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mystyle={
    backgroundColor: "rgb(17, 16, 14)",
    padding: "10px",
    fontFamily: "Arial",
    border: "1px solid white",
    height: "40%",
    width: "60%",
    marginLeft: "20%"
};

const colstyle={
    height: "40%",
    width: "60%",
    textAlign: "center",
};

const coltext={
    height: "40%",
    width: "60%",
    textAlign: "center",
    padding: "70px 0" 
};
function Column()
{
    return (
        <div classname="colu" style={mystyle}>
            <Container>
                <Row>
                <Col style={colstyle}><Sideshow /></Col>
                <Col style={coltext}>
                        <h3>Winner!!!</h3>
                        <p>1st Prize</p>
                        <p>2nd Prize</p>
                        <p>3rd Prize</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Column;
