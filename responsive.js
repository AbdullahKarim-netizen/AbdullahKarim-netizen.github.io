if (jQuery(window).width() < 1000) {
    function tampilkansidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'block'
        const tombol = document.querySelector('.hamburger-menu')
        tombol.style.display = 'none'
        const logo = document.querySelector('.logo')
        logo.style.display = 'none'
        const tomboldua =document.querySelector('.close-menu')
        tomboldua.style.display = 'inline'
        tomboldua.style.margin = '-10px 10px -50px 10px'
    }
    function tutupsidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
        const tombol = document.querySelector('.hamburger-menu')
        tombol.style.display = 'inline'
        const logo = document.querySelector('.logo')
        logo.style.display = 'inline-block'
        const tomboldua =document.querySelector('.close-menu')
        tomboldua.style.display = 'none'
    }
    function tutupsidebardua(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
        const tombol = document.querySelector('.hamburger-menu')
        tombol.style.display = 'inline'
        const logo = document.querySelector('.logo')
        logo.style.display = 'inline-block'
        const tomboldua =document.querySelector('.close-menu')
        tomboldua.style.display = 'none'
    }
}