//Generiert aus der untereinandergeschriebenen Aufstellung die klassische aus der Discord Nachricht
function append() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung")
  var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aufstellung2")
  namesHistory = ""
  
  j = 1;
  k = 0;
  while(j<5){
  for(var i = 2; i < 16; i++){
     if(s1.getRange(i,j).isBlank()){
      break;
    }
    currentN = s1.getRange(i,j).getValue()
    namesHistory = namesHistory+currentN+", "
  }
     namesHistory=textErsetzung(namesHistory)
     s2.getRange(j+k,2).setValue(namesHistory)
     namesHistory = ""
     j++
     k++
  } 


j = 1;
k = 0;
  while(j<5){
  for(var i = 21; i < 35; i++){
   
    if(s1.getRange(i,j).isBlank()){
      break;
    }
    currentN = s1.getRange(i,j).getValue()
    namesHistory = namesHistory+currentN+", "
  }
     namesHistory=textErsetzung(namesHistory)
     s2.getRange(j+10+k,2).setValue(namesHistory)
     namesHistory = ""
     j++
     k++
  } 


j = 1;
k = 0;
  while(j<5){
  for(var i = 40; i < 54; i++){
   
    if(s1.getRange(i,j).isBlank()){
      break;
    }
    currentN = s1.getRange(i,j).getValue()
    namesHistory = namesHistory+currentN+", "
  }
     namesHistory=textErsetzung(namesHistory)
     s2.getRange(j+20+k,2).setValue(namesHistory)
     namesHistory = ""
     j++
     k++
  } 

}



function textErsetzung(namesHistory){
  
     namesHistory=namesHistory.replace(/,\s*$/, "")
     namesHistory=namesHistory.replace(/:,/, ":")
     namesHistory=namesHistory.replace(/\s* ,/, ",")
     
  return namesHistory
}