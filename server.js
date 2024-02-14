const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure SQL Server connection
const config = {
    user: 'bootcamp',
    password: 'Pass@123',
    server: 'bootcampfeb5.database.windows.net',
    database: 'bootcamp',
    options: {
        encrypt: true, // Use encryption
        trustServerCertificate: false // Don't trust the server certificate
    }
};

// Enable CORS for all routes
app.use(cors());

// Define API endpoint to fetch data
app.get('/data', async (req, res) => {
    try {
        // Connect to SQL Server
        await sql.connect(config);

        // Query SQL Server and fetch data
        const result = await sql.query('SELECT TOP 20 * FROM [SalesLT].[Customer]');

        // Send the fetched data as JSON response
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        // Close the SQL Server connection
        await sql.close();
    }
});

app.get('/JoinData', async (req, res) => {
    try {
        // Connect to SQL Server
        await sql.connect(config);

        // Query SQL Server and fetch joined data from ProductCategory and Product tables
        const result = await sql.query(`
            SELECT TOP 20 *
            FROM [SalesLT].[Product] p
            INNER JOIN [SalesLT].[ProductCategory] pc ON p.ProductCategoryID = pc.ProductCategoryID
        `);

        // Send the fetched data as JSON response
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching product data:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        // Close the SQL Server connection
        await sql.close();
    }
});


// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
