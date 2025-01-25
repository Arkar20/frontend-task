"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function deleteTodo(todoId: number) {
    try {
        // api call
        const result = await axios.delete(
            `${process.env.NEXT_BACKEND_URL}/tasks/${todoId}`
        );

        if ((result.status = 201)) revalidatePath("/");

        return {
            success: true,
            message: "Task Has Been Deleted",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
