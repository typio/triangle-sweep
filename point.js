function Point(x, y, r, color, start, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.line = start;
    this.speed = speed;
}

let cosx = Math.sqrt(3)/2;

Point.prototype.show = function() {
    ellipseMode(CENTER);
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);

    if (this.line == 1) {
        this.x -= .5 * this.speed;
        this.y += cosx * this.speed;
    } else if (this.line == 2) {
        this.x += 1 * this.speed;
        this.y += 0 * this.speed;
    } else {
        this.x -= .5 * this.speed;
        this.y -= cosx * this.speed;
    }

    if (this.line == 1 && this.x <= x2 && this.y <= y2) {
        this.line = 2;
    } else if (this.line == 2 && this.x >= x3 && this.y >= y1) {
        this.line = 3;
    } else if (this.line == 3 && this.x <= x1) {
        this.line = 1;
    }
}
