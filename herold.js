function getRandomAdImage() {
            const numberOfAds = 40;
            const randomIndex = Math.floor(Math.random() * numberOfAds) + 1;
            return `ads/ad${randomIndex}.gif`;
}

window.addEventListener('load', function () {
            const ad = document.getElementById('ad');
            const ad2 = document.getElementById('ad2');
            const topad = document.getElementById('topad');
            ad.src = getRandomAdImage();
            ad2.src = getRandomAdImage();
            topad.src = getRandomAdImage();
});
