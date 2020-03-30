(function(exports) {
    function Notelist() {
        this.notes = []
    }

    Notelist.prototype.addnote = function(text) {
        this.notes.push(text);
    }

    Notelist.prototype.getnotes = function() {
        return this.notes
    }

    exports.Notelist = Notelist;
})(this);