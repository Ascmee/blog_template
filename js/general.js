const topbar_div_more = document.getElementById("topbar-div-more-id");
const topbar_div = document.getElementById("topbar-div-id");
const topbar_div_blogger = document.getElementById("topbar-div-blogger-id");
const topbar_div_img_articles = document.getElementById("topbar-div-img-articles-id");
const topbar_div_img_classification = document.getElementById("topbar-div-img-classification-id");
const topbar_div_img_projects = document.getElementById("topbar-div-img-projects-id");
const topbar_div_img_about = document.getElementById("topbar-div-img-about-id");
const topbar_div_a_articles = document.getElementById("topbar-div-a-articles-id");
const topbar_div_a_classification = document.getElementById("topbar-div-a-classification-id");
const topbar_div_a_projects = document.getElementById("topbar-div-a-projects-id");
const topbar_div_a_about = document.getElementById("topbar-div-a-about-id");
const topbar_div_outer_show = document.getElementById("topbar-div-outer-show-id");
const head_element = document.querySelector("head");
// width
document.getElementById("topbar-div-a-blogger-id").textContent = author + "的博客";
if (document.title.trim() == "") {
  document.title = author + "的博客";
} else {
  document.title = document.title + " | " + author + "的博客";
}
var screen_width = screen.width;
var time_over_hundred = true;

function body_init() {
  if (isMobile()) {
  }
  var window_width = window.outerWidth;
  if (window_width / screen_width >= 0.5) {
    if (screen_width <= 768) {
      topbar_div_blogger.style.left = "5px";
    } else if (screen_width <= 1024) {
      topbar_div_blogger.style.left = "27%";
    }
    topbar_div.style.visibility = "visible";
    topbar_div_more.style.visibility = "hidden";
    if (screen_width > 768) {
      topbar_div.style.visibility = "visible";
      topbar_div_more.style.visibility = "hidden";
    } else {
      topbar_div_more.style.visibility = "visible";
      topbar_div.style.visibility = "hidden";
    }
  } else {
    topbar_div_blogger.style.left = "2%";
    topbar_div_more.style.visibility = "visible";
    topbar_div.style.right = "100%";
    topbar_div.style.visibility = "hidden";
  }

  var totop = document.querySelector("#upto-top");

  var body_item = document.querySelector("body");
  body_item.appendChild(document.createElement("div"));
  body_item.lastElementChild.id = "bottom-id";
  body_item.lastElementChild.appendChild(document.createElement("p"));
  body_item.lastElementChild.lastElementChild.id = "bottom-information-id";
  body_item.lastElementChild.lastElementChild.textContent = "Powered by ";
  body_item.lastElementChild.lastElementChild.appendChild(document.createElement("a"));
  body_item.lastElementChild.lastElementChild.lastElementChild.id = "bottom-a-information-id";
  body_item.lastElementChild.lastElementChild.lastElementChild.href = home_url;
  body_item.lastElementChild.lastElementChild.lastElementChild.textContent = author;

  if (totop != null) {
    window.onscroll = () => {
      if (document.documentElement.scrollTop >= 145) {
        totop.style.visibility = "visible";
      } else totop.style.visibility = "hidden";
    };
    if (document.scrollTop >= 145) totop.style.visibility = "visible";
    totop.addEventListener("click", function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      totop.style.visibility = "hidden";
    });
  }
}

