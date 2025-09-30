import React from "react"
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";  /*
because register is not working with tinymce so we use controller for it for giving ref
help in integration with externally controlled component and gives frredomm to use custom register
*/


// init mein toolbar and plugins or anything set karne ke liye see documnetation

export default function RTE({name, control, label, defaultvalue = ""}) { // ye control react-hook-form se aata hai,   jo iske states ko componenet se form mein le jata hai
  return (
    <div className="w-full">
        {label && <label className = "inline-block mb-1 pl-1">{label}</label>}    

        <Controller
        name = {name || "content"}
        control = {control}
        render = {({field : {onChange}}) => (
            <Editor
            apiKey='0ssazvn7jfpb4oyff1wcml961oi1mv5agmon4pbbs4gd4hlq'
            initialValue = {defaultvalue}
            init={{
                initialValue: defaultvalue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}

            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
};

