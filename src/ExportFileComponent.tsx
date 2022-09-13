import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setSpecies } from './store/slice'

const ExportFileComponent = () => {
    const treeData: any = useSelector((state: any) => state.counter.treeValue);
    const speciesData: any = useSelector<any>((state) => state.counter.Species);

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([`
        {
            "Species": ${JSON.stringify(speciesData)},
            "treeValue": ${JSON.stringify(speciesData)},
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