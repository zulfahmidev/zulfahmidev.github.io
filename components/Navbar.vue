<template>
  <nav id="navbar">
    <div class="container">
        <div class="logo">
            <img src="/images/logo.svg" alt="">
        </div>
        <div class="sidebarToggle" @click="$emit('toggle')">
            <Icon name="fa6-solid:bars" />
            <!-- <Icon name="fa6-solid:file-invoice" /> -->
        </div>
        
        <ul class="navs">
            <li>
                <a href="#header" class="active" @click="$emit('hidesidebar')">Home</a>
            </li>
            <li>
                <a href="#about" @click="$emit('hidesidebar')">Tentang</a>
            </li>
            <li>
                <a href="#services" @click="$emit('hidesidebar')">Layanan</a>
            </li>
            <li>
                <a href="#portfolio" @click="$emit('hidesidebar')">Portfolio</a>
            </li>
            <li>
                <a href="#contact" @click="$emit('hidesidebar')">Hubungi</a>
            </li>
        </ul>
    </div>
</nav>
</template>