(function() {
    document.oncontextmenu = function() { return false; };
    document.onselectstart = function() { return false; };
    document.oncopy = function() { return false; };
    document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || // Ctrl + C
             e.keyCode === 86 || // Ctrl + V
             e.keyCode === 85 || // Ctrl + U
             e.keyCode === 117)) { // F6
            return false;
        } else {
            return true;
        }
    };
})();