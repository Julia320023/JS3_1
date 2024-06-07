var N = parseInt(Math.random() * 10) + 2;
var reg = /^[a-f0-9]$/;

document.addEventListener("DOMContentLoaded", () => {
    let timerId = null;
    let timer2 = null;
    window.addEventListener('load', init);


    function init() {
        document.getElementById("colortouse").addEventListener("input", changing);
        document.getElementById("color").addEventListener("click", okayKlick);
    }

    document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowUp' && event.ctrlKey) {
            let blocks = document.getElementsByClassName('rectangle');

            for (let i = 0; i < blocks.length; i++) {
                blocks[i].style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ")";
            }
        }
    });

    for (let i = 0; i < N; i++) {
        let child1 = document.createElement("p");
        child1.setAttribute("class", "rectangle");
        child1.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ")";
        child1.style.top = parseInt(Math.random() * 400) + "px";
        child1.style.left = parseInt(Math.random() * 550) + "px";

        document.getElementById("rectanglearea").appendChild(child1);
    }

    let blocks = document.getElementsByClassName('rectangle');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseover", mouseIn);
        blocks[i].addEventListener("mouseout", mouseOut);
        blocks[i].addEventListener("dblclick", doubleKlick);
    }


    function changing() {
        let str = document.getElementById('colortouse').value;
        let ch = str[str.length - 1];
        if (!reg.test(ch)) {
            str = str.replace(ch, "");
            document.getElementById('colortouse').value = str;
        }

        if (str.length < 6) {
            document.getElementById('color').setAttribute('disabled', '');
        } else {
            document.getElementById('color').removeAttribute('disabled');
        }
    }

    function okayKlick() {
        let but = document.getElementById('color');
        let blocks = document.getElementsByClassName('rectangle');
        let color = document.getElementById('colortouse').value;

        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = '#' + color;
        }
    }

    function mouseIn() {
        let termColor = "rgb(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ")";
        this.style.backgroundColor = termColor;
        block.style.color = termColor;
    }

    function mouseOut() {
        block.style.color = 'black';
    }

    function doubleKlick() {
        this.setAttribute('class', 'rectangle flash');
    }

    function flashing() {
        blocks = document.getElementsByClassName('flash');
        let colors = new Array();

        for (let i = 0; i < blocks.length; i++) {
            colors[i] = blocks[i].style.backgroundColor;
            blocks[i].setAttribute('class', 'rectangle flash flash2');
        }

        timer2 = setTimeout(setRed, 200);
        timer2 = setTimeout(setWhite, 400);
        timer2 = setTimeout(setRed, 600);
        timer2 = setTimeout(setWhite, 800);
        timer2 = setTimeout(setRed, 1000);
        timer2 = setTimeout(setBack, 1200, colors);
    }

    function setRed() {
        blocks = document.getElementsByClassName('flash2');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = 'red';
        }
    }

    function setWhite() {
        blocks = document.getElementsByClassName('flash2');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = 'white';
        }
    }

    function setBack(colors) {
        blocks = document.getElementsByClassName('flash2');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = "" + colors[i];
        }
    }

    timerId = setInterval(flashing, 10000)

    document.addEventListener("keydown", function(event) {
        blocks = document.getElementsByClassName('rectangle');
        if (event.shiftKey) {
            //alert("Helloooooooooooo");
            if (event.key === "R") {
                //alert("Hello");
                for (let i = 0; i < blocks.length; i++) {
                    blocks[i].style.backgroundColor = 'red';
                }
            } else if (event.key === "G") {
                for (let i = 0; i < blocks.length; i++) {
                    blocks[i].style.backgroundColor = 'green';
                }
            } else if (event.key === "B") {
                for (let i = 0; i < blocks.length; i++) {
                    blocks[i].style.backgroundColor = 'blue';
                }
            }
        }
    });
});
