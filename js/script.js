const stars = document.querySelectorAll(".star")
const paraRate = document.querySelector("#para")

stars.forEach((star,index)=>{
    
    star.addEventListener('click',()=>{
        
        let current_star = index+1
        paraRate.innerText = `${current_star} of 5`

        stars.forEach((star,i)=>{
            if(current_star >= i+1){
                star.innerHTML = `&#9733`;
            }
            else{
                star.innerHTML = `&#9734;`
            }
    })
   
   
    })
})