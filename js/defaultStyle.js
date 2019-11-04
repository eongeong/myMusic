const defaultStyle = [
  ["*", {
      boxSizing: "border-box",
      margin: "0",
      padding: "0"
  }],
  ["a", {
      textDecoration: "none"
  }],
  ["input", {
      border: "none",
      outline: "none",
      backgroundColor: "transparent"
  }],
  ["button", {
      border: "none",
      outline: "none",
      backgroundColor: "transparent"
  }],
  ["[ellipsis]", {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
  }],
  ["[ellipsis2]", {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  }]
];
export default defaultStyle;