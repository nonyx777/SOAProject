#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER fastapi_user WITH PASSWORD 'fastapi_password';
    CREATE DATABASE fastapi_db;
    GRANT ALL PRIVILEGES ON DATABASE fastapi_db TO fastapi_user;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "fastapi_db" <<-EOSQL
    \i /docker-entrypoint-initdb.d/init.sql
EOSQL
