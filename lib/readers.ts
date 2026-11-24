export type Curriculum = 'NCERT / CBSE' | 'Karnataka State' | 'ICSE'
export type StudyMode = 'Recap' | 'Practice questions' | 'Homework help' | 'Chapter Summary – Quick Revision'
export type ReaderSubject = 'Science' | 'English' | 'Mathematics' | 'Social Science' | 'Hindi' | 'Kannada' | 'Computer'

export type ReaderChapter = {
  id: string
  title: string
  section?: string
  printedPage: number
  pdfUrl?: string
  summary?: string
}

export type ReaderBook = {
  id: string
  curriculum: Curriculum
  subject: ReaderSubject
  title: string
  edition: string
  sourceUrl: string
  chapters: ReaderChapter[]
}

const ncertChapterUrl = (bookCode: string, chapter: number) => `https://www.ncert.nic.in/textbook/pdf/${bookCode}${String(chapter).padStart(2, '0')}.pdf`

export const readerBooks: ReaderBook[] = [
  {
    id: 'ncert-science-8',
    curriculum: 'NCERT / CBSE',
    subject: 'Science',
    title: 'Curiosity — Textbook of Science, Grade 8',
    edition: 'NCERT · Grade 8 · 2025',
    sourceUrl: 'https://ncert.nic.in/textbook/pdf/hecu1ps.pdf',
    chapters: [
      { id: 'investigative-world', title: 'Exploring the Investigative World of Science', printedPage: 1, pdfUrl: ncertChapterUrl('hecu1', 1) },
      { id: 'invisible-living-world', title: 'The Invisible Living World: Beyond Our Naked Eye', printedPage: 8, pdfUrl: ncertChapterUrl('hecu1', 2) },
      { id: 'health-treasure', title: 'Health: The Ultimate Treasure', printedPage: 28, pdfUrl: ncertChapterUrl('hecu1', 3) },
      { id: 'electricity-effects', title: 'Electricity: Magnetic and Heating Effects', printedPage: 46, pdfUrl: ncertChapterUrl('hecu1', 4) },
      { id: 'exploring-forces', title: 'Exploring Forces', printedPage: 62, pdfUrl: ncertChapterUrl('hecu1', 5) },
      {
        id: 'pressure-storms-cyclones',
        title: 'Pressure, Winds, Storms, and Cyclones',
        printedPage: 80,
        pdfUrl: 'https://www.ncert.nic.in/textbook/pdf/hecu106.pdf',
        summary: 'Pressure is force per unit area. Air moves from higher-pressure regions to lower-pressure regions, creating wind; fast-moving air has lower pressure. Warm, moist air that rises and cools can form storm clouds, while charge separation in clouds produces lightning. Over warm ocean water, rising moist air and Earth’s rotation can form a rotating cyclone with a calm eye, strong surrounding winds, and heavy rain. The chapter also describes how cyclones weaken after moving over land and the safety measures used during storms.',
      },
      { id: 'particulate-matter', title: 'Particulate Nature of Matter', printedPage: 98, pdfUrl: ncertChapterUrl('hecu1', 7) },
      { id: 'matter-elements', title: 'Nature of Matter: Elements, Compounds, and Mixtures', printedPage: 116, pdfUrl: ncertChapterUrl('hecu1', 8) },
      { id: 'solutes-solvents-solutions', title: 'The Amazing World of Solutes, Solvents, and Solutions', printedPage: 134, pdfUrl: ncertChapterUrl('hecu1', 9) },
      { id: 'light-mirrors-lenses', title: 'Light: Mirrors and Lenses', printedPage: 152, pdfUrl: ncertChapterUrl('hecu1', 10) },
      { id: 'time-skies', title: 'Keeping Time with the Skies', printedPage: 170, pdfUrl: ncertChapterUrl('hecu1', 11) },
      { id: 'nature-harmony', title: 'How Nature Works in Harmony', printedPage: 190, pdfUrl: ncertChapterUrl('hecu1', 12) },
      { id: 'earth-life', title: 'Our Home: Earth, a Unique Life Sustaining Planet', printedPage: 210, pdfUrl: ncertChapterUrl('hecu1', 13) },
    ],
  },
  {
    id: 'ncert-english-8',
    curriculum: 'NCERT / CBSE',
    subject: 'English',
    title: 'Poorvi — Textbook of English, Grade 8',
    edition: 'NCERT · Grade 8 · 2025',
    sourceUrl: 'https://ncert.nic.in/textbook/pdf/hepr1ps.pdf',
    chapters: [
      { id: 'wit-wisdom-story', section: 'Unit 1 · Wit and Wisdom', title: 'The Wit that Won Hearts', printedPage: 1, pdfUrl: ncertChapterUrl('hepr1', 1), summary: 'The textbook describes this story as a tale of the Vijayanagara courtier Tenali Rama. His wit and problem-solving help resolve a disagreement, highlighting reasoning and humour.' },
      { id: 'concrete-example', section: 'Unit 1 · Wit and Wisdom', title: 'A Concrete Example', printedPage: 17, pdfUrl: ncertChapterUrl('hepr1', 1), summary: 'The textbook introduces this poem as an example of irony and satire in everyday situations, showing that people can view the same thing differently.' },
      { id: 'wisdom-paves-way', section: 'Unit 1 · Wit and Wisdom', title: 'Wisdom Paves the Way', printedPage: 27, pdfUrl: ncertChapterUrl('hepr1', 1), summary: 'The textbook describes this play as a situation where different perspectives lead to a solution, emphasizing wisdom, reasoning, and critical thinking.' },
      { id: 'tale-valour', section: 'Unit 2 · Values and Dispositions', title: 'A Tale of Valour: Major Somnath Sharma and the Battle of Badgam', printedPage: 49, pdfUrl: ncertChapterUrl('hepr1', 2), summary: 'The textbook presents Major Somnath Sharma’s story through the values of courage, duty, selflessness, and commitment to the country.' },
      { id: 'somebodys-mother', section: 'Unit 2 · Values and Dispositions', title: 'Somebody’s Mother', printedPage: 70, pdfUrl: ncertChapterUrl('hepr1', 2), summary: 'The textbook describes the poem as a lesson in kindness, empathy, and helping someone in need.' },
      { id: 'verghese-kurien', section: 'Unit 2 · Values and Dispositions', title: 'Verghese Kurien—I Too Had A Dream', printedPage: 82, pdfUrl: ncertChapterUrl('hepr1', 2), summary: 'The textbook presents Kurien’s message of pairing personal achievement with service to the community, honesty, and perseverance.' },
      { id: 'fifth-word', section: 'Unit 3 · Mystery and Magic', title: 'The Case of the Fifth Word', printedPage: 101, pdfUrl: ncertChapterUrl('hepr1', 3), summary: 'The textbook describes this mystery as showing how attention to detail and critical thinking help uncover clues.' },
      { id: 'magic-brush', section: 'Unit 3 · Mystery and Magic', title: 'The Magic Brush of Dreams', printedPage: 122, pdfUrl: ncertChapterUrl('hepr1', 3), summary: 'The textbook presents this poem through creativity, kindness, and using one’s talent for good.' },
      { id: 'spectacular-wonders', section: 'Unit 3 · Mystery and Magic', title: 'Spectacular Wonders', printedPage: 137, pdfUrl: ncertChapterUrl('hepr1', 3) },
      { id: 'cherry-tree', section: 'Unit 4 · Environment', title: 'The Cherry Tree', printedPage: 155, pdfUrl: ncertChapterUrl('hepr1', 4) },
      { id: 'harvest-hymn', section: 'Unit 4 · Environment', title: 'Harvest Hymn', printedPage: 173, pdfUrl: ncertChapterUrl('hepr1', 4) },
      { id: 'waiting-for-rain', section: 'Unit 4 · Environment', title: 'Waiting for the Rain', printedPage: 185, pdfUrl: ncertChapterUrl('hepr1', 4) },
      { id: 'feathered-friend', section: 'Unit 5 · Science and Curiosity', title: 'Feathered Friend', printedPage: 205, pdfUrl: ncertChapterUrl('hepr1', 5), summary: 'The textbook describes this story as exploring companionship beyond human relationships through a bird in space.' },
      { id: 'magnifying-glass', section: 'Unit 5 · Science and Curiosity', title: 'Magnifying Glass', printedPage: 222, pdfUrl: ncertChapterUrl('hepr1', 5), summary: 'The textbook describes this poem as encouraging curiosity about perception and mystery.' },
      { id: 'bibha-chowdhuri', section: 'Unit 5 · Science and Curiosity', title: 'Bibha Chowdhuri: The Beam of Light that Lit the Path for Women in Indian Science', printedPage: 233, pdfUrl: ncertChapterUrl('hepr1', 5), summary: 'The textbook introduces Bibha Chowdhuri’s contribution to science and invites discussion of scientific advancement.' },
    ],
  },
  {
    id: 'ncert-mathematics-8-part2',
    curriculum: 'NCERT / CBSE',
    subject: 'Mathematics',
    title: 'Ganita Prakash — Textbook of Mathematics, Grade 8, Part II',
    edition: 'NCERT · Grade 8 · First edition, 2025',
    sourceUrl: 'https://ncert.nic.in/textbook/pdf/hegp2ps.pdf',
    chapters: [
      { id: 'fractions-in-disguise', title: 'Fractions in Disguise', printedPage: 1, pdfUrl: 'https://www.ncert.nic.in/textbook/pdf/hegp201.pdf', summary: 'The chapter treats percentages as fractions with denominator 100. It shows how to convert fractions to percentages, find a percentage of a quantity, compare quantities, and use percentages in everyday situations.' },
      { id: 'baudhayana-pythagoras', title: 'The Baudhayana-Pythagoras Theorem', printedPage: 33, pdfUrl: ncertChapterUrl('hegp2', 2), summary: 'The textbook says this chapter explores the relationship between the side lengths of a right-angled triangle.' },
      { id: 'proportional-reasoning-2', title: 'Proportional Reasoning-2', printedPage: 55, pdfUrl: ncertChapterUrl('hegp2', 3), summary: 'The textbook describes this chapter as continuing proportional reasoning, including pie charts and inverse proportions.' },
      { id: 'geometric-themes', title: 'Exploring Some Geometric Themes', printedPage: 70, pdfUrl: ncertChapterUrl('hegp2', 4), summary: 'The textbook describes this chapter as focusing on three-dimensional geometry and fractals.' },
      { id: 'tales-dots-lines', title: 'Tales by Dots and Lines', printedPage: 103, pdfUrl: ncertChapterUrl('hegp2', 5), summary: 'The textbook describes this chapter as presenting the arithmetic mean from a different perspective and introducing line graphs for visualising data.' },
      { id: 'algebra-play', title: 'Algebra Play', printedPage: 135, pdfUrl: ncertChapterUrl('hegp2', 6), summary: 'The textbook describes this chapter as exploring how algebra can model and help understand different situations.' },
      { id: 'area', title: 'Area', printedPage: 148, pdfUrl: ncertChapterUrl('hegp2', 7), summary: 'The textbook describes this chapter as developing area concepts for triangles and quadrilaterals.' },
    ],
  },
  {
    id: 'karnataka-kannada-8-part1',
    curriculum: 'Karnataka State',
    subject: 'Kannada',
    title: 'ಸಿರಿ ಕನ್ನಡ — 8ನೇ ತರಗತಿ, ಪ್ರಥಮ ಭಾಷೆ, ಭಾಗ 1',
    edition: 'Karnataka Textbook Society · Revised 2024',
    sourceUrl: 'https://textbooks.karnataka.gov.in/uploads/pdf-files/2024-25%20Textbooks%20data/8th/8%20KANNADA%20FL%202024-25%20Part%201.pdf',
    chapters: [
      { id: 'maggada-saheba', title: 'ಮಗ್ಗದ ಸಾಹೇಬ', printedPage: 1, summary: 'The reader’s introduction identifies the story’s themes as religious tolerance, the decline of cottage industries, education, and self-employment. It follows Karim, a skilled weaver whose success eventually earns public recognition.' },
      { id: 'sarthaka-badukina-sadhaka', title: 'ಸಾರ್ಥಕ ಬದುಕಿನ ಸಾಧಕ', printedPage: 13 },
      { id: 'neeru-kodada-nadinalli', title: 'ನೀರು ಕೊಡದ ನಾಡಿನಲ್ಲಿ', printedPage: 24 },
      { id: 'yashodhare', title: 'ಯಶೋಧರೆ', printedPage: 33 },
      { id: 'kannadigara-tayi', title: 'ಕನ್ನಡಿಗರ ತಾಯಿ', printedPage: 46 },
      { id: 'bharatiyate', title: 'ಭಾರತೀಯತೆ', printedPage: 55 },
      { id: 'bevu-belladodeyara-phala', title: 'ಬೇವು ಬೆಲ್ಲದೊಡೆಯರ ಫಲ', printedPage: 61 },
      { id: 'someshwara-shataka', title: 'ಸೋಮೇಶ್ವರ ಶತಕ', printedPage: 65 },
      { id: 'sarthaka-supplementary', title: 'ಸಾರ್ಥಕ (ಪದ್ಯ)', section: 'ಪಠ್ಯಪೂರಕ ಅಧ್ಯಯನ', printedPage: 72 },
      { id: 'ahuti', title: 'ಆಹುತಿ (ಗದ್ಯ)', section: 'ಪಠ್ಯಪೂರಕ ಅಧ್ಯಯನ', printedPage: 74 },
      { id: 'letter-to-daughter', title: 'ಮಗಳಿಗೆ ಬರೆದ ಪತ್ರ', section: 'ಪಠ್ಯಪೂರಕ ಅಧ್ಯಯನ', printedPage: 79 },
    ],
  },
]

export const curricula: { name: Curriculum; mark: string; detail: string }[] = [
  { name: 'NCERT / CBSE', mark: 'N', detail: 'Grade 8 · Science, English, Mathematics' },
  { name: 'Karnataka State', mark: 'K', detail: 'Grade 8 · Kannada First Language' },
  { name: 'ICSE', mark: 'I', detail: 'Grade 8 · reader source required' },
]
