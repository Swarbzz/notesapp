var assert = {
    isTrue: function(testNote) {
        if(!testNote) {
            throw new Error("Asserstion failed: " + testNote + " is not truthy");

        
        }
        else console.log(testNote + " is truthy!");
    }
};