import React from "react";

const OurPolicy = () => {
    return (
        <div className="p-6 bg-pink-100 rounded-lg shadow-md max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">Kebijakan Kami</h2>
            <p className="text-gray-700 mb-4">
                Di Yulita Cakes, kami berkomitmen untuk menyajikan kue segar dan berkualitas tinggi dengan layanan terbaik. Harap tinjau kebijakan kami sebelum melakukan pemesanan.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 mt-4">Kebijakan Pemesanan</h3>
            <p className="text-gray-700">
                - Pemesanan harus dilakukan setidaknya <strong>24 jam</strong> sebelumnya untuk kue khusus. <br />
                - Pembayaran penuh diperlukan saat melakukan pemesanan. <br />
                - Setelah pesanan dibuat, perubahan tidak dapat dilakukan dalam waktu 12 jam sebelum pengiriman.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 mt-4">Kebijakan Pengiriman</h3>
            <p className="text-gray-700">
                - Kami mengirimkan dalam radius <strong>10 mil</strong> dari toko kami. <br />
                - Slot pengiriman tergantung pada ketersediaan, dan keterlambatan karena keadaan yang tidak terduga akan diinformasikan. <br />
                - Pelanggan harus memastikan seseorang tersedia untuk menerima kue pada waktu yang dipilih.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 mt-4">Pengembalian & Pembatalan</h3>
            <p className="text-gray-700">
                - Pembatalan yang dilakukan <strong>48 jam</strong> sebelum pengiriman berhak mendapatkan pengembalian dana penuh. <br />
                - Pesanan yang dibatalkan dalam waktu 24 jam sebelum pengiriman tidak dapat dikembalikan. <br />
                - Jika ada masalah dengan produk, harap hubungi kami dalam waktu <strong>2 jam</strong> setelah menerima kue.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 mt-4">Kebersihan & Kualitas</h3>
            <p className="text-gray-700">
                - Semua kue dibuat dalam lingkungan yang higienis dengan bahan berkualitas tinggi. <br />
                - Kami tidak menggunakan pengawet; kue sebaiknya dikonsumsi dalam waktu 24-48 jam untuk rasa terbaik. <br />
                - Informasi alergi tersedia berdasarkan permintaan.
            </p>

            <p className="text-gray-800 mt-6 font-medium">
                Terima kasih telah memilih Yulita Cakes! 🍰 Kami siap melayani Anda.
            </p>
        </div>
    );
};

export default OurPolicy;
