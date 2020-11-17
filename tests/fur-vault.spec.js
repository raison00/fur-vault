import $ from 'jquery';

import DefaultClass from '../src/fur-vault';


describe('fur-vault', () => {
  // let data;

  beforeEach(() => {
    loadFixtures('main.html'); // fixtures/html/main.html becomes your DOM
    // data = getJSONFixture('fur-vault.json');
    // let event = document.createEvent('Event');
    const event = document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true); document.dispatchEvent(event);
    const event2 = document.createEvent('Event');
    event2.initEvent('scroll', true, true); document.dispatchEvent(event2);
  });

  it('should have tests', () => {
    // expect(data).toEqual({ foo: 'bar', abc: 'xyz' });

    $('#stateSelect')
      .find('option[value="newyork"]')
      .prop('selected', true)
      .trigger('change');
    expect($('.fv-ny').hasClass('fv-store-container')).toBe(false);

    $('#stateSelectMobile')
      .find('option[value="newyork"]')
      .prop('selected', true)
      .trigger('change');
    expect($('.fv-ny').hasClass('fv-store-container')).toBe(false);

    $('.accordion').trigger('click');
    expect($('.accordion').hasClass('active')).toBe(true);

    $('.store-locator').click();
    expect($('.fv-store-locator').css('display', 'block')).toExist();
    expect($('.fv-pop-links').css('display', 'none')).toExist();
    expect($('.fv-shop-now').css('display', 'none')).toExist();

    $('.faq').trigger('click');
    expect($('.fv-faq').css('display', 'block')).toExist();
    expect($('.fv-pop-links').css('display', 'none')).toExist();
    expect($('.fv-shop-now').css('display', 'none')).toExist();

    $('.restyling').trigger('click');
    expect($('.fv-restyling').css('display', 'block')).toExist();
    expect($('.fv-pop-links').css('display', 'none')).toExist();
    expect($('.fv-shop-now').css('display', 'none')).toExist();

    $('.fv-close-btn').trigger('click');
    expect($('.fv-overlay').css('display', 'none')).toExist();
    expect($('.fv-pop-links').css('display', 'block')).toExist();
    expect($('.fv-shop-now').css('display', 'block')).toExist();
    expect(DefaultClass.isScrolledIntoView($('.ceg-header-placement'))).toBe(true);
    expect(DefaultClass.scrolledOutOfView($('.ceg-header-placement'))).toBe(false);
    // window.scroll(0,document.body.scrollHeight);
    // var scrollBottom = $(window).scrollTop() + $(window).height();
    // window.scrollTo(0,scrollBottom);
    const event2 = document.createEvent('Event');
    event2.initEvent('scroll', true, true); document.dispatchEvent(event2);
    $(window).scrollTop($('.ceg-header-placement').offset().top + 300);
    // event2.initEvent('scroll', true, true); document.dispatchEvent(event2);
  });

  // const stickyNav = spyOn('')
});
