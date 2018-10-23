export const msgId = randomString(8);

function randomString(length){
  let text = ''
  let possible = "abcdefghijklmnopqrstuvwxyz0123456789"
  for(let i=0;i<length;i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text;
}