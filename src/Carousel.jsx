import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CustomCarousel = ({images}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
      
      
   return(
    <Carousel responsive={responsive} 
        customButtonGroup={<ButtonGroup /> }
        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
    >
        {images.map( c => <img key={c} src={c} />)}
    </Carousel>
   )
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <CarouselButtons
            onPrevious={() => previous()} 
            onNext={() => next()}
        />
    );
};

const CarouselButtons = ({onPrevious, onNext}) => {
    return(
        <div className="carousel-button-group"> 
            <button className= 'carousel_btn one' onClick={onPrevious} >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#0f75e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button className= 'carousel_btn two'  onClick={onNext} >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#0f75e2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#0f75e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

        </div>
    )
    
}

export default CustomCarousel