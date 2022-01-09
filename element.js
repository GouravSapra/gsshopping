let length = 0;
let starting = 0;
let showing_results = 10;

for (key in CACHE) {
    length += 1;
}

if (length > showing_results) {
    length = showing_results;
}

starting = length;
var parent = document.querySelector('.containert');

document.getElementById('nextbtn').addEventListener('click', function() {
    ContentAdder(starting, length, true);
    length += showing_results
    starting += showing_results
})


function ContentAdder(startingpoint, length, showmsg = false) {
    try {
        for (var i = startingpoint; i < startingpoint + length; i++) {
            var div = document.createElement('div')
            div.setAttribute('class', 'containerwrapper')

            var img = document.createElement('img')
            img.src = CACHE[i][0];

            var h3 = document.createElement('h3');
            h3.textContent = CACHE[i][1];

            var button = document.createElement('a')
            button.textContent = "Click Here to Purchase"
            button.href = CACHE[i][2]
            button.target = "_blank"

            div.appendChild(img)
            div.appendChild(h3)
            div.appendChild(button)

            parent.appendChild(div)
        }
    } catch (err) {
        document.getElementById('nextbtn').style.display = 'none';
        if (showmsg)
            console.log("All results displayed.");
    }
}

ContentAdder(0, length);