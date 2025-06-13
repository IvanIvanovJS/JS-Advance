function editElement(ref, match, replacer) {
    let h1Ref = ref.textContent;

    let result = h1Ref.replace(new RegExp(match, "g"), replacer);
    ref.textContent = result;
}