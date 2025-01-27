"use server";

import { Task } from "@/entities";
import { redirect } from "next/navigation";

export async function getTodo(todoId: number) {
    try {
        const data = await fetch(
            `${process.env.NEXT_BACKEND_URL}/tasks/${todoId}`,
            {
                cache: "no-store",
            }
        );

        const task = await data.json();

        if (data.status !== 200) return null;

        return task as Task;
    } catch (error) {
        console.log(error);
        return redirect("/500");
    }
}
