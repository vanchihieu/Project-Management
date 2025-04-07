import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
      Tailwind đang hoạt động!
      <Input/>
      <Button variant={"primary"}>Click vao</Button>
      <Button variant={"destructive"}>Click vao</Button>
      <Button variant={"ghost"}>Click vao</Button>
      <Button variant={"outline"}>Click vao</Button>
    </div>
  );
}
