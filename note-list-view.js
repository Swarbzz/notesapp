(function(exports) {
    function NoteListView(list) {
        this.list = list
    };

    NoteListView.prototype.show = function() {
    //  return `<ul><li><div><a href=#notes/${note.id}>` + this.list.notes.map(note => note.text.slice(0,20)).join(`</a></div></li><li><div><a href=#notes/${note.id}>`) + `</a></div></li></ul>`
    var viewHTML = "<ul>"
    this.list.notes.forEach(function(note) {
        viewHTML += `<li><div><a href='#notes/${note.id}'>${note.text.slice(0,20)}</a></div></li>`
    })
    viewHTML += "</ul>"
    return viewHTML
    };

    exports.NoteListView = NoteListView;
})(this);