function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {  //drag//
  event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {  //drop//
  event.preventDefault();
  var data = event.dataTransfer.getData("text"); //condition//

  if((event.target.className == "box1" && data == "circ1") || 
    (event.target.className == "box2" && data == "circ2")) {
    
    event.target.appendChild(document.getElementById(data));
    }
    
  if((event.target.className == "box1" && data == "circ1") || 
  (event.target.className == "box2" && data == "circ2")) {
    alert("Congrats!")
  }

}


