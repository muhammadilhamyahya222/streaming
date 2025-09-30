import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, router, useForm } from "@inertiajs/react";

export default function Index({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Uppdate Movie" />
            <h1 className="text-xl font-semibold">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-4">
                    <div>
                        <InputLabel forInput="name" value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            variant="primary-outline"
                            defaultValue={movie.name}
                            onChange={onHandleChange}
                            placeholder="Enter movie name"
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div>
                        <InputLabel forInput="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            variant="primary-outline"
                            defaultValue={movie.category}
                            onChange={onHandleChange}
                            placeholder="Enter movie category"
                        />
                        <InputError message={errors.category} />
                    </div>
                    <div>
                        <InputLabel forInput="video_url" value="Video URL" />
                        <TextInput
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            defaultValue={movie.video_url}
                            onChange={onHandleChange}
                            placeholder="Enter movie video URL"
                        />
                        <InputError message={errors.video_url} />
                    </div>
                    <div>
                        <InputLabel forInput="thumbnail" value="Thumbnail" />
                        <img src={`/storage/${movie.thumbnail}`} alt="" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            onChange={onHandleChange}
                            placeholder="Enter movie thumbnail"
                        />
                        <InputError message={errors.thumbnail} />
                    </div>
                    <div>
                        <InputLabel forInput="rating" value="Rating" />
                        <TextInput
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            defaultValue={movie.rating}
                            onChange={onHandleChange}
                            placeholder="Enter movie rating"
                        />
                        <InputError message={errors.rating} />
                    </div>
                    <div className="flex flex-row items-center">
                        <InputLabel
                            forInput="is_featured"
                            value="Is Featured"
                        />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            className="ml-2 mb-2"
                            checked={movie.is_featured}
                        />
                    </div>
                </div>
                <div className="mt-4"></div>
                <PrimaryButton
                    type="submit"
                    disabled={processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
