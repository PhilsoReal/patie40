"use strict";
const cover = document.getElementById("cover");
const details = document.getElementById("details");
function showInvitation(open) {
  cover.hidden = open;
  details.hidden = !open;
  window.scrollTo({top: 0, behavior: "instant"});
  (open ? details.querySelector(".back") : cover.querySelector(".open-button")).focus({preventScroll: true});
}
document.querySelector("[data-open-invitation]").addEventListener("click", () => showInvitation(true));
document.querySelector("[data-close-invitation]").addEventListener("click", () => showInvitation(false));
