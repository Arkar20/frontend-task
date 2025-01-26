"use client";

import { deleteTodo, toggleTodoStatus } from "@/actions";
import { Checkbox } from "@/components/atoms";
import { Tile } from "@/components/molecules";
import { TrashIcon } from "@/components/svgs/TrashIcon";
import { Task } from "@/entities";
import { cn } from "@/utils";
import Link from "next/link";
import React, { useTransition } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type TodoProps = {
    tasks: Task[];
};

export function TodoList({ tasks }: TodoProps) {
    const [isPending, startTransition] = useTransition();

    return (
        <div className="flex flex-col space-y-4 ">
            <div className="absolute top-6 right-0">
                {isPending && (
                    <svg
                        className="mr-3 -ml-1 size-5 animate-spin text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                )}
            </div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <Tile
                        key={task.id}
                        className="pl-14 pr-16 md:pr-20"
                        startIcon={
                            <Checkbox
                                checked={task.completed}
                                disabled={isPending}
                                onChange={() => {
                                    startTransition(async () => {
                                        await toggleTodoStatus(
                                            task.id,
                                            !task.completed
                                        );
                                    });
                                }}
                            />
                        }
                        endIcon={
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button type="button" disabled={isPending}>
                                        <TrashIcon />
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your task
                                            and remove your data from our
                                            servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() => {
                                                startTransition(async () => {
                                                    await deleteTodo(task.id);
                                                });
                                            }}
                                        >
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        }
                    >
                        <Link
                            href={`/tasks/${task.id}`}
                            className={cn(
                                "text-sm md:text-[14px] p-[0.5px] w-full inline-block",
                                {
                                    "line-through text-[#808080]":
                                        task.completed,
                                }
                            )}
                        >
                            {task.title}
                        </Link>
                    </Tile>
                </div>
            ))}
        </div>
    );
}
