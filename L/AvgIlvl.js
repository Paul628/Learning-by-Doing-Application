//Sollte anhand der Farbe der 1. Spalte errechnen, welches durschnittliche ilvl eine gruppe hat. Rechnet nur mit integer also alles andere wird dieses Script sprengen
function avgilvl() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung")
  var sum = 0
  var count = 0
  n = s1.getLastRow()+1
  avg1(s1,s2,sum,count)
  avg2(s1,s2,sum,count)
  avg3(s1,s2,sum,count)

}

function avg1(s1,s2,sum,count){

  for(i=2;i<n;i++){
  if(s1.getRange(i,1).getBackground()=="#008000"){
   sum =sum+s1.getRange(i,8).getValue()
   count++
  } 
  }
  sum = sum/count
  s2.getRange(35, 11).setValue(sum)
}  

function avg2(s1,s2,sum,count){

  for(i=2;i<n;i++){
  if(s1.getRange(i,1).getBackground()=="#ffff00"){
   sum =sum+s1.getRange(i,8).getValue()
   count++
  } 
  }
  sum = sum/count
  s2.getRange(37, 11).setValue(sum)
}  

function avg3(s1,s2,sum,count){

  for(i=2;i<n;i++){
  if(s1.getRange(i,1).getBackground()=="#0000ff"){
   sum =sum+s1.getRange(i,8).getValue()
   count++
  } 
  }
  sum = sum/count
  s2.getRange(39, 11).setValue(sum)
}  