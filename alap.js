var number = document.getElementById("kosar");
var count = 0;

number.addEventListener('click', function() {
  const cnt = Number(number.innerHTML) + 1
  number.innerHTML = cnt
});