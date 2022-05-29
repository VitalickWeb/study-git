type BodyType = {
    title: string
}

export const Body = (props: BodyType) => {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
}