# CGI-formation-Angular

## Configuration proxy CGI
```
npm config set http_proxy "http:// fr-proxy.groupinfra.com:3128/"
npm config set https_proxy "http:// fr-proxy.groupinfra.com:3128/"
```

## Travaux Pratiques
### TP 1
#### Consignes  
- Appeler le composant `tp1` depuis le composant principal   
- Fournir au composant `tp1` la liste des joueurs et des équipes (qui sont déjà chargées depuis le composant principal)  
- Afficher la liste des joueurs dans le tableau du composant `tp1`  
- Corriger le formulaire pour ajouter un joueur dans le tableau  

#### Rendu
![TP1](/assets/images/tp1.png)

### TP 2
#### Consignes  
- Créer un pipe permettant d’afficher le nom des équipes et des conférences de chaque joueur dans le tableau  
- Créer une directive structurelle qui permet d’afficher le joueur du tableau sélectionné. Si aucun joueur n’est sélectionné, le message ne doit pas s’afficher (ne pas utiliser `*ngIf`).
- Créer une directive attribute qui permet de changer la couleur du message du joueur sélectionné selon sa conférence (ne pas utiliser `[ngClass]`)

#### Tips
```typescript
@Input('nomDeMaDirective') set maMethode(value: any) {
  // Permet d’appeler une méthode directement au changement d’input
}
```

#### Rendu
![TP2 partie1](/assets/images/tp2_1.png)
![TP2 partie2](/assets/images/tp2_2.png)

### TP 3
#### Consignes
- Créer le service `PlayerService` permettant de récupérer la liste de tous les joueurs et un joueur depuis son id
- Créer le service `TeamService` permettant de récupérer la liste de toutes les équipes et une équipe depuis son id
- Injecter ces service dans le composant `tp3` 
- Injecter le service `PlayerService` dans le composant `player`
- Injecter le service `TeamService` dans le Pipe `get-team`
- Créer les routes permettant d’accéder aux composants `tp3` et `player` (avec en paramètre l’id du joueur)
- Ajouter les routes au module de routing
- Modifier le tableau pour rediriger le clic sur le lien vers le composant `player` avec l’identifiant du joueur 

#### Rendu
![TP3 partie1](/assets/images/tp3_1.png)
![TP3 partie2](/assets/images/tp3_2.png)

### TP 4
#### Consignes

#### Rendu

### TP 5
#### Consignes
