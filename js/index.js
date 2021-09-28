// Your code goes here
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
})

const footerContent = document.querySelector('footer p');
footerContent.addEventListener('click', function (event) {
    console.log('click event')
    event.stopPropagation();

})
const bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', function (event) {
    console.log('click')
})