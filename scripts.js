window.onload = () => {
    var unbrakeConjuctions = (function () {
        var elements = document.querySelectorAll('p, li');
        Array.prototype.forEach.call(elements, function (el, i) {
            var textReplace = el.innerHTML;
            var lettersToReplace = ["a", "i", "o", "u", "w", "z", "A", "I", "O", "U", "W", "Z"];
            var arrayLength = lettersToReplace.length;
            for (var i = 0; i < arrayLength; i++) {
                var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
                var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
            }
            el.innerHTML = '';
            el.innerHTML = textReplace;
        });
    })();

    AOS.init();

    // Navbar location
    setNavbar();
}

window.addEventListener('resize', function (event) {
    setNavbar();
});

var setNavbar = function () {
    var headerRectangle = document.querySelector('.header-rectangle');
    var headerInfo = document.querySelector('.header-info');
    var navBar = document.querySelector('nav');

    navBar.style.margin = '5vmax 0';
    var headerInfoMarginTop = window.getComputedStyle(headerInfo).getPropertyValue("margin-top").replace('px', '');
    var headerRectangleOutlineOffset = Math.abs(window.getComputedStyle(headerRectangle).getPropertyValue("outline-offset").replace('px', ''));
    var navBarPos = ((headerRectangle.clientHeight - headerInfo.clientHeight - headerInfoMarginTop) - navBar.clientHeight) / 2;

    navBar.style.margin = '0 0';
    navBar.style.margin = `${navBarPos}px 0 ${navBarPos + headerRectangleOutlineOffset}px 0`;
}