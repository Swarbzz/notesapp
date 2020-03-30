(function(exports) {
    function Note(text) {
      this.text = "Hi";
    };
  
    exports.Note = Note;

    Note.prototype.gettext = function() {
        return this.text;
    }
  })(this);