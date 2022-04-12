import './style.css'
dorandomstuff()
function dorandomstuff() {
  const rng = Math.round(Math.random()*5)+1
  const rng2 = Math.ceil(Math.random()*3) / 10
  document.querySelector('span').innerHTML = rng+rng2
}
document.querySelector('button').addEventListener('click', dorandomstuff)