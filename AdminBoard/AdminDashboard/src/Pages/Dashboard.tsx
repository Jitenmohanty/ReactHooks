import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../Components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userimg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users, docs" />
          <FaRegBell />
          <img src={userimg} alt="user" />
        </div>
        <section className="widgit-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>
        <section className="graphContainer">
          <div className="revinueChart">
            <h2>Revinue and Transactions</h2>
          </div>
          <div className="dashBoard">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CatagoryItems
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="WidgetItems">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown />
          </span>
        )}
      </div>
      <div
        className="widget-circle"
        style={{
          background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
        }}
      >
        <span
          style={{
            color,
          }}
        >
          {percent}%
        </span>
      </div>
    </article>
  );
};

interface catagoryProps {
  value: number;
  color: string;
  heading: string;
}

const CatagoryItems = ({ value, color, heading }: catagoryProps) => {
  return (
    <div className="catagoryItem">
      <h5>{heading}</h5>
      <div>
        <div style={{ backgroundColor: color, width: `${value}` }}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;
