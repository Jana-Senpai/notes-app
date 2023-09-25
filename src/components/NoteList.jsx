import React, { Component } from "react";
import NoteItem from "./NoteItem";

export default class NoteList extends Component {
	render() {
		const notes = this.props.notes;
		const inputSearch = this.props.search;
		return (
			<>
				{notes.length > 0 ? (
					<div className="notes-list">
						{inputSearch !== ""
							? notes.map((note) => (
									<NoteItem
										key={note.id}
										note={note}
										onArchived={this.props.onArchived}
										onDelete={this.props.onDelete}
										id={note.id}
									/>
							))
							: notes.map((note) => (
									<NoteItem
										key={note.id}
										note={note}
										onArchived={this.props.onArchived}
										onDelete={this.props.onDelete}
										id={note.id}
									/>
							))
						}
					</div>	
				)
				:
				<p>Data Tidak Ada</p>
				}
			</>
		);
	}
}
