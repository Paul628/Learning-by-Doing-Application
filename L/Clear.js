//Sollte klar werden, löscht alles auf Aktueller Stand auch die Legende. Ansonsten einfach in Aktueller Stand mal ctrl+a drücken und dann entf und dann sollte die Legende noch da sein und der Rest links davon leer (Verrückt)
function clear(){
 var s2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aktueller Stand")
 s2.clear()
}