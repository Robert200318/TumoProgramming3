var matrix = [];
var n = 60;
var m = 60;
var side = 8;
var xot = 85;
var xotaker = 5;
var gishatich = 3;
var sov = 1;
var can = 0.1
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {

        matrix[y][x] = 0;

    }

}

for (var i = 0; i < n * m / 100 * xot; i++) {

    var x = Math.floor(Math.random() * m);

    var y = Math.floor(Math.random() * n);

    while (matrix[y][x] != 0) {

        x = Math.floor(Math.random() * m);

        y = Math.floor(Math.random() * n);

    }

    matrix[y][x] = 1;

}

for (var i = 0; i < n * m / 100 * xotaker; i++) {

    var x = Math.floor(Math.random() * m);

    var y = Math.floor(Math.random() * n);

    while (matrix[y][x] != 0) {

        x = Math.floor(Math.random() * m);

        y = Math.floor(Math.random() * n);

    }

    matrix[y][x] = 2;

}

for (var i = 0; i < n * m / 100 * gishatich; i++) {

    var x = Math.floor(Math.random() * m);

    var y = Math.floor(Math.random() * n);

    while (matrix[y][x] != 0) {

        x = Math.floor(Math.random() * m);

        y = Math.floor(Math.random() * n);

    }

    matrix[y][x] = 3;

}

for (var i = 0; i < n * m / 100 * sov; i++) {

    var x = Math.floor(Math.random() * m);

    var y = Math.floor(Math.random() * n);

    while (matrix[y][x] != 0) {

        x = Math.floor(Math.random() * m);

        y = Math.floor(Math.random() * n);

    }

    matrix[y][x] = 4;

}
for (var i = 0; i < n * m / 100 * can; i++) {

    var x = Math.floor(Math.random() * m);

    var y = Math.floor(Math.random() * n);

    while (matrix[y][x] != 0) {

        x = Math.floor(Math.random() * m);

        y = Math.floor(Math.random() * n);

    }

    matrix[y][x] = 5;

}




var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishArr = [];
var sovArr = [];
var canArr = [];
function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gh = new Gish(x, y)
                gishArr.push(gh)
            }
           else if (matrix[y][x] == 4) {
                var so = new Sov(x, y)
                sovArr.push(so)
            }
            else if (matrix[y][x] == 5) {
                var ca = new Can(x, y)
                canArr.push(ca)
            }
           
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
             else if (matrix[y][x] == 3) {
                fill("red");
            }
             else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishArr) {
        gishArr[i].eat()
        gishArr[i].move()
        gishArr[i].mult()
        gishArr[i].die()
    }
   for (var i in sovArr) {
        sovArr[i].eat()
        sovArr[i].move()
        sovArr[i].mult()
        sovArr[i].die()
    }
    for (var i in canArr) {
        canArr[i].eat()
        canArr[i].move()
       
        canArr[i].die()
    }
}
