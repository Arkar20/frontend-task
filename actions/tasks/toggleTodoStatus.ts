"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";

export async function toggleTodoStatus(todoId: number) {
    try {
        // api call
        const result = await axios.patch(
            `http://localhost:8000/tasks/${todoId}/status`
        );

        if ((result.status = 201)) revalidatePath("/");

        return {
            success: true,
            message: "Task Status Has Changed",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
