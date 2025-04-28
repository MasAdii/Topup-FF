document.addEventListener('DOMContentLoaded', () => {
    const topupBtn = document.getElementById('topupbtn')
    const beliBtn = document.querySelectorAll('.beli')

    topupBtn.addEventListener('click', () => {
        window.location.href = 'topup.html'
    })

    beliBtn.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'topup.html'
        })
    });
})


