const FooterItems = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <div className="FooterProp">
        <a href="">{props.item}</a>
      </div>
    </div>
  );
};

export default FooterItems;
