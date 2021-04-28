document.getElementById('convert').addEventListener('click', convert)

function convert() {
  let results = document.getElementById('temp').value
  let finished = (results - 32) * .5556
  document.getElementById('result').innerHTML = Math.round(finished)
}