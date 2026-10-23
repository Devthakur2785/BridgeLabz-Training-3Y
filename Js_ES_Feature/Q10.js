
"use strict";

function outer() {
    console.log("Outer count before assignment:", count);

    var count = 5;

    function inner() {
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner:", count);
}

outer();
