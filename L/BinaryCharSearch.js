//Kernstück der binären Aufstellungssuche
function Dabei() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung")
  s1.getRange(1, 1, 100, 1).setBackground("White")
  s1.sort(2)
  
  Sortieren(s2,3)
  Sortieren(s2,22)
  Setup1(s1,s2)
  Setup2(s1,s2)
  Setup3(s1,s2)
  s1.sort(1)
}

//Setup 1
function Setup1(s1,s2){
  j = 1;
 
  while(j<5){
  for(var i = 3; i < 17; i++){
     if(s2.getRange(i,j).isBlank()){
      break;
    }
    
    Name = s2.getRange(i,j).getValue()
    BinarySearch(s1, Name, "Green", j)    
  }
     j++
  } 
}

//Setup 2
function Setup2(s1,s2){
    j = 1;
 
  while(j<5){
  for(var i = 22; i < 36; i++){
   
    if(s2.getRange(i,j).isBlank()){
      break;
    }
    
    Name = s2.getRange(i,j).getValue()
    BinarySearch(s1, Name,"Yellow", j)
  }
     j++
  } 
}

//Setup 3
function Setup3(s1,s2){
    j = 1;
 
  while(j<5){
  for(var i = 41; i < 55; i++){
   
    if(s2.getRange(i,j).isBlank()){
      break;
    }
    
    Name = s2.getRange(i,j).getValue()
    BinarySearch(s1, Name,"Blue", j)
  }
     j++
  } 
}

//Sortieren
function Sortieren(s2,z){
  var bereich = s2.getRange(z,1,14,1)
  bereich.sort([{column: 1, ascending: true}]);
  var bereich = s2.getRange(z,2,14,1)
  bereich.sort([{column: 2, ascending: true}]);
  var bereich = s2.getRange(z,3,14,1)
  bereich.sort([{column: 3, ascending: true}]);
  var bereich = s2.getRange(z,4,14,1)
  bereich.sort([{column: 4, ascending: true}]);
}

//Binär Suchen itertativ
function  BinarySearch(s1, Name, Farbe, j) {
    u = 0;
    o = s1.getLastRow(); 

   
   
  while (u <= o) { 
       m = parseInt((u+o)/2);

    if(s1.getRange(m, 2).getValue() == Name){
         s1.getRange(m, 1).setBackground(Farbe)
         RolleSuchen(s1,m,j)
         return 0; 
     }
    
    if(m>=2 && s1.getRange(m-1, 2).getValue() == Name){
         s1.getRange(m-1, 1).setBackground(Farbe)
         RolleSuchen(s1,m-1,j)
         return 0; 
     }
     
    if(s1.getRange(m+1, 2).getValue() == Name){
         s1.getRange(m+1, 1).setBackground(Farbe)
         RolleSuchen(s1,m+1,j)
         return 0; 
     }
     
    if(m>=2 && s1.getRange(m+2, 2).getValue() == Name){
         s1.getRange(m+2, 1).setBackground(Farbe)
         RolleSuchen(s1,m+2,j)
         return 0; 
     }
    
    if(m>=2 && s1.getRange(m-2, 2).getValue() == Name){
         s1.getRange(m-2, 1).setBackground(Farbe)
         RolleSuchen(s1,m-2,j)
         return 0; 
     }
       else
           if (Name < s1.getRange(m, 2).getValue()) 
               o = m-1;
           else
               u = m+1;  
  }    
  return -1;
}

function RolleSuchen(s1,z,j){

   for(var i = 4; i < 7; i++){
     Rolle=s1.getRange(z,i).getValue()
    
     if(Rolle=="Tank" && j==1)
     {
      s1.getRange(z, i).setBackground("#4a86e8") 
      break;
     }
     else if(Rolle=="DD (Nahkampf)" && j==2)
     {
      s1.getRange(z, i).setBackground("#ff0000") 
      break;
     }
     else if(Rolle=="DD (Fernkampf)" && j==3)
     {
      s1.getRange(z, i).setBackground("#ff0000") 
      break;
     }
     else if(Rolle=="Heiler" && j==4)
     {
      s1.getRange(z, i).setBackground("#00ff00")    
      break;
     }
   }
  
}