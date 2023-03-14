const colNamesConstant = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV'];
/**
* Returns the column name from the column number.
* @param {number} columnNumber the column number
* @return {string} Column Name. For example, A for 1.
*/
function getColumnStringByNumber(columnNumber){
  return colNamesConstant[columnNumber];
}
/**
* Returns the column name from the column index.
* @param {number} columnNumber the column index
* @return {string} Column Name. For example, A for 0.
*/
function getColumnStringByIndex(columnIndex){
  return colNamesConstant[columnIndex + 1];
}
/**
* Returns the column number from the column index.
* @param {string} columnName the column name.
* @return {number} Column index. For example, 0 for A.
* @depen
*/
function getColumnIndex(columnName){
  return getColumnNumber(columnName) - 1;
}
/**
* Returns the column number from the column name.
* @param {string} columnName the column name.
* @return {number} Column no. For example, 1 for A.
*/
function getColumnNumber(columnName){
  return colNamesConstant.indexOf(columnName);
}
