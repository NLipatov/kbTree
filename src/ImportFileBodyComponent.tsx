const ImportFileBodyComponent = () => {
    let fileReader: any;

    const handleFileRead = (e: any) => {
        const content = fileReader.result;
        console.log(content);
    }

    const handleFileChoosen = (file:any) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }

    return(
        <div>
            <input type="file"
            id="file"
            accept=".json"
            onChange={e => handleFileChoosen(e.target.files![0])} />
        </div>
    )
}

export default ImportFileBodyComponent;