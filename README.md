# Calculatrice Web

Ce projet est une calculatrice web développée avec Vite et Vanilla JS, qui permet d'effectuer des opérations de base (addition, soustraction, multiplication, division). Le déploiement est automatisé avec GitHub Actions et Vercel, et respecte un workflow CI/CD pour tester et déployer uniquement les versions taguées.

## Table des Membres du Groupe

| NOM       | Prénom |
|-----------|--------|
| BUCSPUN      | Denis   |


## Lien vers la prod

- [https://vite-calculette.vercel.app/](https://vite-calculette.vercel.app/))

## Architecture et Choix Techniques

### Structure de Fichiers

- `index.html` : Structure de la page de la calculatrice.
- `main.js` : Gestion des événements DOM et des calculs via la fonction `calculate`.
- `calculate.js` : Contient la fonction `calculate`, isolée pour faciliter les tests.
- `calculatrice.test.js` : Fichier de test unitaire pour chaque opération de calcul.
- `.github/workflows/deploy.yml` : Workflow CI/CD pour GitHub Actions.

### Choix Techniques

- **Vite** : Utilisé pour la rapidité de développement et l'optimisation de l'application.
- **Vanilla JS** : Simplifie la structure de la calculatrice, en évitant des frameworks lourds pour une application légère.
- **CI/CD avec GitHub Actions et Vercel** : Permet de tester et de déployer automatiquement le projet, en s'assurant de la qualité du code avant chaque déploiement.

## Installation et Exécution

Pour cloner et lancer le projet en local, suivez les étapes ci-dessous :

### 1. Cloner le Dépôt

```bash
git clone https://github.com/TON_DEPOT/calculatrice.git
cd calculatrice
