
// document.getElementById('app').innerHTML = "Howdy"
(function (exports) {
    function NoteController() {
        this.list = new Notelist();
        this.list.addnote("My favourite drink is the blood of innocents")
        this.list.addnote("Jara is a Spanish lady of yore")
        this.list.addnote("George cannot pretend to be competent at much")
        this.view = new NoteListView(this.list)
    }
    
    NoteController.prototype.getHTML = function() {
        document.getElementById('note').innerHTML = this.view.show();
    }

    NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
       var thisNote = document.getElementById('single-note')
       var list = this.list

       window.addEventListener("hashchange", function(event) {
           event.preventDefault();
           var id = getNoteID(window.location)
           var singleNote = list.getNoteByID(id.slice(-1))
           thisNote.innerHTML = new SingleNoteView(singleNote).display()
       })
    }

    function getNoteID(location) {
        return (location.hash.split("#")[1])
    }

    NoteController.prototype.createNote = function() {
        var list = this.list
        window.addEventListener("submit", function(event) {
            event.preventDefault();
            var newNote = document.getElementById("createnote").value
            list.addnote(newNote)
            updateList(list);
            textAreaReset();
        })
        console.log(this.list)
    }
    function updateList(list) {
        document.getElementById('note').innerHTML = new NoteListView(list).show();
    }

    function textAreaReset() {
        document.getElementById('createnote').value = ""
    }


    exports.NoteController = NoteController
})(this);