var copy_item = document.querySelector("#info-copy");
var save_item = document.querySelector("#info-save");
document.title = document.querySelector("#content-page-title-id").textContent.trim() + " | " + author + "的博客";
Array.from(document.querySelectorAll(".content-code-number")).forEach(function (val) {
  var contentText = val.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.textContent.trim();
  val.textContent = getLineNumber(contentText);
  val.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.textContent = contentText;
});

Array.from(document.querySelectorAll(".content-page-code-button-copy-class")).forEach(function (val) {
  val.addEventListener("mouseup", function () {
    var text = val.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.lastElementChild.textContent.trim();

    if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(text);
    } else {
      var textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      // 隐藏此输入框
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      // 赋值
      textarea.value = text;
      // 选中
      textarea.select();
      // 复制
      document.execCommand("copy", true);
      // 移除输入框
      document.body.removeChild(textarea);
    }

    copy_item.style.visibility = "visible";
    setTimeout(function () {
      copy_item.style.visibility = "hidden";
    }, 500);
  });
});

Array.from(document.querySelectorAll(".content-page-code-button-toimage-class")).forEach(function (val) {
  val.addEventListener("mouseup", function () {
    downloadImage(val.parentElement.parentElement);
    save_item.style.visibility = "visible";
    setTimeout(function () {
      save_item.style.visibility = "hidden";
    }, 500);
  });
});

Array.from(document.querySelectorAll(".content-page-code-button-number-class")).forEach(function (val) {
  var numberLine =
    val.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
  val.addEventListener("mouseup", function () {
    if (screen.width >= 1024) {
      var codeLine = numberLine.parentElement.parentElement.parentElement.lastElementChild.lastElementChild;
      if (codeLine.style.width == "985px") {
        numberLine.style.marginLeft = "0px";
        codeLine.style.width = "945px";
      } else {
        numberLine.style.marginLeft = "-40px";
        codeLine.style.width = "985px";
      }
    } else if (screen.width >= 768) {
      var codeLine = numberLine.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild;
      if (codeLine.style.width == "655px") {
        numberLine.style.marginLeft = "0px";
        codeLine.style.width = "615px";
      } else {
        numberLine.style.marginLeft = "-40px";
        codeLine.style.width = "655px";
      }
    } else {
      var codeLine = numberLine.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild;
      if (codeLine.style.width == "calc(96vw - 47px)") {
        numberLine.style.marginLeft = "0px";
        codeLine.style.width = "calc(96vw - 72px)";
      } else {
        numberLine.style.marginLeft = "-25px";
        codeLine.style.width = "calc(96vw - 47px)";
      }
    }
  });
});

Array.from(document.querySelectorAll(".content-page-code-class")).forEach(function (val) {
  if (val.clientWidth < val.scrollWidth) {
    var numberLine = val.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    if (screen.width < 1024 && screen.width >= 768) numberLine.style.marginTop = "0px";
    else if (screen.width >= 1024) numberLine.style.marginTop = "-10px";
  }
});

function getLineNumber(val) {
  var num = val.split("\n").length;
  if (num == 0) return "";
  var result = "1";
  for (i = 2; i <= num; i++) {
    result += "\n" + i;
  }
  return result;
}

function downloadImage(source) {
  html2canvas(source).then(function (canvas) {
    const tag = document.createElement("a");
    tag.setAttribute("download", "code");
    tag.href = canvas.toDataURL(1);
    tag.click();
  });
}
