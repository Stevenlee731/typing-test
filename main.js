/* Users can view the letters to type */
var text = 'This is a typing test.'

for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span')
  $letter.textContent = text[i]
  document.body.appendChild($letter)
}

// select first letter
var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')

var keyHandler = function (event) {
var $current = document.querySelector('.current')
var $currentCharacter = $current.textContent
  if (event.key === $currentCharacter) {
    $current.classList.remove('current')
    $current.nextSibling.classList.add('current')
  } else {
    $current.classList.add('wrong')
  }
}

// keypress event
document.addEventListener('keypress', keyHandler)
