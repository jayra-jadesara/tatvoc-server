const express = require('express');
const { sql, poolPromise } = require('../configdb/db');

const router = express.Router();

router.get('/getUserSearchDataWikipedia', authenticateToken, getUserSearchDataWikipedia);
router.post('/insertUserSearchDataWikipedia', authenticateToken, insertUserSearchDataWikipedia);

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401);
    if (token) {
        next();
    };
}

async function getUserSearchDataWikipedia(req, res) {
    const pool = await poolPromise;
    const data = await pool.request()
        .input('stext', sql.VarChar, req.body.stext)
        .input('email', sql.VarChar, req.body.email)
        .input('operation', sql.VarChar, 'get')
        .execute('getUserSearchDataWikipedia');
    res.json({ data: data.recordset });
}
async function insertUserSearchDataWikipedia(req, res) {
    const pool = await poolPromise;
    const data = await pool.request()
        .input('stext', sql.VarChar, req.body.stext)
        .input('email', sql.VarChar, req.body.email)
        .input('operation', sql.VarChar, req.body.operation)
        .execute('getUserSearchDataWikipedia');
    res.json({ data: data.recordset });
}

module.exports = router;