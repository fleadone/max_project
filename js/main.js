$(document).ready(function() {
  $('.categories>div').on('click', function() {
    $('.categ-descr>div').removeClass('active');
    $('.categories>div').removeClass('active-cat');
    $(this).addClass('active-cat');
    $('.categ-descr>div').eq($('.categories>div').index(this)).addClass('active');
  });

})
function initMap() {
        var uluru = {lat: 49.833052, lng: 24.042007};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
