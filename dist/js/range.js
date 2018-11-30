var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');

  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html('Pris per natt: ' + value);
    });

    range.on('input', function(){
      $(this).next(value).html('Pris per natt: ' + this.value);
    });
  });
};
