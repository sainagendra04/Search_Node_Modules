const EventComponent: React.FC = () => {
    const onchange = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }
    return (
        <div>
            <input onChange={onchange}/>
        </div>
    );
};

export default EventComponent;