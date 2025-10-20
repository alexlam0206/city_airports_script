function clearErrorRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  // Get all data from columns E and F at once for efficiency
  var rangeE = sheet.getRange(2, 5, lastRow - 1, 1).getValues(); // Column E
  var rangeF = sheet.getRange(2, 6, lastRow - 1, 1).getValues(); // Column F
  
  var cellsToClear = [];
  
  // Check each row
  for (var i = 0; i < rangeE.length; i++) {
    var statusValue = rangeE[i][0];
    var cityValue = rangeF[i][0];
    
    // If column E is "ERROR" and column F is not blank
    if (statusValue === "ERROR" && cityValue !== "") {
      cellsToClear.push(i + 2); // +2 because we started from row 2
    }
  }
  
  // Clear the cells
  for (var j = 0; j < cellsToClear.length; j++) {
    sheet.getRange(cellsToClear[j], 6).clearContent(); // Column F
  }
  
  Logger.log("Cleared " + cellsToClear.length + " cells");
}
