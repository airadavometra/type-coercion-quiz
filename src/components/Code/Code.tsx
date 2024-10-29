import { FC } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import {
  a11yLight,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import useMediaQuery from "../../hooks/useMediaQuery";

SyntaxHighlighter.registerLanguage("javascript", javascript);

export interface CodeProps {
  children: string;
}

export const Code: FC<CodeProps> = ({ children }) => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <SyntaxHighlighter
      language="javascript"
      style={isDarkMode ? a11yDark : a11yLight}
      customStyle={{
        width: "fit-content",
        display: "inline",
        backgroundColor: "var(--background-color-grey) !important",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
