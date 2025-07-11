let keranjang = [];

function tambahKeKeranjang(namaProduk, hargaProduk) {
  keranjang.push({ nama: namaProduk, harga: hargaProduk });
  renderKeranjang();
}

function renderKeranjang() {
  const daftarKeranjang = document.getElementById("daftarKeranjang");
  const jumlahKeranjang = document.getElementById("jumlahKeranjang");
  const totalHargaEl = document.getElementById("totalHarga");

  // Kosongkan keranjang dulu
  daftarKeranjang.innerHTML = "";

  let total = 0;
  keranjang.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga.toLocaleString()}`;
    daftarKeranjang.appendChild(li);
    total += item.harga;
  });

  jumlahKeranjang.textContent = keranjang.length;
  totalHargaEl.textContent = total.toLocaleString();
}
