import React, { useState } from 'react';
import styles from './listtodo.module.scss';
interface InputListProps {
    id: string;
    title: string;
    onEdit: (id: string, value: string) => void;
    onRemove: (id: string) => void;
}
export const ListTodo: React.FC<InputListProps> = ({ id, title, onEdit, onRemove }) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(title);
    return (
        <div className={styles.ListTodo}>
            <label className={styles.ListTodoLabel}>
                <input className={styles.ListTodoCheck}
                    type="checkbox"
                    onChange={(event) => {
                        setChecked(event.target.checked);
                        if (event.target.checked) {
                            onEdit(id, value);
                        }
                    }} />
                {
                    edit ? (
                        <input
                            value={value}
                            onChange={(event) => {
                                setValue(event.target.value)
                            }}
                            className={styles.ListTodoNew} />
                    )
                        :
                        (
                            <span className={checked ? styles.ListTodoTitlecheck : styles.ListTodoTitle}>{title}</span>

                        )
                }

            </label>
            {
                edit ?
                    (
                        <button className={styles.ListTodoSave}
                            onClick={() => {
                                onEdit(id, value)
                                setEdit(false)
                            }}><i className="fa-solid fa-check"></i></button>
                    )
                    :
                    (
                        <button className={styles.ListTodoEdit}
                            onClick={() => {
                                setEdit(true)
                            }}><i className="fa-solid fa-pen"></i></button>
                    )
            }
            <button className={styles.ListTodoRemove} onClick={() => {
                if (confirm('Удалить лист...')) {
                    onRemove(id);
                }
            }}><i className="fa-solid fa-trash"></i></button>

        </div>
    )
}