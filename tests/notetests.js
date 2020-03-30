// import { Note } from "../note-model";

(function(exports) {
    function testNote() {
      var note = new Note(text)
      var text = note.text;
      console.log(text);
  
      if (note.text !== text) {
        throw new Error("Wrong");
      }else 
      console.log("This is green")
    };
  
    testNote();
  })(this);