import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

export type CardProps = {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  imageUrl: string;
  preview: string;
  buttonContent?: string;
  prices?: string;
};
type CardComponentProps = {
  post: CardProps;
};
const CardComponent = ({ post }: CardComponentProps) => {
  const navigate = useNavigate();
  return (
    <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-betwee  ">
        <div className="flex-1 ">
          <div className="block mt-2 overflow-hidden text-ellipsis">
            <p className="text-xl font-semibold text-slate-700 text-center">{post.title}</p>
            <p className="mt-3 text-base text-slate-500 text-center line-clamp-2">{parse(post.preview)}</p>
            {post.prices ? <p className="mt-3 text-base text-slate-500 text-center">{post.prices}</p> : null}
          </div>
        </div>
      </div>
      <div className="pt-4 px-6 pb-12 flex justify-center">
        <button onClick={() => navigate(post.href)} className="bg-slate-500 px-4 py-2 rounded-lg text-white hover:bg-slate-700">
          {post.buttonContent || "learn more"}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
