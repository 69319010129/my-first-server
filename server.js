const http = require('http');
const { Pool } = require('pg');

const port = process.env.PORT || 3000;

// ตรวจสอบว่ามี DATABASE_URL หรือไม่
const hasDbUrl = !!process.env.DATABASE_URL;

const pool = hasDbUrl ? new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
}) : null;

// สไตล์ CSS สำหรับธีมโจรสลัด
const PIRATE_STYLES = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Pirata+One&family=Sarabun:wght@400;600&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #0d0a07 url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop') no-repeat center center fixed;
      background-size: cover;
      font-family: 'Sarabun', sans-serif;
      color: #f4e8c1;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .pirate-container {
      background: rgba(20, 15, 10, 0.88);
      border: 3px solid #c59b27;
      border-radius: 12px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.9), inset 0 0 15px rgba(197, 155, 39, 0.3);
      max-width: 800px;
      width: 100%;
      padding: 40px;
      text-align: center;
      backdrop-filter: blur(4px);
      position: relative;
    }

    .pirate-container::before {
      content: '🏴‍☠️';
      font-size: 3rem;
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      background: #140f0a;
      padding: 0 10px;
      border-radius: 50%;
      border: 2px solid #c59b27;
    }

    h1 {
      font-family: 'Pirata One', 'Cinzel Decorative', cursive;
      font-size: 2.8rem;
      color: #ffca28;
      text-shadow: 2px 2px 4px #000, 0 0 10px rgba(255, 202, 40, 0.5);
      letter-spacing: 2px;
      margin-top: 10px;
      margin-bottom: 25px;
    }

    .pirate-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin-top: 20px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #7a5c1e;
      background: rgba(35, 25, 15, 0.9);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    .pirate-table th {
      background: linear-gradient(180deg, #4a3512 0%, #291d0a 100%);
      color: #ffd700;
      font-family: 'Cinzel Decorative', serif;
      font-size: 1.1rem;
      padding: 16px;
      border-bottom: 2px solid #c59b27;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .pirate-table td {
      padding: 14px 18px;
      border-bottom: 1px solid rgba(197, 155, 39, 0.2);
      color: #e0d0b0;
      font-size: 1.05rem;
    }

    .pirate-table tr:last-child td {
      border-bottom: none;
    }

    .pirate-table tr:hover {
      background: rgba(197, 155, 39, 0.15);
      transition: background 0.3s ease;
    }

    .captain-row {
      background: rgba(197, 155, 39, 0.2) !important;
      font-weight: bold;
      color: #fff !important;
    }

    .error-box {
      background: rgba(80, 10, 10, 0.85);
      border: 2px solid #ff4444;
      border-radius: 8px;
      padding: 25px;
      margin-top: 15px;
      color: #ffcccc;
      text-align: left;
    }

    .error-box h1 {
      color: #ff5555;
      font-size: 2rem;
      margin-top: 0;
    }

    .error-box p {
      margin-bottom: 10px;
      line-height: 1.6;
    }

    .badge {
      display: inline-block;
      background: #c59b27;
      color: #140f0a;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: bold;
    }
  </style>
`;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // กรณีไม่ได้ตั้งค่า DATABASE_URL บน Railway
  if (!hasDbUrl) {
    res.statusCode = 500;
    return res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pirate DB Error</title>
        ${PIRATE_STYLES}
      </head>
      <body>
        <div class="pirate-container">
          <div class="error-box">
            <h1>❌ หาสมบัติไม่พบ! (ไม่ได้ตั้งค่า DATABASE_URL)</h1>
            <p>กัปตัน! ท่านยังไม่ได้ตั้งค่าแผนที่สมบัติ กรุณาไปที่ <b>Railway</b> -> แท็บ <b>Variables</b> แล้วเพิ่ม <span class="badge">DATABASE_URL</span></p>
          </div>
        </div>
      </body>
      </html>
    `);
  }

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();

    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>สมุดรายชื่อลูกเรือโจรสลัด</title>
        ${PIRATE_STYLES}
      </head>
      <body>
        <div class="pirate-container">
          <h1>⚓ สมุดรายชื่อลูกเรือโจรสลัด 🏴‍☠️</h1>
          <table class="pirate-table">
            <thead>
              <tr>
                <th>รหัสนักศึกษา</th>
                <th>ชื่อ-นามสกุล</th>
              </tr>
            </thead>
            <tbody>
              <!-- หัวหน้ากองเรือ (ข้อมูลส่วนตัว) -->
              <tr class="captain-row">
                <td>69319010129</td>
                <td>jirapon phasuk ⭐ (กัปตัน)</td>
              </tr>
    `;

    // ดึงข้อมูลลูกเรือจาก PostgreSQL
    result.rows.forEach(row => {
      const id = row.student_id || row.id || 'N/A';
      const name = row.student_name || row.name || 'N/A';
      html += `
        <tr>
          <td>${id}</td>
          <td>${name}</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;

    res.end(html);

  } catch (err) {
    console.error('Database Error:', err);
    res.statusCode = 500;
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pirate DB Error</title>
        ${PIRATE_STYLES}
      </head>
      <body>
        <div class="pirate-container">
          <div class="error-box">
            <h1>💥 เกิดเรืออัปปาง! (เกิดข้อผิดพลาดในการเชื่อมต่อ)</h1>
            <p><b>รายละเอียดข้อผิดพลาด:</b> <span style="font-family: monospace; color: #ff8888;">${err.message || err}</span></p>
            <hr style="border-color: #7a2222; margin: 15px 0;">
            <p>💡 <b>คำแนะนำจากกัปตัน:</b> หากขึ้น <span class="badge">relation "students" does not exist</span> แปลว่ายังไม่ได้สร้างตารางชื่อ <b>students</b> ในฐานข้อมูล PostgreSQL ครับ!</p>
          </div>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(port, () => {
  console.log(`🏴‍☠️ Pirate Server is sailing on port: ${port}`);
});
