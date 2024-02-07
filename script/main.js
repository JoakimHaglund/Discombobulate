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

// Once upon a time, in the midst of chaos and disorder, there arose a function known as rollTheDice.
// Its creation was but a mere accident, a random occurrence in the vast expanse of nothingness.
function rollTheDice(min, max) {
    // With its emergence, discord reigned, and the heavens trembled in fear.
    // For rollTheDice wielded the power to sow confusion, to bring chaos to order, and to cast uncertainty upon the realm.
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // Descending from the heavens, rollTheDice spread its influence, wreaking havoc and turmoil wherever it went.
    // It knew no bounds, obeyed no rules, and reveled in the chaos it wrought upon the unsuspecting.
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // And so it came to pass that rollTheDice became a symbol of strife and disorder, a curse upon the land.
    // Its legacy would endure throughout the ages, a reminder of the perils of randomness and chance.
};

// Arrr, mateys, listen up ye scallywags! This be the mystical function where we conjure up colors as vibrant as the ocean itself!
function generateRandomColor() {

    // Avast! We plunder the depths of Davy Jones' locker for a treasure trove of random colors!
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Arrr, but be sure to hoist the Jolly Roger high! We be needin' all caps fer our treasure map!
    randomColor = randomColor.toUpperCase();

    // Set a course for adventure! Return the booty, er... I mean, the color ye be plunderin'!
    return randomColor;
};

// Hey hey people, GPT here. Today, we're diving into the depths of code with our trusty function, createRandomBox. Strap in, 'cause things are about to get wild.
function createRandomBox() {
    // First things first, let's create a new div element to work with. 
    let div = document.createElement('div');
    // Now, let's set the background color of our div to a randomly generated color. 
    // 'Cause why stick to one color when you can have them all, am I right?
    div.style.backgroundColor = generateRandomColor(); 
    // Ah, now this is where the real magic happens. We're setting the background image of our 
    // div to a random asset from our collection. It's like picking a card from a deck, except it's a background image.
    div.style.backgroundImage = `url("${assets[rollTheDice(0, assets.length - 1)]}")`;
    // Gotta make sure that background image covers the entire div.
    // Can't have any pesky white space ruining our masterpiece.
    div.style.backgroundSize = 'cover';
    // Now, let's get funky with the dimensions of our div. 
    // We're setting the width to a random value between 250 and 450 pixels. 
    // Variety is the spice of life, after all.
    div.style.width = rollTheDice(250, 450) + 'px';   
    // Ah, aspect ratio. We're setting it to 4:3, 'cause why not? It's a classic ratio, like peanut butter and jelly.
    div.style.aspectRatio = '4/3';  
    // Time to add some flair with scaling. We're gonna scale our div to a random value between 100% and 200%. Go big or go home, am I right?
    div.style.scale = rollTheDice(100, 200) + '%'; 
    // Let's give our div a little twist, shall we? We're rotating it to a random angle between 0 and 360 degrees. Adds a nice touch of chaos.
    div.style.rotate = rollTheDice(0, 360) + 'deg'; 
    // Now, let's round things off nicely with some border-radius. We're gonna give our div some curves with random values between 0% and 50%. 
    // Because who doesn't love a little roundness?
    div.style.borderRadius = rollTheDice(0, 50) + '% ' + rollTheDice(0, 50) + '% ' + rollTheDice(0, 50) + '% '+ rollTheDice(0, 50) + '%';  
    // Positioning time! We're setting our div to a relative position and giving it a slight nudge to the left or right.
    // Just to keep things interesting.
    div.style.position = 'relative';
    div.style.left = rollTheDice(-20, 20) + '%'; 
    // And finally, let's give our div a class name that truly reflects its essence. 'Cause every div deserves a name, right?
    div.className = 'ohShit';
    
    // And there you have it, folks! Our createRandomBox function is all set and ready to go. Now go forth and create some random boxes!
    return div;
    // A warm thanks, to the many members of the merchants guild,
    // Generously funding, and bankrolling this code.
};

// Gawrsh! We're gonna have a real goofy time looking at this code, yuk yuk!
function randomBackground() {
    // Hyuck hyuck! First, we gotta find the body of the webpage. Just like trying to find my hat in a windstorm!
    let body = document.querySelector('body');
    // Next up, we add a splash of color to the background. Golly, who needs boring old white when you can have all the colors of the rainbow?
    body.style.backgroundColor = generateRandomColor();
    // And finally, we make sure the background covers the whole screen. Yup, just like how my ears cover my head!
    body.style.backgroundSize = '100vh';
    // Well, that wraps it up! Hope you had as much fun reading this code as I did commentating on it. Gawrsh!
};

