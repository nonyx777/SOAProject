#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'fastapi_user') THEN
            CREATE ROLE fastapi_user WITH LOGIN PASSWORD 'fastapi_password';
        END IF;
    END
    \$\$;

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fastapi_db') THEN
            CREATE DATABASE fastapi_db;
            GRANT ALL PRIVILEGES ON DATABASE fastapi_db TO fastapi_user;
        END IF;
    END
    \$\$;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "fastapi_db" <<-EOSQL
    \i /docker-entrypoint-initdb.d/init.sql
EOSQL

# Create the credentials table and insert data
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "fastapi_db" <<-EOSQL
    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_tables WHERE tablename = 'credentials') THEN
            CREATE TABLE credentials (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        END IF;
    END
    \$\$;

    INSERT INTO credentials (username, password)
    VALUES ('admin', 'admin')
EOSQL
