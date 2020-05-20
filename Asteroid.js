var radius = 30;

class Asteroid {

  constructor(startingX, startingY, velX, velY, stageNum) {
    this.asteroid = createSprite(startingX, startingY);
    this.asteroid.setVelocity(velX, velY);

    switch(stageNum) {
      //Draw function looks redundant but is called before radius can be
      //instantiated, so we have to hard code it
      case 1: //big asteroid
        this.radius = 30;

        this.asteroid.draw = function() {
          let angle = TWO_PI / 12;

          push();
          // noFill();
          fill(200, 0, 0);
          stroke(255);
          beginShape();

          for (let a = 0; a < TWO_PI; a += angle) {
            vertex(cos(a) * 30, sin(a) * 30);
          }

          // circle(0, 0, 30);

          endShape(CLOSE);
          pop();
        }
        break;
      case 2: //smaller asteroid
        this.radius = 15;

        this.asteroid.draw = function() {
          let angle = TWO_PI / 12;

          push();
          // noFill();
          fill(200, 0, 0);
          stroke(255);
          beginShape();

          for (let a = 0; a < TWO_PI; a += angle) {
            vertex(cos(a) * 15, sin(a) * 15);
          }

          // circle(0, 0, 30);

          endShape(CLOSE);
          pop();
        }
        break;
    }
    this.asteroid.setCollider("circle", 0, 0, this.radius);
  }

  //This method is the one that is actually called by the Player class
  update() {
    this.updateMovement();
    this.show();
  }

  updateMovement() {
    //Checks if out of bounds
    if (this.asteroid.position.x + this.radius < 0) {
      this.asteroid.position.x = width + this.radius;
    } else if (this.asteroid.position.x - this.radius > width) {
      this.asteroid.position.x = -this.radius;
    }
    if (this.asteroid.position.y + this.radius < 0) {
      this.asteroid.position.y = height + this.radius;
    } else if (this.asteroid.position.y - this.radius > height) {
      this.asteroid.position.y = -this.radius;
    }
  }

  show() {
    drawSprite(this.asteroid);
  }
}
