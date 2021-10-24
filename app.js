const mvquote = document.querySelector("#mvquote");

mvquote.addEventListener('mouseover', () =>{
    mvquote.textContent = 'The cake is a lie!';
    mvquote.style.fontStyle = 'italic';
    mvquote.style.color = '#666666';
})
mvquote.addEventListener('mouseout', () =>{
    mvquote.textContent = 'When life gives you lemons, you make lemonade!';
    mvquote.style.fontStyle = 'normal';
    mvquote.style.color = 'white';
})