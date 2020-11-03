document.addEventListener('DOMContentLoaded', function(){

    // get search button
    const button = document.querySelector(".search-btn");

    //add click event listener to search button
    button.addEventListener('click',function(){
      
        //create XMLHttpRequest object to send ajax request
        const xhr = new XMLHttpRequest();

        // when a response is received from the server
        xhr.onload = function(){
            //show server response in alert message
            alert(this.responseText);
        }

        // create a get request to superheroes.php script
        xhr.open("get", "superheroes.php", true);
        //send ajax request to server
        xhr.send();

    });
});