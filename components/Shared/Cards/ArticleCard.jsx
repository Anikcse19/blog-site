const ArticleCard = ({article}) => {
  return (
    <div
      key={article.id}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className="flex flex-col justify-between gap-2 w-[100%]  cursor-pointer rounded-md"
    >
      <div className=" w-[100%] ">
        <img className="w-[100%]" src={article?.img} alt="" />
      </div>

      <span className={`px-1 `}>{article?.title}</span>
      <span className="px-1 pb-1">{article?.schedule}</span>
    </div>
  );
};

export default ArticleCard;
