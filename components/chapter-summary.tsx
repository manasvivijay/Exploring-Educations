'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Check, Download, FileText, ShieldAlert } from 'lucide-react'
import { readerBooks, type Curriculum } from '@/lib/readers'
import { quickRevisionChapters, type QuickRevisionChapter } from '@/lib/chapter-summaries'

export function ChapterSummaryPage({ chapter, curriculum, onBack, onNext }: { chapter: QuickRevisionChapter; curriculum: Curriculum; onBack: () => void; onNext: (chapterId: string) => void }) {
  const [completed, setCompleted] = useState(false)
  const book = chapter.bookId ? readerBooks.find((item) => item.id === chapter.bookId) : undefined
  const statusText = chapter.verification === 'verified' ? 'SUMMARY VERIFIED AGAINST THE READER' : 'TEXTBOOK VERIFICATION NEEDED'
  const subjectChapters = quickRevisionChapters.filter((item) => item.subject === chapter.subject)
  const chapterIndex = subjectChapters.findIndex((item) => item.id === chapter.id)
  const nextChapter = subjectChapters[(chapterIndex + 1) % subjectChapters.length]
  const summary = chapter.summary

  const downloadSummary = () => {
    if (!summary) return
    const lines = [
      chapter.title,
      `${book?.title ?? 'Textbook source to be confirmed'} · printed page ${chapter.printedPage ?? 'not confirmed'}`,
      '',
      'Chapter Introduction', summary.introduction,
      '',
      'Complete Chapter Summary', summary.completeSummary,
      '',
      'Important Concepts', ...summary.importantConcepts.map((item) => `• ${item}`),
      '',
      'Key Points to Remember', ...summary.keyPoints.map((item) => `• ${item}`),
      '',
      'Important Definitions', ...summary.definitions.map(({ term, meaning }) => `• ${term}: ${meaning}`),
      '',
      'Examples', ...summary.examples.map((item) => `• ${item}`),
      '',
      'Formulas', ...summary.formulas.map((item) => `• ${item}`),
      '',
      'Chapter Conclusion', summary.conclusion,
    ]
    const file = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const href = URL.createObjectURL(file)
    const anchor = document.createElement('a')
    anchor.href = href
    anchor.download = `${chapter.id}-quick-revision.txt`
    anchor.click()
    URL.revokeObjectURL(href)
  }

  return <>
    <div className="wizard-back-row"><button type="button" className="back-link" onClick={onBack}><ArrowLeft size={15}/> Back to Chapters</button><p>{curriculum} · Grade 8 · {chapter.subject}</p></div>
    <section className="page-three-heading"><span className="welcome-kicker"><FileText size={14}/> CHAPTER SUMMARY – QUICK REVISION</span><h1 className={chapter.subject === 'Kannada' ? 'reader-kannada' : undefined}>{chapter.title}</h1><p className={chapter.subject === 'Kannada' ? 'reader-kannada' : undefined}>{chapter.readerTitle ?? chapter.title}</p></section>

    {summary ? <>
      <div className="summary-source-row"><span className="summary-status"><Check size={14}/> {statusText}</span><span>{book?.edition}{chapter.printedPage ? ` · printed page ${chapter.printedPage}` : ''}</span></div>
      <div className="summary-layout">
        <article className="summary-main-card">
          <section className="summary-section summary-intro"><h2>Chapter Introduction</h2><p>{summary.introduction}</p></section>
          <section className="summary-section"><h2>Complete Chapter Summary</h2><p>{summary.completeSummary}</p></section>
          <section className="summary-section"><h2>Important Concepts</h2><ul>{summary.importantConcepts.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="summary-section"><h2>Key Points to Remember</h2><ul>{summary.keyPoints.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="summary-section"><h2>Important Definitions</h2><dl className="definition-list">{summary.definitions.map(({ term, meaning }) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}</dl></section>
          <section className="summary-section"><h2>Examples</h2><ul>{summary.examples.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="summary-section"><h2>Formulas</h2><ul className="formula-list">{summary.formulas.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="summary-section summary-conclusion"><h2>Chapter Conclusion</h2><p>{summary.conclusion}</p></section>
        </article>
        <aside className="summary-side-card">
          <span className="summary-check-icon"><BookOpen size={19}/></span>
          <span className="welcome-kicker">TEXTBOOK SOURCE</span>
          <h2 className={chapter.subject === 'Kannada' ? 'reader-kannada' : undefined}>{book?.title}</h2>
          <p>{book?.edition}</p>
          <p className="summary-citation">Source: {book?.title ?? 'Textbook source required'}{chapter.printedPage ? ` · printed page ${chapter.printedPage}` : ''}. The recap is paraphrased from the reader; no new chapter facts have been added. Upload the PDF page to display its original figure here.</p>
        </aside>
      </div>
    </> : <section className="summary-verification-card" role="status">
      <span className="verification-icon"><ShieldAlert size={21}/></span>
      <div><span className="welcome-kicker">TEXTBOOK VERIFICATION NEEDED</span><h2>{chapter.title}</h2><p>{chapter.verificationNote ?? 'The complete chapter text is not available to verify this summary. No chapter content has been invented.'}</p>{chapter.readerTitle && chapter.readerTitle !== chapter.title && <p className="reader-title-match">Title in the supplied reader: <strong>{chapter.readerTitle}</strong></p>}</div>
      {book && <p className="summary-citation">Source reader: {book.title}{chapter.printedPage ? ` · printed page ${chapter.printedPage}` : ''}. Upload the PDF page to show its original illustration here.</p>}
    </section>}

    <div className="summary-actions">
      <button type="button" className={`summary-action secondary-action ${completed ? 'completed-action' : ''}`} onClick={() => setCompleted(!completed)} aria-pressed={completed}>{completed ? <Check size={16}/> : <Check size={16}/>} {completed ? 'Completed' : 'Mark as Completed'}</button>
      <button type="button" className="summary-action secondary-action" onClick={downloadSummary} disabled={!summary}><Download size={16}/> Download Summary</button>
      <button type="button" className="summary-action next-chapter-action" onClick={() => onNext(nextChapter.id)}>Next Chapter <ArrowRight size={16}/></button>
    </div>
  </>
}
