project_name_arr.sort(function (val1, val2) {
  var result = val1.date.split("/")[0] - val1.date.split("/")[0];
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

var content_page = document.querySelector("#content-page-id");

for (var i = 0; i < project_name_arr.length; i++) {
  var now_element = document.createElement("div");
  now_element.className = "content-page-item-class";
  content_page.appendChild(now_element);
  now_element.appendChild(document.createElement("a"));
  now_element.lastElementChild.className = "content-page-item-a-class";
  now_element.lastElementChild.href = "articles/" + project_name_arr[i].title + ".html";
  now_element.lastElementChild.textContent = project_name_arr[i].title;
  now_element.appendChild(document.createElement("a"));
  now_element.lastElementChild.className = "content-page-item-origin-class";
  now_element.lastElementChild.href = project_name_arr[i].href;
  now_element.lastElementChild.textContent = "项目仓库";
  now_element.appendChild(document.createElement("span"));
  now_element.lastElementChild.className = "content-page-item-span-class";
  now_element.lastElementChild.textContent =
    project_name_arr[i].date.split("/")[0] + "/" + project_name_arr[i].date.split("/")[1] + "/" + project_name_arr[i].date.split("/")[2];
}

if (project_name_arr.length == 0) {
  var no_info = document.createElement("div");
  no_info.id = "content-info-id";
  no_info.textContent = "该分类现在没有文章呢";
  content_page.appendChild(no_info);
}
