# TP: Introduction à Git

Bienvenu à toi, lecteur ! Ce TP a pour objectif de t'aider à prendre en main Git en mettant les mains dans le cambouis. Mais surtout pas de panique si tu n'as jamais utilisé Git ! Ce TP reprend tout depuis le début, mais a été pensé pour faire suite à une présentation théorique.

## Prérequis

Pour pouvoir faire ce TP, il te faudra le logiciel Git installé sur ton ordinateur :

- Si tu es sous Linux ou Mac, git est normalement déjà installé.
- Si tu es sous Windows, je te conseille d'installer GitBash.
- Node.js installé sur votre machine pour exécuter les exemples JavaScript.

Ce TP va aussi utiliser l'éditeur de code VSCode. Je te conseille de l'utiliser aussi pour plus de clarté mais tu peux utiliser un autre éditeur de code.

Maintenant que les prérequis sont installés, il est temps de se lancer !

## Partie 0 : Configuration de Git

Avant de pouvoir utiliser Git, il y a quelques configurations à faire.

### Ajout d'un nom et email dans Git

Pour que les modifications que tu feras sur le repository soient identifiables, il faut fournir un nom et une adresse email. Pour faire cette configuration, ouvre GitBash (ou un terminal pour Mac/Linux) et entre les commandes suivantes en remplaçant nom et adresse email :

```bash
git config --global user.name "<votre nom>"
git config --global user.email "<votre adresse email>"
```

Git sait maintenant qui tu es et le nom choisi sera associé aux modifications que tu feras.

### Configuration de l'éditeur par défaut

Il est recommandé de configurer un éditeur par défaut pour Git :

```bash
git config --global core.editor "code --wait"
```

Cette commande configure VSCode comme éditeur par défaut.

## Partie 1 : Initialisation et Premier Repository

### Mission 1 : Initialiser un repository

Si ce n'est pas déjà fait, initialise ce dossier comme un repository Git :

```bash
git init
```

Vérifie le statut de ton repository :

```bash
git status
```

### Mission 2 : Premier commit

Ajoute le fichier README.md à l'index Git :

```bash
git add README.md
```

Crée ton premier commit :

```bash
git commit -m "Initial commit: Add README"
```

Vérifie l'historique des commits :

```bash
git log
```

## Partie 2 : Versionnage et Gestion des fichiers

### Mission 1 : Modifier un fichier

Dans un repo git, l'édition des fichiers se fait comme dans un dossier classique. Mais cette modification en local doit ensuite être synchronisée avec le serveur.

Voici ci-dessous une ligne moche et inutile. Sauras-tu la supprimer ?

**Cette ligne est moche et inutile, supprime-la !**

Il existe aussi un module git intégré à VSCode, je t'encourage à essayer de l'utiliser pour supprimer la deuxième ligne moche et inutile ci-dessous.

**Cette ligne est aussi moche et inutile, supprime-la !**

Pour vérifier tes modifications :

```bash
git status
git diff
```

Pour ajouter et commiter tes modifications :

```bash
git add README.md
git commit -m "Remove useless lines from README"
```

### Mission 2 : Ajouter un fichier

Ta deuxième mission est de créer un fichier `solutions.md` à la racine du repo (à côté du README.md) et d'y ajouter la démarche que tu as suivie pour réussir la mission précédente.

**Remarque :** L'extension de fichier `.md` signifie Markdown. Ce format permet de faire un peu de mise en page simple de fichier texte. Tu peux utiliser le raccourci `Ctrl+Shift+V` dans VSCode pour visualiser ce type de fichier.

Une fois le fichier créé, n'oublie pas de créer un commit :

```bash
git add solutions.md
git commit -m "Add solutions documentation"
```

### Mission 3 : Supprimer un fichier

Il y a dans le repo un fichier nommé `fichier_inutile.txt`. Sauras-tu le supprimer du repo Git ?

```bash
git rm fichier_inutile.txt
git commit -m "Remove useless file"
```

Les quelques commandes que tu viens d'utiliser (`git status`, `git add`, `git commit`, `git log`) sont les commandes que tu utiliseras 95% du temps avec Git.

## Partie 3 : Branches et Collaboration

Pour pouvoir travailler séparément sur des features différentes, on utilise des branches. Cette fonctionnalité est particulièrement pratique pour faire avancer en même temps plusieurs versions du même code qui implémentent des fonctionnalités différentes.

### Mission 1 : Créer une branche

Crée une branche et place-toi sur cette nouvelle branche :

```bash
git branch feature-emoji
git checkout feature-emoji
# Ou en une seule commande :
# git checkout -b feature-emoji
```

Vérifie que cette branche est bien sélectionnée :

```bash
git branch
```

