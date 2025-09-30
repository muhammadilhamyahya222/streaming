import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    return (
        <Authenticated auth={auth}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Movie List
                </h1>
                <Link href={route("admin.dashboard.movie.create")}>
                    <PrimaryButton className="px-6 py-2 rounded-xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition">
                        + Add Movie
                    </PrimaryButton>
                </Link>
            </div>

            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
                <table className="table-auto w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Thumbnail</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Rating</th>
                            <th className="px-4 py-3 text-center" colSpan={2}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <tr
                                    key={movie.id}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            src={`/storage/${movie.thumbnail}`}
                                            alt={movie.name}
                                            className="w-24 h-32 object-cover rounded-lg shadow-sm mx-auto"
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-800">
                                        {movie.name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">
                                        {movie.category}
                                    </td>
                                    <td className="px-4 py-3 font-semibold text-yellow-600">
                                        {movie.rating.toFixed(1)}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Link
                                            href={route(
                                                "admin.dashboard.movie.edit",
                                                movie.id
                                            )}
                                        >
                                            <PrimaryButton
                                                type="button"
                                                variant="warning"
                                                className="px-4 py-2 rounded-lg text-sm bg-yellow-500 text-white hover:bg-yellow-600 transition"
                                            >
                                                Edit
                                            </PrimaryButton>
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <PrimaryButton
                                            type="button"
                                            variant="danger"
                                            className="px-4 py-2 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </PrimaryButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-4 py-6 text-center text-gray-500 italic"
                                >
                                    No movies found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
