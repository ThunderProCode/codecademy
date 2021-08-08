console.log('\nWelcome to Pick-up Lines Generator\n');

const pickUpLines = {

    normal: ["I just got tested positive for Co.....nstantly thinking about you.",
        "Do you have a bandaid? Cuz I scraped my knees falling for you.",
        "Hey you know the real reason why I won't play hide and seek with you? Because Ill never find someone like you.",
        "A whole deck of cards and somehow I pulled myself a queen.","I'm studying important dates in history.... wanna make one?",
        "Is your name lightning, because I want, you to be McQueen.","Hey you're pretty and I'm cute. Together we'd be pretty cute.",
        "If numbers start with 123 and letters start with abc and music starts with do re mi, can love start with u and me.",
        "I wonder if you look both ways before you cross my mind",
        "I want to be a super hero. What should I be? Spiderman, Superman, Batman, or YOUR MAN.😏",
        "Do u have a notebook 📓 and a pencil ✏️because I can erase your past and write our future 😁",
        "Im no photographer but i can picture us together",
        "Is your mom name practice because practice makes perfect😏",
        "Im not a cashier, but you have a couple things I wanna check out.",
        "Can I tie your shoes, cause i dont want you falling for anyone else",
        "If you were a transformer, you would be 'Optimus Fine'"],

    innocent: ["Hey, my name’s Microsoft. Can I crash at your place tonight?",
        "Are you a parking ticket? Because you’ve got FINE written all over you",
        "Well, here I am. What are your other two wishes?",
        "If you were a chicken, you’d be impeccable"],

    hot:["I cant turn water into wine, but I can turn u into 'mine'",
        "I'm kinda upset google didn't recommend you as a place to eat out.",
        "We're like Nike and McDonalds, Im doing it and you're loving it.",
        "If your left leg was Christmas and yout right leg was New Year, can I visit you between holidays?",
        "I'm a rollercoaster the faster I go the louder you scream 😏"]

}

const randomCategory = () => {
    const randCat = Math.floor(Math.random()*2);
    let category = '';
    switch(randCat){
        case 0: category = 'normal';
            break;
        case 1: category = 'innocent';
            break;
        case 2: category = 'hot';
    }
    return category;
}


const randomLine = () => {
    const cat = randomCategory();
    const rnd = Math.floor(Math.random()*pickUpLines[cat].length);
    return `Hey I got a ${cat} pick up line for you: \n${pickUpLines[cat][rnd]}\n`;
}

console.log(randomLine());

