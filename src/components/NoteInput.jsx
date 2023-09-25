import React, { Component } from "react";

export default class NoteInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            title : '',
            body : '',
            maxChars: 50,
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(e){
        const value = e.target.value
        if(value.length <= this.state.maxChars){
            this.setState({title : value})
        }
        // this.setState({title : e.target.value})
    }

    onBodyChangeHandler(e){
        this.setState({body : e.target.value})
    }

    onSubmitHandler(e){
        e.preventDefault();
        this.props.onAddNoteHandler(this.state)
        this.setState({title: '', body : ''})
    }

	render() {
        const {title, maxChars} = this.state;
        const ShowLimit = maxChars - title.length;
		return (
			<form className="note-input" onSubmit={this.onSubmitHandler}>
				<h2>Add Note</h2>
				<div className="note-input__title">
					<div className="note-input__title__char-limit">
						Character limit: {ShowLimit}
					</div>
					<label htmlFor="note-title">Title</label>
					<input type="text" id="note-title" value={this.state.title} onChange={this.onTitleChangeHandler} placeholder="Enter title" />
				</div>
				<div className="note-input__body">
					<label htmlFor="note-content">Note</label>
					<textarea id="note-content" value={this.state.body} onChange={this.onBodyChangeHandler} placeholder="Enter your note here"></textarea>
				</div>
				<button type="submit">Create Note</button>
			</form>
		);
	}
}