### Mission 2 : Travailler avec du code JavaScript

Consulte le code JavaScript de `code/main.js`. Il remplace des mots courants par leur équivalent emoji.

**Si tu veux exécuter ton code mais tu as une erreur de module :**
Il faut installer les modules Node.js avec la commande :

```bash
npm install
```

Cette commande va installer tous les modules JavaScript listés dans le fichier `package.json`.

Complète le dictionnaire `wordToEmoji` avec quelques emojis supportés. Tu peux trouver la liste [ici](https://emojipedia.org/).

Si tu as exécuté le fichier JavaScript `node code/main.js`, tu as peut-être pu remarquer l'apparition du dossier `node_modules`. Ces fichiers ne sont pas intéressants à versionner avec Git (car pas nécessaires - ils peuvent être régénérés avec `npm install`). Il faut donc ajouter un `.gitignore` pour les ignorer : vérifie que le fichier `.gitignore` à la racine du repo contient bien `node_modules/`.

Commit et push tes changements :

```bash
git add .
git commit -m "Add emoji functionality to main.js"
```

### Mission 3 : Fusionner les branches

Retourne sur la branche principale :

```bash
git checkout main
# ou git checkout master selon le nom de votre branche principale
```

Fusionne ta branche feature :

```bash
git merge feature-emoji
```

Supprime la branche devenue inutile :

```bash
git branch -d feature-emoji
```

## Partie 4 : Résolution de conflits

### Mission 1 : Créer un conflit

Crée deux branches à partir de `main` :

```bash
git checkout -b branch-a
# Modifie le fichier code/main.js
git add .
git commit -m "Modify emoji dictionary - version A"

git checkout main
git checkout -b branch-b
# Modifie la même ligne du fichier code/main.js différemment
git add .
git commit -m "Modify emoji dictionary - version B"
```

### Mission 2 : Résoudre le conflit

Retourne sur `main` et essaie de fusionner les deux branches :

```bash
git checkout main
git merge branch-a
git merge branch-b  # Ceci va créer un conflit !
```

Git t'indiquera qu'il y a un conflit. Ouvre le fichier en conflit dans VSCode et résous-le manuellement. VSCode t'aidera en affichant clairement les conflits.

Une fois résolu :

```bash
git add .
git commit -m "Resolve merge conflict"
```

## Partie 5 : Historique et Navigation

### Consulter l'historique

```bash
git log --oneline --graph --all
```

### Revenir en arrière

Pour voir un commit précédent :

```bash
git checkout <hash-du-commit>
```

Pour revenir au dernier commit :

```bash
git checkout main
```

### Annuler des modifications

Pour annuler des modifications non commitées :

```bash
git checkout -- <nom-du-fichier>
```

Pour annuler le dernier commit (en gardant les modifications) :

```bash
git reset --soft HEAD~1
```

## Partie 6 : Remote et Synchronisation

### Ajouter un remote

Si tu veux synchroniser avec un repository distant (GitHub, GitLab, etc.) :

```bash
git remote add origin <URL-du-repository>
```

### Pousser vers le remote

```bash
git push -u origin main
```

### Récupérer depuis le remote

```bash
git pull origin main
```

## Commandes Git essentielles - Récapitulatif

| Commande | Description |
|----------|-------------|
| `git init` | Initialise un nouveau repository |
| `git status` | Affiche l'état du repository |
| `git add <fichier>` | Ajoute un fichier à l'index |
| `git add .` | Ajoute tous les fichiers modifiés |
| `git commit -m "message"` | Crée un commit avec un message |
| `git log` | Affiche l'historique des commits |
| `git branch` | Liste les branches |
| `git checkout <branche>` | Change de branche |
| `git checkout -b <branche>` | Crée et change de branche |
| `git merge <branche>` | Fusionne une branche |
| `git pull` | Récupère les modifications distantes |
| `git push` | Envoie les modifications locales |

## Conclusion

Ça y est, c'est la fin de ce TP ! Bien sûr, il n'a abordé qu'une faible partie de toute la puissance de Git, mais j'espère qu'il t'a donné les clés pour bien commencer avec Git.

Dernier conseil : Git réserve parfois quelques situations un peu complexes, notamment lorsque des conflits se créent entre deux modifications. Il faut alors les résoudre à la main (heureusement VSCode aide en affichant les conflits). Mais surtout pas de panique ! Comme dans beaucoup de messages d'erreur, Git donne la démarche à suivre pour résoudre l'erreur dans le message d'erreur. Il faut donc bien faire attention à ce que Git te communique !

Sur ce, j'espère que tu as apprécié ce TP. Bonne utilisation de Git !

---
*Créé par Baptiste VASSEUR*
