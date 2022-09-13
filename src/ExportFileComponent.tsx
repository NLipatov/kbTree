const ExportFileComponent = () => {
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([`
        {
            "Say_what":  "Hello world!",
        }`], {type: 'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "data.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }

    return(
        <div>
            <button onClick={downloadTxtFile}>Download Schema</button>
        </div>
    )
}

export default ExportFileComponent;