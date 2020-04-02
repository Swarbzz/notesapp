(function(exports) {
    function Notelist() {
        this.notes = []
    }

    Notelist.prototype.addnote = function(text) {
        var id = this.notes.length
        var note = new Note(id, text)
        this.notes.push(note);
    }

    Notelist.prototype.getNoteByID = function(id) {
        return this.notes[id = id]
    }

    Notelist.prototype.getIDNote = function(note) {
        return note.id
    }

    Notelist.prototype.getNotes = function() {
        return this.notes
    }

    exports.Notelist = Notelist;
})(this);