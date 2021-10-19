interface ClassPageProps {
  item: any
}
const ClassPage = ({ item }: ClassPageProps): JSX.Element => {
  console.log('item', item);
  return (
    <div>
      {item.name}
    </div>
  );
};

export default ClassPage;
