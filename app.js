document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const result = document.getElementById('result');
    const copyBtn = document.getElementById('copy-btn');
    const messageContainer = document.getElementById('message');

    let originalText = ''; // Variable para almacenar el texto original

    encryptBtn.addEventListener('click', function () {
        const text = input.value;
        originalText = text; // Guarda el texto original antes de encriptarlo
        const encryptedText = encryptText(text);
        result.textContent = encryptedText;
        messageContainer.style.display = 'block';
        copyBtn.style.display = 'inline-block';
    });

    decryptBtn.addEventListener('click', function () {
        const decryptedText = decryptText(result.textContent);
        input.value = decryptedText;
        result.textContent = originalText; // Muestra el texto original
        copyBtn.style.display = 'none';
    });

    copyBtn.addEventListener('click', function () {
        const textToCopy = result.textContent;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('¡Texto copiado al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    });

    function encryptText(text) {
        // Aquí utilizamos AES para encriptar el texto
        const encrypted = CryptoJS.AES.encrypt(text, 'secret key').toString();
        return encrypted;
    }

    function decryptText(text) {
        // Aquí utilizamos AES para desencriptar el texto
        const decrypted = CryptoJS.AES.decrypt(text, 'secret key').toString(CryptoJS.enc.Utf8);
        return decrypted;
    }
});
