function solve() {
  let text = document.getElementById("text").value;
  let namingConv = document.getElementById("naming-convention").value;
  let result = "";
  let textAsArr = text.split(` `);

  if (namingConv === "Camel Case") {
    result = textAsArr[0].toLowerCase();
    for (let i = 1; i < textAsArr.length; i++) {
      let word = textAsArr[i].toLowerCase().split(``);
      word[0] = word[0].toUpperCase();
      word = word.join(``);
      result += word;
    }
  } else if (namingConv === "Pascal Case") {
    for (let i = 0; i < textAsArr.length; i++) {
      let word = textAsArr[i].toLowerCase().split(``);
      word[0] = word[0].toUpperCase();
      word = word.join(``);
      result += word;
    }
  } else {
    result = "Error!"
  }
  let transform = document.getElementById("result");
  transform.textContent = result;

}