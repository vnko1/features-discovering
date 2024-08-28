import { PhotoData } from "@/types";
import PhotoDisplay from "@/app/modal/PhotoDisplay";
import { Modal } from "@/components";

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Home({ params: { photoId } }: Props) {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1>No Images to Display</h1>;
  }

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }
  return (
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
}
