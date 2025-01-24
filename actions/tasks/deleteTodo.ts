"use server";

import axios from "axios";

export async function deleteTodo(todoId: number) {
    try {
        // api call
        await axios.delete(`http://localhost:8000/tasks/${todoId}`);

        return {
            success: true,
            message: "Todo Has Been Deleted",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
