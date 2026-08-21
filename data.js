/* ==========================================================================
   Maturity Scan Digitaal Toetsen — data.js
   Inhoud gebaseerd op:
   - Handboek Digitaal Toetsen (SURF / SIG / Community Digitaal toetsen en
     ontwikkelen) — sig-dt.github.io/handboek-digitaal-toetsen
   - Toetsweb-Scan (HAN, methodiek "De Toetsing Getoetst") — toetsweb.netlify.app
   - Vormgeving geïnspireerd op de Innovatie Maturity Scan (TIM Foundation)
   ========================================================================== */

const LEVELS = [
  {
    key: "A",
    value: 1,
    label: "Ad hoc",
    short: "Toeval en goede bedoelingen",
    description:
      "Er gebeurt van alles, maar vooral op initiatief van individuele docenten. Er is geen gedeeld beeld en geen vastgelegde aanpak."
  },
  {
    key: "B",
    value: 2,
    label: "Herkenbaar",
    short: "Losse afspraken, nog niet geborgd",
    description:
      "Er zijn eerste afspraken en voorbeelden, maar die leven vooral bij een aantal enthousiastelingen. Het is nog afhankelijk van personen."
  },
  {
    key: "C",
    value: 3,
    label: "Gestructureerd",
    short: "Vastgelegd en gedeeld",
    description:
      "Er is een gedragen aanpak die is vastgelegd, gedeeld en door de meeste betrokkenen wordt gevolgd. De basis staat."
  },
  {
    key: "D",
    value: 4,
    label: "Beheerst",
    short: "Gestuurd op kwaliteit",
    description:
      "De aanpak wordt gemonitord en bijgestuurd op basis van gegevens en ervaringen. Verantwoordelijkheden zijn belegd."
  },
  {
    key: "E",
    value: 5,
    label: "Optimaliserend",
    short: "Continu verbeteren en vooroplopen",
    description:
      "Er is een cultuur van continu leren en verbeteren. De instelling loopt voorop en deelt kennis met anderen."
  }
];

