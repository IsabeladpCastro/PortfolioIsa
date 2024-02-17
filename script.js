let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e)
    {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark')
    }
)

let typed = new Typed('.auto-input',{
    strings: ['Computer Science Student!', 'Front-End Developer!', 'UI Designer!'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})