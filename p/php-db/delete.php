<?php
include('db.php');

// Ambil ID yang akan dihapus
$id = $_GET['id'];

// Hapus data berdasarkan ID
$sql = "DELETE FROM nasabah WHERE id = '$id'";
if ($conn->query($sql) === TRUE) {
    // Atur ulang ID agar urut
    $reset_id = "
        SET @num = 0;
        UPDATE nasabah SET id = (@num := @num + 1);
        ALTER TABLE nasabah AUTO_INCREMENT = 1;
    ";

    // Jalankan reset ID
    if ($conn->multi_query($reset_id)) {
        header("Location: index.php");
    } else {
        echo "Error saat mereset ID: " . $conn->error;
    }
} else {
    echo "Error saat menghapus data: " . $conn->error;
}

$conn->close();
?>
