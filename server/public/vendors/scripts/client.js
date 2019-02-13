console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in Jquery');
    $('#submitButton').on('click', addRestaurant);
    getResto();

}; //end onReady


function addRestaurant(){
    let name = $('#nameIn').val();
    let type = $('#typeIn').val();
    console.log(name,type);
    $.ajax({
        url: '/restaurant',
        method: 'POST',
        data: { 
            name: name,
            type: type,    
        }
    }).then(function (response) {
        console.log(response);
          getResto();
    });
};//end addRestaurant


 function getResto(){
     $.ajax({ // ajax go to server
         url: '/restaurant',
         method: 'GET'//reqst to server           
     }).then(function (response) {
         $('#restoList').empty();
         response.forEach(function (restaurant) {
             console.log('in loop GET getResto');
             $('#restoList').append(`              
                    <tr id="rOutput">
                        <td>Name: ${restaurant.name}</td>
                        <td>Type: ${restaurant.type} </td>                       
                    </tr>
                `)
         })//end loop
     })//end .then
 }