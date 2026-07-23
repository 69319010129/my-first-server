const http = require('http');
const { Pool } = require('pg');

// 1. ตั้งค่าการเชื่อมต่อ DB (บังคับเปิด SSL สำหรับ Railway)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // จำเป็นสำหรับการเชื่อมต่อ PostgreSQL บน Railway
  }
});

const port = process.env.PORT || 3000;

// 2. สร้าง HTTP Server
const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    // ดึง Connection และคิวรีข้อมูล
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release(); // คืน Connection กลับเข้า Pool

    // ประกอบตาราง HTML
    let html = `<h1>ฐานข้อมูลนักศึกษา (ทดสอบการเชื่อมต่อ)</h1>`;
    html += `<table border="1" cellpadding="10" style="border-collapse: collapse;">`;
    html += `
      <tr style="background-color: #f2f2f2;">
        <th>69319010129</th>
        <th>jirapon phasuk</th>
      </tr>
    `;

    // แสดงข้อมูลแต่ละแถว (ดักรองรับทั้งแบบ student_id/student_name หรือ id/name)
    result.rows.forEach(row => {
      const id = row.student_id || row.id || 'N/A';
      const name = row.student_name || row.name || 'N/A';
      html += `<tr><td>${id}</td><td>${name}</td></tr>`;
    });

    html += `</table>`;
    res.end(html);

  } catch (err) {
    // แสดง Error ออกมาที่หน้าเว็บและ Console เพื่อให้แก้ไขได้ทันที
    console.error('Database Error:', err);
    res.statusCode = 500;
    res.end(`
      <h1 style="color: red;">เกิดข้อผิดพลาดในการเชื่อมต่อ!</h1>
      <p><b>ข้อความ Error:</b> ${err.message}</p>
      <hr>
      <p><b>คำแนะนำในการเช็ก:</b></p>
      <ul>
        <li>เช็กว่าได้ตั้งค่า <code>DATABASE_URL</code> ใน Railway แล้วหรือยัง</li>
        <li>เช็กว่ามีตารางชื่อ <code>students</code> อยู่ใน PostgreSQL จริงหรือไม่</li>
      </ul>
    `);
  }
});

// 3. เริ่มต้นรัน Server
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
