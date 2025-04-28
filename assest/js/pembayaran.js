const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
const diamond = urlParams.get("diamond")

document.getElementById("idPlayer").textContent = id || "-"
document.getElementById("jumlahDiamond").textContent = diamond || "-"

const metodeItems = document.querySelectorAll(".metode-item")
let selectedMetode = null

metodeItems.forEach((item) => {
    item.addEventListener("click", () => {
        metodeItems.forEach((i) => i.classList.remove("active"))
        item.classList.add("active")
        selectedMetode = item.textContent.trim()
    })
})

document.getElementById("btnBayar").addEventListener("click", () => {
    if (!selectedMetode) {
        Swal.fire({
            icon: "info",
            title: "Pilih Metode Pembayaran",
            text: "Silakan pilih salah satu metode pembayaran.",
            confirmButtonColor: "#ffaa00",
        })
        return
    }

    console.log("ID Player:", id)
    console.log("Diamond:", diamond)
    console.log("Metode Pembayaran yang Dipilih:", selectedMetode)

    Swal.fire({
        icon: "success",
        title: "Pembayaran Diproses",
        html: `
            <p>ID Player: <b>${id}</b></p>
            <p>Diamond: <b>${diamond}</b></p>
            <p>Metode: <b>${selectedMetode}</b></p>
        `,
        confirmButtonText: "Lanjut ke Halaman Sukses",
        confirmButtonColor: "gold",
    }).then(() => {
        const url = `sukses.html?id=${id}&diamond=${diamond}&metode=${encodeURIComponent(selectedMetode)}`
        window.location.href = url
    })
})