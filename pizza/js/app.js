const searchFrom = document.querySelector(".search-from")
// açılacak olan search barı
const searchBtn = document.querySelector("#search-btn")
// tıklanacak olan icon

searchBtn.addEventListener("click", function () {
    searchFrom.classList.toggle("active")
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchFrom)
        ) {
            searchFrom.classList.remove("active")
        }
    })
})


// siparişler menüsü için
const cartItemContainer = document.querySelector(".cart-items-container")
const shoppingBtn = document.querySelector("#shopping-btn")

shoppingBtn.addEventListener("click", function () {
    cartItemContainer.classList.toggle("active")
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(shoppingBtn) &&
            !e.composedPath().includes(cartItemContainer)
        ) {
            cartItemContainer.classList.remove("active")
        }
    })
})

// navbar için
const mobilMenü = document.querySelector (".navbar")
const mobilBtn = document.querySelector("#menu-btn")

mobilBtn.addEventListener("click", function(){
    mobilMenü.classList.toggle("active")
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(mobilBtn) &&
            !e.composedPath().includes(mobilMenü)
        ) {
            mobilMenü.classList.remove("active")
        }
    })
})