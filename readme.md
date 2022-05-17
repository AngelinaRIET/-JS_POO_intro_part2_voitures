###### Intro à la programmation orientée objet

# La classe Car

Vous allez devoir implémenter le contenu d'une classe **Car** qui va vous permettre de *générer* des voiture de différentes marques, différents modèles, différentes couleurs...

Pour le moment, par *générer*, on entend faire des ```console.log()``` qui simulent la fiche technique du véhicule. 

> À Noter : que ce soit pour générer des console.log, charger des photos, afficher des modèles en 3D ou ou charger des assets dans un jeu vidéo... Tout ceci n'est jamais que de l'affichage, la structure interne du programme reste la même.
Ainsi, en P.O.O., vos classes auront, peu ou prou, les mêmes propriétés.

Un squelette de base de la classe est déjà prêt. Vous aurez juste à vous en inspirer pour ajouter des propriétés en plus à la voiture ainsi créée.

## Import et instanciation

Pour le début, pas besoin de toucher à la classe **Car**. Par contre, il faut la charger et l'utiliser dans le fichier **oop-js-02-classe-car.js**.

Pour cela suivez les étapes **01** à **03** dans ce fichier ;
- importer la classe Car
- créer une nouvelle voiture avec new Car(...)
- afficher la fiche technique de la voiture grâce à la méthode (fontion dans la classe) **print()**

Pour le moment, le constructeur de **Car** n'accepte qu'un seul argument, la marque ou *brand* en anglais.

Donc, lors de l'instanciation, vous ne pouvez précisez que la marque du véhicule à créer.

**Exemple :**

```javascript
maBenz = new Car('Mercedez');
```

Essayez de créer trois instances de véhicules, de trois marques différentes, et d'afficher leurs fiches techniques respectives en appellant leurs méthodes **print()**.

La classe étant déjà implémentée à minima, vous devriez obtenir quelque chose comme ceci :

![exemple de résultat attendu](./images/oop-js-car-etape01.png)

## Implémentation

### Constructeur

Maintenant, vous pouvez aller dans la classe **Car** et la personnaliser de façon à ajouter plus de données à votre voiture dans son constructeur. 

Faites ce que vous voulez, créez les propriétés qui vous semblent les plus pertinentes pour représenter une voiture.

Voici une liste, non exhaustive, de quelques propriétés qui fonctionnent très bien :
- modèle
- couleur
- nombre de portes
- cylindrée
- puissance en chevaux

Bien sûr vous pouvez en mettre d'autres si vous le souhaitez.

> Attention ! Mieux vaut toujours y aller progressivement. Ajouter d'abord une seule propriété puis testez votre code. Si ça fonctionne, vous pourrez passer à la suivante.

### Méthode print()

Si vous avez ajouter de nouvelles propriétés dans le constructeur de votre classe **Car**, il va falloir les afficher dans la méthode ```print()```.

Il vous suffit d'ajouter de nouvelles lignes de ```console.log()```. N'hésitez pas à mettre de la couleur.

Voici un exemple de résultat possible :

![Exemple de résultat possible lors d'un appel aux méthodes print() trois instances différentes de Car](./images/oop-js-car-etape02.png)

Encore une fois, ce n'est qu'un exemple.

Expérimentez et créez votre propre classe avec ses propres propriétés.



