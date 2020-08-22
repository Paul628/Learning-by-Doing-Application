//Spielerei, hier passiert nichts Wichtiges
function FarbenZuWerten() {
  
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test")
  
  Farbe = s1.getRange(2,7).getBackground()
  
  for(i=1;i<s1.getLastRow()+1;i++){
    
    Farbe = s1.getRange(i,7).getBackground()
    if(Farbe !="#ffffff"){
      if(Farbe == "#00ff00"){
      s1.getRange(i, 7).setValue(1)
      }
      else if(Farbe == "#ffff00"){
      s1.getRange(i, 7).setValue(2)
      }
      else if(Farbe == "#ff9900"){
      s1.getRange(i, 7).setValue(3) 
      }
     
      //s1.getRange(i, 7).setValue(Farbe)
    }
    
  }
}

function WerteLöschen() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test")
  
  Farbe = s1.getRange(2,7).getBackground()
  
  for(i=1;i<s1.getLastRow()+1;i++){
  s1.getRange(i,7).setValue("")
  }
}

function InsertionSort(){
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test")
  
  for(i = 5; i<s1.getLastRow()+1;i++){
      wert = s1.getRange(i, 7).getValue()
      farbe = s1.getRange(i,7).getBackground()
     j = i
     while(j>1 && s1.getRange(j-1,7).getValue()>wert){
           
       s1.getRange(j,7).setValue(s1.getRange(j-1,7).getValue()) 
       s1.getRange(j,7).setBackground(s1.getRange(j-1,7).getBackground())
                    j = j-1
      s1.getRange(j,7).setValue(wert)
      s1.getRange(j,7).setBackground(farbe)
     }
  }
  }


function BubbleSort(){
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test")
  
  n = s1.getLastRow()-1

  do{
    newn = 1
    for (i=5; i<n-1; ++i){
      if (s1.getRange(i,7).getValue() > s1.getRange(i+1,7).getValue()){
        
        a = s1.getRange(i,7).getValue()
        b = s1.getRange(i+1,7).getValue()
        c = b
        b = a
        b = c
        s1.getRange(i,7).setValue(b)
        s1.getRange(i+1,7).setValue(a)
        
        fa = s1.getRange(i,7).getBackground()
        fb = s1.getRange(i+1,7).getBackground()
        fc = fb
        fb = fa
        fb = fc
        s1.getRange(i,7).setBackground(fb)
        s1.getRange(i+1,7).setBackground(fa)
        newn = i+1
      } // ende if
    } // ende for
    n = newn
  } while (n > 1)
  }