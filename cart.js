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

// Bulk pricing: 10% off at 10 units, 25% off at 50.
function bulkDiscount(items) {
  const units = items.reduce((n, i) => n + i.qty, 0);
  let percent = 0;
  if (units > 10) percent = 10;
  if (units > 50) percent = 25;
  return applyDiscount(subtotal(items), percent);
}

module.exports = { subtotal, applyDiscount, bulkDiscount };

// TODO: handle fractional cents.
