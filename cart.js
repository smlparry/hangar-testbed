// Shopping cart totals.
function subtotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total;
}

function applyDiscount(total, percent) {
  return total - (total * percent / 100);
}

module.exports = { subtotal, applyDiscount };
