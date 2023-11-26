///////////////////////////////////////////////////////////////

var layout = document.querySelector(".layout");
var showFaceCreate = document.getElementById("showFaceCreate");
var human = document.querySelectorAll(".human");
var nameinput = document.querySelector(".input");

//var select = document.getElementById("select");
var n = "";

//console.log(lastarray);
function saveName() {
  var nameInput = document.getElementById("nameInput").value;

  if (nameInput.trim() !== "") {
    localStorage.setItem("user_name", nameInput);
    //  lastOptionStorge.push(nameInput);

    //console.log(lastOptionStorge);
    return 1;
  } else {
    alert("الرجاء ادخل أسمك");
    nameinput.style.border = "2px solid rgb(210 111 111)";
    return 0;
  }
}
///////////////
// lastOptionStorge.forEach(function (item) {
//   var option = document.createElement("option");

//   option.value = item.value;
//   option.text = item['2'];
//   select.appendChild(option);
// });

////////////////

human.forEach((h) => {
  h.onclick = () => {
    n = h.id;
    if (!saveName()) return;
    //  console.log(n);
    localStorage.setItem("choiseGender", n);

    layout.style.display = "none";
    showFaceCreate.style.display = "block";

    showFaceCreate.innerHTML = `
  
   <button  class ="button" id="btn">إحسنت هيا </button>

   <img class="maleRightEye" id="image0" src="../imges/${n}/RightEye.png"style="display: none" />
  <img class="maleLeftEye" id="image1" src="../imges/${n}/LeftEye.png" style="display: none" />
  <img class="happyEyeleft" id="image6" src="../imges/${n}/happyEyeleft.png"  style="display: none" />
  <img class="happyEyeright" id="image7" src="../imges/${n}/happyEyeright.png"  style="display: none" />
  <img class="engryeye1" id="image8" src="../imges/${n}/engryeye1.png"  style="display: none" />
  <img class="engryeye2" id="image9" src="../imges/${n}/engryeye2.png"  style="display: none" />
  <img class="maleMouth" id="image2" src="../imges/${n}/Mouth.png" style="display: none" />
  <img class="maleNoise" id="image3" src="../imges/${n}/Nose.png"  style="display: none" />
  <img class="mouth1" id="image4" src="../imges/${n}/mouth1.png"  style="display: none" />
  <img class="mouth2" id="image5" src="../imges/${n}/mouth2.png"  style="display: none" />

  <img id="centerImage" src="../imges/${n}/gender.png" style="display: none" /><div id="container"></div>`;

    nameInput.style.display = "none";
    setTimeout(() => {
      konva();
    }, 100);
  };
});

function konva() {
  //console.log("start");
  var imagePositions = [];
  var layer = new Konva.Layer();

  var stage = new Konva.Stage({
    container: "container",
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //  let w = 30;

  //   let h = 20;
  for (var i = 0; i < 10; i++) {
    // if (i == 2 || i==3 ) {

    //   w = 30;
    //   h = 20;
    // }

    var image = new Konva.Image({
      id: document.getElementById("image" + i).className,
      x: i + 1 * 100,
      y: 300,
      // width: w,
      // height: h,
      draggable: true,
      image: document.getElementById("image" + i),
    });

    if (i == 0) {
      image.attrs.y = 180;
      image.attrs.x = 75;
    }
    if (i == 1) {
      image.attrs.y = 180;
      image.attrs.x = 175;
    }
    // smiling mouth
    if (i == 2) {
      image.attrs.y = 415;
      image.attrs.x = 45;
    }
    // Nose
    if (i == 3) {
      image.attrs.y = 425;
      image.attrs.x = 225;
    }
    // happy mouth
    if (i == 4) {
      image.attrs.y = 425;
      image.attrs.x = 175;
    }
    // shouting mouth
    if (i == 5) {
      image.attrs.y = 422;
      image.attrs.x = 105;
    }
    // smiling eye 1
    if (i == 6) {
      image.attrs.y = 250;
      image.attrs.x = 75;
    }
    // smiling eye 2
    if (i == 7) {
      image.attrs.y = 250;
      image.attrs.x = 175;
    }

    if (i == 8) {
      image.attrs.y = 320;
      image.attrs.x = 75;
    }
    if (i == 9) {
      image.attrs.y = 320;
      image.attrs.x = 175;
    }

    function reac() {
      stage.x(0);
      stage.y(0);

      layer.draw();
    }

    image.on("dragend", function (e) {
      // Save the position of the image
      this.scaleX;

      if (imagePositions.length) {
        for (let i = 1; i < imagePositions.length + 1; i++) {
          if (e.target.attrs.image.className == imagePositions[i]?.id) {
            imagePositions.splice(i, 1);
          }
        }
        imagePositions.push({
          id: this.id(),
          x: this.x(),
          y: this.y(),
        });

        localStorage.setItem("imagePositions", JSON.stringify(imagePositions));
      } else {
        console.log("init");
        imagePositions.push(n);
        imagePositions.push({
          id: this.id(),
          x: this.x(),
          y: this.y(),
        });

        localStorage.setItem("imagePositions", JSON.stringify(imagePositions));
      }
    });
    layer.add(image);
  }
  // Create one image in the center
  var centerImage = new Konva.Image({
    x: 550,
    y: 130,
    width: 250,
    height: 500,
    draggable: false,
    image: document.getElementById("centerImage"),
  });

  layer.add(centerImage);

  centerImage.moveToBottom();

  // Add the layer to the stage
  stage.add(layer);
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    window.location.href = "/theaterReciver/index.html";
  });
}

////////////////////////////////////////////
