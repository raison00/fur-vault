
/**
   * Entry point for running the application.
   * Must export an object with a start() method.
   *
   * Since this is a feature, the entry point is only used for running it in isolation.
   * When consumed by a page, the entry point will be defined by the consumer.
   */
import $ from 'jquery';
import 'slick-carousel';
// import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import '@core/vendor/radio.shim'; // shim app.channel
// import Example from './src/fur-vault';
import './src/fur-vault';
import './src/scss/fur-vault.scss';

const PageApp = new Marionette.Application();

PageApp.getMeta = () => null;

PageApp.on('start', () => {

});

export default PageApp;


$(document).ready(() => {
  $('.fv-restyling-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    infinite: false,
    speed: 300,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          autoplay: false,
          autoplaySpeed: 0,
          arrows: false,
          dots: true,
          infinite: true,
          swipe: true,
          speed: 300,
        },
      },
    ],
  });
});

