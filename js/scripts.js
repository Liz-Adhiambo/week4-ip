

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
    