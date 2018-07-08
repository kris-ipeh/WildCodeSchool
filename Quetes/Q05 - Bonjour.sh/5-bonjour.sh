#!/bin/sh

# On récupère le premier parametre et on le stock dans une variable nommée parametre
parametre=$1

if [ -z $parametre ] # si parametre est vide alors on salue l'utilisateur courant du shell
then
        echo "Bonjour $USER"
else # sinon bonjour $parametre
        echo "Bonjour $parametre"
fi
