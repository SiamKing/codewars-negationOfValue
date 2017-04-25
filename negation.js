function negationValue(string, value) {
  return string.length & 1 ? !Boolean(value) : Boolean(value); 
}
