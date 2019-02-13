console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in Jquery');
    $('#submitButton').on('click', addRestaurant);
    $('#idTable').on('click', '.deleteButton', deleteRestaurant);//descendent selector.
    //on the idTable, if there's a click on a deletebutton run deleteRestaurant
    
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
                        <td><button class="deleteButton" data-id="${restaurant.id}">Delete</button></td>                     
                    </tr>
                `)
         })//end loop
     })//end .then
 }
 function deleteRestaurant(){
    console.log('delete clicked');
    console.log($(this).data().id);// id could be taco if data-taco

     $.ajax({ // ajax go to server
         url: '/restaurant/' + $(this).data().id,//restaurant/6---> id is 6
         method: 'DELETE'//reqst to server
     }).then (function (){
         getResto();

     })  
 }