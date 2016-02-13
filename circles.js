function Circle() {
  this.element = $('<div class="circle"></div>');
  this.diameter = 30 + Math.ceil((Math.random() * 50));
  this.position = {
    x: (Math.random() * (750 - this.diameter)),
    y: (Math.random() * (750 - this.diameter)),
  };
  this.speed = 1000 + (Math.random() * 1500);

  this.element.css({
    'width': this.diameter + 'px',
    'height': this.diameter + 'px',
    'top': this.position.y + 'px',
    'left': this.position.x + 'px'
  });
}

Circle.prototype.newPosition = function() {
  return Math.random() * (750 - this.diameter);
}

Circle.prototype.move = function() {
  var self = this;

  this.element.velocity({
      translateY: this.newPosition(),
      translateX: this.newPosition()
    }, {
      duration: this.speed,
      complete: function() {
        self.move();
      }
    });
}

$(document).on('ready', function() {
  var numberOfCircles = 8;

  for (var i = 0; i < numberOfCircles; i++) {
    var newCircle = new Circle();
    $('#game').append( newCircle.element );

    newCircle.move();
  }
});
