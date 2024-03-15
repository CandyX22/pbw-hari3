document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form dari mengirim data secara default
  
      const inputs = [
        document.getElementById('Name'),
        document.getElementById('Email'),
        document.getElementById('Password'),
        document.getElementById('Password confirmation')
      ];
  
      let isValid = true; // Flag untuk menandai validasi
  
      // Loop melalui setiap input untuk cek kekosongan dan validasi panjang kata sandi
      for (let input of inputs) {
        if (input.value.trim() === '') {
          input.style.borderColor = 'blue'; // Ubah border jadi biru jika kosong
          isValid = false; // Update flag validasi
          alert(`Isian kolom ${input.name} tidak boleh kosong`); // Tampilkan alert sesuai input yang kosong
          break; // Keluar dari loop jika sudah menemukan input kosong
        } else {
          input.style.borderColor = ''; // Reset border jika input terisi
        }
  
        if (input.id === 'Password' && input.value.length < 8) {
          input.style.borderColor = 'blue'; // Ubah border jadi biru jika panjang kata sandi kurang dari 8 karakter
          isValid = false; // Update flag validasi
          alert('password tidak boleh kurang dari 8')
          break;
        }
      }

      const inputPassword = document.getElementById("Password");
      const confirmPassword = document.getElementById("Password confirmation");

      if(confirmPassword.value != inputPassword.value){
        inputPassword.style.borderColor = 'blue';
        confirmPassword.style.borderColor = 'blue';
        isValid = false;
        alert('Password tidak sama!');
      }else{
        confirmPassword.style.borderColor = '';
        inputPassword.style.borderColor = '';
      }
  
      if (isValid) {
        // Jika semua input terisi dan valid, form bisa di-submit atau melakukan aksi selanjutnya
        alert('Pendaftaran berhasil!');
        // this.submit(); // Aktifkan ini untuk submit form jika sudah valid
      }
    });
  });