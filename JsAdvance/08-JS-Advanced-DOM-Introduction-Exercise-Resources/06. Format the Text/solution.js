function solve() {
  let textArea = document.getElementById("input").value;
  let output = document.getElementById("output")
  let sentences = textArea.split(`.`).filter((el) => el.match(/\w+/g));
  let result = [];

  for (let element of sentences) {
    element = element.trim();

    if (element.length > 1) {
      result.push(element);

    }

    if (result.length === 3) {

      output.innerHTML += `<p>${result.join(`.`) + '.'}</p>`;
      result = [];
    }

  }
  if (result.length !== 0) {

    output.innerHTML += `<p>${result.join(`.`) + "."}</p>`;
  }


}