
// document.getElementById('app').innerHTML = "Howdy"
(function (exports) {
    function NoteController(list) {
        this.list = list
        this.list.addnote(new Note("Favourite drink: seltzer"))
        this.view = new NoteListView(this.list)
    }
    
    NoteController.prototype.getHTML = function() {
        document.getElementById('app').innerHTML = this.view.show();
    }
    exports.NoteController = NoteController
})(this);