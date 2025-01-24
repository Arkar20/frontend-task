"use client";

import { deleteTodo, toggleTodoStatus } from "@/actions";
import { Checkbox } from "@/components/atoms";
import { Tile } from "@/components/molecules";
import TrashIcon from "@/components/svgs/TrashIcon";
import { Todo } from "@/entities";
import React from "react";

type TodoProps = {
    todos: Todo[];
};

export default function TodoList({ todos }: TodoProps) {
    return todos.map((todo) => (
        <Tile
            key={todo.id}
            className="pl-14 pr-20"
            startIcon={
                <Checkbox
                    isChecked={todo.completed}
                    handleChange={() => toggleTodoStatus(todo.id)}
                />
            }
            endIcon={
                <button type="button" onClick={() => deleteTodo(todo.id)}>
                    <TrashIcon />
                </button>
            }
        >
            <p className="text-sm md:text-md">{todo.description}</p>
        </Tile>
    ));
}
