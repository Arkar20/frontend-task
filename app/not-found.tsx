import React from "react";
import Link from "next/link";

export default async function page() {
    return (
        <div className="page-container">
            <div>
                <h2>Not Found Could not find requested resource</h2>

                <div className="flex justify-center mt-10">
                    <Link className="text-primary" href="/">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
