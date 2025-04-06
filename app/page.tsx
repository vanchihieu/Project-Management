import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
      Tailwind đang hoạt động!
      <Button variant={"primary"}>Click vao</Button>
      <Button variant={"destructive"}>Click vao</Button>
      <Button variant={"ghost"}>Click vao</Button>
      <Button variant={"outline"}>Click vao</Button>
    </div>
  );
}
