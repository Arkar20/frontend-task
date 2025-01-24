"use client";

import { deleteTodo, toggleTodoStatus } from "@/actions";
import { Checkbox } from "@/components/atoms";
import { Tile } from "@/components/molecules";
import { TrashIcon } from "@/components/svgs/TrashIcon";
import { Todo } from "@/entities";
import { cn } from "@/utils";
import React from "react";

type TodoProps = {
    todos: Todo[];
};

export function TodoList({ todos }: TodoProps) {
    return todos.map((todo) => (
        <Tile
            key={todo.id}
            className="pl-14 pr-16 md:pr-20"
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
            <p
                className={cn("text-sm md:text-md p-[0.5px]", {
                    "line-through": todo.completed,
                })}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, itaque.
            </p>
        </Tile>
    ));
}
