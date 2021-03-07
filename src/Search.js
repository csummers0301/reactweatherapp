import "./Search.css";

export default function Search() {
  return (
    <form className="City Search">
      <input type="text" placeholder="Enter a city" autoFocus="off" />
      <input type="submit" value="Search" className="Button" />
    </form>
  );
}
