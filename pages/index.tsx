import { Avatar, Button, Image, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import { useRouter } from 'next/router';
import * as React from 'react';

const inter = Inter({ subsets: ['latin'] });
const dancing = Dancing_Script({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = React.useState(false);
  const router = useRouter();
  const query = router.query;
  const untuk = query.untuk as string;
  return (
    <main
      className={`bg-[#305A5F] ${inter.className} w-full  overflow-hidden ${
        show ? 'overflow-auto' : 'overflow-hidden max-h-screen'
      }`}
    >
      <div className={`max-w-md flex flex-col m-auto bg-[#305A5F] h-full `}>
        {/* Opening */}
        <div className="max-w-md  min-h-screen w-full bg-[url('/assets/bg2.png')] bg-cover bg-center relative flex flex-col  justify-center items-center">
          <Image className="absolute top-0" src="/assets/atas.png" alt="atas" />
          <Image
            className="absolute bottom-0"
            src="/assets/bawah.png"
            alt="atas"
          />

          <div className="flex flex-col text-white text-center gap-4">
            <h1 className="font-bold text-xl">Tasyakuran Khitan</h1>
            <div
              className={`flex flex-col font-bold text-2xl justify-center text-yellow-400 items-center ${dancing.className}`}
            >
              <h3>Sakha Virendra Shafwan</h3>
              <p>&</p>
              <h3>Gibran Aditya Ramadhan</h3>
            </div>

            <p className="font-bold">Sabtu, 08 Juli 2023</p>
            {untuk && (
              <>
                <p>Untuk</p>
                <p className="font-semibold">{untuk}</p>
              </>
            )}
            <Button
              as="a"
              href="#profile"
              onClick={() => setShow(true)}
              borderRadius="full"
            >
              Buka Undangan
            </Button>
          </div>
        </div>
        {/* Profile */}
        <div
          id="profile"
          className="bg-[#E4F6F8] py-10  gap-4 flex flex-col items-center justify-center p-4 text-center"
        >
          <h5 className={`font-bold text-3xl ${dancing.className}`}>
            Assalamu&apos;alaikum Wr Wb
          </h5>
          <p className="text-lg text-black/80 mb-5">
            Dengan Rahmat Allah yang Maha Kuasa Insha Allah kami akan
            melangsungkan Syukuran Khitan
          </p>

          {/* TODO Countdown */}

          <div className=" bg-white shadow-lg  shadow-black/30 rounded-xl p-4 flex flex-col gap-4 justify-center items-center">
            <Avatar
              className="shadow-xl"
              src="/assets/orang.jpeg"
              w="200px"
              h="200px"
            />
            <div
              className={`flex flex-col font-bold text-3xl justify-center items-center ${dancing.className}`}
            >
              <h3>Sakha Virendra Shafwan</h3>
              <p>&</p>
              <h3>Gibran Aditya Ramadhan</h3>
            </div>
            <p className=" font-light">
              Putra Ke-2 dan Ke-3 dari Bpk. Zainuddin & Ibu Yeni Widiastuti
            </p>
            <p className=" font-light">Di Khitan Pada: Sabtu, 24 Juni 2023</p>
          </div>
        </div>
        {/* Acara */}
        <div className="bg-[#E4F6F8]  py-10 gap-4 flex flex-col items-center justify-center p-4 text-center">
          <h5 className={`font-bold text-3xl ${dancing.className}`}>
            Undangan & Acara
          </h5>
          <p className="text-lg text-black/80 px-4 mb-5">
            Bahagia rasanya apabila anda berkenan hadir dan memberikan doa
          </p>

          <div className=" bg-white shadow-lg shadow-black/30 rounded-xl p-4 flex flex-col gap-4 justify-center items-center">
            <div>
              <p className="font-semibold text-xl">Sabtu, 08 Juli 2023</p>
              <p className="font-light text-xl">12:00 - 17:00 WIB</p>
            </div>
            <p className="font-light">
              Komplek Kodam Jaya Jl. Seroja 2, Blok K2 No. 169, RT. 008 RW.005,
              Kalideres Jakarta Barat
            </p>
          </div>
        </div>
        {/* Peta Lokasi */}
        <div className="bg-[#E4F6F8] py-16  gap-6 flex flex-col items-center justify-center p-4 text-center">
          <h5 className={`font-bold text-3xl ${dancing.className}`}>
            Peta Lokasi
          </h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.8021301919002!2d106.69639431476878!3d-6.157249995542105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDknMjYuMSJTIDEwNsKwNDEnNTQuOSJF!5e0!3m2!1sid!2sid!4v1688314676359!5m2!1sid!2sid"
            // width="600"
            // height="450"
            className="w-full h-[300px] shadow-lg shadow-black/40"
            // allowfullscreen={true}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <Button
            as="a"
            className="w-[80%]"
            borderRadius="full"
            href="https://goo.gl/maps/TYXsAhtYyJyDDuYu6"
            colorScheme="blue"
          >
            Buka Lokasi
          </Button>
        </div>
        {/* Kado Khitan */}
        {/* Protokol Kesehatan */}
        <div className="font-light bg-[#E4F6F8]  py-10 gap-4 flex flex-col items-center justify-center p-4 text-center">
          <p>
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan
            terimakasih{' '}
          </p>
          <p>Hormat Kami:</p>
          <p className="font-semibold">
            Kel. Bpk. Zainuddin & Ibu Yeni Widiastuti
          </p>
          <p className={`${dancing.className} text-2xl`}>
            Wassalamualaikum Warrahmatullahi Wabarakatuh
          </p>
        </div>
      </div>
    </main>
  );
}
