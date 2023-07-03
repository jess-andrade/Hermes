import Card from './Card';

export default function Home() {

  return (

    <div className={`p-10 flex items-center flex-col w-full gap-y-4  `}>
      <Card feeling='bad' title='titulo' description='descricao' />
      <Card feeling='good' title='titulo' description='descricao' />
      <Card feeling='bad' title='titulo' description='descricao' />
      <Card feeling='bad' title='titulo' description='descricao' />

    </div>
  );
}
