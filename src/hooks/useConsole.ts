import { useEffect, useRef } from "react";

const { VITE_APP_NAME, MODE, BUILD_TIME } = import.meta.env;

const useConsole = () => {
  const count = useRef(0);
  useEffect(() => {
    const version = () => {
      const style = [
        "background: #202124",
        "color: #fff",
        "font-family:monospace",
        "padding:4px",
        "border:1px dashed #fff",
      ];
      const infoStyle = [...style, "font-size:50px"];
      const info = [
        `Environment - ${MODE}`,
        `Build - ${new Date(BUILD_TIME).toLocaleString()}`,
      ];
      //@ts-ignore
      console.print = function (...o) {
        queueMicrotask(console.log.bind(console, ...o));
      };
      //@ts-ignore
      console.print(`%c${VITE_APP_NAME}`, infoStyle.join(";"));
      //@ts-ignore
      console.print(`%c${info.join("\n")}`, style.join(";"));
    };
    if (count.current === 0) version();

    count.current++;
  });
  return null;
};
export default useConsole;
