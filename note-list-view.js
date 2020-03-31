(function(exports) {
    function NoteListView(list) {
        this.list = list
    };

    NoteListView.prototype.show = function() {
        var viewHTML = "<ul>"
        // this.list.notes.forEach(function() {
            viewHTML += '<li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li>'
        // })
        viewHTML += "</ul>"
        return viewHTML;
    };

    exports.NoteListView = NoteListView;
})(this);