window.addEventListener("resize", function () {
  var window_width = window.outerWidth;
  if (!time_over_hundred) return;
  time_over_hundred = false;
  if (window_width / screen_width >= 0.5) {
    if (screen_width > 1024) {
      topbar_div_blogger.style.left = (window_width / screen_width - 0.5) * 50 + 2 + "%";
    } else if (screen_width <= 768) {
      topbar_div_blogger.style.left = "5px";
    } else if (screen_width <= 1024) {
      topbar_div_blogger.style.left = "27%";
    }

    if (screen_width > 768) {
      topbar_div.style.visibility = "visible";
      topbar_div_more.style.visibility = "hidden";
      topbar_div.style.right = "40%";
      topbar_div.style.top = "0px";
      topbar_div_outer_show.style.visibility = "hidden";
    } else {
      topbar_div_more.style.visibility = "visible";
      if (topbar_div_outer_show.style.visibility != "visible") {
        topbar_div.style.visibility = "hidden";
        topbar_div.style.right = "100%";
      }
    }
  } else {
    topbar_div_blogger.style.left = "2%";
    topbar_div_more.style.visibility = "visible";
    if (topbar_div_outer_show.style.visibility != "visible") {
      topbar_div.style.visibility = "hidden";
      topbar_div.style.right = "100%";
    }
  }
  setTimeout(set_time_over_hundred, 100);
});

function set_time_over_hundred() {
  time_over_hundred = true;
}

function set_topbar_color(topbar_div_img_id, topbar_div_img_path, topbar_div_a_id, topbar_div_a_color) {
  document.getElementById(topbar_div_img_id).src = topbar_div_img_path;
  document.getElementById(topbar_div_a_id).style.color = topbar_div_a_color;
}

function set_topbar_articles_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-articles-id", rootPath + "image/articles_over.png", "topbar-div-a-articles-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-articles-id", rootPath + "image/articles.png", "topbar-div-a-articles-id", "black");
  }
}

function set_topbar_classification_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-classification-id", rootPath + "image/classification_over.png", "topbar-div-a-classify-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-classification-id", rootPath + "image/classification.png", "topbar-div-a-classify-id", "black");
  }
}

function set_topbar_projects_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-projects-id", rootPath + "image/projects_over.png", "topbar-div-a-projects-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-projects-id", rootPath + "image/projects.png", "topbar-div-a-projects-id", "black");
  }
}

function set_topbar_about_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-about-id", rootPath + "image/about_over.png", "topbar-div-a-about-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-about-id", rootPath + "image/about.png", "topbar-div-a-about-id", "black");
  }
}

function div_more_click() {
  if (topbar_div_outer_show.style.visibility == "visible") {
    topbar_div.style.visibility = "hidden";
    topbar_div.style.right = "40%";
    topbar_div.style.top = "0px";
    topbar_div_outer_show.style.visibility = "hidden";
  } else {
    topbar_div.style.visibility = "visible";
    topbar_div.style.right = "calc(50vw + 9em)";
    topbar_div.style.top = "50px";
    topbar_div_outer_show.style.visibility = "visible";
  }
}

function isMobile() {
  if (navigator.userAgent.match(/Mobi/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    return true;
  } else return false;
}

document.addEventListener("click", function (e) {});

window.addEventListener("mousedown", function (e) {
  if (screen_width >= 768) {
    if (topbar_div_outer_show.style.visibility == "visible" && e.clientY > 100) {
      topbar_div.style.visibility = "hidden";
      topbar_div.style.right = "40%";
      topbar_div.style.top = "0px";
      document.querySelector("#topbar-id").style.boxShadow = "0px 0px 0px #888888";
      topbar_div_outer_show.style.visibility = "hidden";
    } else if (topbar_div_outer_show.style.visibility == "hidden") {
      document.querySelector("#topbar-id").style.boxShadow = "0px 0px 5px #888888";
    }
  } else {
    if (topbar_div_outer_show.style.visibility == "visible" && e.clientY > 70) {
      topbar_div.style.visibility = "hidden";
      topbar_div.style.right = "40%";
      topbar_div.style.top = "0px";
      document.querySelector("#topbar-id").style.boxShadow = "0px 0px 0px #888888";
      topbar_div_outer_show.style.visibility = "hidden";
    } else if (topbar_div_outer_show.style.visibility == "hidden") {
      document.querySelector("#topbar-id").style.boxShadow = "0px 0px 5px #888888";
    }
  }
});

function getQueryVariable(val) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == val) return pair[1];
  }
  return "all";
}
