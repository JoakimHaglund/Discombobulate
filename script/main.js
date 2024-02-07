//My hipp hipp array
const array = ['Hipp', 'Hipp'];
const assets = [
    'resourses/gif/1j6F.gif',
    'resourses/gif/3Ufn.gif',
    'resourses/gif/4AIC.gif',
    'resourses/gif/6os.gif',
    'resourses/gif/7VE.gif',
    'resourses/gif/8TkagzJHXLWmI.webp',
    'resourses/gif/19yb.gif',
    'resourses/gif/160SYG1QgkZ5QwKMsw.webp',
    'resourses/gif/giphy.gif',
    'resourses/gif/IXNp.gif',
    'resourses/gif/MxYQrB9jeGzza.webp',
    'resourses/gif/PYh.gif',
    'resourses/gif/rickAstlyTransparent.gif',
    'resourses/gif/zhbrTTpmSCYog.webp',
    'resourses/img/noggin.png',
    'resourses/img/trollface.png'
];
//Apparently MDN likes to do the work for me???
function getRand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); //Skapar en färgkod
    randomColor = randomColor.toUpperCase();																 //Ändrar färgkoden til versaler
    return randomColor;																											 //Retunerar färgkoden
}
function createRandomBox() {
    let div = document.createElement('div');
    div.style.backgroundColor = generateRandomColor();
    div.style.backgroundImage = `url("${assets[getRand(0, assets.length - 1)]}")`;
    div.style.backgroundSize = 'cover';

    div.style.width = getRand(250, 450) + 'px';
    div.style.aspectRatio = '4/3';
    div.style.scale = getRand(100, 200) + '%';
    div.style.rotate = getRand(0, 360) + 'deg';
    div.style.borderRadius = getRand(0, 50) + '% ' +getRand(0, 50) + '% ' +getRand(0, 50) + '% '+getRand(0, 50) + '%';
    div.style.position = 'relative';
    div.style.left = getRand(-20, 20) + '%';
    div.className = 'ohShit';
    return div;
};
function randomBackground() {
    let body = document.querySelector('body');
    body.style.backgroundColor = generateRandomColor();
    body.style.backgroundSize = '100vh';
};
let div = document.querySelector('#image-container');
for (let i = 0; i < 150; i++) {

    div.appendChild(createRandomBox());
};
randomBackground();
setInterval(randomBackground, 500);
var audio = new Audio('resourses/Trololo.opus');
audio.play();

setInterval(() => {
    div.appendChild(createRandomBox());
}, 1000);

let lastScrollPos = 0;
function headerRollNScale(){
    document.querySelector('header').style.rotate = window.scrollY/3 + 'deg';
    document.querySelector('header').style.top = window.scrollY/30 + 'px';
    document.querySelector('header').style.scale = (window.scrollY/100)*(-1)+ 100 + '%';
    if(document.querySelector('header').style.scale <= -0.0){
        document.querySelector('header').style.scale = 0;
    }
    lastScrollPos = window.scrollY;
}
function moveRandomElement(){
    let elements = document.querySelectorAll('.ohShit');
    let oneFift = Math.ceil((elements.length -1) / 10);
    for (let i = 0; i < oneFift;i++){
        let element = elements[getRand(0,elements.length -1)]
        let maybe = getRand(0,100)
        if(maybe < 25){
            element.style.rotate = rot + 'deg';
        }
        else if (maybe > 24 && maybe < 50){
            element.style.left = getRand(-40, 40) + '%';
            if (maybe > 37){
                element.style.top = getRand(-40, 40) + '%';
            }
        }
        else if (maybe > 49 && maybe < 75){
            element.style.scale = getRand(100, 200) + '%';

        }
        rot += 10;
    }
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}
document.addEventListener("scroll", (event) => {
    headerRollNScale();
    moveRandomElement();  
});
let rot = 30
pageScroll()

