function NoteControllerTest() {
    var controller = new NoteController(new Notelist());
    controller.getHTML();
    assert.isTrue(document.getElementById("note").innerHTML === `<ul><li><div><a href="#notes/0">My favourite drink i</a></div></li><li><div><a href="#notes/1">Jara is a Spanish la</a></div></li><li><div><a href="#notes/2">George cannot preten</a></div></li></ul>`)
};

NoteControllerTest();