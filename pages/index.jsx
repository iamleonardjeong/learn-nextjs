import Link from 'next/link';
import Header from '../components/Header';

const users = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Martin' },
  { id: 3, name: 'Danial' },
];

function Home() {
  return (
    <>
      <Header />
      <h1>About page</h1>
    </>
  );
}

export default Home;
