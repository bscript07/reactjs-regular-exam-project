import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileByid from "../../hooks/useGetUserProfileByid";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileByid(post.createdBy);

	return (
		<>
			<PostHeader post={post} creatorProfile={userProfile} />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={post.imageURL} alt={"FEED POST IMG"} />
			</Box>
			<PostFooter post={post} creatorProfile={userProfile} />
		</>
	);
};

export default FeedPost;
