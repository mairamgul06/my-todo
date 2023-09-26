import React, { useState, useCallback } from 'react';
import styles from './addtodo.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void;
}
export const AddTodo: React.FC<InputPlusProps> = ({ onAdd }) => {
    const [value, setValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(value);
        setValue('');
    }, [value])
    return (
        <div className={styles.AddTodo}>
            <input type="text"
                className={styles.AddTodoInput}
                placeholder='Type some...' 
                value={value}
                onChange={(event)=> setValue(event.target.value)}
                onKeyDown={(event)=>{
                    if(event.key === 'Enter'){
                        addTask();
                    }
                }}/>
            <button className={styles.AddTodoBtn}
            onClick={addTask}>Add</button>
        </div>
    )
}