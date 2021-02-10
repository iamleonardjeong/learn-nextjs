import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/post/[id]" as="/post/first">
            <a>First Post</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/post/[id]" as="/post/second">
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
