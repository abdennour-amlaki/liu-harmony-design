const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;
const localContacts = [];
let dbReady = false;
let localContactId = 1;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "liu_harmony",
    port: Number(process.env.DB_PORT) || 3306
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        console.warn("Running in local fallback mode without MySQL.");
        dbReady = false;
        return;
    }

    dbReady = true;
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

    if (!dbReady) {
        const saved = {
            id: localContactId++,
            name,
            phone,
            project_type: projectType,
            location,
            message,
            created_at: new Date().toISOString(),
            fallback: true
        };

        localContacts.unshift(saved);

        return res.status(202).json({
            message: "Contact message saved in local fallback mode.",
            id: saved.id
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
    if (!dbReady) {
        return res.json(localContacts);
    }

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

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});