const DOMAINS = [
  {
    id: "beleid",
    number: 1,
    name: "Beleid & visie",
    tagline: "De uitgangspunten voor digitaal toetsen",
    color: "#DD784B",
    chapter: "Hoofdstuk 2 · Randvoorwaarden",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/02-randvoorwaarden.html",
    intro:
      "Een heldere visie op toetsen bepaalt welke digitale ondersteuning nodig is. Toets je vooral om van te leren, om te beoordelen, of allebei? Dit thema kijkt naar visie, beleid en de mate waarin die breed gedragen worden.",
    aspects: [
      {
        id: "visie",
        title: "Visie op toetsen",
        levels: [
          "Er is geen gedeelde visie op toetsen; iedereen vult dit persoonlijk in.",
          "Er zijn eerste gesprekken gevoerd over een gezamenlijke visie, nog niet vastgelegd.",
          "Er ligt een vastgestelde visie op toetsen, gebaseerd op bijvoorbeeld het Toekomstperspectief op digitaal toetsen.",
          "De visie stuurt aantoonbaar keuzes voor toetsvormen, systemen en scholing.",
          "De visie wordt periodiek herijkt met docenten, studenten en examencommissies, en werkt inspirerend."
        ]
      },
      {
        id: "toetsbeleid",
        title: "Toetsbeleid",
        levels: [
          "Er is geen toetsbeleid; keuzes worden per vak of docent gemaakt.",
          "Losse afspraken over toetsen bestaan, maar zijn niet gebundeld in beleid.",
          "Er is een toetsbeleidsdocument, bijvoorbeeld opgesteld met het Stappenplan digitaal toetsbeleid van SURF.",
          "Het toetsbeleid wordt actief gebruikt bij ontwerp, inkoop en kwaliteitszorg van toetsen.",
          "Het toetsbeleid wordt jaarlijks geëvalueerd en bijgesteld op basis van data en trends."
        ]
      },
      {
        id: "draagvlak",
        title: "Draagvlak en eigenaarschap",
        levels: [
          "Toetsbeleid is onbekend bij de meeste docenten en studenten.",
          "Een kleine groep kartrekkers kent en gebruikt het beleid.",
          "Management, examencommissie en docenten kennen en onderschrijven het beleid.",
          "Eigenaarschap is helder belegd; rollen en verantwoordelijkheden zijn vastgelegd.",
          "Toetsbeleid is onderdeel van de professionele cultuur en wordt actief uitgedragen."
        ]
      },
      {
        id: "hulpmiddelen",
        title: "Gebruik van hulpmiddelen voor visie en positiebepaling",
        levels: [
          "Er zijn geen instrumenten gebruikt om de visie of huidige stand van zaken te bepalen.",
          "Er is incidenteel gebruikgemaakt van een tool zoals de Visietool Toetsen.",
          "Positiebepaling is één keer gedaan, bijvoorbeeld met een maturity scan of de Toetsweb-Scan.",
          "Positiebepaling gebeurt periodiek en de uitkomsten leiden tot concrete actieplannen.",
          "Positiebepaling is een terugkerend onderdeel van de kwaliteitscyclus, met opvolging op alle niveaus."
        ]
      },
      {
        id: "deskundigheid",
        title: "Deskundigheid en scholing",
        levels: [
          "Er is geen scholing of deskundigheidsbevordering rond (digitaal) toetsen.",
          "Losse, incidentele scholingsmomenten vinden plaats, vooral op eigen initiatief.",
          "Er is een vast scholingsaanbod rond toetsdeskundigheid voor docenten.",
          "Scholing is verplicht of sterk aanbevolen en aantoonbaar gekoppeld aan rollen, zoals itemconstructeur of examinator.",
          "Deskundigheidsbevordering is continu, wordt geëvalueerd en houdt gelijke tred met nieuwe ontwikkelingen."
        ]
      }
    ]
  },
  {
    id: "toetsvormen",
    number: 2,
    name: "Toetsvormen & kwaliteit",
    tagline: "Passende vormen en goed gemaakte vragen",
    color: "#3D68EC",
    chapter: "Hoofdstuk 3 & 6 · Toetsvormen, Kwaliteit toetsvragen",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/03-toetsvormen.html",
    intro:
      "Digitaal toetsen maakt nieuwe toetsvormen mogelijk, van geautomatiseerde kennistoetsen tot rijke, authentieke opdrachten. Dit thema gaat over variatie in vormen én over de kwaliteit van het vraagontwerp.",
    aspects: [
      {
        id: "variatie",
        title: "Variatie in toetsvormen",
        levels: [
          "Er wordt vrijwel uitsluitend met traditionele schriftelijke toetsen gewerkt.",
          "Enkele docenten experimenteren op eigen initiatief met digitale toetsvormen.",
          "Een palet aan digitale toetsvormen is beschikbaar en bekend bij docenten.",
          "De keuze voor een toetsvorm wordt bewust gemaakt op basis van leerdoelen en constructive alignment.",
          "Toetsvormen worden continu doorontwikkeld, inclusief authentieke en rijke vormen."
        ]
      },
      {
        id: "vraagontwerp",
        title: "Kwaliteit van vraagontwerp",
        levels: [
          "Vragen worden individueel gemaakt, zonder gedeelde kwaliteitscriteria.",
          "Er zijn losse tips en voorbeelden voor het maken van goede vragen.",
          "Er zijn gedeelde richtlijnen voor vraagontwerp, bijvoorbeeld een itemschrijfhandleiding.",
          "Vragen worden systematisch gereviewd door collega's voordat ze worden ingezet.",
          "Vraagontwerp wordt continu verbeterd op basis van analysegegevens en peer review."
        ]
      },
      {
        id: "analyse",
        title: "Toetsanalyse en validatie",
        levels: [
          "Toetsresultaten worden niet geanalyseerd na afname.",
          "Cijfers worden bekeken, maar item- of toetsanalyse ontbreekt.",
          "Basale toetsanalyse (bijvoorbeeld p-waarden) wordt af en toe uitgevoerd.",
          "Toetsanalyse is een vast onderdeel van de kwaliteitscyclus rond elke toets.",
          "Toetsanalyse voedt structureel de itembank en het ontwerp van nieuwe toetsen."
        ]
      },
      {
        id: "balans",
        title: "Formatief en summatief in balans",
        levels: [
          "Toetsen is vrijwel uitsluitend summatief en gericht op een cijfer.",
          "Er is beperkte aandacht voor formatieve toetsing, los van het summatieve programma.",
          "Formatieve en summatieve toetsing zijn beide belegd in de opleiding.",
          "Formatief en summatief toetsen zijn inhoudelijk op elkaar afgestemd binnen de toetsprogrammering.",
          "Studenten en docenten gebruiken formatieve data actief om leren en toetsen te verbeteren."
        ]
      },
      {
        id: "toegankelijkheid-vorm",
        title: "Toegankelijkheid van toetsen",
        levels: [
          "Er is geen aandacht voor toegankelijkheid van toetsen voor studenten met een ondersteuningsbehoefte.",
          "Aanpassingen, zoals extra tijd, worden per geval en ad hoc geregeld.",
          "Er zijn vastgelegde afspraken over aangepaste toetsomstandigheden en voorzieningen.",
          "Toegankelijkheid wordt al bij het ontwerp van een toets meegenomen, niet pas achteraf.",
          "Toegankelijkheid is vanzelfsprekend onderdeel van de toetscultuur en wordt continu verbeterd samen met studenten."
        ]
      }
    ]
  },
  {
    id: "systemen",
    number: 3,
    name: "Systemen & standaarden",
    tagline: "De technische ruggengraat van digitaal toetsen",
    color: "#00846B",
    chapter: "Hoofdstuk 4 & 5 · Toetssystemen, Toetsstandaarden",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/04-toetssystemen.html",
    intro:
      "Toetssystemen en de standaarden waarmee ze toetsmateriaal uitwisselen, bepalen de flexibiliteit en toekomstbestendigheid van digitaal toetsen.",
    aspects: [
      {
        id: "keuze-systemen",
        title: "Keuze en beheer van toetssystemen",
        levels: [
          "Er is geen bewuste keuze gemaakt; systemen worden ad hoc gebruikt.",
          "Eén of meerdere systemen zijn in gebruik, zonder gezamenlijk afwegingskader.",
          "Er is een bewuste, gedocumenteerde keuze voor het toetssysteem of de toetssystemen.",
          "Beheer en doorontwikkeling van systemen zijn structureel belegd, inclusief gebruikersondersteuning.",
          "De systeemkeuze wordt periodiek heroverwogen op basis van behoeften en ontwikkelingen in de markt."
        ]
      },
      {
        id: "standaarden",
        title: "Gebruik van toetsstandaarden",
        levels: [
          "Er wordt geen rekening gehouden met standaarden zoals QTI bij het uitwisselen van materiaal.",
          "Standaarden zijn bekend, maar toetsmateriaal wordt meestal handmatig overgezet.",
          "Bij nieuwe toetsmaterialen wordt bewust gekozen voor standaard-conforme formats.",
          "Uitwisseling van toetsmateriaal tussen systemen verloopt overwegend via standaarden.",
          "De instelling volgt actief de ontwikkeling van standaarden en past die tijdig toe."
        ]
      },
      {
        id: "koppeling",
        title: "Koppeling met de leeromgeving",
        levels: [
          "Toetssysteem en leeromgeving staan los van elkaar, met veel handwerk.",
          "Er zijn losse koppelingen gerealiseerd, met wisselende betrouwbaarheid.",
          "Toetssysteem en leeromgeving zijn structureel gekoppeld (bijvoorbeeld via LTI).",
          "Koppelingen worden gemonitord en snel hersteld bij verstoringen.",
          "Systemen vormen een naadloze leer- en toetsomgeving voor studenten en docenten."
        ]
      },
      {
        id: "continuiteit",
        title: "Technisch beheer en continuïteit",
        levels: [
          "Er is geen zicht op risico's rond uitval tijdens een toetsafname.",
          "Bij storingen wordt ad hoc gehandeld, zonder vastgelegde procedure.",
          "Er zijn noodprocedures en een helpdesk beschikbaar tijdens toetsafnames.",
          "Continuïteit wordt getest (bijvoorbeeld capaciteitstests) voorafgaand aan grote afnames.",
          "Continuïteitsmanagement is volledig ingebed, met evaluatie en verbetering na elke afname."
        ]
      },
      {
        id: "toegangsrechten",
        title: "Rollen en toegangsrechten",
        levels: [
          "Toegang tot het toetssysteem is niet geregeld via rollen; iedereen heeft dezelfde rechten.",
          "Er zijn losse afspraken over wie wat mag, maar dit is niet vastgelegd in het systeem.",
          "Rollen en rechten, zoals docent, examinator en beheerder, zijn ingericht in het systeem.",
          "Toegangsrechten worden periodiek gecontroleerd en tijdig aangepast bij personeelswisselingen.",
          "Rollenbeheer is volledig geautomatiseerd en gekoppeld aan HR- of studentinformatiesystemen."
        ]
      }
    ]
  },
  {
    id: "itembanken",
    number: 4,
    name: "Itembanken & samenwerking",
    tagline: "Vragen hergebruiken, delen en doorontwikkelen",
    color: "#231F20",
    chapter: "Hoofdstuk 7 · Itembanken",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/07-itembanken.html",
    intro:
      "Een goed opgezette itembank maakt het mogelijk om vragen efficiënt te hergebruiken, te analyseren en samen te onderhouden.",
    aspects: [
      {
        id: "opzet",
        title: "Opzet van de itembank",
        levels: [
          "Vragen staan verspreid in documenten van individuele docenten.",
          "Er is een gedeelde plek voor vragen, zonder duidelijke structuur.",
          "Er is een itembank met een vastgestelde structuur en toegangsregels.",
          "De itembank wordt actief gevuld en onderhouden volgens afspraken.",
          "De itembank is een centraal, continu verrijkt kennisbestand voor de hele opleiding."
        ]
      },
      {
        id: "metadata",
        title: "Metadatering en hergebruik",
        levels: [
          "Vragen hebben geen metadata; hergebruik is afhankelijk van geheugen.",
          "Sommige vragen zijn gelabeld, bijvoorbeeld met een onderwerp.",
          "Vragen zijn consequent gelabeld met onderwerp, niveau en toetsdoel.",
          "Metadata wordt gebruikt om toetsen samen te stellen en dekking te bewaken.",
          "Metadata en analysegegevens samen sturen actief de doorontwikkeling van de itembank."
        ]
      },
      {
        id: "samenwerking",
        title: "Samenwerking tussen opleidingen",
        levels: [
          "Er is geen uitwisseling van vragen of ervaring tussen opleidingen.",
          "Incidenteel wordt materiaal gedeeld tussen collega's.",
          "Er zijn afspraken over het delen van vragen binnen de opleiding of instelling.",
          "Itembanken worden structureel gedeeld tussen verwante opleidingen.",
          "De instelling werkt samen met andere instellingen aan gedeelde itembanken."
        ]
      },
      {
        id: "kwaliteitsborging-items",
        title: "Kwaliteitsborging van de itembank",
        levels: [
          "Er is geen zicht op de kwaliteit van vragen in de bank.",
          "Verouderde of slecht functionerende vragen worden soms toevallig ontdekt.",
          "Er is een periodieke check op kwaliteit en actualiteit van vragen.",
          "Itemanalyse wordt structureel gekoppeld aan onderhoud van de itembank.",
          "Kwaliteitsborging is volledig geautomatiseerd en ondersteund door data-analyse."
        ]
      },
      {
        id: "auteursrecht",
        title: "Auteursrecht en gebruiksrechten",
        levels: [
          "Er is geen aandacht voor auteursrecht of gebruiksrechten van vragen in de itembank.",
          "Er is een globaal besef dat dit relevant is, zonder concrete afspraken.",
          "Er zijn afspraken vastgelegd over eigenaarschap en gebruiksrechten van items.",
          "Bij het delen van items tussen opleidingen of instellingen worden rechten expliciet geregeld.",
          "Gebruiksrechten zijn geborgd in de itembank zelf, ook bij extern hergebruik of samenwerking."
        ]
      }
    ]
  },
  {
    id: "veiligheid",
    number: 5,
    name: "Veiligheid & integriteit",
    tagline: "Een betrouwbaar en eerlijk toetsproces",
    color: "#B23A55",
    chapter: "Hoofdstuk 8 · Veilig digitaal toetsen",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/08-veilig-digitaal-toetsen.html",
    intro:
      "Veilig toetsen gaat over het hele proces: van risicoanalyse en proctoring tot het omgaan met fraude en onregelmatigheden.",
    aspects: [
      {
        id: "risicoanalyse",
        title: "Risicoanalyse toetsproces",
        levels: [
          "Er is geen zicht op risico's in het toetsproces.",
          "Risico's worden soms besproken, maar niet systematisch vastgelegd.",
          "Er is een risicoanalyse uitgevoerd, bijvoorbeeld met het Werkboek Veilig toetsen.",
          "Maatregelen uit de risicoanalyse zijn geïmplementeerd en belegd.",
          "De risicoanalyse wordt periodiek herhaald en actief gebruikt om te verbeteren."
        ]
      },
      {
        id: "proctoring",
        title: "Online proctoring",
        levels: [
          "Er is geen beleid over online surveilleren op afstand.",
          "Proctoring wordt incidenteel en ad hoc ingezet.",
          "Er is een afgewogen keuze over óf en hoe proctoring wordt ingezet, mede op basis van de SURF-whitepaper.",
          "Proctoring-beleid houdt rekening met privacy, toegankelijkheid en studentenwelzijn.",
          "Proctoring-inzet wordt periodiek geëvalueerd en waar mogelijk vervangen door alternatieve toetsvormen."
        ]
      },
      {
        id: "fraude",
        title: "Fraude en onregelmatigheden",
        levels: [
          "Er is geen procedure voor het omgaan met fraude of onregelmatigheden.",
          "Er zijn losse afspraken, sterk afhankelijk van de examinator.",
          "Er is een vastgelegd stappenplan voor onregelmatigheden en fraude.",
          "Examencommissies passen het stappenplan consistent en aantoonbaar toe.",
          "Fraudepreventie is geïntegreerd in toetsontwerp, niet alleen in de afhandeling achteraf."
        ]
      },
      {
        id: "privacy",
        title: "Privacy en gegevensbescherming",
        levels: [
          "Er is geen aandacht voor privacy bij de inzet van digitale toetstools.",
          "Privacy komt af en toe aan de orde, zonder formele toetsing.",
          "Nieuwe toetstools worden getoetst aan de AVG voordat ze in gebruik gaan.",
          "Privacyafwegingen zijn vastgelegd, bijvoorbeeld in DPIA's voor toetssystemen.",
          "Privacy by design is een vast onderdeel van de keuze en inrichting van toetstools."
        ]
      },
      {
        id: "identificatie",
        title: "Identificatie en authenticatie",
        levels: [
          "Er wordt niet gecontroleerd of de student die de toets maakt ook daadwerkelijk de ingeschreven student is.",
          "Identiteitscontrole gebeurt incidenteel en informeel.",
          "Er is een vastgelegde werkwijze voor identificatie bij toetsafnames, op locatie of op afstand.",
          "Identificatie wordt consistent toegepast en is afgestemd op het risico van de toets.",
          "Identificatie en authenticatie worden periodiek geëvalueerd en waar nodig vernieuwd."
        ]
      }
    ]
  },
  {
    id: "innovatie",
    number: 6,
    name: "Innovatie & toekomstgerichtheid",
    tagline: "Meebewegen met nieuwe mogelijkheden",
    color: "#A67C00",
    chapter: "Hoofdstuk 9 · Innovaties",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/09-innovaties.html",
    intro:
      "Nieuwe technologie, zoals AI, verandert wat toetsen kan betekenen. Dit thema gaat over de mate waarin een opleiding verkent, experimenteert en vooruitkijkt.",
    aspects: [
      {
        id: "verkennen",
        title: "Verkennen van innovaties",
        levels: [
          "Nieuwe ontwikkelingen zoals AI worden niet gevolgd of besproken.",
          "Individuele docenten volgen ontwikkelingen op eigen initiatief.",
          "Er is een vast moment waarop innovaties gezamenlijk worden verkend.",
          "Innovaties worden systematisch beoordeeld op kansen en risico's voor toetsen.",
          "De opleiding loopt aantoonbaar voorop bij het verkennen van nieuwe mogelijkheden."
        ]
      },
      {
        id: "experimenteren",
        title: "Ruimte om te experimenteren",
        levels: [
          "Er is geen ruimte of budget om met nieuwe toetsvormen te experimenteren.",
          "Experimenten gebeuren incidenteel, buiten de reguliere kaders om.",
          "Er is expliciete ruimte (tijd, budget) om te experimenteren met innovaties.",
          "Experimenten worden geëvalueerd en bij succes opgeschaald.",
          "Experimenteren is een structureel onderdeel van de onderwijs- en toetscyclus."
        ]
      },
      {
        id: "kennisdeling",
        title: "Kennisdeling en netwerken",
        levels: [
          "Er is geen contact met andere instellingen over digitaal toetsen.",
          "Kennis wordt af en toe gedeeld via informele contacten.",
          "De opleiding neemt actief deel aan netwerken zoals de Community Digitaal toetsen en ontwikkelen.",
          "Opgedane kennis wordt structureel teruggekoppeld en toegepast binnen de opleiding.",
          "De opleiding draagt zelf actief bij aan kennisontwikkeling, bijvoorbeeld via publicaties of het handboek."
        ]
      },
      {
        id: "toekomstbestendigheid",
        title: "Toekomstbestendigheid van de strategie",
        levels: [
          "Er is geen doordachte strategie voor de toekomst van toetsen.",
          "Er zijn losse ideeën over de toekomst, niet vertaald naar een plan.",
          "Er is een toekomstgerichte strategie, bijvoorbeeld gebaseerd op het Toekomstperspectief 2027.",
          "De strategie wordt regelmatig getoetst aan actuele ontwikkelingen en bijgesteld.",
          "De strategie is toonaangevend en wordt gebruikt als voorbeeld door andere instellingen."
        ]
      },
      {
        id: "studentbetrokkenheid",
        title: "Betrokkenheid van studenten bij innovatie",
        levels: [
          "Studenten worden niet betrokken bij innovaties rond toetsen.",
          "Studenten worden af en toe geraadpleegd, zonder vaste vorm.",
          "Er is een vast moment waarop studenten meedenken over vernieuwing van toetsen.",
          "Studenten zijn actief partner bij het ontwerpen en testen van nieuwe toetsvormen.",
          "Studenten hebben een structurele stem in de innovatieagenda rond toetsen."
        ]
      }
    ]
  },
  {
    id: "ai-toetsing",
    number: 7,
    name: "AI & toetsing",
    tagline: "Toetsen in een tijd van generatieve AI",
    color: "#6E4FC9",
    chapter: "Hoofdstuk 9 · Innovaties",
    chapterUrl:
      "https://sig-dt.github.io/handboek-digitaal-toetsen/09-innovaties.html",
    intro:
      "Generatieve AI verandert zowel hoe studenten toetsen kunnen maken als hoe toetsen ontworpen, ondersteund en nagekeken kunnen worden. Dit thema gaat over AI-bestendig toetsontwerp, spelregels voor studenten, AI-ondersteuning voor docenten en hoe u omgaat met (vermoedelijk) AI-gebruik.",
    aspects: [
      {
        id: "ai-toetsontwerp",
        title: "AI-bestendig toetsontwerp",
        levels: [
          "Toetsen zijn niet aangepast aan de komst van generatieve AI; opdrachten zijn eenvoudig door een AI-tool te maken.",
          "Docenten zijn zich bewust van het risico, maar passen het toetsontwerp nog niet structureel aan.",
          "Toetsen worden bewust doorgelicht op AI-gevoeligheid, bijvoorbeeld met een toolkit zoals AI-Bestendig Toetsen (HAN).",
          "Opleidingen passen toetsvormen structureel aan (proces, mondeling, authentiek) om AI-bestendigheid te vergroten.",
          "AI-bestendigheid is een vast criterium bij elk toetsontwerp en wordt periodiek herijkt aan nieuwe AI-mogelijkheden."
        ]
      },
      {
        id: "ai-spelregels",
        title: "Spelregels voor studenten",
        levels: [
          "Er zijn geen afspraken over het gebruik van AI door studenten bij toetsen.",
          "Er zijn losse, per docent verschillende afspraken over AI-gebruik.",
          "Er is een gedeeld kader dat aangeeft wanneer AI wel of niet is toegestaan bij een toets.",
          "Studenten worden actief geïnformeerd en toegerust in verantwoord en transparant AI-gebruik.",
          "Spelregels voor AI-gebruik worden samen met studenten doorontwikkeld en passen bij de leerdoelen per toets."
        ]
      },
      {
        id: "ai-ondersteuning-docent",
        title: "AI-ondersteuning voor docenten",
        levels: [
          "AI wordt niet gebruikt bij het ontwikkelen, nakijken of analyseren van toetsen.",
          "Individuele docenten experimenteren op eigen initiatief met AI, bijvoorbeeld bij vraagontwikkeling.",
          "Er zijn gedeelde voorbeelden en richtlijnen voor het inzetten van AI bij toetsontwikkeling en feedback.",
          "AI-ondersteuning bij toetsontwikkeling of nakijken wordt structureel en verantwoord ingezet, met menselijke controle.",
          "De opleiding zet AI doordacht in binnen de hele toetscyclus en deelt de opgedane ervaring met anderen."
        ]
      },
      {
        id: "ai-omgaan-gebruik",
        title: "Omgaan met (onterecht) AI-gebruik",
        levels: [
          "Er is geen beeld van hoe wordt omgegaan met vermoedelijk onterecht AI-gebruik bij een toets.",
          "Signalen van AI-gebruik worden per geval en ad hoc beoordeeld.",
          "Er is een aanpak die aansluit bij het stappenplan onregelmatigheden en fraude, toegespitst op AI-gebruik.",
          "Docenten en examencommissies zijn geschoold in het herkennen en bespreekbaar maken van AI-gebruik.",
          "De opleiding zet in op transparantie en het gesprek met studenten, naast (niet uitsluitend) detectie."
        ]
      },
      {
        id: "ai-geletterdheid",
        title: "AI-geletterdheid",
        levels: [
          "Er is geen aandacht voor AI-geletterdheid bij docenten of studenten.",
          "Enkele docenten of studenten verdiepen zich op eigen initiatief in AI.",
          "Er is een basisaanbod om AI-geletterdheid van docenten en studenten te vergroten.",
          "AI-geletterdheid is een vast onderdeel van scholing en het curriculum.",
          "De opleiding loopt voorop in AI-geletterdheid en deelt kennis actief met studenten, collega's en andere instellingen."
        ]
      }
    ]
  }
];

