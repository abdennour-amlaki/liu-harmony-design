const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "liu_harmony"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Test backend
app.get("/", (req, res) => {
    res.json({
        message: "LIU HARMONY DESIGN Backend is running!"
    });
});

// Add contact
app.post("/api/contacts", (req, res) => {
    const {
        name,
        phone,
        projectType,
        location,
        message
    } = req.body;

    if (!name || !phone || !message) {
        return res.status(400).json({
            message: "Name, phone and message are required."
        });
    }

    const sql = `
        INSERT INTO contacts
        (name, phone, project_type, location, message)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, phone, projectType, location, message],
        (err, result) => {
            if (err) {
                console.error("Database error:", err);

                return res.status(500).json({
                    message: "Database error."
                });
            }

            res.status(201).json({
                message: "Contact message saved successfully!",
                id: result.insertId
            });
        }
    );
});

// Get all contacts
app.get("/api/contacts", (req, res) => {
    db.query(
        "SELECT * FROM contacts ORDER BY created_at DESC",
        (err, results) => {
            if (err) {
                console.error("Database error:", err);

                return res.status(500).json({
                    message: "Database error."
                });
            }

            res.json(results);
        }
    );
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});