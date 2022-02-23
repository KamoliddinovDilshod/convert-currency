var UZS = Math.round(10869.5652);
var EURO = Math.round(0.881297976);
var RU = Math.round(80.3212851);

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelect = document.querySelector(".form__select");
var elText = document.querySelector(".user__text");

elForm.addEventListener("submit" , function(ref){

  ref.preventDefault();

  var elUsdVal = Number(elInput.value);
  var elSelectVal = Number(elSelect.value);
  elText.textContent=(elUsdVal * elSelectVal);
});