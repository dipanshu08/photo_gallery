
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  buttons: ['close'],
  backFocus: false,
});

const searchBox = document.getElementById('search');
const images = document.getElementsByClassName('gallery')[0].children;

searchBox.addEventListener('keyup', () => {
  let query = searchBox.value.toLowerCase();

  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let imgAttribute = img.getAttribute('data-caption').toLowerCase();
    if (imgAttribute.indexOf(query) > -1) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  }
});
