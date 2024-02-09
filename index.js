document.addEventListener('DOMContentLoaded', function() {
    const inc = document.getElementById("inc");
    const dec = document.getElementById("dec");
    const rst = document.getElementById("rst");
    const one = document.getElementById("one");
  
    let count = 0;
  
    inc.onclick = function () {
      count++;
      one.textContent = count;
    }
  
    dec.onclick = function () {
      count--;
      one.textContent = count;
    }
  
    rst.onclick = function () {
      count = 0;
      one.textContent = count;
    }
  });
  