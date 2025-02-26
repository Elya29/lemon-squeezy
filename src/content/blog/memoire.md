---
title: La mémoire
description: comprendre les bases de l'informatique
pubDate: 2025-02-10
toc: true
share: false
ogImage: true
level: 1
category: informatique
---
Ecoute l'article :
<audio controls>
  <source src="/lemon-squeezy/audio/memoire.mp3" type="audio/mpeg">
  Votre navigateur ne supporte pas l'élément audio.
</audio>

As-tu une bonne mémoire ? Ton ordinateur, il en a plusieurs ! 

## Les différents types de mémoire

Les principales sont les suivantes :

- **la ROM**, qu'on appelle la "mémoire morte", elle contient des instructions de base pour ton ordinateur.

- **les registres**, ce sont des petites mémoires super rapides qui servent à faire les calculs le plus vite possible. Elles s'occupent de stocker les chiffres de ton calcul en cours, par exemple si tu demandes combien font 5 x 7 à ton ordinateur, le registre va s'occuper de se souvenir de 5 et de 7 pour que le calcul puisse se faire correctement. On aimerait bien en avoir pour calculer nos tables de multiplications, pas vrai ?

- **la mémoire cache** est elle aussi très rapide, mais moins que les registres. Elle garde les choses que tu utilises souvent, pour ne pas avoir à aller les retrouver dans les autres mémoires qui sont plus lentes. Par exemple, si tu ouvres un programme tous les jours, il sera plus rapide que si tu ne l'as pas ouvert depuis longtemps, car il sera stocké dans "le cache" pour que tu puisses le charger plus rapidement. L'ordinateur sait que tu l'utilises souvent, alors il le garde sous la main !

- **la mémoire de stockage**, c'est ce qu'on appelle le "disque dur" de l'ordinateur. Elle est plus lente, mais elle dure dans le temps (on dit qu'elle est "permanente", elle ne s'efface jamais toute seule). On ne devrait normalement pas perdre ce qu'on range dedans, sauf si on l'efface nous-même. Le disque dur (mémoire de stockage), c'est comme un placard. Tu y ranges les choses pour les utiliser plus tard, par exemple, ton jeu de société.

- **la RAM**, c'est ce qu'on appelle la "mémoire vive". Elle est assez rapide, mais moins que la mémoire cache, et surtout elle s'efface dès qu'on éteint l'ordinateur. Elle sert à stocker les programmes que tu es en train d'utiliser. La RAM, c'est comme la table sur laquelle tu vas jouer avec ton jeu de société quand tu le sors. Lorsque tu as fini, tu le range dans le placard (le disque dur), et il n'y a plus rien sur la table (la RAM).

## Comment ça fonctionne ?

Tu peux imaginer la mémoire d'un ordinateur comme une rangée de petites boites numérotées. Chaque petite boite contient une information (un chiffre, une lettre, une image…). Quand l’ordinateur a besoin d’une information, il va chercher dans la bonne boite.

Certaines boites ne contiennent pas d'information, mais le numéro d'une autre boite ! C'est comme si dans ta boite aux lettres, tu recevais un mot qui te dit d'aller chercher ton colis dans la boite aux lettres de ton voisin. Ce mot qui t'indique le numéro d'une autre boite, dans un ordinateur, on appelle ça un **pointeur**. La boite ne contient pas l'information, mais te dit où tu pourra la trouver.

Donc les boites contiennent soit une **valeur** (exemple: "42"), soit un **pointeur** (exemple: "la boite numéro 8 contient la valeur que tu cherches"). C'est un peu comme si ton ordinateur faisait des chasses au trésor ! 🏴‍☠️

Ca permet de relier des morceaux de mémoire entre eux, pour créer des structures plus compliquées comme des listes ou des "arbres". Ca nous évite aussi de copier trop de données inutilement (si on a déjà l'information, on peut dire où elle est rangée plutôt que la stocker deux fois). Grâce à tout ceci, ton ordinateur peut travailler plus vite et plus efficacement, en utilisant sa mémoire de manière intelligente.
