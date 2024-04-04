Utwórz aplikację generującą przyciski o losowym wyglądzie. Okno aplikacji powinno być podzielone na trzy kolumny (o szerokościach w stosunku 1:2:1). W lewej kolumnie powinno być pole do podania liczby losowanych przycisków, input do podania tekstu przycisków i przycisk "Losuj". Po kliknięciu przycisku losowania w środkowej kolumnie powinna się pojawić lista losowo wygenerowanych przycisków. Wszystkie przyciski powinny mieć taki sam tekst (ustawiony w lewej kolumnie) ale każdy z nich ma mieć losowy styl tzn.:
- kolor czcionki
- kolor tła
- szerokość
- wysokość
- kolor ramki
- grubość ramki
- zaokrąglenie

Wartości liczbowe niech losują się w jakimś rozsądnym przedziale (np. wysokość 20 - 80px). Kolory mogą być losowane z predefiniowanej listy lub całkowicie losowo.

Po kliknięciu dowolnego z wylosowanych przycisków w prawej kolumnie powinen się pojawić tag 'pre' ze stylem danego przycisku np.:
<pre>
  .button {
    background: #333333;
    height: 30px;
    ...
  }
</pre>

Ponowne naciśnięcie przycisku losowania czyści poprzednio wygenerowane przyciski i wyświetla nowe.
