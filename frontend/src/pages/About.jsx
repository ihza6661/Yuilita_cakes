import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div className='pt-36'>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'TENTANG'} text2={'KAMI'} />

            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.bayu_sabil} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p><b>AS Denim</b> adalah merek asal Indonesia yang berfokus pada pembuatan jeans dengan kualitas standar industri. Kami menggunakan kain pilihan yang berasal dari berbagai negara seperti Jepang, Amerika Serikat, Thailand, Tiongkok, dan tentunya Indonesia. Dengan dilengkapi rangkaian mesin produksi berkualitas tinggi serta perhatian penuh terhadap detail di setiap produk yang kami buat. Desain kami terinspirasi dari interpretasi modern pakaian klasik. Sebagai pelengkap jeans, kami juga memproduksi jaket, chino, dan lainnya. Tidak seperti merek lain, setiap produk yang kami buat dengan bangga diproduksi di pabrik kami sendiri di Bandung, Jawa Barat.</p>
                    <b className='text-gray-800'>DIBUAT SESUAI DENGAN STANDAR INDUSTRI</b>
                    <p>Dalam proses menciptakan jeans terbaik, pabrik kami mengadopsi cara kerja, mesin produksi, dan pola pikir layaknya industri berkelanjutan. Menggabungkan mesin modern dengan teknik tradisional, menghasilkan produk yang presisi namun tetap personal dan eksklusif. Ditangani oleh pekerja terampil dan berpengalaman di sektor garmen, kami sangat percaya diri dengan kualitas yang dihadirkan oleh Wingman Denim.</p>
                    <b className='text-gray-800'>DENIM KUALITAS TERBAIK</b>
                    <p>Denim adalah 90% dari material yang kami gunakan, oleh karena itu kami hanya menggunakan denim terbaik yang dipilih secara selektif. Standar tinggi dan keinginan untuk memberikan kepuasan kepada konsumen mendorong kami untuk mencari denim terbaik hingga ke berbagai negara. Saat ini, produk Wingman Denim menggunakan material dari Jepang, Thailand, Amerika Serikat, dan Tiongkok. Kami juga terus mengembangkan denim buatan Indonesia dengan menerapkan standar tinggi yang telah kami pelajari.</p>

                    <b className='text-gray-800'>POTONGAN, KAIN, PENYELESAIAN</b>
                    <p>Ada 3 kunci utama dalam setiap pengembangan produk Wingman Denim:

                        **FIT** adalah tentang kenyamanan dan pesan yang ingin Anda sampaikan melalui pakaian yang Anda kenakan. Apakah Anda seorang pecinta gaya vintage, penggemar denim sejati, pria kasual, atau pekerja kantoran, semuanya tercermin dari potongan yang Anda pilih.

                        **FABRIC** adalah bahan yang akan bersentuhan langsung dengan kulit Anda, bagaimana pola pudar (fades) akan muncul seiring pemakaian, hingga daya tahan terhadap “siksaan” yang akan Anda berikan. Oleh karena itu, kami memberikan perhatian ekstra di sini. *“Jika Anda menginginkan pola pudar yang luar biasa, mulailah dengan denim yang luar biasa.”*

                        **FINISH** adalah bagaimana produk diselesaikan secara keseluruhan, cerita yang kami sampaikan, detail unik, dan fitur tambahan pada setiap karya yang kami hasilkan.</p>

                </div>
            </div>
            <div className="text-xl py-4">
                <Title text1={'KENAPA'} text2={'PILIH KAMI?'} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Jaminan Kualitas</b>
                    <p className='text-gray-600'>adalah komitmen kami untuk memastikan bahwa setiap produk atau layanan yang kami tawarkan memenuhi standar tertinggi. Melalui pengawasan yang ketat dan pengujian menyeluruh, kami menjaga agar setiap aspek kualitas terjaga, dari proses produksi hingga layanan purna jual. Dengan jaminan ini, Anda dapat merasa tenang bahwa produk yang Anda terima selalu sesuai harapan, aman, dan dapat diandalkan. Kepuasan Anda adalah prioritas kami, dan jaminan kualitas kami adalah bukti nyata dari dedikasi kami untuk memberikan yang terbaik.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Kemudahan & Kenyamanan</b>
                    <p className='text-gray-600'>adalah prioritas utama kami dalam memberikan layanan kepada Anda. Kami menghadirkan berbagai fitur dan proses yang dirancang untuk mempermudah pengalaman Anda, mulai dari navigasi yang intuitif hingga layanan pelanggan yang siap membantu kapan saja. Dengan fokus pada kenyamanan, kami memastikan bahwa setiap langkah dalam menggunakan layanan atau produk kami berjalan lancar dan tanpa hambatan. Nikmati kemudahan dalam setiap interaksi dan kenyamanan dalam setiap pilihan yang Anda buat bersama kami.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Layanan Pelanggan yang Luar Biasa</b>
                    <p className='text-gray-600'>kami didedikasikan untuk memberikan pengalaman terbaik kepada Anda. Tim kami siap membantu dengan cepat dan profesional dalam menjawab pertanyaan, menyelesaikan masalah, serta memberikan solusi yang tepat. Kami memahami bahwa kebutuhan Anda unik, dan kami selalu berusaha untuk mendengarkan serta memberikan layanan yang sesuai dengan harapan Anda. Dengan komitmen untuk kepuasan pelanggan, kami hadir sebagai mitra yang selalu siap mendukung dan memastikan kenyamanan Anda dalam setiap interaksi bersama kami.</p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default About
