## JavaScript Formularze

Należy za pomocą formularza (`.uploader__input`) załadować plik CSV, na podstawie którego zostaną do strony dodane wycieczki.

W pliku [`./example.csv`](./example.csv) w każdym wierszu mamy dane na temat jednej wycieczki.

Po załadowaniu oferty użytkownik może wybrać dowolną wycieczkę. Wystarczy, że w polach formularza tej wycieczki wprowadzi liczbę osób dorosłych oraz dzieci i kliknie przycisk „dodaj do zamówienia” (`.excursions__field-input--submit`).

Wówczas „w koszyku” na liście (`.summary`) pojawi się kolejny element zawierający podsumowanie danych wybranej wycieczki. Jednocześnie cena za całość (`.order__total-price-value`) ulegnie zmianie.

Każda zamówiona wycieczka może zostać usunięta z listy po kliknięciu X (`.summary__btn-remove`).

Po dokonaniu wyboru wycieczek użytkownik może złożyć zamówienie. W tym celu wypełnia formularz zamówienia (`.order`).

Przed wysłaniem formularza musimy sprawdzić, czy pola zostały prawidłowo wypełnione, m.in. czy pole z imieniem i nazwiskiem nie jest puste i czy adres e-mail jest prawidłowy (np. zawiera znak @).

Gdy użytkownik prawidłowo złoży zamówienie, wyświetli się alert z komunikatem: 

> Dziękujemy za złożenie zamówienia o wartości [kwota zamówienia] PLN. Szczegóły zamówienia zostały wysłane na adres e-mail: adres@wpisanywformularzu.pl.