//tura ve yazı sayılarını oluştur ve başlangıçta sıfırla
var tura = 0;
var yazi = 0;

//para döndürme butonu ve temizleme butonunu seçicez
var para = document.querySelector("#para");
var temizle = document.querySelector("#temizleme-butonu");
var dondurme = document.querySelector("#dondurme-butonu");

//para döndürme butonuna basıldığında
dondurme.addEventListener("click", (e) => {
  // rastgele 0 veya 1 sayısını seçmeli
  var i = Math.floor(Math.random() * 2);

  // para animasyonunu geçici olarak kapatmamız lazım
  para.style.animation = "none";

  if (i) {
    // eğer i 1 ise(yazı), 100 milisaniye sonra para döndürme tura animasyonunu ekle
    setTimeout(() => {
      para.style.animation = "havayaatmatura 3s forwards";
      tura++;
    }, 100);
  } else {
    // eğer i 0 ise(tura), 100 milisaniye sonra para döndürme yazı animasyonunu ekle
    setTimeout(() => {
      para.style.animation = "havayaatmayazi 3s forwards";
      yazi++;
    }, 100);
  }

  //istatistikleri güncelle ve butonu devre disi bırak
  setTimeout(guncelleme, 3000);
  disableButton();
});
//istatistikleri guncelleme fonksıyonu

function guncelleme() {
    document.querySelector("#tura").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi").textContent = `YAZI: ${yazi}`;
    
}

//butonu gecici olrak devre dısı bırakma

function disableButton() {
  dondurme.disabled = true;
  setTimeout(() => {
    dondurme.disabled = false;
  }, 2000);
}

//temizleme butonuna basıldığında

temizle.addEventListener("click", () => {
  //coin animasyonunu kapa
  para.style.animation = "none";
  //para döndürme tura ve yazı sayılarını sıfırla
  tura = 0;
  yazi = 0;
  guncelleme();
});
