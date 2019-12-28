set -e

createdb postgres

cp postgresql.conf /var/lib/postgresql/data/postgresql.conf

exit 1