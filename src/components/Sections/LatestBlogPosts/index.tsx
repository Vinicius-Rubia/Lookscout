import React from "react";
import * as C from "./styles";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";

import Post1 from "../../../assets/images/post1.png";
import Post2 from "../../../assets/images/post2.png";
import Post3 from "../../../assets/images/post3.png";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import { StyledButton } from "../../../styles/components/button";
import { HiArrowRight } from "react-icons/hi";

const posts = [
  {
    id: 1,
    imagePost: Post1,
    avatar: Avatar1,
    category: "Article",
    date: "25 Apr. 2022",
    title: "Organize your digital assets with a new methodology.",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.",
  },
  {
    id: 2,
    imagePost: Post2,
    avatar: Avatar2,
    category: "Guide",
    date: "25 Apr. 2022",
    title: "Faster ways to reach your customers and their needs.",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital divide.",
  },
  {
    id: 3,
    imagePost: Post3,
    avatar: Avatar3,
    category: "Interview",
    date: "25 Apr. 2022",
    title: "Gestalt psychology in UI/UX design and beyond.",
    description:
      "Bring to the table win-win strategies to proactive domination. At the end of the day, going forward.",
  },
];

const LatestBlogPosts: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
          Latest Blog Posts
        </StyledTitle>
        <StyledParagraph className="description" fontSize="md">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </StyledParagraph>
        <C.Grid>
          {posts.map((post) => (
            <C.Post key={post.id}>
              <C.ImgPost src={post.imagePost} alt="Image Post" />
              <C.Avatar>
                <img src={post.avatar} alt="Author" />
              </C.Avatar>
              <C.ContentPost>
                <C.Header>
                  <C.Category>{post.category}</C.Category>
                  <p>{post.date}</p>
                </C.Header>
                <StyledTitle tag="h3" fontSize="sm" fontWeight={600}>
                  {post.title}
                </StyledTitle>
                <StyledParagraph fontSize="md">
                  {post.description}
                </StyledParagraph>
                <StyledButton href="#" buttonSize="md">
                  Learn more
                  <HiArrowRight size={20} />
                </StyledButton>
              </C.ContentPost>
            </C.Post>
          ))}
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default LatestBlogPosts;
