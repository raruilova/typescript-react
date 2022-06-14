interface Props {
  subs: Array<{
    nick: string;
    avatar: string;
    suMonths: number;
    description?: string;
  }>;
}

const List = ({ subs }: Props) => {
    const renderList = (): JSX.Element[] => {
        return subs.map((sub) => (
            <li key={sub.avatar}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.suMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          ))
    }
  return (
    <ul>
      {renderList()}
    </ul>
  );
};

export default List;
