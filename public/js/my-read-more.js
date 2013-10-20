(function(){
  var readMore = {
    $section : $('section[role="main"]'),
    $button : $('<button class="readmore">Read More</button>'),

    initialize : function() {
      var sectionHeight = this.$section.height();
      this.insertButton();
      this.$section.height(400).addClass('readingAllShadow');
      console.log(sectionHeight);
      this.showHide(sectionHeight);
    },

    insertButton : function() {
      this.$button.insertAfter(this.$section);
    },

    showHide : function(sectionHeight) {
      var _this = this;
      this.$button.on('click', function(e) {
        e.preventDefault();
        if(_this.$section.height() === 400) {
          _this.$section.height(sectionHeight);
          _this.$section.removeClass('readingAllShadow');
          _this.$button.text('Read Less');
        }
        else {
          _this.$section.height(400);
          _this.$section.addClass('readingAllShadow');
          _this.$button.text('Read More');
        }

      });
    }
  };

  readMore.initialize();

})();