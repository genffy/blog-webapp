import ReactMarkdown from "react-markdown";
const RichText = ({ data }: any) => {

    return (
        <ReactMarkdown>{data.body}</ReactMarkdown>
    )
};

export default RichText;