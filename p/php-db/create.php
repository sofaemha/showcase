<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $tanggal_drop = $_POST['tanggal_drop'];
    $keterangan = $_POST['keterangan'];

    $sql = "INSERT INTO nasabah (nama, alamat, tanggal_drop, keterangan) 
            VALUES ('$nama', '$alamat', '$tanggal_drop', '$keterangan')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Nasabah</title>
    <style>
        /* Styling dasar untuk seluruh halaman */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .form-container {
            background: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 800px;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
            font-size: 1.8rem;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
        }

        input[type="text"], input[type="date"], textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }

        input[type="text"]:focus, input[type="date"]:focus, textarea:focus {
            border-color: #007bff;
            outline: none;
        }

        .button-group {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        button, a.button {
            display: inline-block;
            text-align: center;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 1rem;
            text-decoration: none;
            color: white;
            width: 48%; 
            border: none;
            cursor: pointer;
        }

        button {
            background-color: #28a745;
        }

        button:hover {
            background-color: #218838;
        }

        a.button {
            background-color: #6c757d;
        }

        a.button:hover {
            background-color: #5a6268;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Tambah Nasabah</h1>
        <form method="POST" action="">
            <label for="nama">Nama:</label>
            <input type="text" name="nama" id="nama" required>

            <label for="alamat">Alamat:</label>
            <textarea name="alamat" id="alamat" rows="4" required></textarea>

            <label for="tanggal_drop">Tanggal Drop:</label>
            <input type="date" name="tanggal_drop" id="tanggal_drop" required>

            <label for="keterangan">Keterangan:</label>
            <input type="text" name="keterangan" id="keterangan" required>

            <div class="button-group">
                <button type="submit">Simpan</button>
                <a href="index.php" class="button">Kembali</a>
            </div>
        </form>
    </div>
</body>
</html>
