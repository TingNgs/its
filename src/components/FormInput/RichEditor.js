import React, { Component } from "react";
import ReactQuill from "react-quill";
import { handleUploadImage } from "../../utils/generalUtils";
import "react-quill/dist/quill.snow.css";

export default class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.quillRef = React.createRef();
    this.imageHandler = () => {
      const quillEditor = this.quillRef.current.getEditor();
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.onchange = async () => {
        const link = await handleUploadImage(input.files[0]);
        const range = quillEditor.getSelection();
        quillEditor.insertEmbed(range.index, "image", link);
      };
    };
    this.modules = {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466"
              ]
            }
          ],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
          ],
          ["link", "image"],
          ["clean"]
        ],
        handlers: {
          image: this.imageHandler
        }
      }
    };
  }
  render() {
    return (
      <ReactQuill
        ref={this.quillRef}
        value={this.props.value}
        onChange={this.props.handleInput}
        modules={this.modules}
        imageHandler={this.imageHandler}
      />
    );
  }
}
