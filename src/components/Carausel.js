import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
class IsroCarausel extends React.Component {
  cons;
  render() {
    return (
      <div className="carConatiner">
        <div style={{ position: "relative", top: "5px", textAlign: "center" }}>
          live broadcast will start 30-34 minutes before launch
        </div>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src="/s.jpeg" alt="img" />
            <p className="legend">gslvmkIII</p>
          </div>
          <div>
            <img src="/slv.jpeg" alt="img" />
          </div>
          <div>
            <img src="/Vikram-lander.png" alt="img" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default IsroCarausel;
