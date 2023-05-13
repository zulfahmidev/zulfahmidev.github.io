var lastScroll = 0;
var showSidebar = false;

$(document).ready(() => {
    new WOW().init();
    
    checkScroll();

    let fl = document.querySelector("#flash_layout");
    fl.classList.add("hide");
    setTimeout(() => {
        fl.style.display = "none";
    }, 300)
    
    document.onscroll = checkScroll;

    $('.navs li').click(() => {
        toggleSidebar();
    })

    $('.sidebarToggle').click(() => {
        toggleSidebar();
    })

    function toggleSidebar() {
        if (window.innerWidth < 800) {
            if (showSidebar) {
                navbar.classList.remove('showSidebar');
                $('.sidebarToggle').html("<i class='fa fa-bars'></i>")
                showSidebar = false;
            }else {
                navbar.classList.add('showSidebar');
                $('.sidebarToggle').html("<i class='fa fa-times'></i>")
                showSidebar = true;
            }
        }
    }
    
    function checkScroll() {
        let navbar = document.querySelector("#navbar");
        let scroll = window.scrollY;
        if (!showSidebar) {
            
            if (lastScroll > scroll) {
                if (!navbar.classList.contains('show')) {
                    navbar.classList.add('show');
                }
            }else {
                navbar.classList.remove('show');
            }
            lastScroll = scroll;
            if (window.scrollY > 0) {
                navbar.classList.add('scroll');
            }else {
                navbar.classList.remove('scroll');
            }
        }

        let sections = ["header", "about", "services", "portfolio", "contact"];

        sections.forEach((s,i) => {
            if (check(s)) {
                if (i>0) {
                    document.querySelectorAll(`#navbar .navs li`)[i-1].classList.remove('active');
                }
                document.querySelectorAll(`#navbar .navs li`)[i].classList.add('active');
                if (i+1 < sections.length) {
                    document.querySelectorAll(`#navbar .navs li`)[i+1].classList.remove('active');
                }
            }
        })

        function check(id) {
            let a = document.querySelector(`#${id}`).offsetTop;
            return scroll + 48 >= a;
        }
    }
    
    // navigator.geolocation.getCurrentPosition((a) => {
    //     console.log('a');
    // })

    let demo = `
            <iframe width="${window.innerWidth-17}" height="${$('#contact').height()}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=5.1142567,97.0841893&hl=es&t=k&z=18&amp;output=embed"></iframe>
        
        `;
    document.querySelector("#contact .map").innerHTML = demo;
})