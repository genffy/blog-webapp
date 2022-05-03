import ReactMarkdown from "react-markdown";
const RichText = ({ data }: any) => {

    return <ReactMarkdown children={data.body}/>;
};

export default RichText;