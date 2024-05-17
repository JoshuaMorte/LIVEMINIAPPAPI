document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
    const imageUrl = document.getElementById('image-url');
    const memeContainer = document.getElementById('meme-container');
    const memeImg = document.getElementById('meme-img');

    generateBtn.addEventListener('click', function() {
        const topTextValue = topText.value;
        const bottomTextValue = bottomText.value;
        const imageUrlValue = imageUrl.value;

        if (topTextValue && bottomTextValue && imageUrlValue) {
            const memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(topTextValue)}/${encodeURIComponent(bottomTextValue)}.png?background=${encodeURIComponent(imageUrlValue)}`;

            memeImg.src = memeUrl;
            memeImg.style.display = 'block';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
