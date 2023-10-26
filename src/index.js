function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span').textContent = price * quantity;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += updateSubtotal(product);
  })
  const total = document.querySelector('#total-value span').textContent = totalPrice;
  return totalPrice;
}
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
  calculateAll()
}

function createProduct() {
  const productNameInput = document.querySelector('#product-name');
  const productNameInputValue = productNameInput.value;
  productNameInput.value = '';
  const productPriceInput = document.querySelector('#product-price');
  const productPriceInputValue = productPriceInput.value;
  productPriceInput.value = '';
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
  <td class="name">
            <span>${productNameInputValue}</span>
          </td>
          <td class="price">$<span>${productPriceInputValue}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  document.querySelector('tbody').appendChild(newProduct);
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  })
});
