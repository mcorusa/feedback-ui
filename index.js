const ratingElements = document.querySelectorAll(".rating");

const buttonElement = document.getElementById("btn");

const containerElement  =document.getElementById("container");

let selectedRating ="";

ratingElements.forEach((ratingElement)=>
    {
        ratingElement.addEventListener("click", (event) => {
            console.log(event.target.innerText || event.target.parentNode.innerText);

            removeActive();
            selectedRating = event.target.innerText || event.target.parentNode.innerText;

            event.target.classList.add("active")
            event.target.parentNode.classList.add("active")

        });
    });

buttonElement.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerElement.innerHTML =`
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})


function removeActive(){
    ratingElements.forEach((ratingElement)=>{
        ratingElement.classList.remove("active");
    })
}

