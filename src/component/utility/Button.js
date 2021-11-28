// href="" - The url
// newTab - Open in new tab
function Button(props) {
  return (
    <div>
      <a href={props.href} target="_blank" rel="noreferrer">
        <div className="bg-white rounded-md mt-7 m-3 p-3 group shadow-lg text-center text-secondAccent underline font-medium hover:bg-grayAccent ">
          <i className="fas fa-file-pdf text-mainAccent group-hover:text-secondAccent transition-colors mr-3"></i>
          View my CV
        </div>
      </a>
    </div>
  );
}

export default Button;
