"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";

export async function deleteTodo(todoId: number) {
    try {
        // api call
        const result = await axios.delete(
            `http://localhost:8000/todos/${todoId}`
        );

        console.log(result);

        if ((result.status = 201)) revalidatePath("/");

        return {
            success: true,
            message: "Todo Status Has Changed",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
