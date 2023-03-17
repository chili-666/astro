let searchedTags = [];
let buttons = document.getElementsByClassName("tag-button");
let listItems = document.getElementsByClassName("list");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttons[i].classList.toggle("bg-everglade-800");
    if (!searchedTags.includes(buttons[i].dataset.target)) {
      searchedTags.push(buttons[i].dataset.target);
    } else {
      let index = searchedTags.indexOf(buttons[i].dataset.target);
      searchedTags.splice(index, 1);
    }
    for (let j = 0; j < listItems.length; j++) {
      listItems[j].style.display = "none";
      let show = 0;
      for (let x = 0; x < searchedTags.length; x++) {
        if (listItems[j].dataset.tags.indexOf(searchedTags[x]) >= 0) {
          show++;
          // listItems[j].style.display = 'block'
        } else {
          show--;
        }
      }
      if (show == searchedTags.length) {
        listItems[j].style.display = "block";
      }
    }
    if (buttons[i].dataset.target == "all") {
      searchedTags = [];
      for (let j = 0; j < listItems.length; j++) {
        listItems[j].style.display = "block";
      }
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("bg-everglade-800");
      }
    }
  });
}
