#!/bin/bash
echo "Executando";

for i in $(seq 1 250);
do
output=$( node CriarTxts.js 0 $i);
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/Respostas.txt"
done;

for i in $(seq 1 250);
do
output=$( node CriarTxts.js 1 $i);
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/Respostas.txt"
done;

for i in $(seq 1 250);
do
output=$( node CriarTxts.js 2 $i);
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/Respostas.txt"
done;

for i in $(seq 1 250);
do
output=$( node CriarTxts.js 3 $i);
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/Respostas.txt"
done;


for i in $(seq 1 10);
do 
output=$(node CriarTxts.js 3 $i)
echo $output >> "/home/geovaniggr/Área de Trabalho/usp/iaa/MaisDois.txt"
done;