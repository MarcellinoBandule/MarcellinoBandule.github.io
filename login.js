function login(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  // Simulasi proses login
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Jika login berhasil, arahkan ke halaman index.html
  if (username === "username" && password === "password") {
      window.location.href = "index.html";
  } else {
      // Jika login gagal, tampilkan pesan kesalahan
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.innerText = "Username atau password salah. Silakan coba lagi.";
  }
}
