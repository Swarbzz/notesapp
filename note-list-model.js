(function(exports) {
    function Notelist() {
        this.notes = []
    }

    Notelist.prototype.addnote = function(text) {
        this.notes.push(text);
    }

    Notelist.prototype.getNoteByID = function(text) {
        return this.notes.map(note => note.text).indexOf(text)
    }

    exports.Notelist = Notelist;
})(this);