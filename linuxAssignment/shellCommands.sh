#!/bin/bash

mkdir -p sample
cd sample

touch sample.txt
echo "Hi! This is just a sample text file created using shell script" > sample.txt
cat sample.txt

grep -o t sample.txt | wc -l

chmod u=rwx sample.txt

echo "Hi! This is just another sample text added to the file" >> sample.txt
cat sample.txt

chmod g=r sample.txt
chmod o= sample.txt

cp sample.txt sample2.txt
cat sample2.txt

for i in {1..1000}; do
    echo "Random line with number $RANDOM" >> sample.txt;done

head -n 50 sample.txt
tail -n 50 sample.txt

touch prog1.txt prog2.txt program.txt code.txt info.txt

ls | grep prog

alias list='ls | grep'
list prog
