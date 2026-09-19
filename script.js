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

  // ---- Link yang masih dekoratif (href="#") kasih toast ----
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

  // ---- POPUP GAMBAR BERITA ----
  const imageWrappers = document.querySelectorAll('.berita-card .thumb');
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  if (imageModal && modalImage && modalClose) {

    imageWrappers.forEach(function (wrapper) {
      wrapper.style.cursor = 'pointer';
      wrapper.addEventListener('click', function () {
        const image = wrapper.querySelector('img');
        if (!image) return;
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    modalClose.addEventListener('click', function () {
      imageModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    imageModal.addEventListener('click', function (e) {
      if (e.target === imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

});