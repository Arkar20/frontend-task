import { Badge } from "@/components/molecules";
import { AddIcon } from "@/components/svgs";
import Link from "next/link";
import Image from "next/image";
import { Tile } from "@/components/molecules";
import { Checkbox } from "@/components/atoms";
import TrashIcon from "@/components/svgs/TrashIcon";
import { getTodos, toggleTodoStatus } from "../actions";
import TodoList from "@/components/templates/todos/TodoList";

export default async function Home() {
    const todos = await getTodos();

    const notFoundTodos = (
        <div className="w-full items-center justify-center min-h-[266px] flex flex-col text-[#808080] space-y-3">
            <Image
                src="/file-icon.png"
                width={72}
                height={72}
                alt="file icon"
            />

            <p>You don&apos;t have any tasks registered yet.</p>
            <p>Create tasks and organize your to-do items.</p>
        </div>
    );

    return (
        <>
            <div className="relative">
                {/* create btn */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-full">
                    <Link
                        href="/todos/create"
                        className="flex w-full bg-primary items-center justify-center text-white py-4 space-x-2 rounded-lg"
                    >
                        <span>Create Task</span>
                        <AddIcon />
                    </Link>
                </div>
                {/* create btn */}
            </div>
            {/* task section */}
            <div className="pt-24 md:pt-40 mx-2 md:mx-0 ">
                {/* header labels*/}
                <div className="flex justify-between ">
                    <div className="space-x-2">
                        <span className="text-primary">Tasks</span>
                        <Badge>0</Badge>
                    </div>
                    <div className="space-x-2">
                        <span className="text-secondary">Completed</span>
                        <Badge>0</Badge>
                    </div>
                </div>

                <hr className="mt-8 border-[0.1px] border-b border-[#333333] w-full"></hr>
                {/* header labels*/}

                {/* task lists */}
                {todos.length === 0 ? (
                    notFoundTodos
                ) : (
                    <TodoList todos={todos} />
                )}

                {/* task lists */}
            </div>
            {/* task section */}
        </>
    );
}
