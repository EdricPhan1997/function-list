import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { upLoadSingleFile } from "../../redux/_function/uploadFile";

const UploadFile = () => {
  const dispatch = useAppDispatch();

  const handleDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    const fileData: any = await dispatch(upLoadSingleFile(formData));
    const urlData = await fileData.payload;

    //   if (file) {
    //     setValue("thumbnail", urlData, { shouldValidate: true });
    //   }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
    </div>
  );
};

export default UploadFile;
