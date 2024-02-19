#!/bin/bash

while true
do
    cd /home/pemira.smkn1cibinong.sch.id/public_html
    rm -r build
    cd /home/pemira.smkn1cibinong.sch.id/public_html/public
    cp -r build ../
done