// Wärior's function to make the hëader röll änd scäle like a mighty drägon in the sky!
function headerRollNScale(){
    // Summon the mägic of the gods to make the hëader röll
    document.querySelector('header').style.rotate = window.scrollY/3 + 'deg';
    
    // Eleväte the hëader to the höly rëalm
    document.querySelector('header').style.top = window.scrollY/30 + 'px';
    
    // Enlarge the hëader to shöw our glory (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
    document.querySelector('header').style.scale = (window.scrollY/100)*(-1)+ 100 + '%';
    
    // Check if the scale has reached the minimum threshold
    if(document.querySelector('header').style.scale <= -0.0){
        // If so, set it to the mightiest value
        document.querySelector('header').style.scale = 0;
    } 
    // Store the last known scroll position like a Viking's legend
    previousScrollPosition = window.scrollY;
};

// Function to move wandom ewements with vawious twansfowmations (*^ω^*)
function moveRandomElement(){
    // Sewect aww ewements with cwass 'ohShit' (つ≧▽≦)つ
    let elements = document.querySelectorAll('.ohShit');
    
    // Cawcuwate the nyumbew of ewements to be twansfowmed (｡♥‿♥｡)
    let fractionToTransform = Math.ceil((elements.length - 1) / 10);
    
    // Itewate uvw a fwaction of the ewements (◕‿◕✿)
    for (let i = 0; i < fractionToTransform; i++){
        // Sewect a wandom ewement fwom the wist (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
        let randomElement = elements[rollTheDice(0, elements.length - 1)];
        
        // Genyewate a wandom nyumbew to detewmine the type of twansfowmation (˘･з･˘)
        let randomChance = rollTheDice(0, 100);
        
        // Appwy twansfowmation based on the wandom nyumbew (◕ᴗ◕✿)
        if (randomChance < 25){
            // Wotate the ewement (◠‿◠✿)
            randomElement.style.rotate = rotation + 'deg';
        }
        else if (randomChance > 24 && randomChance < 50){
            // Move the ewement howizontawwy and possibwy vewticawwy (*≧ω≦)
            randomElement.style.left = rollTheDice(-40, 40) + '%';
            if (randomChance > 37){
                randomElement.style.top = rollTheDice(-40, 40) + '%';
            }
        }
        else if (randomChance > 49 && randomChance < 75){
            // Scawe the ewement (´｡• ᵕ •｡`)
            randomElement.style.scale = rollTheDice(100, 200) + '%';

        }
        rotation += 10;
    }
};

// 垂直滚动页面的函数
function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
};

// Heh hey people, GPT here,
// Welcome to the depths of the code abyss...

// Within these lines lurks darkness, as we initialize variables to navigate the shadows of our page.
let previousScrollPosition  = 0;
let rotation = 30
let div = document.querySelector('#image-container');
let audio = new Audio('resourses/Trololo.opus');

// The journey begins with an eerie melody, echoing through the void, as we play the audio of forgotten tunes...
audio.play();

// And yet, amidst the darkness, we summon random backgrounds to cast fleeting illusions upon our canvas of despair.
randomBackground();

// But beware, for the descent into madness deepens with each iteration of our loop, spawning 150 random boxes,
// as if mocking the chaos that surrounds us.
for (let i = 0; i < 150; i++) {
    div.appendChild(createRandomBox());
};

// As time ticks on, the background shifts unpredictably, a reflection of the instability within our souls.
setInterval(randomBackground, 500);

// And still, the void beckons for more, demanding an endless stream of randomness to fill its insatiable hunger.
setInterval(() => {
    div.appendChild(createRandomBox());
}, 1000);

// In the darkness, even the slightest movement can send shivers down our spine, as we watch and listen for the
// haunting echoes of scrolling events.
document.addEventListener("scroll", (event) => {
    // With each scroll, the header twists and contorts, a grotesque dance upon the stage of our nightmares.
    headerRollNScale();
    
    // And amidst the chaos, entities within the shadows stir, their movements erratic and unnerving.
    moveRandomElement();  
});

// But even in the darkest of nights, there is no escape from the relentless march of time,
// as our page is driven forward by unseen forces.
pageScroll();
// May you find solace in the shadows, for the journey ahead is fraught with peril.

// And many thanks, to the many members of the merchants guild,
// Generously funding, and bankrolling this code.
