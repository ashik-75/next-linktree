import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Link({ image, title, url }: Link) {
  return (
    <a
      target={"_blank"}
      href={url}
      className={`flex group items-center justify-between px-4 py-2 bg-white w-full rounded hover:scale-[102%] duration-75 transition-all gap-5 `}
    >
      <div>
        <img className="w-5 h-5 rounded" src={image} alt="" />
      </div>

      <div className="text-left w-[70%] md:w-[80%] text-gray-700 tracking-wide">
        {title}
      </div>

      <div className="w-fit p-2 bg-white rounded-full invisible group-hover:visible">
        <ArrowDownTrayIcon className="icon" />
      </div>
    </a>
  );
}

type Link = {
  id: number;
  title: string;
  url: string;
  image: string;
};

type linksType = {
  links: Link[];
};

function LinkList({ links }: linksType) {
  return (
    <div className="space-y-5 my-10">
      {links.map((link) => (
        <Link key={link.id} {...link} />
      ))}
    </div>
  );
}

export default LinkList;
