const reasons = [
    {
        title: "ТАК, во-первых, за твой член хозяин",
        text: "Спасибо что даешь возможность хотя бы ВИДЕТЬ это божественное сокровище."
    },

    {
        title: "За то, какой ты со мной",
        text: "Серьезный мужчина, но с такой нежностью обращаешься со мной, я очень стесняюсь и таю."
    },

    {
        title: "За наши приколы",
        text: "Потому что иногда наши приколы настолько ебанутые, что я вахуе с того что нас свела судьба."
    },

    {
        title: "За твои объятия",
        text: "Потому что в моменты когда ты обнимаешь меня, замирает время и я чувствую себя в безопасности."
    },

    {
        title: "За твою заботу",
        text: "Даже маленькие вещи, которые ты делаешь для меня, остаются у меня в голове намного дольше, чем ты думаешь."
    },

    {
        title: "За твою улыбку",
        text: "Потому что иногда мне достаточно просто увидеть твою улыбку, чтобы мой день стал лучше."
    },

    {
        title: "За наши воспоминания",
        text: "У нас уже есть столько моментов, которые я никогда не хочу забывать."
    },

    {
        title: "За то, что ты мой человек",
        text: "С тобой у меня появилось это странное чувство: вот этот человек — мой."
    },

    {
        title: "За то, что я скучаю по тебе",
        text: "Даже расстояние иногда напоминает мне, насколько сильно ты мне нужен."
    },

    {
        title: "И просто за тебя",
        text: "Потому что даже если я попробую перечислить тысячу причин, этого всё равно будет мало."
    }
];


const startScreen = document.querySelector("#startScreen");
const reasonScreen = document.querySelector("#reasonScreen");
const finalScreen = document.querySelector("#finalScreen");
const loveScreen = document.querySelector("#loveScreen");

const startButton = document.querySelector("#startButton");
const nextButton = document.querySelector("#nextButton");
const finalButton = document.querySelector("#finalButton");

const reasonTitle = document.querySelector("#reasonTitle");
const reasonText = document.querySelector("#reasonText");
const counter = document.querySelector("#counter");


let currentReason = 0;


function showScreen(screen) {

    startScreen.classList.remove("active");
    reasonScreen.classList.remove("active");
    finalScreen.classList.remove("active");
    loveScreen.classList.remove("active");

    screen.classList.add("active");
}


function showReason() {

    const reason = reasons[currentReason];

    reasonTitle.textContent = reason.title;
    reasonText.textContent = reason.text;

    counter.textContent =
        `Причина ${currentReason + 1} / ${reasons.length}`;
}


startButton.addEventListener("click", function () {

    showScreen(reasonScreen);

    showReason();

});


nextButton.addEventListener("click", function () {

    currentReason++;

    if (currentReason < reasons.length) {

        showReason();

    } else {

        showScreen(finalScreen);

    }

});


finalButton.addEventListener("click", function () {

    showScreen(loveScreen);

});