import Stats from '../assets/js/stats'

function InitStats() {
  let stats: any = Stats()
  stats.setMode(0)
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = '0'
  stats.domElement.style.left = '0'
  //stats.domElement.style.width = '130px'
  let statsDiv: any = document.querySelector('#Stats-output')
  statsDiv.appendChild(stats.domElement)
  return stats
}
export default InitStats;
