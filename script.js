const panels = document.querySelectorAll('.panel')


panels.forEach( panel => {

    panel.addEventListener('click', () => {



        removepanel()


        panel.classList.add('active');
    })



})

function removepanel(){
    panels.forEach(panel => {

            panel.classList.remove('active');

    })
}