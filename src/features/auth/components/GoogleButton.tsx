import { Button } from "@/components/ui/button";

export default function GoogleButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-7 w-full rounded-md border-border text-[8px] font-normal"
    >
      <span className="mr-1 text-[10px] font-semibold text-blue-500">
        G
      </span>

      Continue with Google
    </Button>
  );
}