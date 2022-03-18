

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
