
function Order(flavor, size, crust, topping){
    this.flavor = flavor;
    this.size = size;
    this.crust= crust;
    this.topping= topping;
}
Order.prototype.fullOrder = function(){
    return this.flavor + " " + this.size + " " + " with " + this.crust + " " + this.topping + " topping ";
}

function Total(price){
    this.price = price;
}
Total.prototype.finalTotal = function(){
    return this.price + 150.
}
var sizePrice = [400, 800, 1200];


$(document).ready(function() {
    $('form#myForm').submit(function(event){
        event.preventDefault();
        var pizzaFlavor = $('#flavor').val();
        var pizzaSize = $('#size').val();
        var pizzaCrust = $('#crust').val();
        var pizzaTopping = $('#topping').val();


        newOrder = new Order(pizzaFlavor, pizzaSize, pizzaCrust, pizzaTopping);
        // newTotal = new Total(price);

        alert(newOrder.fullOrder());
    });

});