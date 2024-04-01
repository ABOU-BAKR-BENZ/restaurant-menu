const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./Images/item-1.jpeg",
    desc: `Delicious fluffy pancakes made with buttermilk, perfect for
                breakfast, topped with syrup, berries, or butter for a
                delightful treat.`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./Images/item-2.jpeg",
    desc: `A hearty classic: Diner Double, a mouthwatering double
        burger stacked with cheese, veggies, and sauce, a diner's
        delight.`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./Images/item-3.jpeg",
    desc: `A monstrous treat: Godzilla Milkshake, an epic blend of rich
        ice cream, toppings, and flavors, a shake that towers above
        the rest.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "./Images/item-4.jpeg",
    desc: `A taste of rural bliss, fresh farm ingredients crafted into
        wholesome dishes, evoking comfort and hearty satisfaction.`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "./Images/item-5.jpeg",
    desc: `An extraordinary breakfast venture elevating eggs to gourmet
        wonders, from exquisite omelets to velvety poached delights,
        crafting unforgettable culinary experiences.`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "./Images/item-6.jpeg",
    desc: `An indulgent fantasy of luscious Oreo-infused desserts,
        tantalizing cakes, and creamy shakes, where each bite leads
        to a moment of pure bliss.`,
  },
  {
    id: 7,
    title: "Chicken Marsala",
    category: "dinner",
    price: 55.99,
    img: "./Images/item-7.jpg",
    desc: `Chicken Marsala is a classic Italian-American dish. Tender
        chicken cutlets are sautéed and served with a rich Marsala
        wine sauce, accompanied by earthy mushrooms, creating a
        delightful balance of flavors.`,
  },
  {
    id: 8,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./Images/item-8.jpeg",
    desc: `A carnivore's delight, a generous serving of crispy bacon in
        every bite, a savory feast that overflows with smoky,
        irresistible flavors..`,
  },
  {
    id: 9,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./Images/item-9.jpeg",
    desc: `A mouthwatering masterpiece of succulent beef, melted
        cheese, and fresh toppings, representing the quintessential
        taste of America's iconic comfort food.`,
  },
  {
    id: 10,
    title: "Salmon Teriyaki",
    category: "dinner",
    price: 18.99,
    img: "./Images/item-10.jpg",
    desc: `Grilled salmon with sweet-savory teriyaki glaze.
        Japanese-inspired, succulent fish dish for a delightful
        balance of flavors and a memorable experience.`,
  },
  {
    id: 11,
    title: "Italian Pasta",
    category: "dinner",
    price: 16.99,
    img: "./Images/item-11.jpeg",
    desc: `Italian pasta, made from durum wheat semolina, is a
        versatile staple boasting diverse shapes and textures. It
        serves as the perfect canvas for an array of flavorful
        sauces, epitomizing Italian culinary excellence.`,
  },
  {
    id: 12,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "./Images/item-12.jpeg",
    desc: `A savory delight of premium grilled steak, paired with
        flavorful sides, epitomizing a perfect blend of indulgence
        and culinary satisfaction.`,
  },
];

const menuContainer = document.getElementById("menuContainer");
const allBtn = document.getElementById("All");
const breakfastBtn = document.getElementById("Breakfast");
const lunchBtn = document.getElementById("Lunch");
const shakesBtn = document.getElementById("Shakes");
const dinnerBtn = document.getElementById("Dinner");
const menuButtons = [allBtn, breakfastBtn, lunchBtn, shakesBtn, dinnerBtn];

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map((item) => {
    return ` <div class="col ms-md-0 ms-5 mb-3">
    <div class="card mb-3" style="max-width: 1000px">
          <div class="row g-0">
          <div class="col-md-4">
              <img src=${item.img} class="img-fluid rounded" alt=${item.title} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
              <h5 class="card-title">
                  ${item.title} <span class="price">$${item.price}</span>
                </h5>
                <p class="card-text">${item.desc}</p>
              </div>
            </div>
          </div>
          </div>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
});

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let filteredMenu;
    if (btn.id === "All") {
      filteredMenu = menu;
    } else {
      filteredMenu = menu.filter(
        (item) => item.category.toLowerCase() == btn.id.toLowerCase()
      );
    }
    let displayMenu = filteredMenu.map((item) => {
      return ` <div class="col ms-md-0 ms-5 mb-3">
          <div class="card mb-3" style="max-width: 1000px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${item.img} class="img-fluid rounded" alt=${item.title} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    ${item.title} <span class="price">$${item.price}</span>
                  </h5>
                  <p class="card-text">${item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    menuContainer.innerHTML = displayMenu;
  });
});
