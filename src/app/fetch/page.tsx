"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

function Page() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<null | File>(null);

  const handleClick = async () => {
    const res = await fetch("/api");
    const data = await res.json();
    console.log("🚀 ~ handleClick ~ res:", data.data.data);
  };

  const handleGetImages = async () => {
    const res = await fetch("http://localhost:1337/api/upload/files");
    const data = await res.json();
    console.log("🚀 ~ handleGetImages ~ data:", data);
  };

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const filesList = event.target.files;

    const [image] = Array.from(filesList);

    setImage(image);
  };

  const onHandleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    const data = { title };

    image && formData.append("files.image", image, "image");
    formData.append("data", JSON.stringify(data));

    const res = await fetch("http://localhost:1337/api/todos?populate=*", {
      method: "POST",
      body: formData,
    });
    const resData = await res.json();
    console.log("🚀 ~ handleSubmit ~ res:", resData);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>FETCH</button>
      <button onClick={handleGetImages}>GET images</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onHandleTitleChange}
        />
        <input type="file" name="image" onChange={handleUploadedFile} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Page;
