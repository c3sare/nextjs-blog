---
title: "Kiedy używać Generowania statycznego v.s. Renderowania po stronie serwera"
date: "2023-01-23"
---

Rekomendujemy używanie **Generowania statycznego** (z danymi lub bez) kiedy jest to możliwe ponieważ twoja strona może zostać zbudowana raz i udostępniana przez CDN, przez co będzie dużo szybsza od strony renderowanej przez serwer przy każdym zapytaniu.

Możesz używać Statycznego generowania dla wielu typów stron, np.:

- Strony marketingowe
- Wpisy blogowe
- Listy produktów sklepu internetowego
- Pomoc i dokumentacje

Powinieneś zapytać siebie: "Czy mogę wstępnie renderować tę stronę **przed** zapytaniem użytownika?" Jeżeli odpowiedź to tak, to powinieneś wybrać Statyczne generowanie.

W drugiej ręce, Statyczne Generowanie **nie** jest dobrym pomysłem jeżeli nie możesz wstępne wyrenderować strony przed zapytaniem użytkownika. Może twoja strona posiada dane często zmieniane, które powinny być aktualne przy każdym zapytaniu.

W tym wypadku, możesz użyć **Renderowania po stronie serwera**. Będzie wolniejsze, ale strona wstępnie renderowana będzie zawsze aktualna. Lub możesz pominąć wstępne renderowanie i użyć kodu JavaScript po stronie klienta do pobrania danych.
