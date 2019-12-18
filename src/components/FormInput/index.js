import React, { useRef, useState, useMemo } from "react";

import TextInput from "../TextInput";

import { inputType } from "../../utils/configConst";
import ReactQuill from "react-quill";
import { handleUploadImage } from "../../utils/generalUtils";
import "react-quill/dist/quill.snow.css";
import "./style.scss";

const FormInput = ({ handleInput, inputList, handleInputOnblur }) => {
  const quillRef = useRef(null);
  const imageHandler = () => {
    const quillEditor = quillRef.current.getEditor();
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
  const modules = useMemo(() => {
    return {
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
          image: imageHandler
        }
      }
    };
  }, []);

  return (
    <React.Fragment>
      {inputList.map(e => {
        const renderInput = () => {
          if (e.inputType === inputType.text_alert)
            return (
              <TextInput
                name={e.name}
                type={e.type}
                onChange={handleInput}
                value={e.value}
                placeholder={e.placeholder}
                alertMessage={e.alertMessage}
                onblur={handleInputOnblur}
              />
            );
          if (e.inputType === inputType.text)
            return (
              <input
                className="formInput_text w-full"
                name={e.name}
                type={e.type}
                onChange={handleInput}
                value={e.value}
                placeholder={e.placeholder}
                onBlur={handleInputOnblur}
              />
            );
          if (e.inputType === inputType.textarea) {
            return (
              <textarea
                className="formInput_textarea w-full"
                name={e.name}
                onChange={handleInput}
                value={e.value}
                placeholder={e.placeholder}
              />
            );
          }
          if (e.inputType === inputType.radio) {
            return (
              <div className="formInput_radio_container flex flex-wrap">
                {e.option.map((radioOption, index) => {
                  const isChecked = index === parseInt(e.value);
                  return (
                    <div
                      key={`formInput_radio${radioOption}${index}`}
                      className="formInput_radio_layout flex relative"
                    >
                      <div
                        className={`formInput_radio  rounded-full border-main border-solid ${
                          isChecked ? "border-5 bg-white" : "border-2"
                        }`}
                      >
                        <input
                          className="absolute top-0 left-0 w-full h-full opacity-0"
                          type="radio"
                          name={e.name}
                          value={index}
                          checked={isChecked}
                          onChange={handleInput}
                        />
                      </div>
                      {radioOption}
                    </div>
                  );
                })}
                <br />
              </div>
            );
          }
          if (e.inputType === inputType.select) {
            return (
              <select name={e.name} onChange={handleInput} value={e.value}>
                {e.option.map((optionPlaceHolder, i) => {
                  return (
                    <option
                      value={i}
                      key={`${e.name}_${i}_${optionPlaceHolder}`}
                    >
                      {optionPlaceHolder}
                    </option>
                  );
                })}
              </select>
            );
          }
          if (e.inputType === inputType.editor) {
            return (
              <ReactQuill
                ref={quillRef}
                value={e.value}
                onChange={e.handleInput}
                modules={modules}
                imageHandler={imageHandler}
              />
            );
          }
          return "";
        };
        return (
          <React.Fragment key={`formInput${e.name}`}>
            {e.title ? (
              <div className="formInput_title font-semibold">{e.title}</div>
            ) : null}
            {renderInput()}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default FormInput;
