/* На заметку */
import React from "react";
import "/React/ProgektRadio/my-app/src/App.css"
import "./Note.css"

const Note = () => {
    return (
        <div className="common_block note">
            <div className="pre_note_block">
                <h3>На заметку</h3>
            </div>
            <div className="indoor_block note_block"> 1</div>
            <div className="indoor_block note_block"> 2</div>
            <div className="indoor_block note_block"> 3</div>
        </div>
    )
};

export default Note;