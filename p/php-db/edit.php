<?php
$id = $_GET['id'];
include 'db.php';

$query = "SELECT * FROM nasabah WHERE id = '$id'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Nasabah</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
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

        button {
            width: 100%;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
        }

        button.perbarui {
            background-color: #28a745;
            color: white;
            margin-bottom: 10px;
        }

        button.perbarui:hover {
            background-color: #218838;
        }

        button.kembali {
            background-color: #6c757d;
            color: white;
        }

        button.kembali:hover {
            background-color: #5a6268;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Edit Nasabah</h1>
        <form action="edit_process.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

            <label for="nama">Nama:</label>
            <input type="text" name="nama" id="nama" value="<?php echo $row['nama']; ?>" required>

            <label for="alamat">Alamat:</label>
            <textarea name="alamat" id="alamat" rows="4" required><?php echo $row['alamat']; ?></textarea>

            <label for="tanggal_drop">Tanggal Drop:</label>
            <input type="date" name="tanggal_drop" id="tanggal_drop" value="<?php echo $row['tanggal_drop']; ?>" required>

            <label for="keterangan">Keterangan:</label>
            <input type="text" name="keterangan" id="keterangan" value="<?php echo $row['keterangan']; ?>" required>

            <button type="submit" class="perbarui">Perbarui</button>
            <button type="button" class="kembali" onclick="location.href='index.php'">Kembali</button>
        </form>
    </div>
</body>
</html>
