function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;

  var column = 4 // A = 1, B = 2, D = 4, etc
  
  if (range.getColumn() === column) {
    var currentRow = range.getRow();
    var nextRow = currentRow + 1;
    
    // Define a cor de fundo para amarelo na próxima linha
    sheet.getRange(nextRow, 1, 1, sheet.getLastColumn()).setBackground("yellow");
    
    // Remove a cor de fundo amarela da linha atual
    sheet.getRange(currentRow, 1, 1, sheet.getLastColumn()).setBackground(null);
  }
}
