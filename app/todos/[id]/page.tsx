import { getTodo } from "@/actions/todos/getTodo";
import { TodoForm } from "@/components/templates/todos/TodoForm";
import React from "react";
export const dynamic = "force-dynamic";

export default async function page({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const id = (await params).id;

    const todo = await getTodo(id);

    return (
        <div className="page-container">
            <TodoForm
                mode="edit"
                todoId={todo.id}
                initialData={{
                    title: todo.title,
                    description: todo.description,
                    color: todo.color,
                }}
            />
        </div>
    );
}
