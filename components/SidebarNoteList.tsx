interface NoteListProps {
  notes: Record<string, string>
}

export default async function NoteList({ notes }: NoteListProps) {

  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">
      {'No notes created yet!'}
    </div>
  }

  return <ul className="notes-list">
    {arr.map(([noteId, note]) => {
      const { title, updateTime } = JSON.parse(note);
      return <li key={noteId}>
        <header className="sidebar-note-header">
          <strong>{title}</strong>
          <small>{updateTime}</small>
        </header>
      </li>
    })}
  </ul>
}