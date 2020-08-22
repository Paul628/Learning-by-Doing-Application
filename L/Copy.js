//Kopiert die Anmeldung nach Akuteller Stand für Online-Ansicht (Wird nach AufstellungRollen selbtsändig ausgeführt)
function Kopieren(){

  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aktueller Stand")
  var range = s2.getRange("A1:E100");

  range.clear()
  s1.sort(1)
  NameClassColorLine()
  capitalizeLastRow(s1)
  
  s1.getRange(1,2,s1.getLastRow(),3).copyTo(s2.getRange(1,2))
  s1.getRange(1,4,s1.getLastRow(),3).copyTo(s2.getRange(1,3))
  
  
  var d = new Date()
  var currentTime = Utilities.formatDate(d, "GMT+2", "dd.MM  HH:mm:ss");;
  s2.getRange("A1").setValue(currentTime)
}