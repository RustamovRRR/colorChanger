// sade arxa fon deyishmek
const colors = ["green", "red", "blue","orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{
// 0 ve 2 arasinda random eded al
// get random number between 0 and 2
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

getRandomNumber = () =>(
    Math.floor(Math.random() * colors.length)
)