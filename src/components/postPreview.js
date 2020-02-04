import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  console.log('post');
  console.log(post);
  return (
    <article>
      <h3>
        <Link to={`/writing/${post.slug}/`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={`/writing/${post.slug}/`}>read more &rarr;</Link>
    </article>
  );
};

export default PostPreview;
