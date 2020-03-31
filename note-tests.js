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


function testSingleNoteView() {
  var singlenoteview = new SingleNoteView(new Note("My favourtie drink is cola"))
  assert.isTrue(singlenoteview.display() === "<div>My favourtie drink is cola</div>")
}

testSingleNoteView()

function testNoteListView() {
  var list = new Notelist();
  var note1 = new Note("Favourite food: pesto");
  var note2 = new Note("Favourite drink: seltzer")
  list.addnote(note1)
  list.addnote(note2)
  var view = new NoteListView(list)
  console.log(view.show())
  assert.isTrue(view.show() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>")
}

testNoteListView()

function testshowing20characters() {
  var list = new Notelist();
  list.addnote(new Note("Hello there - Obiwan"));
  list.addnote(new Note("General Kenobi! - General Grevious"));
  var view = new NoteListView(list)
  assert.isTrue(view.show() === "<ul><li><div>Hello there - Obiwan</div></li><li><div>General Kenobi! - Ge</div></li></ul>")
}

testshowing20characters()

function testgetnoteID() {
  var list = new Notelist();
  list.addnote(new Note("Favourite food: pesto"))
  list.addnote(new Note("Favourite drink: seltzer"))
  assert.isTrue(list.getNoteByID("Favourite food: pesto") === 0)
  assert.isTrue(list.getNoteByID("Favourite drink: seltzer") === 1)
}
testgetnoteID() 
