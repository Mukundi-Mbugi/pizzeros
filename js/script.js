$(document).ready(function () {
  $("#btn3").click(function () {
    // Call user inputs
    var pizzaSize = $("#size").val();
    var pizzaCrust = $("#crust").val();
    var pizzaTopping = $("#topping").val();
    var orderNumber = $("#ordernumber").val();
    // console.log(pizzaSize, pizzaCrust, pizzaTopping);

    var totalPrice =
      (parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTopping)) *
      parseInt(orderNumber);
    // console.log(totalPrice);

    var deliveryFee = 300;

    const grandTotal = totalPrice + deliveryFee;
    console.log(grandTotal);

    document.getElementById("return1").innerHTML =
      "You have chosen " +
      $("#size option:selected").text() +
      " pizza, " +
      $("#crust option:selected").text() +
      " crust and " +
      $("#topping option:selected").text() +
      " topping. " +
      " The total price is Ksh. " +
      totalPrice;

    document.getElementById("return2").innerHTML =
      "Your new total price is Ksh " +
      grandTotal +
      ". Our delivery guy will be at your doorstep soon. Enter your details below.";
  });
  $("#btn3").click(function () {
    $(".deliver").show();
    $("#return1").show();
  });
  $("#yes").click(function () {
    $("#return2").show();
    $(".locnum").show();
    $("#yes").hide();
    $("#no").hide();
    $("#return1").hide();
    $("#fee").hide();
  });
  $("#no").click(function () {
    $("#return3").show();
    $("#yes").hide();
    $("#no").hide();
    $("#return1").hide();
    $("#fee").hide();
  });
  $("#btn4").click(function () {
    $("#return3").show();
    $("#return2").hide();
  });
});
