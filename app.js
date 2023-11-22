function calculateLove() {

    // Get name values from inputs and text's
    var name1 = document.getElementById('inputName1').value;
    var name2 = document.getElementById('inputName2').value;
    var title1 = document.getElementById('number');
    var title2 = document.getElementById('title2');
    var span1 = document.getElementById('name1');
    var span2 = document.getElementById('name2');
    
    // Generate random love score
    var loveScore = Math.random();
    
    // Scale to percentage and round
    loveScore = Math.floor(loveScore * 100) + 1;
    
    // Return score as string
    var score = loveScore + '%';
    
    if (name1.length === 0 || name2.length === 0) {
        
        title1.innerHTML = 'Error fields is empty';
    
    } else {
        // Alert message with names and score
        title1.innerHTML = (score);
        span1.innerHTML = (name1.toUpperCase());
        span2.innerHTML = (name2.toUpperCase());
      }
    
    
      
    }
    
    
    
    // // Select buttom for ejecute modal
    const buttomModal = document.getElementById('btnClick');
    
    // Select the element of modal
    const modal = document.getElementById('article2');
    
    
    //Convert animation whitou space's to array
    const slideInLeft = [
      'animate__animated', 
      'animate__slideInLeft'
    ];
    
    //Convert animation whitou space's to array
    const slideInRight = [
      'animate__animated', 
      'animate__slideOutLeft'
    ];
    
    function showModal() {
      modal.classList.remove(...slideInRight);
      modal.classList.add(...slideInLeft);
      setTimeout(() => {
        modal.style.display = "block";
      }, 300);
    }
    
    buttomModal.addEventListener('click', () => {
      calculateLove();
      showModal();
    });
    
    const btnClose = document.getElementById('btnClose');
    
    btnClose.addEventListener('click', function() {
        modal.classList.remove(...slideInLeft);
        modal.classList.add(...slideInRight);
    
        //Wait sg for ejecute
        setTimeout(() => {
        modal.style.display = 'none';
        }, 900);
    });