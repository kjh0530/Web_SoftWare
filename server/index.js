const express = require("express");
const cors = require("cors");
const db = require("./db"); // ? db.js 불러오기

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("? 서버가 정상적으로 실행 중입니다.");
});

// 회원가입
app.post("/api/signup", async (req, res) => {
  const { username, password, name, studentId, grade, birth, email } = req.body;

  try {
    // 중복 ID 확인
    const [existing] = await db.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
    }

    // 저장
    await db.execute(
      `INSERT INTO users (username, password, name, student_id, grade, birth, email)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [username, password, name, studentId, grade, birth, email]
    );

    res.status(201).json({ message: "회원가입 성공!" });
  } catch (err) {
    console.error("회원가입 오류:", err);
    res.status(500).json({ message: "서버 오류" });
  }
});

// 로그인
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      res.status(200).json({ message: "로그인 성공", user: rows[0] });
    } else {
      res.status(401).json({ message: "아이디 또는 비밀번호가 틀렸습니다" });
    }
  } catch (err) {
    console.error("로그인 오류:", err);
    res.status(500).json({ message: "서버 오류" });
  }
});

app.listen(PORT, () => {
  console.log(`? Server running at http://localhost:${PORT}`);
});