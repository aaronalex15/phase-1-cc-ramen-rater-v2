

/* See all ramen images in the div with the id of ramen-menu. When the page loads, fire 
a function called displayRamens that requests the data from the server to get all the 
ramen objects. Then, display the image for each of the ramen using an img tag inside 
the #ramen-menu div.*/

const url = 'http://localhost:3000/ramens';
const ramenDetailName = document.querySelector('.name');
const ramenDetailRestaurant = document.querySelector('.restaurant');
const ramenDetailedImage = document.querySelector('.detail-image')
const ratingDisplay = document.querySelector('#rating-display');
const commentDisplay = document.querySelector('#comment-display');
const ramenMenu = document.querySelector('#ramen-menu');
const ramenForm = document.querySelector('#new-ramen')
const totalReviews = document.querySelector('#ramen-menu')


function displayRamens() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener('click', handleClick);
        ramenMenu.appendChild(img);
      });
    });
}


/* Click on an image from the #ramen-menu div and fire a callback called handleClick 
to see all the info about that ramen displayed inside the #ramen-detail div (where 
it says insert comment here and insert rating here). */


function handleClick(event) {
  const ramenId = event.target.dataset.id;
  fetch(`${url}/${ramenId}`)
    .then(response => response.json())
    .then(data => {
      ramenDetailName.textContent = data.name;
      ramenDetailRestaurant.textContent = data.restaurant;
      ratingDisplay.textContent = data.rating;
      commentDisplay.textContent = data.comment;
      ramenDetailedImage.src = data.image;
    });
}
//displayRamens();

/* Attach a submit even listener to the new-ramen form using a 
function called addSubmitListener. After the submission, create a new 
ramen and add it to the#ramen-menu div. The new ramen does not need to persist; 
in other words, if you refresh the page, it's okay that the new ramen is no longer on the page. */


function showRamen(ramenObj){

}

function addSubmitListener(e) {
console.log("🚀 ~ addSubmitListener ~ e:", e)
e.preventDefault()
    const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target.newComment.value,
    id: totalReviews + 1,

}
showRamen(newRamen)
}
ramenForm.addEventListener('submit', addSubmitListener)
displayRamens()