/* Uitgebreide aanbevelingen per thema en volwassenheidsniveau (1-5).
   Elke tekst schetst kort wat dit niveau typisch betekent voor dit thema
   en geeft een concrete, haalbare volgende stap, met waar relevant een
   verwijzing naar een hoofdstuk of hulpmiddel uit het handboek. */
const RECOMMENDATIONS = {
  beleid: {
    1: "Toetsen wordt binnen de opleiding vooral per docent ingevuld, zonder gedeeld kompas. Dat is op korte termijn niet erg, maar zonder gemeenschappelijke visie blijft elke discussie over toetsvormen, systemen of scholing een welles-nietesgesprek. Begin klein: organiseer één sessie waarin het team samen het Toekomstperspectief op digitaal toetsen doorneemt en bespreekt wat dit voor de eigen opleiding zou moeten betekenen. Gebruik hoofdstuk 2 (Randvoorwaarden) van het handboek en de Visietool Toetsen als gespreksstarter — dat is genoeg voor een eerste, gedeelde richting.",
    2: "Er liggen al de contouren van een visie, maar die leven vooral bij een aantal kartrekkers. Het risico is dat goede ideeën verdwijnen zodra die mensen van functie wisselen. Leg de bestaande afspraken nu vast in een kort, gedragen document — het Stappenplan digitaal toetsbeleid van SURF is daar specifiek voor gemaakt — en bespreek het expliciet met het hele team, niet alleen met de vaste kartrekkers.",
    3: "De basis staat: er is een vastgestelde visie en beleid dat de meeste collega's kennen. De volgende stap is niet nóg een document, maar ervoor zorgen dat het beleid dagelijks werk daadwerkelijk stuurt: bij het kiezen van toetsvormen, bij inkoop van systemen, bij scholing. Maak 'past dit bij onze visie?' een vast agendapunt bij toetsbeslissingen en in het toetsoverleg.",
    4: "Beleid en visie sturen aantoonbaar de praktijk, en verantwoordelijkheden zijn helder belegd. Dit is een sterke positie. Blijf alert op onderhoud: herijk de visie periodiek, zeker als het onderwijs of de instelling verandert, en betrek bij die herijking niet alleen docenten en de examencommissie maar ook studenten.",
    5: "Toetsbeleid is hier onderdeel van de professionele cultuur, wordt actief uitgedragen en werkt inspirerend. Weinig opleidingen komen zo ver. Overweeg de opgedane ervaring te delen, bijvoorbeeld via de Community Digitaal toetsen en ontwikkelen of als bijdrage aan het handboek zelf, zodat andere opleidingen van deze aanpak kunnen leren."
  },
  toetsvormen: {
    1: "Toetsen leunt hier vrijwel volledig op traditionele, schriftelijke vormen en vragen worden individueel gemaakt zonder gedeelde kwaliteitseisen. Dat werkt, tot het niet meer werkt: kwaliteit wisselt sterk per docent en er gaat veel tijd verloren aan het opnieuw uitvinden van het wiel. Begin met iets kleins en concreets: stel met een paar collega's een korte itemschrijfhandleiding op, gebaseerd op hoofdstuk 3 en 6 van het handboek, en probeer die bij de eerstvolgende toets uit.",
    2: "Er wordt al geëxperimenteerd met digitale toetsvormen en losse tips over vraagontwerp circuleren, maar dit hangt sterk af van individuele inzet. Maak van de losse experimenten gedeelde kennis: verzamel de beste voorbeelden in een gezamenlijk document en organiseer een korte intervisie waarin collega's elkaars vragen becommentariëren vóór afname.",
    3: "Er is een palet aan toetsvormen bekend en gedeelde richtlijnen voor vraagontwerp bestaan. De volgende stap is dit consequent tóépassen: laat elke nieuwe toets daadwerkelijk langs een collega gaan voordat hij wordt afgenomen, en kijk kritisch of formatief en summatief toetsen voldoende in balans zijn binnen de toetsprogrammering.",
    4: "Toetsanalyse en peer review zijn een vast onderdeel van de kwaliteitscyclus, en toetsvormen worden bewust gekozen op basis van leerdoelen. Dit is stevig werk. Zorg dat de uitkomsten van toetsanalyse niet in een la verdwijnen maar structureel terugvloeien naar vraagontwerp en itembank, zodat verbetering een doorlopend proces blijft in plaats van een jaarlijkse exercitie.",
    5: "Toetsvormen worden hier continu doorontwikkeld op basis van data en peer review, inclusief authentieke en rijke vormen. Dit is een uitzonderlijk niveau. Overweeg om als voorbeeldopleiding te fungeren binnen de instelling of daarbuiten, en leg vast wat maakt dat dit hier wél lukt — die kennis is schaars en waardevol voor anderen."
  },
  systemen: {
    1: "Toetssystemen worden ad hoc ingezet en standaarden zoals QTI spelen geen rol bij het uitwisselen van materiaal. Dat is bij een klein aantal toetsen geen ramp, maar het wordt al snel een risico zodra iets stuk gaat of iemand vertrekt. Begin met een eenvoudige inventarisatie: welke systemen zijn er eigenlijk in gebruik, en wie is waarvoor verantwoordelijk? Hoofdstuk 4 en 5 van het handboek geven een goed overzicht om die inventarisatie te structureren.",
    2: "Er zijn systemen in gebruik en her en der een koppeling gerealiseerd, maar zonder gezamenlijk afwegingskader of aandacht voor standaarden. Leg nu vast wélk systeem waarvoor wordt gebruikt en waarom, en verken of nieuw materiaal alvast in een standaard-conform format zoals QTI kan worden gemaakt; dat bespaart later veel overzetwerk.",
    3: "Er is een bewuste, gedocumenteerde keuze voor het toetssysteem en koppelingen met de leeromgeving zijn structureel geregeld. De aandacht kan nu verschuiven van 'het werkt' naar 'het blijft werken': zorg voor een geteste noodprocedure bij storingen en test de capaciteit van het systeem vóór een grote toetsperiode, niet erna.",
    4: "Beheer en continuïteit zijn structureel belegd en koppelingen worden gemonitord. Dit is een volwassen technische basis. Houd de systeemkeuze niet voor vanzelfsprekend: heroverweeg periodiek of het huidige systeem nog aansluit bij de behoeften van de opleiding en bij ontwikkelingen in de markt, zodat een goede keuze niet stilzwijgend een verouderde keuze wordt.",
    5: "Systemen vormen hier een naadloze leer- en toetsomgeving en de instelling volgt actief standaarden en marktontwikkelingen. Weinig instellingen bereiken dit niveau. Deel de architectuurkeuzes en lessen die hiertoe hebben geleid met collega-instellingen, bijvoorbeeld via SURF of de Community Digitaal toetsen en ontwikkelen."
  },
  itembanken: {
    1: "Vragen staan verspreid in documenten van individuele docenten, zonder metadata of gedeelde structuur. Dat betekent dat kennis met mensen de deur uitloopt zodra zij vertrekken. Begin met een simpele, gedeelde plek voor vragen — een map of eenvoudige tool is genoeg — en label vragen voortaan op zijn minst met onderwerp en niveau. Hoofdstuk 7 van het handboek en het Handboek Itembanken geven een compact stappenplan om dit op te zetten.",
    2: "Er is al een gedeelde plek voor vragen en incidenteel wordt materiaal uitgewisseld, maar een duidelijke structuur en afspraken over gebruiksrechten ontbreken nog. Maak nu concrete afspraken: wie mag vragen toevoegen of aanpassen, hoe worden ze gelabeld, en wie is eigenaar van wat er wordt gedeeld?",
    3: "De itembank heeft een vastgestelde structuur, toegangsregels en labels voor onderwerp, niveau en toetsdoel. De volgende stap is de itembank actief te laten leven: koppel toetsanalyse terug naar specifieke vragen, zodat verouderde of slecht functionerende items opvallen en verbeterd of vervangen worden.",
    4: "Metadata en analysegegevens sturen al actief de doorontwikkeling van de itembank, en delen tussen verwante opleidingen gebeurt structureel. Dit werkt goed. Zorg dat gebruiksrechten expliciet zijn geregeld bij dat delen, zeker als vragen ook buiten de eigen opleiding of instelling circuleren, zodat eigenaarschap niet vertroebelt.",
    5: "De itembank is een centraal, continu verrijkt kennisbestand en kwaliteitsborging is grotendeels geautomatiseerd. Dit is uitzonderlijk volwassen. Overweeg samenwerking met andere instellingen aan gedeelde itembanken op te zoeken of te verdiepen; de itembank is dan niet langer een lokaal, maar een landelijk kwaliteitsinstrument."
  },
  veiligheid: {
    1: "Er is geen zicht op risico's in het toetsproces en geen procedure voor fraude, identificatie of privacy. Dat voelt misschien niet urgent tot er iets misgaat, en dan is het te laat om nog rustig na te denken. Begin met het Werkboek Veilig toetsen van SURF: het eerste deel helpt om in een middag een eerste risicoanalyse te maken, wat meteen laat zien waar de grootste kwetsbaarheden zitten.",
    2: "Risico's worden soms besproken en identiteitscontrole gebeurt incidenteel, maar niets is systematisch vastgelegd. Zet de losse afspraken die er al zijn op papier, en gebruik de Handreiking Onregelmatigheden en Fraude als basis voor een eerste, eenvoudig stappenplan waar examinatoren op terug kunnen vallen.",
    3: "Er is een uitgevoerde risicoanalyse, een afgewogen keuze over proctoring en een vastgelegd stappenplan voor fraude en onregelmatigheden. De basis is dus op orde. Zorg dat de maatregelen uit die risicoanalyse ook echt zijn geïmplementeerd — een analyse die in een la ligt beschermt niemand — en dat identificatie bij toetsafnames consistent gebeurt, niet alleen bij de meest risicovolle toetsen.",
    4: "Maatregelen zijn geïmplementeerd, het stappenplan wordt consistent toegepast en proctoring-beleid houdt rekening met privacy en welzijn. Dit is een gedegen niveau van veiligheid. Herhaal de risicoanalyse periodiek, want risico's veranderen, zeker met nieuwe technologie, en evalueer of de inzet van proctoring nog steeds nodig en proportioneel is.",
    5: "Fraudepreventie is geïntegreerd in het toetsontwerp zelf, in plaats van alleen in de afhandeling achteraf, en privacy by design is standaard. Weinig opleidingen komen hier. Blijf de risicoanalyse en aanpak toetsen aan nieuwe ontwikkelingen, en overweeg de aanpak als voorbeeld te delen binnen de instelling of het netwerk rond het handboek."
  },
  innovatie: {
    1: "Nieuwe ontwikkelingen worden niet gevolgd of besproken en er is geen strategie voor de toekomst van toetsen. Dat is begrijpelijk als de waan van de dag al genoeg vraagt, maar het maakt de opleiding kwetsbaar voor verrassingen. Begin klein: agendeer één keer per kwartaal een kort moment om samen te kijken wat er speelt, met hoofdstuk 9 (Innovaties) van het handboek als vertrekpunt.",
    2: "Individuele docenten volgen ontwikkelingen op eigen initiatief en er zijn losse ideeën over de toekomst, maar niets is gedeeld of vastgelegd. Maak van individuele interesse gezamenlijke kennis: laat die docenten kort vertellen wat ze zien, en verzamel de losse ideeën in een eenvoudig document als eerste aanzet tot een strategie.",
    3: "Er is een vast moment voor het verkennen van innovaties en een eerste toekomstgerichte strategie, bijvoorbeeld gebaseerd op het Toekomstperspectief 2027. Zorg dat hier ook echt ruimte, tijd en een beetje budget, tegenover staat om iets uit te proberen, en betrek studenten bij het bedenken en testen van nieuwe vormen; zij zien vaak als eerste wat wel en niet werkt.",
    4: "Innovaties worden systematisch beoordeeld op kansen en risico's, experimenten worden geëvalueerd en bij succes opgeschaald. Dit is een sterke, lerende houding. Zorg dat kennisdeling niet stopt bij de eigen opleiding: neem actief deel aan netwerken zoals de Community Digitaal toetsen en ontwikkelen, zodat er ook van buiten geleerd blijft worden.",
    5: "De opleiding loopt aantoonbaar voorop, experimenteren is een structureel onderdeel van de cyclus en de strategie is toonaangevend voor anderen. Dit is een zeldzaam niveau. Overweeg structureel bij te dragen aan kennisontwikkeling, bijvoorbeeld met een bijdrage aan het handboek zelf, zodat de hele sector meeprofiteert van wat hier is geleerd."
  },
  "ai-toetsing": {
    1: "Toetsen zijn nog niet aangepast aan generatieve AI en er is geen aandacht voor AI-geletterdheid bij docenten of studenten. Dit is op dit moment een van de snelst veranderende risico's in het toetsproces, dus wachten is geen neutrale optie. Begin met één laagdrempelige stap: bekijk met het team de toolkit AI-Bestendig Toetsen van de HAN en licht daarmee een paar bestaande toetsen door op AI-gevoeligheid.",
    2: "Docenten zijn zich bewust van AI, maar afspraken over wanneer het wel of niet mag verschillen per docent, en toetsontwerp is nog niet structureel aangepast. Maak van individueel bewustzijn een gedeeld kader: spreek met het team af wanneer AI-gebruik bij een toets is toegestaan, en communiceer dat helder naar studenten.",
    3: "Toetsen worden al bewust doorgelicht op AI-gevoeligheid, er is een gedeeld kader voor studenten, en een aanpak voor vermoedelijk AI-gebruik sluit aan bij het bestaande fraudestappenplan. Zet nu ook in op AI-geletterdheid: een basisaanbod voor docenten en studenten helpt om AI niet alleen als risico, maar ook als kans te leren zien.",
    4: "Toetsvormen zijn structureel aangepast om AI-bestendiger te zijn, AI wordt verantwoord ingezet bij toetsontwikkeling met menselijke controle, en AI-geletterdheid is onderdeel van scholing. Dit is een vooruitstrevend niveau. Blijf de aanpak herijken: de mogelijkheden van AI veranderen snel, dus wat nu AI-bestendig is, is dat over een jaar mogelijk niet meer.",
    5: "AI-bestendigheid is een vast criterium bij elk toetsontwerp, de opleiding zet AI doordacht in binnen de hele toetscyclus, en er wordt actief ingezet op transparantie en het gesprek met studenten. Weinig opleidingen zijn hier al. Deel de aanpak actief met andere opleidingen en instellingen; dit onderwerp ontwikkelt zich zo snel dat gedeelde kennis voor de hele sector waardevol is."
  }
};

