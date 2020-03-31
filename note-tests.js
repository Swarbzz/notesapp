function testNote() {
   var note = new Note();
   var text = text;
   assert.isTrue(note.text === text);
  };
  
testNote();

function testaddnote() {
 var note = new Note();
 var text = text;
 assert.isTrue(note.text === text);
}

testaddnote()

function teststoringnotes() {
  var list = new Notelist();
  list.addnote("Hello there - Obiwan")
  list.addnote("General Kenobi! - General Grevious")
  assert.isTrue(list.notes[0] === "Hello there - Obiwan")
  assert.isTrue(list.notes[1] === "General Kenobi! - General Grevious")
}

teststoringnotes()

function testSingleNoteView() {
  var singlenoteview = new SingleNoteView(new Note("My favourtie drink is cola"))
  assert.isTrue(singlenoteview.display() === "My favourtie drink is cola")
}

testSingleNoteView()

function testNoteListView() {
  var list = new Notelist();
  // list.addnote("Favourite food: pesto")
  // list.addnote("Favourite drink: seltzer")
  var view = new NoteListView(list)
  console.log(view.show())
  assert.isTrue(view.show() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
}

testNoteListView()

