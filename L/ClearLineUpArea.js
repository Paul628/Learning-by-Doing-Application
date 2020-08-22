//Aufstellung
function clearArea() {
   var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung")
   s1.getRange(3,6,50,4).clear()
}
/*
function clearAktuell(){
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aktueller Stand")  
  s1.clear()
  
}*/
