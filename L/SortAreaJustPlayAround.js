//Spielerei, nichts besonderes
function Sort() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test")
  
  var bereich = s1.getRange(8,8,s1.getLastRow(),1)
  
  bereich.sort([{column: 8, ascending: true}]);
  
  var bereich = s1.getRange("H8:I"+s1.getLastRow())
  
  bereich.sort([{column: 8, ascending: false},{column: 9, ascending: true}]);
}
