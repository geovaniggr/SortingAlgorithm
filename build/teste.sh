#!/bin/bash
echo "Executando";

for i in $(seq 1 50);
do
echo "Fazendo o $i"
output=$( node teste.js 1 $i );
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/build/maisUm.txt";
done;

for i in $(seq 1 50);
do
echo "Fazendo o $i"
output=$( node teste.js 2 $i );
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/build/maisUm2.txt";
done;

for i in $(seq 1 50);
do
echo "Fazendo o $i"
output=$( node teste.js 3 $i );
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/build/maisUm3.txt";
done;

for i in $(seq 1 50);
do
echo "Fazendo o $i"
output=$( node teste.js 4 $i );
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/build/maisUm5.txt";
done;