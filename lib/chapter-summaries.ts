import type { ReaderSubject } from '@/lib/readers'

export type ChapterSummaryContent = {
  introduction: string
  completeSummary: string
  importantConcepts: string[]
  keyPoints: string[]
  definitions: { term: string; meaning: string }[]
  examples: string[]
  formulas: string[]
  conclusion: string
}

export type QuickRevisionChapter = {
  id: string
  subject: ReaderSubject
  title: string
  readerTitle?: string
  bookId?: string
  readerChapterId?: string
  printedPage?: number
  verification: 'verified' | 'needs-verification'
  verificationNote?: string
  summary?: ChapterSummaryContent
}

const needsVerification = (verificationNote: string): Pick<QuickRevisionChapter, 'verification' | 'verificationNote'> => ({
  verification: 'needs-verification',
  verificationNote,
})

export const quickRevisionChapters: QuickRevisionChapter[] = [
  {
    id: 'science-invisible-world',
    subject: 'Science',
    title: 'The Invisible World Beyond Our Naked Eye',
    readerTitle: 'The Invisible Living World: Beyond Our Naked Eye',
    bookId: 'ncert-science-8',
    readerChapterId: 'invisible-living-world',
    printedPage: 8,
    ...needsVerification('The supplied NCERT reader uses a different title. Verify this requested title against the reader before adding a chapter summary.'),
  },
  {
    id: 'science-health-treasure',
    subject: 'Science',
    title: 'Health: The Ultimate Treasure',
    readerTitle: 'Health: The Ultimate Treasure',
    bookId: 'ncert-science-8',
    readerChapterId: 'health-treasure',
    printedPage: 28,
    verification: 'verified',
    summary: {
      introduction: 'The chapter explains health as physical, mental, and social well-being—not only the absence of disease.',
      completeSummary: 'Health is affected by personal habits, relationships, and the surrounding environment. A balanced diet, hygiene, physical activity, adequate sleep, and emotional and social well-being support health. A disease disturbs the normal functioning of the body or mind. Symptoms are what a person feels; signs can be observed or measured. Communicable diseases are caused by pathogens and can spread through air, contact, contaminated food or water, or vectors such as mosquitoes. Non-communicable diseases do not spread from person to person and can be linked to lifestyle, nutrition, or environment. The chapter describes prevention through sanitation, hygiene, healthy habits, and vaccination. Vaccines train the immune system to recognise pathogens. Antibiotics act against bacteria, not viruses; unnecessary or incomplete use can contribute to antibiotic resistance. Treatment and continued care help manage disease.',
      importantConcepts: ['Physical, mental, and social aspects of health', 'Healthy lifestyle and clean surroundings', 'Signs and symptoms of illness', 'Communicable and non-communicable diseases', 'Pathogens and routes of transmission', 'Immunity, vaccination, treatment, and antibiotic resistance'],
      keyPoints: ['A symptom is experienced by a person; a sign can be observed or measured.', 'Pathogens include bacteria, viruses, fungi, worms, and protozoa.', 'Vectors such as mosquitoes can transmit some diseases.', 'Vaccines help prevent disease by preparing the immune system.', 'Antibiotics treat bacterial infections; they do not treat viral infections.', 'Use antibiotics only as prescribed and follow the prescribed course.'],
      definitions: [
        { term: 'Health', meaning: 'A state of physical, mental, and social well-being, not merely the absence of disease.' },
        { term: 'Pathogen', meaning: 'A disease-causing organism.' },
        { term: 'Vector', meaning: 'An organism, such as a mosquito, that can carry and spread a pathogen.' },
        { term: 'Immunity', meaning: 'The body’s ability to fight disease.' },
        { term: 'Vaccine', meaning: 'A preparation that helps the immune system learn to recognise and fight a pathogen.' },
        { term: 'Antibiotic resistance', meaning: 'A condition in which bacteria survive and multiply despite treatment with an antibiotic that used to kill them.' },
      ],
      examples: ['The chapter lists influenza, chickenpox, measles, tuberculosis, hepatitis A, cholera, typhoid, malaria, and dengue as examples of communicable diseases.', 'Diabetes, asthma, and some cancers are discussed as examples of non-communicable diseases.', 'Edward Jenner’s work on the smallpox vaccine is given as an example of vaccination.'],
      formulas: ['No formula is given in this chapter.'],
      conclusion: 'Health depends on the body, mind, society, and environment. Prevention, accurate diagnosis, and appropriate treatment help protect individuals and communities.',
    },
  },
  {
    id: 'science-electricity-magnetic-effects',
    subject: 'Science',
    title: 'Electricity and Magnetic Effects of Electric Current',
    readerTitle: 'Electricity: Magnetic and Heating Effects',
    bookId: 'ncert-science-8',
    readerChapterId: 'electricity-effects',
    printedPage: 46,
    ...needsVerification('The supplied NCERT reader title differs from the requested title, and the full chapter text was not verified. Confirm the exact chapter before adding its recap.'),
  },
  {
    id: 'science-exploring-forces',
    subject: 'Science',
    title: 'Exploring Forces',
    readerTitle: 'Exploring Forces',
    bookId: 'ncert-science-8',
    readerChapterId: 'exploring-forces',
    printedPage: 62,
    verification: 'verified',
    summary: {
      introduction: 'This chapter studies force as a push or pull that results from interactions between objects.',
      completeSummary: 'A force can start or stop motion, change an object’s speed or direction, or change its shape. Forces require interacting objects. Contact forces include muscular force and friction. Friction acts between surfaces in contact and opposes motion; its size depends on the surfaces. Non-contact forces include magnetic, electrostatic, and gravitational forces. A magnet can attract or repel other magnets and magnetic materials. Charged objects can attract or repel one another, while gravity attracts objects toward Earth. Weight is the gravitational force on an object and is measured in newtons; mass describes the amount of matter and stays the same when location changes. A spring balance measures weight. Liquids exert an upward buoyant force, or upthrust. An object sinks when its weight exceeds the buoyant force and floats when the forces balance. The chapter introduces Archimedes’ Principle: the upward force on an immersed object equals the weight of the liquid it displaces.',
      importantConcepts: ['Force and its effects', 'Forces as interactions', 'Contact and non-contact forces', 'Friction and surface roughness', 'Magnetic, electrostatic, and gravitational forces', 'Mass, weight, and spring balances', 'Buoyant force, floating, and sinking'],
      keyPoints: ['Force is a push or pull that results from interaction with another object.', 'A force can change motion or shape.', 'Friction opposes motion or attempted motion between surfaces in contact.', 'Magnetic, electrostatic, and gravitational forces can act without contact.', 'Mass remains the same from place to place; weight can change with gravity.', 'The SI unit of force and weight is the newton (N).', 'Archimedes’ Principle relates buoyant force to the weight of displaced liquid.'],
      definitions: [
        { term: 'Force', meaning: 'A push or pull on an object resulting from its interaction with another object.' },
        { term: 'Friction', meaning: 'A contact force that opposes motion or attempted motion between surfaces.' },
        { term: 'Magnetic force', meaning: 'The force exerted by a magnet on another magnet or a magnetic material.' },
        { term: 'Electrostatic force', meaning: 'The force exerted by a charged body on another charged or uncharged body.' },
        { term: 'Gravitational force', meaning: 'The attractive force with which Earth pulls objects toward itself.' },
        { term: 'Weight', meaning: 'The force with which Earth pulls an object toward itself.' },
        { term: 'Buoyant force', meaning: 'The upward force exerted by a liquid on an object placed in it.' },
      ],
      examples: ['A moving bicycle slows when pedalling stops because friction acts against its motion.', 'Like poles of magnets repel and unlike poles attract.', 'A rubbed balloon can attract small paper pieces.', 'An object’s mass can stay 1 kg while its weight differs on Earth, the Moon, and other planets.'],
      formulas: ['No calculation formula is introduced in this chapter; force and weight are measured in newtons (N).'],
      conclusion: 'The chapter distinguishes contact from non-contact forces and explains how forces affect motion, shape, weight, and whether objects float or sink.',
    },
  },
  {
    id: 'science-pressure-storms',
    subject: 'Science',
    title: 'Pressure, Winds, Storms and Cyclones',
    readerTitle: 'Pressure, Winds, Storms, and Cyclones',
    bookId: 'ncert-science-8',
    readerChapterId: 'pressure-storms-cyclones',
    printedPage: 80,
    verification: 'verified',
    summary: {
      introduction: 'This chapter connects force and pressure to the formation of winds, storms, thunderstorms, lightning, and cyclones.',
      completeSummary: 'Pressure is force per unit area. For the same force, spreading it over a larger area reduces pressure. Liquids exert pressure at the bottom and sides of a container; liquid pressure increases with the height of the liquid column. Air also exerts atmospheric pressure. Winds form when air moves from higher-pressure regions to lower-pressure regions. Warm air rises and creates lower pressure; cooler air moves in to replace it. High-speed winds are accompanied by lower pressure, which explains why roofs can be lifted during storms. When warm, moist air rises, it cools and forms clouds. Strong up-and-down winds help separate electric charges in clouds. A sudden discharge produces lightning, and the rapid heating and expansion of air produces thunder. A cyclone forms over warm ocean water as moist air rises, condenses, releases heat, and draws in surrounding air; Earth’s rotation makes the system spin. Its calm centre is called the eye. Heavy rain, high winds, and storm surge can cause damage. The chapter describes monitoring, shelters, emergency supplies, and lightning-safety measures.',
      importantConcepts: ['Pressure as force per unit area', 'Pressure in liquids and gases', 'Atmospheric pressure', 'Wind caused by pressure differences', 'Low pressure associated with high-speed wind', 'Thunderstorm and lightning formation', 'Cyclone formation, eye, and impacts'],
      keyPoints: ['Pressure = force ÷ area.', 'The SI unit of pressure is the pascal (Pa), equal to N/m².', 'For a fixed force, a smaller area produces greater pressure.', 'Air moves from higher pressure to lower pressure.', 'Warm, moist air rises; cooling and condensation form clouds.', 'Lightning is a sudden flow of electric charges; thunder is sound from rapidly expanding heated air.', 'Cyclones develop over warm ocean water; the calm centre is the eye.', 'Cyclones weaken over land when the supply of moist air is cut off.'],
      definitions: [
        { term: 'Pressure', meaning: 'Force acting per unit area.' },
        { term: 'Atmospheric pressure', meaning: 'The pressure exerted by the air around us.' },
        { term: 'Storm', meaning: 'Strong winds accompanied by rain.' },
        { term: 'Thunderstorm', meaning: 'A storm accompanied by lightning and thunder.' },
        { term: 'Cyclone', meaning: 'A rotating system of clouds, winds, and rain around a very low-pressure area.' },
        { term: 'Eye of a cyclone', meaning: 'The central region of lowest pressure, where winds are comparatively calm.' },
      ],
      examples: ['Broad bag straps spread the force over a larger area and reduce pressure on the shoulders.', 'Overhead water tanks are placed at a height to increase water pressure at taps.', 'The chapter uses air moving between balloons to demonstrate movement from high pressure to low pressure.'],
      formulas: ['Pressure (P) = Force (F) ÷ Area (A).', '1 pascal (Pa) = 1 newton per square metre (N/m²).'],
      conclusion: 'Differences in pressure explain winds and help explain how storms and cyclones form. The chapter connects these processes to lightning, storm damage, and safety.',
    },
  },
  {
    id: 'english-wit-won-hearts',
    subject: 'English',
    title: 'Wit that won hearts',
    readerTitle: 'The Wit that Won Hearts',
    bookId: 'ncert-english-8',
    readerChapterId: 'wit-wisdom-story',
    printedPage: 1,
    ...needsVerification('The supplied Poorvi reader identifies Tenali Rama and the chapter’s wit-and-reasoning theme, but the full chapter text was not retrieved to verify a complete recap.'),
  },
  {
    id: 'english-concrete-example',
    subject: 'English',
    title: 'A Concrete Example',
    readerTitle: 'A Concrete Example',
    bookId: 'ncert-english-8',
    readerChapterId: 'concrete-example',
    printedPage: 17,
    ...needsVerification('The supplied Poorvi reader describes this poem as using irony and satire, but its full text was not available to verify a complete recap.'),
  },
  {
    id: 'english-wisdom-paves-way',
    subject: 'English',
    title: 'Wisdom Paves the Way',
    readerTitle: 'Wisdom Paves the Way',
    bookId: 'ncert-english-8',
    readerChapterId: 'wisdom-paves-way',
    printedPage: 27,
    ...needsVerification('The supplied Poorvi reader describes a conflict resolved through different perspectives, but its full text was not available to verify a complete recap.'),
  },
  {
    id: 'english-tale-of-valour',
    subject: 'English',
    title: 'A Tale of Valour: Major Somnath Sharma and the Battle of Badgam',
    readerTitle: 'A Tale of Valour: Major Somnath Sharma and the Battle of Badgam',
    bookId: 'ncert-english-8',
    readerChapterId: 'tale-valour',
    printedPage: 49,
    ...needsVerification('The supplied Poorvi reader identifies the chapter’s theme as courage, duty, and patriotism, but the complete chapter text was not available to verify a full recap.'),
  },
  {
    id: 'english-somebodys-mother',
    subject: 'English',
    title: 'Somebody’s Mother',
    readerTitle: 'Somebody’s Mother',
    bookId: 'ncert-english-8',
    readerChapterId: 'somebodys-mother',
    printedPage: 70,
    ...needsVerification('The supplied Poorvi reader describes the poem’s theme as kindness and empathy, but its full text was not available to verify a complete recap.'),
  },
  {
    id: 'math-fractions-in-disguise',
    subject: 'Mathematics',
    title: 'Fractions in Disguise',
    readerTitle: 'Fractions in Disguise',
    bookId: 'ncert-mathematics-8-part2',
    readerChapterId: 'fractions-in-disguise',
    printedPage: 1,
    ...needsVerification('The chapter source was only partially retrieved. Its opening sections cover percentages; the complete chapter recap needs verification against all chapter pages.'),
  },
  {
    id: 'math-pythagoras-theorem',
    subject: 'Mathematics',
    title: 'Pythagoras Theorem',
    readerTitle: 'The Baudhayana-Pythagoras Theorem',
    bookId: 'ncert-mathematics-8-part2',
    readerChapterId: 'baudhayana-pythagoras',
    printedPage: 33,
    ...needsVerification('The supplied Ganita Prakash reader uses the title “The Baudhayana-Pythagoras Theorem”. Verify that this is the chapter intended by “Pythagoras Theorem” before summarising it.'),
  },
  {
    id: 'math-proportional-reasoning',
    subject: 'Mathematics',
    title: 'Proportional Reasoning',
    readerTitle: 'Proportional Reasoning-2',
    bookId: 'ncert-mathematics-8-part2',
    readerChapterId: 'proportional-reasoning-2',
    printedPage: 55,
    ...needsVerification('The supplied Grade 8 Part II reader lists “Proportional Reasoning-2”. Verify that this is the requested chapter before creating a full recap.'),
  },
  {
    id: 'math-geometric-figures',
    subject: 'Mathematics',
    title: 'Exploring Some Geometric Figures',
    readerTitle: 'Exploring Some Geometric Themes',
    bookId: 'ncert-mathematics-8-part2',
    readerChapterId: 'geometric-themes',
    printedPage: 70,
    ...needsVerification('The supplied reader title is “Exploring Some Geometric Themes”, not “Exploring Some Geometric Figures”. Verify the intended chapter before adding its complete recap.'),
  },
  {
    id: 'math-tales-by-dots-and-lines',
    subject: 'Mathematics',
    title: 'Tales by Dots and Lines',
    readerTitle: 'Tales by Dots and Lines',
    bookId: 'ncert-mathematics-8-part2',
    readerChapterId: 'tales-dots-lines',
    printedPage: 103,
    ...needsVerification('The chapter’s complete text was not retrieved to verify a full recap.'),
  },
  {
    id: 'social-world-geography-olympics',
    subject: 'Social Science',
    title: 'World Geography and Olympics',
    ...needsVerification('No Grade 8 Social Science reader was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'social-indias-independence',
    subject: 'Social Science',
    title: 'India’s Long Road to Independence',
    ...needsVerification('No Grade 8 Social Science reader was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'social-indian-architecture',
    subject: 'Social Science',
    title: 'A Journey Through Indian Architecture',
    ...needsVerification('No Grade 8 Social Science reader was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'social-judiciary',
    subject: 'Social Science',
    title: 'The Role of the Judiciary in Our Society',
    ...needsVerification('No Grade 8 Social Science reader was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'social-citizenship',
    subject: 'Social Science',
    title: 'Citizenship: Rights and Duties',
    ...needsVerification('No Grade 8 Social Science reader was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'hindi-swadesh', subject: 'Hindi', title: 'स्वदेश',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'hindi-do-gauraiya', subject: 'Hindi', title: 'दो गौरैया',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'hindi-ek-ashirwad', subject: 'Hindi', title: 'एक आशीर्वाद',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'hindi-haridwar', subject: 'Hindi', title: 'हरिद्वार',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'hindi-kabir-ke-dohe', subject: 'Hindi', title: 'कबीर के दोहे',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'hindi-ek-tokari-bhar-mitti', subject: 'Hindi', title: 'एक टोकरी भर मिट्टी',
    ...needsVerification('इस पाठ की सटीक कक्षा 8 CBSE पाठ्यपुस्तक उपलब्ध नहीं है। कृपया अध्याय का PDF या पाठ दें; तब तक सारांश या प्रश्न नहीं बनाए गए हैं.'),
  },
  {
    id: 'kannada-hoovada-huduki', subject: 'Kannada', title: 'ಹೂವಾದ ಹುಡುಕಿ',
    ...needsVerification('ನೀಡಿರುವ ಕರ್ನಾಟಕ 8ನೇ ತರಗತಿಯ ಕನ್ನಡ ಪ್ರಥಮ ಭಾಷೆ ಭಾಗ 1ರ ವಿಷಯಪಟ್ಟಿಯಲ್ಲಿ ಈ ಪಾಠದ ಶೀರ್ಷಿಕೆ ಇಲ್ಲ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಠ್ಯಪುಸ್ತಕ ಅಥವಾ ಅಧ್ಯಾಯದ PDF ನೀಡಿ.'),
  },
  {
    id: 'kannada-talakadina-vaibhava', subject: 'Kannada', title: 'ತಲಕಾಡಿನ ವೈಭವ',
    ...needsVerification('ನೀಡಿರುವ ಕರ್ನಾಟಕ 8ನೇ ತರಗತಿಯ ಕನ್ನಡ ಪ್ರಥಮ ಭಾಷೆ ಭಾಗ 1ರ ವಿಷಯಪಟ್ಟಿಯಲ್ಲಿ ಈ ಪಾಠದ ಶೀರ್ಷಿಕೆ ಇಲ್ಲ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಠ್ಯಪುಸ್ತಕ ಅಥವಾ ಅಧ್ಯಾಯದ PDF ನೀಡಿ.'),
  },
  {
    id: 'kannada-bahumana', subject: 'Kannada', title: 'ಬಹುಮಾನ',
    ...needsVerification('ನೀಡಿರುವ ಕರ್ನಾಟಕ 8ನೇ ತರಗತಿಯ ಕನ್ನಡ ಪ್ರಥಮ ಭಾಷೆ ಭಾಗ 1ರ ವಿಷಯಪಟ್ಟಿಯಲ್ಲಿ ಈ ಪಾಠದ ಶೀರ್ಷಿಕೆ ಇಲ್ಲ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಠ್ಯಪುಸ್ತಕ ಅಥವಾ ಅಧ್ಯಾಯದ PDF ನೀಡಿ.'),
  },
  {
    id: 'kannada-geletana', subject: 'Kannada', title: 'ಗೆಳೆತನ',
    ...needsVerification('ನೀಡಿರುವ ಕರ್ನಾಟಕ 8ನೇ ತರಗತಿಯ ಕನ್ನಡ ಪ್ರಥಮ ಭಾಷೆ ಭಾಗ 1ರ ವಿಷಯಪಟ್ಟಿಯಲ್ಲಿ ಈ ಪಾಠದ ಶೀರ್ಷಿಕೆ ಇಲ್ಲ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಠ್ಯಪುಸ್ತಕ ಅಥವಾ ಅಧ್ಯಾಯದ PDF ನೀಡಿ.'),
  },
  {
    id: 'kannada-amma', subject: 'Kannada', title: 'ಅಮ್ಮ',
    ...needsVerification('ನೀಡಿರುವ ಕರ್ನಾಟಕ 8ನೇ ತರಗತಿಯ ಕನ್ನಡ ಪ್ರಥಮ ಭಾಷೆ ಭಾಗ 1ರ ವಿಷಯಪಟ್ಟಿಯಲ್ಲಿ ಈ ಪಾಠದ ಶೀರ್ಷಿಕೆ ಇಲ್ಲ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಠ್ಯಪುಸ್ತಕ ಅಥವಾ ಅಧ್ಯಾಯದ PDF ನೀಡಿ.'),
  },
  {
    id: 'computer-networking', subject: 'Computer', title: 'Computer Networking',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-create-image', subject: 'Computer', title: 'Create an Image',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-image-editing', subject: 'Computer', title: 'Image Editing',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-trending-technologies', subject: 'Computer', title: 'Trending Technologies',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-image-links-frames', subject: 'Computer', title: 'Image Links and Frames in HTML',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-forms-html', subject: 'Computer', title: 'Forms in HTML',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
  {
    id: 'computer-algorithmic-intelligence', subject: 'Computer', title: 'Algorithmic Intelligence',
    ...needsVerification('No Grade 8 Computer textbook was supplied for this chapter. Provide the exact textbook PDF or chapter text before a recap or quiz is created.'),
  },
]

export const quickRevisionSubjects: ReaderSubject[] = ['Science', 'English', 'Mathematics', 'Social Science', 'Hindi', 'Kannada', 'Computer']
