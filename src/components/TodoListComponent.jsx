import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toYesterday from "../assets/toYesterday.svg";
import toTomorrow from "../assets/toTomorrow.svg";
import TodoItem from "./TodoItem";
import { formatDate, formatDay, getTodoList, saveTodoList } from "../utils/Utils";

const TodoListComponent = ({ currentDate }) => {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // 투두 렌더링
    useEffect(() => {
        loadTodoList(currentDate);
    }, [currentDate]);

    const loadTodoList = (date) => {
        const todos = getTodoList(date);
        setTodoList(todos);
    };

    // 남은 할 일 개수
    const updateLeftNum = () => {
        const leftNum = todoList.filter((todo) => !todo.completed).length;
        return `할 일 ${leftNum}개`;
    };

    // 투두 추가
    const addTodoItem = (e) => {
        e.preventDefault();
        if (!newTodo.trim())
            return;
        const newTodoList = [...todoList, { text: newTodo, completed: false}];
        setTodoList(newTodoList);
        saveTodoList(currentDate, newTodoList);
        setNewTodo("");
    };

    // 투두 삭제 or 완료 토글 처리
    const handleTodoChange = (date, changedTodo, isDelete) => {
        const updatedTodoList = isDelete
        // 삭제 처리
        ? todoList.filter((todo) => todo !== changedTodo)
        // 완료 토글 처리
        : todoList.map((todo) =>
            todo === changedTodo ? { ...todo, completed: !todo.completed } : todo
        );

        setTodoList(updatedTodoList);
        saveTodoList(date, updatedTodoList);
    };

    return (
        <Main>
            <LeftNum>{updateLeftNum()}</LeftNum>
            <DateText>{formatDate(currentDate)}</DateText>
            <DayText>{formatDay(currentDate)}</DayText>

            <TodoInputForm onSubmit={addTodoItem}>
                <TodoInput
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="To Do 입력 후 Enter"
                />
            </TodoInputForm>

            <TodoList>
                {todoList.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        date={currentDate}
                        onTodoChange={handleTodoChange}
                    />
                ))}
            </TodoList>
            <Img src={toYesterday} />
            <Img src={toTomorrow} />
        </Main>
    );
};

export default TodoListComponent;

const Main = styled.div`
    text-align: left;
    background: white;
    padding: 7% 15%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    margin: 0 20px;
`;

const LeftNum = styled.p`
    color: #91d1ff;
    margin-bottom: 8px;
    font-weight: 500;
`;

const DateText = styled.h1`
    font-weight: 500;
`;

const DayText = styled.p`
    margin-top: 8px;
    font-weight: 500;
`;

const TodoInputForm = styled.form`
    margin-top: 20px;
`;

const TodoInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #91d1ff;
    border-radius: 10px;
`;

const TodoList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 20px;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;
