function negationValue(string, value) {
  let c = string.split('').length;
  return c & 1 ? !Boolean(value) : Boolean(value);
}
