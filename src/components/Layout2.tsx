import Home from './Home';
import Search from './Search';

export default function Layout2() {
  return (
    <div className={`flex flex-wrap flex-row justify-around w-full gap-10`}>
      <Home />
    </div>
  )
}