let s = 0;
let hit;
let j = 0;
document.querySelector('#bubble').innerHTML = `<div id="button" class="flex"><svg stroke-width="1.2" style="width: 25 ; padding-right:3;" stroke-linejoin="round" stroke-linecap="round"
stroke="currentColor" fill="none" class="w-5 h-5" viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
</path>
</svg>Play again !</div>`;
function Strat() {
    hitfun();
}

function hitfun() {
    let rn = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerHTML = rn;
    hit = rn;
    bubble();

}

function bubble() {
    document.querySelector('.btn').innerHTML = '';
    document.querySelector('#bubble').innerHTML = '';
    for (let i = 0; i < 143; i++) {
        let rn = Math.floor(Math.random() * 10);
        document.querySelector('#bubble').innerHTML += `<div class="box flex">${rn}</div>`
    }
}

function time() {
    let t = 45;
    let timeint = setInterval(() => {
        if (t > 0) {
            t = t - 1;
            document.querySelector('#time').innerHTML = t;

        }
        else {
            clearInterval(timeint);
            document.querySelector('#bubble').innerHTML = '';
            document.querySelector('.btn').innerHTML = `<h5>You Score is: ${s}</h5> `;
            document.querySelector('.btn').innerHTML += ` <div id="button" class="flex"><svg stroke-width="1.2" style="width: 25 ; padding-right:3;" stroke-linejoin="round" stroke-linecap="round"
            stroke="currentColor" fill="none" class="w-5 h-5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
            </path>
            </svg>Play again !</div>`
            s = 0; j = 0;
        }
    }, 1000);
}


function score() {
    s += 10;
    document.querySelector('#score').innerHTML = s;
}


document.querySelector("#btm").addEventListener("click", function (v) {

    let find = v.target.textContent;
    
    let textCut = v.target;
    let buttonText = textCut.textContent.trim(); 
    // console.log(buttonText);

    if (buttonText === "Play again !" || buttonText === "Play again !") {
        document.querySelector('#score').innerHTML = s;
        document.querySelector('#bubble').innerHTML = '';
        Strat();
    }
    if (Number(find) === hit) {
        score();
        hitfun();
    }
    if (!isNaN(find))
        if (j === 0) {
            time();
            j = 1;
        }


});
// Strat();