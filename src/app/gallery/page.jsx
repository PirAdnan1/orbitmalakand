// app/gallery/page.jsx
import GalleryContents from "@/components/Gallery/GalleryContents";

export const metadata = {
  title: "Gallery | The Orbit School & College Malakand",
  description:
    "Photo gallery of events and memories from The Orbit School & College Malakand.",
};

export default function GalleryPage() {
  return <GalleryContents />;
}
