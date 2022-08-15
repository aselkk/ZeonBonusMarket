import css from "./styles.module.scss";


interface PropType {
    description: string[]
}


export const Description = ({description}: PropType) => {
   
    return (
        <div className={css.root}>
            {description.map((item, index) => (
                <p key={index} className={css.desc}>{item}</p>
            ))}
        </div>
    );
};