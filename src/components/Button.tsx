interface Props {
    children: any
}

export default function(props: Props) {
    return (
        <>
            <button className="px-3 py-2 
                rounded-sm 
                bg-$color-primary 
                hover:bg-$color-primary-hover 
                text-white">
                    {props.children}
            </button>
        </>
    )
}