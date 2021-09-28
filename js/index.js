// Your code goes here
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
});

const footerContent = document.querySelector('footer');
footerContent.addEventListener('click', function (event) {
    console.log('footer click event');
    event.stopPropagation();
});
footerContent.addEventListener('mousedown', function (event) {
    console.log('footer mousedown event');
    event.target.style.backgroundColor = 'fuchsia';
});
footerContent.addEventListener('mouseup', function (event) {
    console.log('footer mouseup event');
    event.target.style.backgroundColor = 'lightblue';
});

const bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', function (event) {
    console.log('body click event');
    event.target.style.color = 'red';
});
bodyElement.addEventListener('keydown', function (event) {
    console.log('keydown event');
    event.target.style.backgroundColor = 'blue'
});
bodyElement.addEventListener('keyup', function (event) {
    console.log('keyup event');
    event.target.style.backgroundColor = 'lightgrey';
});

const headerElement = document.querySelector('header');
headerElement.addEventListener('mouseenter', function (event) {
    console.log('header mouseenter event');
    event.target.style.backgroundColor = 'yellow';
});
headerElement.addEventListener('mouseleave', function (event) {
    console.log('header mouseleave event');
    event.target.style.backgroundColor = 'lightblue';
});
headerElement.addEventListener('dblclick', function (event) {
    console.log('header dbclick event');
    event.target.style.color = 'fuchsia';
})

window.addEventListener('load', (event) => alert('Your page has loaded!'));

const imageElements = document.querySelectorAll('img');
imageElements.forEach(image => image.addEventListener('dragstart', () => alert("Dont't touch that!")))