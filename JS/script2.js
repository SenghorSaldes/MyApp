// compteur vélo

var counter_velo = localStorage.getItem('counter_velo');
var initiValue = 0;

  if (!counter_velo) {
    counter_velo = initiValue;
  } else {
    counter_velo = parseInt(counter_velo);
  }
  
  function renderCounterVelo() {
    $('#counter_velo').html(counter_velo);
  }
  
  $('.increase_velo').on('click', function() {
    counter_velo++;
  
    if (counter_velo === 0) {
      counter_velo = initiValue;
    }
    
    localStorage.setItem('counter_velo', counter_velo);
    renderCounterVelo();
  })
  
    renderCounterVelo();



    if (!counter_velo) {
      counter_velo = initiValue;
    } else {
      counter_velo = parseInt(counter_velo);
    }
    
    function renderCounterVelo() {
      $('#counter_velo').html(counter_velo);
    }
    
    $('.decrease_velo').on('click', function() {
      counter_velo--;
    
      if (counter_velo === 0) {
        counter_velo = initiValue;
      }
      
      localStorage.setItem('counter_velo', counter_velo);
      renderCounterVelo();
    })
    
      renderCounterVelo();
  
    
      function clearAllContent() {
          window.localStorage.clear();
          counter_velo = initiValue;
          renderCounterVelo();
        }
  
