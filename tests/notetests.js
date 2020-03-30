// import { Note } from "../note-model";

(function(exports) {
    function testNote() {
      var note = new Note()
  
      if (note.text !== "test note") {
        throw new Error("Wrong");
      }else 
      console.log("This is green")
    };
  
    testNote();
  })(this);