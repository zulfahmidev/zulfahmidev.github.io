<template>
  <div>
    <FlashLayout/>
    <Navbar @toggle="setShowSidebar(!showSidebar)" @hidesidebar="setShowSidebar(false)" />
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Order/>
    <Contact/>
    <CTA/>
    <Footer/>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      lastScroll: 0,
      showSidebar: false,
      scroll: 0,
    }
  },
  methods: {
    select(selector) {
      return document.querySelector(selector)
    },
    setShowSidebar(isShow) {
      console.log(isShow)
      this.showSidebar = isShow
      let navbar = document.querySelector("#navbar");
      if (window.innerWidth < 800) {
          if (isShow) {
            navbar.classList.add('showSidebar');
          }else {
            navbar.classList.remove('showSidebar');
          }
      }
    },
    checkScroll() {
      let navbar = document.querySelector("#navbar");
      this.scroll = window.scrollY;
      if (!this.showSidebar) {
          
          if (this.lastScroll > this.scroll) {
              if (!navbar.classList.contains('show')) {
                  navbar.classList.add('show');
              }
          }else {
              navbar.classList.remove('show');
          }
          this.lastScroll = this.scroll;
          if (window.scrollY > 0) {
              navbar.classList.add('scroll');
          }else {
              navbar.classList.remove('scroll');
          }
      }

      let sections = ["header", "about", "services", "portfolio", "contact"];
      
      sections.forEach((s,i) => {
        
          if (this.check(s)) {
            // console.log(s)
              if (i>0) {
                  document.querySelectorAll(`#navbar .navs li`)[i-1].classList.remove('active');
              }
              document.querySelectorAll(`#navbar .navs li`)[i].classList.add('active');
              if (i+1 < sections.length) {
                  document.querySelectorAll(`#navbar .navs li`)[i+1].classList.remove('active');
              }
          }
      })
    },
    check(id) {
      let a = document.querySelector(`#${id}`).offsetTop;
      return this.scroll + 48 >= a;
    }
  },
  mounted() {
    this.checkScroll();
    
    let fl = document.querySelector("#flash_layout");
    fl.classList.add("hide");
    setTimeout(() => {
        fl.style.display = "none";
    }, 300)
    
    document.onscroll = () => {
      this.checkScroll()
    };

    // document.querySelector('.navs li').onclick = this.toggleSidebar();
    // document.querySelector('.sidebarToggle').onclick = this.toggleSidebar();
    let demo = `
            <iframe width="${window.innerWidth-17}" height="${this.select('#contact').offsetHeight}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=5.1142567,97.0841893&hl=es&t=k&z=18&amp;output=embed"></iframe>
        
        `;
    document.querySelector("#contact .map").innerHTML = demo;
  },
}
</script>