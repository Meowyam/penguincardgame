function startgame() {

var set1 = ["emperor1", "adelie1", "gentoo1", "snares1", "chinstrap1"];
var set2 = ["emperor2", "adelie2", "gentoo2", "snares2", "chinstrap2"];

var clicked = false;
var click1;
var click2;
var counter = 0;

function loadcards() {
    set1.shuffle();
    set2.shuffle();
    set1.deal('cardset1');
    set2.deal('cardset2');
}

function matchcards() {
loadcards();
swapper();
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

Array.prototype.deal = function (cardset) {
    $("#"+cardset).empty();
    for (var i=0; i<this.length; i++) {
    	$("#"+cardset).append("<img src=img/blank.png id=" + this[i] + " class=indv_penguin />");
    }
}

function swapper() {
    $(".indv_penguin").click(function() {
    pimg = this.id.slice(0,-1); 
    $("#"+this.id).attr("src", "img/"+pimg+".png");
    matcher(this.id);
    });
}

function matcher(penguin) {
    if (clicked == true) {
	click2 = penguin;
	console.log(click2);
	if (click1.slice(0,-1) != click2.slice(0,-1)) {
	    alert("sorry!");
	    reset(click1, click2);
	}
	else {
	    counter += 1;
	    alert(counter);
	}
	clicked=false;
    }
    else {
	clicked = true;
	click1 = penguin;
	console.log(click1.slice(0,-1));
	console.log(clicked);
    }
}

function reset(wrongone,wrongtwo) {
$("#"+wrongone).attr("src", "img/blank.png");
$("#"+wrongtwo).attr("src", "img/blank.png");
}

matchcards();

}
