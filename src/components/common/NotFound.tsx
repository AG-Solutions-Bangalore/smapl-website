import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NotFoundProps {
  code?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function NotFound({
  code = "404",
  title = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved.",
  actionLabel = "Go Home",
  actionHref = "/",
}: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] gap-6 text-center">
      <h1 className="text-6xl font-bold">{code}</h1>
      <p className="text-lg text-muted-foreground">{title}</p>
      {description && (
        <p className="text-sm text-muted-foreground max-w-md">{description}</p>
      )}
      <Button asChild>
        <Link to={actionHref}>{actionLabel}</Link>
      </Button>
    </div>
  );
}
