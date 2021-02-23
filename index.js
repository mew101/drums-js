//document.querySelector("button").addEventListener("click", function () {
//  alert("clicked!");
//});


var drumArray =  document.querySelectorAll(".drum").length;
for(i = 0; i < drumArray; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("clicked!");
  });
}
