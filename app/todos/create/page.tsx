import { TodoForm } from "@/components/templates/todos/TodoForm";
import React from "react";

export default function page() {
    return (
        <div className="page-container">
            <TodoForm mode="create" />
        </div>
    );
}
