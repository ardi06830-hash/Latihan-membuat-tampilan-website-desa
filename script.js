document.addEventListener('DOMContentLoaded', () => {

  // ---- Helper: tampilkan toast notifikasi kecil ----
  function showToast(pesan){
    const toast = document.createElement('div');
    toast.className = 'toast-feedback';
    toast.textContent = pesan;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  // ---- Efek visual "tertekan" saat tombol/link aksi diklik ----
  document.querySelectorAll('.btn-kembali, .pagination a, .comment-box button, .kategori-list a, .tag-list a').forEach(el => {
    el.addEventListener('click', function(){
      this.classList.add('is-pressed');
      setTimeout(() => this.classList.remove('is-pressed'), 150);
    });
  });

  // ---- Link yang masih dekoratif (href="#") kasih toast, jangan lompat ke atas halaman ----
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      showToast('Maaf fitur belum tersedia');
    });
  });

  // ---- Form komentar ----
  const form = document.querySelector('.comment-box');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nama = form.querySelector('input[placeholder="Nama Pengirim *"]');
      if(nama && nama.value.trim() === ''){
        showToast('Nama pengirim wajib diisi!');
        return;
      }
      showToast('Komentar berhasil dikirim, namun masih belum tersampaikan kepada kami karena ini hanya demo tampilan.');
      form.reset();
    });
  }

});