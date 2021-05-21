import mysql from 'mysql';


const pool = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'vehiculos_db'
    }
);

pool.connect(); 

export default pool;