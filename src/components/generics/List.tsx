type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends { first: string }>({
  items,
  onClick
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map(item => {
        return (
          <div key={item.first} onClick={() => onClick(item)}>
            {item.first}
          </div>
        )
      })}
    </div>
  )
}
