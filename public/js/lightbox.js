(function() {

  var LpLightbox = function(section) {
    this.$pictureSection = $(section);
    this.$overlay = $('<div class="overlay"></div>');
    this.$fullImg = $('<img class="fullSize" />');
    this.initialize();
  };

  LpLightbox.prototype.initialize = function() {
      this.doTheLightbox();
      this.getRidOfIt();
    };

  LpLightbox.prototype.doTheLightbox = function() {
      var $images = this.$pictureSection.find('img'),
          _this = this;
      $images.on('click', function(e) {
        var imgSrc = $(this).attr('src');
        e.preventDefault();
        _this.$overlay.appendTo($('body')).fadeIn();
        _this.$fullImg.attr('src', imgSrc).appendTo($('body')).fadeIn();
      });
    };

  LpLightbox.prototype.getRidOfIt = function() {
      var _this = this;
      $('body').on('click', '.overlay, .fullSize', function() {
        $('.overlay, .fullSize').fadeOut(function(){
          $('.overlay, .fullSize').remove();
        });
      });
    };

  var lpLight = new LpLightbox('section.pictures');

})();