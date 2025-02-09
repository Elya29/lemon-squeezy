---
title: Les portes logiques - OR
description: comprendre les portes logiques, la porte OR
pubDate: 2025-02-08
toc: true
share: false
ogImage: true
level: 1
---

Prêt à passer une nouvelle porte logique ? Tu te souviens de notre chateau ?

# Souvenons-nous des règles du jeu...

Cette fois-ci, tu t'approches de la porte OR. Ca veut dire "OU" en Anglais, comment dans "tu veux du gateau **OU** de la glace ?", tu dois choisir, tu n'aura pas les deux. Souviens-toi aussi de ton passeport magique, et que 1 = la lumière est allumée et 0 = la lumière est éteinte. Ici, on aura deux lumières, qui sont ce qu'on appelle les entrées, en Anglais les "inputs". Dans la porte OR, il faut qu'une seule des deux lumières soit allumée pour ton passeport soit valide.

# Irons-nous au parc ?

Admettons donc que tu veuilles aller dans le parc du chateau. Pour passer la porte OR qui mène au parc, tu dois remplir l'une des deux contidions suivantes pour que ton passeport soit valide :
- tu as fini tes devoirs (1 / 0)
**OU**
- ton chien a besoin de faire pipi (1 / 0)

**Si au moins l'une des deux choses est vraie**, tu peux aller dans le parc du chateau. Si aucune n'est vraie, tu ne peux pas.

Si tu as fini tes devoirs (1) mais que le chien n'a pas besoin de sortir (0) = au moins l'une des conditions est remplie, donc tu peux passer (1). 

Si tu n'as pas encore fini tes devoirs (0) mais que le chien a besoin de faire pipi (1) = au moins l'une condition est remplie, donc tu peux passer (1).

Si tu n'as pas encore fini tes devoirs (0) et que le chien n'a pas non plus besoin de faire pipi (0) = aucune condition n'est remplie donc tu ne peux pas passer (0).

Si tu as fini tes devoirs (1) et que le chien a besoin de faire pipi (1) = les deux conditions sont remplies, donc tu peux passer aussi (1).

# Alors c'est oui ou c'est non ?

Je t'ai fait un tableau pour bien comprendre les conditions (les entrées, ou "**inputs**"), et leur effet sur le résultat (la sortie, ou "**output**") :

| Devoirs (1/0) | Chien (1/0) | Passeport valide (1/0) |
|---------------|-------------|------------------------|
| 1             | 0           | 1                      |
| 0             | 1           | 1                      |
| 0             | 0           | 0                      |
| 1             | 1           | 1                      |


Souviens-toi que 1 = OUI (ou "true", qui signifie "vrai" en Anglais), et 0 = NON (ou "false", qui signifie "faux" en Anglais). Tu fais le lien avec les lumières allumées (1) et éteintes (0) ? 

Ca veut dire qu'avec une petite lumière allumée ou éteinte, on peut créer de la logique ! Et c'est exactement ce que fait ton ordinateur, pas avec des lumières (ce serait joli pourtant !) mais avec des courants électriques. Quand c'est 1, le courant passe, quand c'est 0, le courant ne passe pas.

Avec toutes nos portes logiques, on peut créer des circuits compliqués, qui vérifient beaucoup de conditions.

# Oh, un booléen !

Et quand on a le choix entre OUI et NON (ou VRAI et FAUX, c'est pareil), c'est ce qu'on appelle un booléen (ça se prononce "boulé hein"). Pour la programmation, c'est un concept très important dont tu vas très souvent te servir pour vérifier des choses !

# C'est du code ou pas ?

Eh bien non, ce n'est pas du code. En réalité, ça vient de l'électronique. Ce sont des pièces dans ton ordinateur qui se servent des signaux électriques pour effectuer des opérations logiques de base, comme on vient de le faire. 

Les portes logiques sont en réalité des circuits électroniques très simples qui peuvent être créés à l'aide de composants comme des transistors. Les transistors sont comme de petits interrupteurs (un bouton pour allumer et éteindre), permettant ou bloquant le passage du courant électrique, en fonction des conditions (les "entrées" du circuit). Tu peux en fabriquer facilement dans Minecraft avec de la Red Stone ! Si tu ne connais pas Minecraft, tu peux en parler avec tes parents. C'est un jeu vraiment très bien pour apprendre la logique de la programmation.

Dans le monde de la programmation, il existe des logiques très proches qui sont utilisées pour vérifier des conditions dans le code. Par exemple, quand tu veux qu'un utilisateur puisse accéder à ton site web seulement si son mot de passe est correct, tu pourrais utiliser une logique OR pour valider l'accès.

On continue ? Voici les 7 types de portes logiques de base :
- [AND (ET)](/lemon-squeezy/parcours/porte-logique-and) 
- OR (OU), dont on vient de parler ici.
- [NOT (NON)](/lemon-squeezy/parcours/porte-logique-not)
- NAND, à venir
- NOR, à venir
- XOR (OU exclusif), à venir
- XNOR, à venir

Tu peux cliquer sur leur nom pour découvrir les règles de chacune de ces portes.