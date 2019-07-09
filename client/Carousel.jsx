import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlide from './components/ImageSlide.jsx';
import Arrows from './components/Arrows.jsx'



class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel">
        Others Nearby
        <Arrows direction={'left'}/>
        <ImageSlide url={'https://restaurantmediafec.s3.us-east-2.amazonaws.com/restaurant+images/best-italian-food-01.jpg'}/>
        <Arrows direction={'right'}/>
      </div>
    )
  }
}

ReactDOM.render(<Carousel />, document.getElementById('app'));