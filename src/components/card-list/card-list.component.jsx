import './card-list.styles.css';

export const CardList = (props) => {
    console.log(props);
    return(
        <div className="card-list">
            {props.monsters.map((monster) => (
                <h1 style={{ "background": "aqua" }} key={monster.id}>{monster.name}</h1>
            ))}
        </div>

    );
}