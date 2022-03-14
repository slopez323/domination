const list = document.querySelector('ul');
const item1 = list.querySelector('li'); // gets first li

function strikethrough() {
    item1.style.textDecoration = 'line-through';
};

strikethrough();

function setImageUrl(id, url) {
    id.src = url;
};

const image1 = document.querySelector('#image-1');
const image2 = document.querySelector('#image-2');
const image3 = document.querySelector('#image-3');

setImageUrl(image1, 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg');
setImageUrl(image2, 'https://i.redd.it/jeuusd992wd41.jpg');
setImageUrl(image3, 'https://icebreakerquestions.info/random-questions.jpg');

function removeFirstItem() {
    let first = list.querySelector('li');
    first.remove();
};

removeFirstItem();
removeFirstItem();

function setFontSize(size, id) {
    id.style.fontSize = size;
};

const lorem = document.querySelector('#heading');
setFontSize('30px',lorem);


function appendToUl(element){
    list.appendChild(element);
};

let newImage = document.createElement('img');
newImage.src = 'https://live.staticflickr.com/5086/5307173563_46d9eaf4cb.jpg';
appendToUl(newImage);

function resizeImage(img){
    img.style.height = '30px';
};

resizeImage(image2);

function makeInvisible(element){
    element.className ='invisible';
};

makeInvisible(image2);

function createNewLi(text){
    let item = document.createElement('li');
    item.innerText = text;
    return item;
};

let newItem = createNewLi('This is my new list item.');
appendToUl(newItem);

function createNewHeader(size, text){
    let headType = 'h'+size;
    let newHeader = document.createElement(headType);
    newHeader.innerText = text;
    return newHeader;
};

let newHeader = createNewHeader(2,'This is my new header.');
appendToUl(newHeader);