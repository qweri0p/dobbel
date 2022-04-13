import './style.css'
import rs from './rules.json'
dorandomstuff()
function dorandomstuff() {
  const rng = Math.floor(Math.random()*6)
  const rng2 = Math.floor(Math.random()*3)
  console.log(`${rng}, ${rng2}`)
  document.querySelector('span').innerHTML = `Je hebt ${rng +1 + (1+rng2)/10} gedobbeld`
  document.querySelector('#how').innerHTML = rs.how[rng][rng2]
  document.querySelector('#what').innerHTML = rs.what[rng][rng2]
}
document.querySelector('#wat').addEventListener('click', dorandomstuff)
