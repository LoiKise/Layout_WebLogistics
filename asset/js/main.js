const ourservices_item = document.querySelectorAll(".ourservices-item");
const ourservices_icon = document.querySelectorAll(
  ".ourservices-item__content-icon"
);
console.log(ourservices_item);
ourservices_item.forEach((item, index) => {
  item.onmouseover = function () {
    ourservices_icon[index].src =
      "./asset/img/icon/white_right_circle_arrow.png";
  };
  item.onmouseleave = function () {
    ourservices_icon[index].src =
      "./asset/img/icon/black_right_circle_arrow.png";
  };
});
