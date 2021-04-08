var arrayimg= [
  "Nethra.jpeg",
    "Dhruv.jpeg", 
    "Mommy.jpeg", 
    "Daddy.jpeg"
  ];
  var arrayinfo= [
    "Nethra, the daughter, sister, and heart of the family.",
    "Dhruv, the son and the annoying brother of the family", 
    "Smitha, the mom and wife of the family. She is the best mom anyone could ask for!", 
    "Shravan, the husband and loving dad of the family and we all love him so much!"
  ];
  var i= 0
  function nexti(){ 
    document.getElementById("image1").src = arrayimg[i];
    document.getElementById("info1").innerHTML = arrayinfo[i];   i++;
    if (i==4){
      i=0
    }
  }