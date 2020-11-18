class Box {
    constructor(x, y, width, height, colour) {
      var options = {
          //isStatic : true,
          'restitution':1,
          'friction':0.8,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = colour;     
      this.visibility = 255;
      this.image = loadImage("square.png");
      World.add(world, this.body);
    
    }
    display(){
      //console.log(this.body.speed);

      var pos =this.body.position;
      var angle = this.body.angle;
      push();      
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);    
     

      if(this.body.speed < 3){      
              
        image(this.image,0, 0, this.width, this.height);     
     
      }
      else {               
      
        //the tint function is making everything slow because it's called in each frame
        tint (255, this.visibility);  
        if(this.visibility >= 0){         
          this.visibility = this.visibility -15;            
         
        }     
        image(this.image,0, 0, this.width, this.height);  
        World.remove(world, this.body);
        
        
        noTint(); 
        
      }
     
      pop();
     
    }
  };
  
