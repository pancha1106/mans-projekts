function isNewDay(last) {
  if (!last) return true;
  return new Date(last).toDateString() !== new Date().toDateString();
}

module.exports = { isNewDay };
