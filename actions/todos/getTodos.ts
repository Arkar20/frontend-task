import { Todo } from "@/entities";
import { redirect } from "next/navigation";

export async function getTodos() {
    try {
        const data = await fetch("http://localhost:8000/todos", {
            cache: "no-store",
        });

        const todos = await data.json();

        return todos as Todo[];
    } catch (error) {
        console.log(error);
        return redirect("/500");
    }
}
