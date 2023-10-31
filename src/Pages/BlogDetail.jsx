import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    console.log("Id", id);
    getBlogById();
  }, []);

  const getBlogById = () => {
    GlobalApi.getPostById(id).then((resp) => {
      const item = resp.data.data;
      const result = {
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tag: item.attributes.tag,
        coverImage: item.attributes.coverImage.data.attributes.url,
      };
      setPost(result);
      console.log("Result", result);
    });
  };
  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10">
      <h3 className="text-red-500 text-[12px]">{post.tag}</h3>
      <h3 className="text-[23px] font-bold">{post.title}</h3>
      <div className="flex items-center mt-5">
        <img
          src="/assets/Images/icon.png"
          className="w-[35px] rounded-full"
        />
        <div className="ml-2">
          <h3 className="font-bold text-[12px]">Chathura</h3>
          <h3 className="text-gray-500 text-[10px]">10/30/2023</h3>
        </div>
      </div>
      <img src={post.coverImage} className="rounded-2xl mt-5 mb-5 w-full" />
      {/* <h3>{post.desc}</h3> */}
      <ReactMarkdown
        children={post.desc}
        escapeHtml={false}
        className="leading-9"
      />
    </div>
  );
}

export default BlogDetail;
