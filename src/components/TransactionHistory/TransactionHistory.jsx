import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.title}>
        <tr>
          <th className={css.titleName}>Type</th>
          <th className={css.titleName}>Amount</th>
          <th className={css.titleName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.element}>{item.type}</td>
              <td className={css.element}>{item.amount}</td>
              <td className={css.element}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
