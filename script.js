document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('.btn'),
        enabled = document.querySelector('#enabled'),
        disabled = document.querySelector('#disabled')

    btn.addEventListener('click', function () {
        btn.classList.add('active')

        if (btn.classList.contains('active')) {
            disabled.pause();
            disabled.currentTime = 0;
            enabled.play()

            btn.addEventListener('mouseleave', function () {
                enabled.pause();
                enabled.currentTime = 0;
                disabled.play()
                btn.classList.remove('active')
            })
        }
    })
})