import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

interface CustomUploaderProps extends UploadProps {
  setFil: Function;
  fil: Array<any>;
  btnIcon?: React.JSX.Element;
  icon?: React.JSX.Element | boolean;
  innerText?: string;

  // imgUrl: string;
}

const CustomUploader: React.FC<CustomUploaderProps> = (
  props: CustomUploaderProps
) => {
  // const { setFil, fil } = props;
  const { setFil, fil, ...rest }: CustomUploaderProps = props;
  // const [docFile, setDocFile] = useState<string | { src: string } | null>();

  const getBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let files = [...fil];

  const customRequest = async (info: any) => {
    const { onSuccess, onError, file } = info;
    let baseFile = await getBase64(file);
    console.log("info", info);

    try {
      await new Promise((resolve) => {
        if (
          info.file.type ==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          info.file.type == "application/xls" ||
          info.file.type ==
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
          info.file.type == "application/docx" ||
          info.file.type == "application/ppt" ||
          info.file.type == "application/pptx" ||
          info.file.type == "text/plain" ||
          info.file.type == "application/pdf"
        ) {
          files.push({ file: info.file, base: baseFile });
          message.success(`${info.file.name} File Uploaded`);
        } else {
          message.error(`${info.file.name} is not 'jpeg/png'`);
        }

        resolve(true);
      });
      setFil(files);
      onSuccess();
    } catch (err) {
      onError({ err });
    }
  };

  return (
    <div>
      <Dragger customRequest={customRequest} onDrop={customRequest} {...rest}>
        <p className="ant-upload-drag-icon">{props.btnIcon}</p>
        <p className="ant-upload-text">{props.innerText}</p>
      </Dragger>
    </div>
  );
};

export default CustomUploader;
