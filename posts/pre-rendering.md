---
title: "Dwie formy wstępnego renderowania"
date: "2023-01-23"
---

Next.js posiada dwie formy wstępnego renderowania: **Generowanie Statyczne** i **Renderowanie po stronie serwera**. Różnica jest w tym **kiedy** zostanie wygenerowany kod HTML.

- **Generowanie statyczne** metodą wstępnego renderowania która generuje HTML w **czasie budowy**. Ten wstępnie renderowany kod zostaje ponownie użyty (_reused_) przy każdym zapytaniu.
- **Renderowanie po stronie serwera** jest metodą wstępnego renderowania która generuje HTML na **każde żądanie**.

Ważne, Next.js daje ci **wybór** której formy wstępnego renderowania użyć dla każdej strony. Możesz stworzyć "hybrydową" aplikację Next.js używając Generowania statycznego dla większości stron i użyć renderowania po stronie serwera dla innych.
