import React, { useEffect } from "react";
import { config } from "config";
import { useTheme } from "next-themes";

function Utterances(): JSX.Element {
  const { theme: darkmode } = useTheme();

  useEffect(() => {
    const theme = darkmode === "dark" ? "github-dark" : "github-light";

    const script = document.createElement("script");
    const anchor = document.getElementById("comments");
    if (!anchor) return;

    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", `true`);
    script.setAttribute("theme", theme);
    const setting: { [key: string]: string } = config.utterances.config;
    Object.keys(setting).forEach(key => {
      script.setAttribute(key, setting[key]);
    });
    anchor.appendChild(script);
    return () => {
      anchor.innerHTML = "";
    };
  });

  return (
    <div id="comments" className="md:-ml-16">
      <div className="utterances-frame"></div>
    </div>
  );
}

export default Utterances;
