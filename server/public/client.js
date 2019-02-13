console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in Jquery');
    $('#submitButton').on('click', addRestaurant);
    addRestaurant();

}; //end onReady
function addRestaurant(){
    let name = $('#nameIn').val();
    let type = $('#typeIn').val();
    console.log(name,type);
    $.ajax({
        url: '/restaurant',
        method: 'POST',
        data: { 
            name:name,
            type: type,
            
        }
    }).then(function (response) {
        console.log(response);

        getResto();
    });
}


};//end addRestaurant
 function getResto(){
     $.ajax({ // ajax go to server
         url: '/restaurant',
         method: 'GET'//reqst to server           
     }).then(function (response) {
         $('#ulOutput').empty();
         response.forEach(function (restaurant) {
             $('#ulOutput').append(`
                <li id="liOutput">
                    Name: ${restaurant.name}
                    Type: ${restaurant.type}
                                     
                </li>
                `)
         })//end loop

     })//end .then
 }