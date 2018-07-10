function descryptText(cipher, encryptedText) {
  const CONSTANT = 'abcdefghijklmnopqrstuvwxyz';
  let descryptedText = '';

  for(let index=0;index<encryptedText.length;index++) {
    // get the index of current char from cipher
    cipherIndex = cipher.indexOf(encryptedText.charAt(index));

    // find the character at position same as the cipherIndex
    // console.log(cipherIndex);
    // if(CONSTANT.charAt(cipherIndex)) {
    //   descryptedText += CONSTANT.charAt(cipherIndex);
    // }
    // else {
    //   descryptedText += encryptedText.charAt(index);
    // }

    descryptedText += CONSTANT.charAt(cipherIndex) ? CONSTANT.charAt(cipherIndex) :  encryptedText.charAt(index);
  }

  return descryptedText;
}

const cipher = 'oephjizkxdawubnytvfglqsrcm';
let encryptedText = 'knlfgnb, sj koqj o yvnewju';
let originalText  = descryptText(cipher, encryptedText);

console.log(originalText);
