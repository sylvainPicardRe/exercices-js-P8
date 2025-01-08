const decimalInput = document.getElementById('decimalInput');

function convertToBinary() {
    const decimal = decimalInput.value;
    const binary = (decimal >>> 0).toString(2);
    document.getElementById('binaryResult').innerText = binary;
}