class Car {
  brand: string;
  model: string;
  price: number;

  constructor(brand:string,model:string,price:number){
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  startEngine(){
    console.log(`${this.brand} ${this.model } engine started `);
    
  }

}

const car1 = new Car ("TOYOTA" , "FORUNER" , 45_00000);
const car2 = new Car ("mahindra", "thar", 18_00000)

car1.startEngine();
car2.startEngine();




  