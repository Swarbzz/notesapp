function testNote() {
   var note = new Note();
   var text = text;
   assert.isTrue(note.text === text);
  };
  
testNote();

function testaddnote() {
 var note = new Note(0, "Hi there");
//  var text = text;
 assert.isTrue(note.text === "Hi there");
}

testaddnote()


function testSingleNoteView() {
  var singlenoteview = new SingleNoteView(new Note(1, "My favourtie drink is cola"));
  assert.isTrue(singlenoteview.display() === "<div>My favourtie drink is cola</div>");
}

testSingleNoteView()

function testNoteListView() {
  var list = new Notelist();
  var note1 = ("Favourite food: pesto");
  var note2 = ("Favourite drink: seltzer")
  list.addnote(note1)
  list.addnote(note2)
  var view = new NoteListView(list)
  assert.isTrue(view.show() === "<ul><li><div><a href='#notes/0'>Favourite food: pest</a></div></li><li><div><a href='#notes/1'>Favourite drink: sel</a></div></li></ul>")
}

testNoteListView()

function testshowing20characters() {
  var list = new Notelist();
  list.addnote("Hello there - Obiwan");
  list.addnote("General Kenobi! - General Grevious");
  var view = new NoteListView(list)
  assert.isTrue(view.show() === `<ul><li><div><a href='#notes/0'>Hello there - Obiwan</a></div></li><li><div><a href='#notes/1'>General Kenobi! - Ge</a></div></li></ul>`)
}

testshowing20characters()

// function testgetIDNote() {
//   var list = new Notelist();
//   list.addnote(new Note("Favourite food: pesto"))
//   list.addnote("Favourite drink: seltzer")
//   console.log(list.getIDNote("Favourite food: pesto"))
//   assert.isTrue(list.getIDNote("Favourite food: pesto") === 0)
//   assert.isTrue(list.getIDNote("Favourite drink: seltzer") === 1)
// }
// testgetIDNote() 
