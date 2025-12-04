// JSON-like data for pricing cards
var plans = [
    {
        name: 'BASIC',
        price: 4,
        period: '/ month',
        badge: null,
        features: ['10 Projects', '10 Pages', '100 Mb Disk Space']
    },
    {
        name: 'STANDARD',
        price: 8,
        period: '/ month',
        badge: 'Save 15%',
        features: ['20 Projects', '20 Pages', '200 Mb Disk Space']
    },
    {
        name: 'ADVANCED',
        price: 12,
        period: '/ month',
        badge: null,
        features: ['40 Projects', '40 Pages', '500 Mb Disk Space']
    }
];

// Render pricing cards from data
var pricingContainer = document.getElementById('pricing-cards');

if (pricingContainer) {
    var cardsHtml = '';

    for (var i = 0; i < plans.length; i++) {
        var plan = plans[i];

        var badgeHtml = plan.badge
            ? '<span class="badge">' + plan.badge + '</span>'
            : '';

        var featuresHtml = '';
        for (var j = 0; j < plan.features.length; j++) {
            featuresHtml += '<li>' + plan.features[j] + '</li>';
        }

        cardsHtml +=
            '<div class="pricing-card">' +
                '<div class="card-header">' +
                    '<h2>' + plan.name + '</h2>' +
                    badgeHtml +
                '</div>' +
                '<div class="card-body">' +
                    '<div class="price">' +
                        '<span class="pricing-currency">$</span>' +
                        '<span class="price-amount">' + plan.price + '</span>' +
                        '<span class="price-period">' + plan.period + '</span>' +
                    '</div>' +
                    '<ul class="features-list">' +
                        featuresHtml +
                    '</ul>' +
                    '<button class="btn-buy">BUY NOW</button>' +
                '</div>' +
            '</div>';
    }

    pricingContainer.innerHTML = cardsHtml;
}

// Attach click handlers to all BUY NOW buttons
var buyButtons = document.getElementsByClassName('btn-buy');

for (var k = 0; k < buyButtons.length; k++) {
    buyButtons[k].addEventListener('click', function () {
        alert('Button clicked');
    });
}

// Active card highlight
var cardBodies = document.getElementsByClassName('pricing-card');

for (var m = 0; m < cardBodies.length; m++) {
    cardBodies[m].addEventListener('click', function () {
        // Remove the class from all cards first
        for (var n = 0; n < cardBodies.length; n++) {
            cardBodies[n].classList.remove('card-body-clicked');
        }
        // Then add it to the clicked card
        this.classList.add('card-body-clicked');
    });
}