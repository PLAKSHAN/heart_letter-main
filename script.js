$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
  
    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
      // Function to create falling flowers
      function createFlowers() {
        var container = $('.flower-container');
        var numFlowers = 50; // Adjust the number of flowers as needed
    
        for (var i = 0; i < numFlowers; i++) {
          var flower = $('<div class="falling-flower">&nbsp;🌸</div>');
          flower.css({
            left: randomBetween(0, $(window).width()), // Random horizontal position
            animationDelay: randomBetween(0, 5) + 's' // Random animation delay
          });
          container.append(flower);
        }
      }

      // Function to create falling hearts
  function createHearts() {
    var container = $('.flower-container');
    var numHearts = 50; // Adjust the number of hearts as needed

    for (var i = 0; i < numHearts; i++) {
      var heart = $('<div class="falling-heart">&nbsp;&#x2764;</div>');
      heart.css({
        left: randomBetween(0, $(window).width()), // Random horizontal position
        animationDelay: randomBetween(0, 5) + 's' // Random animation delay
      });
      container.append(heart);
    }
  }
    
      // Call the function to create falling flowers
      createFlowers();
      createHearts();
  });
  