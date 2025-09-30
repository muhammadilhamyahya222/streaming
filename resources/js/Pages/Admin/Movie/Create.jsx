import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";

export default function Index({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
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

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl font-semibold">Insert a new Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <div className="flex flex-col gap-4">
                    <div>
                        <InputLabel forInput="name" value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            variant="primary-outline"
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
                            onChange={onHandleChange}
                            placeholder="Enter movie video URL"
                        />
                        <InputError message={errors.video_url} />
                    </div>
                    <div>
                        <InputLabel forInput="thumbnail" value="Thumbnail" />
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
