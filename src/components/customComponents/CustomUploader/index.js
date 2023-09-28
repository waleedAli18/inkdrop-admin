import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const CustomUploader = (props) => {
    // const { setFil, fil } = props;
    const { setFil, fil, ...rest } = props;
    // const [docFile, setDocFile] = useState<string | { src: string } | null>();
    const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    let files = [...fil];
    const customRequest = async (info) => {
        const { onSuccess, onError, file } = info;
        let baseFile = await getBase64(file);
        console.log("info", info);
        try {
            await new Promise((resolve) => {
                if (info.file.type ==
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                    info.file.type == "application/xls" ||
                    info.file.type ==
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                    info.file.type == "application/docx" ||
                    info.file.type == "application/ppt" ||
                    info.file.type == "application/pptx" ||
                    info.file.type == "text/plain" ||
                    info.file.type == "application/pdf") {
                    files.push({ file: info.file, base: baseFile });
                    message.success(`${info.file.name} File Uploaded`);
                }
                else {
                    message.error(`${info.file.name} is not 'jpeg/png'`);
                }
                resolve(true);
            });
            setFil(files);
            onSuccess();
        }
        catch (err) {
            onError({ err });
        }
    };
    return (_jsx("div", { children: _jsxs(Dragger, { customRequest: customRequest, onDrop: customRequest, ...rest, children: [_jsx("p", { className: "ant-upload-drag-icon", children: props.btnIcon }), _jsx("p", { className: "ant-upload-text", children: props.innerText })] }) }));
};
export default CustomUploader;
