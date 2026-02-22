import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import './home.css';
import Horizontal1 from '../../assets/home-photos/horizontal1.jpg';
import Horizontal2 from '../../assets/home-photos/horizontal2.jpg';
import Vertical1 from '../../assets/home-photos/vertical1.jpg';
import Vertical2 from '../../assets/home-photos/vertical2.jpg';
import Vertical3 from '../../assets/home-photos/vertical3.jpeg';
import Vertical4 from '../../assets/home-photos/vertical4.jpeg';
import Vertical5 from '../../assets/home-photos/vertical5.jpeg';
import Vertical6 from '../../assets/home-photos/vertical6.jpeg';
import Vertical7 from '../../assets/home-photos/vertical7.jpeg';
import HomeSlideshow from '../../components/HomeSlideshow';
import HomeCountdown from '../../components/HomeCountdown';

const images = [
  {
    src: Horizontal1,
    alt: "Slide 1",
    className: "slide1"
  },
  {
    src: Horizontal2,
    alt: "Slide 2",
    className: "slide2"
  },
  {
    src: Vertical1,
    alt: "Slide 3",
    className: "slide3"
  },
  {
    src: Vertical2,
    alt: "Slide 4",
    className: "slide4"
  },
  {
    src: Vertical3,
    alt: "Slide 5",
    className: "slide5"
  },
  {
    src: Vertical4,
    alt: "Slide 6",
    className: "slide6"
  },
  {
    src: Vertical5,
    alt: "Slide 7",
    className: "slide7"
  },
  {
    src: Vertical6,
    alt: "Slide 8",
    className: "slide8"
  },
  {
    src: Vertical7,
    alt: "Slide 9",
    className: "slide9"
  }
]

const Home = () => {
  const [homeTxtFadeIn, setHomeTxtFadeIn] = useState(false);
  const [countdownFadeIn, setCountdownFadeIn] = useState(false);

  const handleSlideshowEntered = () => {
    setHomeTxtFadeIn(true);
  }

  const handleHomeTextEntered = () => {
    setCountdownFadeIn(true);
  }

  return (
    <div className="home">
      <div className="dark-filter" />
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade" onEntered={handleSlideshowEntered}>
        <div className="home-slideshow-wrapper">
          <HomeSlideshow images={images}/>
        </div>
      </CSSTransition>
      <div className="home-txt">
        <CSSTransition in={homeTxtFadeIn} appear={true} timeout={2000} classNames="fade" onEntered={handleHomeTextEntered}>
          <div className="home-text-wrapper">
            <div className="home-txt-title">Bao Mai<br/>&<br/>Trinh Nguyen</div>
            <div className="home-txt-date">07 . 25 . 2026</div>
          </div>
        </CSSTransition>
        <CSSTransition in={countdownFadeIn} appear={true} timeout={3000} classNames="fade">
          <div className="countdown-wrapper">
            <HomeCountdown targetDate={new Date('July 25, 2026 00:00:00')} />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Home;
