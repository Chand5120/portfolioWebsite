"use strict";

const githubCode = document.querySelector(".project--githubLink1");
const websiteLink = document.querySelector(".project--link1");

githubCode.addEventListener("mouseover", function () {
  githubCode.style.color = "#147EFB";
  document.querySelector(".gitCodeImage").style.stroke = "#147EFB";
});

githubCode.addEventListener("mouseout", function () {
  githubCode.style.color = "#000";
  document.querySelector(".gitCodeImage").style.stroke = "#000";
});

websiteLink.addEventListener("mouseover", function () {
  websiteLink.style.color = "#147EFB";
  document.querySelector(".websiteLink").style.stroke = "#147EFB";
});

websiteLink.addEventListener("mouseout", function () {
  websiteLink.style.color = "#000";
  document.querySelector(".websiteLink").style.stroke = "#000";
});