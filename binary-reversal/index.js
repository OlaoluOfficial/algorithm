/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

 function binaryReversal(value) {

  let convert = value.toString(2).padStart(8,'0').split('').reverse().join('')
 
  return parseInt(convert, 2)
 
 }
 
 console.log(binaryReversal(45));
 
 
 module.exports = binaryReversal;
 
 