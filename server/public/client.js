console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in Jquery');
    $('#submitButton').on('click', addRestaurant);


}; //end onReady
function addRestaurant(){
let name = $('#nameIn').val();
let type = $('#typeIn').val();
console.log(name,type);
    $.ajax({ // ajax go to server
        url: '/restaurant',
        method: 'GET'//reqst to server           
    })
};//end addRestaurant