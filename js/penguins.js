cards = ["emperor", "adelie", "gentoo", "snares", "chinstrap"];
var set1;
var set2;

function startgame() {
    shuffle1();
    shuffle2();
    $('#cardset1').html("");
    $('#cardset2').html("");
    loadcards();
}

Array.prototype.shuffle = function () {
for (var l = this.length, i, j; l>0; l--) {
var j = Math.floor(Math.random()*(l--));
i = this[l];
this[l] = this[j];
this[j] = i;
}
return this;
}


function shuffle1() {
set1 = cards.shuffle();
}

function shuffle2() {
set2 = cards.shuffle();
}

function loadcards() {
    for (var i=0; i<cards.length; i++) {
	$('#cardset1').append("<img src=img/" + set1[i] + ".png id=" + set1[i] + " onclick=clickcard(this.id) />");
    }
    for (var i=0; i<cards.length; i++) {
	$('#cardset2').append("<img src=img/" + set2[i] + ".png id=" + set2[i] + "2 />");
    }
}

function clickcard(whichid) {
    alert(whichid);
}

