let h = document.getElementById("box1")
let t = document.getElementById("box2")
let fx = document.getElementById("box4")
let fy = document.getElementById("box5")
h.textContent = 0
var x = 0
var y = 0
let f = 0
let fz = 0
function add1h() {
    x++
    h.textContent = x
}

function add2h() {
    x += 2
    h.textContent = x
}

function add3h() {
    x += 3
    h.textContent = x
}

function add1g() {
    y++
    t.textContent = y
}

function add2g() {
    y += 2
    t.textContent = y
}

function add3g() {
    y += 3
    t.textContent = y
}

function newG() {
    h.textContent = 0
    x = 0
    y = 0
    f = 0
    fz = 0
    fy.textContent = 0
    fx.textContent = 0
    t.textContent = 0
}

function add1hf() {
    f++
    fx.textContent = f
}

function add1gf(){
    fz++
    fy.textContent = fz
}

function reset(){
    seconds_left = 25
}
var seconds_left = 24
var interval = setInterval(function() {
    document.getElementById('box6').innerHTML = --seconds_left
    if(seconds_left == 0){
        seconds_left = 25
    }
}, 1000);