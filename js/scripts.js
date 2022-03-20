$(document).ready(function() {
  $("#classic").click(function() {
      $(".pizzas").show();
      $(".tops").hide();
      $(".crusts").hide();
  })})





function switchTopping() {
  if (document.getElementById('toppings')) {

      if (document.getElementById('toppings').style.display == 'none') {
          document.getElementById('toppings').style.display = 'block';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'none';
      }
      else {
          document.getElementById('toppings').style.display = 'block';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'none';
      }
    }
  }

  function switchClassic() {
    if (document.getElementById('classic')) {
    
        if (document.getElementById('classic').style.display == 'none') {
            document.getElementById('toppings').style.display = 'none';
            document.getElementById('classic').style.display = 'block';
            document.getElementById('deluxe').style.display = 'none';
        }
        else {
            document.getElementById('toppings').style.display = 'none';
            document.getElementById('classic').style.display = 'block';
            document.getElementById('deluxe').style.display = 'none';
        }
      }
    }
    function switchDeluxe() {
      if (document.getElementById('deluxe')) {
    
          if (document.getElementById('deluxe').style.display == 'none') {
              document.getElementById('toppings').style.display = 'none';
              document.getElementById('classic').style.display = 'none';
              document.getElementById('deluxe').style.display = 'block';
          }
          else {
              document.getElementById('toppings').style.display = 'none';
              document.getElementById('classic').style.display = 'none';
              document.getElementById('deluxe').style.display = 'block';
          }
        }
      }
      
      $("#sub").click(function() {
        alert("We value your response");
    })