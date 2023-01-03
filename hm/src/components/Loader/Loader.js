import './Loader.css'
function Loader(props) {
    return <>
    {props.isLoading && (
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )}
    </>
}
export default Loader;
