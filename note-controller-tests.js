function NoteControllerTest() {
    var controller = new NoteController(new Notelist());
    controller.getHTML();
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: sel</div></li></ul>")
};

NoteControllerTest();