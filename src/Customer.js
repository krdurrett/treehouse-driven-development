const Treehouse = require('../src/Treehouse');

class Customer {
  constructor(budget) {
    this.budget = budget;
    this.bookings = [];
  }
  checkBudget(treehouse) {
    if (this.budget >= treehouse.price) {
      return true
    } else {
      return false
    }
  }
  bookTreehouse(treehouse) {
    if(this.checkBudget(treehouse)) {
      this.bookings.push(treehouse);
      this.budget -= treehouse.price;
      treehouse.isBooked = true;
    } else {
      return 'I\'m sorry but this treehouse is out of your budget'
    }
  }
}

module.exports = Customer;
