function Portfolio(props) {
  if (!props.src) {
    var noImage = "hidden";
  }
  if (!props.ctaText) {
    var noCTAText = "hidden";
  }

  return (
    <div class="bg-gray-900 pl-3">
      <div class="md:p-10 flex flex-col h-full">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img
            src={props.src}
            className={`${noImage} w-full shadow-sm `}
            alt={props.alt || ""}
          ></img>
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">{props.header}</div>
            <p className="text-gray-700 text-base">{props.description}</p>
            <a
              href={props.href}
              rel="noreferrer"
              target="_blank"
              className={`${noCTAText} mt-4  text-center bg-secondAccent text-white hover:bg-mainAccent transition-colors duration-200 rounded font-semibold py-2 px-4 inline-flex`}
            >
              {props.ctaText}
            </a>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioV2(props) {
  var tagPoints = null;
  if (props.tags) {
    tagPoints = props.tags.map((tag, index) => (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize"
      >
        {tag}
      </span>
    ));
  }

  if (!props.src) {
    var noImage = "hidden";
  }
  if (!props.ctaText) {
    var noCTAText = "hidden";
  }

  return (
    <div className="group rounded shadow-xl ring-4 ring-gray-200 hover:bg-secondAccent transition-colors duration-500 ">
      <h3 className="font-bold text-xl px-6 pt-2 group-hover:text-white duration-500 capitalize ">
        {" "}
        {props.header}
      </h3>
      <div className="py-2 px-6">
        <picture>
          <source srcSet={props.src?.webp} type="image/webp"></source>
          <img
            src={props.src?.png}
            alt={props.alt || ""}
            className={`${noImage} w-full p-2 group-hover:bg-gray-200`}
          ></img>
        </picture>
        <div className="py-2 px-5  group-hover:text-white first-letter:capitalize">
          <div
            dangerouslySetInnerHTML={{ __html: props.description }}
            className="lg:min-h-3.5"
          ></div>
        </div>
        <div className="py-2">
          <a
            href={props.href}
            rel="noreferrer"
            target="_blank"
            className={`${noCTAText} flex p-3 text-center bg-secondAccent text-white hover:bg-mainAccent group-hover:bg-yellowAccent group-hover:text-mainAccent transition-colors duration-200 rounded font-semibold`}
          >
            {props.ctaText}
          </a>
          <div className="pt-4 pb-2">{tagPoints}</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
