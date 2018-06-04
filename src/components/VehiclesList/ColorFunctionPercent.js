export default function callback(cell, row, rowIndex, colIndex) { 
    const cellValue = cell.replace('%', '');
    if(cellValue< 46) {
        return { backgroundColor: '#930D0D' }
    } else if ( cellValue > 46 && cellValue < 47 ){
      return { backgroundColor: '#CD3333' }
    } else if ( cellValue > 47 && cellValue < 48 ){
      return { backgroundColor: '#CC7A00' }
    } else if ( cellValue >= 48 && cellValue < 50 ){
      return { backgroundColor: '#CC7A00' }
    } else if ( cellValue >= 50 && cellValue < 52 ){
      return { backgroundColor: '#849B24' }
    } else if ( cellValue >= 52 && cellValue < 54 ){
      return { backgroundColor: '#4D7326' }
    } else if ( cellValue >= 54 && cellValue < 56 ){
      return { backgroundColor: '#4099BF' }
    } else if ( cellValue >= 56 && cellValue < 60 ){
      return { backgroundColor: '#3972C6' }
    } else if ( cellValue >= 60 && cellValue < 65 ){
      return { backgroundColor: '#793DB6' }
    } else if ( cellValue >= 65){
      return { backgroundColor: '#401070' }
    }
}