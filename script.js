class Burger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }
    
    static SIZE_BIG = {
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5 
    }

    static STUFFING_POTATO  = {
        price: 15,
        calories: 10 
    }

    static TOPPING_SAUCE  = {
        price: 15,
        calories: 0 
    }

    static TOPPING_MAYO  = {
        price: 20,
        calories: 5 
    }

    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
        this.totalCalories = size.calories + stuffing.calories;
        this.totalPrice = size.price + stuffing.price;
    }

    addTopping(topping) {
        this.toppings.push(topping);
        this.totalCalories += topping.calories;
        this.totalPrice += topping.price;
    }

    calculateCallories() {
        if (this.totalCalories >= 100) {
            return (`Calories in your order: ${this.totalCalories} calories. You are eating too much. You look like this - O. 
            We are bad at marketing, so you will have a discount, if you will come here tommorow. If you know what I mean.
            Like kung fu panda, or big snowball, or the guy from that meme.
            Did you get it?
            `)
        } else {
            return (`Calories in your order: ${this.totalCalories} calories.`)
        }
    }

    calculatePrice() {
        if (this.totalCalories >= 100) {
            return (`Total price of your order: ${this.totalPrice} tuhriks. Thank you, superhero-we-dont-deserve. Today you saved 100 people from overweight`);
        } else {
            return (`Total price of your order: ${this.totalPrice} tuhriks`);
        }
    }

}

let hamburger = new Burger(Burger.SIZE_SMALL, Burger.STUFFING_CHEESE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_MAYO)
console.log(hamburger)
console.log(hamburger.calculateCallories())
console.log(hamburger.calculatePrice())
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
hamburger.addTopping(Burger.TOPPING_MAYO)
hamburger.addTopping(Burger.TOPPING_SAUCE)
console.log(hamburger)
console.log(hamburger.calculateCallories())
console.log(hamburger.calculatePrice())