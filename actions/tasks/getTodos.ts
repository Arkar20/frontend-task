import { Task } from "@/entities";
import { redirect } from "next/navigation";

export async function getTodos() {
    try {
        const data = await fetch("http://localhost:8000/tasks", {
            cache: "no-store",
        });

        const tasks = await data.json();

        return tasks as Task[];
    } catch (error) {
        console.log(error);
        return redirect("/500");
    }
}
