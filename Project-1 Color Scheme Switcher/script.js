const div = document.querySelectorAll('.myClass');

div.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const id = (e.currentTarget);
        const body = document.querySelector('body')
        const computedStyle = window.getComputedStyle(id);
        const actualColor = computedStyle.backgroundColor;
        body.style.backgroundColor = actualColor;
        
    })
})