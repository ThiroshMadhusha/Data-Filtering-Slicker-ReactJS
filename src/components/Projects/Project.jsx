import React from "react";
import "./project.css";
import Slider from "./Slider";

const Project = () => {
  return (
    <>
      <div className="image-container">
        <h1>
          Recent <span className="green">Project</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          fugit quisquam unde deleniti praesentium nemo nobis exercitationem
          voluptatum corrupti soluta quia qui fuga earum, natus omnis magnam
          dolore! Voluptates, quaerat?
              </p>
              
              <div className='slide'>
                  <Slider />
              </div>
      </div>
    </>
  );
};

export default Project;
