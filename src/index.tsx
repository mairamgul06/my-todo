import React from 'react';
import styles from './index.module.scss'
import { AddTodo } from './component/AddTodo/AddTodo';
import { ListTodo } from './component/ListTodo/ListTodo';
import { useTodoStore } from './component/data/data';
export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useTodoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ]
    );
    return (
        <div className={styles.Todo}>
            <h1 className={styles.TodoTitle}>ToDo App</h1>
            <section className={styles.TodoSection}>
                <AddTodo
                    onAdd={(title) => {
                        if (title) {
                            createTask(title);
                        }
                    }} />
            </section>
            <section className={styles.TodoSection}>
                {!tasks.length && (
                    <p className={styles.TodoText}>There's nothing here yet</p>
                )}
                {tasks.map((task) => (
                    <ListTodo
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onEdit={updateTask}
                        onRemove={removeTask}
                    />
                ))}
            </section>
        </div>
    )
}