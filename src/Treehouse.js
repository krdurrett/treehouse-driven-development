class Treehouse {
  constructor(price, bedrooms, bathrooms, location) {
    this.price = price;
    this.pricePoint = "";
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.location = location;
    this.isBooked = false
  }
  reducePrice(percent) {
    this.price = this.price - (this.price * percent/100)
  }
  determinePricePoint() {
    if(this.price > 200) {
      this.pricePoint = '$$$'
    } else if (this.price > 100 && this.price <= 200) {
      this.pricePoint = '$$'
    } else if (this.price <= 100){
      this.pricePoint = '$'
    } else if (this.price = undefined) {
      this.pricePoint = ''
    }
  }
}

module.exports = Treehouse;
