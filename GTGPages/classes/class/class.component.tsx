interface ClassPageProps {
  item: any
}
const ClassPage = ({ item }: ClassPageProps): JSX.Element => {
  return (
    <div>
      {item.name}
    </div>
  );
};

export default ClassPage;