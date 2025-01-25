"use server";

import { TodoFormData } from "@/components/templates";
import axios from "axios";

export async function updateTodo(todoId: number, formData: TodoFormData) {
    try {
        // api call
        await axios.put(`${process.env.NEXT_BACKEND_URL}/tasks/${todoId}`, {
            ...formData,
        });

        return {
            success: true,
            message: "Task Has Been Updated",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
