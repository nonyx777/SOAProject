FROM postgres:13

COPY init.sql /docker-entrypoint-initdb.d/
COPY init_db.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh