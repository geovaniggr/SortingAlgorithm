#!/bin/bash

echo "Executando";

for i in $(seq 1 10);
do
echo "Fazendo o $i";
node sort.js $i;
done;
