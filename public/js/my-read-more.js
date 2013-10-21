(function(){

  var ReadMore = function(section, readMoreHeight){
    this.$section = $(section);
    this.$button = $('<button class="readmore">Read More</button>');
    this.readMoreHeight = readMoreHeight;
    this.initialize();
  };

  ReadMore.prototype.initialize = function() {
    var sectionHeight = this.$section.height();
    this.insertButton();
    this.$section.height(this.readMoreHeight).addClass('readingAllShadow');
    this.showHide(sectionHeight);
  };

  ReadMore.prototype.insertButton = function() {
    this.$button.insertAfter(this.$section);
  };

  ReadMore.prototype.showHide = function(sectionHeight) {
    var _this = this;
    this.$button.on('click', function(e) {
      e.preventDefault();
      if(_this.$section.height() === this.readMoreHeight) {
        _this.$section.height(sectionHeight);
        _this.$section.removeClass('readingAllShadow');
        _this.$button.text('Read Less');
      }
      else {
        _this.$section.height(this.readMoreHeight);
        _this.$section.addClass('readingAllShadow');
        _this.$button.text('Read More');
      }
    });
  };

  var readMore = new ReadMore('section[role="main"]', 400);

})();