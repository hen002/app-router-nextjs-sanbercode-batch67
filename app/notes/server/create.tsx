'use client'

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createNote } from "./action";


const initialState = {
    message: '',
    errors: {
        title: '',
        description: ''
    }
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            aria-disabled={pending}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
            Submit
        </button>
    )
}

export default function CreateForm() {
    const [state, formAction] = useActionState(createNote, initialState)

    return (
        <div className="max-w mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 sticky top-0">
            <h2 className="text-xl font-semibold mb-4">Create Note</h2>
            <form className="space-y-4" action={formAction}>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Input title"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {state.errors && typeof state.errors === "object" && (
                            <small className="text-red-600">{state.errors.title}</small>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Input description"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {state.errors && typeof state.errors === "object" && (
                            <small className="text-red-600">{state.errors.description}</small>
                        )}
                    </div>
                </div>
                <SubmitButton />
            </form>
        </div>
    );
}