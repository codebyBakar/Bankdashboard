

  function show(item){
  let menu1 = document.querySelectorAll('.menu1')





      menu1.forEach(element =>{

 if(element.classList.contains(item)){
  element.classList.add('ppp')
 
 }else{
  element.classList.remove('ppp')
 
 }

      });

  }

