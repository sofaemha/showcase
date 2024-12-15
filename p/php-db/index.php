<?php
include('db.php');

// Logika pencarian
$search = "";
if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $sql = "SELECT * FROM nasabah WHERE nama LIKE '%$search%'";
} else {
    $sql = "SELECT * FROM nasabah";
}

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Nasabah</title>
    <style>
        /* Styling dasar */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            margin: 20px;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .button-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .button-container a {
            text-decoration: none;
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
        }

        .button-container a:hover {
            background-color: #0056b3;
        }

        .search-container {
            display: flex;
            justify-content: flex-end;
        }

        .search-container input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 300px;
        }

        .search-container button {
            padding: 10px;
            margin-left: 5px;
            border: none;
            background-color: #28a745;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            text-align: center;
            padding: 10px;
        }

        th {
            background-color: #007bff;
            color: white;
        }

        button {
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        button.edit {
            background-color: #28a745;
            color: white;
        }

        button.delete {
            background-color: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Daftar Nasabah</h1>
    <div class="container">
        <div class="button-container">
            <a href="create.php">Tambah Nasabah</a>
            <div class="search-container">
                <form method="GET" action="index.php">
                    <input type="text" name="search" placeholder="Cari nama nasabah..." value="<?php echo htmlspecialchars($search); ?>">
                    <button type="submit">Cari</button>
                </form>
            </div>
        </div>
        <table>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Tanggal Drop</th>
                <th>Keterangan</th>
                <th>Action</th>
            </tr>
            <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['nama']; ?></td>
                <td><?php echo $row['alamat']; ?></td>
                <td><?php echo ($row['tanggal_drop'] == '0000-00-00') ? 'Tidak Ada Tanggal' : $row['tanggal_drop']; ?></td>
                <td><?php echo $row['keterangan']; ?></td>
                <td>
                    <button class="edit" onclick="location.href='edit.php?id=<?php echo $row['id']; ?>'">Edit</button>
                    <button class="delete" onclick="location.href='delete.php?id=<?php echo $row['id']; ?>'">Hapus</button>
                </td>
            </tr>
            <?php endwhile; ?>
        </table>
    </div>
</body>
</html>

<?php $conn->close(); ?>
