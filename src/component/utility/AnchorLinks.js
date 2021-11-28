function AnchorLinks(props) {
  return (
    <div className="text-secondAccent font-medium text-lg">
      <i className="fa fa-angle-right "></i>
      <span className="list">{props.AnchorName || "PLACEHOLDER"} </span>
    </div>
  );
}

export default AnchorLinks;
