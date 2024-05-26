import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContainer } from './index.styles';
import Slider from 'react-slick';

/**
 * VenueCarousel component displays a carousel of media items.
 *
 * @component
 * @param {Object[]} media
 * @param {string} media[].url
 * @param {string} [media[].alt]
 * @returns {JSX.Element}
 */
export default function VenueCarousel({ media }) {
  const settings = {
    dots: true,
    infinite: media.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <a>
        <img src={media[i].url} alt={media[i].alt || `Thumbnail ${i}`} />
      </a>
    ),
    dotsClass: 'slick-dots custom-thumb',
  };

  if (media.length === 1) {
    return (
      <CarouselContainer>
        <div>
          <img src={media[0].url} alt={media[0].alt || 'Venue Image'} />
        </div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {media.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.alt || `Venue Image ${index}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

VenueCarousel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
