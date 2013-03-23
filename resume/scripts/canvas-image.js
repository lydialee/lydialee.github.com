
var CanvasImage = function(element, image) {
	this.image = image;
	this.element = element;
	this.element.width = this.image.width;
	this.element.height = this.image.height;
	this.context = this.element.getContext("2d");
	this.context.drawImage(this.image, 0, 0);
};
CanvasImage.prototype = {
	blur: function (strength) {
		this.context.globalAlpha = 0.5; 
				for (var y = -strength; y <= strength; y += 2) {
			for (var x = -strength; x <= strength; x += 2) {
				this.context.drawImage(this.element, x, y);
				if (x>=0 && y>=0) {
					this.context.drawImage(this.element, -(x-1), -(y-1));
				}
			}
		}
		this.context.globalAlpha = 1.0;
	}
};

window.onload = function() {
	var url = 'images/bg.jpg',
		image,
		canvasImage;

	image = new Image();
	image.onload = function () {
		canvasImage = new CanvasImage(document.getElementById('blur'), this);
		canvasImage.blur(4);		
	};
	image.src = url;
};