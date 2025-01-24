"use client";

import { deleteTodo, toggleTodoStatus } from "@/actions";
import { Checkbox } from "@/components/atoms";
import { Tile } from "@/components/molecules";
import { TrashIcon } from "@/components/svgs/TrashIcon";
import { Todo } from "@/entities";
import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

type TodoProps = {
    todos: Todo[];
};

export function TodoList({ todos }: TodoProps) {
    return (
        <div className="flex flex-col space-y-4">
            {todos.map((todo) => (
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
                        <button
                            type="button"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            <TrashIcon />
                        </button>
                    }
                >
                    <Link
                        href={`/todos/${todo.id}`}
                        className={cn(
                            "text-sm md:text-[14px] p-[0.5px] w-full inline-block",
                            {
                                "line-through": todo.completed,
                            }
                        )}
                    >
                        {todo.title}
                    </Link>
                </Tile>
            ))}
        </div>
    );
}
