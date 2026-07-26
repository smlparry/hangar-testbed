// Money formatting.
function formatCents(cents) {
  return "$" + (cents / 100).toFixed(2);
}

// Round to the nearest cent before display.
function round(amount) {
  return Math.round(amount * 100) / 100;
}

module.exports = { formatCents, round };
