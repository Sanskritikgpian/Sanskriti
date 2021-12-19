import React from "react";
//import Slideshow from "./Slideshow";
import Columns from "./Columns";
import Column from "./Column";
import Eventslide from "./Eventslide";

function App() {
    return (
      <div>
        <h2>Just A Test</h2>
        <br />
        <Eventslide />
        <h2>Technology</h2>
        <br />
        <Columns />
        <h2>Sports And Games</h2>
        <br />
        <Columns />
        <h2>Social And Cultural</h2>
        <br />
        <Columns />
        <h2>Student's Welfare</h2>
        <br />
        <Columns />
        <h2>Results</h2>
        <h3>Events</h3>
        <br />
        <Column />
        <h3>General Championship</h3>
        <br />
        <Column />
        <h3>Inter IIT</h3>
        <br />
        <Column />
      </div>
    );
  }

export default App;