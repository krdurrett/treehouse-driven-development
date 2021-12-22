const chai = require('chai');
const expect = chai.expect;

const Customer = require('../src/Customer');
const Treehouse = require('../src/Treehouse');

describe('Customer', () => {
  let customer;
  let customer1;
  let customer2;
  let treehouse;
  beforeEach(() => {
    treehouse = new Treehouse(200, 2, 1, 'Denver');
    customer = new Customer();
    customer1 = new Customer(200);
    customer2 = new Customer(100);
  });
  it('Should be a function', () => {
    expect(Customer).to.be.a('function')
  });
  it('Should instantiate a new Customer', () => {
    expect(customer).to.be.an.instanceof(Customer)
  });
  it('Should have a budget', () => {
    expect(customer.budget).to.equal(undefined)
    expect(customer1.budget).to.equal(200)
  });
  it('Should keep track of bookings', () => {
    expect(customer.bookings).to.be.an('array')
  });
  it('Should be able to check their budget', () => {
    expect(customer1.checkBudget(treehouse)).to.equal(true)
    expect(customer2.checkBudget(treehouse)).to.equal(false)
  });
  it('Should be able to add to bookings if in budget', () => {
    customer1.checkBudget(treehouse)
    customer2.checkBudget(treehouse)
    customer1.bookTreehouse(treehouse)
    customer2.bookTreehouse(treehouse)
    expect(customer1.bookings.length).to.equal(1)
    expect(customer1.bookings).to.deep.equal([treehouse])
    expect(customer2.bookings.length).to.equal(0)
  });
  it('Should be reduce budget by cost of treehouse if in budget', () => {
    customer1.checkBudget(treehouse)
    customer1.bookTreehouse(treehouse)
    expect(customer1.budget).to.equal(0)
  });
  it('Should update treehouse isBooked property if in budget', () => {
    let treehouse1 = new Treehouse(150, 1, 1, 'Boulder')
    customer1.checkBudget(treehouse)
    customer2.checkBudget(treehouse1)
    customer1.bookTreehouse(treehouse)
    customer2.bookTreehouse(treehouse1)
    expect(treehouse.isBooked).to.equal(true);
    expect(treehouse1.isBooked).to.equal(false);
  });
  it('Should see apologetic message if treehouse is not in budget', () => {
    customer2.checkBudget(treehouse)
    expect(customer2.bookTreehouse(treehouse)).to.equal('I\'m sorry but this treehouse is out of your budget')
  });
  it('Should not decrease budget if treehouse is not in budget', () => {
    customer2.checkBudget(treehouse)
    customer2.bookTreehouse(treehouse)
    expect(customer2.budget).to.equal(100)
  });
});
