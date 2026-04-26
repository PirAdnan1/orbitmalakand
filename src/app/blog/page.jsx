// app/blog/page.jsx
import BlogContents from "@/components/Blog/BlogContents";

export const metadata = {
  title: "Blog & Events | The Orbit School & College Malakand",
  description:
    "Latest news, events, and IT course announcements from The Orbit School & College Malakand.",
};

export default function BlogPage() {
  return <BlogContents />;
}
