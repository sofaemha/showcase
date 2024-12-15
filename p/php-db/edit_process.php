<?php
include 'db.php';

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$tanggal_drop = $_POST['tanggal_drop'];
$keterangan = $_POST['keterangan'];

$query = "UPDATE nasabah SET nama='$nama', alamat='$alamat', tanggal_drop='$tanggal_drop', keterangan='$keterangan' WHERE id='$id'";
if (mysqli_query($conn, $query)) {
    header("Location: index.php"); 
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
}
?>
