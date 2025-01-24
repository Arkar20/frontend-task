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
    tasks: Todo[];
};

export function TodoList({ tasks }: TodoProps) {
    return (
        <div className="flex flex-col space-y-4">
            {tasks.map((task) => (
                <Tile
                    key={task.id}
                    className="pl-14 pr-16 md:pr-20"
                    startIcon={
                        <Checkbox
                            isChecked={task.completed}
                            handleChange={() => toggleTodoStatus(task.id)}
                        />
                    }
                    endIcon={
                        <button
                            type="button"
                            onClick={() => deleteTodo(task.id)}
                        >
                            <TrashIcon />
                        </button>
                    }
                >
                    <Link
                        href={`/tasks/${task.id}`}
                        className={cn(
                            "text-sm md:text-[14px] p-[0.5px] w-full inline-block",
                            {
                                "line-through": task.completed,
                            }
                        )}
                    >
                        {task.title}
                    </Link>
                </Tile>
            ))}
        </div>
    );
}
