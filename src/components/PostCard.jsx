import React from "react"
// import {service as appwriteService} from "../appwrite/config"
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) { //featuredImage refers to fileId

  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={service.getFilePreview(featuredImage)} alt ={title} className="rounded-xl"/> {/* getFilePreview() return url  */}
            </div>
            <h2
            className="text-xl font-bold"
            >{title}</h2>
        </div>
    </Link>
  )
};

export default PostCard;
