import Link from 'next/link';
import React from 'react';

const Post = ({ props }) => {
  return (
    <Link href={props.url}>
    <div className="card w-full md:w-96 bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body">
        {props.urlToImage ? (
          <figure>
            <img
              src={props.urlToImage}
              alt={props.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <h2 className="card-title text-lg font-bold">{props.title}</h2>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Author:</span> {props.author || 'Unknown'}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Source:</span> {props.source?.name || 'N/A'}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Published At:</span> {new Date(props.publishedAt).toLocaleString()}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default Post;
