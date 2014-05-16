$(document).ready(function(){
  $('#page-cover').backstretch(window.cover);
  $('.header-subtitle').each(function(){
    $(this).html(Faker.Lorem.words(3).join(' '));
  });
  $('.fake-title').each(function(){
    $(this).html(Faker.Lorem.words(2));
  });
  $('.fake-date').each(function(){
    $(this).html(Faker.Date.future());
  });
  $('.fake-content').each(function(){
    $(this).html(Faker.Lorem.paragraph());
  });
  $('.bxslider').bxSlider({
    mode: 'vertical',
    auto: true,
    minSlides: 1,
    responsive: true,
    touchEnabled: true,
    pager: false,
    controls: false,
    useCSS: false,
    pause: 2000
  });
});