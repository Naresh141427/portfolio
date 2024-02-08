const navBar = document.getElementById("nav");
navBar.addEventListener("click", (e) => {
  const ele = e.target;
  const isAnchor =
    ele.tagName.toLowerCase() === "a" ||
    ele.parentElement.tagName.toLowerCase() === "a";
  if (isAnchor) {
    const anchor = ele.tagName.toLowerCase() === "a" ? ele : ele.parentElement;
    const sectionId = anchor.getAttribute("href").substr(1);
    const target = document.getElementById(`${sectionId}`);
    target.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
  }
});
