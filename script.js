const txtname = document.getElementById("txtName");
const txtemail = document.getElementById("txtEmail");
const button = document.getElementById("submit");
const result = document.getElementById("result");

txtname.addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
})

txtemail.addEventListener("keyup", function(){
    this.value = this.value.toLowerCase();
})

button.addEventListener("click", function(e){
    e.preventDefault();
    result.textContent = "";
    result.textContent = result.textContent.concat("Result is ", txtname.value, " ",txtemail.value);
})

