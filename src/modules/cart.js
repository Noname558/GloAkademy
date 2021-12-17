
const cart = () => {
    const button = document.getElementById("cart")
    const model = document.querySelector(".cart")

    const button1 = model.querySelector(".cart-close")

    const closeCart = () => {
        model.style.display = "none"
    }

    button1.addEventListener("click", closeCart)

    const openCart = () => {
        model.style.display = "flex"
    }

    button.onclick = openCart

    console.dir(button)
}



export default cart