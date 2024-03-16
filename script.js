
let s = 0;
let j = 0;
let second = 10;
let bubblecreated = 0;
let timeid;
let isstop = false;
let hitnum;
let is=0;

//start button
document.querySelector(".btn").innerHTML = `<div id="button" class="flex"><svg stroke-width="1.2" style="width: 25 ; padding-right:3;"
stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" class="w-5 h-5"
viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path
    d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
</path>
</svg>Let's Play</div>`;
// document.querySelector(".hint").style.marginTop = "100%";

document.querySelector("#button").addEventListener("click", function (e1) {

    // document.querySelector(".hint").style.marginTop = "0";
    document.querySelector(".hint").innerHTML = `<div id="bubble"> </div>`;
    is=1;
    start();

});
function score() {
    s += 10;
    document.querySelector("#score").innerHTML = s;
}
// timing
document.querySelector("#psbtn").addEventListener("click", function () {

    if (isstop) {
        Play()
    }
    else {
        Stop()
    }
});
function Play() {
    document.querySelector(".stop").innerHTML = `<div class="stop flex"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-pause-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
  </svg></div>`;
    timeid = setInterval(update, 1000);
    isstop = false;
}
function Stop() {
    clearInterval(timeid);
    isstop = true;
    document.querySelector(".stop").innerHTML = `<div class="stop flex"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-play" viewBox="0 0 16 16">
        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
      </svg></div>`;
}
function update() {
    second = second - 1;
    if (second >= 0) {
        document.querySelector("#time").innerHTML = second
    }
    else {
        clearInterval(timeid);
        // document.querySelector(".hint").style.marginTop = "100%";
        j = 0; is=0;
        document.querySelector(".btn").innerHTML = `<h5>You Score is: ${s}</h5>`
        s = 0;
        second = 10;
        document.querySelector(".btn").innerHTML += `<div id="button" class="flex"><svg stroke-width="1.2" style="width: 25 ; padding-right:3;"
        stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" class="w-5 h-5"
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
        </path>
    </svg>Play again !</div>`;
        document.querySelector(".hint").innerHTML = '';
        document.querySelector("#psbtn").innerHTML = '';

        document.querySelector("#button").addEventListener("click", function (e1) {
            // document.querySelector(".hint").style.marginTop = "0";
            document.querySelector(".hint").innerHTML += `<div id="bubble"> </div>`;
            document.querySelector("#time").innerHTML = '45';
            document.querySelector("#score").innerHTML = s;
            is=1;
            start();
        });

    }
}


function start() {
    hitfun();
}
function hitfun() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hitnum;
    bubble();
}
function bubble() {
    document.querySelector("#bubble").innerHTML = '';
    document.querySelector(".btn").innerHTML = '';

    for (let i = 0; i < 100; i++) {
        let rn = Math.floor(Math.random() * 10);
        document.querySelector("#bubble").innerHTML += `<div class="box flex">${rn}</div>`
    }
    bubblecreated = 1;
}

document.querySelector(".hint").addEventListener("click", function (e2) {

    // console.log(is)
    if (is==1) {
        // console.log(is)
        let num;
            document.querySelector(".btn").innerHTML = '';
            num = e2.target.textContent;
            if (j === 0&&Number(num)<10) {

                Play();
                j = 1;
            }
            if (!isNaN(Number(num)) && Number(num) < 10) {
                
                if (Number(num) === hitnum) {
                    score();
                    hitfun();
                }
                
                else if (Number(num) !== hitnum ) {
                    // console.log(Number(num), hitnum);
                    setTimeout(() => {
                        e2.target.style.backgroundColor = "rgb(160, 252, 255)";

                    }, 1000);
                    e2.target.style.backgroundColor = "red";
                }
            }
        
    }
});

