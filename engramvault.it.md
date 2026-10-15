# EngramVault

[🇬🇧 English](engramvault.md) · **Italiano**

---

## Una memoria privata e verificabile per l'era dell'AI

EngramVault collega conversazioni con l'AI, note, documenti e decisioni in una memoria personale che rimane ricercabile, consapevole delle fonti e utile nel tempo.

Non è l'ennesimo editor di note e non è soltanto un sistema di memoria per agenti di sviluppo. Il suo scopo è aiutare una persona a rispondere a domande come:

- Cosa avevo scelto, e perché?
- Da dove proviene questa informazione?
- Questa nota è ancora valida?
- Un documento più recente smentisce o aggiorna una decisione precedente?
- Cosa ho già discusso con i miei strumenti AI su questo argomento?

## Il problema

La conoscenza si frammenta tra ChatGPT, Claude, Gemini, agenti di programmazione, Notion, file Markdown, documentazione di progetto, manuali e PDF. Una ricerca testuale può trovare una frase, ma spesso non può spiegare la storia di una scelta né determinare se la fonte è ancora attuale.

## L'approccio di EngramVault

1. **Cattura**: archivia le conversazioni AI automaticamente. Non costringe le persone a decidere cosa sia importante mentre stanno imparando o lavorando.
2. **Collega**: unifica note e documenti selezionati nello stesso sistema di retrieval.
3. **Distilla**: estrae candidati fatti, decisioni, entità e relazioni mantenendo sempre accessibile la fonte originale.
4. **Ricorda**: risponde alle domande mostrando chiaramente fonti, date, stato corrente ed evidenze in conflitto.

Il principio fondamentale è: **cattura tutto, cura ciò che conta, conserva la fonte**.

## L'evidenza non è automaticamente un fatto

Il materiale importato inizia come evidenza. Una nota, un PDF o una conversazione possono essere utili ma obsoleti, ipotetici o contraddittori.

EngramVault distingue chiaramente:

- **Evidenza (Evidence)**: una fonte con provenienza tracciata.
- **Affermazione (Claim)**: una dichiarazione attribuita o non verificata.
- **Fatto (Fact)**: uno stato attuale confermato.
- **Decisione (Decision)**: una scelta che può essere adottata, rivista, abbandonata o superata.

Ad esempio, una conversazione può registrare una scelta passata e un PDF successivo può mettere in discussione uno dei motivi alla base. Il sistema mette in luce il conflitto e invita alla revisione, senza sovrascrivere silenziosamente la cronologia.

## Basi tecniche

- Archivio conversazioni immutabile con deduplicazione SHA-256.
- Ricerca ibrida FTS5 e vettoriale semantica con RRF.
- Knowledge graph collegato alle fonti e tracciamento temporale dello stato.
- Server nativo MCP e REST API per agenti AI autorizzati.
- Architettura self-hosted, orientata alla privacy e senza dipendenze pesanti.

## Open Source & Repository

EngramVault è completamente open source con licenza MIT:
- **GitHub**: [https://github.com/gaskb/engramvault](https://github.com/gaskb/engramvault)
- **Docker Hub**: [gaskb/engramvault](https://hub.docker.com/r/gaskb/engramvault)

## Contatti

Per informazioni e contatti: [info@engramvault.net](mailto:info@engramvault.net)
