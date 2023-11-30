const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', function(e){
        removeActiveClasse();
        panel.classList.add('active');
    })
});

function removeActiveClasse(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}