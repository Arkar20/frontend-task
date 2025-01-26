"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { createTodo } from "@/actions/tasks/createTodo";
import { updateTodo } from "@/actions/tasks/updateTodo";
import Link from "next/link";
import { AddIcon, BackIcon, CheckIcon } from "@/components/svgs";
import ColorRadioInput from "@/components/atoms/ColorRadioInput";
import { useRouter } from "next/navigation";

export const schema = z.object({
    title: z
        .string()
        .nonempty("Title is required")
        .max(50, "Title must be at most 50 characters"),
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

const colors = [
    { twClass: "bg-[#FF3B30]", color: "#FF3B30" },
    { twClass: "bg-[#FF9500]", color: "#FF9500" },
    { twClass: "bg-[#FFCC00]", color: "#FFCC00" },
    { twClass: "bg-[#34C759]", color: "#34C759" },
    { twClass: "bg-[#007AFF]", color: "#007AFF" },
    { twClass: "bg-[#5856D6]", color: "#5856D6" },
    { twClass: "bg-[#AF52DE]", color: "#AF52DE" },
    { twClass: "bg-[#FF2D55]", color: "#FF2D55" },
    { twClass: "bg-[#A2845E]", color: "#A2845E" },
];

export const TodoForm = ({ initialData, mode, todoId }: TodoFormProps) => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<TodoFormData>({
        resolver: zodResolver(schema),
        defaultValues: initialData || {
            title: "",
            color: "",
        },
    });

    const submit = async (data: TodoFormData) => {
        try {
            if (mode === "create") {
                const result = await createTodo(data);

                if (result.success) {
                    router.push("/");
                }
            } else {
                await updateTodo(todoId, data);
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <BackIcon />
                </Link>
                {isSubmitSuccessful && <CheckIcon />}
            </div>

            <form onSubmit={handleSubmit(submit)} className="mt-12 space-y-6">
                <div>
                    <label
                        htmlFor="title"
                        className="text-primary block font-semibold"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="w-full bg-[#333333] px-4 py-2 rounded-md mt-2  focus:outline-none"
                        placeholder="Title"
                        {...register("title")}
                    />
                    {errors.title && (
                        <span className="text-red-600">
                            {errors.title.message}
                        </span>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="color"
                        className="text-primary block font-semibold"
                    >
                        Color
                    </label>
                    {colors.map((color) => (
                        <ColorRadioInput
                            key={color.color}
                            value={color.color}
                            className={`${color.twClass}`}
                            {...register("color")}
                        />
                    ))}

                    {errors.color && (
                        <span className="text-red-600 block">
                            {errors.color.message}
                        </span>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    className="flex w-full bg-primary items-center justify-center text-white py-4 space-x-2 rounded-lg"
                >
                    {isSubmitting ? (
                        "Loading..."
                    ) : (
                        <>
                            <span>
                                {mode === "create" ? "Add Task" : "Save"}
                            </span>
                            {mode === "create" ? <AddIcon /> : <CheckIcon />}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};
