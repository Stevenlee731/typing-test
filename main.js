/* Users can view the letters to type */
var text = 'This is a typing test.'

for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span')
  $letter.textContent = text[i]
  document.body.appendChild($letter)
}
