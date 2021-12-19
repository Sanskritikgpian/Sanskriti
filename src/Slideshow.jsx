import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const newstyle={
    padding: "10px",
    border: "1px solid white",
    height: "300px",
    width: "300px"
};

function Slideshow() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/p843x403/266041578_10161505950648266_1873230824098355006_n.png?_nc_cat=111&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=FyfVbQr3ud8AX9PIqTk&_nc_ht=scontent.fixr3-1.fna&oh=00_AT_PExSbuRmpH-pEALHf0H5wzIBm5ONR3pk4JROIniDk2Q&oe=61C2C0ED"
                    alt="First slide"
                    style={newstyle}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/p843x403/268914991_10161516145708266_8659371226268755076_n.png?_nc_cat=102&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=C0yeQeN1M5MAX-CJK0r&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9ibc0JGSPZPyHsJipvF8YV6-Fw07gWWtlJzrSEXzul9A&oe=61C2DEFE"
                    alt="Second slide"
                    style={newstyle}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    id= "reshape2"
                    src="https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/p843x403/259971603_10161503634578266_7375707623465410376_n.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=89MRDWOdw0kAX_y0z7y&_nc_ht=scontent.fixr3-1.fna&oh=00_AT9h8Gv2abO9jPV-CTt-fM4fzdtVu7PxR9VTlb_9R_105w&oe=61C1B62C"
                    alt="Third slide"
                    style={newstyle}
                />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  export default Slideshow;