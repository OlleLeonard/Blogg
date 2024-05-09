import "./Skriv.css";

const Header = () => {
  return (
    <div className="write">
      <p>Hello</p>
      <form className="writeForum">
        <div>
          <p>
            Titel
            <input type="text" autoFocus={true}></input>
          </p>
        </div>
        <input
          className="writeForumText"
          placeholder="Berätta om ditt djur"
          type="text"
        ></input>

        <button className="publishButt">Dela</button>
      </form>
    </div>
  );
};

export default Header;
