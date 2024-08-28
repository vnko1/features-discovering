import { PhotoData } from "@/types";
import PhotoDisplay from "../../PhotoDisplay";

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({ params: { photoId } }: Props) {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <PhotoDisplay photoData={photoData} />
    </div>
  );
}
