// IFFE with commonly used functions
(function(){
    // call this function to check if capslock is on or not on key press
    function isCapslock(e){
        e = (e) ? e : window.event;
        var charCode = e.which||e.keyCode||false;
        var shifton =  e.shiftKey || (!!(e.modifiers & 4)) || false;
        if (charCode >= 97 && charCode <= 122 && shifton) {
            return true;
        }
        if (charCode >= 65 && charCode <= 90 && !shifton) {
            return true;
        }
        return false;
    }
})();