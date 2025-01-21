// 1
const article = document.querySelector(".article");
const button = document.querySelector("button");
button.textContent = article.textContent;

// 2
const image = document.querySelector("img");
const title = document.querySelector("h2");
image.src = "./image2.jpeg";
title.style.margin = "20px";

// 3
const image2 = document.querySelector("#image3");
image3.alt = "не заєць";
const link = document.querySelector("a");
link.href = "https://zvidusil.in.ua/lepus-timidus/";

// 4
const list = document.querySelector("ul");
const firstChild = document.querySelector("li.firstElement");
firstChild.textContent = "замінений текст для li";
list.style.border = "solid black";
