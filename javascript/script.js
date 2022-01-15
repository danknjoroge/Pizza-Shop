function validateForm() {
    if( document.myForm.flavor.value == "") {
       alert( "Please select the preferred Pizza flavor." );
       document.myForm.date.focus() ;
       return false;
    } else if(document.myForm.size.value == "") {
        alert("Please select the size you want to order.");
        return false;
    }else if(document.myForm.crust.value == "") {
        alert("Please select yout preferred crust");
        return false;
    } 
    else if(document.myForm.topping.value == "") {
        alert("Please select yout preferred topping");
        return false;
    }    
    else{
      return true ;
    } 
}

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
        var price = sizePrice[pizzaSize-1];


        newOrder = new Order(pizzaFlavor, pizzaSize, pizzaCrust, pizzaTopping);
        newTotal = new Total(price);

        $("#placedOrder").html("You Ordered " + newOrder.size + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.finalTotal());
    });

});


