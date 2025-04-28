const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const diamond = urlParams.get('diamond')
const metode = urlParams.get('metode')

document.getElementById('idPlayer').textContent = id || '-'
document.getElementById('jumlahDiamond').textContent = diamond || '-'
document.getElementById('metode').textContent = metode || '-'

const audio = document.getElementById('successSound')
audio.volume = 0.6
audio.play().catch(err => {
    console.log("Autoplay gagal, perlu klik user");
})