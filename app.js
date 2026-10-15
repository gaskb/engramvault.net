const translations = {
  en: {
    skip: 'Skip to content', navHow: 'How it works', navPrinciples: 'Principles', navInstall: 'Self-host', navGithub: 'GitHub ↗', navContact: 'Contact',
    eyebrow: 'PRIVATE MEMORY FOR THE AI ERA', heroTitle: 'Never lose the <em>why</em> behind a choice.', heroText: 'EngramVault keeps your AI conversations, notes, documents, and decisions connected, searchable, and grounded in their original sources.', ctaGithub: 'View on GitHub', ctaInstall: 'Self-host in 2 minutes', heroNote: 'Open-source & self-hosted by design. Your memory stays yours.',
    consoleLabel: 'ASK YOUR MEMORY', consoleStatus: 'SOURCES CONNECTED', consoleQuestion: 'Which database did we choose for EngramVault, and why?', decision: 'DECISION', evidence: 'EVIDENCE', sourceOneTitle: 'Embedded SQLite adopted for local-first zero-latency storage', sourceOneMeta: 'AI conversation · 12 Mar 2026', sourceTwoTitle: 'Architecture ADR: Embedded SQLite vs PostgreSQL Daemon', sourceTwoMeta: 'Architecture Record · 20 Sep 2026', answerLabel: 'WHAT YOUR MEMORY KNOWS', answerText: 'You chose embedded SQLite (vault.db) with FTS5 BM25 and 384-dim semantic vectors: zero external dependencies, full data sovereignty, and sub-millisecond local queries across macOS, Linux, and NAS.',
    signalOne: 'Capture everything.', signalTwo: 'Curate what matters.', signalThree: 'Keep the source.',
    previewEyebrow: 'THE INTERFACE', previewTitle: 'Search across every source at once.', previewText: 'One query surfaces facts, decisions, and evidence from all your conversations and documents — each linked to its original source.',
    problemLabel: 'THE PROBLEM', problemTitle: 'Your knowledge is everywhere. Its history should not be.', problemText: 'Important reasoning gets scattered across AI chats, Notion pages, project files, manuals, and passing decisions. Months later, search can find words, but not reliably explain what you chose or why.', sourceA: 'AI conversations preserve the reasoning and alternatives.', sourceB: 'Notes preserve intentions, plans, and deliberate summaries.', sourceC: 'Documents add reference material and new evidence.', sourceD: 'Decisions make the current choice explicit.',
    flowLabel: 'THE FLOW', flowTitle: 'Do not decide what to remember while you are learning it.', flowOneTitle: 'Capture', flowOneText: 'Conversations are archived automatically, so useful context is not lost because you forgot to save it.', flowTwoTitle: 'Connect', flowTwoText: 'Bring in the notes and documents that give your conversations a wider context.', flowThreeTitle: 'Curate', flowThreeText: 'AI-extracted facts and relations are reviewed by you, while original evidence stays intact.', flowFourTitle: 'Recall', flowFourText: 'Ask what you chose, why you chose it, and what has changed since.',
    principlesLabel: 'TRUST BY DESIGN', principlesTitle: 'A source is not automatically a fact.', principlesText: 'EngramVault separates what a source says from what you have confirmed. That makes it possible to remember your history without treating an old note or an AI answer as permanent truth.', layerEvidence: 'A conversation, note, or document with provenance.', layerClaim: 'An AI-extracted suggestion or unverified hypothesis.', layerFact: 'A current state you have confirmed.', layerDecision: 'A choice that can be adopted, revised, or superseded.',
    installLabel: 'SELF-HOST', installTitle: 'Running in two minutes.', installText: 'EngramVault is completely open-source and runs as a single Docker container. No cloud account, no subscription, no data leaving your machine.', codeLabel: 'QUICK START', codeCopy: 'COPY', feat1: 'Hybrid FTS5 + semantic vector search', feat2: 'Native MCP server for AI agent integration', feat3: 'REST API for custom workflows', feat4: 'Multi-arch: amd64 and arm64 (Raspberry Pi, NAS)', feat5: '100% Open Source on GitHub under MIT License', feat6: 'Zero external telemetry — local-first by design', repoCta: 'Explore the source code & star on GitHub <span aria-hidden="true">↗</span>',
    openLabel: 'BUILT FOR CONTROL', openTitle: 'Private by default. Useful wherever you work.', openText: 'EngramVault is designed to run under your control. Hybrid search, source-aware knowledge, and MCP make the same memory available to you and the AI tools you choose.', openCta: 'View project on GitHub <span aria-hidden="true">↗</span>',
    finalEyebrow: 'OPEN SOURCE & SELF-HOSTED', finalTitle: 'Build a memory that does not forget the context.', finalText: 'EngramVault is completely open source under the MIT license and ready to run locally.',
    footer: 'A private, verifiable memory for the AI era.', kofi: 'Support on Ko-fi'
  },
  it: {
    skip: 'Vai al contenuto', navHow: 'Come funziona', navPrinciples: 'Principi', navInstall: 'Self-host', navGithub: 'GitHub ↗', navContact: 'Contatti',
    eyebrow: 'MEMORIA PRIVATA PER L\'ERA DELL\'AI', heroTitle: 'Non perdere mai il <em>perché</em> di una scelta.', heroText: 'EngramVault mantiene connesse, ricercabili e legate alla fonte originale le tue conversazioni AI, note, documenti e decisioni.', ctaGithub: 'Vedi su GitHub', ctaInstall: 'Self-host in 2 minuti', heroNote: 'Open-source e self-hosted per scelta. La tua memoria resta tua.',
    consoleLabel: 'CHIEDI ALLA TUA MEMORIA', consoleStatus: 'FONTI CONNESSE', consoleQuestion: 'Quale tipo di DB avevamo scelto per EngramVault?', decision: 'DECISIONE', evidence: 'EVIDENZA', sourceOneTitle: 'SQLite integrato adottato per storage locale-first a latenza zero', sourceOneMeta: 'Conversazione AI · 12 mar 2026', sourceTwoTitle: 'Decisione Architetturale: SQLite vs demone PostgreSQL', sourceTwoMeta: 'ADR Tecnico · 20 set 2026', answerLabel: 'COSA SA LA TUA MEMORIA', answerText: 'Hai scelto SQLite integrato (vault.db) con estensioni FTS5 BM25 e vettori semantici a 384 dimensioni: zero dipendenze esterne, piena sovranità sui dati e query sub-millisecondo su Mac, Linux e NAS.',
    signalOne: 'Cattura tutto.', signalTwo: 'Cura ciò che conta.', signalThree: 'Conserva la fonte.',
    previewEyebrow: 'L\'INTERFACCIA', previewTitle: 'Cerca in tutte le fonti contemporaneamente.', previewText: 'Una sola query fa emergere fatti, decisioni ed evidenze da tutte le conversazioni e i documenti — ognuno collegato alla fonte originale.',
    problemLabel: 'IL PROBLEMA', problemTitle: 'La tua conoscenza è ovunque. La sua storia non dovrebbe esserlo.', problemText: 'Ragionamenti importanti finiscono dispersi fra chat AI, pagine Notion, file di progetto, manuali e decisioni prese al volo. Dopo mesi, la ricerca trova parole, ma non spiega con affidabilità cosa hai scelto e perché.', sourceA: 'Le conversazioni AI conservano ragionamenti e alternative.', sourceB: 'Le note conservano intenzioni, piani e sintesi deliberate.', sourceC: 'I documenti aggiungono riferimenti ed evidenza nuova.', sourceD: 'Le decisioni rendono esplicita la scelta corrente.',
    flowLabel: 'IL FLOW', flowTitle: 'Non decidere cosa ricordare mentre lo stai imparando.', flowOneTitle: 'Cattura', flowOneText: 'Le conversazioni vengono archiviate automaticamente, senza perdere contesto utile perché ti sei dimenticato di salvarlo.', flowTwoTitle: 'Connetti', flowTwoText: 'Aggiungi note e documenti che danno alle conversazioni un contesto più ampio.', flowThreeTitle: 'Cura', flowThreeText: 'Fatti e relazioni estratti tramite AI vengono revisionati da te, mentre la fonte originale resta intatta.', flowFourTitle: 'Richiama', flowFourText: 'Chiedi cosa avevi scelto, perché e cosa è cambiato nel frattempo.',
    principlesLabel: 'FIDUCIA BY DESIGN', principlesTitle: 'Una fonte non è automaticamente un fatto.', principlesText: 'EngramVault separa ciò che una fonte afferma da ciò che hai confermato. Puoi ricordare la tua storia senza trattare una nota vecchia o una risposta AI come verità permanente.', layerEvidence: 'Una conversazione, nota o documento con provenienza.', layerClaim: 'Un\'ipotesi o relazione estratta da AI non ancora verificata.', layerFact: 'Uno stato corrente che hai confermato.', layerDecision: 'Una scelta adottata, rivista o superata.',
    installLabel: 'SELF-HOST', installTitle: 'Operativo in due minuti.', installText: 'EngramVault è completamente open source e si avvia come singolo container Docker. Nessun account cloud, nessun abbonamento, nessun dato che lascia la tua macchina.', codeLabel: 'AVVIO RAPIDO', codeCopy: 'COPIA', feat1: 'Ricerca ibrida FTS5 + vettori semantici', feat2: 'Server MCP nativo per agenti AI', feat3: 'REST API per workflow personalizzati', feat4: 'Multi-arch: amd64 e arm64 (Raspberry Pi, NAS)', feat5: '100% Open Source su GitHub con licenza MIT', feat6: 'Zero telemetria esterna — privacy e local-first', repoCta: 'Esplora il codice sorgente & metti una stella su GitHub <span aria-hidden="true">↗</span>',
    openLabel: 'COSTRUITO PER IL CONTROLLO', openTitle: 'Privato per impostazione. Utile ovunque lavori.', openText: 'EngramVault è progettato per funzionare sotto il tuo controllo. Ricerca ibrida, conoscenza con fonti e MCP rendono la stessa memoria disponibile a te e agli strumenti AI che scegli.', openCta: 'Visualizza progetto su GitHub <span aria-hidden="true">↗</span>',
    finalEyebrow: 'OPEN SOURCE & SELF-HOSTED', finalTitle: 'Costruisci una memoria che non dimentica il contesto.', finalText: 'EngramVault è completamente open-source con licenza MIT e pronto per l\'esecuzione in locale.',
    footer: 'Una memoria privata e verificabile per l\'era dell\'AI.', kofi: 'Supporta su Ko-fi'
  }
};

const root = document.documentElement;
const languageButton = document.querySelector('[data-language-toggle]');
const themeButton = document.querySelector('[data-theme-toggle]');

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = dictionary[element.dataset.i18nHtml]; });
  languageButton.textContent = language === 'en' ? 'IT' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Italian' : 'Passa all\'inglese');
  localStorage.setItem('engramvault-language', language);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  localStorage.setItem('engramvault-theme', theme);
}

// Copy button
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.copyTarget);
    if (!target) return;
    navigator.clipboard.writeText(target.textContent.trim()).then(() => {
      btn.classList.add('copied');
      const original = btn.textContent;
      btn.textContent = '✓ COPIED';
      setTimeout(() => { btn.classList.remove('copied'); btn.textContent = original; }, 2000);
    });
  });
});

setTheme(localStorage.getItem('engramvault-theme') || 'dark');
setLanguage(localStorage.getItem('engramvault-language') || 'en');
languageButton.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'it' : 'en'));
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
