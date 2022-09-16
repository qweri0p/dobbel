import './style.css'
import rules from './rules.json'
import $ from 'jquery'
function dorandomstuff() {
  const rng = Math.floor(Math.random()*6)
  const rng2 = Math.floor(Math.random()*3)
  console.log(`${rng}, ${rng2}`)
  $('span').html(`Je hebt ${rng +1 + (1+rng2)/10} gedobbeld`)
  $('#how').html(rules.how[rng][rng2])
  $('#what').html(rules.what[rng][rng2])
}
$('button').on('click', dorandomstuff)
