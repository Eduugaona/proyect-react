import Carousel from 'react-bootstrap/Carousel';
import Cartel1 from '../Utilities/Images/cartel1.jpg'
import Cartel2 from '../Utilities/Images/cartel2.jpg'
import Cartel3 from '../Utilities/Images/cartel3.jpg'
import Cartel4 from '../Utilities/Images/cartel16.jpg'
import Cartel5 from '../Utilities/Images/cartel5.jpg'
import Cartel6 from '../Utilities/Images/cartel6.jpg'
import './styled.css';




export const UncontrolledExample =() => {
  return (
    <Carousel className='carouselStyled'>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
          className='carousel-img'
          src= {Cartel1}
          alt="First slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
        className='carousel-img'
          src={Cartel2}
          alt="Second slide"
        />
        

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
        className='carousel-img'
          src={Cartel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
        className='carousel-img'
          src={Cartel4}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
        className='carousel-img'
          src={Cartel5}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='carouselImgContainer'>
        <img
        className='carousel-img'
          src={Cartel6}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

