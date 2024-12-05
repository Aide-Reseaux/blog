---
# Front Matter : c'est les métadonnées
# https://retype.com/configuration/page/#author
authors:
  - name: volcanofr
    email: volcano0france@gmail.com
    link: https://discord.com/users/589383722759880705
    avatar: https://avatars.githubusercontent.com/u/74511042?v=4
date: 2024-12-04 # annee-mois-jour
description: Page d'exemple d'utilisation du Markdown avec Retype, à destination des rédacteurs du blog.
tags: [test]
visibility: hidden
---

# Markdown & Retype

Le texte des pages du blog doivent être rédigées en utilisant du **Markdown**.
[Mardown](https://www.markdownguide.org/cheat-sheet), de la même manière que les messages Discord.

En plus du `md`, *Retype* met en place des [components](https://retype.com/components).

## Markdown

### Corps de text

Il y a :
- le **gras** ;
- l'*italique* ;
- le texte ~~barré~~ ;
- le bloc de `code` ;
- le bloc de citation `>`
  > citation

### Titres

Différents niveau de titre existes :

- `# Titre de la page`
- `## Titres de section`
- `### Titres de catégorie`
- Et on pourrait augmenter jusqu'à 6 `#` MAX. Mais c'est grandement déconseillé d'aller aussi loin.

### Liens & images

Les liens s'appliquent comme [ceci](https://github.com/volcanofr). `[ceci](https://github.com/volcanofr)`

Les images s'affichent comme cela : `![Texte de remplacement](https://avatars.githubusercontent.com/u/74511042?v=4)`
![Texte de remplacement](https://avatars.githubusercontent.com/u/74511042?v=4)

## Component

### Admonitions

Ils permettent d'afficher en avant des blocs d'informations. Plusieurs [variantes](https://retype.com/components/alert/#variant) existes.

```
!!! Titre
Texte...
!!!
```

### Boutons

C'est simplement un bouton cliquable, à la place d'un lien "classique". Plusieurs [variantes](https://retype.com/components/button/#variant).

```
[!button Bouton](https://github.com/volcanofr)
```

On peu aussi rajouter des références à des pages.

```
[!ref](/draft/ex.md)
```

### Embeds

Ca permet d'afficher une page extérieur au sein du blog.

```
[!embed el="embed"](https://www.youtube.com/embed/C0DPdy98e4c)
```

### Menus déroulant

Cela affiche/cache son contenu.

```
=== Paneau 1
Contenu texte...
=== Paneau 2
Autre contenu :)
===
```

### Menus multiple

Quand il y a différents points, mais avec beaucoup de texte.

```
+++ Tab 1
This is a Tab
+++ Tab 2
This is another Tab
+++ Tab 3
Wow! Yet another tab :+1:
+++
```

### Tableaux

Tout est dans le nom (oui, je commence à avoir la flemme de faire des descriptions).

```
Name | Value
--- | ---
Item 1 | Blue
Item 2 | Green
```
