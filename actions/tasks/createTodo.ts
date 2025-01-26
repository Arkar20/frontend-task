"use server";

import { TodoFormData } from "@/components/templates";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: TodoFormData) {
    try {
        const result = await axios.post(
            `${process.env.NEXT_BACKEND_URL}/tasks`,
            {
                ...formData,
            }
        );

        if (result.status === 201) revalidatePath("/");

        return {
            success: true,
            message: "Task Has Been Created",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Something Went Wrong!",
        };
    }
}
