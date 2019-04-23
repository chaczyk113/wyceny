window.onload = () => {
    var unbrakeConjuctions = (function () {
        var elements = document.querySelectorAll('p');
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
}