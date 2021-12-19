import React from "react";
import Sideshow from "./Slideshow";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Columns()
{
    return (
        <div>
            <Container>
                <Row>
                    <Col classname="newcol">
                        <h3>In A Nutshell</h3>
                        <p>Date:2nd January 2022</p>
                        <p>Time:12 Noon</p>
                        <p>Venue:Netaji Auditorium</p>
                        <p>Reg. Deadline:29th December 2021</p>
                    </Col>
                    <Col classname="newcol"><Sideshow /></Col>
                    <Col classname="newcol">
                        <h3>Description</h3>
                        <p>
                            Hello KGPians,
                            Do you have a thought of creating your own venture and look forward to some help?
                            Many times we think of something that should have existed, some new idea, but lack guidance. 
                            To give a direction to your ideas, provide the required guidance, and help you prepare for your future entrepreneurial endeavors, Entrepreneurship Cell, IIT Kharagpur is back with Startup Boot Camp(SBC)2021. 
                            So, buckle up yourself and get ready with your innovative startup ideas and stay tuned with us!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Columns;
