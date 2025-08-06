document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });


function hitung(){
    const PanjangKabel = parseFloat(document.getElementById('panjangkabel').value) || 0;
    const TitikSambung = parseFloat(document.getElementById('titiksambung').value) || 0;
    const TerminasiOTB = parseFloat(document.getElementById('terminasiotb').value) || 0;
    const Konektor = parseFloat(document.getElementById('konektor').value) || 0;
    const JenisKabel = document.getElementById('jeniskabel').value;

    //ubah meter ke kilometer
    const PanjangKabelKM=PanjangKabel/1000;

    if (JenisKabel === '655c') redamanKabel = 0.22;        
    else redamanKabel = 0.35;

    const PerhitunganLinkBudget = (0.15*TitikSambung + 0.15*TerminasiOTB + 0.5*Konektor + redamanKabel*PanjangKabelKM);

    document.getElementById('hasilhitung').value = PanjangKabel+" m / " + PerhitunganLinkBudget.toFixed(2) + " dB";
}