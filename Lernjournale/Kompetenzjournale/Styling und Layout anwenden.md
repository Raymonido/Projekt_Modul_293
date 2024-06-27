# Styling und Layout anwenden

## Ausgangslage

- Wie schon bei den anderen Kompetenzbereichen, hatte ich den ersten Kontakt mit CSS und den dahinterliegenden techniken in der Aprentas.

- In der Aprentas hatte ich einen riesen Spass meine Webseite zu gestalten und zu Designen. Dies hat sich bis heute durchgezogen.

- Im Geschäft habe ich auch schon ein kleines Projekt in der Webentwicklung gemacht, daher bin ich schon sehr Vertraut mit CSS, ich würde sogar behaupten, dass ich vor diesem Modul CSS am besten kann.


## Was ist Responsive Websdesign?

Responsive Webdesign ist ein Ansatz in der Web-entwicklung, indem man probiert, eine Webseite auf allen Geräten verfügbar und verwendbar zu machen. Dies bedeutet, dass Inhalte nicht zu klein oder zu gross auf dem Smartphone sind oder z.B. gewisse Elemente übereinander liegen. Um ein Responsives Design zu gewährleisten, gibt es zwei Ansätze. Der **Desktop-First** Ansatz geht dem Prinzip nach, die Webseite zuerst für den Desktop gebrauch zu designen. Dieser Ansatz ist heute eher veraltet, da heutige Webstandards erwarten, dass jede Webseite im Internet Responsive sein muss. Für Interne Webseiten in einer Firma kann dieser Ansatz jedoch von Vorteil sein, da die Firmenmitarbeiter ausschliesslich auf Desktops arbeiten. Der **Mobile-First** Ansatz ist aber für alle anderen Fälle meistens der bessere und modernere Ansatz, da die meisten Benutzer eine Webseite auf Mobilen Geräten aufrufen. 

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
background: var(--primarycolor);    
```

## Kompetenz E7

Diesen Kompetenzbereich kann ich damit erklären, dass meine Webseite auch auf dem Handy einheitlich zu sehen ist. Das Design ist ausserdem einheitlich gestaltet, indem ich einen roten header und einen roten Footer verwende. Dieses einheitliche Design fällt mir sehr einfach, da ich CSS-Variablen verwendet habe.

## Was habe ich in diesem Kompetenzbereich gelernt?

In diesem Kompetenzbereich habe ich vor allem gelernt, wie man CSS-Variablen verwendet. Ausserdem habe ich herausgefunden, dass man nun normales CSS auch verschachteln kann, was mir sehr entgegenkommt

## Selbsteinschätzung

Ich finde, ich habe in diesem Kompetenzbereich alle Themen abgedeckt. Da ich meine Webseite ausserdem mit CSS-Variablen gestaltet habe, sieht meine Webseite sehr einheitlich aus. Ich finde jedoch, dass ich mich fast zu sehr auf das aussehen der Webseite konzentriert habe, besonders bei kleinen Details. Ich weiss natürlich, dass dies auch sehr wichtig sind, jedoch habe ich das Gefühl, dass ich mehr mit meiner Webseite hätte erreichen können. Z.B hätte ich ein bisschen mehr Javascript verwenden können, da ich generell sehr viel Javascript (Typescript) verwende (Geschäftlich). Da wäre es passend gewesen, meine Kompetenzen etwas mehr zu erweitern, trotzdem bin ich sehr zufrieden mit dem aussehen meiner Webseite und bin mir sicher, dass ich die E-Kompetenzen erreichen werde. 