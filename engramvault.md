# EngramVault

**English** · [🇮🇹 Italiano](engramvault.it.md)

---

## A private, verifiable memory for the AI era

EngramVault connects AI conversations, notes, documents, and decisions into a personal memory that remains searchable, source-aware, and useful over time.

It is not another note editor and it is not only a memory system for coding agents. Its purpose is to help a person answer questions such as:

- What did I choose, and why?
- Where did this information come from?
- Is this note still current?
- Does a newer document challenge an earlier decision?
- What have I already discussed with my AI tools about this topic?

## The problem

Knowledge becomes scattered across ChatGPT, Claude, Gemini, coding agents, Notion, Markdown files, project documentation, manuals, and PDFs. A text search can find a sentence, but often cannot explain the history of a choice or determine whether the source is current.

## The EngramVault approach

1. **Capture**: archive AI conversations automatically. Do not require people to decide what is important while they are learning or working.
2. **Connect**: bring selected notes and documents into the same retrieval system.
3. **Curate**: extract candidate facts, decisions, entities, and relationships while keeping the original source available.
4. **Recall**: answer questions with source, date, state, and conflicting evidence visible.

The core principle is: **capture everything, curate what matters, keep the source**.

## Evidence is not automatically a fact

Imported material begins as evidence. A note, PDF, or conversation may be useful but outdated, speculative, or contradictory.

EngramVault distinguishes:

- **Evidence**: a source with provenance.
- **Claim**: an attributed or unverified statement.
- **Fact**: a confirmed current state.
- **Decision**: a choice that can be adopted, revised, abandoned, or superseded.

For example, a conversation may record an earlier choice and a later PDF may challenge one reason for it. The product should reveal the conflict and invite review, not silently overwrite history.

## Technical foundations

- Immutable conversation archive with deduplication.
- Hybrid FTS5 and semantic-vector search.
- Source-linked knowledge graph and temporal state.
- Native MCP server and REST API for authorised AI agents.
- Self-hosted, privacy-oriented architecture.

## Open Source & Repository

EngramVault is fully open-source under the MIT License:
- **GitHub**: [https://github.com/gaskb/engramvault](https://github.com/gaskb/engramvault)
- **Docker Hub**: [gaskb/engramvault](https://hub.docker.com/r/gaskb/engramvault)

## Contact

For information and contact: [info@engramvault.net](mailto:info@engramvault.net)
