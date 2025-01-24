"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { createTodo } from "@/actions/todos/createTodo";
import { updateTodo } from "@/actions/todos/updateTodo";

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

type TodoFormProps =
    | {
          mode: "create";
          initialData?: undefined;
          todoId?: undefined;
      }
    | {
          mode: "edit";
          todoId: number;
          initialData: TodoFormData;
      };

export const TodoForm = ({ initialData, mode, todoId }: TodoFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<TodoFormData>({
        resolver: zodResolver(schema),
        defaultValues: initialData || {
            title: "",
            description: "",
            color: "#ffffff", // Default color
        },
    });

    const submit = async (data: TodoFormData) => {
        try {
            if (mode === "create") {
                await createTodo(data);
            } else {
                await updateTodo(todoId, data);
            }

            reset();
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Title" {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}

            <input
                type="text"
                placeholder="Description"
                {...register("description")}
            />
            {errors.description && <span>{errors.description.message}</span>}

            <input type="text" placeholder="Color" {...register("color")} />
            {errors.color && <span>{errors.color.message}</span>}

            {isSubmitting && <p>Loading...</p>}
            {isSubmitSuccessful && <p>Success!</p>}

            <button type="submit">
                {initialData ? "Edit" : "Create"} Todo
            </button>
        </form>
    );
};
