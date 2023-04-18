// class Supercar {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   information() {
//     console.log(this.make + this.model + this.year);
//   }
// }

// let vehicle1 = new Supercar("Bugatti", " Veyron Super Sport", 2023);

// vehicle1.information();

// class Helicopters {
//   constructor(capacity, model, mph) {
//     this.capacity = capacity;
//     this.model = model;
//     this.mph = mph;
//   }
//   information() {
//     this.mph > 80
//       ? console.log("big halicopter")
//       : console.log("small halicopter");
//   }
// }
// let helicopter = new Helicopters(2, "Robinson R", 90);

// helicopter.information();

class AccountHolder {
  constructor(name, deposit) {
    this.name = name;
    this.deposit = deposit;
  }
  numberGenerator() {
    let accountNumber = "";
    let lengths = this.name.length;
    let letters = this.name.substring(1, 3);
    console.log((accountNumber = lengths + letters));
  }
  // depositing();
  // withdrawing();
  // balance();
  // curent_info();
}

let account1 = new AccountHolder("madina", 4000);

account1.numberGenerator();
