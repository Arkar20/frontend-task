"use server";

import { Todo } from "@/entities";
import { redirect } from "next/navigation";

export async function getTodo(todoId: number) {
    try {
        const data = await fetch(`http://localhost:8000/todos/${todoId}`, {
            cache: "no-store",
        });

        const todo = await data.json();

        if (data.status !== 200) return null;

        return todo as Todo;
    } catch (error) {
        console.log(error);
        return redirect("/500");
    }
}
