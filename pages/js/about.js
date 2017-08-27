window.onload = function() {
    var winH = window.innerHeight;
    var piece = null;
    var con = document.getElementById('content')
    var cateCon = con.getElementsByTagName('div')
    var navBar = document.getElementById('navBar')

    console.log(window.location.pathname)
    if (window.location.pathname.indexOf('about') !== -1 ) {
        navBar.getElementsByTagName('li')[1].className =  'active';
    }
    
    navigator.userAgent.indexOf('Mobile') === -1 ? piece = 2 : piece = 3;

    for ( var i = 0; el = cateCon[i]; i++) {
        if (el.className.indexOf('col-sm-4') !== -1) {
            console.log(Math.ceil((winH - 51)/piece))
            el.style.height = Math.ceil((winH - 51) / piece) + 'px';
        }
    }
}