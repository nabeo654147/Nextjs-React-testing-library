import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type TitleProps = {
  title: string;
};

const Layout: React.FC<TitleProps> = ({ children, title = "Nextjs" }) => {
  return (
    <div className="flex justify-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen text-white">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Home
                </a>
              </Link>
              <Link href={"/blog-page"}>
                <a
                  data-testid="blog-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Blog
                </a>
              </Link>
              <Link href={"/comment-page"}>
                <a
                  data-testid="comment-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Comment
                </a>
              </Link>
              <Link href={"/context-page"}>
                <a
                  data-testid="context-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Context
                </a>
              </Link>
              <Link href={"/task-page"}>
                <a
                  data-testid="task-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Todos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>

      <footer className="flex flex-col items-center mt-[-6px] text-[#fff] bg-[#262c3a]">
        <span className="hidden items-center mt-9 mb-12 text-[8px] font-semibold sm:flex">
          CREATED BY<p className="ml-3 text-lg font-bold">?????? ??????</p>
        </span>
        <Link href={"/"}>
          <a className="hover:opacity-75">
            <Image
              src="/Corkboy.png"
              alt="Corkboy"
              height={130}
              width={110}
            ></Image>
          </a>
        </Link>
        <div className=" grid grid-cols-2 gap-4 mt-12 mb-6">
          <a
            href="https://twitter.com/nabeo654147"
            className="hover:opacity-75"
          >
            <Image
              src="/twitter.png"
              alt="twitter"
              height={17}
              width={17}
            ></Image>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100052345449049"
            className="hover:opacity-75"
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              height={17}
              width={17}
            ></Image>
          </a>
        </div>
        <span className="mb-5 text-xs">&copy; Corkboy</span>
      </footer>
    </div>
  );
};

export default Layout;
