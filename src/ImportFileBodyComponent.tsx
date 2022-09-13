import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setSpecies } from './store/slice'

const ImportFileBodyComponent = () => {
    const count: any = useSelector<any>(state => state.counter.Species)
    const dispatch = useDispatch()

    // console.log(count)

    let fileReader: any;

    const handleFileRead = (e: any) => {
        const content = fileReader.result;
        const contentObject = JSON.parse(content);
        dispatch(setSpecies(contentObject));
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