function outerFunction(){
    var pii = {name: "Larry the Lobster"};
    console.log(pii)
    function innerFunction(){
        var pii = {ssn:34556433456665};
    }
}
outerFunction()