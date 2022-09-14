import { useSelector } from 'react-redux'

const ExportFileComponent = () => {
    const treeData: string = useSelector((state: any) => state.default.treeValue);
    const speciesData: any = useSelector<any>((state) => state.default.Species);

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([`
        {
            "Species": ${JSON.stringify(speciesData)},
            "treeValue": ${JSON.stringify(treeData)}
        }`], {type: 'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "schema.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }

    return(
        <div>
            <button onClick={downloadTxtFile}>Download Current Schema</button>
        </div>
    )
}

export default ExportFileComponent;