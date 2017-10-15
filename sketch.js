// moving points for drawing lines
let p1, p2;

// defining points of triangle
let x1, y1, x2, y2, x3, y3;

let lines = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

function setup() {
        createCanvas(650, 650);
        x1 = width/2;
        y1 = height/6;
        x2 = width/8;
        y2 = height - height/6;
        x3 = width - width/8;
        y3 = height - height/6;

        p1 = new Point(x1, y1, 0, '#FE004A', 1, 2);
        p2 = new Point(x2, y2, 0, '#FE004A', 2, 2);
}

function draw() {
    //frameRate(1);
    background('#f2f3f4');
    stroke('#FE004A')
    strokeWeight(1);
    if (frameCount % 5 == 0) {
        let newLine = new Array();
        newLine[0] = p1.x;
        newLine[1] = p1.y;
        newLine[2] = p2.x;
        newLine[3] = p2.y;
        lines.unshift(newLine);
        lines.pop();
    }

    for (let i = 0; i < lines.length; i++) {
        line(lines[0][0],lines[0][1],lines[0][2],lines[0][3]);
        line(lines[1][0],lines[1][1],lines[1][2],lines[1][3]);
        line(lines[2][0],lines[2][1],lines[2][2],lines[2][3]);
        line(lines[3][0],lines[3][1],lines[3][2],lines[3][3]);
        line(lines[4][0],lines[4][1],lines[4][2],lines[4][3]);
        line(lines[5][0],lines[5][1],lines[5][2],lines[5][3]);
        line(lines[6][0],lines[6][1],lines[6][2],lines[6][3]);
        line(lines[7][0],lines[7][1],lines[7][2],lines[7][3]);
        line(lines[8][0],lines[8][1],lines[8][2],lines[8][3]);
        line(lines[9][0],lines[9][1],lines[9][2],lines[9][3]);
        line(lines[10][0],lines[10][1],lines[10][2],lines[10][3]);
        line(lines[11][0],lines[11][1],lines[11][2],lines[11][3]);
        line(lines[12][0],lines[12][1],lines[12][2],lines[12][3]);
        line(lines[13][0],lines[13][1],lines[13][2],lines[13][3]);
        line(lines[14][0],lines[14][1],lines[14][2],lines[14][3]);
        line(lines[15][0],lines[15][1],lines[15][2],lines[15][3]);
        line(lines[16][0],lines[16][1],lines[16][2],lines[16][3]);
        line(lines[17][0],lines[17][1],lines[17][2],lines[17][3]);
        line(lines[18][0],lines[18][1],lines[18][2],lines[18][3]);
        line(lines[19][0],lines[19][1],lines[19][2],lines[19][3]);
        line(lines[20][0],lines[20][1],lines[20][2],lines[20][3]);
        line(lines[21][0],lines[21][1],lines[21][2],lines[21][3]);
        line(lines[22][0],lines[22][1],lines[22][2],lines[22][3]);
        line(lines[23][0],lines[23][1],lines[23][2],lines[23][3]);
        line(lines[24][0],lines[24][1],lines[24][2],lines[24][3]);
        line(lines[25][0],lines[25][1],lines[25][2],lines[25][3]);
        line(lines[26][0],lines[26][1],lines[26][2],lines[26][3]);
        line(lines[27][0],lines[27][1],lines[27][2],lines[27][3]);
        line(lines[28][0],lines[28][1],lines[28][2],lines[28][3]);
        line(lines[29][0],lines[29][1],lines[29][2],lines[29][3]);
        line(lines[30][0],lines[30][1],lines[30][2],lines[30][3]);
        line(lines[31][0],lines[31][1],lines[31][2],lines[31][3]);
        line(lines[32][0],lines[32][1],lines[32][2],lines[32][3]);
        line(lines[33][0],lines[33][1],lines[33][2],lines[33][3]);
        line(lines[34][0],lines[34][1],lines[34][2],lines[34][3]);
        line(lines[35][0],lines[35][1],lines[35][2],lines[35][3]);
        line(lines[36][0],lines[36][1],lines[36][2],lines[36][3]);
        line(lines[37][0],lines[37][1],lines[37][2],lines[37][3]);
        line(lines[38][0],lines[38][1],lines[38][2],lines[38][3]);
        line(lines[39][0],lines[39][1],lines[39][2],lines[39][3]);
        line(lines[40][0],lines[40][1],lines[40][2],lines[40][3]);
        line(lines[41][0],lines[41][1],lines[41][2],lines[41][3]);
        line(lines[42][0],lines[42][1],lines[42][2],lines[42][3]);
        line(lines[43][0],lines[43][1],lines[43][2],lines[43][3]);
        line(lines[44][0],lines[44][1],lines[44][2],lines[44][3]);
        line(lines[45][0],lines[45][1],lines[45][2],lines[45][3]);
        line(lines[46][0],lines[46][1],lines[46][2],lines[46][3]);
        line(lines[47][0],lines[47][1],lines[47][2],lines[47][3]);
        line(lines[48][0],lines[48][1],lines[48][2],lines[48][3]);
        line(lines[49][0],lines[49][1],lines[49][2],lines[49][3]);
    }

    stroke('#3C004A')
    noFill();
    strokeWeight(5);
    triangle(x1, y1, x2, y2, x3, y3);
    p1.show();
    p2.show();
}
