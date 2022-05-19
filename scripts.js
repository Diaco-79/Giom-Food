const searchIcon = document.querySelector("[data-search-icon]");
const searchInput = document.querySelector("[data-search-input]");
const [line1, line2, line3] = document.querySelectorAll(".line");
const menu = document.querySelector(".menu");
const nav = document.querySelector("[data-nav]");
let isToggledDown = false;
let isToggledUp = false;
let isShrinked = false;
let isExpanded = false;

function expanded() {
  nav.classList.toggle("-translate-x-full");
}
function toggleDown() {
  if (!isToggledDown) {
    line1.classList.remove("animate-moveDownReversed");
    line1.classList.toggle("animate-moveDown");
    isToggledDown = true;
  } else {
    line1.classList.remove("animate-moveDown");
    line1.classList.toggle("animate-moveDownReversed");
    isToggledDown = false;
  }
}

function toggleUp() {
  if (!isToggledUp) {
    line3.classList.remove("animate-moveUpReversed");
    line3.classList.toggle("animate-moveUp");
    isToggledUp = true;
  } else {
    line3.classList.remove("animate-moveUp");
    line3.classList.toggle("animate-moveUpReversed");
    isToggledUp = false;
  }
}
function shrink() {
  if (!isShrinked) {
    line2.classList.remove("animate-shrinkReversed");
    line2.classList.toggle("animate-shrink");
    isShrinked = true;
  } else {
    line2.classList.remove("animate-shrink");
    line2.classList.toggle("animate-shrinkReversed");
    isShrinked = false;
  }
}

menu.addEventListener("click", toggleDown);
menu.addEventListener("click", toggleUp);
menu.addEventListener("click", shrink);
menu.addEventListener("click", expanded);

// popular choices

const food1 = {
  id: 1,
  pic: "./img/Hamburger.png",
  name: "Beef Burger",
  description: "Amet tellus imperdiet porttitor posuere",
};
const food2 = {
  id: 2,
  pic: "./img/CheesePizza.png",
  name: "Cheese Pizza",
  description: "Amet tellus imperdiet porttitor posuere",
};
const food3 = {
  id: 3,
  pic: "./img/Nugget.png",
  name: "Nuggets",
  description: "Amet tellus imperdiet porttitor posuere",
};

const foods = [food1, food2, food3];

const popularChoices = document.querySelector(".choices");

const addFood = function () {
  foods.forEach((food) => {
    popularChoices.insertAdjacentHTML(
      "afterbegin",
      `<div
            class="choice swiper-slide  w-[100%] m-auto flex flex-col justify-center gap-2 pb-10 text-center shadow-2xl rounded-2xl bg-gradient-to-t from-white to-transparent"
          >
            <div class="">
              <img
                class="-mt-14 max-w-[10rem] m-auto"
                src="${food.pic}"
                alt=""
              />
            </div>
            <div class="food_title font-semibold text-lg">
              <h4>${food.name}</h4>
            </div>
            <div class="food_sub max-w-[20ch] m-auto opacity-70 text-sm">
              <p>${food.description}</p>
            </div>
          </div data-food-${food.id}>`
    );
  });
};

addFood();
