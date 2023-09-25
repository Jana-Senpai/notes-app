import React, { Component } from "react";
import { showFormattedDate } from "../utils";
import DeleteNoteButton from "./DeleteNoteButton";

export default class NoteArchived extends Component {
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
					<button className="note-item__archive-button">Archive</button>
				</div>
			</div>
		);
	}
}