let itemsContainerElement = document.querySelector('.items-container');

itemsContainerElement.innerHTML = `
<div class="item-container">
<img src="images/image1.jpg" alt="item image" class="item-image" />
<div class="rating">4.5⭐ | 1.4k</div>
<div class="company-name">Carlton London</div>
<div class="item-name">Rhodium-Plated CZ Floral Studs</div>
<div class="price">
  <span class="current-price">Rs 606</span>
  <span class="original-price">Rs 1045</span>
  <span class="discount">(42% OFF)</span>
</div>
<button class="btn-add-bag">Add to Bag</button>
</div>
`;