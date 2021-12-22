const chai = require('chai');
const expect = chai.expect;

const Treehouse = require('../src/Treehouse');

describe('Treehouse', () => {
  let treehouse;
  let treehouse1;
  beforeEach(() => {
    treehouse = new Treehouse();
  });
  it('Should be a function', () => {
    expect(Treehouse).to.be.a('function')
  });
  it('Should instantiate a new Treehouse', () => {
    expect(treehouse).to.be.an.instanceof(Treehouse)
  });
  it('Should have a price', () => {
    treehouse1 = new Treehouse(100)
    expect(treehouse.price).to.equal(undefined)
    expect(treehouse1.price).to.equal(100)
  });
  it('Should have a price point', () => {
    expect(treehouse.pricePoint).to.equal("")
  });
  it('Should have bedrooms', () => {
    treehouse1 = new Treehouse(100, 2)
    expect(treehouse.bedrooms).to.equal(undefined)
    expect(treehouse1.bedrooms).to.equal(2)
  });
  it('Should have bathrooms', () => {
    treehouse1 = new Treehouse(100, 2, 1)
    expect(treehouse.bathrooms).to.equal(undefined)
    expect(treehouse1.bathrooms).to.equal(1)
  });
  it('Should have a location', () => {
    treehouse1 = new Treehouse(100, 2, 1, 'Denver')
    expect(treehouse.location).to.equal(undefined)
    expect(treehouse1.location).to.equal('Denver')
  });
  it('Should default to not booked', () => {
    expect(treehouse.isBooked).to.equal(false)
  });
  it('Should be able to reduce price', () => {
    treehouse1 = new Treehouse(100, 2, 1, 'Denver')
    treehouse.reducePrice(10)
    treehouse1.reducePrice(10)
    expect(treehouse.price).to.deep.equal(NaN)
    expect(treehouse1.price).to.equal(90)
  });
  it('Should be able to determine price point', () => {
    treehouse1 = new Treehouse(250, 2, 1, 'Denver')
    treehouse1.determinePricePoint()
    expect(treehouse.pricePoint).to.equal("")
    expect(treehouse1.pricePoint).to.equal("$$$")
    treehouse.reducePrice(25)
    treehouse1.reducePrice(25)
    treehouse.determinePricePoint()
    treehouse1.determinePricePoint()
    expect(treehouse.pricePoint).to.equal("")
    expect(treehouse1.pricePoint).to.equal("$$")
    treehouse1.reducePrice(50)
    treehouse1.determinePricePoint()
    expect(treehouse1.pricePoint).to.equal("$")
  });
});
