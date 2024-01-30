const circle = document.querySelectorAll('.circle');

circle.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.target.getAttribute('src') == 'one.svg' ? e.target.src = 'two.svg' : e.target.src = 'one.svg'
        e.target.parentNode.classList.toggle('line')
    })
})