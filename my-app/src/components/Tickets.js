import { ticketData } from "../data";

export const Tickets = () => {
  return (
    <>
      <div className="stock-container">
        {ticketData.map((data, key) => {
          return (
            <div key={key}>
              {data.woStatusText +
                " , " +
                data.woNum +
                " ," +
                data.cancelable +
                ", " +
                data.creationDate+
                ", " +
                data.reopenable
                }
            </div>
          );
        })}
      </div>
    </>
  );
};