var classification = getQueryVariable("classification");
classification = decodeURI(classification);
var kw = getQueryVariable("kw");
kw = kw == "all" ? "" : kw;
kw = decodeURI(kw);
var num_item = 0;

console.log(classification);

name_arr.sort(function (val1, val2) {
  var result = val2.date.split("/")[0] - val1.date.split("/")[0];
  if (result != 0) return result;
  result = val2.date.split("/")[1] - val1.date.split("/")[1];
  if (result != 0) return result;
  result = val2.date.split("/")[2] - val1.date.split("/")[2];
  if (result != 0) return result;
  result = val2.date.split("/")[3].split(":")[0] - val1.date.split("/")[3].split(":")[0];
  if (result != 0) return result;
  result = val2.date.split("/")[3].split(":")[1] - val1.date.split("/")[3].split(":")[1];
  if (result != 0) return result;
  return val2.date.split("/")[3].split(":")[2] - val1.date.split("/")[3].split(":")[2];
});

var content_page_content = document.querySelector("#content-page-content-id");
var now_element = null;
for (var i = 0; i < name_arr.length; i++) {
  if ((classification == "all" || classification == name_arr[i].classification) && findStr(name_arr[i].title, kw)) {
    num_item++;
    if (now_element == null) {
      now_element = document.createElement("ul");
      now_element.id = name_arr[i].date.split("/")[0];
      content_page_content.appendChild(now_element);
      now_element.appendChild(document.createElement("div"));
      now_element.lastElementChild.className = "content-page-date-class";
      now_element.lastElementChild.innerHTML = now_element.id;
    } else if (now_element.id != name_arr[i].date.split("/")[0]) {
      now_element = document.createElement("ul");
      content_page_content.appendChild(now_element);
      now_element.id = name_arr[i].date.split("/")[0];
      content_page_content.appendChild(now_element);
      now_element.appendChild(document.createElement("div"));
      now_element.lastElementChild.className = "content-page-date-class";
      now_element.lastElementChild.innerHTML = now_element.id;
    }
    now_element.appendChild(document.createElement("div"));
    now_element.lastElementChild.className = "content-page-box-class";
    now_element.lastElementChild.appendChild(document.createElement("li"));
    now_element.lastElementChild.lastElementChild.appendChild(document.createElement("div"));
    now_element.lastElementChild.lastElementChild.lastElementChild.className = "content-page-content-title-class";
    now_element.lastElementChild.lastElementChild.lastElementChild.appendChild(document.createElement("a"));
    now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.href = "articles/" + name_arr[i].title + ".html";
    now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = name_arr[i].title;
    now_element.lastElementChild.appendChild(document.createElement("div"));
    now_element.lastElementChild.lastElementChild.className = "content-page-content-date-class";
    now_element.lastElementChild.lastElementChild.innerHTML = name_arr[i].date.split("/")[1] + "/" + name_arr[i].date.split("/")[2];
  }
}

var search_item = document.querySelector("#search-img-id");
var search_input = document.querySelector("#search-input-id");
if (search_item != null) {
  search_item.addEventListener("click", function () {
    if (search_input.value.trim() == "") search_input.focus();
    else goto_search_url();
  });
}

document.addEventListener("click", function (e) {});

window.onkeyup = function (e) {
  if (document.querySelector("#search-input-id") == document.activeElement && e.key == "Enter") {
    goto_search_url();
  }
};

if (num_item == 0) {
  var no_info = document.createElement("div");
  no_info.id = "content-info-id";
  no_info.textContent = "该分类现在没有文章呢";
  document.querySelector("#content-page-content-id").appendChild(no_info);
}

var content_page_box = document.querySelectorAll(".content-page-box-class");
Array.from(content_page_box).forEach(function (val) {
  val.addEventListener("mouseup", function () {
    location.href = val.firstElementChild.firstElementChild.firstElementChild.href;
  });
});

function findStr(str, regex) {
  str = str.toLocaleLowerCase();
  regex = regex.toLocaleLowerCase();
  if (str.indexOf(regex) == -1) return false;
  return true;
}

function goto_search_url() {
  var text_input = search_item.parentElement.firstElementChild.value.trim();
  if (text_input == "") {
    return;
  }
  if (text_input.indexOf("=") != -1 || (text_input.indexOf("&") != -1 && text_input.indexOf(".") != -1) || text_input.indexOf("?") != -1) {
    alert("不能搜索特殊符号");
    return;
  }
  var url_str = location.href.toString();
  if (url_str.split(".html").length == 1) return;
  var kw_split = url_str.split("kw=");
  if (kw_split.length == 1) {
    if (kw_split[0].split(".html")[1] == "") location.href = kw_split[0] + "?kw=" + text_input;
    else location.href = kw_split[0] + "&kw=" + text_input;
  } else {
    location.href = kw_split[0] + "kw=" + text_input + deleteOriginKW(kw_split);
  }
}

function deleteOriginKW(kw_split) {
  var arr = kw_split[1].split("&");
  var result = "";
  for (var i = 1; i < arr.length; i++) {
    result += "&" + arr[i];
  }
  return result;
}
