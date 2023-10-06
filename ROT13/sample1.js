function transformToROTI13(stringToTransform) {
  return stringToTransform
    .split("")
    .map((character) => {
      const code = character.charCodeAt(character);

      if (code < 65 || code > 90) {
        return String.fromCharCode(code);
      } else if (code < 78) {
        return String.fromCharCode(code + 13);
      } else {
        return String.fromCharCode(code - 13);
      }
    })
    .join("");
}
