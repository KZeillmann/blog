type VolumeControlProps = {
    gainNode: any;
}

const VolumeControl = (props: VolumeControlProps) => {
    const {
        gainNode
    } = props;
    const onVolumeChange = (event) => {
        gainNode.gain.value = event.target.value;
    };
    return (        
        <div className="left" >        
            <span>Volume: </span>
            <input type="range" min="0.0" max="1.0" step="0.01"
                value="0.5" list="volumes" name="volume" onChange={onVolumeChange} />
            <datalist id="volumes">
                <option value="0.0" label="Mute" />
                <option value="1.0" label="100%" />
            </datalist> 
        </div>
    );
}

export default VolumeControl;