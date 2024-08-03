const brandData = [
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/QvLQ91u.png',
        name: '',
        brandName: 'Answer\'s July Promo',
        pdfImage: 'pdfImage1.jpg',
        items: [
            { name: ' Answers Detailed Beef Patties Dog 4lb 00213 - AW02 ', cost: 10.00 },
            { name: ' Answers Detailed Chicken Patties Dog 4lb 00212 - AW03', cost: 12.50 },
            { name: ' Answers Detailed Pork Patties Dog 4lb 00214 - AW04', cost: 12.50 },
            { name: ' Answers Detailed Turkey Patties Dog 4lb 00272 - AW05', cost: 12.50 },
            { name: ' Answers Detailed Beef CARTON Dog 4lb 00210 - AW06', cost: 12.50 },
            { name: ' Answers Detailed Chicken CARTON Dog 4lb 00209 - AW07', cost: 12.50 },
            { name: ' Answers Detailed Pork CARTON Dog 4lb 00211 - AW08', cost: 12.50 },
            { name: ' Answers Detailed Turkey CARTON Dog 4lb 00274 - AW09', cost: 12.50 },
            { name: ' Answers Detailed Duck CARTON Dog 4lb 34215 - AW11', cost: 12.50 },
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/zPByOuh.png',
        name: '',
        brandName: 'Bocce\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    // Additional brands can be added here
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/kctcwc6.jpg',
        name: '',
        brandName: 'Fromm\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/9Mo06vX.png',
        name: '',
        brandName: 'My Perfect Pet\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/U7AqRea.png',
        name: '',
        brandName: 'Nutrisource\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/3KJvl3u.png',
        name: '',
        brandName: 'Open Farm\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/kugUs3G.png',
        name: '',
        brandName: 'Stella & Chewy\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
    {
        promoImage: 'https://i.imgur.com/1EOEzDh.png',
        logoImage: 'https://i.imgur.com/lo4FVvL.png',
        name: '',
        brandName: 'Weruva\'s July Promo',
        pdfImage: 'pdfImage2.jpg',
        items: [
            { name: 'Item 2A', cost: 8.00 },
            { name: 'Item 2B', cost: 14.50 }
        ]
    },
];

const ongoingBrandData = [
    {
        promoImage: 'https://i.imgur.com/2Fk1Cci.png',
        logoImage: 'https://i.imgur.com/kugUs3G.png',
        name: '',
        brandName: 'Brand A Ongoing Promo',
        pdfImage: 'pdfImage3.jpg',
        items: [
            { name: 'Ongoing Item A', cost: 15.00 },
            { name: 'Ongoing Item B', cost: 20.00 }
        ]
    },
    
    // Additional ongoing brands can be added here
];

const brandsGrid = document.getElementById('brands-grid');
const ongoingBrandsGrid = document.getElementById('ongoing-brands-grid');
const orderModal = document.getElementById('orderModal');
const promoImage = document.getElementById('promoImage');
const itemSelect = document.getElementById('item-select');
const quantityInput = document.getElementById('quantity');
const selectedItemsList = document.getElementById('selected-items-list');
const totalCostElement = document.getElementById('total-cost');
const storeNameInput = document.getElementById('storeName');
const contactInput = document.getElementById('contact');
const addItemButton = document.getElementById('addItemButton');
const generatePDFButton = document.getElementById('generatePDFButton');
const closeModal = document.getElementById('closeModal');

let selectedBrandData = null;
let selectedItems = [];

// Create brand elements for July Promotions
brandData.forEach((brand, index) => {
    const brandElement = document.createElement('div');
    brandElement.classList.add('brand');
    brandElement.innerHTML = `<img src="${brand.logoImage}" alt="${brand.name}" style="display:block; margin: auto;">`;
    brandElement.addEventListener('click', () => openModal(index, 'july'));
    brandsGrid.appendChild(brandElement);
});

// Create brand elements for Ongoing Promotions
ongoingBrandData.forEach((brand, index) => {
    const brandElement = document.createElement('div');
    brandElement.classList.add('brand');
    brandElement.innerHTML = `<img src="${brand.logoImage}" alt="${brand.name}" style="display:block; margin: auto;">`;
    brandElement.addEventListener('click', () => openModal(index, 'ongoing'));
    ongoingBrandsGrid.appendChild(brandElement);
});

function openModal(index, type) {
    selectedBrandData = (type === 'july') ? brandData[index] : ongoingBrandData[index];
    promoImage.src = selectedBrandData.promoImage;
    itemSelect.innerHTML = selectedBrandData.items.map(item => `<option value="${item.name}">${item.name}</option>`).join('');
    selectedItems = [];
    updateSelectedItems();
    updateTotalCost();
    orderModal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    orderModal.style.display = 'none';
});

