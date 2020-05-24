const image = document.createElement('img');
const button = document.getElementsByTagName("button") [0];
            button.onclick = function(event){
                button.textContent = "Generating Doggo";
                $.get('https://dog.ceo/api/breeds/image/random')
                    .then(function(data) {
                // message property specific to this API -- can see it on home page, in Postman, and in console.log() can have more than one level of address: data.message.doggos.doggo3 if that was how the API structured data
                image.setAttribute("src", data.message);
                const imageDiv = document.getElementsByClassName("image")[0];
                imageDiv.innerHTML = "";
                imageDiv.appendChild(image);
                button.textContent = "Generate Doggo"
                }); };
const select = document.getElementById("dog-select");

window.addEventListener('DOMContentLoaded', function () {
    $.get("https://dog.ceo/api/breeds/list").then(function(data) {
        const breeds = data.message;
        breeds.forEach(function(breed) {
            const option = document.createElement("option");
            option.setAttribute("value", breed);
            option.textContent = breed;
            select.appendChild(option);

        });
        })
    });

    select.addEventListener('change', function (e) {
        console.log(e.target.value)
        const breed = e.target.value;
        $.get(`https://dog.ceo/api/breed/${breed}/images/random`) 
        .then(function (data) {
        image.setAttribute("src", data.message);
                const imageDiv = document.getElementsByClassName("image")[0];
                imageDiv.innerHTML = "";
                imageDiv.appendChild(image);
    });
})




// const dropDown = document.getElementsByTagName("select")[0];

// $.get(" https://dog.ceo/api/breeds/list")
//     .then(function(data){
//         dropDown.innerHTML = "";
//         const breed = document.createElement("option");
//         for(i = 0; i < data.message.length; i++) {
//             breed.setAttribute('value', data.message[i]);
//             dropDown.appendChild(breed);   
//             dropDown.innerHTML =    
//         }
//     });

// dropDown.addEventListener( 'change', function(){
//     .get("/api/breed/{breed name}/images/random (replacing {breed name}");
// })