function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  
  // Verifica se a coluna editada é a coluna "D" (coluna 4)
  if (range.getColumn() == 4) {
    // Obtém a linha atual e a próxima linha
    var currentRow = range.getRow();
    var nextRow = currentRow + 1;
    
    // Define a cor de fundo para amarelo na próxima linha
    sheet.getRange(nextRow, 1, 1, sheet.getLastColumn()).setBackground("yellow");
    
    // Remove a cor de fundo amarela da linha atual
    sheet.getRange(currentRow, 1, 1, sheet.getLastColumn()).setBackground(null);
  }
}
