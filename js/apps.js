const allBtn = document.getElementById('all');
const menWearBtn = document.getElementById('menWear');
const womenWearBtn = document.getElementById('womenWear');
const watchBtn = document.getElementById('watch');
const foodBtn = document.getElementById('food');
const flowerBtn = document.getElementById('flower');

const items = [
    {
        id: 1,
        img: "./images/men_cloth1.jpg",
        title: "Men Stoke",
        actualPrice: "$1450",
        previousPrice: "$2000",
    },
    {
        id: 2,
        img: "./images/women_cloth1.jpg",
        title: "Women Stoke",
        actualPrice: "$1550",
        previousPrice: "$2100",
    },
    {
        id: 2709,
        img: "./images/women_cloth3.jpg",
        title: "Women Stoke",
        actualPrice: "$1150",
        previousPrice: "$1900",
    },
    {
        id: 4,
        img: "./images/watch1.jpg",
        title: "Wristwatch",
        actualPrice: "$150",
        previousPrice: "$200",
    },
    {
        id: 5,
        img: "./images/flower1.jpg",
        title: "Flower",
        actualPrice: "$450",
        previousPrice: "$600",
    },
    {
        id: 6,
        img: "./images/men_cloth2.jpg",
        title: "Men Stoke",
        actualPrice: "$2450",
        previousPrice: "$2800",
    },
    {
        id: 7,
        img: "./images/flower3.jpg",
        title: "Flower",
        actualPrice: "$1550",
        previousPrice: "$2300",
    },
    {
        id: 8,
        img: "./images/food2.jpg",
        title: "Food",
        actualPrice: "$2450",
        previousPrice: "$2800",
    },
    {
        id: 9,
        img: "./images/men_cloth4.jpg",
        title: "Men Stock",
        actualPrice: "$2450",
        previousPrice: "$2800",
    },
    {
        id: 10,
        img: "./images/food4.jpg",
        title: "Food",
        actualPrice: "$2450",
        previousPrice: "$2800",
    },
    {
        id: 11,
        img: "./images/watch4.jpg",
        title: "Wristwatch",
        actualPrice: "$450",
        previousPrice: "800",
    },
    {
        id: 12,
        img: "./images/food3.jpg",
        title: "Food",
        actualPrice: "$4950",
        previousPrice: "5200",
    },
]


const container = document.getElementById("container");
function displayItems(category) {
    const filteredItems = items.filter(item => {
        if (category === 'all') {
            return true;
        } else {
            return item.title.toLowerCase() === category.toLowerCase();
        }
    });

    const list = filteredItems.map(item => {
        return `
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <img src=${item.img} alt="">
            <div class="bg-des p-2">
              <h4 class="pb-4">${item.title}</h4>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h5>${item.actualPrice}</h5>
                  <p>${item.previousPrice}</p>
                </div>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = list.join('');
}

allBtn.addEventListener('click', () => displayItems('all'));
menWearBtn.addEventListener('click', () => displayItems('Men Stoke'));
womenWearBtn.addEventListener('click', () => displayItems('Women Stoke'));
watchBtn.addEventListener('click', () => displayItems('Wristwatch'));
foodBtn.addEventListener('click', () => displayItems('Food'));
flowerBtn.addEventListener('click', () => displayItems('Flower'));

displayItems('all');