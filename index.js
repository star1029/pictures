let arr = [
  {src: 'images/1.jpg', text: '一人得道鸡犬升天'},{src: 'images/2.jpg', text: '一飞冲天'},
  {src: 'images/3.jpg', text: '一马平川'},{src: 'images/4.jpg', text: '一无所有'},
  {src: 'images/5.jpg', text: '一五一十'}
],
  index = 0;
let draw = ()=>{
  if(index == 0) {
    let image = document.createElement("img");
    image.src = arr[index].src;
    document.getElementById("image").appendChild(image);
  }else{
    document.getElementsByTagName("img")[0].src = arr[index].src
  };
  document.getElementById("btn").setAttribute("data-value", arr[index].text);
};

document.getElementById("btn").onclick = (e)=>{
  if(document.getElementById("btn").dataset.value == document.getElementById("input").value){
    ++index;
    draw();
  }else{
    document.getElementById("input").focus();
  };
  document.getElementById("input").value = "";
};

draw();
