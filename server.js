const http = require('http');
const { Pool } = require('pg');

const port = process.env.PORT || 3000;

// ตรวจสอบว่ามี DATABASE_URL หรือไม่
const hasDbUrl = !!process.env.DATABASE_URL;

const pool = hasDbUrl ? new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
}) : null;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // กรณีไม่ได้ตั้งค่า DATABASE_URL บน Railway
  if (!hasDbUrl) {
    res.statusCode = 500;
    return res.end(`
      <h1 style="color: red;">❌ ยังไม่ได้ตั้งค่า DATABASE_URL</h1>
      <p>กรุณาไปที่ Railway -> แท็บ Variables แล้วเพิ่ม <b>DATABASE_URL</b></p>
    `);
  }

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();

    let html = `<h1>ฐานข้อมูลนักศึกษา (ทดสอบการเชื่อมต่อ)</h1>`;
    html += `<table border="1" cellpadding="10" style="border-collapse: collapse;">`;
    html += `<tr style="background-color: #f2f2f2;"><th>69319010129</th><th>jirapon phasuk</th></tr>`;

    result.rows.forEach(row => {
      const id = row.student_id || row.id || 'N/A';
      const name = row.student_name || row.name || 'N/A';
      html += `<tr><td>${id}</td><td>${name}</td></tr>`;
    });

    html += `</table>`;
    res.end(html);

  } catch (err) {
    console.error('Database Error:', err);
    res.statusCode = 500;
    res.end(`
      <h1 style="color: red;">เกิดข้อผิดพลาดในการเชื่อมต่อ!</h1>
      <p><b>รายละเอียด:</b> ${err.message || err}</p>
      <hr>
      <p>💡 <b>หากขึ้นrelation "students" does not exist:</b> แปลว่ายังไม่ได้สร้างตารางชื่อ students ใน PostgreSQL ครับ</p>
    `);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
