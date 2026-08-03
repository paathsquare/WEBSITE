<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
    <button class="menu-toggle" id="menuToggle" aria-label="Open navigation">
        ☰
    </button>
    <nav id="mainNav">
        <!-- Navigation links here -->
    </nav>
</header>

<!-- Other content -->

<!-- Existing script tags -->
<script src="assets/js/search.js"></script>
<script>
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if(menuToggle && mainNav){
    menuToggle.addEventListener('click',()=>{
        mainNav.classList.toggle('open');
    });
}
</script>
</body>
</html>