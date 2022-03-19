

//business interface logic
function Pizza(pizza, size, crust, toppings,) {
  this.pizza = pizza;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping;

//calculation point
var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
            priceSize = 1200;
            break;
        case "medium":
            priceSize = 800;
            break;
        case "small":
            priceSize = 450;
            break;
        default:
            location.reload();
            alert("Please select a pizza size");
    };
  