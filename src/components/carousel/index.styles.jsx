import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;

  .slick-slide {
    display: flex;
    justify-content: left;
  }

  .slick-slide img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 300px;
    max-width: 500px;
    object-fit: cover;
  }

  .slick-dots {
    display: flex !important;
    justify-content: left;
  
  }

  .slick-dots li {
    width: auto;
  }

  .slick-dots li img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    opacity: 0.5;
    cursor: pointer;
  }

  .slick-dots li.slick-active img {
    opacity: 1;
    border: 2px solid #fff;
  }
`;
