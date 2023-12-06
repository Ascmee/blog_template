let articles = new Array(classification_arr.length).fill(0);
var content_root = document.querySelector("#content-id");
for (var i = 0; i < classification_arr.length; i++) {
  content_root.appendChild(document.createElement("div"));
  content_root.lastElementChild.id = "content-div-" + (i + 1) + "-id";
  content_root.lastElementChild.appendChild(document.createElement("p"));
  content_root.lastElementChild.lastElementChild.className = "content-div-p-class";
  content_root.lastElementChild.lastElementChild.appendChild(document.createElement("a"));
  content_root.lastElementChild.lastElementChild.lastElementChild.className = "content-div-a-class";
  content_root.lastElementChild.lastElementChild.lastElementChild.href = "articles.html?classification=" + classification_arr[i];
  content_root.lastElementChild.lastElementChild.lastElementChild.textContent = classification_arr[i];
}

for (var i = 0; i < name_arr.length; i++) {
  var exist = false;
  for (var j = 0; j < classification_arr.length; j++) {
    if (name_arr[i].classification.toLocaleLowerCase() == classification_arr[j].toLocaleLowerCase()) {
      articles[j]++;
      exist = true;
      break;
    }
  }
  if (!exist) {
    articles[classification_arr.length - 1]++;
  }
}

var index = 0;
var content_div_a = document.querySelectorAll(".content-div-a-class");
Array.from(content_div_a).forEach(function (val) {
  if (isMobile()) val.style.fontSize = 18 + articles[index] / 5 + "px";
  else val.style.fontSize = 30 + articles[index] / 2.5 + "px";
  val.textContent += "(" + articles[index++] + ")";
});

if (isMobile()) {
}
