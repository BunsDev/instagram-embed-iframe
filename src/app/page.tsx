"use client";
import { useState } from "react";
import { CardWithIframe } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [input, setInput] = useState("");
  const [iframeText, setIframeText] = useState("");

  return (
    <main className="w-full h-full">
      <div className="flex flex-col items-start min-h-screen p-4 sm:p-8 md:p-24 max-w-2xl mx-auto space-y-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const mediaLink = new URL(input);
            setIframeText((x) => {
              return `<iframe id="instagram-iframe" src="${
                mediaLink.hostname + mediaLink.pathname
              }${
                mediaLink.pathname[mediaLink.pathname.length - 1] == "/"
                  ? ""
                  : "/"
              }embed" width="400" height="480" frameborder="0" allowfullscreen></iframe>`;
            });
          }}
          className="flex w-full items-center gap-x-2"
        >
          <Input
            type="text"
            value={input}
            onInput={(x) => {
              console.log(x.currentTarget.value);
              setInput((y) => x?.currentTarget?.value);
            }}
            placeholder="enter instagram post or reel url here..."
          />
          <Button type="submit">Generate Iframe</Button>
        </form>
        <CardWithIframe text={iframeText} />
      </div>
    </main>
  );
}
