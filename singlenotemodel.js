(function(exports) {
    function SingleNoteView(note) {
        this.note = note
    }

    SingleNoteView.prototype.display = function() {
        return "My favourtie drink is cola"
    }

  exports.SingleNoteView = SingleNoteView;
})(this);