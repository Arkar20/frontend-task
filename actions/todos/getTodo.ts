"use server";

import { Todo } from "@/entities";

export async function getTodo(todoId: number) {
    try {
        const data = await fetch(`http://localhost:8000/todos/${todoId}`, {
            cache: "no-store",
        });

        const todo = await data.json();

        return todo as Todo;
    } catch (error) {
        console.log(error);

        throw new Error("Something Went Wrong");
    }
}
