// script.js file
 
function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
 
domReady(function () {
    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        console.log($("#sitio").val())
		var todos = Gun(['http://localhost:8765/gun', 'http://serveo.net:8765/gun']).get('todos')
		todos.set({sitio: $("#sitio").val(),detalle: decodeText})
		//alert("You Qr is : " + decodeText);
    }
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
	
});