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
Total.prototype.pizzaTotal= function(){
    return this.price;
}
Total.prototype.finalTotal = function(){
    return this.price + 150.
}
var sizePrice = [400, 800, 1200];


$(document).ready(function() {
    $('form#myForm').submit(function(event){
        event.preventDefault();
        var pizzaFlavor = $('#flavor').val();
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = $('#crust').val();
        var pizzaTopping = $('#topping').val();
        var price = sizePrice[pizzaSize-1];


        newOrder = new Order(pizzaFlavor, pizzaSize, pizzaCrust, pizzaTopping);
        newTotal = new Total(price);

        if (pizzaSize == 1) {
            $("#placedOrder").html("You Ordered "  + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.pizzaTotal());
        }else if(pizzaSize == 2) {
            $("#placedOrder").html("You Ordered "  + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.pizzaTotal());
        }else if(pizzaSize==3) {
            $("#placedOrder").html("You Ordered "  + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.pizzaTotal());
        }else{
            return false;
        }

        // $("#placedOrder").html("You Ordered " + newOrder.size + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.finalTotal());
        document.getElementById("myForm").reset();

    });

    $('#add').click(function(e) {
        e.preventDefault();
        $("#placedOrder").append("You Ordered " + " " + newOrder.flavor + " with " + newOrder.crust + " crust and " + newOrder.topping + " topping. " + "Total: " + newTotal.pizzaTotal());
        document.getElementById("myForm").reset();
    })
    $('form#deliveryForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var location = $('#location').val();
        alert("Hello, " + name + ".Your order has been received. Your Pizza will be delivered to " + location + " in the next 30 to 35 minutes maximum. And the Total Amount to pay is: KSH." + newTotal.finalTotal());
        document.getElementById("myForm").reset();

    });
   $('#checkout').click(function(e) {
       $('#orders').show();
       $('.del').show();
   })
   $('#deliver').click(function(e) {
       e.preventDefault();
       $('#deliveryForm').show();
   })

});


