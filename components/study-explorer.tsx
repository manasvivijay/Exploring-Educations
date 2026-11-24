'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, GraduationCap, Lightbulb, LibraryBig, ListChecks, NotebookPen, RotateCcw, Sparkles } from 'lucide-react'
import { curricula, readerBooks, type Curriculum, type ReaderSubject, type StudyMode } from '@/lib/readers'
import { quickRevisionChapters, quickRevisionSubjects } from '@/lib/chapter-summaries'
import { ChapterSummaryPage } from '@/components/chapter-summary'

const modes: { name: StudyMode; description: string; icon: typeof BookOpen }[] = [
  { name: 'Recap', description: 'Open the exact chapter in its reader', icon: BookOpen },
  { name: 'Practice questions', description: 'Use the questions printed in the book', icon: ListChecks },
  { name: 'Homework help', description: 'Refer to the chapter’s own explanation', icon: Lightbulb },
  { name: 'Chapter Summary – Quick Revision', description: 'Source-based recap; unverified chapters are flagged', icon: NotebookPen },
]

export function StudyExplorer() {
  const [curriculum, setCurriculum] = useState<Curriculum>('NCERT / CBSE')
  const [subject, setSubject] = useState<ReaderSubject>('Science')
  const [chapterId, setChapterId] = useState('science-pressure-storms')
  const [mode, setMode] = useState<StudyMode>('Chapter Summary – Quick Revision')
  const [page, setPage] = useState<1 | 2 | 3>(1)

  const books = readerBooks.filter((book) => book.curriculum === curriculum)
  const book = books.find((item) => item.subject === subject)
  const chapter = book?.chapters.find((item) => item.id === chapterId) ?? book?.chapters[0]
  const revisionChapters = quickRevisionChapters.filter((item) => item.subject === subject)
  const revisionChapter = revisionChapters.find((item) => item.id === chapterId) ?? revisionChapters[0]
  const canSelectChapter = Boolean((book && chapter) || (mode === 'Chapter Summary – Quick Revision' && revisionChapters.length > 0))
  const canUseQuickRevision = curriculum === 'NCERT / CBSE' || (curriculum === 'Karnataka State' && subject === 'Kannada')
  const availableModes = canUseQuickRevision ? modes : modes.filter((item) => item.name !== 'Chapter Summary – Quick Revision')

  const goToPage = (nextPage: 1 | 2 | 3) => {
    window.scrollTo(0, 0)
    setPage(nextPage)
  }
  const chooseCurriculum = (nextCurriculum: Curriculum) => {
    const nextBook = readerBooks.find((item) => item.curriculum === nextCurriculum)
    setCurriculum(nextCurriculum)
    if (!nextBook) {
      setMode('Recap')
      setSubject('Science')
      setChapterId('')
      return
    }
    setSubject(nextBook.subject)
    setMode('Chapter Summary – Quick Revision')
    const firstVerifiedSummary = quickRevisionChapters.find((item) => item.subject === nextBook.subject && item.verification === 'verified')
    setChapterId(nextBook.subject === 'Science' ? 'science-pressure-storms' : firstVerifiedSummary?.id ?? nextBook.chapters[0].id)
  }
  const chooseSubject = (nextSubject: ReaderSubject) => {
    const nextBook = books.find((item) => item.subject === nextSubject)
    setSubject(nextSubject)
    if (mode === 'Chapter Summary – Quick Revision') {
      const firstVerifiedSummary = quickRevisionChapters.find((item) => item.subject === nextSubject && item.verification === 'verified')
      const firstSummary = quickRevisionChapters.find((item) => item.subject === nextSubject)
      setChapterId(nextSubject === 'Science' ? 'science-pressure-storms' : firstVerifiedSummary?.id ?? firstSummary?.id ?? '')
      return
    }
    setChapterId(nextBook?.chapters[0]?.id ?? '')
  }
  const chooseMode = (nextMode: StudyMode) => {
    setMode(nextMode)
    if (nextMode === 'Chapter Summary – Quick Revision') {
      const firstVerifiedSummary = quickRevisionChapters.find((item) => item.subject === subject && item.verification === 'verified')
      const firstSummary = quickRevisionChapters.find((item) => item.subject === subject)
      const nextChapterId = subject === 'Science' ? 'science-pressure-storms' : firstVerifiedSummary?.id ?? firstSummary?.id
      if (nextChapterId) setChapterId(nextChapterId)
      return
    }
    const nextChapterId = book?.chapters[0]?.id
    if (nextChapterId) setChapterId(nextChapterId)
  }
  const startOver = () => goToPage(1)

  return <main className="exploring-shell">
    <header className="exploring-header">
      <a className="exploring-brand" href="#top" aria-label="Exploring Educations home"><span className="brand-mark"><BookOpen size={19}/></span><span>Exploring <em>Educations</em></span></a>
      <div className="exploring-header-right"><span className="header-note">OFFICIAL TEXTBOOK READERS</span><span className="header-sparkle"><LibraryBig size={17}/></span></div>
    </header>
    <div className="journey-progress" aria-label={`Step ${page} of 3`}><span className={page >= 1 ? 'journey-done' : ''}/><span className={page >= 2 ? 'journey-done' : ''}/><span className={page >= 3 ? 'journey-done' : ''}/><span className="journey-step">STEP 0{page} <span>OF 03</span></span></div>

    {page === 1 && <>
      <section className="wireframe-layout exploring-layout" aria-label="Choose a textbook curriculum">
        <article className="wire-box welcome-box">
          <div className="welcome-card"><span className="welcome-kicker"><BookOpen size={14}/> READER-BASED STUDY</span><h1>Choose your<br/>textbook reader.</h1><p>Choose a provided Grade 8 reader, or select ICSE to add its exact book.</p></div>
          <div className="curriculum-prompt"><span className="prompt-sparkle"><GraduationCap size={18}/></span><span>Choose your<br/>curriculum</span></div>
          <div className="curriculum-circles reader-curriculum-options" role="group" aria-label="Choose curriculum">{curricula.map((item) => <button type="button" key={item.name} onClick={() => chooseCurriculum(item.name)} className={`curriculum-circle ${curriculum === item.name ? 'circle-selected' : ''}`} aria-pressed={curriculum === item.name}><span className="circle-check">{curriculum === item.name && <Check size={13}/>}</span><strong>{item.name}</strong><small>{item.detail}</small></button>)}</div>
        </article>
        <article className="wire-box next-panel">
          <div className="next-panel-art"><div className="study-orbit"><BookOpen size={47}/></div><Sparkles className="orbit-sparkle" size={23}/><span className="orbit-dot"/></div>
          <span className="welcome-kicker"><LibraryBig size={14}/> PROVIDED READERS</span>
          <h2>Stay with<br/>the source.</h2>
          <p>Each chapter opens in the original textbook, with its own wording, illustrations, and activities.</p>
          <div className="next-panel-list">{books.map((item) => <span key={item.id}><BookOpen size={15}/><span>{item.subject}: {item.title}</span></span>)}{books.length === 0 && <p className="reader-missing-inline">Grade 8 ICSE textbook source not supplied.</p>}</div>
          <button type="button" className="start-button next-step-button" onClick={() => goToPage(2)}>Choose a subject and chapter <ArrowRight size={17}/></button>
        </article>
      </section>
      <footer className="exploring-footer"><span>Choose only from the textbook titles and printed page numbers.</span><span>01 <i>—</i> 03</span></footer>
    </>}

    {page === 2 && !canSelectChapter && <>
      <div className="wizard-back-row"><button type="button" className="back-link" onClick={() => goToPage(1)}><ArrowLeft size={15}/> Curriculum</button><p>Reader set: <strong>{curriculum}</strong></p></div>
      <section className="page-two-intro"><span className="welcome-kicker"><NotebookPen size={14}/> READER SOURCE REQUIRED</span><h1>Choose the exact <em>book.</em></h1><p>To keep this chapter accurate, the Grade 8 textbook for {curriculum} {subject} is needed.</p></section>
      <section className="reader-missing-card"><span className="reader-book-icon"><BookOpen size={22}/></span><h2>No {subject} reader source yet</h2><p>Provide the exact Grade 8 {curriculum} {subject} reader or official textbook link. Until then, this subject’s chapter list and summary will not be invented.</p><button type="button" className="start-button" onClick={() => goToPage(1)}>Back to available readers <ArrowLeft size={16}/></button></section>
      <footer className="exploring-footer"><span>Source needed to keep this summary exact.</span><span>02 <i>—</i> 03</span></footer>
    </>}

    {page === 2 && canSelectChapter && <>
      <div className="wizard-back-row"><button type="button" className="back-link" onClick={() => goToPage(1)}><ArrowLeft size={15}/> Curriculum</button><p>Reader set: <strong>{curriculum}</strong></p></div>
      <section className="page-two-intro"><span className="welcome-kicker"><NotebookPen size={14}/> SELECT FROM THE READER</span><h1>Find your <em>chapter.</em></h1><p>Only subjects and chapters listed in the readers you supplied appear here.</p></section>
      <section className="page-two-grid reader-select-grid">
        <article className="wire-box page-two-form">
          <div className="form-fields wire-fields">
            <label className="field"><span>SUBJECT</span><span className="select-wrap"><select value={subject} onChange={(event) => chooseSubject(event.target.value as ReaderSubject)} aria-label="Subject">{(mode === 'Chapter Summary – Quick Revision' ? quickRevisionSubjects.filter((item) => curriculum === 'NCERT / CBSE' ? item !== 'Kannada' : item === 'Kannada') : books.map((item) => item.subject)).map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronRight size={16}/></span></label>
            <label className="field"><span>CLASS</span><span className="select-wrap"><select value="8" aria-label="Class" disabled><option value="8">Grade 8</option></select><ChevronRight size={16}/></span></label>
            <label className="field chapter-field"><span>CHAPTER / LESSON</span><span className="select-wrap chapter-select-wrap"><select className={book?.subject === 'Kannada' ? 'reader-kannada' : undefined} value={chapterId} onChange={(event) => setChapterId(event.target.value)} aria-label="Chapter">{mode === 'Chapter Summary – Quick Revision' ? revisionChapters.map((item, index) => <option key={item.id} value={item.id}>{index + 1}. {item.title}</option>) : book.chapters.map((item, index) => <option key={item.id} value={item.id}>{item.section ? `${item.section} · ` : ''}{index + 1}. {item.title}</option>)}</select><ChevronRight size={16}/></span></label>
          </div>
          <fieldset className="mode-group page-two-mode"><legend>WHAT DO YOU WANT TO OPEN?</legend><div className="mode-options">{availableModes.map(({ name, description, icon: Icon }) => <button type="button" className={`mode-option ${mode === name ? 'mode-selected' : ''}`} key={name} onClick={() => chooseMode(name)} aria-pressed={mode === name}><span className="mode-icon"><Icon size={17}/></span><span className="mode-copy"><strong>{name}</strong><small>{description}</small></span><span className="radio-mark" aria-hidden="true"/></button>)}</div></fieldset>
          <button className="start-button page-two-submit" type="button" onClick={() => goToPage(3)}>{mode === 'Chapter Summary – Quick Revision' ? 'Show Chapter Summary' : 'Open selected reader'} <ArrowRight size={17}/></button>
        </article>
        {book ? <aside className="page-two-quote reader-book-card"><span className="reader-book-icon"><BookOpen size={22}/></span><span className="welcome-kicker">SELECTED TEXTBOOK</span><h2 className={book.subject === 'Kannada' ? 'reader-kannada' : undefined}>{book.title}</h2><p>{book.edition}</p><div className="reader-book-meta"><span>{book.chapters.length} listed chapters / lessons</span><span>Source: {book.sourceUrl.replace(/^https:\/\//, '')}</span></div></aside> : <aside className="page-two-quote reader-book-card"><span className="reader-book-icon"><BookOpen size={22}/></span><span className="welcome-kicker">TEXTBOOK SOURCE REQUIRED</span><h2>{subject}</h2><p>No matching textbook was supplied for {curriculum}. This chapter will display a verification notice instead of invented content.</p></aside>}
      </section>
      <footer className="exploring-footer"><span>Reader pages are linked to the official textbook source.</span><span>02 <i>—</i> 03</span></footer>
    </>}

    {page === 3 && mode === 'Chapter Summary – Quick Revision' && revisionChapter && <ChapterSummaryPage key={revisionChapter.id} curriculum={curriculum} chapter={revisionChapter} onBack={() => goToPage(2)} onNext={(nextId) => { setChapterId(nextId); window.scrollTo(0, 0) }}/>}
    {page === 3 && mode !== 'Chapter Summary – Quick Revision' && book && chapter && <ReaderPage curriculum={curriculum} book={book} chapter={chapter} mode={mode} onBack={() => goToPage(2)} onRestart={startOver}/>}

  </main>
}

function ReaderPage({ curriculum, book, chapter, mode, onBack, onRestart }: {
  curriculum: Curriculum
  book: (typeof readerBooks)[number]
  chapter: (typeof readerBooks)[number]['chapters'][number]
  mode: StudyMode
  onBack: () => void
  onRestart: () => void
}) {
  const modeCopy: Record<StudyMode, { title: string; description: string }> = {
    Recap: { title: 'Chapter recap', description: 'Show a source-derived recap when it has been verified.' },
    'Practice questions': { title: 'In-book questions', description: 'No questions are added unless they can be verified from the reader.' },
    'Homework help': { title: 'Chapter reference', description: 'No answer is generated from unverified material.' },
    'Chapter Summary – Quick Revision': { title: 'Chapter Summary – Quick Revision', description: 'Review a short chapter recap based on the selected reader.' },
  }
  const selectedMode = modeCopy[mode]

  return <>
    <div className="wizard-back-row"><button type="button" className="back-link" onClick={onBack}><ArrowLeft size={15}/> Edit selection</button><p>{curriculum} <span>·</span> Grade 8 <span>·</span> {book.subject}</p></div>
    <section className="page-three-heading"><span className="welcome-kicker"><BookOpen size={14}/> SOURCE-BASED READER</span><h1 className={book.subject === 'Kannada' ? 'reader-kannada' : undefined}>{chapter.title}</h1><p className={book.subject === 'Kannada' ? 'reader-kannada' : undefined}>{book.title}</p></section>
    {mode === 'Recap' && chapter.summary ? <section className="reader-recap-card" aria-label="Textbook overview"><span className="welcome-kicker"><BookOpen size={14}/> TEXTBOOK OVERVIEW</span><p>{chapter.summary}</p><span className="reader-recap-source">{book.title} · printed page {chapter.printedPage}</span></section> : <section className="reader-availability-card" role="status"><span className="reader-book-icon"><BookOpen size={20}/></span><span className="welcome-kicker">{selectedMode.title}</span><h2>{selectedMode.description}</h2><p>{mode === 'Recap' ? 'A complete recap is available in Chapter Summary – Quick Revision when its source text is verified.' : 'The original questions and answers cannot be displayed because the remote PDF does not load in this preview. No substitute content is shown.'}</p><span className="reader-recap-source">{book.title} · printed page {chapter.printedPage}</span></section>}
    <p className="reader-frame-note">Original textbook illustrations are not available in this preview. Attach the reader PDF or image pages to show them inline.</p>
    <footer className="exploring-footer"><button type="button" className="restart-link" onClick={onRestart}>Choose another reader</button><span>03 <i>—</i> 03</span></footer>
  </>
}
