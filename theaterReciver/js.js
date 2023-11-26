// const url = localStorage.getItem("compositeImageData");
// const img = new Image();
// img.src = url;
var inPostion = JSON.parse(localStorage.getItem("imagePositions"));
var nameInput = localStorage.getItem("user_name");
var captureImge = document.querySelector(".capture");
var pullimges = document.getElementById("pullimges");
const imgs = pullimges.querySelectorAll("img");
var centerImge = document.getElementById("centerImage");
centerImge.src = `../imges/${inPostion[0]}/gender.png`;
//console.log(inPostion[0]);





imgs.forEach((img, i) => {
  switch (i) {
    case 0:
      img.src = `../imges/${inPostion[0]}/RightEye.png`;
      break;
    case 1:
      img.src = `../imges/${inPostion[0]}/LeftEye.png`;
      break;
    case 2:
      img.src = `../imges/${inPostion[0]}/Mouth.png`;
      break;
    case 3:
      img.src = `../imges/${inPostion[0]}/Nose.png`;
      break;
    case 4:
      img.src = `../imges/${inPostion[0]}/mouth1.png`;
      break;
    case 5:
      img.src = `../imges/${inPostion[0]}/mouth2.png`;
      break;
    case 6:
      img.src = `../imges/${inPostion[0]}/happyEyeleft.png`;
      break;
    case 7:
      img.src = `../imges/${inPostion[0]}/happyEyeright.png`;
      break;
    case 8:
      img.src = `../imges/${inPostion[0]}/engryeye1.png`;
      break;
    case 9:
      img.src = `../imges/${inPostion[0]}/engryeye2.png`;
      break;
  }
});

// console.log(inPostion)
function capture() {
  captureImge.style.display = "none";
  html2canvas(document.body).then((canvas) => {
    let a = document.createElement("a");
    a.download = `${nameInput}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
    captureImge.style.display = "inline-block";
  });
}

var width = window.innerWidth;
var height = window.innerHeight;
var stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height,
});
var layer = new Konva.Layer();

var renderImgecenter = new Konva.Image({
  id: "centerImage",
  x: 550,
  y: 130,
  width: 250,
  height: 500,
  draggable: false,
  image: centerImge,
});
layer.add(renderImgecenter);

var renderImge;
inPostion.forEach((pos) => {
  renderImge = new Konva.Image({
    id: pos.id,
    x: pos.x,
    y: pos.y,
    // width: 30,
    // height: 20,
    draggable: false,
    image: document.querySelector("." + pos.id),
  });
 // console.log(inPostion);
  layer.add(renderImge);
});
layer.setDraggable(true);
stage.add(layer);
