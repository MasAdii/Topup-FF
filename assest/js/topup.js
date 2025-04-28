document.addEventListener('DOMContentLoaded', () => {
    const rotating = document.getElementById('rotating')
    const container = document.getElementById('container')

    setTimeout(() => {
        rotating.style.display = 'none'
        container.style.display = 'block'
    }, 2000)
})

const boxes = document.querySelectorAll('.box')
let selectedDiamond = null

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'))
        box.classList.add('active')
        selectedDiamond = box.querySelector('p').innerText.trim().split(' ')[0]
    })
})

const btnPembayaran = document.getElementById('btnPembayaran')
const playerIdInput = document.getElementById('playerId')

btnPembayaran.addEventListener('click', (e) => {
    e.preventDefault()

    const playerId = playerIdInput.value.trim()

    if (playerId.length < 7 || playerId.length > 10 || isNaN(playerId)) {
        Swal.fire({
            icon: 'warning',
            title: 'ID Tidak Valid',
            text: 'Masukkan ID Player 7-10 digit angka!',
            confirmButtonColor: '#ff7f00'
        })
        return
    }

    if (!selectedDiamond) {
        Swal.fire({
            icon: 'info',
            title: 'Diamond Belum Dipilih',
            text: 'Silakan pilih jumlah diamond dulu!',
            confirmButtonColor: '#ffa500'
        })
        return
    }

    window.location.href = `pembayaran.html?id=${playerId}&diamond=${selectedDiamond}`
})