/* Aanbeveling per thema, op basis van de gemiddelde score van dat thema (1-5) */
function getRecommendation(domain, avgValue) {
  const level = Math.min(5, Math.max(1, Math.round(avgValue)));
  const perDomain = RECOMMENDATIONS[domain.id];
  if (perDomain && perDomain[level]) return perDomain[level];
  /* Generieke terugval, mocht een thema geen specifieke tekst hebben */
  const fallback = {
    1: `Begin klein: bespreek binnen het team wat "${domain.name.toLowerCase()}" voor jullie opleiding zou moeten betekenen. Gebruik ${domain.chapter} van het handboek als gezamenlijk startpunt.`,
    2: `Er zijn goede eerste stappen gezet. Leg de losse afspraken rond ${domain.name.toLowerCase()} vast, zodat ze niet afhankelijk blijven van individuele collega's.`,
    3: `De basis staat. Zorg dat afspraken rond ${domain.name.toLowerCase()} breed bekend zijn en daadwerkelijk worden toegepast, niet alleen vastgelegd.`,
    4: `Dit thema is goed op orde. Blijf sturen op basis van gegevens en ervaringen, en borg dat verantwoordelijkheden helder belegd blijven.`,
    5: `Dit thema is sterk ontwikkeld. Overweeg de opgedane kennis te delen met andere opleidingen of instellingen, bijvoorbeeld via de community rond het handboek.`
  };
  return fallback[level] || fallback[3];
}

const GRADE_STAMPS = [
  { min: 1, max: 1.79, label: "Beginnend", stamp: "IN OPBOUW" },
  { min: 1.8, max: 2.59, label: "Herkenbaar", stamp: "EERSTE STAPPEN" },
  { min: 2.6, max: 3.39, label: "Gestructureerd", stamp: "OP KOERS" },
  { min: 3.4, max: 4.19, label: "Beheerst", stamp: "GOED GEREGELD" },
  { min: 4.2, max: 5, label: "Optimaliserend", stamp: "VOOROPLOPEND" }
];

function getGradeStamp(avg) {
  return (
    GRADE_STAMPS.find((g) => avg >= g.min && avg <= g.max) ||
    GRADE_STAMPS[2]
  );
}
