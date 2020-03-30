(function(exports) {
    function Notelist() {
        this.notes = []
    }

    Notelist.prototype.addnote = function(note) {
        this.notes.push(note);
    }

    Notelist.prototype.getnotes = function() {
        return this.notes
    }

    exports.Notelist = Notelist;
})(this);