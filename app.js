document.addEventListener('DOMContentLoaded', function(){

    // get search button
    const button = document.querySelector(".search-btn");

    //add click event listener to search button
    button.addEventListener('click',function(){
      
         //create XMLHttpRequest object to send ajax request
         const xhr = new XMLHttpRequest();

         //get data from input text field
         const search = document.querySelector('.search-field');
 
         let createRequest = search.name+"="+search.value;
         console.log(createRequest);
         // when a response is received from the server
         xhr.onload = function(){
            console.log(this.responseText);
            const result = document.getElementById('result');
            result.innerHTML = this.responseText;
            
         }

         xhr.open("POST", "superheroes.php", true);
         xhr.setRequestHeader("content-type", 'application/x-www-form-urlencoded');
         xhr.send(createRequest);

    });
});