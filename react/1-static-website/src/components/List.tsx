// src/components/List.tsx

type ListProps = {
    items: { id: string; name: string; calories: number }[]
    category: string
}

export default function List({ items, category }: ListProps) {
    const listItems = items.map((item) => (
        <li key={item.id}>
            {item.name}
            <b>&nbsp; {item.calories}</b>
        </li>
    ))

    return (
        <>
            <div className='text-center max-w-xl mx-auto  mb-8'>
                <h3 className='border-2 text-white p-2 rounded-md'>
                    {category} List
                </h3>{' '}
                {/* Optionally use category to render a heading */}
                <ol className='list-none'>{listItems}</ol>
            </div>
        </>
    )
}

List.defaultProps = {
    category: 'Category',
}
