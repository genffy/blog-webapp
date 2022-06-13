import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
const CodeBlock = ({ children }: any) => {
return (
    <div className="flex overflow-hidden relative flex-col p-5 mx-auto my-5 space-y-5 w-full font-mono text-sm rounded-lg bg-navy-dark">
    <div className="flex space-x-3 w-full">
        <span className="w-3 h-3 rounded-full bg-mac-cls" />
        <span className="w-3 h-3 rounded-full bg-mac-min" />
        <span className="w-3 h-3 rounded-full bg-mac-max" />
    </div>
    <div className="">{children}</div>
    </div>
);
};
  
const RichText = ({ data }: any) => {
    return (
        // <CodeBlock></CodeBlock>
        <ReactMarkdown>{data}</ReactMarkdown>
    )
};

export default RichText;