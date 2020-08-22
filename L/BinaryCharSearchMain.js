//Main Script: Hier passiert somit das Wichtigste, wie Füllen der Spalten in Aufstellung und checken ob jemand schon dabei ist.
//Kleinbuchstaben und Sonderzeichen am Anfang eines Namens sind übrigens die Nemesis (daher auch capatiliize als Funktion :D )
//Sollte auch RL entweder anmelden lassen bzw einfach selbst den Namen hinzufügen mit Rolle oder so, da die binäre Suche sonst etwas gaga wird
function main(){
  
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung")
  
  s1.getRange(1, 4, 100, 3).setBackground("White")
  
  Dabei()
  clearArea()
  n = s1.getLastRow()+1
  a = Lieblingsrolle(s1,s2,n)
  Alternative(s1,s2,n,a)
  NichtDabei(s1)
  Kopieren()
  
}
function Lieblingsrolle(s1,s2,n) {
  t=3;
  h=3;
  m=3;
  r=3;

  for(i=2;i<n;i++){
  Rolle = s1.getRange(i,4).getValue()
  
  if(s1.getRange(i,1).getBackground()=="#ffffff"){
  
  if(Rolle=="Tank"){
     s1.getRange(i,2).copyTo(s2.getRange(t,6))
     t++
     }
  else if(Rolle=="Heiler"){
     s1.getRange(i,2).copyTo(s2.getRange(h,7))
     h++
     }  
  else if(Rolle=="DD (Nahkampf)"){
      s1.getRange(i,2).copyTo(s2.getRange(m,8))
     m++
     }
  else if(Rolle=="DD (Fernkampf)"){
      s1.getRange(i,2).copyTo(s2.getRange(r,9))
     r++
     }  
  }

  }
  RSortieren(s2,3,t-3,h-3,m-3,r-3)
  if(m>r){
   a=m 
  }
  else if(h>r && h>m){
   a=h 
  }
  else{
   a=r 
  }
  return(a)
}

function Alternative(s1,s2,n,a){
  
  t = a+3
  h = a+3
  m = a+3
  r = a+3
  
  s2.getRange(a+1,6).setValue("Möglichkeit nach 1. Alternative")
  s2.getRange(a+2,6).setValue("Tank")
  s2.getRange(a+2,7).setValue("Heiler")
  s2.getRange(a+2,8).setValue("DD Melee")
  s2.getRange(a+2,9).setValue("DD Range")
  
  for(i=2;i<n;i++){
  Rolle = s1.getRange(i,5).getValue()
  
  if(s1.getRange(i,1).getBackground()=="#ffffff"){
  
  if(Rolle=="Tank"){
     s1.getRange(i,2).copyTo(s2.getRange(t,6))
     t++
     }
  else if(Rolle=="Heiler"){
     s1.getRange(i,2).copyTo(s2.getRange(h,7))
     h++
     }  
  else if(Rolle=="DD (Nahkampf)"){
      s1.getRange(i,2).copyTo(s2.getRange(m,8))
     m++
     }
  if(Rolle=="DD (Fernkampf)"){
      s1.getRange(i,2).copyTo(s2.getRange(r,9))
     r++
     }   
  } 

  }
  RSortieren(s2,a+3,t-a-3,h-a-3,m-a-3,r-a-3)
  
}

function RSortieren(s2,z,t,h,m,r){
  if(t!=0){
    var bereich = s2.getRange(z,6,t,1)
    bereich.sort([{column: 6, ascending: true}]);
  }
  
  if(h!=0){
  var bereich = s2.getRange(z,7,h,1)
  bereich.sort([{column: 7, ascending: true}]);
  }
  
  if(m!=0){
  var bereich = s2.getRange(z,8,m,1)
  bereich.sort([{column: 8, ascending: true}]);
  }
  
  if(r!=0){
  var bereich = s2.getRange(z,9,r,1)
  bereich.sort([{column: 9, ascending: true}]);
  }
}

function NichtDabei(s1){
   
  for(i=2;i<n;i++){
    var j = 4
    if(s1.getRange(i,j).getBackground()=="#ffffff"){
         j++
           
    }
    if(s1.getRange(i,j).getBackground()=="#ffffff"){         
         j++
           
    }
    if(s1.getRange(i,j).getBackground()=="#ffffff"){       
         j++
          
    }
    if(j==7){
    s1.getRange(i, 4, 1, 3).setBackground("#ff9900")
    }
      
   }
}