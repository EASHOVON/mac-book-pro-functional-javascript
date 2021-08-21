// Total Update Function
function updateTotal()
{
    let memoryCost = parseInt(document.getElementById('memory').innerText);
    let storageCost = parseInt(document.getElementById('storage').innerText);
    let deliveryCost = parseInt(document.getElementById('delivery').innerText);
    let basePrice = parseInt(document.getElementById('base-price').innerText);
    let subTotal = memoryCost + storageCost + deliveryCost + basePrice;
    document.getElementById('sub-total').innerText = subTotal;
    if (promo == true)
    {
        document.getElementById('final-total').innerText = subTotal - (subTotal * .2);
    } else
    {
        document.getElementById('final-total').innerText = subTotal;
    }
};


// Update Price

function updatePrice(id, price)
{
    document.getElementById(id).innerText = price;
    updateTotal();
};


// Memory Price Update for 8GB
document.getElementById('memory-8GB').addEventListener('click', function ()
{
    updatePrice('memory', 0);
});

// Memory Price Update for 16GB
document.getElementById('memory-16GB').addEventListener('click', function ()
{
    updatePrice('memory', 180);
});

// Storage Price Update for 256GB
document.getElementById('storage-256GB').addEventListener('click', function ()
{
    updatePrice('storage', 0);
});

// Storage Price Update for 512GB
document.getElementById('storage-512GB').addEventListener('click', function ()
{
    updatePrice('storage', 100);
});

// Storage Price Update for 1TB
document.getElementById('storage-1TB').addEventListener('click', function ()
{
    updatePrice('storage', 180);
});

// Delivery Cost Update for Free
document.getElementById('free-delivery').addEventListener('click', function ()
{
    updatePrice('delivery', 0);
});

// Delivery Cost Update for Quick
document.getElementById('cost-delivery').addEventListener('click', function ()
{
    updatePrice('delivery', 20);
});


// Bonus Part Promo code Apply
let promo = false;
document.getElementById('promo-button').addEventListener('click', function ()
{
    let promoCode = document.getElementById('promo-input').value;
    if (promoCode.toLowerCase() == 'stevekaku')
    {
        promo = true;
        document.getElementById('promo-button').innerText = 'Promo applied';
        document.getElementById('promo-button').setAttribute('disabled', true);
        document.getElementById('promo-input').value = '';
        updateTotal()
    } else
    {
        alert("Invalid promo code detected ");
    }
});