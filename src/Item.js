import React, { useState } from 'react';
import del from './bin.svg';
import dones from './done_all.svg';

export default function Item({ text, onDelete }) {
    const [done, setDone] = useState(false)

    const onHandleDone = () => {
        setDone(!done)
    }
    let cls = ''
    if (done) {
        cls += ' done'
    }
    return (
        <div className="list" >

            <p
                className={`list__item  ${cls}`}
            >{text}
                <span>
                    <button onClick={onHandleDone}><img src={dones} alt="удалить" /></button>
                    <button onClick={onDelete} title="удалить"><img src={del} alt="удалить" /></button>
                </span>
            </p>

        </div>
    )
}
