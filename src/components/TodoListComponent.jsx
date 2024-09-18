import React from "react";
import styled from "styled-components";
import toYesterday from "../assets/toYesterday.svg";
import toTomorrow from "../assets/toTomorrow.svg";
import TodoItem from "./TodoItem";

const TodoListComponent = () => {
    return (
        <Main>
            <LeftNum></LeftNum>
            <DateText></DateText>
            <DayText></DayText>

            <TodoInputForm>
                <TodoInput
                    type="text"
                    placeholder="To Do 입력 후 Enter"
                />
            </TodoInputForm>

            <TodoList>
                <TodoItem />
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
