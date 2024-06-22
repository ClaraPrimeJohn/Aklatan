function generateCard() {
    // get values to the form
    const name = document.getElementById('name').value || 'NAME HERE';
    const membershipType = document.getElementById('membershipType').value || 'MEMBERSHIP TYPE HERE';
    const receiptNo = document.getElementById('receiptNo').value || '_______________________';
    const renewalDate = document.getElementById('renewalDate').value || '_______________________';

    // put info to the card
    document.getElementById('cardPreviewContainer').style.display = 'block';
    document.getElementById('namePreview').innerText = name;
    document.getElementById('membershipTypePreview').innerText = membershipType;
    document.getElementById('cardReceiptNo').innerText = receiptNo;
    document.getElementById('cardRenewalDate').innerText = renewalDate;

    // show download
    document.getElementById('downloadButton').style.display = 'inline-block';
}

function downloadCard() {
    html2canvas(document.getElementById('cardPreviewContainer')).then(function(canvas) {
        var imageData = canvas.toDataURL('image/png');

        var link = document.createElement('a');
        link.href = imageData;
        link.download = 'ymca_card.png';
        link.click();
    });
}
