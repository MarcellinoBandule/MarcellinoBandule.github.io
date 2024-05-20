// Fungsi untuk memeriksa apakah pengguna telah login atau belum
function userLoggedIn() {
  // Contoh sederhana: pengguna dianggap sudah login jika ada sesi atau cookie yang disetel
  return sessionStorage.getItem('loggedIn') === 'true';
}

// Menghubungkan form login dengan skrip pemrosesan login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir

  // Simpan data formulir
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Proses autentikasi (misalnya, mengirimkan permintaan ke server)
  // Di sini, Anda dapat menambahkan logika autentikasi yang sesuai dengan kebutuhan aplikasi Anda

  // Contoh sederhana: memeriksa apakah username dan password sesuai dengan nilai yang diharapkan
  if (username === 'admin' && password === 'admin123') {
      // Jika login berhasil, setel sesi atau cookie untuk menandai pengguna sudah login
      sessionStorage.setItem('loggedIn', 'true');

      // Redirect ke halaman index.html
      window.location.href = 'index.html';
  } else {
      // Jika login gagal, tampilkan pesan kesalahan
      document.getElementById('errorMessage').textContent = 'Username atau password salah';
  }
});
