// Your code goes here
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
})