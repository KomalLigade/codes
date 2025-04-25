//selecting ul
const gallery = document.querySelector(".Gallery");

//select imagbox
const imagbox = document.querySelectorAll(".itembox")
console.log(imagboxs)

gallery.addEventListener("click",(e)=>{
    console.log(e)

     if(e.target.classList.contain("filter")){
        gallery.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        itemboxes.forEach(item => {
            if(item.classList.contains(filterValue)|| filterValue === "all"){
                item.classList.add("show");

                item.classList.remove("hide");
            }

            else{
                item.classList.add("hide")
            }
            
        })
     }
})     

let students = ["komal", "varad", "shiv"];
students.forEach(element=>{
       console.log("hello" + element)
})

