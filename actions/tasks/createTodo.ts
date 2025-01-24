"use server";

import { TodoFormData } from "@/components/templates";
import axios from "axios";

export async function createTodo(formData: TodoFormData) {
    try {
        console.log(formData);
        // api call
        await axios.post(`http://localhost:8000/tasks`, {
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
