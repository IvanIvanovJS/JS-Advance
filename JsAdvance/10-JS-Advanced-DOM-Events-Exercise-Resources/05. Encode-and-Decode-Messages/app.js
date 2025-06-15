function encodeAndDecodeMessages() {
    let input = document.querySelectorAll("textarea")[0];
    let output = document.querySelectorAll("textarea")[1];
    let inputBtn = document.querySelectorAll("button")[0];
    let outputBtn = document.querySelectorAll("button")[1];

    let outText = ""
    inputBtn.addEventListener("click", () => {
        let text = input.value;

        for (let char of text) {

            outText += String.fromCharCode(char.charCodeAt() + 1);
        }

        output.value = outText;
        outText = ""
        input.value = ""

    })
    outputBtn.addEventListener("click", () => {
        let decodeText = output.value;
        for (const char of decodeText) {
            outText += String.fromCharCode(char.charCodeAt() - 1);
        }
        output.value = outText;
    })


}