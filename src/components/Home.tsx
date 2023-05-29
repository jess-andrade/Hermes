import ItemsList from './ItemList';
import TrendCardGood from './TrendCardGood';
import TrendCardBad from './TrendCardBad';

export default function Home() {

  return (

    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      <TrendCardBad />
      <TrendCardGood />
      <TrendCardGood />
      <TrendCardBad />
      <TrendCardGood />
      {/* <ItemsList /> */}
    </div>
  );
}
