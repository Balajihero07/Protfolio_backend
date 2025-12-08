const db = require('../Db_connection/Database');
exports.uploadcontact = async (contact_name, contact_mobileno, contact_emailid, contact_message) => {
    try {
        const sql = `
            INSERT INTO contact (
                contact_name, 
                contact_mobileno, 
                contact_emailid, 
                contact_message, 
                created_at
            )
            VALUES ($1, $2, $3, $4, NOW())
            RETURNING *;`;

        const result = await db.query(sql, [
            contact_name,
            contact_mobileno,
            contact_emailid,
            contact_message
        ]);

        return result.rows[0]; // return the inserted row
    }
    catch (error) {
        console.error("Error inserting contact data:", error);
        throw error;
    }
}; 

exports.getContacts = async () => {
    try {
        const sql = `
            SELECT 
                id,
                contact_name,
                contact_mobileno,
                contact_emailid,
                contact_message,
                created_at
            FROM contact 
            WHERE delete_at IS NULL
            ORDER BY id DESC;
        `;

        const result = await db.query(sql);
        return result.rows;  // PostgreSQL uses result.rows
    }
    catch (error) {
        console.error("The error in get contact:", error);
        throw error;
    }
};
// exports.delmessage = async (id) => {
//   try {
//     const sql = `
//       UPDATE contact
//       SET deleted_at = NOW()
//       WHERE id = $1
//     `;

//     const result = await db.query(sql, [id]);
//     return result;
//   } catch (error) {
//     console.error("Error soft deleting message:", error);
//     throw error;
//   }
// };

