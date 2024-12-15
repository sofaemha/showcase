<?php
include 'db.php';

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$tanggal_drop = $_POST['tanggal_drop'];
$keterangan = $_POST['keterangan'];

$query = "INSERT INTO nasabah (nama, alamat, tanggal_drop, keterangan) VALUES ('$nama', '$alamat', '$tanggal_drop', '$keterangan')";
if (mysqli_query($conn, $query)) {
    header("Location: index.php"); 
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
}
?>
