// index.js
const ramenMenu = document.getElementById('ramen-menu');
ramenMenu.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        const ramenId = event.target.dataset.id;
        handleClick(ramenId);
    }
});
// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  return fetch()
  
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
