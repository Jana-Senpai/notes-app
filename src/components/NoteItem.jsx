import React, { Component } from "react";
import { showFormattedDate } from "../utils";
import DeleteNoteButton from "./DeleteNoteButton";
import ArchivedNoteButton from "./ArchivedNoteButton";

export default class NoteItem extends Component {
	render() {
        const note = this.props.note;
        const props = this.props;
		return (
			<div className="note-item">
				<div className="note-item__content">
					<div className="note-item__title">{note.title}</div>
					<div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
					<div className="note-item__body">{note.body}</div>
				</div>
				<div className="note-item__action">
                    <DeleteNoteButton id={props.id} onDelete={props.onDelete}/>
                    <ArchivedNoteButton isArchived={note.archived} id={props.id} onArchived={props.onArchived}/>
				</div>
			</div>
		);
	}
}
