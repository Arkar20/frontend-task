import { Todo } from "@/entities";

export async function getTodos() {
    try {
        const data = await fetch("http://localhost:8000/todos", {
            cache: "no-store",
        });

        const todos = await data.json();

        return todos as Todo[];
    } catch (error) {
        console.log(error);
        throw new Error("Something Went Wrong");
    }
}
