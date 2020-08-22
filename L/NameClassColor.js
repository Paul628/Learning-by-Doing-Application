//Name wird in Klassenfarbe dargestellt, das sind übrigens die Original Blizzard Farbcodes :)
function NameClassColor() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")

  for(var i = 1; i< s1.getLastRow()+1; i++){
    
  Klasse = s1.getRange(i,3).getValue()
  
  if(Klasse == "Todesritter"){
    s1.getRange(i,2).setBackground("#C41F3B")
  }
  else if(Klasse == "Dämonenjäger"){
    s1.getRange(i,2).setBackground("#A330C9")    
  }
  else if(Klasse == "Druide"){
    s1.getRange(i,2).setBackground("#FF7D0A")    
  }
  else if(Klasse == "Jäger"){
    s1.getRange(i,2).setBackground("#ABD473")    
  }
  else if(Klasse == "Magier"){
    s1.getRange(i,2).setBackground("#40C7EB")    
  }
  else if(Klasse == "Mönch"){
    s1.getRange(i,2).setBackground("#00FF96")    
  }
  else if(Klasse == "Paladin"){
    s1.getRange(i,2).setBackground("#F58CBA")    
  }
  else if(Klasse == "Prieser"){
    s1.getRange(i,2).setBackground("#FFFFFF")   
  }
  else if(Klasse == "Schurke"){
    s1.getRange(i,2).setBackground("#FFF569")    
  }
  else if(Klasse == "Schamane"){
    s1.getRange(i,2).setBackground("#0070DE")   
  }
  else if(Klasse == "Hexenmeister"){
    s1.getRange(i,2).setBackground("#8787ED")    
  }
  else if(Klasse == "Krieger"){
    s1.getRange(i,2).setBackground("#C79C6E")   
  }
    
  }
}

function NameClassColorLine() {
  var s1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Anmeldung")
  
  var i = s1.getLastRow()
   
  Klasse = s1.getRange(i,3).getValue()
  
  if(Klasse == "Todesritter"){
    s1.getRange(i,2).setBackground("#C41F3B")
    return;
  }
  else if(Klasse == "Dämonenjäger"){
    s1.getRange(i,2).setBackground("#A330C9")
    return;
  }
  else if(Klasse == "Druide"){
    s1.getRange(i,2).setBackground("#FF7D0A")
    return;
  }
  else if(Klasse == "Jäger"){
    s1.getRange(i,2).setBackground("#ABD473")
    return;
  }
  else if(Klasse == "Magier"){
    s1.getRange(i,2).setBackground("#40C7EB")
    return;
  }
    else if(Klasse == "Mönch"){
    s1.getRange(i,2).setBackground("#00FF96")
    return;
  }
  else if(Klasse == "Paladin"){
    s1.getRange(i,2).setBackground("#F58CBA")
    return;
  }
  else if(Klasse == "Prieser"){
    s1.getRange(i,2).setBackground("#FFFFFF")
    return;
  }
  else if(Klasse == "Schurke"){
    s1.getRange(i,2).setBackground("#FFF569")
    return;
  }
  else if(Klasse == "Schamane"){
    s1.getRange(i,2).setBackground("#0070DE")
    return;
  }
  else if(Klasse == "Hexenmeister"){
    s1.getRange(i,2).setBackground("#8787ED")
    return;
  }
  else if(Klasse == "Krieger"){
    s1.getRange(i,2).setBackground("#C79C6E")
    return;
  }
    
  
}
