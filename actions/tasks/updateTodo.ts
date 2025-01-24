"use server";

import { TodoFormData } from "@/components/templates";
import axios from "axios";

export async function updateTodo(todoId: number, formData: TodoFormData) {
    try {
        // api call
        await axios.put(`http://localhost:8000/tasks/${todoId}`, {
            ...formData,
        });

        return {
            success: true,
            message: "Todo Has Been Updated",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
