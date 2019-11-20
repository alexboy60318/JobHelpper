import React,{Fragment,useState} from 'react'
import axios from 'axios';
export const FileUpload = () => {
    const[file,setFlie]=useState('');
    const[filename,setFilename]=useState('Choose File');
    const[uploadedFile,setUploadedFile]=useState({});
    const[message,setMessage]=useState('')
    const onChange = e =>{
        setFlie(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try{
            const res = await axios.post('/upload',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            const{ fileName,filePath} = res.data;
            setUploadedFile({fileName,filePath});

            setMessage('File uploaded');
        }catch(err){
            if(err.response.status===500){
                console.log('There is a problem with the server');

            }else{
                console.log(err.resopnse)
            }
        }
    }
    return (
        <div>
            <Fragment>
                <form onSubmit={onSubmit}>
                    <div className='custom-file'>
                        <input type='file' className='custom-file-input' id='cutomFile' onChange={onChange}/>
                        <label className='custom-file-label' htmlfor='customFile'>
                            {filename}
                        </label>
                        <input
                        type='subimt'
                        value='Upload'
                        className='btn btn-primary btn-block mt-4'
                        />
                    </div>
                </form>
                {uploadedFile ? <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <h3 className="text-center">{setUploadedFile.fileName}</h3>
                        <img style={{width:100}} src={uploadedFile.filepath} alt=""/>
                    </div>
                </div>:null}
            </Fragment>
        </div>
    ) 
}
export default FileUpload;