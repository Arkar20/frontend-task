"use client";

import { createTodo } from "@/actions/todos/createTodo";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
    title: z
        .string()
        .nonempty("Title is required")
        .max(50, "Title must be at most 50 characters"),
    description: z
        .string()
        .nonempty("Description is required")
        .max(200, "Description must be at most 200 characters"),
    color: z
        .string()
        .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/, "Color must be a valid hex code"),
});
export type TodoFormData = z.infer<typeof schema>;

export const CreateTodoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading, isSubmitSuccessful },
    } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

    const submit = async (data: TodoFormData) => {
        const result = await createTodo(data);

        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="title" {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}
            <input
                type="text"
                placeholder="description"
                {...register("description")}
            />
            {errors.description?.message && (
                <span>{errors.description?.message}</span>
            )}
            <input type="text" placeholder="color" {...register("color")} />
            {errors.color && errors.color.message}
            {isLoading && "loading..."}
            {isSubmitSuccessful && "success"}
            <button>Submit</button>
        </form>
    );
};
