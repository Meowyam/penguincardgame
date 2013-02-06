function startgame() {

    $("#tries").empty();
    $("#score").empty();
    $("#penguins").empty();

    var set = ["fiordland1", "fiordland2", "cape1", "cape2", "rockhopper1", "rockhopper2", "erectcrested1", "erectcrested2", "galapagos1", "galapagos2", "humboldt1", "humboldt2", "magellanic1", "magellanic2", "king1", "king2", "snares1", "snares2", "emperor1", "adelie1", "royal1","macaroni1","macaroni2","emperor2", "adelie2", "royal2"];

    var clicked = false;
    var click1;
    var click2;
    var counter = 0;
    var turns = 0;

    function loadcards() {
	set = shuffle(set);
	deal('cardset',set);
    }

    function matchcards() {
	loadcards();
	swapper();
    }

    function shuffle(setArray) {
	for (var l = setArray.length, i, j; l>0; l--) {
	    var j = Math.floor(Math.random()*(l--));
	    i = setArray[l];
	    setArray[l] = setArray[j];
	    setArray[j] = i;
	}
	return setArray;
    }

    function deal(cardset,set) {
	$("#"+cardset).empty();
	for (var i=0; i<set.length; i++) {
	    $("#"+cardset).append("<img src=img/blank.png id=" + set[i] + " class=indv_penguin />");
	}
    }

    function swapper() {
	$(".indv_penguin").click(function() {
		pimg = this.id.slice(0,-1); 
		$("#"+this.id).animate({opacity:1},100,function() {
		    $("#"+this.id).attr("src","img/"+pimg+".png");
		});
		matcher(this.id);
		});
    }

    function matcher(penguin) {
	if (clicked === true) {
	    click2 = penguin;
	    if (click1.slice(0,-1) != click2.slice(0,-1)) {
	    	turns += 1;
		comment(turns, "tries");
		reset(click1, click2);
	    }
	    else {
		counter += 1;
		turns += 1;
		comment(counter, "score");
		comment(turns, "tries");
		listpenguins(click1);
		win(counter);
	    }
	    clicked=false;
	}
	else {
	    clicked = true;
	    click1 = penguin;
	}
    }

    function listpenguins(penguin) {
	var penguin = penguin.slice(0,-1);
	var cappenguin = penguin.substr(0,1).toUpperCase()+penguin.substr(1);
	$("#penguins").append("<div class=penguinbox>" + cappenguin + "</div>");
    }

    function reset(wrongone,wrongtwo) {
	$("#"+wrongone).animate({opacity:1},1000,function(){
	    $("#"+wrongone).attr("src", "img/blank.png");
	    });
	$("#"+wrongtwo).animate({opacity:1},1000,function(){
	    $("#"+wrongtwo).attr("src", "img/blank.png");
	    });
    }

    function win(counter) {
    	if (counter === 5) { comment("All the penguins! Yay you win!", "score"); }
	else return;
    }

    function comment(comment,divname) {
    	$("#"+divname).html(comment);
    }

    matchcards();

}
