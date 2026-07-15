import "dotenv/config";

const settings = {
    /* ================= DATABASE ================= */

    // Set ONE database URL here — the bot auto-detects the type from the prefix:
    //   mongodb:// or mongodb+srv://  → MongoDB
    //   postgres:// or postgresql://  → PostgreSQL
    //   mysql:// or mysql2://         → MySQL
    // Leave empty to use local JSON storage (no DB required).
    DATABASE_URL: process.env.DATABASE_URL || "",

    /* ================= BOT IDENTITY ================= */

    botName: process.env.BOT_NAME || "SUBZERO-MD",
    botOwner: process.env.BOT_OWNER || "Darrell M",
    ownerNumber: process.env.OWNER_NUMBER || "919161277551",
    author: process.env.AUTHOR || "Mr Frank OFC",
    packname: process.env.PACKNAME || "SUBZERO-MD",
    description: process.env.DESCRIPTION || "Multi-device WhatsApp bot",

    /* ================= SESSION ================= */
MSFD-ZR2D
    sessionId: process.env.SESSION_ID || "Ice~ZLXuOn",
    pairingNumber: process.env.PAIRING_NUMBER || "9161277551",
};

// Sync DATABASE_URL back to process.env so all modules pick it up
// (works whether the value was in .env or hardcoded above)
if (settings.DATABASE_URL && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = settings.DATABASE_URL;
}

export default settings;
