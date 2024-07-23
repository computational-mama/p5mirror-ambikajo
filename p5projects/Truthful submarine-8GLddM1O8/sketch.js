

			// 'use strict'
			var canvas;
			var pixelator;
			var myPalette;
			var myFile;

			function preload() {
				myFile = loadImage("https://upload.wikimedia.org/wikipedia/commons/7/71/Ardabil_Carpet.jpg");
			}

			function setup() {
				canvas = createCanvas(1024, 512, WEBGL);
				// canvas.parent('sketch');
				// canvas.hide();

				myPalette = [
					color('#5c0423'),
					color('#02205e'),
					color('#453a14'),
					color('#2d260c'),
					color('#451a0b'),
					color('#0b3b8d'),
					color('#171717'),
					color('#1e1e20'),
					color('#212025'),
					color('#2664c7'),
					color('#3b3a38'),
					color('#91cec9'),
					color('#9e9171'),
					color('#9fd4ca'),
					color('#b89a20'),
					color('#c70b23'),
					color('#cecdc9'),
					color('#d0b7ba'),
					color('#d6e8fc'),
					color('#d8d5d0'),
					color('#e86d1f'),
					color('#e8eeea'),
					color('#ec4942'),
					color('#f5e865'),
					color('#f697c3'),
					color('#fa79b9'),
					color('#fbe343'),
					color('#fc6320'),
					color('#fecb3c')
				];

				// pixelator = new Pixelator(window, canvas);
				pixelator = new Pixelator(window, canvas, { type: "gradients", palette: myPalette });
				

			}

			function draw() {
				lights();
				background(100);
				rotateX(-frameCount*0.011);
				rotateY(frameCount*0.01);
				strokeWeight(10);
				box(240);

				pixelator.update();
			}


		