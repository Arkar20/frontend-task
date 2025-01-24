"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";

export async function createTodo(formData: any) {
    try {
        console.log(formData);
        // api call
        await axios.post(`http://localhost:8000/todos`, {
            ...formData,
        });

        return {
            success: true,
            message: "Todo Has Been Created",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
