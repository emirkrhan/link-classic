import React, { useEffect, useRef, useState } from 'react'

function Home() {

  const [menu, setMenu] = useState(false);
  const menuRef = useRef();


  const openMenu = () => {
    setMenu(!menu);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menu]);


  return (
    <div className='w-full min-h-screen h-auto flex flex-col items-center'>
      <div className='w-full h-60 max-sm:h-44 bg-cover bg-krbanner bg-center relative'>
        <button ref={menuRef} onClick={openMenu} className='absolute w-10 h-10 top-8 right-12 max-sm:right-8 max-sm:top-6 bg-white rounded-full border-none outline-none'>
          <i class="fa-solid fa-ellipsis relative">
            {menu ? <div className='w-52 max-sm:w-60 h-auto bg-white absolute top-6 right-6 rounded-lg flex flex-col items-center py-2 z-50'>
              <div className='w-48 max-sm:w-56 w h-10 rounded-lg hover:bg-gray-200 font-dmsans text-sm flex items-center px-4'><a href="mailto:klasiklerwattpad@gmail.com" target="_blank" rel="noopener noreferrer">Bize mail gönder</a></div>
              <div className='w-48 max-sm:w-56 w h-10 rounded-lg hover:bg-gray-200 font-dmsans text-sm flex items-center px-4'>Bu sayfa hakkında</div>
              <div className='w-48 max-sm:w-56 w h-10 rounded-lg hover:bg-gray-200 font-dmsans text-sm flex items-center px-4'>İçeriği şikayet et</div>
            </div> : null}
          </i>
        </button>
        <div className='w-40 h-40 max-sm:w-36 max-sm:h-36 rounded-full absolute -bottom-20 left-0 right-0 m-auto bg-kr bg-cover border-8 border-white'></div>
      </div>

      <div className='w-full h-32 flex items-end justify-center font-dmsans text-3xl max-sm:text-2xl font-bold'>Klasikler | Türkiye</div>

      <div className='w-full h-8 flex items-center justify-center font-dmsans text-xl max-sm:text-lg max-sm:h-6 font-medium'>
        <a href='https://www.wattpad.com/user/ClassicsTR'>@ClassicsTR</a>
      </div>

      <div className='w-5/12 h-24 text-center flex items-center justify-center font-jakarta text-base text-gray-500 font-normal max-sm:w-11/12 max-sm:text-sm'>
        Bu profil, klasik yazarların hayatlarını ve eserlerini
        anmak ve okuma listeleri aracılığı ile klasik romanlara erişmeniz için bağlantı noktası görevi görür.
      </div>

      <div className='w-2/12 h-16 text-center flex items-center justify-evenly text-base text-gray-500 max-sm:w-6/12
      *:w-10 *:h-10 *:rounded-full *:bg-black *:text-white *:flex *:items-center *:justify-center'>
        <a href='https://www.instagram.com/wattyturk/' target="_blank" rel="noopener noreferrer">
          <div className='text-xl'><i class="fa-brands fa-instagram"></i></div>
        </a>

        <a href='https://x.com/wattpadturk?lang=en' target="_blank" rel="noopener noreferrer">
          <div className='text-lg'><i class="fa-brands fa-x-twitter"></i></div>
        </a>

        <a href='https://open.spotify.com/user/n8edy0ftk5ge7ly5qb9co40t9?si=jpBPuROXQK2m0yR--vZqHQ' target="_blank" rel="noopener noreferrer">
          <div className='text-lg'><i class="fa-brands fa-spotify"></i></div>
        </a>

        <a href='https://www.tiktok.com/@wattyturk' target="_blank" rel="noopener noreferrer">
          <div className='text-lg'><i class="fa-brands fa-tiktok"></i></div>
        </a>
      </div>

      <div className='w-full h-auto py-12 flex flex-col gap-10 max-sm:gap-4 items-center max-sm:py-6'>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://forms.gle/RhaRsnYwfu1RkWh97' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-black flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center justify-center text-white text-xl max-sm:text-base max-sm:w-3/12'>
                <i class="fa-solid fa-newspaper"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center text-white font-dmsans font-medium text-xl max-sm:text-sm max-sm:w-9/12'>Eser Öneri Formu</div>
            </div>
            <div className='w-16 h-16 bg-white rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/story/240520064-profil-rehberi' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center justify-center text-lg max-sm:text-base max-sm:w-3/12'>
                <i class="fa-solid fa-book-open"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Klasikler Profil Rehberi</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/story/361776281-yazarlar-antolojisi' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center justify-center text-lg max-sm:text-base max-sm:w-3/12'>
                <i class="fa-solid fa-feather"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Yazarlar Antolojisi</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://forms.gle/Qfkw1bpS42rSqhpS6' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Haftanın Seçkisi Formu (5-12 Haziran  )</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow fa-shake"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/625520157-trk-edebiyat-klasikleri' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Türk Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/650851164' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Alman Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/650850589' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Amerikan Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/650850766' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Fransız Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/650851698' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>İngiliz Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/650850912' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Rus Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/865638071' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Yunan Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/1040994699' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>İtalyan Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/1197032084' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>İspanyol Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/1533130386' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Macar Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

        <a className='w-3/5 h-16 max-sm:w-11/12' href='https://www.wattpad.com/list/1577237256' target="_blank" rel="noopener noreferrer">
          <div className='w-full h-20 max-sm:h-16 rounded-full bg-white oxshadow flex items-center justify-between'>
            <div className='w-4/5 h-16 flex'>
              <div className='w-2/12 h-16 flex items-center text-[#445d48] justify-center text-2xl max-sm:text-lg max-sm:w-3/12'>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className='w-10/12 h-16 flex items-center font-dmsans font-semibold text-xl max-sm:text-sm max-sm:w-9/12'>Japon Edebiyatı Klasikleri</div>
            </div>
            <div className='w-16 h-16 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-2xl max-sm:w-12 max-sm:h-12 max-sm:text-lg'>
              <i class="fa-solid fa-location-arrow"></i>
            </div>
          </div>
        </a>

      </div>

      <div className='w-full h-auto flex flex-col items-center'>
        <div className='w-3/5 py-4 font-semibold text-2xl max-sm:w-11/12 max-sm:text-xl'>Yeni Çıkanlar</div>


        <div className='w-3/5 max-sm:w-11/12 py-2 flex'>
          <div className='frame bg-osamu w-1/4 max-sm:w-1/3 bg-cover'></div>
          <div className='w-3/4 h-auto max-sm:w-2/3'>
            <div className='w-full h-auto px-8 font-semibold text-xl max-sm:text-base'>
              İnsanlığımı Yitirirken
            </div>
            <div className='w-full pl-8 pr-4 line-clamp-[9] max-sm:line-clamp-[6] max-sm:text-xs mt-2 text-justify'>O adamın üç fotoğrafını gördüm. Birincisi, çocukluk fotoğrafı diyebilirsiniz, on yaşlarında, etrafı birçok kadınla (şüphesiz kız kardeşleri ve kuzenleri) çevrili küçük bir çocuğu gösteriyordu. Çocuk kalın ipleri olan çizgili bir hakama giymişti ve bir havuzun başında ayakta duruyordu. Başı sola doğru otuz derecelik bir açıyla eğilmiş ve dişleri çirkin bir sırıtışla ortaya çıkmıştı. Çirkin mi? Bu kelimeyi sorgulayabilirsiniz, çünkü duyarsız insanlar (yani güzellik ve çirkinlik konularına kayıtsız olanlar) mekanik bir şekilde mülayim, boş bir ifadeyle "Ne kadar sevimli bir çocuk!" yorumunu yapacaktır.
              Genelde "sevimli" olarak adlandırılan şeyin bu çocuğun yüzünde, ona edilen iltifata bir nebze anlam katacak kadar mevcut olduğu doğrudur. Ancak, güzelliği neyin oluşturduğuna dair en ufak bir maruziyeti olan herhangi birinin, fotoğrafı eline tırmanan bir tırtılı kovar gibi bir kenara fırlatacağını ve derin bir tiksintiyle "Ne korkunç bir çocuk!" diye mırıldanacağını düşünüyorum.
            </div>
            <div className='w-full pt-6 pb-2 px-8'>
              <a href="https://www.wattpad.com/story/361933106-i̇nsanlığımı-yitirirken" className='py-3 px-8 bg-black rounded-full max-sm:text-sm text-white'>Hemen Oku</a>
            </div>
          </div>
        </div>


        <div className='w-3/5 max-sm:w-11/12 py-2 flex'>
          <div className='frame bg-halide w-1/4 max-sm:w-1/3 bg-cover'></div>
          <div className='w-3/4 h-auto max-sm:w-2/3'>
            <div className='w-full h-auto px-8 font-semibold text-xl max-sm:text-base'>
              Ateşten Gömlek
            </div>
            <div className='w-full pl-8 pr-4 line-clamp-[9] max-sm:line-clamp-[6] max-sm:text-xs mt-2 text-justify'>Ateşten Gömlek, cepheden, romanda anlatılan kişilerle omuz omuza yaşamış birinden gelen bir yapıt. Kurtuluş Savaşı'nın ateşten gömleğinin içinden çıkmış bir roman. Halide Edib Adıvar, her birini yakından tanıdığı roman kişilerini, yani silah arkadaşlarını içtenlikle, çağına ve yaşanan acı olaylara sorumlulukla tanıklık ederek anlatıyor. Bağımsızlık savaşımızı bütün gerçekliği ve canlılığıyla anlatan belki de en önemli roman, Ateşten Gömlek.
            </div>
            <div className='w-full pt-6 pb-2 px-8'>
              <a href="https://www.wattpad.com/story/138603697-ateşten-gömlek" className='py-3 px-8 bg-black rounded-full max-sm:text-sm text-white'>Hemen Oku</a>
            </div>
          </div>
        </div>

      </div>

      <div className='w-full h-32 flex items-center justify-center'>
        <div className='w-8/12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-sm max-sm:text-xs max-sm:h-10 max-sm:w-9/12'>© 2024 Klasikler | Türkiye, All Rights Reserved</div>
      </div>
      
    </div>
  )
}

export default Home