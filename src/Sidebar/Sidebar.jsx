import Genre from './Genre/Genre'
import Price from './Price/Price'
import './Sidebar.css'

const Sidebar = ({ handleChange }) => {
    return (
      <>
        <section className="sidebar">
          <div className="logo-container">
            <a href="/">
              <h1 className="text-2xl">Manga Auction</h1>
            </a>
          </div>
          <Genre handleChange={handleChange} />
          <Price handleChange={handleChange} />
        </section>
      </>
    );
  };
export default Sidebar;