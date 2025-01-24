import { getTodo } from "@/actions/tasks/getTodo";
import { TodoForm } from "@/components/templates/tasks/TodoForm";
import { redirect } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic";

export default async function page({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const id = (await params).id;

    const task = await getTodo(id);

    if (!task) {
        return redirect("/404");
    }

    return (
        <div className="page-container">
            <TodoForm
                mode="edit"
                todoId={task.id}
                initialData={{
                    title: task.title,
                    color: task.color,
                }}
            />
        </div>
    );
}
