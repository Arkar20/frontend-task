"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";

export async function toggleTodoStatus(todoId: number, completed: boolean) {
    try {
        // api call
        const result = await axios.put(
            `${process.env.NEXT_BACKEND_URL}/tasks/${todoId}`,
            {
                completed,
            }
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
