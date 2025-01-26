import { Task } from "@/entities";
import { redirect } from "next/navigation";

export async function getTodos() {
    try {
        const data = await fetch(`${process.env.NEXT_BACKEND_URL}/tasks`);

        const tasks = await data.json();

        return tasks as Task[];
    } catch (error) {
        console.log(error);
        return redirect("/500");
    }
}
