#!/bin/bash

export PGUSER=postgres

dropdb ofrigo
echo "BDD O'Frigo supprimé"
dropuser admin_ofrigo
echo "USER admin_ofrigo supprimé"

createuser admin_ofrigo -P -s
echo "USER admin_ofrigo crée"
createdb ofrigo -O admin_ofrigo
echo "BDD O'Frigo crée"

rm sqitch.conf
rm sqitch.plan

sqitch init ofrigo --target db:pg:ofrigo
echo "SQITCH initialisé"

echo "Add versions"
sqitch add 1.init -n "create tables"
sqitch add 2.insert -n "insert data"
sqitch add 3.add_constraints -n "Add constraints"

echo "Create tables"
sqitch deploy 1.init
echo "Add data"
sqitch deploy 2.insert
echo "Add constraints"
sqitch deploy 3.add_constraints