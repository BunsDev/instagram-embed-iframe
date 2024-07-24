import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

export function CardWithIframe({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <>
      {Boolean(text?.length) && (
        <Card className={cn("w-full", className)}>
          <CardContent className="mt-6">{text}</CardContent>
          <CardFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(text || "");
              }}
            >
              <Copy className="mr-2" size={16} /> Copy
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
