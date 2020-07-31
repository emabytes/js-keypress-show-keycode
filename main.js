// Schreibe eine kleine App, die Dir den "key", den "keyCode" und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard drückst.

let numOutput = document.getElementById("num-output");
let keyOutput = document.getElementById("key");
let keyCodeOutput = document.getElementById("keycode");
let codeOutput = document.getElementById("code");

function showKey() {
    let key = event.key;
    let keyCode = event.keyCode;
    let code = event.code;

    keyOutput.innerHTML = key;
    keyCodeOutput.innerHTML = keyCode
    codeOutput.innerHTML = code
    numOutput.innerHTML = keyCode;
}

document.addEventListener("keypress", (event) => showKey(event))