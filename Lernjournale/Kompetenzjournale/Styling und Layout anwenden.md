# Styling und Layout anwenden

## Ausgangslage

- Wie schon bei den anderen Kompetenzbereichen, hatte ich den ersten Kontakt mit CSS und den dahinterliegenden techniken in der Aprentas.

- In der Aprentas hatte ich einen riesen Spass meine Webseite zu gestalten und zu Designen. Dies hat sich bis heute durchgezogen.

- Im Geschäft habe ich auch schon ein kleines Projekt in der Webentwicklung gemacht, daher bin ich schon sehr Vertraut mit CSS, ich würde sogar behaupten, dass ich vor diesem Modul CSS am besten kann.

## Kompetenz E6

Ich kann diese Kompetenz beweisen, da ich eine eher neuere Technik im schreiben meines CSS-Codes verwendet habe. Ich habe nämlich eine neue Funktion der Browser ausgenutzt, welche es einem nun ermöglicht, CSS-Code zu verschachteln wie in einem Framework oder SASS. Da ich im Geschäft eigentlich nur mit SASS arbeite, kam mir das sehr entgegen. 

Kurzer Einblick in meinen Code:
```
.navbuttons{
  font-family: Gravity, serif;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  min-width: 90%;
  min-height: 60px;
  justify-content: center;
  transition: all ease 0.3s;
  align-items: center;
  padding: 10px;
  margin-bottom: 40px;
  &:hover {
    background-color: #ff445b;
    text-decoration: underline;
  }
  &:active {
   transform: scale(1.1);
  }
}
```

Ausserdem habe ich für die Farben CSS variablen verwendet, welche mir erlauben, bestimmte Farben im *:root* zu bestimmen und diese wieder zu verwenden. Dies ist sehr praktisch, da man nun nicht mehr jeden einzelnen Hex oder RGB Code schreiben muss, sondern nur noch die Variable welche man definiert hat. Dies sieht bei mir so aus:

```
:root {
  --primarycolor: linear-gradient(to right, #ff416c, #ff4b2b);;
  --backgroundcolor: linear-gradient(to right, #d4d4d4, #f2f2f2, #FFFFFF);
  --blue: blue;
  --yellow: yellow;
  --green: green;
  --red: red;
}
```
Bei den einzelnen Komponenten verwende ich meine Variablen so:

```

```