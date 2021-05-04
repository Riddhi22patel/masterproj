part2 = document.querySelector('.part2')
part3 = document.querySelector('.part3')
review =document.querySelector('review')





review.addEventlistner('click', ()=>{
    alert('Review submitted');



})
app.get("/", (req,res) =>{
    res.render("home")
})
app.get("/register", (req,res) =>{
    res.render("register");

})
app.get("/login", (req,res) =>{
    res.render("login");
})




