import React, { useState } from 'react';
import Header from './components/header'
import './App.css';

function App() {
    const [toDos, setToDos] = useState([]);
    const [toDo, setToDo] = useState('')

    return (
        <div className="app">
            <Header />

            <section className="container section">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={toDo} onChange={(e) => setToDo(e.target.value)} id="todo_input" type="text" className="autocomplete" />
                            <label for="todo_input">🖊️ Add item...</label>
                            <button onClick={() => setToDos([...toDos, { id: Date.now(), name: toDo, status: false }])} className="waves-effect waves-light btn">button</button>
                        </div>
                    </div>
                </div>

                <div className="todo_list section col s12">
                    <div className="incomplete left">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4>Todo</h4></li>
                            {/* This will list the todos which are incomplete */}
                            {
                                toDos.map((item) => {
                                    if (!item.status) {
                                        return (
                                            <li class="collection-item">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={item.status}
                                                        className="filled-in"
                                                        onChange={(e) => {
                                                            setToDos(toDos.filter(this_item => {
                                                                if (this_item.id === item.id) {
                                                                    this_item.status = e.target.checked
                                                                };
                                                                return this_item
                                                            }))
                                                        }} />
                                                    <span className="todo_name">{item.name}</span>
                                                </label>
                                                {/* <a href="#!" class="secondary-content"> */}
                                                    {/* <i class="material-icons">close</i> */}
                                                {/* </a> */}
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                    
                    <div className="complete right">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4>Done</h4></li>
                            {
                                toDos.map((item) => {
                                    if (item.status) {
                                        return (
                                            <li class="collection-item">
                                                <label>
                                                    <input
                                                        className="filled-in"
                                                        type="checkbox"
                                                        value={item.status}
                                                        checked="checked"
                                                        onChange={(e) => {
                                                            setToDos(toDos.filter(this_item => {
                                                                if (this_item.id === item.id) {
                                                                    this_item.status = e.target.checked
                                                                };
                                                                return this_item
                                                            }))
                                                        }} />
                                                    <span>{item.name}</span>
                                                </label>
                                                {/* <a href="#!" class="secondary-content"> */}
                                                    {/* <i class="material-icons">close</i> */}
                                                {/* </a> */}
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
