import React, { Component } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import SearchNote from "./SearchNote";

export default class NoteApp extends Component {
    constructor(props){
        super(props)

        this.state = {
            notes : getInitialData(),
            filterNotes : [],
            inputSearch : ''
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onAddNoteHandler({title, body}){
        this.setState((previousState) => {
            return {
                notes: [
                    ...previousState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt : new Date(),
                        archived : false
                    }
                ]
            }
        })
    }

    onDeleteNoteHandler(id){
        const filterData = this.state.filterNotes
        if(filterData.length > 0){
            const filterNotes = filterData.filter((note) => note.id !== id);
            this.setState({notes : filterNotes})
            this.setState({filterNotes})
        }
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes})
    }

    onArchivedNoteHandler(id){
        const filterData = this.state.filterNotes
        if(filterData.length > 0){
            const filterNotes = filterData.map((note) => {
                if(note.id == id){
                    return {...note, archived: !note.archived}
                } else {
                    return note
                }
            })
            this.setState({filterNotes})
        }else{
            const ArchiveNotes = this.state.notes.map((note) => {
                if(note.id == id){
                    return {...note, archived: !note.archived}
                } else {
                    return note
                }
            })
            this.setState({notes : ArchiveNotes})
        }
    }

    onSearchHandler(value){
        const filterNote = this.state.notes.filter((note) => note.title.toLowerCase().includes(value.toLowerCase()));
        this.setState({inputSearch : value})
        this.setState({filterNotes : filterNote})
    }

	render() {
        const result = this.state.filterNotes;
        const notes = this.state.notes;
        const inputSearch = this.state.inputSearch
        const activeNotes = result.length > 0 ? result.filter((note) => !note.archived) : notes.filter((note) => !note.archived)
        const archiveNotes = result.length > 0 ? result.filter((note) => note.archived) : notes.filter((note) => note.archived)

		return (
			<div>
				<div className="note-app__header">
					<h1>My Notes</h1>
                    <SearchNote onSearchHandler={this.onSearchHandler}/>
				</div>
				<div className="note-app__body">
                    <NoteInput onAddNoteHandler={this.onAddNoteHandler}/>         
                    <h2>Actived Note</h2>
                    {activeNotes && <NoteList search={inputSearch} notes={activeNotes} onArchived={this.onArchivedNoteHandler} onDelete={this.onDeleteNoteHandler}/>}
                    <h2>Archived Note</h2>
                    {archiveNotes && <NoteList search={inputSearch} notes={archiveNotes} onArchived={this.onArchivedNoteHandler} onDelete={this.onDeleteNoteHandler}/>}
				</div>
			</div>
		);
	}
}
