# Wochenjournal 17.05.2024

## Was haben wir heute gemacht?

Heute Morgen hat uns Herrn bordbeck ein Live Coding vorgezeigt, wie man Formulare erstellt. Danach konnten wir selbstständig weiterarbeiten. Danach haben wir einen Auftrag erhalten, diese Formulare zu erstellen. Ich habe diese gerade in meine Webseite eingebaut.

## Was habe ich heute gelernt?

Heute habe ich meine Kompetenzen erweitert, indem ich nochmals repetiert habe, wie man ein Formular in HTML macht. Ausserdem habe ich gelernt, wie ich mit einem Tool namens "Formspree" mein Formular so einrichten kann, dass ich eine E-Mail bekomme, wenn jemand das Formular ausfüllt. Dieses Tool ist sehr nützlich und ich werde es wahrscheinlich auch in Privaten Projekten benutzen.

Folgendes Formular haben wir erstellt.

```
 <div class="form">
        <form  
        action="https://formspree.io/f/myyrvvae"
        method="POST">
    
            <fieldset>
                <legend>Personalien</legend>
                <div class="nachname">
                    <label for="name">Name *:</label>
                    <input type="text" name="name" id="name" required>
                </div>
                <div class="vorname">
                    <label for="vorname">Vorname *:</label>
                    <input type="text" name="vorname" id="vorname" required>
                </div>
    
                <div class="">
    
                </div>
            </fieldset>
    
            <div class="submit">
                <input type="reset" value="Löschen">
            <input type="submit" value="Übermitteln">
            </div>
    
        </form>
    </div>

    ```