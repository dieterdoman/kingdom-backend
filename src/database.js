import pg from 'pg';

export const pool = new pg.Pool({
    user: 'kingdom',
    host: '127.0.0.1',
    database: 'kingdom',
    password: 'Kingdom1234',
    port: 5432,
});
