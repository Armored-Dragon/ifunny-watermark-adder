document.getElementById('imageInput').addEventListener('change', function (event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const img = new Image();
			img.onload = function () {
				const canvas = document.getElementById('imageCanvas');
				const ctx = canvas.getContext('2d');

				canvas.width = img.width;
				canvas.height = img.height + 20;

				ctx.drawImage(img, 0, 0);

				ctx.fillStyle = 'black';
				ctx.fillRect(0, img.height, img.width, 20);

				ctx.fillStyle = '#FFC449';
				ctx.font = 'bold 28px Arial';
				ctx.textAlign = 'right';

				const text = 'ifunny.co';
				const textWidth = ctx.measureText(text).width;
				const xPosition = Math.max(img.width - textWidth - 10, 0);
				const yPosition = img.height + 15;

				ctx.save();

				ctx.translate(xPosition + textWidth, yPosition);
				ctx.rotate(-5 * Math.PI / 180);

				ctx.fillText(text, 0, 0);

				ctx.restore();
			}
			img.src = e.target.result;
		}
		reader.readAsDataURL(file);
	}
});
