import Heading from "./Heading";
import ucFirst from "../hellpers/ucFirst";

const PostInfo = ({ post }) => {
    const { title, body } = post;
    return (
        <>
            <Heading tag="h3" text={ucFirst(title)} />
            <p>{ucFirst(body) + "."}</p>
        </>
    )
};

export default PostInfo;