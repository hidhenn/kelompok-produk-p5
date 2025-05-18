function orderProduct(productName) {
    // Ganti nomor di bawah dengan nomor WhatsApp kamu (format internasional, tanpa "+" atau tanda lainnya)
    const phoneNumber = "6285691619547";
    
    // Pesan otomatis yang akan dikirim
    const message = `Halo, saya ingin memesan *${productName}*. Apakah masih tersedia?`;

    // Encode ke format URL
    const encodedMessage = encodeURIComponent(message);

    // Buat link WhatsApp
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Arahkan ke WhatsApp
    window.open(waLink, '_blank');
}