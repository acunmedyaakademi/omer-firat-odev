alert(
  "Siber Güvenlik Tehlikesi\n\n" +
    "Gizli bir istihbarat biriminde çalışan yetenekli bir siber güvenlik uzmanısınız. Bir gün, çalışma masanızda otururken, dünya çapında bir tehdit oluşturan karmaşık bir siber saldırının izini sürmekle görevlendirildiniz. İncelemeleriniz sonucunda, bu saldırının arkasında büyük bir suç örgütü olduğunu keşfettiniz. Bu örgüt, kritik altyapıları çökertmek ve büyük çapta bir kaos yaratmak amacıyla bir virüs geliştirmişti. Virüsün yayılmasını durdurmak ve suçluları adalete teslim etmek için derhal harekete geçmeye karar verdiniz."
);
let secim = Number(
  prompt(
    "1. Virüsün izini sürerek doğrudan saldırıyı durdurmaya çalışmak. \n\n 2. Daha fazla bilgi toplayarak ve örgüt hakkında ayrıntılı araştırma yaparak bir plan oluşturmak."
  )
);

if (secim === 1) {
  alert(
    "Doğrudan virüsün izini sürerek saldırıyı durdurmaya karar verdiniz. \n\n İlk ipucu sizi karanlık web üzerindeki gizli bir forumdan gelen bir mesajla karşılaştırdı. Mesaj, virüsün yaratıcılarının izlerini taşıyordu. Mesajın kaynağını bulmak için derinlemesine araştırma yapmanız gerektiğini fark ettiniz. Karanlık web üzerinde gezinirken dikkatli olmalı ve iz bırakmamaya özen göstermelisiniz."
  );
  let ilkIpucuSecim = Number(
    prompt(
      "1. Mesajın izini sürerek kaynağını bulmak. \n\n 2. Forumdaki diğer kullanıcılarla temasa geçerek daha fazla bilgi toplamak."
    )
  );
  if (ilkIpucuSecim == 1) {
    alert(
      "Mesajın izini sürmeye karar verdiniz: \n\n Uzun ve dikkatli bir takibin ardından, mesajın kaynağını belirlemeyi başardınız. İzler, siber suç örgütünün liderlerinden birine ait bir sunucuya götürdü. Sunucuyu hackleyerek içeride ne olduğunu keşfetmeye karar verdiniz. Ancak, bu süreçte dikkatli olmalısınız çünkü sunucu yüksek güvenlik önlemleriyle korunuyordu."
    );
    let sunucuHackSecim = Number(
      prompt(
        "1. Sunucuya doğrudan sızmak ve içerideki verileri ele geçirmek. \n\n 2. Sunucunun güvenlik sistemlerini inceleyerek zayıf noktalarını bulmaya çalışmak."
      )
    );
    if (sunucuHackSecim == 1) {
      alert(
        "Sunucuya doğrudan sızmaya karar verdiniz: \n\n Gelişmiş hackleme yetenekleriniz sayesinde sunucuya başarıyla sızdınız ve içerideki verilere ulaştınız. Veriler, örgütün planlarını ve virüsün tam olarak nasıl çalıştığını ortaya koyuyordu. Ancak, bu sırada sistemde bir alarm tetiklendi ve sunucu sahibine bir uyarı gönderildi."
      );
      let alarmTepkiSecim = Number(
        prompt(
          "1. Çabucak verileri indirip sunucudan çıkmak. \n\n 2. Alarmı etkisiz hale getirip araştırmaya devam etmek."
        )
      );
      if (alarmTepkiSecim == 1) {
        alert(
          "Verileri indirip hızlıca sunucudan çıkmaya karar verdiniz: \n\n Verileri başarılı bir şekilde indirdiniz ve sistemden çıkmadan önce izlerinizi temizlediniz. Ancak, alarm nedeniyle suç örgütü dikkatli olmaya başladı ve izlerini daha da gizlemeye çalıştı. Artık, örgütün planlarını bozacak kadar bilgiye sahipsiniz, fakat dikkatli olmalı ve sonraki adımlarınızı stratejik olarak planlamalısınız."
        );
        let sonrakiAdimSecim = Number(
          prompt(
            "1. İndirilen verileri analiz ederek örgütün liderlerini bulmaya çalışmak. \n\n 2. Güvenliğinizi sağlamak için izlerinizi tamamen gizleyip daha fazla bilgi toplamaya devam etmek."
          )
        );
        if (sonrakiAdimSecim == 1) {
          alert(
            "İndirilen verileri analiz etmeye karar verdiniz: \n\n Derinlemesine analiz sonucunda, suç örgütünün liderlerinin kimliklerini ve konumlarını belirlemeyi başardınız. Şimdi, polis ve diğer güvenlik güçleriyle iş birliği yaparak operasyonu sonlandırmaya hazırlanıyorsunuz. Operasyon başarılı olursa, sadece virüsün yayılmasını durdurmakla kalmayacak, aynı zamanda büyük bir suç örgütünü çökertmiş olacaksınız."
          );
        } else if (sonrakiAdimSecim == 2) {
          alert(
            "Güvenliğinizi sağlamak için izlerinizi tamamen gizlemeye karar verdiniz: \n\n Kendinizi güvende hissettiğinizde, suç örgütü hakkında daha fazla bilgi toplamaya devam ettiniz. Bu süreçte, örgütün farklı kolları ve faaliyetleri hakkında önemli bilgiler elde ettiniz. Artık, örgütün tamamını çökertmek için gerekli tüm bilgilere sahipsiniz ve büyük operasyonu planlamaya başlayabilirsiniz."
          );
        }
      } else if (alarmTepkiSecim == 2) {
        alert(
          "Alarmı etkisiz hale getirmeye karar verdiniz: \n\n Alarmı başarıyla devre dışı bıraktınız ve araştırmanıza devam ettiniz. Bu sayede, örgütün diğer planları ve bağlantıları hakkında daha fazla bilgiye ulaştınız. Ancak, zaman kaybetmeden sistemi terk etmeniz gerektiğini fark ettiniz. İzlerinizi silerek güvenli bir şekilde çıkmayı başardınız."
        );
        let sistemCikisSecim = Number(
          prompt(
            "1. İndirilen verilerle örgütü çökertmek için bir operasyon planlamak. \n\n 2. Daha fazla bilgi toplamak ve güvenliğinizi artırmak için hazırlık yapmak."
          )
        );
        if (sistemCikisSecim == 1) {
          alert(
            "Örgütü çökertmek için bir operasyon planlamaya karar verdiniz: \n\n Topladığınız verilerle büyük bir operasyon düzenleyerek suç örgütünü çökerttiniz. Bu operasyon sayesinde sadece virüs saldırısını durdurmakla kalmadınız, aynı zamanda birçok masum insanın zarar görmesini engellediniz. Başarınız, siber güvenlik dünyasında büyük bir takdir topladı."
          );
        } else if (sistemCikisSecim == 2) {
          alert(
            "Daha fazla bilgi toplamak ve güvenliğinizi artırmak için hazırlık yapmaya karar verdiniz: \n\n Ekstra bilgi toplama süreci boyunca, örgütün başka bir büyük saldırı planladığını keşfettiniz. Bu bilgi, size daha kapsamlı bir operasyon düzenleme fırsatı verdi ve örgütün tüm kollarını çökertmeyi başardınız. Bu sayede, gelecekteki potansiyel saldırıları da engellediniz."
          );
        }
      }
    } else if (sunucuHackSecim == 2) {
      alert(
        "Sunucunun güvenlik sistemlerini incelemeye karar verdiniz: \n\n Güvenlik sistemlerindeki zayıf noktaları buldunuz ve bu sayede iz bırakmadan sunucuya sızmayı başardınız. İçerideki verileri ele geçirerek örgütün planlarını deşifre ettiniz. Ancak, bu süreçte zaman kaybettiniz ve örgütün bazı üyeleri durumu fark etti."
      );
      let sunucuTepkiSecim = Number(
        prompt(
          "1. Verileri indirip hemen çıkmak. \n\n 2. Gizlice daha fazla bilgi toplamaya çalışmak."
        )
      );
      if (sunucuTepkiSecim == 1) {
        alert(
          "Verileri indirip hemen çıkmaya karar verdiniz: \n\n Verileri indirip izlerinizi temizleyerek güvenli bir şekilde sistemden çıktınız. Topladığınız bilgilerle örgütün liderlerine ulaşmayı başardınız ve büyük bir operasyon düzenleyerek onları yakaladınız."
        );
      } else if (sunucuTepkiSecim == 2) {
        alert(
          "Gizlice daha fazla bilgi toplamaya çalıştınız: \n\n Daha fazla bilgi toplamayı başardınız, ancak bu süreçte izleriniz fark edildi ve kaçmak zorunda kaldınız. Neyse ki, önemli bilgiler toplayarak örgütün planlarını bozmayı başardınız ve operasyonu başarılı bir şekilde tamamladınız."
        );
      }
    }
  } else if (ilkIpucuSecim == 2) {
    alert(
      "Forumdaki diğer kullanıcılarla temasa geçmeye karar verdiniz: \n\n Bazı kullanıcılar size önemli bilgiler sağladı ve örgütün diğer üyelerinin izlerini bulmanızı sağladı. Bu bilgilerle örgütün yerini belirleyip, onların operasyonlarını durdurmak için harekete geçtiniz."
    );
    let forumBilgiSecim = Number(
      prompt(
        "1. Toplanan bilgileri kullanarak doğrudan örgütün peşine düşmek. \n\n 2. Daha fazla bilgi toplayarak örgüt hakkında detaylı bir dosya hazırlamak."
      )
    );
    if (forumBilgiSecim == 1) {
      alert(
        "Doğrudan örgütün peşine düşmeye karar verdiniz: \n\n Toplanan bilgilerle örgütün izini sürüp, liderlerini yakalamayı başardınız. Bu sayede, büyük bir siber saldırıyı önlediniz ve suç örgütünü çökerttiniz."
      );
    } else if (forumBilgiSecim == 2) {
      alert(
        "Daha fazla bilgi toplayarak detaylı bir dosya hazırlamaya karar verdiniz: \n\n Ekstra bilgi toplama sürecinde, örgütün daha büyük bir saldırı planladığını keşfettiniz. Bu bilgilerle, büyük bir operasyon düzenleyerek suç örgütünün tamamını çökerttiniz ve gelecekteki saldırıları da önlemiş oldunuz."
      );
    }
  }
} else if (secim === 2) {
  alert(
    "Daha fazla bilgi toplayarak ve örgüt hakkında ayrıntılı araştırma yaparak bir plan oluşturmaya karar verdiniz. \n\n Araştırmalarınız sonucunda, örgütün liderlerinin kimliklerine ve faaliyetlerine dair önemli ipuçları elde ettiniz. Bu ipuçları sizi örgütün gizli bir toplantısına götürdü. Toplantıda, örgütün yeni bir saldırı planladığını öğrendiniz."
  );
  let bilgiArastirmaSecim = Number(
    prompt(
      "1. Toplanan bilgilerle hemen harekete geçip operasyon düzenlemek. \n\n 2. Daha fazla bilgi toplayarak operasyonun başarı şansını artırmak."
    )
  );
  if (bilgiArastirmaSecim == 1) {
    alert(
      "Hemen harekete geçmeye karar verdiniz: \n\n Güvenlik güçleriyle iş birliği yaparak örgütün gizli toplantısına baskın düzenlediniz ve suçluları yakaladınız. Bu sayede, büyük bir siber saldırıyı önlediniz ve birçok masum insanın zarar görmesini engellediniz."
    );
  } else if (bilgiArastirmaSecim == 2) {
    alert(
      "Daha fazla bilgi toplamaya karar verdiniz: \n\n Ekstra bilgi toplama sürecinde, örgütün daha büyük bir saldırı planladığını keşfettiniz. Bu bilgilerle, büyük bir operasyon düzenleyerek suç örgütünün tamamını çökerttiniz ve gelecekteki saldırıları da önlemiş oldunuz."
    );
  }
}
