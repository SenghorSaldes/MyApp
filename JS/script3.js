


// Compteur Chien

var counter_dog = localStorage.getItem('counter_dog ');
var initiValue = 0;

  if (!counter_dog ) {
    counter_dog  = initiValue;
  } else {
    counter_dog  = parseInt(counter_dog );
  }
  
  function renderCounterDog () {
    $('#counter_dog ').html(counter_dog );
  }
  
  $('.box1 ').on('click', function() {
    counter_dog ++;
  
    if (counter_dog === 0) {
      counter_dog  = initiValue;
    }
    
    localStorage.setItem('counter_dog ', counter_dog);
    renderCounterDog ();
    
  })


// Compteur Velo

    var counter_velo= localStorage.getItem('counter_velo ');

  if (!counter_velo ) {
    counter_velo  = initiValue;
  } else {
    counter_velo  = parseInt(counter_velo );
  }
  
  function renderCounterVelo () {
    $('#counter_velo ').html(counter_velo );
  }
  
  $('.box3 ').on('click', function() {
    counter_velo ++;
  
    if (counter_velo === 0) {
      counter_velo  = initiValue;
    }
    
    localStorage.setItem('counter_velo', counter_velo);
    renderCounterVelo ();
    
  })



  // Compteur Général 

  var counter_gene= localStorage.getItem('counter_gene ');

  if (!counter_gene ) {
    counter_velo  = initiValue;
  } else {gene
    counter_gene  = parseInt(counter_gene );
  }
  
  function renderCounterGene () {
    $('#counter_gene ').html(counter_gene );
  }
  
  $('.box3 ').on('click', function() {
    counter_gene ++;
  
    if (counter_gene === 0) {
      counter_gene  = initiValue;
    }
    
    localStorage.setItem('counter_gene', counter_gene);
    renderCounterGene ();
    
  })




    function clearAllContent() {
      window.localStorage.clear();
      counter_dog = initiValue;
      counter_velo = initiValue;
      counter_gene = initiValue;
      renderCounterDog();
      renderCounterVelo();
      renderCounterGene();
    }

   document.getElementById("show").onclick= function ShowAllContent() {
  
      alert( 'Velo: ' + counter_velo + ' Chien: ' + counter_dog  + ' Générale: ' + counter_gene);
    }
  


  
