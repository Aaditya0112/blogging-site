import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug, // {doc id} ID.unique() bhi le sakte hai
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            );

            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            );
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
            
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries // array of queries
            );
            
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error", error);
            console.clear()
            return false;
            
        }
    }
 
    // gonna upload file to appwrite storage

    async uploadFile(file){  // file is not filename but blob of that file
        try {
            return await this.bucket.createFile( // returns ID of the file
                conf.appwriteBucketID,
                ID.unique(),
                file,
            );
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
            
        }

    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId,
            );

            return true;
            
        } catch (error) {   
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

 getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId)
    }

}

const service = new Service();

export default service;
