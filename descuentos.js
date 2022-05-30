const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
//console.log ({
//  precioOriginal,
//descuento,
//porcentajePrecioConDescuento,
//precioConDescuento,
//});

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}