addItemButton.addEventListener('click', () => {
    const selectedItemName = itemSelect.value;
    const selectedItem = selectedBrandData.items.find(item => item.name === selectedItemName);
    const quantity = parseInt(quantityInput.value, 10);

    const existingItem = selectedItems.find(item => item.name === selectedItemName);
    if (existingItem) {
        alert('Item already added. Please adjust the quantity in the selected items list.');
    } else {
        selectedItems.push({ ...selectedItem, quantity });
        updateSelectedItems();
        updateTotalCost();
    }
});

function updateSelectedItems() {
    selectedItemsList.innerHTML = '';
    selectedItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="border: 1px solid #ccc; padding: 5px;">${item.name}</td>
            <td style="border: 1px solid #ccc; padding: 5px;">${item.quantity}</td>
            <td style="border: 1px solid #ccc; padding: 5px;">$${item.cost.toFixed(2)}</td>
            <td style="border: 1px solid #ccc; padding: 5px; color: red; cursor: pointer;" onclick="removeItem(${index})">&times;</td>
        `;
        selectedItemsList.appendChild(row);
    });
}

function removeItem(index) {
    selectedItems.splice(index, 1);
    updateSelectedItems();
    updateTotalCost();
}

function updateTotalCost() {
    const totalCost = selectedItems.reduce((total, item) => total + item.cost * item.quantity, 0);
    totalCostElement.innerText = `Total Cost: $${totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

generatePDFButton.addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add header and sub-header
    doc.setFontSize(18);
    doc.text('Order Request', 10, 10);
    doc.setFontSize(14);

    // Use the brandName from selectedBrandData for the subheading
    doc.text(`${selectedBrandData.brandName}`, 10, 20);

    let startY = 30;
    const startX = 10;

    // Column widths
    const colWidths = [2.5, 60, 5, 10, 10]; // Adjusted widths: #, Description, Qty, Unit Price, Total
    const totalWidth = colWidths.reduce((a, b) => a + b, 0);

    const pageWidth = doc.internal.pageSize.getWidth();
    const tableColWidths = colWidths.map(width => (width / totalWidth) * pageWidth);

    doc.autoTable({
        head: [['#', 'Product Description', 'Qty', 'Unit Price', 'Total']],
        body: selectedItems.map((item, index) => [
            index + 1,
            item.name,
            item.quantity,
            `$${item.cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
            `$${(item.cost * item.quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
        ]),
        startY: startY,
        margin: { top: 10 },
        headStyles: { fillColor: [173, 216, 230] },
        columnStyles: {
            0: { cellWidth: tableColWidths[0] }, // Narrow column for #
            1: { cellWidth: tableColWidths[1.888] }, // Wide column for Product Description
            2: { cellWidth: tableColWidths[2] }, // Narrow column for Qty
            3: { cellWidth: tableColWidths[3] }, // Narrow column for Unit Price
            4: { cellWidth: tableColWidths[4] }  // Wider column for Total
        }
    });

    const tableHeight = doc.autoTable.previous.finalY;

    startY = tableHeight + 10;

    // Align the total cost to the right side of the PDF
    const totalCost = selectedItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
    const totalCostText = `Total Cost: $${totalCost.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    const totalCostTextWidth = doc.getTextWidth(totalCostText);
    doc.text(totalCostText, pageWidth - totalCostTextWidth - startX - 5, startY);

    startY += 30;

    // Store name and contact on the same row with different font for labels
    doc.setFontSize(12);
    doc.text('Store Name:', startX + 25, startY);
    doc.setFont('helvetica', 'bold');
    doc.text(storeNameInput.value, startX + 53, startY);
    doc.setFont('helvetica', 'normal');
    doc.text('Contact:', startX + 110, startY);
    doc.setFont('helvetica', 'bold');
    doc.text(contactInput.value, startX + 130, startY);

    doc.save('order-request.pdf');
});
