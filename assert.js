var assert = {
    isTrue: function(teststoringnotes) {
        if(!teststoringnotes) {
            throw new Error("Asserstion failed: " + teststoringnotes + " is not truthy");

        
        }
        else console.log(teststoringnotes + " is truthy!");
    }
};