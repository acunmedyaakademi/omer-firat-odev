let hareketler = ["Taş", "Kağıt", "Makas"];
alert("Taş Kağıt Makas oyununa Hoşgeldiniz.!\nOyuna başlamak için lütfen tamam'a basıp seçim yapınız.");

let secim = prompt("Seçiminizi yapın: Taş, Kağıt veya Makas");
let rastgeleSayi = Math.floor(Math.random() * 3);
let bilgisayarHamlesi = hareketler[rastgeleSayi];

secim = secim.toLowerCase();
bilgisayarHamlesi = bilgisayarHamlesi.toLowerCase();

let mesaj;
if (secim === "taş") {
  if (bilgisayarHamlesi === "kağıt") mesaj = "Kazanamadınız. ";
  else if (bilgisayarHamlesi === "makas") mesaj = "Kazandınız. ";
  else mesaj = "Berabere. ";
} else if (secim === "kağıt") {
  if (bilgisayarHamlesi === "kağıt") mesaj = "Berabere. ";
  else if (bilgisayarHamlesi === "makas") mesaj = "Kaybettiniz. ";
  else mesaj = "Kazandınız. ";
} else if (secim === "makas") {
  if (bilgisayarHamlesi === "kağıt") mesaj = "Kazandınız. ";
  else if (bilgisayarHamlesi === "makas") mesaj = "Berabere. ";
  else mesaj = "Kaybettiniz. ";
} else {
  alert("Lütfen geçerli bir seçim yapınız!");
}

if (mesaj) alert(mesaj + "Karşı tarafın hamlesi: " + bilgisayarHamlesi.charAt(0).toUpperCase() + bilgisayarHamlesi.slice(1));
