//Normalerweise sollte jeder Name mit Großbuchstaben geschrieben werden aber sollte man vorher vergessen haben, das neue Dokument Anmeldung zu nennen.
//Dann einmal Capitalize ausführen für um die binäre Suche nicht zu zerschießen.
function capitalize(s1){
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  var Werte = s1.getRange(1, 2, s1.getLastRow(), 1).getValues() 
 
  for(i=0 ;i < s1.getLastRow(); i++){
    if(typeof Werte[i][0]== 'string'){   
    s1.getRange(i+1,2).setValue(Werte[i][0].substring(0,1).toUpperCase()+Werte[i][0].substring(1,40))
      }
  } 
}


function capitalizeLastRow(s1){
  
  var Wert = s1.getRange(s1.getLastRow(), 2).getValue()
  
  s1.getRange(s1.getLastRow(), 2).setValue(Wert.substring(0,1).toUpperCase()+Wert.substring(1,40))
}